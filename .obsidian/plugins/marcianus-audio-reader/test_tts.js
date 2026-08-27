const http = require('http');

function fetchTTS(text, voice) {
    return new Promise((resolve, reject) => {
        const u = new URL("http://localhost:5005/tts");
        u.searchParams.append("text", text);
        u.searchParams.append("voice", voice);
        u.searchParams.append("rate", "+0%");
        u.searchParams.append("pitch", "+0Hz");
        const url = u.toString();
        console.log(`Fetching: ${url}`);
        
        http.get(url, (res) => {
            console.log(`Response status: ${res.statusCode}`);
            
            if (res.statusCode !== 200) {
                return reject(`Failed with status ${res.statusCode}`);
            }
            
            let size = 0;
            res.on('data', (chunk) => {
                size += chunk.length;
            });
            
            res.on('end', () => {
                console.log(`Finished receiving ${size} bytes of audio for: "${text.substring(0, 20)}..."`);
                resolve(size);
            });
            
            res.on('error', (err) => {
                console.error(`Request error:`, err);
                reject(err);
            });
        }).on('error', (err) => {
            console.error(`HTTP connection error:`, err);
            reject(err);
        });
    });
}

async function runTest() {
    try {
        console.log("=== TEST 1: First paragraph ===");
        const size1 = await fetchTTS("Guia de Estudo Teórico: Sistemas Distribuídos e Programação em Paralelo", "pt-PT-DuarteNeural");
        
        console.log("\n=== TEST 2: Second paragraph ===");
        const size2 = await fetchTTS("Neste guia, vamos abordar os conceitos fundamentais.", "pt-PT-DuarteNeural");
        
        console.log("\n=== TEST 3: Interrupted paragraph ===");
        // Simulate clicking 'next' or skipping, which aborts the current request
        const req = http.get(`http://localhost:5005/tts?text=Este+texto+sera+interrompido&voice=pt-PT-DuarteNeural`, (res) => {
            res.on('data', (chunk) => {
                console.log("Received chunk, now destroying socket to simulate abort...");
                res.destroy(); // Simulates changing Audio.src abruptly
            });
        });
        
        await new Promise(r => setTimeout(r, 1000));
        
        console.log("\n=== TEST 4: Next paragraph after interrupt ===");
        const size4 = await fetchTTS("E a leitura continua perfeitamente sem problemas.", "pt-PT-DuarteNeural");
        
        console.log("\nSUCCESS: End-to-end tests completed without errors.");
    } catch (e) {
        console.error("TEST FAILED:", e);
    }
}

runTest();
