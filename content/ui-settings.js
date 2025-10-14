// UI/UX SETTINGS CONFIGURATION
// File: content/ui-settings.js

const uiSettings = {
    themes: {
        Purple: {
            name: { id: "Ungu Hitam", en: "Dark Purple" },
            colors: {
                primary: "#a855f7",
                secondary: "#ec4899",
                bgMain: "linear-gradient(135deg, #0c0c2b 0%, #1a1a3e 50%, #2d1b5c 100%)",
                bgCard: "linear-gradient(135deg, rgba(0, 0, 0, 0.3), rgba(26, 26, 62, 0.3))",
                bgDialogue: "linear-gradient(135deg, rgba(0, 0, 0, 0.9), rgba(26, 26, 62, 0.9))",
                bgHeader: "rgba(12, 12, 43, 0.9)",
                bgModal: "linear-gradient(135deg, #1a1a3e, #2d1b5c)",
                text: "#ffffff"
            }
        },
        Blue: {
            name: { id: "Biru Gelap", en: "Dark Blue" },
            colors: {
                primary: "#3b82f6",
                secondary: "#60a5fa",
                bgMain: "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)",
                bgCard: "linear-gradient(135deg, rgba(15, 23, 42, 0.5), rgba(30, 41, 59, 0.5))",
                bgDialogue: "linear-gradient(135deg, rgba(15, 23, 42, 0.95), rgba(30, 41, 59, 0.95))",
                bgHeader: "rgba(15, 23, 42, 0.9)",
                bgModal: "linear-gradient(135deg, #1e293b, #334155)",
                text: "#f1f5f9"
            }
        },
        Dark: {
            name: { id: "Hitam Hijau", en: "Dark Grean" },
            colors: {
                primary: "#10b981",
                secondary: "#34d399",
                bgMain: "linear-gradient(135deg, #000000 0%, #0a0a0a 50%, #1a1a1a 100%)",
                bgCard: "linear-gradient(135deg, rgba(10, 10, 10, 0.5), rgba(26, 26, 26, 0.5))",
                bgDialogue: "linear-gradient(135deg, rgba(0, 0, 0, 0.95), rgba(10, 10, 10, 0.95))",
                bgHeader: "rgba(0, 0, 0, 0.9)",
                bgModal: "linear-gradient(135deg, #0a0a0a, #1a1a1a)",
                text: "#f0fdf4"
            }
        },

        Lavender: {
            name: { id: "Lavender", en: "Lavender" },
            colors: {
                primary: "#a78bfa",
                secondary: "#c084fc",
                bgMain: "linear-gradient(135deg, #faf5ff 0%, #f3e8ff 50%, #e9d5ff 100%)",
                bgCard: "linear-gradient(135deg, rgba(255, 255, 255, 0.8), rgba(250, 245, 255, 0.8))",
                bgDialogue: "linear-gradient(135deg, rgba(252, 155, 245, 0.9), rgba(245, 182, 247, 0.9))",
                bgHeader: "#581c87",
                bgModal: "linear-gradient(135deg, #ffffff, #faf5ff)",
                text: "#581c87"
            }
        },

        // TAMPLATE TEMA
        // Mint: {
        //     name: { id: "Mint", en: "Mint" },
        //     colors: {
        //         primary: "#10b981",
        //         secondary: "#34d399",
        //         bgMain: "linear-gradient(135deg, #f0fdf4 0%, #dcfce7 50%, #bbf7d0 100%)",
        //         bgCard: "linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(52, 211, 153, 0.1))",
        //         bgDialogue: "linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(240, 253, 244, 0.95))",
        //         bgHeader: "rgba(255, 255, 255, 0.9)",
        //         bgModal: "linear-gradient(135deg, #f0fdf4, #dcfce7)",
        //         text: "#064e3b"
        //     }
        // },
        // Ocean: {
        //     name: { id: "Biru Laut", en: "Ocean" },
        //     colors: {
        //         primary: "#0ea5e9",
        //         secondary: "#38bdf8",
        //         bgMain: "linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 50%, #bae6fd 100%)",
        //         bgCard: "linear-gradient(135deg, rgba(14, 165, 233, 0.1), rgba(56, 189, 248, 0.1))",
        //         bgDialogue: "linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(240, 249, 255, 0.95))",
        //         bgHeader: "rgba(255, 255, 255, 0.9)",
        //         bgModal: "linear-gradient(135deg, #f0f9ff, #e0f2fe)",
        //         text: "#0c4a6e"
        //     }
        // }
    },
    
    layouts: {
        centered: {
            name: { id: "Tengah (Default)", en: "Centered (Default)" },
            dialoguePosition: "bottom",
            characterPosition: "center"
        },
        sideBySide: {
            name: { id: "Samping Kanan", en: "Side by Side" },
            dialoguePosition: "right",
            characterPosition: "left"
        }
    },
    
    animations: {
        smooth: { name: { id: "Halus (Default)", en: "Smooth (Default)" }, speed: "0.5s" },
        fast: { name: { id: "Cepat", en: "Fast" }, speed: "0.2s" },
        slow: { name: { id: "Lambat", en: "Slow" }, speed: "0.8s" },
        none: { name: { id: "Tanpa Animasi", en: "No Animation" }, speed: "0s" }
    },
    
    fontSizes: {
        small: { name: { id: "Kecil", en: "Small" }, dialogue: "14px", title: "20px" },
        medium: { name: { id: "Sedang (Default)", en: "Medium (Default)" }, dialogue: "16px", title: "24px" },
        large: { name: { id: "Besar", en: "Large" }, dialogue: "18px", title: "28px" },
        xlarge: { name: { id: "Sangat Besar", en: "Extra Large" }, dialogue: "20px", title: "32px" }
    },

    audioSettings: {
        musicEnabled: false,
        sfxEnabled: true,
        volume: 30
    },
    
    language: 'id'
};

// Default Settings
const defaultSettings = {
    theme: 'Purple',
    layout: 'centered',
    animation: 'smooth',
    fontSize: 'medium',
    particlesEnabled: true,
    blurBackground: true,

    musicEnabled: false,  
    sfxEnabled: true,    
    volume: 30,           
    language: 'id'        
};

// Load or Initialize Settings
function loadSettings() {
    const saved = localStorage.getItem('portfolioSettings');
    return saved ? JSON.parse(saved) : { ...defaultSettings };
}

function saveSettings(settings) {
    localStorage.setItem('portfolioSettings', JSON.stringify(settings));
}

// Apply Settings to DOM
function applySettings(settings) {
    const theme = uiSettings.themes[settings.theme];
    const layout = uiSettings.layouts[settings.layout];
    const animation = uiSettings.animations[settings.animation];
    const fontSize = uiSettings.fontSizes[settings.fontSize];
    
    // Apply Theme Colors - SEMUA ELEMEN
    document.body.style.background = theme.colors.bgMain;
    document.body.style.color = theme.colors.text;
    document.documentElement.style.setProperty('--primary-color', theme.colors.primary);
    document.documentElement.style.setProperty('--secondary-color', theme.colors.secondary);
    document.documentElement.style.setProperty('--bg-main', theme.colors.bgMain);
    document.documentElement.style.setProperty('--bg-card', theme.colors.bgCard);
    document.documentElement.style.setProperty('--bg-dialogue', theme.colors.bgDialogue);
    document.documentElement.style.setProperty('--bg-header', theme.colors.bgHeader);
    document.documentElement.style.setProperty('--bg-modal', theme.colors.bgModal);
    document.documentElement.style.setProperty('--text-color', theme.colors.text);
    
    // Apply Animation Speed
    document.documentElement.style.setProperty('--animation-speed', animation.speed);
    
    // Apply Font Sizes
    document.documentElement.style.setProperty('--dialogue-font', fontSize.dialogue);
    document.documentElement.style.setProperty('--title-font', fontSize.title);
    
    // Apply Layout
    applyLayout(layout);
    
    // Toggle Particles
    document.getElementById('particles').style.display = settings.particlesEnabled ? 'block' : 'none';
    
    // Toggle Blur
    if (settings.blurBackground) {
        document.querySelector('.character-area')?.style.setProperty('backdrop-filter', 'blur(5px)');
    } else {
        document.querySelector('.character-area')?.style.removeProperty('backdrop-filter');
    }

    // Apply Audio Settings
    const music = document.getElementById('bgMusic');
    if (music) {
        music.volume = settings.volume / 100;
        if (settings.musicEnabled) {
            music.play().catch(() => {});
        } else {
            music.pause();
        }
    }
    config.musicEnabled = settings.musicEnabled;
    config.sfxEnabled = settings.sfxEnabled;
    
    // Apply Language
    config.currentLanguage = settings.language;
    updateLanguage();
}

function applyLayout(layout) {
    const gameScreen = document.querySelector('.game-screen');
    const dialogueArea = document.querySelector('.dialogue-area');
    const characterArea = document.querySelector('.character-area');
    
    if (!gameScreen || !dialogueArea || !characterArea) return;
    
    // Reset
    gameScreen.style.flexDirection = 'column';
    dialogueArea.style.position = 'absolute';
    dialogueArea.style.width = '';
    dialogueArea.style.height = '';
    dialogueArea.style.bottom = '';
    dialogueArea.style.right = '';
    dialogueArea.style.left = '';
    characterArea.style.flex = '';
    
    switch(layout.dialoguePosition) {
        case 'right':
            gameScreen.style.flexDirection = 'row';
            dialogueArea.style.position = 'relative';
            dialogueArea.style.width = '40%';
            dialogueArea.style.height = 'auto';
            characterArea.style.flex = '1';
            break;
        default: // bottom
            dialogueArea.style.bottom = '0';
            dialogueArea.style.left = '0';
            dialogueArea.style.right = '0';
            break;
    }
}

// Create Settings Modal HTML
function createSettingsModal() {
    const modalHTML = `
        <div class="modal" id="settingsModal">
            <div class="modal-content" style="width: 70%; max-width: 800px;">
                <div class="modal-header">
                    <h2 class="modal-title" data-lang="settings-title">⚙️ Pengaturan</h2>
                    <span class="close-btn" onclick="closeModal('settings')">&times;</span>
                </div>
                <div class="modal-body">


                <div class="settings-section">
                        <h3 data-lang="settings-audio">🎵 Audio</h3>
                        <div class="settings-toggles">
                            <label class="toggle-label">
                                <input type="checkbox" id="musicToggle" onchange="toggleMusicSetting(this.checked)">
                                <span data-lang="settings-music">Musik Latar</span>
                            </label>
                            <label class="toggle-label">
                                <input type="checkbox" id="sfxToggle" onchange="toggleSFXSetting(this.checked)">
                                <span data-lang="settings-sfx">Efek Suara</span>
                            </label>
                            <label class="toggle-label" style="flex-direction: column; align-items: stretch; gap: 8px;">
                                <span data-lang="settings-volume">Volume Musik</span>
                                <input type="range" class="volume-slider" id="volumeSettingSlider" min="0" max="100" value="30" 
                                       oninput="updateVolumeSetting(this.value)" style="width: 100%;">
                                <span style="text-align: center; font-size: 14px; opacity: 0.8;" id="volumeSettingText">30%</span>
                            </label>
                        </div>
                    </div>
                    
                    <div class="settings-section">
                        <h3 data-lang="settings-language">🌐 Bahasa / Language</h3>
                        <div class="settings-grid">
                            <div class="settings-option" id="langID" onclick="changeLanguageSetting('id')">
                                <span>Bahasa Indonesia</span>
                            </div>
                            <div class="settings-option" id="langEN" onclick="changeLanguageSetting('en')">
                                <span>English</span>
                            </div>
                        </div>
                    </div>


                    <div class="settings-section">
                        <h3 data-lang="settings-theme">🎨 Tema</h3>
                        <div class="settings-grid" id="themeOptions"></div>
                    </div>
                    
                    <div class="settings-section">
                        <h3 data-lang="settings-layout">📐 Tata Letak</h3>
                        <div class="settings-grid" id="layoutOptions"></div>
                    </div>
                    
                    <div class="settings-section">
                        <h3 data-lang="settings-animation">✨ Kecepatan Animasi</h3>
                        <div class="settings-grid" id="animationOptions"></div>
                    </div>
                    
                    <div class="settings-section">
                        <h3 data-lang="settings-font">🔤 Ukuran Font</h3>
                        <div class="settings-grid" id="fontOptions"></div>
                    </div>
                    
                    <div class="settings-section">
                        <h3 data-lang="settings-effects">🌟 Efek Visual</h3>
                        <div class="settings-toggles">
                            <label class="toggle-label">
                                <input type="checkbox" id="particlesToggle" onchange="toggleParticles(this.checked)">
                                <span data-lang="settings-particles">Efek Partikel</span>
                            </label>
                            <label class="toggle-label">
                                <input type="checkbox" id="blurToggle" onchange="toggleBlur(this.checked)">
                                <span data-lang="settings-blur">Blur Latar Belakang</span>
                            </label>
                        </div>
                    </div>
                    
                    <div class="settings-actions">
                        <button class="settings-btn reset-btn" onclick="resetSettings()" data-lang="settings-reset">
                            🔄 Reset ke Default
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', modalHTML);
    renderSettingsOptions();
}

function renderSettingsOptions() {
    const currentSettings = loadSettings();
    const lang = config.currentLanguage;
    
    // Render Theme Options
    const themeContainer = document.getElementById('themeOptions');
    themeContainer.innerHTML = Object.keys(uiSettings.themes).map(key => {
        const theme = uiSettings.themes[key];
        const isActive = currentSettings.theme === key;
        return `
            <div class="settings-option ${isActive ? 'active' : ''}" onclick="changeSetting('theme', '${key}')">
                <div class="theme-preview" style="background: ${theme.colors.bgMain}; border: 2px solid ${theme.colors.primary}"></div>
                <span>${theme.name[lang]}</span>
            </div>
        `;
    }).join('');
    
    // Render Layout Options
    const layoutContainer = document.getElementById('layoutOptions');
    layoutContainer.innerHTML = Object.keys(uiSettings.layouts).map(key => {
        const layout = uiSettings.layouts[key];
        const isActive = currentSettings.layout === key;
        return `
            <div class="settings-option ${isActive ? 'active' : ''}" onclick="changeSetting('layout', '${key}')">
                <span>${layout.name[lang]}</span>
            </div>
        `;
    }).join('');
    
    // Render Animation Options
    const animContainer = document.getElementById('animationOptions');
    animContainer.innerHTML = Object.keys(uiSettings.animations).map(key => {
        const anim = uiSettings.animations[key];
        const isActive = currentSettings.animation === key;
        return `
            <div class="settings-option ${isActive ? 'active' : ''}" onclick="changeSetting('animation', '${key}')">
                <span>${anim.name[lang]}</span>
            </div>
        `;
    }).join('');
    
    // Render Font Options
    const fontContainer = document.getElementById('fontOptions');
    fontContainer.innerHTML = Object.keys(uiSettings.fontSizes).map(key => {
        const font = uiSettings.fontSizes[key];
        const isActive = currentSettings.fontSize === key;
        return `
            <div class="settings-option ${isActive ? 'active' : ''}" onclick="changeSetting('fontSize', '${key}')">
                <span>${font.name[lang]}</span>
            </div>
        `;
    }).join('');


    const settings = loadSettings();
    
    // Set Toggles
    document.getElementById('particlesToggle').checked = settings.particlesEnabled;
    document.getElementById('blurToggle').checked = settings.blurBackground;
    
    // Audio - pakai settings yang tersimpan
    document.getElementById('musicToggle').checked = settings.musicEnabled;
    document.getElementById('sfxToggle').checked = settings.sfxEnabled;
    document.getElementById('volumeSettingSlider').value = settings.volume;
    document.getElementById('volumeSettingText').textContent = settings.volume + '%';
    
    // Language
    document.getElementById('langID').classList.toggle('active', settings.language === 'id');
    document.getElementById('langEN').classList.toggle('active', settings.language === 'en');
}

function changeSetting(key, value) {
    const settings = loadSettings();
    settings[key] = value;
    saveSettings(settings);
    applySettings(settings);
    renderSettingsOptions();
}

function toggleParticles(enabled) {
    const settings = loadSettings();
    settings.particlesEnabled = enabled;
    saveSettings(settings);
    applySettings(settings);
}

function toggleBlur(enabled) {
    const settings = loadSettings();
    settings.blurBackground = enabled;
    saveSettings(settings);
    applySettings(settings);
}

function resetSettings() {
    if (confirm(config.currentLanguage === 'en' ? 'Reset all settings to default?' : 'Reset semua pengaturan ke default?')) {
        saveSettings(defaultSettings);
        applySettings(defaultSettings);
        renderSettingsOptions();
    }
}

// AUDIO SETTINGS
// AUDIO SETTINGS - Sinkron dengan app.js
function toggleMusicSetting(enabled) {
    if (enabled) {
        // Coba play musik
        const music = document.getElementById('bgMusic');
        music.play().then(() => {
            config.musicEnabled = true;
            const settings = loadSettings();
            settings.musicEnabled = true;
            saveSettings(settings);
            updateAudioUI();
        }).catch(err => {
            console.log('Music blocked by browser');
            // Jika diblok, revert checkbox
            document.getElementById('musicToggle').checked = false;
            config.musicEnabled = false;
            const settings = loadSettings();
            settings.musicEnabled = false;
            saveSettings(settings);
        });
    } else {
        // Pause musik
        const music = document.getElementById('bgMusic');
        music.pause();
        config.musicEnabled = false;
        const settings = loadSettings();
        settings.musicEnabled = false;
        saveSettings(settings);
        updateAudioUI();
    }
}

function toggleSFXSetting(enabled) {
    const settings = loadSettings();
    settings.sfxEnabled = enabled;
    saveSettings(settings);
    config.sfxEnabled = enabled;
    updateAudioUI();
}

function updateVolumeSetting(value) {
    const music = document.getElementById('bgMusic');
    const settings = loadSettings();
    
    music.volume = value / 100;
    settings.volume = parseInt(value);
    saveSettings(settings);
    
    // Update semua UI
    updateAudioUI();
}

// LANGUAGE SETTING
function changeLanguageSetting(lang) {
    const settings = loadSettings();
    settings.language = lang;
    saveSettings(settings);
    
    config.currentLanguage = lang;
    updateLanguage();
    
    // Re-render settings
    renderSettingsOptions();
    
    // Re-render active dialogue
    const currentDialogue = document.getElementById('dialogueText')?.dataset.dialogueKey;
    if (currentDialogue && dialogues[currentDialogue]) {
        handleChoice(currentDialogue);
    }
    
    // Update active lang button
    document.getElementById('langID').classList.toggle('active', lang === 'id');
    document.getElementById('langEN').classList.toggle('active', lang === 'en');
}

// Add to UI translations
if (typeof uiTranslations !== 'undefined') {
    uiTranslations.en = {
        ...uiTranslations.en,
        'nav-settings': '⚙️ Settings',
        'settings-title': 'Settings',
        'settings-theme': '🎨 Theme',
        'settings-layout': '📐 Layout',
        'settings-animation': '✨ Animation Speed',
        'settings-font': '🔤 Font Size',
        'settings-effects': '🌟 Visual Effects',
        'settings-particles': 'Particle Effects',
        'settings-blur': 'Background Blur',
        'settings-reset': '🔄 Reset to Default',
        'nav-settings': '⚙️ Settings',
        'settings-audio': '🎵 Audio',
        'settings-music': 'Background Music',
        'settings-sfx': 'Sound Effects',
        'settings-volume': 'Music Volume',
        'settings-language': '🌐 Language'
    };
    
    uiTranslations.id = {
        ...uiTranslations.id,
        'nav-settings': '⚙️ Pengaturan',
        'settings-title': 'Pengaturan',
        'settings-theme': '🎨 Tema',
        'settings-layout': '📐 Tata Letak',
        'settings-animation': '✨ Kecepatan Animasi',
        'settings-font': '🔤 Ukuran Font',
        'settings-effects': '🌟 Efek Visual',
        'settings-particles': 'Efek Partikel',
        'settings-blur': 'Blur Latar Belakang',
        'settings-reset': '🔄 Reset ke Default',
        'nav-settings': '⚙️ Pengaturan',
        'settings-audio': '🎵 Audio',
        'settings-music': 'Musik Latar',
        'settings-sfx': 'Efek Suara',
        'settings-volume': 'Volume Musik',
        'settings-language': '🌐 Bahasa'
    };
}