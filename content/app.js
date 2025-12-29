// APP LOGIC - content/app.js

const config = {
    currentLanguage: 'id',
    musicEnabled: false,
    sfxEnabled: true,
    currentFilter: 'all',
    typingSpeed: 20 // default speed
};

window.onload = function() {
    console.log('App loaded');
    
    createSettingsModal();
    const settings = loadSettings();
    applySettings(settings);
    
    createParticles();
    updateLanguage();
    
    // Setup musik
    if (audioConfig && audioConfig.background.main) {
        const music = document.getElementById('bgMusic');
        music.src = audioConfig.background.main;
        music.volume = settings.volume / 100;
        
        // Coba autoplay
        music.play().then(() => {
            console.log('Autoplay success!');
            config.musicEnabled = true;
            settings.musicEnabled = true;
            saveSettings(settings);
        }).catch(err => {
            console.log('Autoplay blocked - music OFF by default');
            config.musicEnabled = false;
            settings.musicEnabled = false;
            saveSettings(settings);
        });
        // Update UI
        setTimeout(() => updateAudioUI(), 500);
    }

    // URL Routing check
    checkURLParams();
    
    const firstDialogue = Object.keys(dialogues)[0];
    setTimeout(() => handleChoice(firstDialogue), 1000);

    // Add resize listener for layout adjustment
    window.addEventListener('resize', () => {
        const settings = loadSettings();
        const layout = uiSettings.layouts[settings.layout];
        applyLayout(layout);
    });
};

// URL ROUTING 
function updateURL(modal = null, type = null, id = null) {
    const params = new URLSearchParams(window.location.search);
    
    if (modal) {
        params.set('modal', modal);
    }
    if (type && type !== 'all') {
        params.set('type', type);
    } else {
        params.delete('type');
    }
    
    let newURL = window.location.pathname;
    const paramString = params.toString();
    
    if (paramString) {
        newURL += '?' + paramString;
    }
    
    if (id) {
        newURL += '#' + id;
    }
    
    window.history.pushState({}, '', newURL);
}

function checkURLParams() {
    const urlParams = new URLSearchParams(window.location.search);
    const hash = window.location.hash.substring(1);
    
    const modal = urlParams.get('modal');
    const type = urlParams.get('type');
    const id = urlParams.get('id') || hash;
    
    console.log('Checking URL params:', { modal, type, id }); // Debug log
    
    if (modal || id) {
        if (modal === 'profile') {
            console.log('Opening profile modal'); // Debug
            showModal('profile');
        } 
        else if (modal === 'experience' || modal === 'projects') {
            console.log('Opening experience modal'); // Debug
            showModal('experience');
            
            if (type && type !== 'all') {
                config.currentFilter = type;
                setTimeout(() => {
                    document.querySelectorAll('.nav-btn').forEach(b => {
                        b.classList.remove('active');
                        const onclick = b.getAttribute('onclick');
                        if (onclick && onclick.includes(`'${type}'`)) {
                            b.classList.add('active');
                        }
                    });
                    renderExperienceCards();
                }, 200);
            }
            
            if (id) {
                setTimeout(() => {
                    showExperienceDetail(id);
                }, 400);
            }
        }
    }
}

// PARTICLES - dengan dynamic color
function createParticles() {
    const container = document.getElementById('particles');
    const settings = loadSettings();
    const theme = uiSettings.themes[settings.theme];
    
    container.innerHTML = '';
    for (let i = 0; i < 30; i++) {
        const p = document.createElement('div');
        p.className = 'particle';
        p.style.background = theme.colors.particleColor || theme.colors.primary;
        p.style.boxShadow = `0 0 10px ${theme.colors.glowColor || theme.colors.primary}`;
        p.style.left = Math.random() * 100 + 'vw';
        p.style.animationDelay = Math.random() * 6 + 's';
        p.style.animationDuration = (Math.random() * 4 + 4) + 's';
        container.appendChild(p);
    }
}

// CHARACTER - FIXED: Sprite menempel ke bottom dengan ukuran responsif
function setCharacter(key, pose = 'idle') {
    const el = document.getElementById('character');
    const char = characters[key];
    if (!char) return;
    
    const path = char.sprites[pose] || char.sprites.idle;
    el.style.backgroundImage = `url('${path}')`;
    el.style.opacity = '0';
    el.style.transform = 'translateY(50px)';
    setTimeout(() => el.style.animation = 'characterEnter 1s ease forwards', 100);
}

// TYPING - FIXED: Click ANYWHERE = Skip (tidak ignore)
let currentTypingInterval = null;
let isTypingComplete = false; // Track jika typing sudah selesai

function typeText(el, text, callback) {
    // Clear previous typing if exists
    if (currentTypingInterval) {
        clearInterval(currentTypingInterval);
        currentTypingInterval = null;
    }
    
    const settings = loadSettings();
    const speed = settings.typingSpeed !== undefined ? settings.typingSpeed : 20;
    
    isTypingComplete = false;
    
    // Instant mode (speed = 0)
    if (speed === 0) {
        el.innerHTML = text;
        el.classList.remove('typing');
        isTypingComplete = true;
        if (callback) callback();
        return;
    }
    
    el.innerHTML = '';
    el.classList.add('typing');
    let i = 0;
    
    // Function to finish typing instantly
    const finishTyping = () => {
        if (isTypingComplete) return; // Sudah selesai, jangan ulang
        
        isTypingComplete = true;
        
        if (currentTypingInterval) {
            clearInterval(currentTypingInterval);
            currentTypingInterval = null;
        }
        
        el.innerHTML = text;
        el.classList.remove('typing');
        
        // Remove ALL event listeners untuk prevent double execution
        document.removeEventListener('click', skipHandler);
        document.removeEventListener('keydown', skipHandlerKey);
        
        if (callback) callback();
    };
    
    // Handler functions
    const skipHandler = (e) => {
        // Skip jika click di area dialogue atau character (bukan modal/button lain)
        if (e.target.closest('.dialogue-area') || 
            e.target.closest('.character-area') ||
            e.target === document.getElementById('dialogueText')) {
            finishTyping();
        }
    };
    
    const skipHandlerKey = (e) => {
        // Skip dengan Enter atau Space
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            finishTyping();
        }
    };
    
    // Add listeners untuk skip
    document.addEventListener('click', skipHandler);
    document.addEventListener('keydown', skipHandlerKey);
    
    // Typing animation
    currentTypingInterval = setInterval(() => {
        if (i < text.length) {
            el.innerHTML += text.charAt(i);
            i++;
        } else {
            finishTyping();
        }
    }, speed);
}

// DIALOGUE - FIXED: Choices disabled sampai typing selesai
const dialogHistory = [];
let saveDialogue = null; 
let backInProgress = false;

function handleChoice(action) {  
    if (typeof action === 'function') {
        action();
        return;
    }

    const d = dialogues[action];
    if (!d) return;

    const char = characters[d.speaker];
    if (!char) return;

    // Save ke history 
    if (saveDialogue && saveDialogue !== action) {
        if (!backInProgress) {
            dialogHistory.push(saveDialogue);
            console.log('Saved to history:', saveDialogue);
        } else {
            backInProgress = false;
        }
        console.log('History now:', dialogHistory);
    }

    saveDialogue = action;

    const charEl = document.getElementById('character');
    const speaker = document.getElementById('speakerName');
    const dialogue = document.getElementById('dialogueText');
    const choices = document.getElementById('dialogueChoices');

    // ✅ CLEAR CHOICES IMMEDIATELY (prevent accidental click during typing)
    choices.innerHTML = '<p style="opacity:0.5;text-align:center;font-size:14px;">⏳ Mengetik...</p>';
    choices.style.pointerEvents = 'none'; // Disable all clicks

    setCharacter(d.speaker, d.pose || 'idle');
    charEl.classList.remove('speaking');
    
    setTimeout(() => {
        charEl.classList.add('speaking');
        speaker.textContent = char.name;
        speaker.style.color = char.color;

        const text = d.text[config.currentLanguage] || d.text.id;
        
        // ✅ Typing dengan callback untuk render choices SETELAH selesai
        typeText(dialogue, text, () => {
            // Render choices ONLY after typing done
            choices.style.pointerEvents = 'auto'; // Re-enable clicks
            choices.innerHTML = '';
            d.choices.forEach(c => {
                const btn = document.createElement('div');
                btn.className = 'choice-btn';
                btn.textContent = c.text[config.currentLanguage] || c.text.id;
                btn.onclick = () => handleChoice(c.action);
                choices.appendChild(btn);
            });
        });

        dialogue.dataset.dialogueKey = action;    
        
    }, 100);
}

// Kembali ke dialog sebelumnya
function goBack() {
    const previous = dialogHistory.pop();
    console.log('Going back to:', previous);
    console.log('History after pop:', dialogHistory);
    
    if (previous) {
        backInProgress = true;
        handleChoice(previous);
    } else {
        handleChoice('intro'); // Default fallback
    }
}

// EXPERIENCE - Full HTML content without template
function renderExperienceCards() {
    const grid = document.getElementById('experienceGrid');
    grid.innerHTML = '';
    
    const filtered = config.currentFilter === 'all' 
        ? experienceData 
        : experienceData.filter(item => item.type === config.currentFilter);
    
    if (filtered.length === 0) {
        grid.innerHTML = '<p style="text-align:center;opacity:0.7">Belum ada item</p>';
        return;
    }
        
    filtered.forEach(item => {
        const type = experienceTypes[item.type];
        const card = document.createElement('div');
        card.className = `experience-card ${item.type}`;
        card.onclick = () => showExperienceDetail(item.id);
        
        const title = typeof item.title === 'object' ? item.title[config.currentLanguage] : item.title;
        const subtitle = typeof item.subtitle === 'object' ? item.subtitle[config.currentLanguage] : item.subtitle;
        const desc = typeof item.description === 'object' ? item.description[config.currentLanguage] : item.description;
        
        card.innerHTML = `
            <div class="card-header">
                <div class="card-icon" style="border-color:${type.color};background:${type.bgColor}">${type.icon}</div>
                <div>
                    <h3 class="card-title">${title}</h3>
                    <p class="card-subtitle">${subtitle}</p>
                </div>
            </div>
            <div class="card-description">${desc}</div>
            <div class="card-tags">${item.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>
        `;
        grid.appendChild(card);
    });
}

function filterExperience(type) {
    config.currentFilter = type;
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    event.target.classList.add('active');
    renderExperienceCards();
    
    // Update URL dengan type
    updateURL('experience', type);
}

function showExperienceDetail(id) {
    const item = experienceData.find(e => e.id === id);
    if (!item) return;
    
    document.getElementById('experienceGrid').style.display = 'none';
    document.querySelector('.experience-nav').style.display = 'none';
    
    const page = document.getElementById('detailPage');
    const content = typeof item.content === 'object' ? item.content[config.currentLanguage] : item.content;
    
    document.getElementById('detailContent').innerHTML = content;
    
    page.style.display = 'block';
    
    // Update URL dengan ID
    updateURL('experience', config.currentFilter, id);
}

function showExperienceList() {
    document.getElementById('experienceGrid').style.display = 'grid';
    document.querySelector('.experience-nav').style.display = 'flex';
    document.getElementById('detailPage').style.display = 'none';
    
    // Clear ID dari URL
    updateURL('experience', config.currentFilter);
}


// MODAL

function showModal(type) {
    const modal = document.getElementById(type + 'Modal');
    modal.style.display = 'block';
    
    // Update URL
    updateURL(type);
    
    if (type === 'experience') {
        renderExperienceCards();
        showExperienceList();
    }
    if (type === 'profile') loadProfile();
    if (type === 'settings') renderSettingsOptions();
}


function closeModal(type) {
    document.getElementById(type + 'Modal').style.display = 'none';
    
    // Clear URL
    window.history.pushState({}, '', window.location.pathname);
}


// PROFILE
function loadProfile() {
    document.querySelector('.profile-info h2').textContent = profileData.name;
    
    const job = typeof profileData.jobTitle === 'object' 
        ? profileData.jobTitle[config.currentLanguage] 
        : profileData.jobTitle;
    document.querySelector('.profile-info .job-title').textContent = job;
    
    const desc = typeof profileData.description === 'object'
        ? profileData.description[config.currentLanguage]
        : profileData.description;
    document.querySelector('.profile-info .description').textContent = desc;
    
    if (profileData.image) {
        const img = document.querySelector('.profile-image');
        img.style.backgroundImage = `url('${profileData.image}')`;
        img.style.backgroundSize = 'cover';
        img.style.backgroundPosition = 'center';
        img.textContent = '';
    }
    
    const links = document.querySelector('.contact-links');
    links.innerHTML = profileData.contacts.map(c => {
        let iconHTML = '';
        
        // Check if icon is PNG/SVG path
        if (c.icon.includes('.svg') || c.icon.includes('.png') || c.icon.includes('.jpg')) {
            iconHTML = `<span class="icon-wrapper"><img src="${c.icon}" alt="icon"></span>`;
        } else if (c.icon) {
            iconHTML = c.icon;
        }
        
        return `<a href="${c.url}" class="contact-link" target="_blank" rel="noopener">${iconHTML} ${c.label}</a>`;
    }).join('');
}

// LANGUAGE
function toggleLanguage() {
    config.currentLanguage = config.currentLanguage === 'en' ? 'id' : 'en';
    updateLanguage();
    
    // Re-render dialog yang aktif
    const currentDialogue = document.getElementById('dialogueText').dataset.dialogueKey;
    if (currentDialogue && dialogues[currentDialogue]) {
        handleChoice(currentDialogue);
    }
    
    // Re-render modals
    if (document.getElementById('experienceModal').style.display === 'block') {
        const detailVisible = document.getElementById('detailPage').style.display === 'block';
        if (detailVisible) {
            const currentId = experienceData.find(item => {
                const contentId = typeof item.content === 'object' ? item.content.id : item.content;
                const contentEn = typeof item.content === 'object' ? item.content.en : item.content;
                const currentContent = document.getElementById('detailContent').innerHTML;
                return currentContent.includes(contentId.substring(0, 50)) || 
                       currentContent.includes(contentEn.substring(0, 50));
            });
            if (currentId) showExperienceDetail(currentId.id);
        } else {
            renderExperienceCards();
        }
    }
    if (document.getElementById('profileModal').style.display === 'block') {
        loadProfile();
    }
    if (document.getElementById('settingsModal').style.display === 'block') {
        renderSettingsOptions();
    }
}

function updateLanguage() {
    if (!uiTranslations) {
        console.error('uiTranslations not loaded!');
        return;
    }
    
    document.querySelectorAll('[data-lang]').forEach(el => {
        const key = el.getAttribute('data-lang');
        if (uiTranslations[config.currentLanguage] && uiTranslations[config.currentLanguage][key]) {
            el.textContent = uiTranslations[config.currentLanguage][key];
        }
    });
}

// AUDIO - Sinkron dengan Settings
function toggleMusic() {
    const music = document.getElementById('bgMusic');
    const settings = loadSettings();
    
    if (config.musicEnabled) {
        music.pause();
        config.musicEnabled = false;
        settings.musicEnabled = false;
    } else {
        music.play().then(() => {
            config.musicEnabled = true;
            settings.musicEnabled = true;
        }).catch(err => {
            console.log('Music blocked by browser');
            config.musicEnabled = false;
            settings.musicEnabled = false;
        });
    }
    
    saveSettings(settings);
    updateAudioUI();
}

function toggleSFX() {
    const settings = loadSettings();
    config.sfxEnabled = !config.sfxEnabled;
    settings.sfxEnabled = config.sfxEnabled;
    saveSettings(settings);
    updateAudioUI();
}

function playSFX(key) {
    if (!config.sfxEnabled) return;
    if (!audioConfig || !audioConfig.sfx || !audioConfig.sfx[key]) return;
    
    const audio = new Audio(audioConfig.sfx[key]);
    audio.volume = audioConfig.volumes.sfx;
    audio.play().catch(err => console.log('SFX failed:', err));
}

function updateVolume(value) {
    const music = document.getElementById('bgMusic');
    const settings = loadSettings();
    
    music.volume = value / 100;
    settings.volume = parseInt(value);
    saveSettings(settings);
    updateAudioUI();
}

// Update ALL audio UI elements
function updateAudioUI() {
    const settings = loadSettings();
    
    // Update settings modal checkboxes
    const musicToggle = document.getElementById('musicToggle');
    const sfxToggle = document.getElementById('sfxToggle');
    const volumeSlider = document.getElementById('volumeSettingSlider');
    const volumeText = document.getElementById('volumeSettingText');
    
    if (musicToggle) musicToggle.checked = settings.musicEnabled;
    if (sfxToggle) sfxToggle.checked = settings.sfxEnabled;
    if (volumeSlider) volumeSlider.value = settings.volume;
    if (volumeText) volumeText.textContent = settings.volume + '%';
    
    // Update top-bar volume (jika ada)
    const topVolume = document.getElementById('topVolumeSlider');
    const topVolumeText = document.getElementById('topVolumeText');
    if (topVolume) topVolume.value = settings.volume;
    if (topVolumeText) topVolumeText.textContent = settings.volume + '%';
}

// EVENTS
window.onclick = e => {
    // sfx semua tombol
    const classList = e.target.className;
    if (typeof classList === 'string' && /-btn\b/.test(classList)) {
        playSFX('click');
    }

    if (e.target.classList.contains('modal')) {
        e.target.style.display = 'none';
    }
};

document.addEventListener('keydown', e => {
    switch(e.key) {
        case 'Escape':
            document.querySelectorAll('.modal').forEach(m => m.style.display = 'none');
            break;
        case 'l':
            if (e.ctrlKey) {
                e.preventDefault();
                toggleLanguage();
            }
            break;
        case 'm':
            if (e.ctrlKey) {
                e.preventDefault();
                toggleMusic();
            }
            break;
    }
});