const obsidian = require('obsidian');
const { Plugin, PluginSettingTab, Setting, Notice, MarkdownView } = obsidian;
const { spawn } = require('child_process');
const path = require('path');

const DEFAULT_SETTINGS = {
    voice: 'pt-PT-DuarteNeural',
    pitch: 1.0,
    rate: 1.0,
    paragraphDelay: 0,
    binauralEnabled: false,
    binauralVolume: 0.05,
    autoScroll: true
};

class MarcianusReaderPlugin extends Plugin {
    async onload() {
        console.log('Loading Marcianus Audiovisual Reader Pro (Edge TTS Edition)');
        await this.loadSettings();
        
        // Start Local Python TTS Server
        const serverPath = path.join(this.app.vault.adapter.basePath, '.obsidian', 'plugins', 'marcianus-audio-reader', 'tts_server.py');
        this.serverProcess = spawn('python', [serverPath, '5005'], { detached: true });
        this.serverProcess.unref();

        this.audioPlayer = null;
        this.paragraphs = [];
        this.currentIndex = 0;
        this.isPlaying = false;
        
        this.audioCtx = null;
        this.binauralOscillators = [];
        this.binauralGain = null;

        this.hudEl = null;
        this.visualizerInterval = null;
        
        // Asynchronously fetch available voices from our local proxy server
        this.availableVoices = [];
        this.fetchVoices();

        this.addSettingTab(new MarcianusSettingTab(this.app, this));

        this.addRibbonIcon('headphones', 'Ler Nota Atual (Audiovisual Pro)', () => {
            this.startReadingCurrentNote();
        });

        this.addCommand({
            id: 'start-reading-note',
            name: 'Ler Nota Atual de Ponta a Ponta',
            callback: () => this.startReadingCurrentNote()
        });

        this.addCommand({
            id: 'stop-reading',
            name: 'Parar Leitura Audiovisual',
            callback: () => this.stopReading()
        });
        
        this.createHUD();
    }

    onunload() {
        console.log('Unloading Marcianus Audiovisual Reader Pro');
        this.stopReading();
        if (this.hudEl) {
            this.hudEl.remove();
        }
        if (this.serverProcess) {
            try { this.serverProcess.kill(); } catch(e) {}
        }
    }

    async loadSettings() {
        this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
    }

    async saveSettings() {
        await this.saveData(this.settings);
    }
    
    async fetchVoices() {
        try {
            const resp = await fetch('http://localhost:5005/voices');
            if (resp.ok) {
                this.availableVoices = await resp.json();
            }
        } catch(e) {
            console.warn('Servidor Edge TTS local não encontrado. Certifique-se de iniciar o tts_server.py');
        }
    }

    startReadingCurrentNote() {
        const view = this.app.workspace.getActiveViewOfType(MarkdownView);
        if (!view) {
            new Notice("Nenhuma nota aberta para ler.");
            return;
        }

        const text = view.getViewData();
        if (!text.trim()) {
            new Notice("A nota está vazia.");
            return;
        }

        this.stopReading();
        this.paragraphs = this.parseMarkdown(text);
        
        if (this.paragraphs.length === 0) {
            new Notice("Nenhum texto legível encontrado.");
            return;
        }

        this.currentIndex = 0;
        this.showHUD();
        this.playParagraph(this.currentIndex, view);
    }

    parseMarkdown(md) {
        let text = md.replace(/^---[\s\S]+?---/, '');
        text = text.replace(/```[\s\S]*?```/g, ' [Bloco de código omitido] ');
        text = text.replace(/\[([^\]]+)\]\([^\)]+\)/g, '$1');
        text = text.replace(/[#*_>~-]/g, '');

        const rawParas = text.split(/\n\s*\n/);
        const validParas = rawParas.map(p => p.trim()).filter(p => p.length > 0);
        
        return validParas;
    }

    async playParagraph(index, view) {
        if (index >= this.paragraphs.length) {
            this.stopReading();
            new Notice("Leitura concluída.");
            return;
        }

        if (this.ttsSource) {
            try { this.ttsSource.stop(); } catch(e){}
            this.ttsSource.disconnect();
            this.ttsSource = null;
        }

        this.currentIndex = index;
        const textToRead = this.paragraphs[index];
        
        const url = new URL("http://localhost:5005/tts");
        url.searchParams.append("text", textToRead);
        url.searchParams.append("voice", this.settings.voice);
        url.searchParams.append("rate", this.settings.rate);
        url.searchParams.append("pitch", this.settings.pitch);

        this.isPlaying = true;
        this.updateHUDState();
        this.highlightParagraphInView(index, view);
        this.startVisualizer();
        if (this.settings.binauralEnabled) this.startBinauralBeats();

        try {
            if (!this.audioCtx) {
                const AudioContext = window.AudioContext || window.webkitAudioContext;
                this.audioCtx = new AudioContext();
            }
            if (this.audioCtx.state === 'suspended') {
                await this.audioCtx.resume();
            }

            const response = await fetch(url.toString());
            if (!response.ok) throw new Error("Server returned " + response.status);
            
            const arrayBuffer = await response.arrayBuffer();
            const audioBuffer = await this.audioCtx.decodeAudioData(arrayBuffer);

            if (!this.isPlaying) return; // Se o utilizador clicou em Parar enquanto descarregava

            this.ttsSource = this.audioCtx.createBufferSource();
            this.ttsSource.buffer = audioBuffer;
            this.ttsSource.connect(this.audioCtx.destination);
            
            this.ttsSource.onended = () => {
                if (this.isPlaying && this.currentIndex === index) {
                    if (this.settings.paragraphDelay > 0) {
                        setTimeout(() => this.playParagraph(this.currentIndex + 1, view), this.settings.paragraphDelay);
                    } else {
                        this.playParagraph(this.currentIndex + 1, view);
                    }
                }
            };

            this.ttsSource.start(0);
            this.updateHUDProgress();
            
        } catch (e) {
            console.error("Web Audio Play error:", e);
            new Notice("Erro ao carregar o áudio. O servidor Edge TTS está ativo?");
            this.stopReading();
        }
    }

    pauseReading() {
        if (this.isPlaying && this.audioCtx) {
            this.audioCtx.suspend();
            this.isPlaying = false;
            this.updateHUDState();
            this.stopVisualizer();
        }
    }

    resumeReading() {
        if (!this.isPlaying && this.audioCtx && this.ttsSource) {
            this.audioCtx.resume();
            this.isPlaying = true;
            this.updateHUDState();
            this.startVisualizer();
        } else if (!this.ttsSource && this.paragraphs.length > 0) {
            const view = this.app.workspace.getActiveViewOfType(MarkdownView);
            this.playParagraph(this.currentIndex, view);
        }
    }

    stopReading() {
        this.isPlaying = false;
        if (this.ttsSource) {
            try { this.ttsSource.stop(); } catch(e){}
            this.ttsSource.disconnect();
            this.ttsSource = null;
        }
        this.clearHighlight();
        this.hideHUD();
        this.stopVisualizer();
        this.stopBinauralBeats();
    }

    skip(direction) {
        const view = this.app.workspace.getActiveViewOfType(MarkdownView);
        if (!view) return;
        
        if (this.ttsSource) {
            try { this.ttsSource.stop(); } catch(e){}
        }
        
        let nextIndex = direction === 'forward' ? this.currentIndex + 1 : this.currentIndex - 1;
        if (nextIndex < 0) nextIndex = 0;
        if (nextIndex >= this.paragraphs.length) nextIndex = this.paragraphs.length - 1;
        
        setTimeout(() => {
            this.playParagraph(nextIndex, view);
        }, 50);
    }

    highlightParagraphInView(index, view) {
        if (!this.settings.autoScroll) return;
        
        // Pegamos um excerto do início do parágrafo para encontrar no DOM
        const textToFind = this.paragraphs[index].substring(0, 40).trim();
        if (!textToFind) return;

        // Procura em blocos de texto tanto do Live Preview (.cm-line) quanto do Reading Mode (p, li, h1-h6)
        const elements = view.containerEl.querySelectorAll('.cm-line, p, li, h1, h2, h3, h4, h5, h6');
        
        for (let el of elements) {
            if (el.innerText && el.innerText.includes(textToFind)) {
                // Remove highlight do elemento anterior
                if (this.activeHighlightEl) {
                    this.activeHighlightEl.classList.remove('marcianus-active-paragraph');
                }
                
                // Adiciona o brilho/highlight ao elemento atual
                el.classList.add('marcianus-active-paragraph');
                this.activeHighlightEl = el;
                
                // Auto-Scroll suave centralizando no ecrã (Padrão de teleprompters modernos)
                el.scrollIntoView({ behavior: 'smooth', block: 'center' });
                break;
            }
        }
    }

    clearHighlight() {
        if (this.activeHighlightEl) {
            this.activeHighlightEl.classList.remove('marcianus-active-paragraph');
            this.activeHighlightEl = null;
        }
    }

    createHUD() {
        this.hudEl = document.createElement('div');
        this.hudEl.className = 'marcianus-reader-hud hidden';
        
        this.hudEl.innerHTML = `
            <div class="marcianus-hud-header">
                <div class="marcianus-hud-title">🎧 Marcianus Reader Pro <span style="font-size:10px;color:#a0a0a0">(Neural)</span></div>
                <div class="marcianus-hud-close" id="mar-close">✕</div>
            </div>
            
            <div class="marcianus-visualizer" id="mar-visualizer">
                <div class="marcianus-bar"></div>
                <div class="marcianus-bar"></div>
                <div class="marcianus-bar"></div>
                <div class="marcianus-bar"></div>
                <div class="marcianus-bar"></div>
                <div class="marcianus-bar"></div>
                <div class="marcianus-bar"></div>
                <div class="marcianus-bar"></div>
                <div class="marcianus-bar"></div>
            </div>
            
            <div class="marcianus-progress-container">
                <div class="marcianus-time-info">
                    <span id="mar-progress-text">0%</span>
                    <span id="mar-index-text">0 / 0</span>
                </div>
                <div class="marcianus-progress-bar">
                    <div class="marcianus-progress-fill" id="mar-progress-fill"></div>
                </div>
            </div>

            <div class="marcianus-hud-controls">
                <button class="marcianus-btn" id="mar-prev" title="Anterior">⏮</button>
                <button class="marcianus-btn play-pause" id="mar-play-pause" title="Play/Pause">⏸</button>
                <button class="marcianus-btn" id="mar-next" title="Próximo">⏭</button>
                <button class="marcianus-btn" id="mar-stop" title="Parar">⏹</button>
            </div>
        `;
        
        document.body.appendChild(this.hudEl);
        
        document.getElementById('mar-close').onclick = () => this.stopReading();
        document.getElementById('mar-stop').onclick = () => this.stopReading();
        document.getElementById('mar-prev').onclick = () => this.skip('backward');
        document.getElementById('mar-next').onclick = () => this.skip('forward');
        
        document.getElementById('mar-play-pause').onclick = () => {
            if (this.isPlaying) {
                this.pauseReading();
            } else {
                this.resumeReading();
            }
        };
    }

    showHUD() {
        this.hudEl.classList.remove('hidden');
    }

    hideHUD() {
        this.hudEl.classList.add('hidden');
    }

    updateHUDState() {
        const btn = document.getElementById('mar-play-pause');
        if (btn) {
            btn.textContent = this.isPlaying ? '⏸' : '▶';
        }
    }

    updateHUDProgress() {
        if (this.paragraphs.length === 0) return;
        const perc = Math.round(((this.currentIndex) / this.paragraphs.length) * 100);
        
        document.getElementById('mar-progress-text').textContent = perc + '%';
        document.getElementById('mar-index-text').textContent = 'Parágrafo ' + (this.currentIndex + 1) + ' de ' + this.paragraphs.length;
        document.getElementById('mar-progress-fill').style.width = perc + '%';
    }

    startVisualizer() {
        if (this.visualizerInterval) clearInterval(this.visualizerInterval);
        const bars = document.querySelectorAll('.marcianus-bar');
        
        this.visualizerInterval = setInterval(() => {
            bars.forEach(bar => {
                const h = Math.floor(Math.random() * 20) + 4;
                bar.style.height = h + 'px';
            });
        }, 150);
    }

    stopVisualizer() {
        if (this.visualizerInterval) {
            clearInterval(this.visualizerInterval);
            this.visualizerInterval = null;
        }
        const bars = document.querySelectorAll('.marcianus-bar');
        bars.forEach(bar => {
            bar.style.height = '4px';
        });
    }

    startBinauralBeats() {
        if (!this.settings.binauralEnabled) return;
        if (!this.audioCtx) {
            const AudioContext = window.AudioContext || window.webkitAudioContext;
            this.audioCtx = new AudioContext();
        }
        if (this.audioCtx.state === 'suspended') {
            this.audioCtx.resume();
        }
        
        if (this.binauralOscillators.length > 0) return;

        this.binauralGain = this.audioCtx.createGain();
        this.binauralGain.gain.value = this.settings.binauralVolume;
        this.binauralGain.connect(this.audioCtx.destination);

        const baseFreq = 200;
        const beatFreq = 10; 

        const oscL = this.audioCtx.createOscillator();
        const pannerL = this.audioCtx.createStereoPanner();
        oscL.type = 'sine';
        oscL.frequency.value = baseFreq;
        pannerL.pan.value = -1;
        oscL.connect(pannerL);
        pannerL.connect(this.binauralGain);
        
        const oscR = this.audioCtx.createOscillator();
        const pannerR = this.audioCtx.createStereoPanner();
        oscR.type = 'sine';
        oscR.frequency.value = baseFreq + beatFreq;
        pannerR.pan.value = 1;
        oscR.connect(pannerR);
        pannerR.connect(this.binauralGain);

        const bufferSize = 2 * this.audioCtx.sampleRate;
        const noiseBuffer = this.audioCtx.createBuffer(1, bufferSize, this.audioCtx.sampleRate);
        const output = noiseBuffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) {
            output[i] = Math.random() * 2 - 1;
        }
        const noiseSource = this.audioCtx.createBufferSource();
        noiseSource.buffer = noiseBuffer;
        noiseSource.loop = true;
        
        const noiseFilter = this.audioCtx.createBiquadFilter();
        noiseFilter.type = 'lowpass';
        noiseFilter.frequency.value = 400;
        
        const noiseGain = this.audioCtx.createGain();
        noiseGain.gain.value = 0.05;
        
        noiseSource.connect(noiseFilter);
        noiseFilter.connect(noiseGain);
        noiseGain.connect(this.binauralGain);

        oscL.start();
        oscR.start();
        noiseSource.start();

        this.binauralOscillators = [oscL, oscR, noiseSource];
    }

    stopBinauralBeats() {
        if (this.binauralOscillators.length > 0) {
            this.binauralOscillators.forEach(node => {
                try { node.stop(); } catch(e){}
            });
            this.binauralOscillators = [];
        }
    }
}

class MarcianusSettingTab extends PluginSettingTab {
    constructor(app, plugin) {
        super(app, plugin);
        this.plugin = plugin;
    }

    display() {
        const {containerEl} = this;
        containerEl.empty();
        containerEl.createEl('h2', {text: 'Marcianus Audiovisual Reader Pro (Neural)'});

        new Setting(containerEl)
            .setName('Voz de Leitura (TTS Neural)')
            .setDesc('Selecione a voz de alta qualidade (Edge TTS).')
            .addDropdown(dropdown => {
                // Default favorites
                dropdown.addOption('pt-PT-DuarteNeural', 'Duarte (PT-PT - Masculino)');
                dropdown.addOption('pt-PT-RaquelNeural', 'Raquel (PT-PT - Feminino)');
                dropdown.addOption('pt-BR-FranciscaNeural', 'Francisca (PT-BR - Feminino)');
                dropdown.addOption('pt-BR-AntonioNeural', 'Antonio (PT-BR - Masculino)');
                dropdown.addOption('en-US-AriaNeural', 'Aria (EN-US - Feminino)');
                
                // Add dynamically fetched voices
                this.plugin.availableVoices.forEach(v => {
                    if (!['pt-PT-DuarteNeural', 'pt-PT-RaquelNeural', 'pt-BR-FranciscaNeural', 'pt-BR-AntonioNeural', 'en-US-AriaNeural'].includes(v.ShortName)) {
                        dropdown.addOption(v.ShortName, v.ShortName);
                    }
                });

                dropdown.setValue(this.plugin.settings.voice)
                .onChange(async (value) => {
                    this.plugin.settings.voice = value;
                    await this.plugin.saveSettings();
                });
            });

        new Setting(containerEl)
            .setName('Velocidade (Rate)')
            .setDesc('Velocidade da leitura (0.5x a 2.0x).')
            .addSlider(slider => slider
                .setLimits(0.5, 2.0, 0.05)
                .setValue(this.plugin.settings.rate)
                .setDynamicTooltip()
                .onChange(async (value) => {
                    this.plugin.settings.rate = value;
                    await this.plugin.saveSettings();
                }));
                
        new Setting(containerEl)
            .setName('Tom de Voz (Pitch)')
            .setDesc('Ajuste a tonalidade da voz (0.5 grave a 1.5 agudo).')
            .addSlider(slider => slider
                .setLimits(0.5, 1.5, 0.05)
                .setValue(this.plugin.settings.pitch)
                .setDynamicTooltip()
                .onChange(async (value) => {
                    this.plugin.settings.pitch = value;
                    await this.plugin.saveSettings();
                }));
                
        new Setting(containerEl)
            .setName('Pausa entre Parágrafos')
            .setDesc('Pausa em milissegundos entre parágrafos (0 a 1000ms). Para leitura totalmente fluída, deixe em 0.')
            .addSlider(slider => slider
                .setLimits(0, 1000, 50)
                .setValue(this.plugin.settings.paragraphDelay)
                .setDynamicTooltip()
                .onChange(async (value) => {
                    this.plugin.settings.paragraphDelay = value;
                    await this.plugin.saveSettings();
                }));
                
        new Setting(containerEl)
            .setName('Auto-Scroll')
            .setDesc('Acompanhar o texto no editor automaticamente.')
            .addToggle(toggle => toggle
                .setValue(this.plugin.settings.autoScroll)
                .onChange(async (value) => {
                    this.plugin.settings.autoScroll = value;
                    await this.plugin.saveSettings();
                }));

        new Setting(containerEl)
            .setName('Som Ambiente (Ondas Binaurais)')
            .setDesc('Ativa ruído castanho/frequência de 10Hz para hiperfoco.')
            .addToggle(toggle => toggle
                .setValue(this.plugin.settings.binauralEnabled)
                .onChange(async (value) => {
                    this.plugin.settings.binauralEnabled = value;
                    await this.plugin.saveSettings();
                }));
                
        new Setting(containerEl)
            .setName('Volume do Som Ambiente')
            .setDesc('Ajusta o volume do som de fundo.')
            .addSlider(slider => slider
                .setLimits(0.01, 0.3, 0.01)
                .setValue(this.plugin.settings.binauralVolume)
                .setDynamicTooltip()
                .onChange(async (value) => {
                    this.plugin.settings.binauralVolume = value;
                    if (this.plugin.binauralGain) {
                        this.plugin.binauralGain.gain.value = value;
                    }
                    await this.plugin.saveSettings();
                }));
    }
}

module.exports = MarcianusReaderPlugin;
