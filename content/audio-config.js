// AUDIO CONFIG

const audioConfig = {
    background: {
        main: "assets/audio/Medieval Music – Cobblestone Village.mp3" //awalnya berfungsi dengan baik walau tidak langsung diputar, perlu click musik dulu tapi sekarang click music tidak bisa
        // ,alternative: "assets/audio/alternative.mp3"
    },
    
    sfx: {
        // click: "assets/audio/sfx/click.mp3"
        // modalOpen: "assets/audio/sfx/modal.mp3"

        click: "assets/audio/mixkit-light-button-2580.wav",

        // pakai sfx di oneclick fungsi lain
        // playSFX('click');
    },
    
    voice: {
        // developer: {
        //     intro_id: "assets/audio/voice/developer/intro_id.mp3",
        //     intro_en: "assets/audio/voice/developer/intro_en.mp3"
        // }
    },
    
    volumes: {
        background: 0.3,
        sfx: 0.5,
        voice: 0.7
    }
};

// HELPER FUNCTIONS
function playBackgroundMusic(key = 'main') {
    const music = document.getElementById('bgMusic');
    if (audioConfig.background[key]) {
        music.src = audioConfig.background[key];
        music.volume = audioConfig.volumes.background;
        music.play().catch(err => console.log('Music autoplay blocked'));
    }
}

function playSoundEffect(key) {
    if (!audioConfig.sfx[key]) return;
    const audio = new Audio(audioConfig.sfx[key]);
    audio.volume = audioConfig.volumes.sfx;
    audio.play().catch(err => console.log('SFX failed'));
}

function playCharacterVoice(char, dialogue, lang) {
    const voiceKey = `${dialogue}_${lang}`;
    if (!audioConfig.voice[char] || !audioConfig.voice[char][voiceKey]) return;
    const audio = new Audio(audioConfig.voice[char][voiceKey]);
    audio.volume = audioConfig.volumes.voice;
    audio.play().catch(err => console.log('Voice failed'));
}

// CARA PAKAI:
// 1. Background music: sudah auto load di app.js
// 2. Click sound: uncomment sfx.click di atas + uncomment code di app.js
// 3. Dialog voice: buat file audio [dialogKey]_[lang].mp3 lalu uncomment