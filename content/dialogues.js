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
                action: "about"  
            },
            {
                text: {
                    id: "😎 Tunjukan profil mu!",
                    en: "😎 Show me your profile!"
                },
                action: () => showModal('profile')  // Bisa juga function langsung misalnya showModal('profile') atau showModal('settings')
            },
            {
                text: {
                    id: "🚀 Tunjukkan proyekmu!",
                    en: "🚀 Show me your projects!"
                },
                action: () => showModal('experience')  // Bisa juga function langsung misalnya showModal('profile') atau showModal('settings')
            },
            // { text: { id: "🔙 Kembali", en: "🔙 Back" }, action: () => goBack() }
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
                    id: "⚡ Skill apa yang kamu kuasai?",
                    en: "⚡ What skills do you have?"
                },
                action: "skills"
            },
            {
                text: {
                    id: "🏆 Apa pengalaman mu?",
                    en: "🏆 What's your experience?"
                },
                action: "experience"
            },
            { 
                text: {
                    id: "💭 Kenapa kamu buat portfolio kayak gini?", 
                    en: "💭 Why did you make a portfolio like this?" 
                }, 
                action: "portfolio_concept" },
            {
                text: {
                    id: "📖 Ceritakan perjalanan hidupmu?",
                    en: "📖 Tell me about your life journey?"
                },
                action: "mystory_prolog"
            },
            {
                text: {
                    id: "🔙 Kembali ke awal",
                    en: "🔙 Back to start"
                },
                // action: "intro"
                action: () => goBack()
            },
            
        ]
    },
    
    




    // Cerita perjalanan ku

    mystory_prolog: {
        speaker: "flashback",
        pose: "perkenalan",

        text: {
            id: "Dulu ada seorang anak bernama Riza. Ia dikenal cerdas dan punya cara unik memahami sesuatu. Ia mampu menangkap pelajaran dengan cepat dan sering dipercaya mewakili sekolah dalam berbagai lomba.",
            en: "Once, there was a boy named Riza. He was known for his sharp mind and a unique way of understanding things. He grasped lessons easily and was often chosen to represent his school in various competitions.",
        },

        choices: [
            {
                text: {
                    id: "Lanjutkan ceritanya...",
                    en: "Continue the story..."
                },
                action: "mystory_conflict"
            },
            {
                text: {
                    id: "🔙 Kembali",
                    en: "🔙 Back"
                },
                // action: "about"
                action: () => goBack()
            },
            
        ]
    },

    mystory_conflict: {
        speaker: "flashback",
        pose: "konflik",

        text: {
            id: "Namun di balik kecerdasannya, masa kecil Riza tak selalu mudah. Dari TK hingga SMP, ia sering dibuli oleh teman-temannya, entah karena sifatnya yang pendiam, atau karena kecerdasannya yang membuat iri.",
            en: "But behind his intelligence, Riza's childhood wasn't easy. From kindergarten to middle school, he was bullied by his peers, perhaps for being quiet, or maybe because his brilliance sparked envy.",
        },

        choices: [
            // {
            //     text: {
            //         id: "Aku tidak sanggup lagi...",
            //         en: ""
            //     },
            //     action: "" //cabang mystory_breakdown belum dibuat
            // },
            {
                text: {
                    id: "Jangan menyerah! Ayo lawan mereka!",
                    en: "Don't give up! Stand up to them!"
                },
                action: "mystory_fightback"
            },
            { text: { id: "🔙 Kembali", en: "🔙 Back" }, action: () => goBack() }
        ]
    },

    mystory_fightback: {
        speaker: "flashback",
        pose: "fight",

        text: {
            id: "Meski begitu, Riza tidak pernah benar-benar menyerah. Ia berani melawan meski tahu dirinya kalah secara fisik. Dengan keberanian dan kelincahan, ia menghadapi mereka dengan caranya sendiri, menolak untuk tunduk pada rasa takut.",
            en: "Even so, Riza never truly gave up. He stood up for himself, even knowing he was physically outmatched. With courage and agility, he faced them in his own way, refusing to bow to fear.",
        },

        choices: [
            {
                text: {
                    id: "Apa yang terjadi selanjutnya?",
                    en: "What happened next?"
                },
                action: "mystory_resolution1"
            },
            { text: { id: "🔙 Kembali", en: "🔙 Back" }, action: () => goBack() }
        ]
    },

    mystory_resolution1: {
        speaker: "flashback",
        pose: "resolution",

        text: {
            id: "Hari-hari itu meninggalkan luka sekaligus pelajaran. Riza belajar bahwa kekuatan sejati bukan soal menang, tapi tentang bertahan dan terus berdiri. Ia mulai menerima dirinya apa adanya, memahami bahwa setiap luka bisa menjadi alasan untuk tumbuh.",
            en: "Those days left scars but also lessons. Riza learned that true strength isn't about winning, but about enduring and standing tall. He began to accept himself as he was, realizing that every scar could be a reason to grow.",
        },

        choices: [
            {
                text: {
                    id: "Apa yang terjadi setelah Riza dewasa?",
                    en: "What happened when Riza grew up?"
                },
                action: "mystory_resolution2"
            },
            { text: { id: "🔙 Kembali", en: "🔙 Back" }, action: () => goBack() }
        ]
    }, 

    mystory_resolution2: {
        speaker: "flashback",
        pose: "resolution",

        text: {
            id: "Saat beranjak dewasa, Riza tumbuh menjadi pribadi yang berani dan percaya diri. Di masa kuliah, ia tak lagi takut menonjol atau berbeda. Ia tahu bahwa menjadi unik bukan kelemahan, melainkan kekuatan yang membuatnya berdiri di tempat yang tak semua orang berani pijak.",
            en: "As he grew older, Riza became confident and fearless. In college, he no longer feared standing out or being different. He realized that being unique wasn't a weakness, but a strength that placed him where few dared to stand.",
        },

        choices: [
            {
                text: {
                    id: "Apa yang membuat Riza memilih jalan hidupnya sekarang?",
                    en: "What made Riza choose his current path?"
                },
                action: "mystory_resolution3"
            },
            { text: { id: "🔙 Kembali", en: "🔙 Back" }, action: () => goBack() }
        ]
    },
    
    mystory_resolution3: {
        speaker: "flashback",
        pose: "resolution",

        text: {
            id: "Riza memilih menekuni dunia Teknik Informatika. Ia tertarik pada cara logika dan kreativitas berpadu dalam pemrograman. Baginya, coding bukan sekadar pekerjaan, tapi ruang untuk berpikir bebas dan menciptakan solusi. Anak seorang petani, namun ia menanam masa depan dengan barisan kode dan tekad yang ia bentuk sendiri.",
            en: "Riza chose to pursue Informatics Engineering. He was drawn to how logic and creativity intertwined in programming. For him, coding wasn't just work—it was a space to think freely and create solutions. A farmer's son, yet he cultivated his future through lines of code and a determination all his own.",
        },

        choices: [
            {
                text: {
                    id: "🔙 Kembali ke awal",
                    en: "🔙 Back To Start"
                },
                action: "intro" 
            },
            { text: { id: "🔙 Kembali", en: "🔙 Back" }, action: () => goBack() }
            
        ]
    },

    






    // Dialog lainnya

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
                    id: "💪 Apa kelebihanmu?",
                    en: "💪 What are your strengths?"
                },
                action: "strengths"
            },
            {
                text: {
                    id: "🔙 Kembali",
                    en: "🔙 Back"
                },
                // action: "about"
                action: () => goBack()
            }
        ]
    },

    portfolio_concept: {
        speaker: "developer",
        pose: "smart",

        text: {
            id: "Kenapa aku bikin ini bukan cuma CV biasa? Karena ku percaya developer yang baik itu bukan cuma pintar coding. Kita bisa mikir kreatif, solve problem dengan cara yang berbeda, dan experience itu penting banget. Portfolio ini bukan cuma menunjukkan skill, tapi juga personality dan cara aku mencapai sesuatu dengan cara berbeda.",
            en: "Why didn't I just make a regular portfolio? Because I believe good developers aren't just people who can code. We think creatively, approach problems differently, and storytelling matters. This isn't just about showing skills—it's about showing how I think and work."
        },

        choices: [
            {
                text: {
                    id: "🔥 Jadi apa motifasi mu?",
                    en: "🔥 So what's your motivation?",
                },
                action: "motivation"
            },
            {
                text: { 
                    id: "💼 Jadi, kenapa harus rekrut kamu?", 
                    en: "💼 So, why should we hire you?" 
                }, 
                action: "value_proposition" 
            },
            {
                text: {
                    id: "🔙 Kembali",
                    en: "🔙 Back"
                },
                // action: "about"
                action: () => goBack()
            }
        ]
    },



    experience: {
        speaker: "developer",
        pose: "idle",

        text: {
            id: "Kalau soal pengalaman, aku sudah melewati banyak hal yang membentukku jadi seperti sekarang. Dari masa kuliah, magang, sampai berbagai proyek kecil yang kujalani dengan semangat belajar dan tanggung jawab. Semua pengalaman itu ngajarin satu hal — kalau konsistensi dan rasa ingin tahu bisa membawa kita sejauh apa pun.",
            en: "When it comes to experience, I've been through quite a lot that shaped who I am today. From college, internships, to small projects I worked on with passion and responsibility. All those experiences taught me one thing — that consistency and curiosity can take us anywhere."
        },

        choices: [
            {
                text: {
                    id: "💼 Pengalaman Kerja / Magang",
                    en: "💼 Work / Internship Experience"
                },
                action: "work_experience"
            },
            {
                text: {
                    id: "🎓 Pendidikan",
                    en: "🎓 Education"
                },
                action: "education"
            },
            {
                text: {
                    id: "🏅 Pencapaian",
                    en: "🏅 Achievements"
                },
                action: "achievements"
            },
            {
                text: {
                    id: "🔙 Kembali",
                    en: "🔙 Back"
                },
                // action: "about"
                action: () => goBack()
            }
        ]
    },


    work_experience: {
        speaker: "developer",
        pose: "explaining",
        
        text: {
            id: "Saya punya pengalaman magang 3 bulan di Digitaliz sebagai Web Developer Intern! Di sana saya belajar banyak banget - mulai dari kerja dalam tim sampai penglaman langsung dengan Laravel. Evaluasi magang saya juga dapat nilai Baik lho!",
            en: "I have 3 months of internship experience at Digitaliz as a Web Developer Intern! There I learned a lot - from working in teams to hands-on experience with Laravel. My internship evaluation was rated Good too!"
        },
        
        choices: [
            
            {
                text: {
                    id: "🔙 Kembali",
                    en: "🔙 Back"
                },
                // action: "experience"
                action: () => goBack()
            }
        ]
    },
    
    education: {
        speaker: "developer",
        pose: "coding",
        
        text: {
            id: "Saya lulusan D3 Teknik Informatika Politeknik Hasnur dengan IPK 3.55! Selama kuliah, saya aktif banget - ikut magang, bikin project, dan tentunya belajar berbagai teknologi. Yang paling berkesan? Waktu bikin sistem manajemen koperasi untuk tugas akhir.",
            en: "I graduated from D3 Information Technology at Politeknik Hasnur with a GPA of 3.55! During college, I was very active - joined internships, built projects, and of course learned various technologies. The most memorable? When I built a cooperative management system for my final project."
        },
        
        choices: [
            
            {
                text: {
                    id: "🔙 Kembali",
                    en: "🔙 Back"
                },
                // action: "experience"
                action: () => goBack()
            }
        ]
    },
    
    motivation: {
        speaker: "developer",
        pose: "excited",
        
        text: {
            id: "Motivasi saya simpel: Saya SUKA coding! Suka banget! Ada kepuasan tersendiri ketika berhasil solve problem yang kompleks atau bikin sesuatu yang bermanfaat. Buat saya, itu seru banget! Saya gak mau diam di zona nyaman, saya mau terus tumbuh dan berkontribusi lewat skill yang saya punya!",
            en: "My motivation is simple: I LOVE coding! Really love it! There's a special satisfaction when successfully solving complex problems or creating something useful. For me, that's really exciting! I don't want to be stuck in my comfort zone, I want to keep growing and contributing through my skills!"
        },
        
        choices: [
            
            {
                text: {
                    id: "🔙 Kembali",
                    en: "🔙 Back"
                },
                // action: "portfolio_concept"
                action: () => goBack()
            }
        ]
    },
    
    
    achievements: {
        speaker: "developer",
        pose: "smart",
        
        text: {
            id: "Alhamdulillah, selama pendidikan saya punya beberapa pencapaian yang membanggakan! Di SMP dulu saya peringkat 1 UNBK tingkat sekolah, terus di SMA sempat ikut KSN Matematika. Waktu kuliah, IPK 3.55, magang dapat evaluasi Baik. Setiap pencapaian ini ngajarin saya bahwa kerja keras itu gak pernah bohong!",
            en: "Alhamdulillah, during my education I have several proud achievements! In junior high I was rank 1 in school-level UNBK, then in high school I participated in KSN Mathematics. During college, GPA 3.55, internship got Good evaluation. Each of these achievements taught me that hard work never lies!"
        },
        
        choices: [
            
            {
                text: {
                    id: "🔙 Kembali",
                    en: "🔙 Back"
                },
                // action: "experience"
                action: () => goBack()
            }
        ]
    },
    
    strengths: {
        speaker: "developer",
        pose: "excited",
        
        text: {
            id: "Kelebihan saya? Pertama, Fast Learner! Kasih saya teknologi baru, saya bakal cepet adaptasi. Kedua, Problem Solver - saya suka banget challenging problems dan gak gampang nyerah. Ketiga, Team Player - pengalaman magang ngajarin saya gimana komunikasi dan kolaborasi yang baik. Dan yang keempat, Growth Mindset - saya selalu terbuka untuk feedback dan terus mau berkembang!",
            en: "My strengths? First, Fast Learner! Give me new technology, I'll adapt quickly. Second, Problem Solver - I really love challenging problems and don't give up easily. Third, Team Player - internship experience taught me good communication and collaboration. And fourth, Growth Mindset - I'm always open to feedback and want to keep developing!"
        },
        
        choices: [
            
            {
                text: {
                    id: "🔙 Kembali",
                    en: "🔙 Back"
                },
                // action: "skills"
                action: () => goBack()
            }
        ]
    },
    
    value_proposition: {
        speaker: "developer",
        pose: "idle",
        
        text: {
            id: "Apa yang kurang dari saya? semangat seorang fresh graduate yang haus untuk belajar, dikombinasikan dengan pengalman langsung dari magang dan real project. Saya cepat belajar dan beradptasi. Saya gak cuma bisa coding, tapi juga mampu berpikir out of the box dan memiliki komitmen untuk berkembang!",
            en: "What's missing from me? enthusiasm of a fresh graduate who's hungry to learn, combined with hands-on experience from internships and real projects. I'm a fast learner and adaptable. I don't just code, but also but also able to think out of the box and commitment to growth!"
        },
        
        choices: [
            
            {
                text: {
                    id: "🔙 Kembali",
                    en: "🔙 Back"
                },
                // action: "portfolio_concept"
                action: () => goBack()
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

