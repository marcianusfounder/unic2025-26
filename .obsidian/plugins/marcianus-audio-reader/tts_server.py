import sys
import asyncio
import edge_tts
from aiohttp import web

async def handle_tts(request):
    text = request.query.get("text", "")
    voice = request.query.get("voice", "pt-PT-DuarteNeural")
    
    rate_val = request.query.get("rate", "+0%")
    pitch_val = request.query.get("pitch", "+0Hz")
    
    # Handle numeric legacy values from old plugin settings
    try:
        if rate_val.replace('.', '', 1).isdigit() or (rate_val.startswith('-') and rate_val[1:].replace('.', '', 1).isdigit()):
            r = float(rate_val)
            pct = int((r - 1.0) * 100)
            rate_val = f"+{pct}%" if pct >= 0 else f"{pct}%"
    except:
        rate_val = "+0%"
        
    try:
        if pitch_val.replace('.', '', 1).isdigit() or (pitch_val.startswith('-') and pitch_val[1:].replace('.', '', 1).isdigit()):
            p = float(pitch_val)
            pct = int((p - 1.0) * 100)
            pitch_val = f"+{pct}Hz" if pct >= 0 else f"{pct}Hz"
    except:
        pitch_val = "+0Hz"
        
    if not rate_val.endswith('%'):
        rate_val = "+0%"
    if not pitch_val.endswith('Hz'):
        pitch_val = "+0Hz"

    if not text:
        return web.Response(status=400, text="Missing text")

    communicate = edge_tts.Communicate(text, voice, rate=rate_val, pitch=pitch_val)

    response = web.StreamResponse(
        status=200,
        reason='OK',
        headers={
            'Content-Type': 'audio/mpeg',
            'Access-Control-Allow-Origin': '*'
        }
    )
    
    await response.prepare(request)
    
    try:
        async for chunk in communicate.stream():
            if chunk["type"] == "audio":
                await response.write(chunk["data"])
        await response.write_eof()
    except Exception as e:
        # Client disconnected or stream failed, ignore gracefully
        pass
        
    return response

async def handle_voices(request):
    voices = await edge_tts.list_voices()
    filtered = [{"Name": v["Name"], "ShortName": v["ShortName"], "Locale": v["Locale"]} for v in voices]
    import json
    return web.Response(
        text=json.dumps(filtered),
        content_type='application/json',
        headers={'Access-Control-Allow-Origin': '*'}
    )

app = web.Application()
app.add_routes([
    web.get('/tts', handle_tts),
    web.get('/voices', handle_voices)
])

if __name__ == '__main__':
    port = int(sys.argv[1]) if len(sys.argv) > 1 else 5005
    print(f"Starting Edge-TTS Server on port {port}")
    web.run_app(app, port=port, print=None)
