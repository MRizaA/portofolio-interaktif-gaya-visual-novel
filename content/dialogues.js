// DIALOGUES Data
//Dialog interaktif dengan character

const dialogues = {
    intro: {
        speaker: "developer",  // Siapa yang berbicara (sesuai dengan key di characters.js)
        pose: "idle",          // Pose character (idle, speaking, happy, dll)
        
        // Text dialog dengan terjemahan Indonesia dan inggris berdekatan untuk memudahkan proses edit
        text: {
            id: "Halo! Selamat datang di portfolio saya. Perkenalkan saya Muhammad Riza Aditya",
            en: "Hello! Welcome to my portfolio. I'm Muhammad Riza Aditya"
        },
        
        // Pilihan dialog
        choices: [
            {
                text: {
                    id: "🤔 Ceritakan tentang dirimu",
                    en: "🤔 Tell me about yourself"
                },
                action: "about"  // Mengarah ke dialogue dengan key "about"
            },
            {
                text: {
                    id: "⚡ Skill apa yang kamu kuasai?",
                    en: "⚡ What skills do you have?"
                },
                action: "skills"
            },
            {
                text: {
                    id: "🚀 Tunjukkan proyekmu!",
                    en: "🚀 Show me your projects!"
                },
                action: () => showModal('experience')  // Bisa juga function langsung
            }
        ]
    },
    
    about: {
        speaker: "developer",
        pose: "explaining",
        
        text: {
            id: "Aku lulusan D3 Teknik Informatika dari Politeknik Hasnur dengan IPK 3.55. Aku sangat suka mencoba hal baru. Meskipun masih fresh graduate, tapi aku punya semangat besar untuk terus berkembang!",
            en: "I graduated from D3 Information Technology at Politeknik Hasnur with a GPA of 3.55. I really enjoy learning new things. Although I'm still a fresh graduate, I have great enthusiasm to continue growing!"
        },
        
        choices: [
            {
                text: {
                    id: "⚡ Skill teknismu apa saja?",
                    en: "⚡ What are your technical skills?"
                },
                action: "skills"
            },
            // {
            //     text: {
            //         id: "🎓 Cerita tentang pendidikanmu",
            //         en: "🎓 Tell me about your education"
            //     },
            //     action: "education"
            // },
            {
                text: {
                    id: "🔙 Kembali ke awal",
                    en: "🔙 Back to start"
                },
                action: "intro"
            }
        ]
    },
    
    skills: {
        speaker: "developer",
        pose: "excited",
        
        text: {
            id: "Aku menguasai berbagai bahasa pemrograman! tapi aku tidak terfocus ke salah satu. Aku sudah familiar dengan php, Java, Python, VB.NET dan masih banyak lagi. Database management dengan MySQL juga sudah aku kuasai! Tapi kalu kamu menyuruhku untuk mengunakan yang selain itu, sesuatu yang berbeda, teknologi yang belum aku kuasai? GASKEUN!!! Tantangan Diterima!",
            en: "I master various programming languages! but I'm not focused on one. I am familiar with PHP, Java, Python, VB.NET and many more. I have also mastered database management with MySQL! But if you tell me to use something other than that, something different, technology that I haven't mastered yet? LET'S GO!!! Challenge Accepted!"
        },
        
        choices: [
            {
                text: {
                    id: "🚀 Lihat semua proyek",
                    en: "🚀 View all projects"
                },
                action: () => showModal('experience')
            },
            // {
            //     text: {
            //         id: "💼 Pengalaman kerja?",
            //         en: "💼 Work experience?"
            //     },
            //     action: "work"
            // },
            {
                text: {
                    id: "🔙 Kembali",
                    en: "🔙 Back"
                },
                action: "intro"
            }
        ]
    },
    
    // Tambah dialog baru
    // Copy template di bawah dan edit sesuai kebutuhan
    
    // dialogid: {
    //     speaker: "characterid",
    //     pose: "charactersprites",
    //     
    //     text: {
    //         id: "Dialog dalam bahasa Indonesia...",
    //         en: "Dialog in English..."
    //     },
    //     
    //     choices: [
    //         {
    //             text: {
    //                 id: "Teks pilihan Indonesia",
    //                 en: "Choice text English"
    //             },
    //             action: "intro"  // atau () => showModal('profile')
    //         }
    //     ]
    // },
    
    // sesuaikan character dan choices dengan yang ada sesuai kebutuhan, action bisa berupa string (key dialogue lain) atau function
};

