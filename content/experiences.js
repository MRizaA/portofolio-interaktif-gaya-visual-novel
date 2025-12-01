// EXPERIENCES DATA - Full HTML Content Support
// File: content/experiences.js

const experienceTypes = {
    work: { color: "#3b82f6", icon: "💼", bgColor: "rgba(59, 130, 246, 0.1)" },
    project: { color: "#10b981", icon: "🚀", bgColor: "rgba(16, 185, 129, 0.1)" },
    education: { color: "#f59e0b", icon: "🎓", bgColor: "rgba(245, 158, 11, 0.1)" },
    certification: { color: "#8b5cf6", icon: "🏆", bgColor: "rgba(139, 92, 246, 0.1)" },
    achievement: { color: "#ef4444", icon: "🏅", bgColor: "rgba(239, 68, 68, 0.1)" }
};

const experienceData = [

    // Digitaliz
    {
        id: "digitaliz-internship",
        type: "work",
        
        title: {
            id: "Web Developer Intern",
            en: "Web Developer Intern"
        },
        subtitle: {
            id: "Digitaliz | Agustus - November 2024",
            en: "Digitaliz | August - November 2024"
        },
        
        description: {
            id: "Magang selama 3 bulan dengan hasil evaluasi baik",
            en: "3-month internship with good evaluation results"
        },
        
        tags: ["Laravel", "Web Development", "Team Collaboration"],
        
        // FULL HTML CONTENT - Bebas dikreasikan!
        content: {
            id: `
                <h2 style="font-size: 28px; margin-bottom: 10px; background: linear-gradient(45deg, var(--primary-color), var(--secondary-color)); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">
                    Web Developer Intern
                </h2>
                
                <div style="display: flex; gap: 20px; margin-bottom: 25px; flex-wrap: wrap; opacity: 0.9;">
                    <span style="display: flex; align-items: center; gap: 8px;">📅 <strong>Durasi:</strong> 3 bulan (Agustus - November 2024)</span>
                    <span style="display: flex; align-items: center; gap: 8px;">📈 <strong>Evaluasi:</strong> Baik</span>
                    <span style="display: flex; align-items: center; gap: 8px;">🏢 <strong>Perusahaan:</strong> Digitaliz</span>
                </div>
                
                <div style="display: inline-block; background: var(--secondary-color) ; border: 2px solid var(--primary-color); border-radius: 15px; padding: 2px;">
                <img src="assets/images/certificates/Sertifikat Digitaliz 1.png" 
                    style="display: block; width: auto; height: 300px; border-radius: 10px; object-fit: contain;">
                </div>

                
                <div style="line-height: 1.8;">
                    <h3 style="color: var(--primary-color); margin: 25px 0 15px;">Tentang Program Magang</h3>
                    <p style="margin-bottom: 15px;">
                        Selama 3 bulan magang di Digitaliz, saya mendapat kesempatan berharga untuk belajar dan berkontribusi dalam pengembangan web profesional. 
                        Program ini memberikan pengalaman langsung bekerja dengan tim development dalam proyek nyata.
                    </p>
                    
                    <h3 style="color: var(--primary-color); margin: 25px 0 15px;">Pengalaman & Pembelajaran</h3>
                    <ul style="margin-left: 20px; margin-bottom: 20px;">
                        <li style="margin-bottom: 10px;">Berkolaborasi dengan tim development menggunakan Laravel Framework</li>
                        <li style="margin-bottom: 10px;">Mempelajari workflow industri dan best practices dalam web development</li>
                        <li style="margin-bottom: 10px;">Menerapkan teknologi modern dalam pengembangan aplikasi web</li>
                        <li style="margin-bottom: 10px;">Mengembangkan kemampuan problem-solving melalui permasalahan nyata</li>
                        <li style="margin-bottom: 10px;">Meningkatkan soft skills seperti komunikasi tim dan time management</li>
                    </ul>
                    
                    <h3 style="color: var(--primary-color); margin: 25px 0 15px;">Teknologi yang Digunakan Selama Magang</h3>
                    <div style="display: flex; flex-wrap: wrap; gap: 10px; margin-bottom: 20px;">
                        <span style="padding: 8px 16px; background: var(--primary-color); border: 2px solid var(--secondary-color); border-radius: 20px;">Laravel</span>
                        <span style="padding: 8px 16px; background: var(--primary-color); border: 2px solid var(--secondary-color); border-radius: 20px;">MySQL</span>
                        <span style="padding: 8px 16px; background: var(--primary-color); border: 2px solid var(--secondary-color); border-radius: 20px;">Git</span>
                    </div>
                    
                    <div style="background: var(--bgCard-color); padding: 20px; border-radius: 15px; border: 2px solid var(--secondary-color); margin-top: 25px;">
                        <h4 style="color: var(--primary-color); margin-bottom: 10px;">💡 Hasil Evaluasi</h4>
                        <p>Program magang ini diakhiri dengan evaluasi yang sangat memuaskan. Mendapat apresiasi atas dedikasi, kemampuan belajar cepat, dan kontribusi positif dalam tim development.</p>
                    </div>
                </div>
            `,
            en: `              
                <h2 style="font-size: 28px; margin-bottom: 10px; background: linear-gradient(45deg, var(--primary-color), var(--secondary-color)); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">
                    Web Developer Intern
                </h2>
                
                <div style="display: flex; gap: 20px; margin-bottom: 25px; flex-wrap: wrap; opacity: 0.9;">
                    <span style="display: flex; align-items: center; gap: 8px;">📅 <strong>Duration:</strong> 3 months (August - November 2024)</span>
                    <span style="display: flex; align-items: center; gap: 8px;">📈 <strong>Evaluation:</strong> Good</span>
                    <span style="display: flex; align-items: center; gap: 8px;">🏢 <strong>Company:</strong> Digitaliz</span>
                </div>
                
                <div style="display: inline-block; background: var(--secondary-color) ; border: 2px solid var(--primary-color); border-radius: 15px; padding: 2px;">
                <img src="assets/images/certificates/Sertifikat Digitaliz 1.png" 
                    style="display: block; width: auto; height: 300px; border-radius: 10px; object-fit: contain;">
                </div>
                
                <div style="line-height: 1.8;">
                    <h3 style="color: var(--primary-color); margin: 25px 0 15px;">About the Internship</h3>
                    <p style="margin-bottom: 15px;">
                        During my 3-month internship at Digitaliz, I had the valuable opportunity to learn and contribute to professional web development. 
                        This program provided hands-on experience working with a development team on real projects.
                    </p>
                    
                    <h3 style="color: var(--primary-color); margin: 25px 0 15px;">Experience & Learning</h3>
                    <ul style="margin-left: 20px; margin-bottom: 20px;">
                        <li style="margin-bottom: 10px;">Collaborated with development team using Laravel Framework</li>
                        <li style="margin-bottom: 10px;">Learned industry workflows and best practices in web development</li>
                        <li style="margin-bottom: 10px;">Applied modern technologies in web application development</li>
                        <li style="margin-bottom: 10px;">Developed problem-solving skills through real issue</li>
                        <li style="margin-bottom: 10px;">Enhanced soft skills like team communication and time management</li>
                    </ul>
                    
                    <h3 style="color: var(--primary-color); margin: 25px 0 15px;">Technologies Used</h3>
                    <div style="display: flex; flex-wrap: wrap; gap: 10px; margin-bottom: 20px;">
                        <span style="padding: 8px 16px; background: var(--primary-color); border: 2px solid var(--secondary-color); border-radius: 20px;">Laravel</span>
                        <span style="padding: 8px 16px; background: var(--primary-color); border: 2px solid var(--secondary-color); border-radius: 20px;">MySQL</span>
                        <span style="padding: 8px 16px; background: var(--primary-color); border: 2px solid var(--secondary-color); border-radius: 20px;">Git</span>
                    </div>
                    
                    <div style="background: var(--bgCard-color); padding: 20px; border-radius: 15px; border: 2px solid var(--secondary-color); margin-top: 25px;">
                        <h4 style="color: var(--primary-color); margin-bottom: 10px;">💡 Evaluation Result</h4>
                        <p>The internship program concluded with an excellent evaluation. Received appreciation for dedication, quick learning ability, and positive contributions to the development team.</p>
                    </div>
                </div>
            `
        }
    },
    
    // Koperasi Konek
    {
        id: "koperasi-system",
        type: "project",
        
        title: {
            id: "Sistem Informasi Koperasi Konek",
            en: "Konek Cooperative Information System"
        },
        subtitle: {
            id: "Web Application | Laravel 11 | 2024-2025",
            en: "Web Application | Laravel 11 | 2024-2025"
        },
        
        description: {
            id: "Aplikasi web untuk digitalisasi manajemen koperasi dan simpanan anggota",
            en: "Web application for cooperative management and member savings digitalization"
        },
        
        tags: ["Laravel 11", "MySQL", "Tailwind CSS", "PHP"],
        
        content: {
            id: `
                <h2 style="font-size: 28px; margin-bottom: 10px; background: linear-gradient(45deg, var(--primary-color), var(--secondary-color)); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">
                    Sistem Informasi Koperasi Konek
                </h2>
                
                <div style="display: flex; gap: 20px; margin-bottom: 25px; flex-wrap: wrap; opacity: 0.9;">
                    <span style="display: flex; align-items: center; gap: 8px;">⚡ <strong>Framework:</strong> Laravel 11</span>
                    <span style="display: flex; align-items: center; gap: 8px;">💾 <strong>Database:</strong> MySQL</span>
                    <span style="display: flex; align-items: center; gap: 8px;">🎨 <strong>Styling:</strong> Tailwind CSS</span>
                    <span style="display: flex; align-items: center; gap: 8px;">📅 <strong>Tahun:</strong> 2024-2025</span>
                </div>
                
                <div style="display: inline-block; background: rgba(168, 85, 247, 0.1); border: 2px solid var(--primary-color); border-radius: 15px; padding: 8px; margin-bottom: 25px; width: 100%; max-width: 800px;">
                    <img src="assets/images/projects/konek/dashboard admin.jpg" alt="img" style="display: block; width: 100%; border-radius: 10px; object-fit: cover;">
                    <p style="text-align: center; padding: 10px; opacity: 0.8; font-size: 14px;">Dashboard Koperasi Konek</p>
                </div>

                <div style="line-height: 1.8;">
                    <h3 style="color: var(--primary-color); margin: 25px 0 15px;">Latar Belakang</h3>
                    <p style="margin-bottom: 15px;">
                        Aplikasi ini dibuat sebagai Tugas Akhir program D3 Teknik Informatika Politeknik Hasnur untuk mengatasi 
                        permasalahan nyata di Koperasi Konek - koperasi yang didirikan Yayasan Hasnur Centre dengan 240 anggota aktif.
                    </p>
                    <p style="margin-bottom: 15px;">
                        Sebelumnya, koperasi mengelola data simpanan secara manual menggunakan Spreadsheet dan menyebarkan informasi via WhatsApp. 
                        Metode ini tidak efisien, rentan kesalahan pencatatan, dan sulit diakses anggota. Sistem digital ini hadir sebagai 
                        solusi untuk meningkatkan transparansi, akurasi, dan kemudahan akses informasi.
                    </p>
                    
                    <h3 style="color: var(--primary-color); margin: 25px 0 15px;">Teknologi yang Digunakan</h3>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 12px; margin-bottom: 20px;">
                        <div style="background: linear-gradient(135deg, rgba(239, 68, 68, 0.1), rgba(239, 68, 68, 0.05)); padding: 15px; border-left: 4px solid #ef4444; border-radius: 8px;">
                            <strong style="color: #ef4444;">🔴 Laravel 11</strong>
                            <p style="margin-top: 8px; opacity: 0.9; font-size: 14px;">PHP framework untuk backend, routing, authentication, dan database ORM (Eloquent)</p>
                        </div>
                        <div style="background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(59, 130, 246, 0.05)); padding: 15px; border-left: 4px solid #3b82f6; border-radius: 8px;">
                            <strong style="color: #3b82f6;">🔵 MySQL</strong>
                            <p style="margin-top: 8px; opacity: 0.9; font-size: 14px;">Database relasional untuk menyimpan data anggota, simpanan, dan transaksi</p>
                        </div>
                        <div style="background: linear-gradient(135deg, rgba(56, 189, 248, 0.1), rgba(56, 189, 248, 0.05)); padding: 15px; border-left: 4px solid #38bdf8; border-radius: 8px;">
                            <strong style="color: #38bdf8;">💨 Tailwind CSS</strong>
                            <p style="margin-top: 8px; opacity: 0.9; font-size: 14px;">CSS framework untuk styling responsive dan modern UI</p>
                        </div>
                        <div style="background: linear-gradient(135deg, rgba(245, 158, 11, 0.1), rgba(245, 158, 11, 0.05)); padding: 15px; border-left: 4px solid #f59e0b; border-radius: 8px;">
                            <strong style="color: #f59e0b;">🔐 Laravel Breeze</strong>
                            <p style="margin-top: 8px; opacity: 0.9; font-size: 14px;">Starter kit untuk authentication dan authorization</p>
                        </div>
                        <div style="background: linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(139, 92, 246, 0.05)); padding: 15px; border-left: 4px solid #8b5cf6; border-radius: 8px;">
                            <strong style="color: #8b5cf6;">🛡️ Spatie Permission</strong>
                            <p style="margin-top: 8px; opacity: 0.9; font-size: 14px;">Role & permission management untuk kontrol akses user</p>
                        </div>
                        <div style="background: linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(16, 185, 129, 0.05)); padding: 15px; border-left: 4px solid #10b981; border-radius: 8px;">
                            <strong style="color: #10b981;">⚙️ Tools</strong>
                            <p style="margin-top: 8px; opacity: 0.9; font-size: 14px;">Laragon (local server), VS Code (editor), GitHub (version control)</p>
                        </div>
                    </div>
                    
                    <h3 style="color: var(--primary-color); margin: 25px 0 15px;">Fitur Sistem</h3>
                    
                    <h4 style="color: var(--secondary-color); margin: 20px 0 10px; font-size: 18px;">👨‍💼 Panel Admin</h4>
                    <div style="background: rgba(168, 85, 247, 0.05); padding: 20px; border-radius: 12px; margin-bottom: 20px; border: 1px solid rgba(168, 85, 247, 0.2);">
                        <ul style="margin-left: 20px;">
                            <li style="margin-bottom: 12px;"><strong>Dashboard Analytics</strong> - Monitoring real-time jumlah anggota, total simpanan per jenis (pokok, wajib, sukarela), grafik statistik keuangan bulanan</li>
                            <li style="margin-bottom: 12px;"><strong>Manajemen Anggota</strong> - CRUD data anggota lengkap, verifikasi pendaftaran online</li>
                            <li style="margin-bottom: 12px;"><strong>Konfirmasi Pembayaran</strong> - Sistem konfirmasi pembayaran simpanan dengan validasi otomatis, update saldo simpanan real-time</li>
                            <li style="margin-bottom: 12px;"><strong>Pengelolaan Simpanan</strong> - Input dan monitoring 3 jenis simpanan (pokok, wajib, sukarela), tracking simpanan wajib per bulan dengan color indicator (lunas/belum), set nilai default pembayaran</li>
                            <li style="margin-bottom: 12px;"><strong>Laporan Keuangan</strong> - Laporan detail keuangan koperasi, riwayat semua transaksi dengan filter tanggal, data operasional dan pengeluaran koperasi</li>
                            <li style="margin-bottom: 12px;"><strong>Lini Usaha</strong> - Kelola informasi unit usaha koperasi yang ditampilkan ke anggota</li>
                        </ul>
                    </div>
                    
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 15px; margin: 25px 0;">
                        <div style="background: rgba(168, 85, 247, 0.1); border: 2px solid rgba(168, 85, 247, 0.3); border-radius: 15px; overflow: hidden;">
                            <img src="assets/images/projects/konek/info_anggota admin.jpg" alt="img" style="display: block; width: 100%; object-fit: cover;">
                            <p style="padding: 12px; text-align: center; font-size: 14px;">Halaman manajemen anggota</p>
                        </div>
                        <div style="background: rgba(168, 85, 247, 0.1); border: 2px solid rgba(168, 85, 247, 0.3); border-radius: 15px; overflow: hidden;">
                            <img src="assets/images/projects/konek/keuangan admin.png" alt="img" style="display: block; width: 100%; object-fit: cover;">
                            <p style="padding: 12px; text-align: center; font-size: 14px;">Halaman keuangan</p>
                        </div>
                    </div>
                    
                    <p style="margin-bottom: 20px; padding: 15px; background: rgba(59, 130, 246, 0.1); border-left: 4px solid #3b82f6; border-radius: 8px;">
                        <strong>Fitur Unggulan:</strong> Color-coded indicator untuk status simpanan - hijau (lunas), kuning (sebagian), merah (belum bayar). 
                        Memudahkan admin melihat status pembayaran anggota secara visual.
                    </p>
                    
                    <h4 style="color: var(--secondary-color); margin: 20px 0 10px; font-size: 18px;">👥 Panel Anggota</h4>
                    <div style="background: rgba(168, 85, 247, 0.05); padding: 20px; border-radius: 12px; margin-bottom: 20px; border: 1px solid rgba(168, 85, 247, 0.2);">
                        <ul style="margin-left: 20px;">
                            <li style="margin-bottom: 12px;"><strong>Pendaftaran Online</strong> - Form pendaftaran mandiri yang intuitif, upload dokumen digital, tracking status verifikasi admin</li>
                            <li style="margin-bottom: 12px;"><strong>Dashboard Pribadi</strong> - Ringkasan simpanan pribadi (pokok, wajib, sukarela), notifikasi simpanan yang belum dibayar, history pembayaran</li>
                            <li style="margin-bottom: 12px;"><strong>Cek Simpanan</strong> - Lihat detail simpanan wajib per bulan dengan status pembayaran, total akumulasi simpanan sukarela</li>
                            <li style="margin-bottom: 12px;"><strong>Info Koperasi</strong> - Akses informasi keuangan koperasi secara transparan, lihat lini usaha yang dikelola</li>
                        </ul>
                    </div>
                    
                    <h3 style="color: var(--primary-color); margin: 25px 0 15px;">Jenis Simpanan</h3>
                    <div style="display: grid; gap: 12px; margin-bottom: 25px;">
                        <div style="background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(59, 130, 246, 0.05)); padding: 15px; border-left: 4px solid #3b82f6; border-radius: 8px;">
                            <strong>💎 Simpanan Pokok</strong>
                            <p style="margin-top: 8px; opacity: 0.9;">Dibayar satu kali saat menjadi anggota. Nilai tetap dan tidak dapat diambil selama masih menjadi anggota.</p>
                        </div>
                        <div style="background: linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(16, 185, 129, 0.05)); padding: 15px; border-left: 4px solid #10b981; border-radius: 8px;">
                            <strong>📅 Simpanan Wajib</strong>
                            <p style="margin-top: 8px; opacity: 0.9;">Dibayar setiap bulan dengan tracking per periode. Sistem mencatat history lengkap pembayaran bulanan dengan color indicator status.</p>
                        </div>
                        <div style="background: linear-gradient(135deg, rgba(245, 158, 11, 0.1), rgba(245, 158, 11, 0.05)); padding: 15px; border-left: 4px solid #f59e0b; border-radius: 8px;">
                            <strong>💰 Simpanan Sukarela</strong>
                            <p style="margin-top: 8px; opacity: 0.9;">Bersifat opsional, anggota dapat menambah kapan saja dengan nominal bebas. Dapat diambil sewaktu-waktu sesuai ketentuan.</p>
                        </div>
                    </div>
                    
                    <h3 style="color: var(--primary-color); margin: 25px 0 15px;">Keunggulan Sistem</h3>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 12px; margin-bottom: 25px;">
                        <div style="padding: 15px; background: rgba(16, 185, 129, 0.1); border-radius: 10px; border: 2px solid rgba(16, 185, 129, 0.3);">
                            <div style="font-size: 24px; margin-bottom: 8px;">⚡</div>
                            <strong>Efisiensi Tinggi</strong>
                            <p style="margin-top: 8px; font-size: 14px; opacity: 0.9;">Proses lebih cepat dibanding manual spreadsheet</p>
                        </div>
                        <div style="padding: 15px; background: rgba(59, 130, 246, 0.1); border-radius: 10px; border: 2px solid rgba(59, 130, 246, 0.3);">
                            <div style="font-size: 24px; margin-bottom: 8px;">🎯</div>
                            <strong>Akurasi Data</strong>
                            <p style="margin-top: 8px; font-size: 14px; opacity: 0.9;">Kesalahan pencatatan berkurang</p>
                        </div>
                        <div style="padding: 15px; background: rgba(139, 92, 246, 0.1); border-radius: 10px; border: 2px solid rgba(139, 92, 246, 0.3);">
                            <div style="font-size: 24px; margin-bottom: 8px;">👁️</div>
                            <strong>Transparansi</strong>
                            <p style="margin-top: 8px; font-size: 14px; opacity: 0.9;">Anggota dapat cek simpanan real-time 24/7</p>
                        </div>
                        <div style="padding: 15px; background: rgba(245, 158, 11, 0.1); border-radius: 10px; border: 2px solid rgba(245, 158, 11, 0.3);">
                            <div style="font-size: 24px; margin-bottom: 8px;">🔒</div>
                            <strong>Keamanan</strong>
                            <p style="margin-top: 8px; font-size: 14px; opacity: 0.9;">Role-based access control & encrypted data</p>
                        </div>
                    </div>
                    
                    <div style="background: linear-gradient(135deg, rgba(168, 85, 247, 0.1), rgba(236, 72, 153, 0.1)); padding: 25px; border-radius: 15px; border: 2px solid var(--primary-color); margin-top: 30px;">
                        <h4 style="color: var(--primary-color); margin-bottom: 15px;">🔗 Link Project</h4>
                        <div style="display: flex; flex-wrap: wrap; gap: 12px;">
                            <a href="https://github.com/MRizaA/KoperasiKonek" target="_blank" rel="noopener" style="padding: 12px 24px; background: rgba(0, 0, 0, 0.3); border: 2px solid #fff; border-radius: 25px; color: white; text-decoration: none; display: inline-flex; align-items: center; gap: 8px; transition: all 0.3s;">
                                <img src="assets/images/icons/github.png" alt="GitHub" style="width: 20px; height: 20px; border-radius: 50%; background: white; padding: 2px;">
                                <strong>GitHub Repository</strong>
                            </a>
                            <a href="https://drive.google.com/drive/folders/1eimt0P7JO7TbSteTTg8-9H7O1ejvSMOo" target="_blank" rel="noopener" style="padding: 12px 24px; background: rgba(59, 130, 246, 0.2); border: 2px solid #3b82f6; border-radius: 25px; color: white; text-decoration: none; display: inline-flex; align-items: center; gap: 8px; transition: all 0.3s;">
                                📄 <strong>Laporan Tugas Akhir (PDF)</strong>
                            </a>
                        </div>
                    </div>
                </div>
            `,
            en: `
                <h2 style="font-size: 28px; margin-bottom: 10px; background: linear-gradient(45deg, var(--primary-color), var(--secondary-color)); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">
                    Konek Cooperative Information System
                </h2>
                
                <div style="display: flex; gap: 20px; margin-bottom: 25px; flex-wrap: wrap; opacity: 0.9;">
                    <span style="display: flex; align-items: center; gap: 8px;">⚡ <strong>Framework:</strong> Laravel 11</span>
                    <span style="display: flex; align-items: center; gap: 8px;">💾 <strong>Database:</strong> MySQL</span>
                    <span style="display: flex; align-items: center; gap: 8px;">🎨 <strong>Styling:</strong> Tailwind CSS</span>
                    <span style="display: flex; align-items: center; gap: 8px;">📅 <strong>Year:</strong> 2024-2025</span>
                </div>
                
                <div style="display: inline-block; background: rgba(168, 85, 247, 0.1); border: 2px solid var(--primary-color); border-radius: 15px; padding: 8px; margin-bottom: 25px; width: 100%; max-width: 800px;">
                    <img src="assets/images/projects/konek/dashboard admin.jpg" alt="img" style="display: block; width: 100%; border-radius: 10px; object-fit: cover;">
                    <p style="text-align: center; padding: 10px; opacity: 0.8; font-size: 14px;">Konek Cooperative Dashboard</p>
                </div>

                <div style="line-height: 1.8;">
                    <h3 style="color: var(--primary-color); margin: 25px 0 15px;">Background</h3>
                    <p style="margin-bottom: 15px;">
                        This application was developed as a Final Project for the D3 Informatics Engineering program at Politeknik Hasnur 
                        to address real problems at Konek Cooperative - a cooperative established by Hasnur Centre Foundation with 240 active members.
                    </p>
                    <p style="margin-bottom: 15px;">
                        Previously, the cooperative managed savings data manually using Spreadsheets and distributed information via WhatsApp. 
                        This method was inefficient, prone to recording errors, and difficult for members to access. This digital system provides 
                        a solution to improve transparency, accuracy, and ease of information access.
                    </p>
                    
                    <h3 style="color: var(--primary-color); margin: 25px 0 15px;">Technology Stack</h3>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 12px; margin-bottom: 20px;">
                        <div style="background: linear-gradient(135deg, rgba(239, 68, 68, 0.1), rgba(239, 68, 68, 0.05)); padding: 15px; border-left: 4px solid #ef4444; border-radius: 8px;">
                            <strong style="color: #ef4444;">🔴 Laravel 11</strong>
                            <p style="margin-top: 8px; opacity: 0.9; font-size: 14px;">PHP framework for backend, routing, authentication, and database ORM (Eloquent)</p>
                        </div>
                        <div style="background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(59, 130, 246, 0.05)); padding: 15px; border-left: 4px solid #3b82f6; border-radius: 8px;">
                            <strong style="color: #3b82f6;">🔵 MySQL</strong>
                            <p style="margin-top: 8px; opacity: 0.9; font-size: 14px;">Relational database for storing member, savings, and transaction data</p>
                        </div>
                        <div style="background: linear-gradient(135deg, rgba(56, 189, 248, 0.1), rgba(56, 189, 248, 0.05)); padding: 15px; border-left: 4px solid #38bdf8; border-radius: 8px;">
                            <strong style="color: #38bdf8;">💨 Tailwind CSS</strong>
                            <p style="margin-top: 8px; opacity: 0.9; font-size: 14px;">CSS framework for responsive styling and modern UI</p>
                        </div>
                        <div style="background: linear-gradient(135deg, rgba(245, 158, 11, 0.1), rgba(245, 158, 11, 0.05)); padding: 15px; border-left: 4px solid #f59e0b; border-radius: 8px;">
                            <strong style="color: #f59e0b;">🔐 Laravel Breeze</strong>
                            <p style="margin-top: 8px; opacity: 0.9; font-size: 14px;">Starter kit for authentication and authorization</p>
                        </div>
                        <div style="background: linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(139, 92, 246, 0.05)); padding: 15px; border-left: 4px solid #8b5cf6; border-radius: 8px;">
                            <strong style="color: #8b5cf6;">🛡️ Spatie Permission</strong>
                            <p style="margin-top: 8px; opacity: 0.9; font-size: 14px;">Role & permission management for user access control</p>
                        </div>
                        <div style="background: linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(16, 185, 129, 0.05)); padding: 15px; border-left: 4px solid #10b981; border-radius: 8px;">
                            <strong style="color: #10b981;">⚙️ Tools</strong>
                            <p style="margin-top: 8px; opacity: 0.9; font-size: 14px;">Laragon (local server), VS Code (editor), GitHub (version control)</p>
                        </div>
                    </div>
                    
                    <h3 style="color: var(--primary-color); margin: 25px 0 15px;">System Features</h3>
                    
                    <h4 style="color: var(--secondary-color); margin: 20px 0 10px; font-size: 18px;">👨‍💼 Admin Panel</h4>
                    <div style="background: rgba(168, 85, 247, 0.05); padding: 20px; border-radius: 12px; margin-bottom: 20px; border: 1px solid rgba(168, 85, 247, 0.2);">
                        <ul style="margin-left: 20px;">
                            <li style="margin-bottom: 12px;"><strong>Analytics Dashboard</strong> - Real-time monitoring of member count, total savings by type (principal, mandatory, voluntary), monthly financial statistics charts</li>
                            <li style="margin-bottom: 12px;"><strong>Member Management</strong> - Complete member data CRUD, online registration verification</li>
                            <li style="margin-bottom: 12px;"><strong>Payment Confirmation</strong> - Savings payment confirmation system with automatic validation, real-time savings balance updates</li>
                            <li style="margin-bottom: 12px;"><strong>Savings Management</strong> - Input and monitoring of 3 savings types (principal, mandatory, voluntary), monthly mandatory savings tracking with color indicators (paid/unpaid), set default payment values</li>
                            <li style="margin-bottom: 12px;"><strong>Financial Reports</strong> - Detailed cooperative financial reports, all transaction history with date filters, operational data and cooperative expenses</li>
                            <li style="margin-bottom: 12px;"><strong>Business Lines</strong> - Manage cooperative business unit information displayed to members</li>
                        </ul>
                    </div>

                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 15px; margin: 25px 0;">
                        <div style="background: rgba(168, 85, 247, 0.1); border: 2px solid rgba(168, 85, 247, 0.3); border-radius: 15px; overflow: hidden;">
                            <img src="assets/images/projects/konek/info_anggota admin.jpg" alt="img" style="display: block; width: 100%; object-fit: cover;">
                            <p style="padding: 12px; text-align: center; font-size: 14px;">Member management page</p>
                        </div>
                        <div style="background: rgba(168, 85, 247, 0.1); border: 2px solid rgba(168, 85, 247, 0.3); border-radius: 15px; overflow: hidden;">
                            <img src="assets/images/projects/konek/keuangan admin.png" alt="img" style="display: block; width: 100%; object-fit: cover;">
                            <p style="padding: 12px; text-align: center; font-size: 14px;">Finance page</p>
                        </div>
                    </div>
                    
                    <p style="margin-bottom: 20px; padding: 15px; background: rgba(59, 130, 246, 0.1); border-left: 4px solid #3b82f6; border-radius: 8px;">
                        <strong>Key Feature:</strong> Color-coded indicators for savings status - green (paid), yellow (partial), red (unpaid). 
                        Helps admin visually see member payment status at a glance.
                    </p>
                    
                    <h4 style="color: var(--secondary-color); margin: 20px 0 10px; font-size: 18px;">👥 Member Panel</h4>
                    <div style="background: rgba(168, 85, 247, 0.05); padding: 20px; border-radius: 12px; margin-bottom: 20px; border: 1px solid rgba(168, 85, 247, 0.2);">
                        <ul style="margin-left: 20px;">
                            <li style="margin-bottom: 12px;"><strong>Online Registration</strong> - Intuitive self-registration form, digital document upload, admin verification status tracking</li>
                            <li style="margin-bottom: 12px;"><strong>Personal Dashboard</strong> - Personal savings summary (principal, mandatory, voluntary), unpaid savings notifications, payment history</li>
                            <li style="margin-bottom: 12px;"><strong>Check Savings</strong> - View monthly mandatory savings details with payment status, total voluntary savings accumulation</li>
                            <li style="margin-bottom: 12px;"><strong>Cooperative Info</strong> - Access transparent cooperative financial information, view managed business lines</li>
                        </ul>
                    </div>
                    
                    <h3 style="color: var(--primary-color); margin: 25px 0 15px;">Savings Types</h3>
                    <div style="display: grid; gap: 12px; margin-bottom: 25px;">
                        <div style="background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(59, 130, 246, 0.05)); padding: 15px; border-left: 4px solid #3b82f6; border-radius: 8px;">
                            <strong>💎 Principal Savings</strong>
                            <p style="margin-top: 8px; opacity: 0.9;">Paid once when becoming a member. Fixed value and cannot be withdrawn while still a member.</p>
                        </div>
                        <div style="background: linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(16, 185, 129, 0.05)); padding: 15px; border-left: 4px solid #10b981; border-radius: 8px;">
                            <strong>📅 Mandatory Savings</strong>
                            <p style="margin-top: 8px; opacity: 0.9;">Paid monthly with period tracking. System records complete monthly payment history with color status indicators.</p>
                        </div>
                        <div style="background: linear-gradient(135deg, rgba(245, 158, 11, 0.1), rgba(245, 158, 11, 0.05)); padding: 15px; border-left: 4px solid #f59e0b; border-radius: 8px;">
                            <strong>💰 Voluntary Savings</strong>
                            <p style="margin-top: 8px; opacity: 0.9;">Optional, members can add anytime with any amount. Can be withdrawn anytime according to regulations.</p>
                        </div>
                    </div>
                    
                    <h3 style="color: var(--primary-color); margin: 25px 0 15px;">System Advantages</h3>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 12px; margin-bottom: 25px;">
                        <div style="padding: 15px; background: rgba(16, 185, 129, 0.1); border-radius: 10px; border: 2px solid rgba(16, 185, 129, 0.3);">
                            <div style="font-size: 24px; margin-bottom: 8px;">⚡</div>
                            <strong>High Efficiency</strong>
                            <p style="margin-top: 8px; font-size: 14px; opacity: 0.9;">faster than manual spreadsheet process</p>
                        </div>
                        <div style="padding: 15px; background: rgba(59, 130, 246, 0.1); border-radius: 10px; border: 2px solid rgba(59, 130, 246, 0.3);">
                            <div style="font-size: 24px; margin-bottom: 8px;">🎯</div>
                            <strong>Data Accuracy</strong>
                            <p style="margin-top: 8px; font-size: 14px; opacity: 0.9;">Recording errors reduced</p>
                        </div>
                        <div style="padding: 15px; background: rgba(139, 92, 246, 0.1); border-radius: 10px; border: 2px solid rgba(139, 92, 246, 0.3);">
                            <div style="font-size: 24px; margin-bottom: 8px;">👁️</div>
                            <strong>Transparency</strong>
                            <p style="margin-top: 8px; font-size: 14px; opacity: 0.9;">Members can check savings real-time 24/7</p>
                        </div>
                        <div style="padding: 15px; background: rgba(245, 158, 11, 0.1); border-radius: 10px; border: 2px solid rgba(245, 158, 11, 0.3);">
                            <div style="font-size: 24px; margin-bottom: 8px;">🔒</div>
                            <strong>Security</strong>
                            <p style="margin-top: 8px; font-size: 14px; opacity: 0.9;">Role-based access control & encrypted data</p>
                        </div>
                    </div>
                    
                    <div style="background: linear-gradient(135deg, rgba(168, 85, 247, 0.1), rgba(236, 72, 153, 0.1)); padding: 25px; border-radius: 15px; border: 2px solid var(--primary-color); margin-top: 30px;">
                        <h4 style="color: var(--primary-color); margin-bottom: 15px;">🔗 Project Links</h4>
                        <div style="display: flex; flex-wrap: wrap; gap: 12px;">
                            <a href="https://github.com/MRizaA/KoperasiKonek" target="_blank" rel="noopener" style="padding: 12px 24px; background: rgba(0, 0, 0, 0.3); border: 2px solid #fff; border-radius: 25px; color: white; text-decoration: none; display: inline-flex; align-items: center; gap: 8px; transition: all 0.3s;">
                                <img src="assets/images/icons/github.png" alt="GitHub" style="width: 20px; height: 20px; border-radius: 50%; background: white; padding: 2px;">
                                <strong>GitHub Repository</strong>
                            </a>
                            <a href="https://drive.google.com/drive/folders/1eimt0P7JO7TbSteTTg8-9H7O1ejvSMOo" target="_blank" rel="noopener" style="padding: 12px 24px; background: rgba(59, 130, 246, 0.2); border: 2px solid #3b82f6; border-radius: 25px; color: white; text-decoration: none; display: inline-flex; align-items: center; gap: 8px; transition: all 0.3s;">
                                📄 <strong>Final Report (PDF)</strong>
                            </a>
                        </div>
                    </div>
                </div>
            `
        }
    },

    // Kuliah d3 Hasnur
    {
        id: "d3-informatika",
        type: "education",
        
        title: {
            id: "D3 Teknik Informatika",
            en: "Diploma 3 Informatics Engineering"
        },
        subtitle: {
            id: "Politeknik Hasnur | 2022-2025",
            en: "Hasnur Polytechnic | 2022-2025"
        },
        
        description: {
            id: "Lulusan D3 Teknik Informatika dengan IPK 3.55",
            en: "Graduated with GPA 3.55"
        },
        
        tags: ["IPK 3.55", "2022-2025", "Informatics"],
        
        content: {
            id: `
                <h2 style="font-size: 28px; margin-bottom: 10px; background: linear-gradient(45deg, var(--primary-color), var(--secondary-color)); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">
                    D3 Teknik Informatika
                </h2>
                
                <div style="display: flex; gap: 20px; margin-bottom: 25px; flex-wrap: wrap; opacity: 0.9;">
                    <span style="display: flex; align-items: center; gap: 8px;">🎓 <strong>Institusi:</strong> Politeknik Hasnur</span>
                    <span style="display: flex; align-items: center; gap: 8px;">📅 <strong>Periode:</strong> 2022 - 2025</span>
                    <span style="display: flex; align-items: center; gap: 8px;">📊 <strong>IPK:</strong> 3.55 / 4.00</span>
                </div>
                
                <div style="line-height: 1.8;">
                    <h3 style="color: var(--primary-color); margin: 25px 0 15px;">Tentang Politeknik Hasnur</h3>
                    <p style="margin-bottom: 15px;">
                        Politeknik Hasnur adalah institusi pendidikan vokasi yang berlokasi di Barito Kuala, Kalimantan Selatan, 
                        didirikan oleh Yayasan Hasnur Centre dengan visi menjadi "Technopreneur Campus" yang menghasilkan lulusan 
                        siap kerja dengan keterampilan teknis dan jiwa kewirausahaan.
                    </p>
                    <p style="margin-bottom: 15px;">
                        Program D3 Teknik Informatika menerapkan pembelajaran berbasis project dan praktikum intensif untuk mempersiapkan 
                        mahasiswa menghadapi tantangan industri IT. Kurikulum dirancang dengan kolaborasi industri untuk memastikan 
                        relevansi dengan kebutuhan pasar kerja.
                    </p>
                    
                    <h3 style="color: var(--primary-color); margin: 25px 0 15px;">Mata Kuliah Utama</h3>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 12px; margin-bottom: 20px;">
                        <div style="padding: 12px; background: rgba(59, 130, 246, 0.1); border-radius: 10px; border-left: 3px solid #3b82f6;">
                            💻 Pemrograman Web
                        </div>
                        <div style="padding: 12px; background: rgba(16, 185, 129, 0.1); border-radius: 10px; border-left: 3px solid #10b981;">
                            🗄️ Sistem Basis Data
                        </div>
                        <div style="padding: 12px; background: rgba(245, 158, 11, 0.1); border-radius: 10px; border-left: 3px solid #f59e0b;">
                            🔧 Algoritma & Pemrograman
                        </div>
                        <div style="padding: 12px; background: rgba(139, 92, 246, 0.1); border-radius: 10px; border-left: 3px solid #8b5cf6;">
                            📱 Pemrograman Mobile
                        </div>
                        <div style="padding: 12px; background: rgba(239, 68, 68, 0.1); border-radius: 10px; border-left: 3px solid #ef4444;">
                            🌐 Jaringan Komputer
                        </div>
                        <div style="padding: 12px; background: rgba(236, 72, 153, 0.1); border-radius: 10px; border-left: 3px solid #ec4899;">
                            🎨 Desain Grafis
                        </div>
                        <div style="padding: 12px; background: rgba(56, 189, 248, 0.1); border-radius: 10px; border-left: 3px solid #38bdf8;">
                            📊 Analisis & Desain Sistem
                        </div>
                        <div style="padding: 12px; background: rgba(168, 85, 247, 0.1); border-radius: 10px; border-left: 3px solid #a855f7;">
                            🔐 Keamanan & Keselamatan Kerja
                        </div>
                        <div style="padding: 12px; background: rgba(20, 184, 166, 0.1); border-radius: 10px; border-left: 3px solid #14b8a6;">
                            ⚙️ Sistem Informasi Manajemen
                        </div>
                        <div style="padding: 12px; background: rgba(251, 146, 60, 0.1); border-radius: 10px; border-left: 3px solid #fb923c;">
                            📐 Struktur Data
                        </div>
                        <div style="padding: 12px; background: rgba(34, 197, 94, 0.1); border-radius: 10px; border-left: 3px solid #22c55e;">
                            🤖 Pemrograman Berorientasi Objek
                        </div>
                        <div style="padding: 12px; background: rgba(244, 63, 94, 0.1); border-radius: 10px; border-left: 3px solid #f43f5e;">
                            💼 Kecakapan Antar Personal
                        </div>
                    </div>
                    
                    <h3 style="color: var(--primary-color); margin: 25px 0 15px;">Pencapaian Akademik</h3>
                    <ul style="margin-left: 20px; margin-bottom: 20px;">
                        <li style="margin-bottom: 12px;"><strong>IPK 3.55</strong> - dari skala 4.00</li>
                        <li style="margin-bottom: 12px;"><strong>Tugas Akhir:</strong> Sistem Informasi Simpanan Anggota Koperasi Konek dengan Laravel 11</li>
                        <li style="margin-bottom: 12px;"><strong>Magang Industri:</strong> Web Developer Intern di Digitaliz (Evaluasi: Baik)</li>
                        <li style="margin-bottom: 12px;"><strong>Praktek Kerja Lapangan:</strong> Pengalaman praktis dalam pengembangan sistem informasi</li>
                        <li style="margin-bottom: 12px;">Aktif mengerjakan berbagai project pengembangan aplikasi selama perkuliahan</li>
                    </ul>
                    
                    <h3 style="color: var(--primary-color); margin: 25px 0 15px;">Pengalaman Praktikum & Project</h3>
                    <div style="background: rgba(168, 85, 247, 0.05); padding: 20px; border-radius: 12px; margin-bottom: 20px; border: 1px solid rgba(168, 85, 247, 0.2);">
                        <ul style="margin-left: 20px;">
                            <li style="margin-bottom: 10px;"><strong>Praktikum Pemrograman Web:</strong> Membangun aplikasi web menggunakan PHP dan Laravel</li>
                            <li style="margin-bottom: 10px;"><strong>Praktikum Basis Data:</strong> Desain dan implementasi database MySQL untuk sistem informasi</li>
                            <li style="margin-bottom: 10px;"><strong>Project Mobile:</strong> Pengembangan aplikasi mobile dengan teknologi modern</li>
                            <li style="margin-bottom: 10px;"><strong>Project Manajemen Proyek Perangkat Lunak:</strong> Manajemen pengembangan software secara tim</li>
                            <li style="margin-bottom: 10px;"><strong>Praktikum Jaringan:</strong> Konfigurasi dan troubleshooting jaringan komputer</li>
                        </ul>
                    </div>
                    
                    <div style="background: linear-gradient(135deg, rgba(168, 85, 247, 0.1), rgba(236, 72, 153, 0.1)); padding: 20px; border-radius: 15px; border: 2px solid var(--primary-color); margin-top: 25px;">
                        <h4 style="color: var(--primary-color); margin-bottom: 15px;">📚 Fokus Pembelajaran</h4>
                        <p style="margin-bottom: 12px;">
                            Program studi ini membekali mahasiswa dengan keterampilan praktis yang langsung applicable di dunia kerja, 
                            dengan penekanan pada:
                        </p>
                        <ul style="margin-left: 20px;">
                            <li style="margin-bottom: 8px;">Pengembangan aplikasi web dan mobile</li>
                            <li style="margin-bottom: 8px;">Database design dan management</li>
                            <li style="margin-bottom: 8px;">Problem solving dan logical thinking</li>
                            <li style="margin-bottom: 8px;">Software engineering best practices</li>
                            <li style="margin-bottom: 8px;">Teamwork dan project management</li>
                        </ul>
                    </div>
                    
                    <div style="margin-top: 25px; padding: 20px; background: rgba(59, 130, 246, 0.1); border-radius: 15px; border: 2px solid rgba(59, 130, 246, 0.3);">
                        <h4 style="color: var(--primary-color); margin-bottom: 15px;">🔗 Informasi Lebih Lanjut</h4>
                        <p style="margin-bottom: 12px;">
                            Untuk informasi detail tentang transkrip nilai, sertifikat, dan dokumen pendukung lainnya:
                        </p>
                        <a href="https://drive.google.com/drive/folders/1eimt0P7JO7TbSteTTg8-9H7O1ejvSMOo" target="_blank" rel="noopener" style="padding: 12px 24px; background: rgba(59, 130, 246, 0.2); border: 2px solid #3b82f6; border-radius: 25px; color: white; text-decoration: none; display: inline-flex; align-items: center; gap: 8px; transition: all 0.3s;">
                            📄 <strong>Dokumen Akademik</strong>
                        </a>
                    </div>
                </div>
            `,
            en: `
                <h2 style="font-size: 28px; margin-bottom: 10px; background: linear-gradient(45deg, var(--primary-color), var(--secondary-color)); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">
                    Diploma 3 Informatics Engineering
                </h2>
                
                <div style="display: flex; gap: 20px; margin-bottom: 25px; flex-wrap: wrap; opacity: 0.9;">
                    <span style="display: flex; align-items: center; gap: 8px;">🎓 <strong>Institution:</strong> Hasnur Polytechnic</span>
                    <span style="display: flex; align-items: center; gap: 8px;">📅 <strong>Period:</strong> 2022 - 2025</span>
                    <span style="display: flex; align-items: center; gap: 8px;">📊 <strong>GPA:</strong> 3.55 / 4.00</span>
                </div>
                
                <div style="line-height: 1.8;">
                    <h3 style="color: var(--primary-color); margin: 25px 0 15px;">About Hasnur Polytechnic</h3>
                    <p style="margin-bottom: 15px;">
                        Hasnur Polytechnic is a vocational education institution located in Barito Kuala, South Kalimantan, 
                        established by Hasnur Centre Foundation with a vision to become a "Technopreneur Campus" that produces 
                        job-ready graduates with technical skills and entrepreneurial spirit.
                    </p>
                    <p style="margin-bottom: 15px;">
                        The D3 Informatics Engineering program applies project-based learning and intensive practicum to prepare 
                        students for IT industry challenges. The curriculum is designed in collaboration with industry to ensure 
                        relevance to job market needs.
                    </p>
                    
                    <h3 style="color: var(--primary-color); margin: 25px 0 15px;">Major Courses</h3>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 12px; margin-bottom: 20px;">
                        <div style="padding: 12px; background: rgba(59, 130, 246, 0.1); border-radius: 10px; border-left: 3px solid #3b82f6;">
                            💻 Web Programming
                        </div>
                        <div style="padding: 12px; background: rgba(16, 185, 129, 0.1); border-radius: 10px; border-left: 3px solid #10b981;">
                            🗄️ Database Systems
                        </div>
                        <div style="padding: 12px; background: rgba(245, 158, 11, 0.1); border-radius: 10px; border-left: 3px solid #f59e0b;">
                            🔧 Algorithms & Programming
                        </div>
                        <div style="padding: 12px; background: rgba(139, 92, 246, 0.1); border-radius: 10px; border-left: 3px solid #8b5cf6;">
                            📱 Mobile Programming
                        </div>
                        <div style="padding: 12px; background: rgba(239, 68, 68, 0.1); border-radius: 10px; border-left: 3px solid #ef4444;">
                            🌐 Computer Networks
                        </div>
                        <div style="padding: 12px; background: rgba(236, 72, 153, 0.1); border-radius: 10px; border-left: 3px solid #ec4899;">
                            🎨 Graphic Design
                        </div>
                        <div style="padding: 12px; background: rgba(56, 189, 248, 0.1); border-radius: 10px; border-left: 3px solid #38bdf8;">
                            📊 System Analysis & Design
                        </div>
                        <div style="padding: 12px; background: rgba(168, 85, 247, 0.1); border-radius: 10px; border-left: 3px solid #a855f7;">
                            🔐 Security & Work Safety
                        </div>
                        <div style="padding: 12px; background: rgba(20, 184, 166, 0.1); border-radius: 10px; border-left: 3px solid #14b8a6;">
                            ⚙️ Management Information Systems
                        </div>
                        <div style="padding: 12px; background: rgba(251, 146, 60, 0.1); border-radius: 10px; border-left: 3px solid #fb923c;">
                            📐 Data Structures
                        </div>
                        <div style="padding: 12px; background: rgba(34, 197, 94, 0.1); border-radius: 10px; border-left: 3px solid #22c55e;">
                            🤖 Object-Oriented Programming
                        </div>
                        <div style="padding: 12px; background: rgba(244, 63, 94, 0.1); border-radius: 10px; border-left: 3px solid #f43f5e;">
                            💼 Interpersonal Skills
                        </div>
                    </div>
                    
                    <h3 style="color: var(--primary-color); margin: 25px 0 15px;">Academic Achievements</h3>
                    <ul style="margin-left: 20px; margin-bottom: 20px;">
                        <li style="margin-bottom: 12px;"><strong>GPA 3.55</strong> - from 4.00 scale</li>
                        <li style="margin-bottom: 12px;"><strong>Final Project:</strong> Sistem Informasi Simpanan Anggota Koperasi Konek dengan Laravel 11 (Konek Cooperative Member Savings Information System with Laravel 11)</li>
                        <li style="margin-bottom: 12px;"><strong>Industrial Internship:</strong> Web Developer Intern at Digitaliz (Evaluation: Good)</li>
                        <li style="margin-bottom: 12px;"><strong>Field Work Practice:</strong> Practical experience in information system development</li>
                        <li style="margin-bottom: 12px;">Actively worked on various application development projects during studies</li>
                    </ul>
                    
                    <h3 style="color: var(--primary-color); margin: 25px 0 15px;">Practicum & Project Experience</h3>
                    <div style="background: rgba(168, 85, 247, 0.05); padding: 20px; border-radius: 12px; margin-bottom: 20px; border: 1px solid rgba(168, 85, 247, 0.2);">
                        <ul style="margin-left: 20px;">
                            <li style="margin-bottom: 10px;"><strong>Web Programming Practicum:</strong> Building web applications using PHP and Laravel</li>
                            <li style="margin-bottom: 10px;"><strong>Database Practicum:</strong> Design and implementation of MySQL databases for information systems</li>
                            <li style="margin-bottom: 10px;"><strong>Mobile Project:</strong> Mobile application development with modern technologies</li>
                            <li style="margin-bottom: 10px;"><strong>Software Project Management Project:</strong> Team-based software development management</li>
                            <li style="margin-bottom: 10px;"><strong>Network Practicum:</strong> Computer network configuration and troubleshooting</li>
                        </ul>
                    </div>
                    
                    <div style="background: linear-gradient(135deg, rgba(168, 85, 247, 0.1), rgba(236, 72, 153, 0.1)); padding: 20px; border-radius: 15px; border: 2px solid var(--primary-color); margin-top: 25px;">
                        <h4 style="color: var(--primary-color); margin-bottom: 15px;">📚 Learning Focus</h4>
                        <p style="margin-bottom: 12px;">
                            This study program equips students with practical skills directly applicable in the workplace, 
                            with emphasis on:
                        </p>
                        <ul style="margin-left: 20px;">
                            <li style="margin-bottom: 8px;">Web and mobile application development</li>
                            <li style="margin-bottom: 8px;">Database design and management</li>
                            <li style="margin-bottom: 8px;">Problem solving and logical thinking</li>
                            <li style="margin-bottom: 8px;">Software engineering best practices</li>
                            <li style="margin-bottom: 8px;">Teamwork and project management</li>
                        </ul>
                    </div>
                    
                    <div style="margin-top: 25px; padding: 20px; background: rgba(59, 130, 246, 0.1); border-radius: 15px; border: 2px solid rgba(59, 130, 246, 0.3);">
                        <h4 style="color: var(--primary-color); margin-bottom: 15px;">🔗 More Information</h4>
                        <p style="margin-bottom: 12px;">
                            For detailed information about transcripts, certificates, and other supporting documents:
                        </p>
                        <a href="https://drive.google.com/drive/folders/1eimt0P7JO7TbSteTTg8-9H7O1ejvSMOo" target="_blank" rel="noopener" style="padding: 12px 24px; background: rgba(59, 130, 246, 0.2); border: 2px solid #3b82f6; border-radius: 25px; color: white; text-decoration: none; display: inline-flex; align-items: center; gap: 8px; transition: all 0.3s;">
                            📄 <strong>Academic Documents</strong>
                        </a>
                    </div>
                </div>
            `
        }
    },

    // KSN matematika
    {
        id: "achieve-ksn-math",
        type: "achievement",
        
        title: {
            id: "Peserta KSN Matematika Tingkat Kabupaten",
            en: "Regional Level National Science Competition Participant - Mathematics"
        },
        subtitle: {
            id: "SMA Negeri 1 Rantau Badauh | Juni 2021",
            en: "SMA Negeri 1 Rantau Badauh | June 2021"
        },
        
        description: {
            id: "Peserta Kompetisi Sains Nasional bidang Matematika",
            en: "National Science Competition participant in Mathematics"
        },
        
        tags: ["Matematika", "KSN", "Kompetisi"],
        
        content: {
            id: `
                <h2 style="font-size: 28px; margin-bottom: 10px; background: linear-gradient(45deg, var(--primary-color), var(--secondary-color)); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">
                    Kompetisi Sains Nasional (KSN) - Matematika
                </h2>
                
                <div style="display: flex; gap: 20px; margin-bottom: 25px; flex-wrap: wrap; opacity: 0.9;">
                    <span style="display: flex; align-items: center; gap: 8px;">🏫 <strong>Sekolah:</strong> SMA Negeri 1 Rantau Badauh</span>
                    <span style="display: flex; align-items: center; gap: 8px;">📅 <strong>Tanggal:</strong> 3-4 Juni 2021</span>
                    <span style="display: flex; align-items: center; gap: 8px;">📚 <strong>Kelas:</strong> XI IPA 2</span>
                    <span style="display: flex; align-items: center; gap: 8px;">🎯 <strong>Bidang:</strong> Matematika</span>
                </div>
                
                <div style="display: inline-block; background: rgba(168, 85, 247, 0.1); border: 2px solid var(--primary-color); border-radius: 15px; padding: 8px; margin-bottom: 25px; width: 100%; max-width: 700px;">
                    <img src="assets/images/certificates/ksn-matematika.jpg" alt="Sertifikat KSN" style="display: block; width: 100%; border-radius: 10px; object-fit: cover;">
                    <p style="text-align: center; padding: 10px; opacity: 0.8; font-size: 14px;">Sertifikat Peserta KSN Tingkat Kabupaten/Kota</p>
                </div>

                <div style="line-height: 1.8;">
                    <h3 style="color: var(--primary-color); margin: 25px 0 15px;">Tentang KSN</h3>
                    <p style="margin-bottom: 15px;">
                        Kompetisi Sains Nasional (KSN) adalah ajang kompetisi bergengsi di Indonesia yang diselenggarakan oleh 
                        Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi. KSN bertujuan mengidentifikasi dan mengembangkan 
                        bakat siswa di bidang sains dan matematika.
                    </p>
                    
                    <h3 style="color: var(--primary-color); margin: 25px 0 15px;">Tingkatan Kompetisi</h3>
                    <div style="display: grid; gap: 10px; margin-bottom: 20px;">
                        <div style="background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(59, 130, 246, 0.05)); padding: 12px; border-left: 4px solid #3b82f6; border-radius: 8px;">
                            <strong>1️⃣ Tingkat Sekolah</strong>
                            <p style="margin-top: 5px; opacity: 0.9; font-size: 14px;">Seleksi internal di sekolah masing-masing</p>
                        </div>
                        <div style="background: linear-gradient(135deg, rgba(239, 68, 68, 0.1), rgba(239, 68, 68, 0.05)); padding: 12px; border-left: 4px solid #ef4444; border-radius: 8px;">
                            <strong>2️⃣ Tingkat Kabupaten/Kota ✓</strong>
                            <p style="margin-top: 5px; opacity: 0.9; font-size: 14px;">Kompetisi antar sekolah se-kabupaten (Berpartisipasi)</p>
                        </div>
                        <div style="background: linear-gradient(135deg, rgba(245, 158, 11, 0.1), rgba(245, 158, 11, 0.05)); padding: 12px; border-left: 4px solid #f59e0b; border-radius: 8px; opacity: 0.6;">
                            <strong>3️⃣ Tingkat Provinsi</strong>
                            <p style="margin-top: 5px; opacity: 0.9; font-size: 14px;">Kompetisi tingkat provinsi</p>
                        </div>
                        <div style="background: linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(16, 185, 129, 0.05)); padding: 12px; border-left: 4px solid #10b981; border-radius: 8px; opacity: 0.6;">
                            <strong>4️⃣ Tingkat Nasional</strong>
                            <p style="margin-top: 5px; opacity: 0.9; font-size: 14px;">Final nasional</p>
                        </div>
                    </div>
                    
                    <h3 style="color: var(--primary-color); margin: 25px 0 15px;">Pencapaian</h3>
                    <div style="background: rgba(168, 85, 247, 0.05); padding: 20px; border-radius: 12px; margin-bottom: 20px; border: 1px solid rgba(168, 85, 247, 0.2);">
                        <ul style="margin-left: 20px;">
                            <li style="margin-bottom: 12px;">✅ <strong>Lolos Seleksi Tingkat Sekolah</strong> - Terpilih mewakili SMA Negeri 1 Rantau Badauh</li>
                            <li style="margin-bottom: 12px;">✅ <strong>Berpartisipasi Tingkat Kabupaten</strong> - Mengikuti kompetisi pada 3-4 Juni 2021</li>
                            <li style="margin-bottom: 12px;">📚 <strong>Bidang Matematika</strong> - Fokus pada soal-soal matematika olimpiade</li>
                        </ul>
                    </div>
                    
                    <div style="background: linear-gradient(135deg, rgba(168, 85, 247, 0.1), rgba(236, 72, 153, 0.1)); padding: 20px; border-radius: 15px; border: 2px solid var(--primary-color); margin-top: 25px;">
                        <h4 style="color: var(--primary-color); margin-bottom: 10px;">📖 Cerita di Balik Layar</h4>
                        <p style="margin-bottom: 10px;">
                            Setelah lolos seleksi tingkat sekolah dan berhak mewakili sekolah di tingkat kabupaten, 
                            ternyata ada kendala komunikasi yang membuat saya melewatkan kesempatan melanjutkan ke tahap berikutnya. 
                        </p>
                        <p style="font-style: italic; opacity: 0.9;">
                            Meskipun begitu, pengalaman ini menjadi pembelajaran berharga tentang pentingnya komunikasi dan persiapan 
                            dalam menghadapi kompetisi akademik.
                        </p>
                    </div>
                </div>
            `,
            en: `
                <h2 style="font-size: 28px; margin-bottom: 10px; background: linear-gradient(45deg, var(--primary-color), var(--secondary-color)); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">
                    National Science Competition (KSN) - Mathematics
                </h2>
                
                <div style="display: flex; gap: 20px; margin-bottom: 25px; flex-wrap: wrap; opacity: 0.9;">
                    <span style="display: flex; align-items: center; gap: 8px;">🏫 <strong>School:</strong> SMA Negeri 1 Rantau Badauh</span>
                    <span style="display: flex; align-items: center; gap: 8px;">📅 <strong>Date:</strong> June 3-4, 2021</span>
                    <span style="display: flex; align-items: center; gap: 8px;">📚 <strong>Grade:</strong> XI IPA 2</span>
                    <span style="display: flex; align-items: center; gap: 8px;">🎯 <strong>Field:</strong> Mathematics</span>
                </div>
                
                <div style="display: inline-block; background: rgba(168, 85, 247, 0.1); border: 2px solid var(--primary-color); border-radius: 15px; padding: 8px; margin-bottom: 25px; width: 100%; max-width: 700px;">
                    <img src="assets/images/certificates/ksn-matematika.jpg" alt="KSN Certificate" style="display: block; width: 100%; border-radius: 10px; object-fit: cover;">
                    <p style="text-align: center; padding: 10px; opacity: 0.8; font-size: 14px;">Regional Level KSN Participant Certificate</p>
                </div>

                <div style="line-height: 1.8;">
                    <h3 style="color: var(--primary-color); margin: 25px 0 15px;">About KSN</h3>
                    <p style="margin-bottom: 15px;">
                        National Science Competition (KSN) is a prestigious competition in Indonesia organized by 
                        the Ministry of Education, Culture, Research, and Technology. KSN aims to identify and develop 
                        students' talents in science and mathematics.
                    </p>
                    
                    <h3 style="color: var(--primary-color); margin: 25px 0 15px;">Competition Levels</h3>
                    <div style="display: grid; gap: 10px; margin-bottom: 20px;">
                        <div style="background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(59, 130, 246, 0.05)); padding: 12px; border-left: 4px solid #3b82f6; border-radius: 8px;">
                            <strong>1️⃣ School Level</strong>
                            <p style="margin-top: 5px; opacity: 0.9; font-size: 14px;">Internal selection at respective schools</p>
                        </div>
                        <div style="background: linear-gradient(135deg, rgba(239, 68, 68, 0.1), rgba(239, 68, 68, 0.05)); padding: 12px; border-left: 4px solid #ef4444; border-radius: 8px;">
                            <strong>2️⃣ Regency/City Level ✓</strong>
                            <p style="margin-top: 5px; opacity: 0.9; font-size: 14px;">Inter-school competition across the regency (Participated)</p>
                        </div>
                        <div style="background: linear-gradient(135deg, rgba(245, 158, 11, 0.1), rgba(245, 158, 11, 0.05)); padding: 12px; border-left: 4px solid #f59e0b; border-radius: 8px; opacity: 0.6;">
                            <strong>3️⃣ Provincial Level</strong>
                            <p style="margin-top: 5px; opacity: 0.9; font-size: 14px;">Provincial level competition</p>
                        </div>
                        <div style="background: linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(16, 185, 129, 0.05)); padding: 12px; border-left: 4px solid #10b981; border-radius: 8px; opacity: 0.6;">
                            <strong>4️⃣ National Level</strong>
                            <p style="margin-top: 5px; opacity: 0.9; font-size: 14px;">National finals</p>
                        </div>
                    </div>
                    
                    <h3 style="color: var(--primary-color); margin: 25px 0 15px;">Achievement</h3>
                    <div style="background: rgba(168, 85, 247, 0.05); padding: 20px; border-radius: 12px; margin-bottom: 20px; border: 1px solid rgba(168, 85, 247, 0.2);">
                        <ul style="margin-left: 20px;">
                            <li style="margin-bottom: 12px;">✅ <strong>Passed School Level Selection</strong> - Selected to represent SMA Negeri 1 Rantau Badauh</li>
                            <li style="margin-bottom: 12px;">✅ <strong>Participated at Regency Level</strong> - Competed on June 3-4, 2021</li>
                            <li style="margin-bottom: 12px;">📚 <strong>Mathematics Field</strong> - Focused on olympiad-level mathematics problems</li>
                        </ul>
                    </div>
                    
                    <div style="background: linear-gradient(135deg, rgba(168, 85, 247, 0.1), rgba(236, 72, 153, 0.1)); padding: 20px; border-radius: 15px; border: 2px solid var(--primary-color); margin-top: 25px;">
                        <h4 style="color: var(--primary-color); margin-bottom: 10px;">📖 Behind the Scenes</h4>
                        <p style="margin-bottom: 10px;">
                            After passing the school-level selection and earning the right to represent the school at the regency level, 
                            there was a communication issue that caused me to miss the opportunity to proceed to the next stage.
                        </p>
                        <p style="font-style: italic; opacity: 0.9;">
                            Nevertheless, this experience became a valuable lesson about the importance of communication and preparation 
                            in facing academic competitions.
                        </p>
                    </div>
                </div>
            `
        }
    },

    // ulangan nilai tertinggi
    {
        id: "achieve-unbk-rank1",
        type: "achievement",
        
        title: {
            id: "Peringkat 1 UNBK SMP",
            en: "Rank 1 Junior High School National Exam"
        },
        subtitle: {
            id: "SMP Negeri 2 Rantau Badauh | 2018/2019",
            en: "SMP Negeri 2 Rantau Badauh | 2018/2019"
        },
        
        description: {
            id: "Peringkat pertama Ujian Nasional Berbasis Komputer tahun 2018/2019",
            en: "First rank in Computer-Based National Examination 2018/2019"
        },
        
        tags: ["UNBK", "Rank 1", "Achievement"],
        
        content: {
            id: `
                <h2 style="font-size: 28px; margin-bottom: 10px; background: linear-gradient(45deg, var(--primary-color), var(--secondary-color)); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">
                    Peringkat 1 Ujian Nasional Berbasis Komputer (UNBK)
                </h2>
                
                <div style="display: flex; gap: 20px; margin-bottom: 25px; flex-wrap: wrap; opacity: 0.9;">
                    <span style="display: flex; align-items: center; gap: 8px;">🏫 <strong>Sekolah:</strong> SMP Negeri 2 Rantau Badauh</span>
                    <span style="display: flex; align-items: center; gap: 8px;">📅 <strong>Tahun Pelajaran:</strong> 2018/2019</span>
                    <span style="display: flex; align-items: center; gap: 8px;">🏆 <strong>Peringkat:</strong> 1 (Satu)</span>
                    <span style="display: flex; align-items: center; gap: 8px;">📝 <strong>No. Peserta:</strong> 2-19-15-05-0016-0048-9</span>
                </div>
                
                <div style="display: inline-block; background: rgba(168, 85, 247, 0.1); border: 2px solid var(--primary-color); border-radius: 15px; padding: 8px; margin-bottom: 25px; width: 100%; max-width: 700px;">
                    <img src="assets/images/certificates/unbk-rank1.jpg" alt="Piagam UNBK Rank 1" style="display: block; width: 100%; border-radius: 10px; object-fit: cover;">
                    <p style="text-align: center; padding: 10px; opacity: 0.8; font-size: 14px;">Piagam Penghargaan Peringkat 1 UNBK</p>
                </div>

                <div style="line-height: 1.8;">
                    <h3 style="color: var(--primary-color); margin: 25px 0 15px;">Tentang UNBK</h3>
                    <p style="margin-bottom: 15px;">
                        Ujian Nasional Berbasis Komputer (UNBK) adalah sistem pelaksanaan Ujian Nasional yang menggunakan komputer 
                        sebagai media ujian. UNBK menguji kemampuan siswa dalam berbagai mata pelajaran sebagai standar kelulusan 
                        tingkat SMP/MTs di Indonesia.
                    </p>
                    
                    <h3 style="color: var(--primary-color); margin: 25px 0 15px;">Pencapaian</h3>
                    <div style="text-align: center; margin: 30px 0;">
                        <div style="display: inline-block; padding: 30px 50px; background: linear-gradient(135deg, rgba(245, 158, 11, 0.2), rgba(239, 68, 68, 0.2)); border-radius: 20px; border: 3px solid #f59e0b; box-shadow: 0 10px 30px rgba(245, 158, 11, 0.3);">
                            <div style="font-size: 72px; margin-bottom: 10px;">🏆</div>
                            <div style="font-size: 48px; font-weight: bold; background: linear-gradient(45deg, #f59e0b, #ef4444); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">
                                #1
                            </div>
                            <p style="margin-top: 15px; font-size: 20px; font-weight: 600;">Peringkat Pertama</p>
                            <p style="margin-top: 5px; opacity: 0.9;">SMP Negeri 2 Rantau Badauh</p>
                            <p style="margin-top: 5px; font-size: 14px; opacity: 0.8;">Tahun Pelajaran 2018/2019</p>
                        </div>
                    </div>
                    
                    <h3 style="color: var(--primary-color); margin: 25px 0 15px;">Mata Pelajaran yang Diujikan</h3>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 12px; margin-bottom: 20px;">
                        <div style="padding: 15px; background: rgba(59, 130, 246, 0.1); border-radius: 10px; border: 2px solid rgba(59, 130, 246, 0.3); text-align: center;">
                            <div style="font-size: 32px; margin-bottom: 8px;">📘</div>
                            <strong>Bahasa Indonesia</strong>
                        </div>
                        <div style="padding: 15px; background: rgba(16, 185, 129, 0.1); border-radius: 10px; border: 2px solid rgba(16, 185, 129, 0.3); text-align: center;">
                            <div style="font-size: 32px; margin-bottom: 8px;">🔢</div>
                            <strong>Matematika</strong>
                        </div>
                        <div style="padding: 15px; background: rgba(139, 92, 246, 0.1); border-radius: 10px; border: 2px solid rgba(139, 92, 246, 0.3); text-align: center;">
                            <div style="font-size: 32px; margin-bottom: 8px;">🔬</div>
                            <strong>IPA</strong>
                        </div>
                        <div style="padding: 15px; background: rgba(236, 72, 153, 0.1); border-radius: 10px; border: 2px solid rgba(236, 72, 153, 0.3); text-align: center;">
                            <div style="font-size: 32px; margin-bottom: 8px;">🌏</div>
                            <strong>Bahasa Inggris</strong>
                        </div>
                    </div>
                    
                    <div style="background: linear-gradient(135deg, rgba(168, 85, 247, 0.1), rgba(236, 72, 153, 0.1)); padding: 20px; border-radius: 15px; border: 2px solid var(--primary-color); margin-top: 25px;">
                        <h4 style="color: var(--primary-color); margin-bottom: 10px;">🎓 Makna Pencapaian</h4>
                        <p style="margin-bottom: 10px;">
                            Meraih peringkat pertama dalam UNBK di tingkat sekolah menunjukkan konsistensi dalam pembelajaran 
                            dan kemampuan akademik yang baik di berbagai mata pelajaran. Pencapaian ini menjadi motivasi untuk 
                            terus berkembang dan berprestasi di jenjang pendidikan selanjutnya.
                        </p>
                    </div>
                </div>
            `,
            en: `
                <h2 style="font-size: 28px; margin-bottom: 10px; background: linear-gradient(45deg, var(--primary-color), var(--secondary-color)); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">
                    Rank 1 Computer-Based National Examination (UNBK)
                </h2>
                
                <div style="display: flex; gap: 20px; margin-bottom: 25px; flex-wrap: wrap; opacity: 0.9;">
                    <span style="display: flex; align-items: center; gap: 8px;">🏫 <strong>School:</strong> SMP Negeri 2 Rantau Badauh</span>
                    <span style="display: flex; align-items: center; gap: 8px;">📅 <strong>Academic Year:</strong> 2018/2019</span>
                    <span style="display: flex; align-items: center; gap: 8px;">🏆 <strong>Rank:</strong> 1st</span>
                    <span style="display: flex; align-items: center; gap: 8px;">📝 <strong>Participant No:</strong> 2-19-15-05-0016-0048-9</span>
                </div>
                
                <div style="display: inline-block; background: rgba(168, 85, 247, 0.1); border: 2px solid var(--primary-color); border-radius: 15px; padding: 8px; margin-bottom: 25px; width: 100%; max-width: 700px;">
                    <img src="assets/images/certificates/unbk-rank1.jpg" alt="UNBK Rank 1 Certificate" style="display: block; width: 100%; border-radius: 10px; object-fit: cover;">
                    <p style="text-align: center; padding: 10px; opacity: 0.8; font-size: 14px;">Certificate of Achievement - Rank 1 UNBK</p>
                </div>

                <div style="line-height: 1.8;">
                    <h3 style="color: var(--primary-color); margin: 25px 0 15px;">About UNBK</h3>
                    <p style="margin-bottom: 15px;">
                        Computer-Based National Examination (UNBK) is a national exam system that uses computers 
                        as the examination medium. UNBK tests students' abilities across various subjects as the graduation 
                        standard for junior high schools in Indonesia.
                    </p>
                    
                    <h3 style="color: var(--primary-color); margin: 25px 0 15px;">Achievement</h3>
                    <div style="text-align: center; margin: 30px 0;">
                        <div style="display: inline-block; padding: 30px 50px; background: linear-gradient(135deg, rgba(245, 158, 11, 0.2), rgba(239, 68, 68, 0.2)); border-radius: 20px; border: 3px solid #f59e0b; box-shadow: 0 10px 30px rgba(245, 158, 11, 0.3);">
                            <div style="font-size: 72px; margin-bottom: 10px;">🏆</div>
                            <div style="font-size: 48px; font-weight: bold; background: linear-gradient(45deg, #f59e0b, #ef4444); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">
                                #1
                            </div>
                            <p style="margin-top: 15px; font-size: 20px; font-weight: 600;">First Rank</p>
                            <p style="margin-top: 5px; opacity: 0.9;">SMP Negeri 2 Rantau Badauh</p>
                            <p style="margin-top: 5px; font-size: 14px; opacity: 0.8;">Academic Year 2018/2019</p>
                        </div>
                    </div>
                    
                    <h3 style="color: var(--primary-color); margin: 25px 0 15px;">Tested Subjects</h3>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 12px; margin-bottom: 20px;">
                        <div style="padding: 15px; background: rgba(59, 130, 246, 0.1); border-radius: 10px; border: 2px solid rgba(59, 130, 246, 0.3); text-align: center;">
                            <div style="font-size: 32px; margin-bottom: 8px;">📘</div>
                            <strong>Indonesian Language</strong>
                        </div>
                        <div style="padding: 15px; background: rgba(16, 185, 129, 0.1); border-radius: 10px; border: 2px solid rgba(16, 185, 129, 0.3); text-align: center;">
                            <div style="font-size: 32px; margin-bottom: 8px;">🔢</div>
                            <strong>Mathematics</strong>
                        </div>
                        <div style="padding: 15px; background: rgba(139, 92, 246, 0.1); border-radius: 10px; border: 2px solid rgba(139, 92, 246, 0.3); text-align: center;">
                            <div style="font-size: 32px; margin-bottom: 8px;">🔬</div>
                            <strong>Science</strong>
                        </div>
                        <div style="padding: 15px; background: rgba(236, 72, 153, 0.1); border-radius: 10px; border: 2px solid rgba(236, 72, 153, 0.3); text-align: center;">
                            <div style="font-size: 32px; margin-bottom: 8px;">🌏</div>
                            <strong>English</strong>
                        </div>
                    </div>
                    
                    <div style="background: linear-gradient(135deg, rgba(168, 85, 247, 0.1), rgba(236, 72, 153, 0.1)); padding: 20px; border-radius: 15px; border: 2px solid var(--primary-color); margin-top: 25px;">
                        <h4 style="color: var(--primary-color); margin-bottom: 10px;">🎓 Significance of Achievement</h4>
                        <p style="margin-bottom: 10px;">
                            Achieving first rank in UNBK at the school level demonstrates consistency in learning 
                            and good academic ability across various subjects. This achievement became motivation to 
                            continue developing and achieving at the next educational level.
                        </p>
                    </div>
                </div>
            `
        }
    },

    // python dasar
    {
        id: "cert-python-dicoding",
        type: "certification",
        
        title: {
            id: "Memulai Pemrograman dengan Python",
            en: "Getting Started with Python Programming"
        },
        subtitle: {
            id: "Dicoding Indonesia | Oktober 2024",
            en: "Dicoding Indonesia | October 2024"
        },
        
        description: {
            id: "Sertifikasi Python dari Dicoding dengan 35 jam pembelajaran",
            en: "Python certification from Dicoding with 35 hours of learning"
        },
        
        tags: ["Python", "Programming", "Dicoding"],
        
        content: {
            id: `
                <h2 style="font-size: 28px; margin-bottom: 10px; background: linear-gradient(45deg, var(--primary-color), var(--secondary-color)); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">
                    Memulai Pemrograman dengan Python
                </h2>
                
                <div style="display: flex; gap: 20px; margin-bottom: 25px; flex-wrap: wrap; opacity: 0.9;">
                    <span style="display: flex; align-items: center; gap: 8px;">🏫 <strong>Platform:</strong> Dicoding Indonesia</span>
                    <span style="display: flex; align-items: center; gap: 8px;">📅 <strong>Tanggal:</strong> 29 Oktober 2024</span>
                    <span style="display: flex; align-items: center; gap: 8px;">⏱️ <strong>Durasi:</strong> 35 Jam</span>
                    <span style="display: flex; align-items: center; gap: 8px;">✅ <strong>Berlaku:</strong> s/d 29 Oktober 2027</span>
                </div>
                
                <div style="display: inline-block; background: rgba(168, 85, 247, 0.1); border: 2px solid var(--primary-color); border-radius: 15px; padding: 8px; margin-bottom: 25px; width: 100%; max-width: 700px;">
                    <img src="assets/images/certificates/python-dicoding.png" alt="Sertifikat Python Dicoding" style="display: block; width: 100%; border-radius: 10px; object-fit: cover;">
                    <p style="text-align: center; padding: 10px; opacity: 0.8; font-size: 14px;">Sertifikat Dicoding - ID: 1RXY22GM3XVM</p>
                </div>

                <div style="line-height: 1.8;">
                    <h3 style="color: var(--primary-color); margin: 25px 0 15px;">Tentang Kelas</h3>
                    <p style="margin-bottom: 15px;">
                        Kelas ini ditujukan bagi pemula yang ingin belajar dasar pemrograman Python dengan mengacu pada standar industri. 
                        Menggunakan berbagai IDE seperti Visual Studio Code, Jupyter Notebook, dan Google Colaboratory untuk pembelajaran yang komprehensif.
                    </p>
                    
                    <h3 style="color: var(--primary-color); margin: 25px 0 15px;">Materi yang Dipelajari</h3>
                    <div style="display: grid; gap: 12px; margin-bottom: 20px;">
                        <div style="background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(59, 130, 246, 0.05)); padding: 12px; border-left: 4px solid #3b82f6; border-radius: 8px;">
                            <strong>🐍 Berkenalan dengan Python</strong>
                            <p style="margin-top: 5px; opacity: 0.9; font-size: 14px;">Pengenalan bahasa Python dari perkembangan hingga membuat kode pertama (4 jam)</p>
                        </div>
                        <div style="background: linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(16, 185, 129, 0.05)); padding: 12px; border-left: 4px solid #10b981; border-radius: 8px;">
                            <strong>💾 Berinteraksi dengan Data</strong>
                            <p style="margin-top: 5px; opacity: 0.9; font-size: 14px;">Berbagai macam tipe data dan operasinya (5 jam)</p>
                        </div>
                        <div style="background: linear-gradient(135deg, rgba(245, 158, 11, 0.1), rgba(245, 158, 11, 0.05)); padding: 12px; border-left: 4px solid #f59e0b; border-radius: 8px;">
                            <strong>🔀 Control Flow</strong>
                            <p style="margin-top: 5px; opacity: 0.9; font-size: 14px;">Percabangan, perulangan, dan error handling (3 jam)</p>
                        </div>
                        <div style="background: linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(139, 92, 246, 0.05)); padding: 12px; border-left: 4px solid #8b5cf6; border-radius: 8px;">
                            <strong>📚 Array & Matriks</strong>
                            <p style="margin-top: 5px; opacity: 0.9; font-size: 14px;">Konsep array, matriks dan pemrosesannya (4 jam)</p>
                        </div>
                        <div style="background: linear-gradient(135deg, rgba(236, 72, 153, 0.1), rgba(236, 72, 153, 0.05)); padding: 12px; border-left: 4px solid #ec4899; border-radius: 8px;">
                            <strong>⚙️ Subprogram & OOP</strong>
                            <p style="margin-top: 5px; opacity: 0.9; font-size: 14px;">Fungsi, prosedur, dan pemrograman berorientasi objek (5 jam)</p>
                        </div>
                        <div style="background: linear-gradient(135deg, rgba(239, 68, 68, 0.1), rgba(239, 68, 68, 0.05)); padding: 12px; border-left: 4px solid #ef4444; border-radius: 8px;">
                            <strong>🧪 Testing & Library</strong>
                            <p style="margin-top: 5px; opacity: 0.9; font-size: 14px;">Unit testing, PEP8, dan library populer Python (4 jam)</p>
                        </div>
                    </div>
                    
                    <h3 style="color: var(--primary-color); margin: 25px 0 15px;">Kompetensi yang Dikuasai</h3>
                    <ul style="margin-left: 20px; margin-bottom: 20px;">
                        <li style="margin-bottom: 10px;">Membuat program Python menggunakan berbagai IDE</li>
                        <li style="margin-bottom: 10px;">Menerapkan konsep dasar pemrograman (variabel, tipe data, operator)</li>
                        <li style="margin-bottom: 10px;">Mengimplementasikan control flow dan struktur data</li>
                        <li style="margin-bottom: 10px;">Memahami Object-Oriented Programming (OOP)</li>
                        <li style="margin-bottom: 10px;">Menerapkan style guide PEP8 dan unit testing</li>
                        <li style="margin-bottom: 10px;">Menggunakan library populer untuk berbagai keperluan</li>
                    </ul>
                    
                    <div style="background: linear-gradient(135deg, rgba(168, 85, 247, 0.1), rgba(236, 72, 153, 0.1)); padding: 20px; border-radius: 15px; border: 2px solid var(--primary-color); margin-top: 25px;">
                        <h4 style="color: var(--primary-color); margin-bottom: 10px;">🔗 Verifikasi Sertifikat</h4>
                        <p style="margin-bottom: 12px;">Sertifikat ini dapat diverifikasi melalui:</p>
                        <a href="https://www.dicoding.com/certificates/1RXY22GM3XVM" target="_blank" rel="noopener" style="padding: 10px 20px; background: rgba(59, 130, 246, 0.2); border: 2px solid #3b82f6; border-radius: 20px; color: white; text-decoration: none; display: inline-flex; align-items: center; gap: 8px;">
                            🔍 <strong>dicoding.com/certificates/1RXY22GM3XVM</strong>
                        </a>
                    </div>
                </div>
            `,
            en: `
                <h2 style="font-size: 28px; margin-bottom: 10px; background: linear-gradient(45deg, var(--primary-color), var(--secondary-color)); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">
                    Getting Started with Python Programming
                </h2>
                
                <div style="display: flex; gap: 20px; margin-bottom: 25px; flex-wrap: wrap; opacity: 0.9;">
                    <span style="display: flex; align-items: center; gap: 8px;">🏫 <strong>Platform:</strong> Dicoding Indonesia</span>
                    <span style="display: flex; align-items: center; gap: 8px;">📅 <strong>Date:</strong> October 29, 2024</span>
                    <span style="display: flex; align-items: center; gap: 8px;">⏱️ <strong>Duration:</strong> 35 Hours</span>
                    <span style="display: flex; align-items: center; gap: 8px;">✅ <strong>Valid:</strong> Until October 29, 2027</span>
                </div>
                
                <div style="display: inline-block; background: rgba(168, 85, 247, 0.1); border: 2px solid var(--primary-color); border-radius: 15px; padding: 8px; margin-bottom: 25px; width: 100%; max-width: 700px;">
                    <img src="assets/images/certificates/python-dicoding.png" alt="Python Dicoding Certificate" style="display: block; width: 100%; border-radius: 10px; object-fit: cover;">
                    <p style="text-align: center; padding: 10px; opacity: 0.8; font-size: 14px;">Dicoding Certificate - ID: 1RXY22GM3XVM</p>
                </div>

                <div style="line-height: 1.8;">
                    <h3 style="color: var(--primary-color); margin: 25px 0 15px;">About the Course</h3>
                    <p style="margin-bottom: 15px;">
                        This course is designed for beginners who want to learn Python programming basics following industry standards. 
                        Using various IDEs such as Visual Studio Code, Jupyter Notebook, and Google Colaboratory for comprehensive learning.
                    </p>
                    
                    <h3 style="color: var(--primary-color); margin: 25px 0 15px;">Course Content</h3>
                    <div style="display: grid; gap: 12px; margin-bottom: 20px;">
                        <div style="background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(59, 130, 246, 0.05)); padding: 12px; border-left: 4px solid #3b82f6; border-radius: 8px;">
                            <strong>🐍 Introduction to Python</strong>
                            <p style="margin-top: 5px; opacity: 0.9; font-size: 14px;">Python language introduction from development to first code (4 hours)</p>
                        </div>
                        <div style="background: linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(16, 185, 129, 0.05)); padding: 12px; border-left: 4px solid #10b981; border-radius: 8px;">
                            <strong>💾 Interacting with Data</strong>
                            <p style="margin-top: 5px; opacity: 0.9; font-size: 14px;">Various data types and operations (5 hours)</p>
                        </div>
                        <div style="background: linear-gradient(135deg, rgba(245, 158, 11, 0.1), rgba(245, 158, 11, 0.05)); padding: 12px; border-left: 4px solid #f59e0b; border-radius: 8px;">
                            <strong>🔀 Control Flow</strong>
                            <p style="margin-top: 5px; opacity: 0.9; font-size: 14px;">Branching, loops, and error handling (3 hours)</p>
                        </div>
                        <div style="background: linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(139, 92, 246, 0.05)); padding: 12px; border-left: 4px solid #8b5cf6; border-radius: 8px;">
                            <strong>📚 Arrays & Matrices</strong>
                            <p style="margin-top: 5px; opacity: 0.9; font-size: 14px;">Array and matrix concepts and processing (4 hours)</p>
                        </div>
                        <div style="background: linear-gradient(135deg, rgba(236, 72, 153, 0.1), rgba(236, 72, 153, 0.05)); padding: 12px; border-left: 4px solid #ec4899; border-radius: 8px;">
                            <strong>⚙️ Subprograms & OOP</strong>
                            <p style="margin-top: 5px; opacity: 0.9; font-size: 14px;">Functions, procedures, and object-oriented programming (5 hours)</p>
                        </div>
                        <div style="background: linear-gradient(135deg, rgba(239, 68, 68, 0.1), rgba(239, 68, 68, 0.05)); padding: 12px; border-left: 4px solid #ef4444; border-radius: 8px;">
                            <strong>🧪 Testing & Libraries</strong>
                            <p style="margin-top: 5px; opacity: 0.9; font-size: 14px;">Unit testing, PEP8, and popular Python libraries (4 hours)</p>
                        </div>
                    </div>
                    
                    <h3 style="color: var(--primary-color); margin: 25px 0 15px;">Skills Acquired</h3>
                    <ul style="margin-left: 20px; margin-bottom: 20px;">
                        <li style="margin-bottom: 10px;">Create Python programs using various IDEs</li>
                        <li style="margin-bottom: 10px;">Apply basic programming concepts (variables, data types, operators)</li>
                        <li style="margin-bottom: 10px;">Implement control flow and data structures</li>
                        <li style="margin-bottom: 10px;">Understand Object-Oriented Programming (OOP)</li>
                        <li style="margin-bottom: 10px;">Apply PEP8 style guide and unit testing</li>
                        <li style="margin-bottom: 10px;">Use popular libraries for various purposes</li>
                    </ul>
                    
                    <div style="background: linear-gradient(135deg, rgba(168, 85, 247, 0.1), rgba(236, 72, 153, 0.1)); padding: 20px; border-radius: 15px; border: 2px solid var(--primary-color); margin-top: 25px;">
                        <h4 style="color: var(--primary-color); margin-bottom: 10px;">🔗 Certificate Verification</h4>
                        <p style="margin-bottom: 12px;">This certificate can be verified at:</p>
                        <a href="https://www.dicoding.com/certificates/1RXY22GM3XVM" target="_blank" rel="noopener" style="padding: 10px 20px; background: rgba(59, 130, 246, 0.2); border: 2px solid #3b82f6; border-radius: 20px; color: white; text-decoration: none; display: inline-flex; align-items: center; gap: 8px;">
                            🔍 <strong>dicoding.com/certificates/1RXY22GM3XVM</strong>
                        </a>
                    </div>
                </div>
            `
        }
    },

    // Routing jaringan
    {
        id: "cert-jna",
        type: "certification",
        
        title: {
            id: "Junior Network Administrator",
            en: "Junior Network Administrator"
        },
        subtitle: {
            id: "BNSP - LSP Teknologi Digital | April 2024",
            en: "BNSP - LSP Digital Technology | April 2024"
        },
        
        description: {
            id: "Sertifikasi profesional Network Engineer dari BNSP",
            en: "Professional Network Engineer certification from BNSP"
        },
        
        tags: ["Networking", "BNSP", "Network Engineer"],
        
        content: {
            id: `
                <h2 style="font-size: 28px; margin-bottom: 10px; background: linear-gradient(45deg, var(--primary-color), var(--secondary-color)); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">
                    Junior Network Administrator
                </h2>
                
                <div style="display: flex; gap: 20px; margin-bottom: 25px; flex-wrap: wrap; opacity: 0.9;">
                    <span style="display: flex; align-items: center; gap: 8px;">🏛️ <strong>Lembaga:</strong> BNSP - LSP Teknologi Digital</span>
                    <span style="display: flex; align-items: center; gap: 8px;">📅 <strong>Tanggal:</strong> 25 April 2024</span>
                    <span style="display: flex; align-items: center; gap: 8px;">🆔 <strong>No. Reg:</strong> TIK 1565 11039 2024</span>
                    <span style="display: flex; align-items: center; gap: 8px;">✅ <strong>Berlaku:</strong> 3 Tahun</span>
                </div>
                
                <div style="display: inline-block; background: rgba(168, 85, 247, 0.1); border: 2px solid var(--primary-color); border-radius: 15px; padding: 8px; margin-bottom: 25px; width: 100%; max-width: 700px;">
                    <img src="assets/images/certificates/jna-bnsp.png" alt="Sertifikat JNA BNSP" style="display: block; width: 100%; border-radius: 10px; object-fit: cover;">
                    <p style="text-align: center; padding: 10px; opacity: 0.8; font-size: 14px;">Sertifikat BNSP - No. 61200 3513 3 0088545 2024</p>
                </div>

                <div style="line-height: 1.8;">
                    <h3 style="color: var(--primary-color); margin: 25px 0 15px;">Tentang Sertifikasi</h3>
                    <p style="margin-bottom: 15px;">
                        Sertifikasi Kompetensi Junior Network Administrator yang dikeluarkan oleh Badan Nasional Sertifikasi Profesi (BNSP) 
                        melalui Lembaga Sertifikasi Profesi Teknologi Digital. Sertifikasi ini mengakui kompetensi dalam bidang Network Engineer 
                        dengan fokus pada Rekayasa Jaringan Komputer.
                    </p>
                    
                    <h3 style="color: var(--primary-color); margin: 25px 0 15px;">Unit Kompetensi yang Dikuasai</h3>
                    <div style="display: grid; gap: 12px; margin-bottom: 20px;">
                        <div style="background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(59, 130, 246, 0.05)); padding: 15px; border-left: 4px solid #3b82f6; border-radius: 8px;">
                            <strong style="color: #3b82f6;">J.611000.004.01</strong>
                            <p style="margin-top: 8px; font-weight: 600;">Merancang Pengalamatan Jaringan</p>
                            <p style="margin-top: 5px; opacity: 0.9; font-size: 14px;">Kemampuan merancang skema pengalamatan IP untuk jaringan komputer</p>
                        </div>
                        <div style="background: linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(16, 185, 129, 0.05)); padding: 15px; border-left: 4px solid #10b981; border-radius: 8px;">
                            <strong style="color: #10b981;">J.611000.010.02</strong>
                            <p style="margin-top: 8px; font-weight: 600;">Memasang Jaringan Nirkabel</p>
                            <p style="margin-top: 5px; opacity: 0.9; font-size: 14px;">Instalasi dan konfigurasi wireless network</p>
                        </div>
                        <div style="background: linear-gradient(135deg, rgba(245, 158, 11, 0.1), rgba(245, 158, 11, 0.05)); padding: 15px; border-left: 4px solid #f59e0b; border-radius: 8px;">
                            <strong style="color: #f59e0b;">J.611000.012.02</strong>
                            <p style="margin-top: 8px; font-weight: 600;">Mengkonfigurasi Switch pada Jaringan</p>
                            <p style="margin-top: 5px; opacity: 0.9; font-size: 14px;">Konfigurasi network switch untuk optimasi jaringan</p>
                        </div>
                        <div style="background: linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(139, 92, 246, 0.05)); padding: 15px; border-left: 4px solid #8b5cf6; border-radius: 8px;">
                            <strong style="color: #8b5cf6;">J.611000.013.02</strong>
                            <p style="margin-top: 8px; font-weight: 600;">Mengkonfigurasi Routing - Satu Autonomous System</p>
                            <p style="margin-top: 5px; opacity: 0.9; font-size: 14px;">Routing configuration dalam satu autonomous system</p>
                        </div>
                        <div style="background: linear-gradient(135deg, rgba(236, 72, 153, 0.1), rgba(236, 72, 153, 0.05)); padding: 15px; border-left: 4px solid #ec4899; border-radius: 8px;">
                            <strong style="color: #ec4899;">J.611000.014.02</strong>
                            <p style="margin-top: 8px; font-weight: 600;">Mengkonfigurasi Routing - Antar Autonomous System</p>
                            <p style="margin-top: 5px; opacity: 0.9; font-size: 14px;">Routing configuration antar autonomous system</p>
                        </div>
                    </div>
                    
                    <h3 style="color: var(--primary-color); margin: 25px 0 15px;">Cakupan Keahlian</h3>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 12px; margin-bottom: 20px;">
                        <div style="padding: 15px; background: rgba(59, 130, 246, 0.1); border-radius: 10px; text-align: center;">
                            <div style="font-size: 32px; margin-bottom: 8px;">🌐</div>
                            <strong>Network Design</strong>
                        </div>
                        <div style="padding: 15px; background: rgba(16, 185, 129, 0.1); border-radius: 10px; text-align: center;">
                            <div style="font-size: 32px; margin-bottom: 8px;">📡</div>
                            <strong>Wireless Setup</strong>
                        </div>
                        <div style="padding: 15px; background: rgba(245, 158, 11, 0.1); border-radius: 10px; text-align: center;">
                            <div style="font-size: 32px; margin-bottom: 8px;">🔀</div>
                            <strong>Switch Config</strong>
                        </div>
                        <div style="padding: 15px; background: rgba(139, 92, 246, 0.1); border-radius: 10px; text-align: center;">
                            <div style="font-size: 32px; margin-bottom: 8px;">🔄</div>
                            <strong>Routing</strong>
                        </div>
                    </div>
                    
                    <div style="background: linear-gradient(135deg, rgba(168, 85, 247, 0.1), rgba(236, 72, 153, 0.1)); padding: 20px; border-radius: 15px; border: 2px solid var(--primary-color); margin-top: 25px;">
                        <h4 style="color: var(--primary-color); margin-bottom: 10px;">🎓 Kredensial Resmi</h4>
                        <p style="margin-bottom: 10px;">
                            <strong>Badan Nasional Sertifikasi Profesi (BNSP)</strong> adalah lembaga independen yang bertanggung jawab 
                            kepada Presiden dengan tugas melaksanakan sertifikasi kompetensi profesi bagi tenaga kerja di Indonesia.
                        </p>
                        <p>Sertifikat ini diakui secara nasional dan valid selama 3 tahun sejak tanggal penerbitan.</p>
                    </div>
                </div>
            `,
            en: `
                <h2 style="font-size: 28px; margin-bottom: 10px; background: linear-gradient(45deg, var(--primary-color), var(--secondary-color)); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">
                    Junior Network Administrator
                </h2>
                
                <div style="display: flex; gap: 20px; margin-bottom: 25px; flex-wrap: wrap; opacity: 0.9;">
                    <span style="display: flex; align-items: center; gap: 8px;">🏛️ <strong>Institution:</strong> BNSP - LSP Digital Technology</span>
                    <span style="display: flex; align-items: center; gap: 8px;">📅 <strong>Date:</strong> April 25, 2024</span>
                    <span style="display: flex; align-items: center; gap: 8px;">🆔 <strong>Reg. No:</strong> TIK 1565 11039 2024</span>
                    <span style="display: flex; align-items: center; gap: 8px;">✅ <strong>Valid:</strong> 3 Years</span>
                </div>
                
                <div style="display: inline-block; background: rgba(168, 85, 247, 0.1); border: 2px solid var(--primary-color); border-radius: 15px; padding: 8px; margin-bottom: 25px; width: 100%; max-width: 700px;">
                    <img src="assets/images/certificates/jna-bnsp.png" alt="JNA BNSP Certificate" style="display: block; width: 100%; border-radius: 10px; object-fit: cover;">
                    <p style="text-align: center; padding: 10px; opacity: 0.8; font-size: 14px;">BNSP Certificate - No. 61200 3513 3 0088545 2024</p>
                </div>

                <div style="line-height: 1.8;">
                    <h3 style="color: var(--primary-color); margin: 25px 0 15px;">About Certification</h3>
                    <p style="margin-bottom: 15px;">
                        Junior Network Administrator Competency Certification issued by the Indonesian Professional Certification Authority (BNSP) 
                        through the Professional Certification Body for Digital Technology. This certification recognizes competency in the Network Engineer 
                        field with a focus on Computer Network Engineering.
                    </p>
                    
                    <h3 style="color: var(--primary-color); margin: 25px 0 15px;">Competency Units Mastered</h3>
                    <div style="display: grid; gap: 12px; margin-bottom: 20px;">
                        <div style="background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(59, 130, 246, 0.05)); padding: 15px; border-left: 4px solid #3b82f6; border-radius: 8px;">
                            <strong style="color: #3b82f6;">J.611000.004.01</strong>
                            <p style="margin-top: 8px; font-weight: 600;">Network Addressing Design</p>
                            <p style="margin-top: 5px; opacity: 0.9; font-size: 14px;">Ability to design IP addressing schemes for computer networks</p>
                        </div>
                        <div style="background: linear-gradient(135deg, rgba(245, 158, 11, 0.1), rgba(245, 158, 11, 0.05)); padding: 15px; border-left: 4px solid #f59e0b; border-radius: 8px;">
                            <strong style="color: #f59e0b;">J.611000.012.02</strong>
                            <p style="margin-top: 8px; font-weight: 600;">Network Switch Configuration</p>
                            <p style="margin-top: 5px; opacity: 0.9; font-size: 14px;">Network switch configuration for network optimization</p>
                        </div>
                        <div style="background: linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(139, 92, 246, 0.05)); padding: 15px; border-left: 4px solid #8b5cf6; border-radius: 8px;">
                            <strong style="color: #8b5cf6;">J.611000.013.02</strong>
                            <p style="margin-top: 8px; font-weight: 600;">Routing Configuration - Single Autonomous System</p>
                            <p style="margin-top: 5px; opacity: 0.9; font-size: 14px;">Routing configuration within a single autonomous system</p>
                        </div>
                        <div style="background: linear-gradient(135deg, rgba(236, 72, 153, 0.1), rgba(236, 72, 153, 0.05)); padding: 15px; border-left: 4px solid #ec4899; border-radius: 8px;">
                            <strong style="color: #ec4899;">J.611000.014.02</strong>
                            <p style="margin-top: 8px; font-weight: 600;">Routing Configuration - Inter Autonomous Systems</p>
                            <p style="margin-top: 5px; opacity: 0.9; font-size: 14px;">Routing configuration between autonomous systems</p>
                        </div>
                    </div>
                    
                    <h3 style="color: var(--primary-color); margin: 25px 0 15px;">Expertise Coverage</h3>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 12px; margin-bottom: 20px;">
                        <div style="padding: 15px; background: rgba(59, 130, 246, 0.1); border-radius: 10px; text-align: center;">
                            <div style="font-size: 32px; margin-bottom: 8px;">🌐</div>
                            <strong>Network Design</strong>
                        </div>
                        <div style="padding: 15px; background: rgba(16, 185, 129, 0.1); border-radius: 10px; text-align: center;">
                            <div style="font-size: 32px; margin-bottom: 8px;">📡</div>
                            <strong>Wireless Setup</strong>
                        </div>
                        <div style="padding: 15px; background: rgba(245, 158, 11, 0.1); border-radius: 10px; text-align: center;">
                            <div style="font-size: 32px; margin-bottom: 8px;">🔀</div>
                            <strong>Switch Config</strong>
                        </div>
                        <div style="padding: 15px; background: rgba(139, 92, 246, 0.1); border-radius: 10px; text-align: center;">
                            <div style="font-size: 32px; margin-bottom: 8px;">🔄</div>
                            <strong>Routing</strong>
                        </div>
                    </div>
                    
                    <div style="background: linear-gradient(135deg, rgba(168, 85, 247, 0.1), rgba(236, 72, 153, 0.1)); padding: 20px; border-radius: 15px; border: 2px solid var(--primary-color); margin-top: 25px;">
                        <h4 style="color: var(--primary-color); margin-bottom: 10px;">🎓 Official Credential</h4>
                        <p style="margin-bottom: 10px;">
                            <strong>Indonesian Professional Certification Authority (BNSP)</strong> is an independent body responsible 
                            to the President with the duty to implement professional competency certification for the workforce in Indonesia.
                        </p>
                        <p>This certificate is nationally recognized and valid for 3 years from the date of issue.</p>
                    </div>
                </div>
            `
        }
    },

    // Dasar software engineering
    {
        id: "cert-revou-sefc",
        type: "certification",
        
        title: {
            id: "Introduction to Software Engineering",
            en: "Introduction to Software Engineering"
        },
        subtitle: {
            id: "RevoU | April 2023",
            en: "RevoU | April 2023"
        },
        
        description: {
            id: "Certificate of attendance untuk kursus Software Engineering online 2 minggu",
            en: "Certificate of attendance for 2-weeks online Software Engineering course"
        },
        
        tags: ["Software Engineering", "RevoU", "Online Course"],
        
        content: {
            id: `
                <h2 style="font-size: 28px; margin-bottom: 10px; background: linear-gradient(45deg, var(--primary-color), var(--secondary-color)); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">
                    Introduction to Software Engineering
                </h2>
                
                <div style="display: flex; gap: 20px; margin-bottom: 25px; flex-wrap: wrap; opacity: 0.9;">
                    <span style="display: flex; align-items: center; gap: 8px;">🏫 <strong>Platform:</strong> RevoU</span>
                    <span style="display: flex; align-items: center; gap: 8px;">📅 <strong>Tanggal:</strong> 18 April 2023</span>
                    <span style="display: flex; align-items: center; gap: 8px;">⏱️ <strong>Durasi:</strong> 2 Minggu</span>
                    <span style="display: flex; align-items: center; gap: 8px;">📜 <strong>Jenis:</strong> Certificate of Attendance</span>
                </div>
                
                <div style="display: inline-block; background: rgba(168, 85, 247, 0.1); border: 2px solid var(--primary-color); border-radius: 15px; padding: 8px; margin-bottom: 25px; width: 100%; max-width: 700px;">
                    <img src="assets/images/certificates/revou-sefc.png" alt="Sertifikat RevoU" style="display: block; width: 100%; border-radius: 10px; object-fit: cover;">
                    <p style="text-align: center; padding: 10px; opacity: 0.8; font-size: 14px;">RevoU Software Engineering Certificate</p>
                </div>

                <div style="line-height: 1.8;">
                    <h3 style="color: var(--primary-color); margin: 25px 0 15px;">Tentang Program</h3>
                    <p style="margin-bottom: 15px;">
                        Program Introduction to Software Engineering dari RevoU adalah kursus online intensif selama 2 minggu yang 
                        dirancang untuk memberikan pemahaman dasar tentang software engineering. RevoU adalah platform edukasi teknologi 
                        terkemuka di Indonesia yang fokus pada upskilling profesional.
                    </p>
                    
                    <h3 style="color: var(--primary-color); margin: 25px 0 15px;">Materi yang Dipelajari</h3>
                    <div style="background: rgba(168, 85, 247, 0.05); padding: 20px; border-radius: 12px; margin-bottom: 20px; border: 1px solid rgba(168, 85, 247, 0.2);">
                        <ul style="margin-left: 20px;">
                            <li style="margin-bottom: 12px;"><strong>Software Development Fundamentals</strong> - Dasar-dasar pengembangan perangkat lunak</li>
                            <li style="margin-bottom: 12px;"><strong>Development Lifecycle</strong> - Memahami siklus hidup pengembangan software</li>
                            <li style="margin-bottom: 12px;"><strong>Best Practices</strong> - Praktik terbaik dalam software engineering</li>
                            <li style="margin-bottom: 12px;"><strong>Industry Tools & Technologies</strong> - Pengenalan tools dan teknologi industri</li>
                            <li style="margin-bottom: 12px;"><strong>Team Collaboration</strong> - Kolaborasi dalam tim development</li>
                        </ul>
                    </div>
                    
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 12px; margin-bottom: 20px;">
                        <div style="padding: 15px; background: rgba(59, 130, 246, 0.1); border-radius: 10px; border: 2px solid rgba(59, 130, 246, 0.3);">
                            <div style="font-size: 24px; margin-bottom: 8px;">💻</div>
                            <strong>Development Skills</strong>
                            <p style="margin-top: 8px; font-size: 14px; opacity: 0.9;">Pemahaman proses development</p>
                        </div>
                        <div style="padding: 15px; background: rgba(16, 185, 129, 0.1); border-radius: 10px; border: 2px solid rgba(16, 185, 129, 0.3);">
                            <div style="font-size: 24px; margin-bottom: 8px;">🛠️</div>
                            <strong>Industry Tools</strong>
                            <p style="margin-top: 8px; font-size: 14px; opacity: 0.9;">Pengenalan tools profesional</p>
                        </div>
                        <div style="padding: 15px; background: rgba(245, 158, 11, 0.1); border-radius: 10px; border: 2px solid rgba(245, 158, 11, 0.3);">
                            <div style="font-size: 24px; margin-bottom: 8px;">👥</div>
                            <strong>Collaboration</strong>
                            <p style="margin-top: 8px; font-size: 14px; opacity: 0.9;">Kerja sama tim development</p>
                        </div>
                    </div>
                    
                    <div style="background: linear-gradient(135deg, rgba(168, 85, 247, 0.1), rgba(236, 72, 153, 0.1)); padding: 20px; border-radius: 15px; border: 2px solid var(--primary-color); margin-top: 25px;">
                        <h4 style="color: var(--primary-color); margin-bottom: 10px;">🎓 Tentang RevoU</h4>
                        <p style="margin-bottom: 10px;">
                            RevoU adalah platform pendidikan teknologi terkemuka yang menyediakan program upskilling untuk profesional 
                            dalam bidang Tech, Data, dan Digital Marketing. Program-programnya dirancang untuk mempersiapkan talent 
                            yang siap kerja di industri teknologi.
                        </p>
                        <p><strong>CEO & Co-founder:</strong> Matteo Sutto</p>
                    </div>
                </div>
            `,
            en: `
                <h2 style="font-size: 28px; margin-bottom: 10px; background: linear-gradient(45deg, var(--primary-color), var(--secondary-color)); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">
                    Introduction to Software Engineering
                </h2>
                
                <div style="display: flex; gap: 20px; margin-bottom: 25px; flex-wrap: wrap; opacity: 0.9;">
                    <span style="display: flex; align-items: center; gap: 8px;">🏫 <strong>Platform:</strong> RevoU</span>
                    <span style="display: flex; align-items: center; gap: 8px;">📅 <strong>Date:</strong> April 18, 2023</span>
                    <span style="display: flex; align-items: center; gap: 8px;">⏱️ <strong>Duration:</strong> 2 Weeks</span>
                    <span style="display: flex; align-items: center; gap: 8px;">📜 <strong>Type:</strong> Certificate of Attendance</span>
                </div>
                
                <div style="display: inline-block; background: rgba(168, 85, 247, 0.1); border: 2px solid var(--primary-color); border-radius: 15px; padding: 8px; margin-bottom: 25px; width: 100%; max-width: 700px;">
                    <img src="assets/images/certificates/revou-sefc.png" alt="RevoU Certificate" style="display: block; width: 100%; border-radius: 10px; object-fit: cover;">
                    <p style="text-align: center; padding: 10px; opacity: 0.8; font-size: 14px;">RevoU Software Engineering Certificate</p>
                </div>

                <div style="line-height: 1.8;">
                    <h3 style="color: var(--primary-color); margin: 25px 0 15px;">About the Program</h3>
                    <p style="margin-bottom: 15px;">
                        RevoU's Introduction to Software Engineering is an intensive 2-week online course designed to provide 
                        fundamental understanding of software engineering. RevoU is a leading tech education platform in Indonesia 
                        focused on professional upskilling.
                    </p>
                    
                    <h3 style="color: var(--primary-color); margin: 25px 0 15px;">Course Content</h3>
                    <div style="background: rgba(168, 85, 247, 0.05); padding: 20px; border-radius: 12px; margin-bottom: 20px; border: 1px solid rgba(168, 85, 247, 0.2);">
                        <ul style="margin-left: 20px;">
                            <li style="margin-bottom: 12px;"><strong>Software Development Fundamentals</strong> - Basics of software development</li>
                            <li style="margin-bottom: 12px;"><strong>Development Lifecycle</strong> - Understanding software development lifecycle</li>
                            <li style="margin-bottom: 12px;"><strong>Best Practices</strong> - Software engineering best practices</li>
                            <li style="margin-bottom: 12px;"><strong>Industry Tools & Technologies</strong> - Introduction to industry tools and technologies</li>
                            <li style="margin-bottom: 12px;"><strong>Team Collaboration</strong> - Collaboration in development teams</li>
                        </ul>
                    </div>
                    
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 12px; margin-bottom: 20px;">
                        <div style="padding: 15px; background: rgba(59, 130, 246, 0.1); border-radius: 10px; border: 2px solid rgba(59, 130, 246, 0.3);">
                            <div style="font-size: 24px; margin-bottom: 8px;">💻</div>
                            <strong>Development Skills</strong>
                            <p style="margin-top: 8px; font-size: 14px; opacity: 0.9;">Understanding development process</p>
                        </div>
                        <div style="padding: 15px; background: rgba(16, 185, 129, 0.1); border-radius: 10px; border: 2px solid rgba(16, 185, 129, 0.3);">
                            <div style="font-size: 24px; margin-bottom: 8px;">🛠️</div>
                            <strong>Industry Tools</strong>
                            <p style="margin-top: 8px; font-size: 14px; opacity: 0.9;">Introduction to professional tools</p>
                        </div>
                        <div style="padding: 15px; background: rgba(245, 158, 11, 0.1); border-radius: 10px; border: 2px solid rgba(245, 158, 11, 0.3);">
                            <div style="font-size: 24px; margin-bottom: 8px;">👥</div>
                            <strong>Collaboration</strong>
                            <p style="margin-top: 8px; font-size: 14px; opacity: 0.9;">Development team collaboration</p>
                        </div>
                    </div>
                    
                    <div style="background: linear-gradient(135deg, rgba(168, 85, 247, 0.1), rgba(236, 72, 153, 0.1)); padding: 20px; border-radius: 15px; border: 2px solid var(--primary-color); margin-top: 25px;">
                        <h4 style="color: var(--primary-color); margin-bottom: 10px;">🎓 About RevoU</h4>
                        <p style="margin-bottom: 10px;">
                            RevoU is a leading technology education platform providing upskilling programs for professionals 
                            in Tech, Data, and Digital Marketing. Programs are designed to prepare job-ready talent 
                            for the technology industry.
                        </p>
                        <p><strong>CEO & Co-founder:</strong> Matteo Sutto</p>
                    </div>
                </div>
            `
        }
    },

    // backend dasar
    {
        id: "cert-alterra-backend",
        type: "certification",
        
        title: {
            id: "Workshop Backend 101",
            en: "Workshop Backend 101"
        },
        subtitle: {
            id: "Alterra Academy | Oktober 2022",
            en: "Alterra Academy | October 2022"
        },
        
        description: {
            id: "Workshop backend development dengan score 100",
            en: "Backend development workshop with score 100"
        },
        
        tags: ["Backend", "Alterra", "Workshop"],
        
        content: {
            id: `
                <h2 style="font-size: 28px; margin-bottom: 10px; background: linear-gradient(45deg, var(--primary-color), var(--secondary-color)); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">
                    Workshop Backend 101
                </h2>
                
                <div style="display: flex; gap: 20px; margin-bottom: 25px; flex-wrap: wrap; opacity: 0.9;">
                    <span style="display: flex; align-items: center; gap: 8px;">🏫 <strong>Platform:</strong> Alterra Academy</span>
                    <span style="display: flex; align-items: center; gap: 8px;">📅 <strong>Tanggal:</strong> 24 Oktober 2022</span>
                    <span style="display: flex; align-items: center; gap: 8px;">⭐ <strong>Score:</strong> 100</span>
                    <span style="display: flex; align-items: center; gap: 8px;">📜 <strong>No:</strong> 032/SER/BE101/X/2022</span>
                </div>
                
                <div style="display: inline-block; background: rgba(168, 85, 247, 0.1); border: 2px solid var(--primary-color); border-radius: 15px; padding: 8px; margin-bottom: 25px; width: 100%; max-width: 700px;">
                    <img src="assets/images/certificates/alterra-backend.jpg" alt="Alterra Backend Certificate" style="display: block; width: 100%; border-radius: 10px; object-fit: cover;">
                    <p style="text-align: center; padding: 10px; opacity: 0.8; font-size: 14px;">Certificate of Completion - Alterra Academy</p>
                </div>

                <div style="line-height: 1.8;">
                    <h3 style="color: var(--primary-color); margin: 25px 0 15px;">Tentang Workshop</h3>
                    <p style="margin-bottom: 15px;">
                        Workshop Backend 101 dari Alterra Academy memberikan pemahaman fundamental tentang backend development. 
                        Workshop ini fokus pada konsep-konsep dasar yang diperlukan untuk membangun aplikasi backend yang robust dan scalable.
                    </p>
                    
                    <h3 style="color: var(--primary-color); margin: 25px 0 15px;">Materi Workshop</h3>
                    <div style="display: grid; gap: 12px; margin-bottom: 20px;">
                        <div style="background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(59, 130, 246, 0.05)); padding: 12px; border-left: 4px solid #3b82f6; border-radius: 8px;">
                            <strong>🔧 Backend Fundamentals</strong>
                            <p style="margin-top: 5px; opacity: 0.9; font-size: 14px;">Konsep dasar backend development dan arsitektur</p>
                        </div>
                        <div style="background: linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(16, 185, 129, 0.05)); padding: 12px; border-left: 4px solid #10b981; border-radius: 8px;">
                            <strong>🗄️ Database Management</strong>
                            <p style="margin-top: 5px; opacity: 0.9; font-size: 14px;">Pengelolaan database dan query optimization</p>
                        </div>
                        <div style="background: linear-gradient(135deg, rgba(245, 158, 11, 0.1), rgba(245, 158, 11, 0.05)); padding: 12px; border-left: 4px solid #f59e0b; border-radius: 8px;">
                            <strong>🔌 API Development</strong>
                            <p style="margin-top: 5px; opacity: 0.9; font-size: 14px;">Membangun RESTful API yang efisien</p>
                        </div>
                        <div style="background: linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(139, 92, 246, 0.05)); padding: 12px; border-left: 4px solid #8b5cf6; border-radius: 8px;">
                            <strong>🔐 Security Best Practices</strong>
                            <p style="margin-top: 5px; opacity: 0.9; font-size: 14px;">Keamanan aplikasi backend dan authentication</p>
                        </div>
                    </div>
                    
                    <div style="background: linear-gradient(135deg, rgba(168, 85, 247, 0.1), rgba(236, 72, 153, 0.1)); padding: 20px; border-radius: 15px; border: 2px solid var(--primary-color); margin-top: 25px;">
                        <h4 style="color: var(--primary-color); margin-bottom: 10px;">🎯 Pencapaian</h4>
                        <div style="text-align: center; margin: 15px 0;">
                            <div style="display: inline-block; padding: 20px 40px; background: rgba(16, 185, 129, 0.2); border-radius: 50%; border: 3px solid #10b981;">
                                <span style="font-size: 48px; font-weight: bold; color: #10b981;">100</span>
                            </div>
                            <p style="margin-top: 10px; font-weight: 600;">Perfect Score Achievement</p>
                        </div>
                    </div>
                </div>
            `,
            en: `
                <h2 style="font-size: 28px; margin-bottom: 10px; background: linear-gradient(45deg, var(--primary-color), var(--secondary-color)); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">
                    Workshop Backend 101
                </h2>
                
                <div style="display: flex; gap: 20px; margin-bottom: 25px; flex-wrap: wrap; opacity: 0.9;">
                    <span style="display: flex; align-items: center; gap: 8px;">🏫 <strong>Platform:</strong> Alterra Academy</span>
                    <span style="display: flex; align-items: center; gap: 8px;">📅 <strong>Date:</strong> October 24, 2022</span>
                    <span style="display: flex; align-items: center; gap: 8px;">⭐ <strong>Score:</strong> 100</span>
                    <span style="display: flex; align-items: center; gap: 8px;">📜 <strong>No:</strong> 032/SER/BE101/X/2022</span>
                </div>
                
                <div style="display: inline-block; background: rgba(168, 85, 247, 0.1); border: 2px solid var(--primary-color); border-radius: 15px; padding: 8px; margin-bottom: 25px; width: 100%; max-width: 700px;">
                    <img src="assets/images/certificates/alterra-backend.jpg" alt="Alterra Backend Certificate" style="display: block; width: 100%; border-radius: 10px; object-fit: cover;">
                    <p style="text-align: center; padding: 10px; opacity: 0.8; font-size: 14px;">Certificate of Completion - Alterra Academy</p>
                </div>

                <div style="line-height: 1.8;">
                    <h3 style="color: var(--primary-color); margin: 25px 0 15px;">About Workshop</h3>
                    <p style="margin-bottom: 15px;">
                        Backend 101 Workshop from Alterra Academy provides fundamental understanding of backend development. 
                        This workshop focuses on basic concepts needed to build robust and scalable backend applications.
                    </p>
                    
                    <h3 style="color: var(--primary-color); margin: 25px 0 15px;">Workshop Content</h3>
                    <div style="display: grid; gap: 12px; margin-bottom: 20px;">
                        <div style="background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(59, 130, 246, 0.05)); padding: 12px; border-left: 4px solid #3b82f6; border-radius: 8px;">
                            <strong>🔧 Backend Fundamentals</strong>
                            <p style="margin-top: 5px; opacity: 0.9; font-size: 14px;">Backend development basics and architecture</p>
                        </div>
                        <div style="background: linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(16, 185, 129, 0.05)); padding: 12px; border-left: 4px solid #10b981; border-radius: 8px;">
                            <strong>🗄️ Database Management</strong>
                            <p style="margin-top: 5px; opacity: 0.9; font-size: 14px;">Database management and query optimization</p>
                        </div>
                        <div style="background: linear-gradient(135deg, rgba(245, 158, 11, 0.1), rgba(245, 158, 11, 0.05)); padding: 12px; border-left: 4px solid #f59e0b; border-radius: 8px;">
                            <strong>🔌 API Development</strong>
                            <p style="margin-top: 5px; opacity: 0.9; font-size: 14px;">Building efficient RESTful APIs</p>
                        </div>
                        <div style="background: linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(139, 92, 246, 0.05)); padding: 12px; border-left: 4px solid #8b5cf6; border-radius: 8px;">
                            <strong>🔐 Security Best Practices</strong>
                            <p style="margin-top: 5px; opacity: 0.9; font-size: 14px;">Backend security and authentication</p>
                        </div>
                    </div>
                    
                    <div style="background: linear-gradient(135deg, rgba(168, 85, 247, 0.1), rgba(236, 72, 153, 0.1)); padding: 20px; border-radius: 15px; border: 2px solid var(--primary-color); margin-top: 25px;">
                        <h4 style="color: var(--primary-color); margin-bottom: 10px;">🎯 Achievement</h4>
                        <div style="text-align: center; margin: 15px 0;">
                            <div style="display: inline-block; padding: 20px 40px; background: rgba(16, 185, 129, 0.2); border-radius: 50%; border: 3px solid #10b981;">
                                <span style="font-size: 48px; font-weight: bold; color: #10b981;">100</span>
                            </div>
                            <p style="margin-top: 10px; font-weight: 600;">Perfect Score Achievement</p>
                        </div>
                    </div>
                </div>
            `
        }
    },

    // frontend dasar
    {
        id: "cert-alterra-frontend",
        type: "certification",
        
        title: {
            id: "Workshop Basic Frontend Development",
            en: "Workshop Basic Frontend Development"
        },
        subtitle: {
            id: "Alterra Academy | Oktober 2022",
            en: "Alterra Academy | October 2022"
        },
        
        description: {
            id: "Workshop frontend development dengan score 90",
            en: "Frontend development workshop with score 90"
        },
        
        tags: ["Frontend", "Alterra", "Workshop"],
        
        content: {
            id: `
                <h2 style="font-size: 28px; margin-bottom: 10px; background: linear-gradient(45deg, var(--primary-color), var(--secondary-color)); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">
                    Workshop Basic Frontend Development
                </h2>
                
                <div style="display: flex; gap: 20px; margin-bottom: 25px; flex-wrap: wrap; opacity: 0.9;">
                    <span style="display: flex; align-items: center; gap: 8px;">🏫 <strong>Platform:</strong> Alterra Academy</span>
                    <span style="display: flex; align-items: center; gap: 8px;">📅 <strong>Tanggal:</strong> 25 Oktober 2022</span>
                    <span style="display: flex; align-items: center; gap: 8px;">⭐ <strong>Score:</strong> 90</span>
                    <span style="display: flex; align-items: center; gap: 8px;">📜 <strong>No:</strong> 102/SER/BFD/X/2022</span>
                </div>
                
                <div style="display: inline-block; background: rgba(168, 85, 247, 0.1); border: 2px solid var(--primary-color); border-radius: 15px; padding: 8px; margin-bottom: 25px; width: 100%; max-width: 700px;">
                    <img src="assets/images/certificates/alterra-frontend.jpg" alt="Alterra Frontend Certificate" style="display: block; width: 100%; border-radius: 10px; object-fit: cover;">
                    <p style="text-align: center; padding: 10px; opacity: 0.8; font-size: 14px;">Certificate of Completion - Alterra Academy</p>
                </div>

                <div style="line-height: 1.8;">
                    <h3 style="color: var(--primary-color); margin: 25px 0 15px;">Tentang Workshop</h3>
                    <p style="margin-bottom: 15px;">
                        Workshop Basic Frontend Development dari Alterra Academy memberikan pemahaman mendalam tentang pengembangan 
                        antarmuka pengguna modern. Fokus pada HTML, CSS, JavaScript, dan framework modern untuk membangun aplikasi web yang interaktif.
                    </p>
                    
                    <h3 style="color: var(--primary-color); margin: 25px 0 15px;">Materi Workshop</h3>
                    <div style="display: grid; gap: 12px; margin-bottom: 20px;">
                        <div style="background: linear-gradient(135deg, rgba(239, 68, 68, 0.1), rgba(239, 68, 68, 0.05)); padding: 12px; border-left: 4px solid #ef4444; border-radius: 8px;">
                            <strong>🎨 HTML & CSS Fundamentals</strong>
                            <p style="margin-top: 5px; opacity: 0.9; font-size: 14px;">Struktur HTML semantic dan styling dengan CSS modern</p>
                        </div>
                        <div style="background: linear-gradient(135deg, rgba(245, 158, 11, 0.1), rgba(245, 158, 11, 0.05)); padding: 12px; border-left: 4px solid #f59e0b; border-radius: 8px;">
                            <strong>⚡ JavaScript Essentials</strong>
                            <p style="margin-top: 5px; opacity: 0.9; font-size: 14px;">JavaScript dasar untuk interaktivitas web</p>
                        </div>
                        <div style="background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(59, 130, 246, 0.05)); padding: 12px; border-left: 4px solid #3b82f6; border-radius: 8px;">
                            <strong>📱 Responsive Design</strong>
                            <p style="margin-top: 5px; opacity: 0.9; font-size: 14px;">Membuat tampilan responsif untuk semua device</p>
                        </div>
                        <div style="background: linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(16, 185, 129, 0.05)); padding: 12px; border-left: 4px solid #10b981; border-radius: 8px;">
                            <strong>🔄 Modern Frontend Tools</strong>
                            <p style="margin-top: 5px; opacity: 0.9; font-size: 14px;">Tools dan framework frontend modern</p>
                        </div>
                    </div>
                    
                    <div style="background: linear-gradient(135deg, rgba(168, 85, 247, 0.1), rgba(236, 72, 153, 0.1)); padding: 20px; border-radius: 15px; border: 2px solid var(--primary-color); margin-top: 25px;">
                        <h4 style="color: var(--primary-color); margin-bottom: 10px;">🎯 Pencapaian</h4>
                        <div style="text-align: center; margin: 15px 0;">
                            <div style="display: inline-block; padding: 20px 40px; background: rgba(59, 130, 246, 0.2); border-radius: 50%; border: 3px solid #3b82f6;">
                                <span style="font-size: 48px; font-weight: bold; color: #3b82f6;">90</span>
                            </div>
                            <p style="margin-top: 10px; font-weight: 600;">Excellent Score Achievement</p>
                        </div>
                    </div>
                </div>
            `,
            en: `
                <h2 style="font-size: 28px; margin-bottom: 10px; background: linear-gradient(45deg, var(--primary-color), var(--secondary-color)); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">
                    Workshop Basic Frontend Development
                </h2>
                
                <div style="display: flex; gap: 20px; margin-bottom: 25px; flex-wrap: wrap; opacity: 0.9;">
                    <span style="display: flex; align-items: center; gap: 8px;">🏫 <strong>Platform:</strong> Alterra Academy</span>
                    <span style="display: flex; align-items: center; gap: 8px;">📅 <strong>Date:</strong> October 25, 2022</span>
                    <span style="display: flex; align-items: center; gap: 8px;">⭐ <strong>Score:</strong> 90</span>
                    <span style="display: flex; align-items: center; gap: 8px;">📜 <strong>No:</strong> 102/SER/BFD/X/2022</span>
                </div>
                
                <div style="display: inline-block; background: rgba(168, 85, 247, 0.1); border: 2px solid var(--primary-color); border-radius: 15px; padding: 8px; margin-bottom: 25px; width: 100%; max-width: 700px;">
                    <img src="assets/images/certificates/alterra-frontend.jpg" alt="Alterra Frontend Certificate" style="display: block; width: 100%; border-radius: 10px; object-fit: cover;">
                    <p style="text-align: center; padding: 10px; opacity: 0.8; font-size: 14px;">Certificate of Completion - Alterra Academy</p>
                </div>

                <div style="line-height: 1.8;">
                    <h3 style="color: var(--primary-color); margin: 25px 0 15px;">About Workshop</h3>
                    <p style="margin-bottom: 15px;">
                        Basic Frontend Development Workshop from Alterra Academy provides in-depth understanding of modern 
                        user interface development. Focus on HTML, CSS, JavaScript, and modern frameworks to build interactive web applications.
                    </p>
                    
                    <h3 style="color: var(--primary-color); margin: 25px 0 15px;">Workshop Content</h3>
                    <div style="display: grid; gap: 12px; margin-bottom: 20px;">
                        <div style="background: linear-gradient(135deg, rgba(239, 68, 68, 0.1), rgba(239, 68, 68, 0.05)); padding: 12px; border-left: 4px solid #ef4444; border-radius: 8px;">
                            <strong>🎨 HTML & CSS Fundamentals</strong>
                            <p style="margin-top: 5px; opacity: 0.9; font-size: 14px;">Semantic HTML structure and modern CSS styling</p>
                        </div>
                        <div style="background: linear-gradient(135deg, rgba(245, 158, 11, 0.1), rgba(245, 158, 11, 0.05)); padding: 12px; border-left: 4px solid #f59e0b; border-radius: 8px;">
                            <strong>⚡ JavaScript Essentials</strong>
                            <p style="margin-top: 5px; opacity: 0.9; font-size: 14px;">Basic JavaScript for web interactivity</p>
                        </div>
                        <div style="background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(59, 130, 246, 0.05)); padding: 12px; border-left: 4px solid #3b82f6; border-radius: 8px;">
                            <strong>📱 Responsive Design</strong>
                            <p style="margin-top: 5px; opacity: 0.9; font-size: 14px;">Creating responsive layouts for all devices</p>
                        </div>
                        <div style="background: linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(16, 185, 129, 0.05)); padding: 12px; border-left: 4px solid #10b981; border-radius: 8px;">
                            <strong>🔄 Modern Frontend Tools</strong>
                            <p style="margin-top: 5px; opacity: 0.9; font-size: 14px;">Modern frontend tools and frameworks</p>
                        </div>
                    </div>
                    
                    <div style="background: linear-gradient(135deg, rgba(168, 85, 247, 0.1), rgba(236, 72, 153, 0.1)); padding: 20px; border-radius: 15px; border: 2px solid var(--primary-color); margin-top: 25px;">
                        <h4 style="color: var(--primary-color); margin-bottom: 10px;">🎯 Achievement</h4>
                        <div style="text-align: center; margin: 15px 0;">
                            <div style="display: inline-block; padding: 20px 40px; background: rgba(59, 130, 246, 0.2); border-radius: 50%; border: 3px solid #3b82f6;">
                                <span style="font-size: 48px; font-weight: bold; color: #3b82f6;">90</span>
                            </div>
                            <p style="margin-top: 10px; font-weight: 600;">Excellent Score Achievement</p>
                        </div>
                    </div>
                </div>
            `
        }
    },

    // quality assurance
    {
        id: "cert-alterra-qa",
        type: "certification",
        
        title: {
            id: "Workshop Quality Assurance 101",
            en: "Workshop Quality Assurance 101"
        },
        subtitle: {
            id: "Alterra Academy | Oktober 2022",
            en: "Alterra Academy | October 2022"
        },
        
        description: {
            id: "Workshop quality assurance dengan score 80",
            en: "Quality assurance workshop with score 80"
        },
        
        tags: ["QA", "Testing", "Alterra"],
        
        content: {
            id: `
                <h2 style="font-size: 28px; margin-bottom: 10px; background: linear-gradient(45deg, var(--primary-color), var(--secondary-color)); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">
                    Workshop Quality Assurance 101
                </h2>
                
                <div style="display: flex; gap: 20px; margin-bottom: 25px; flex-wrap: wrap; opacity: 0.9;">
                    <span style="display: flex; align-items: center; gap: 8px;">🏫 <strong>Platform:</strong> Alterra Academy</span>
                    <span style="display: flex; align-items: center; gap: 8px;">📅 <strong>Tanggal:</strong> 26 Oktober 2022</span>
                    <span style="display: flex; align-items: center; gap: 8px;">⭐ <strong>Score:</strong> 80</span>
                    <span style="display: flex; align-items: center; gap: 8px;">📜 <strong>No:</strong> 201/SER/QA101/X/2022</span>
                </div>
                
                <div style="display: inline-block; background: rgba(168, 85, 247, 0.1); border: 2px solid var(--primary-color); border-radius: 15px; padding: 8px; margin-bottom: 25px; width: 100%; max-width: 700px;">
                    <img src="assets/images/certificates/alterra-qa.jpg" alt="Alterra QA Certificate" style="display: block; width: 100%; border-radius: 10px; object-fit: cover;">
                    <p style="text-align: center; padding: 10px; opacity: 0.8; font-size: 14px;">Certificate of Completion - Alterra Academy</p>
                </div>

                <div style="line-height: 1.8;">
                    <h3 style="color: var(--primary-color); margin: 25px 0 15px;">Tentang Workshop</h3>
                    <p style="margin-bottom: 15px;">
                        Workshop Quality Assurance 101 dari Alterra Academy memberikan pemahaman tentang pentingnya quality assurance 
                        dalam pengembangan software. Fokus pada metodologi testing, test case design, dan best practices dalam QA.
                    </p>
                    
                    <h3 style="color: var(--primary-color); margin: 25px 0 15px;">Materi Workshop</h3>
                    <div style="display: grid; gap: 12px; margin-bottom: 20px;">
                        <div style="background: linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(139, 92, 246, 0.05)); padding: 12px; border-left: 4px solid #8b5cf6; border-radius: 8px;">
                            <strong>🎯 QA Fundamentals</strong>
                            <p style="margin-top: 5px; opacity: 0.9; font-size: 14px;">Dasar-dasar quality assurance dan software testing</p>
                        </div>
                        <div style="background: linear-gradient(135deg, rgba(236, 72, 153, 0.1), rgba(236, 72, 153, 0.05)); padding: 12px; border-left: 4px solid #ec4899; border-radius: 8px;">
                            <strong>📝 Test Case Design</strong>
                            <p style="margin-top: 5px; opacity: 0.9; font-size: 14px;">Merancang test case yang efektif dan komprehensif</p>
                        </div>
                        <div style="background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(59, 130, 246, 0.05)); padding: 12px; border-left: 4px solid #3b82f6; border-radius: 8px;">
                            <strong>🧪 Testing Types</strong>
                            <p style="margin-top: 5px; opacity: 0.9; font-size: 14px;">Manual testing, automation, dan berbagai metodologi testing</p>
                        </div>
                        <div style="background: linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(16, 185, 129, 0.05)); padding: 12px; border-left: 4px solid #10b981; border-radius: 8px;">
                            <strong>🐛 Bug Reporting</strong>
                            <p style="margin-top: 5px; opacity: 0.9; font-size: 14px;">Dokumentasi bug dan komunikasi dengan development team</p>
                        </div>
                    </div>
                    
                    <div style="background: linear-gradient(135deg, rgba(168, 85, 247, 0.1), rgba(236, 72, 153, 0.1)); padding: 20px; border-radius: 15px; border: 2px solid var(--primary-color); margin-top: 25px;">
                        <h4 style="color: var(--primary-color); margin-bottom: 10px;">🎯 Pencapaian</h4>
                        <div style="text-align: center; margin: 15px 0;">
                            <div style="display: inline-block; padding: 20px 40px; background: rgba(139, 92, 246, 0.2); border-radius: 50%; border: 3px solid #8b5cf6;">
                                <span style="font-size: 48px; font-weight: bold; color: #8b5cf6;">80</span>
                            </div>
                            <p style="margin-top: 10px; font-weight: 600;">Good Score Achievement</p>
                        </div>
                    </div>
                </div>
            `,
            en: `
                <h2 style="font-size: 28px; margin-bottom: 10px; background: linear-gradient(45deg, var(--primary-color), var(--secondary-color)); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">
                    Workshop Quality Assurance 101
                </h2>
                
                <div style="display: flex; gap: 20px; margin-bottom: 25px; flex-wrap: wrap; opacity: 0.9;">
                    <span style="display: flex; align-items: center; gap: 8px;">🏫 <strong>Platform:</strong> Alterra Academy</span>
                    <span style="display: flex; align-items: center; gap: 8px;">📅 <strong>Date:</strong> October 26, 2022</span>
                    <span style="display: flex; align-items: center; gap: 8px;">⭐ <strong>Score:</strong> 80</span>
                    <span style="display: flex; align-items: center; gap: 8px;">📜 <strong>No:</strong> 201/SER/QA101/X/2022</span>
                </div>
                
                <div style="display: inline-block; background: rgba(168, 85, 247, 0.1); border: 2px solid var(--primary-color); border-radius: 15px; padding: 8px; margin-bottom: 25px; width: 100%; max-width: 700px;">
                    <img src="assets/images/certificates/alterra-qa.jpg" alt="Alterra QA Certificate" style="display: block; width: 100%; border-radius: 10px; object-fit: cover;">
                    <p style="text-align: center; padding: 10px; opacity: 0.8; font-size: 14px;">Certificate of Completion - Alterra Academy</p>
                </div>

                <div style="line-height: 1.8;">
                    <h3 style="color: var(--primary-color); margin: 25px 0 15px;">About Workshop</h3>
                    <p style="margin-bottom: 15px;">
                        Quality Assurance 101 Workshop from Alterra Academy provides understanding of the importance of quality assurance 
                        in software development. Focus on testing methodology, test case design, and QA best practices.
                    </p>
                    
                    <h3 style="color: var(--primary-color); margin: 25px 0 15px;">Workshop Content</h3>
                    <div style="display: grid; gap: 12px; margin-bottom: 20px;">
                        <div style="background: linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(139, 92, 246, 0.05)); padding: 12px; border-left: 4px solid #8b5cf6; border-radius: 8px;">
                            <strong>🎯 QA Fundamentals</strong>
                            <p style="margin-top: 5px; opacity: 0.9; font-size: 14px;">Quality assurance basics and software testing</p>
                        </div>
                        <div style="background: linear-gradient(135deg, rgba(236, 72, 153, 0.1), rgba(236, 72, 153, 0.05)); padding: 12px; border-left: 4px solid #ec4899; border-radius: 8px;">
                            <strong>📝 Test Case Design</strong>
                            <p style="margin-top: 5px; opacity: 0.9; font-size: 14px;">Designing effective and comprehensive test cases</p>
                        </div>
                        <div style="background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(59, 130, 246, 0.05)); padding: 12px; border-left: 4px solid #3b82f6; border-radius: 8px;">
                            <strong>🧪 Testing Types</strong>
                            <p style="margin-top: 5px; opacity: 0.9; font-size: 14px;">Manual testing, automation, and various testing methodologies</p>
                        </div>
                        <div style="background: linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(16, 185, 129, 0.05)); padding: 12px; border-left: 4px solid #10b981; border-radius: 8px;">
                            <strong>🐛 Bug Reporting</strong>
                            <p style="margin-top: 5px; opacity: 0.9; font-size: 14px;">Bug documentation and communication with development team</p>
                        </div>
                    </div>
                    
                    <div style="background: linear-gradient(135deg, rgba(168, 85, 247, 0.1), rgba(236, 72, 153, 0.1)); padding: 20px; border-radius: 15px; border: 2px solid var(--primary-color); margin-top: 25px;">
                        <h4 style="color: var(--primary-color); margin-bottom: 10px;">🎯 Achievement</h4>
                        <div style="text-align: center; margin: 15px 0;">
                            <div style="display: inline-block; padding: 20px 40px; background: rgba(139, 92, 246, 0.2); border-radius: 50%; border: 3px solid #8b5cf6;">
                                <span style="font-size: 48px; font-weight: bold; color: #8b5cf6;">80</span>
                            </div>
                            <p style="margin-top: 10px; font-weight: 600;">Good Score Achievement</p>
                        </div>
                    </div>
                </div>
            `
        }
    },

    // Creative Critical
    {
        id: "cert-creative-canvas",
        type: "certification",
        
        title: {
            id: "Workshop Creative Critical Canvas",
            en: "Workshop Creative Critical Canvas"
        },
        subtitle: {
            id: "Edutechnium | Oktober 2022",
            en: "Edutechnium | October 2022"
        },
        
        description: {
            id: "Workshop Creative Critical Canvas via Zoom Meeting",
            en: "Creative Critical Canvas workshop via Zoom Meeting"
        },
        
        tags: ["Workshop", "Creative Thinking", "Edutechnium"],
        
        content: {
            id: `
                <h2 style="font-size: 28px; margin-bottom: 10px; background: linear-gradient(45deg, var(--primary-color), var(--secondary-color)); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">
                    Workshop Creative Critical Canvas
                </h2>
                
                <div style="display: flex; gap: 20px; margin-bottom: 25px; flex-wrap: wrap; opacity: 0.9;">
                    <span style="display: flex; align-items: center; gap: 8px;">🏫 <strong>Penyelenggara:</strong> Edutechnium</span>
                    <span style="display: flex; align-items: center; gap: 8px;">📅 <strong>Tanggal:</strong> 14 Oktober 2022</span>
                    <span style="display: flex; align-items: center; gap: 8px;">⏰ <strong>Waktu:</strong> 16:00-18:00 WITA</span>
                    <span style="display: flex; align-items: center; gap: 8px;">💻 <strong>Platform:</strong> Zoom Meeting</span>
                </div>
                
                <div style="display: inline-block; background: rgba(168, 85, 247, 0.1); border: 2px solid var(--primary-color); border-radius: 15px; padding: 8px; margin-bottom: 25px; width: 100%; max-width: 700px;">
                    <img src="assets/images/certificates/ccc.png" alt="Creative Critical Canvas Certificate" style="display: block; width: 100%; border-radius: 10px; object-fit: cover;">
                    <p style="text-align: center; padding: 10px; opacity: 0.8; font-size: 14px;">Sertifikat Workshop - No: 08.01/ccc/X/2022</p>
                </div>

                <div style="line-height: 1.8;">
                    <h3 style="color: var(--primary-color); margin: 25px 0 15px;">Tentang Workshop</h3>
                    <p style="margin-bottom: 15px;">
                        Workshop Creative Critical Canvas adalah program dari Edutechnium (Center of Educational Technology) 
                        yang fokus pada pengembangan kemampuan berpikir kreatif dan kritis. Workshop ini dilaksanakan secara 
                        online via Zoom Meeting selama 2 jam.
                    </p>
                    
                    <h3 style="color: var(--primary-color); margin: 25px 0 15px;">Fokus Workshop</h3>
                    <div style="display: grid; gap: 12px; margin-bottom: 20px;">
                        <div style="background: linear-gradient(135deg, rgba(236, 72, 153, 0.1), rgba(236, 72, 153, 0.05)); padding: 12px; border-left: 4px solid #ec4899; border-radius: 8px;">
                            <strong>🎨 Creative Thinking</strong>
                            <p style="margin-top: 5px; opacity: 0.9; font-size: 14px;">Pengembangan kemampuan berpikir kreatif dan inovatif</p>
                        </div>
                        <div style="background: linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(139, 92, 246, 0.05)); padding: 12px; border-left: 4px solid #8b5cf6; border-radius: 8px;">
                            <strong>🧠 Critical Thinking</strong>
                            <p style="margin-top: 5px; opacity: 0.9; font-size: 14px;">Kemampuan analisis dan pemikiran kritis</p>
                        </div>
                        <div style="background: linear-gradient(135deg, rgba(245, 158, 11, 0.1), rgba(245, 158, 11, 0.05)); padding: 12px; border-left: 4px solid #f59e0b; border-radius: 8px;">
                            <strong>🎯 Problem Solving</strong>
                            <p style="margin-top: 5px; opacity: 0.9; font-size: 14px;">Pendekatan kreatif dalam menyelesaikan masalah</p>
                        </div>
                    </div>
                    
                    <div style="background: linear-gradient(135deg, rgba(168, 85, 247, 0.1), rgba(236, 72, 153, 0.1)); padding: 20px; border-radius: 15px; border: 2px solid var(--primary-color); margin-top: 25px;">
                        <h4 style="color: var(--primary-color); margin-bottom: 10px;">🎓 Tentang Edutechnium</h4>
                        <p style="margin-bottom: 10px;">
                            Edutechnium (Center of Educational Technology) adalah lembaga yang fokus pada pengembangan 
                            kompetensi melalui workshop dan pelatihan berbasis teknologi pendidikan.
                        </p>
                        <p><strong>Direktur:</strong> Wahyu Ridhoni, S.Kom., M.Eng</p>
                    </div>
                </div>
            `,
            en: `
                <h2 style="font-size: 28px; margin-bottom: 10px; background: linear-gradient(45deg, var(--primary-color), var(--secondary-color)); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">
                    Workshop Creative Critical Canvas
                </h2>
                
                <div style="display: flex; gap: 20px; margin-bottom: 25px; flex-wrap: wrap; opacity: 0.9;">
                    <span style="display: flex; align-items: center; gap: 8px;">🏫 <strong>Organizer:</strong> Edutechnium</span>
                    <span style="display: flex; align-items: center; gap: 8px;">📅 <strong>Date:</strong> October 14, 2022</span>
                    <span style="display: flex; align-items: center; gap: 8px;">⏰ <strong>Time:</strong> 16:00-18:00 WITA</span>
                    <span style="display: flex; align-items: center; gap: 8px;">💻 <strong>Platform:</strong> Zoom Meeting</span>
                </div>
                
                <div style="display: inline-block; background: rgba(168, 85, 247, 0.1); border: 2px solid var(--primary-color); border-radius: 15px; padding: 8px; margin-bottom: 25px; width: 100%; max-width: 700px;">
                    <img src="assets/images/certificates/ccc.png" alt="Creative Critical Canvas Certificate" style="display: block; width: 100%; border-radius: 10px; object-fit: cover;">
                    <p style="text-align: center; padding: 10px; opacity: 0.8; font-size: 14px;">Workshop Certificate - No: 08.01/ccc/X/2022</p>
                </div>

                <div style="line-height: 1.8;">
                    <h3 style="color: var(--primary-color); margin: 25px 0 15px;">About Workshop</h3>
                    <p style="margin-bottom: 15px;">
                        Creative Critical Canvas Workshop is a program from Edutechnium (Center of Educational Technology) 
                        focusing on developing creative and critical thinking skills. The workshop was conducted 
                        online via Zoom Meeting for 2 hours.
                    </p>
                    
                    <h3 style="color: var(--primary-color); margin: 25px 0 15px;">Workshop Focus</h3>
                    <div style="display: grid; gap: 12px; margin-bottom: 20px;">
                        <div style="background: linear-gradient(135deg, rgba(236, 72, 153, 0.1), rgba(236, 72, 153, 0.05)); padding: 12px; border-left: 4px solid #ec4899; border-radius: 8px;">
                            <strong>🎨 Creative Thinking</strong>
                            <p style="margin-top: 5px; opacity: 0.9; font-size: 14px;">Developing creative and innovative thinking abilities</p>
                        </div>
                        <div style="background: linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(139, 92, 246, 0.05)); padding: 12px; border-left: 4px solid #8b5cf6; border-radius: 8px;">
                            <strong>🧠 Critical Thinking</strong>
                            <p style="margin-top: 5px; opacity: 0.9; font-size: 14px;">Analytical and critical thinking skills</p>
                        </div>
                        <div style="background: linear-gradient(135deg, rgba(245, 158, 11, 0.1), rgba(245, 158, 11, 0.05)); padding: 12px; border-left: 4px solid #f59e0b; border-radius: 8px;">
                            <strong>🎯 Problem Solving</strong>
                            <p style="margin-top: 5px; opacity: 0.9; font-size: 14px;">Creative approaches to problem solving</p>
                        </div>
                    </div>
                    
                    <div style="background: linear-gradient(135deg, rgba(168, 85, 247, 0.1), rgba(236, 72, 153, 0.1)); padding: 20px; border-radius: 15px; border: 2px solid var(--primary-color); margin-top: 25px;">
                        <h4 style="color: var(--primary-color); margin-bottom: 10px;">🎓 About Edutechnium</h4>
                        <p style="margin-bottom: 10px;">
                            Edutechnium (Center of Educational Technology) is an institution focused on competency development 
                            through workshops and training based on educational technology.
                        </p>
                        <p><strong>Director:</strong> Wahyu Ridhoni, S.Kom., M.Eng</p>
                    </div>
                </div>
            `
        }
    },

    // ledership 
    {
        id: "cert-leadership-polhas",
        type: "certification",
        
        title: {
            id: "Leadership Mini School",
            en: "Leadership Mini School"
        },
        subtitle: {
            id: "Politeknik Hasnur | Oktober 2022",
            en: "Hasnur Polytechnic | October 2022"
        },
        
        description: {
            id: "Sertifikat keikutsertaan Leadership Mini School",
            en: "Leadership Mini School participation certificate"
        },
        
        tags: ["Leadership", "Soft Skills", "Politeknik Hasnur"],
        
        content: {
            id: `
                <h2 style="font-size: 28px; margin-bottom: 10px; background: linear-gradient(45deg, var(--primary-color), var(--secondary-color)); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">
                    Leadership Mini School
                </h2>
                
                <div style="display: flex; gap: 20px; margin-bottom: 25px; flex-wrap: wrap; opacity: 0.9;">
                    <span style="display: flex; align-items: center; gap: 8px;">🏫 <strong>Institusi:</strong> Politeknik Hasnur</span>
                    <span style="display: flex; align-items: center; gap: 8px;">📅 <strong>Bulan:</strong> Oktober 2022</span>
                    <span style="display: flex; align-items: center; gap: 8px;">📜 <strong>No:</strong> 05/SRT/POLHAS-BCTI/X/2022</span>
                </div>
                
                <div style="display: inline-block; background: rgba(168, 85, 247, 0.1); border: 2px solid var(--primary-color); border-radius: 15px; padding: 8px; margin-bottom: 25px; width: 100%; max-width: 700px;">
                    <img src="assets/images/certificates/leadership-polhas.png" alt="Leadership Mini School Certificate" style="display: block; width: 100%; border-radius: 10px; object-fit: cover;">
                    <p style="text-align: center; padding: 10px; opacity: 0.8; font-size: 14px;">Sertifikat Keikutsertaan Leadership Mini School</p>
                </div>

                <div style="line-height: 1.8;">
                    <h3 style="color: var(--primary-color); margin: 25px 0 15px;">Tentang Program</h3>
                    <p style="margin-bottom: 15px;">
                        Leadership Mini School adalah program pengembangan kepemimpinan yang diselenggarakan oleh Politeknik Hasnur 
                        untuk mengembangkan soft skills dan kemampuan kepemimpinan mahasiswa. Program ini fokus pada pengembangan 
                        karakter dan leadership skills yang penting di dunia profesional.
                    </p>
                    
                    <h3 style="color: var(--primary-color); margin: 25px 0 15px;">Fokus Pembelajaran</h3>
                    <div style="display: grid; gap: 12px; margin-bottom: 20px;">
                        <div style="background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(59, 130, 246, 0.05)); padding: 12px; border-left: 4px solid #3b82f6; border-radius: 8px;">
                            <strong>👔 Leadership Skills</strong>
                            <p style="margin-top: 5px; opacity: 0.9; font-size: 14px;">Pengembangan kemampuan memimpin dan mengorganisir</p>
                        </div>
                        <div style="background: linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(16, 185, 129, 0.05)); padding: 12px; border-left: 4px solid #10b981; border-radius: 8px;">
                            <strong>🤝 Team Management</strong>
                            <p style="margin-top: 5px; opacity: 0.9; font-size: 14px;">Manajemen tim dan kolaborasi efektif</p>
                        </div>
                        <div style="background: linear-gradient(135deg, rgba(245, 158, 11, 0.1), rgba(245, 158, 11, 0.05)); padding: 12px; border-left: 4px solid #f59e0b; border-radius: 8px;">
                            <strong>💬 Communication Skills</strong>
                            <p style="margin-top: 5px; opacity: 0.9; font-size: 14px;">Kemampuan komunikasi dan public speaking</p>
                        </div>
                        <div style="background: linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(139, 92, 246, 0.05)); padding: 12px; border-left: 4px solid #8b5cf6; border-radius: 8px;">
                            <strong>🎯 Character Building</strong>
                            <p style="margin-top: 5px; opacity: 0.9; font-size: 14px;">Pembentukan karakter dan integritas</p>
                        </div>
                    </div>
                    
                    <div style="background: linear-gradient(135deg, rgba(168, 85, 247, 0.1), rgba(236, 72, 153, 0.1)); padding: 20px; border-radius: 15px; border: 2px solid var(--primary-color); margin-top: 25px;">
                        <h4 style="color: var(--primary-color); margin-bottom: 10px;">🎓 Manfaat Program</h4>
                        <ul style="margin-left: 20px;">
                            <li style="margin-bottom: 8px;">Mengembangkan kemampuan kepemimpinan</li>
                            <li style="margin-bottom: 8px;">Meningkatkan soft skills untuk dunia kerja</li>
                            <li style="margin-bottom: 8px;">Membangun networking dengan mahasiswa lain</li>
                            <li style="margin-bottom: 8px;">Persiapan menjadi pemimpin di berbagai bidang</li>
                        </ul>
                    </div>
                </div>
            `,
            en: `
                <h2 style="font-size: 28px; margin-bottom: 10px; background: linear-gradient(45deg, var(--primary-color), var(--secondary-color)); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">
                    Leadership Mini School
                </h2>
                
                <div style="display: flex; gap: 20px; margin-bottom: 25px; flex-wrap: wrap; opacity: 0.9;">
                    <span style="display: flex; align-items: center; gap: 8px;">🏫 <strong>Institution:</strong> Hasnur Polytechnic</span>
                    <span style="display: flex; align-items: center; gap: 8px;">📅 <strong>Month:</strong> October 2022</span>
                    <span style="display: flex; align-items: center; gap: 8px;">📜 <strong>No:</strong> 05/SRT/POLHAS-BCTI/X/2022</span>
                </div>
                
                <div style="display: inline-block; background: rgba(168, 85, 247, 0.1); border: 2px solid var(--primary-color); border-radius: 15px; padding: 8px; margin-bottom: 25px; width: 100%; max-width: 700px;">
                    <img src="assets/images/certificates/leadership-polhas.png" alt="Leadership Mini School Certificate" style="display: block; width: 100%; border-radius: 10px; object-fit: cover;">
                    <p style="text-align: center; padding: 10px; opacity: 0.8; font-size: 14px;">Leadership Mini School Participation Certificate</p>
                </div>

                <div style="line-height: 1.8;">
                    <h3 style="color: var(--primary-color); margin: 25px 0 15px;">About Program</h3>
                    <p style="margin-bottom: 15px;">
                        Leadership Mini School is a leadership development program organized by Hasnur Polytechnic 
                        to develop soft skills and leadership abilities of students. This program focuses on character 
                        development and leadership skills that are important in the professional world.
                    </p>
                    
                    <h3 style="color: var(--primary-color); margin: 25px 0 15px;">Learning Focus</h3>
                    <div style="display: grid; gap: 12px; margin-bottom: 20px;">
                        <div style="background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(59, 130, 246, 0.05)); padding: 12px; border-left: 4px solid #3b82f6; border-radius: 8px;">
                            <strong>👔 Leadership Skills</strong>
                            <p style="margin-top: 5px; opacity: 0.9; font-size: 14px;">Developing leadership and organizational abilities</p>
                        </div>
                        <div style="background: linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(16, 185, 129, 0.05)); padding: 12px; border-left: 4px solid #10b981; border-radius: 8px;">
                            <strong>🤝 Team Management</strong>
                            <p style="margin-top: 5px; opacity: 0.9; font-size: 14px;">Team management and effective collaboration</p>
                        </div>
                        <div style="background: linear-gradient(135deg, rgba(245, 158, 11, 0.1), rgba(245, 158, 11, 0.05)); padding: 12px; border-left: 4px solid #f59e0b; border-radius: 8px;">
                            <strong>💬 Communication Skills</strong>
                            <p style="margin-top: 5px; opacity: 0.9; font-size: 14px;">Communication and public speaking abilities</p>
                        </div>
                        <div style="background: linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(139, 92, 246, 0.05)); padding: 12px; border-left: 4px solid #8b5cf6; border-radius: 8px;">
                            <strong>🎯 Character Building</strong>
                            <p style="margin-top: 5px; opacity: 0.9; font-size: 14px;">Character formation and integrity</p>
                        </div>
                    </div>
                    
                    <div style="background: linear-gradient(135deg, rgba(168, 85, 247, 0.1), rgba(236, 72, 153, 0.1)); padding: 20px; border-radius: 15px; border: 2px solid var(--primary-color); margin-top: 25px;">
                        <h4 style="color: var(--primary-color); margin-bottom: 10px;">🎓 Program Benefits</h4>
                        <ul style="margin-left: 20px;">
                            <li style="margin-bottom: 8px;">Develop leadership abilities</li>
                            <li style="margin-bottom: 8px;">Enhance soft skills for professional world</li>
                            <li style="margin-bottom: 8px;">Build networking with other students</li>
                            <li style="margin-bottom: 8px;">Prepare to become leaders in various fields</li>
                        </ul>
                    </div>
                </div>
            `
        }
    },

    // Bahasa Indonesia
    {
        id: "cert-bahasa-indonesia",
        type: "certification",
        
        title: {
            id: "Uji Kemahiran Berbahasa Indonesia",
            en: "Indonesian Language Proficiency Test"
        },
        subtitle: {
            id: "TUKSI Pusat Jakarta | Desember 2021",
            en: "TUKSI Pusat Jakarta | December 2021"
        },
        
        description: {
            id: "Sertifikat kemahiran berbahasa Indonesia dengan skor 500",
            en: "Indonesian language proficiency certificate with score 500"
        },
        
        tags: ["Bahasa Indonesia", "UKBI", "Certification"],
        
        content: {
            id: `
                <h2 style="font-size: 28px; margin-bottom: 10px; background: linear-gradient(45deg, var(--primary-color), var(--secondary-color)); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">
                    Uji Kemahiran Berbahasa Indonesia (UKBI)
                </h2>
                
                <div style="display: flex; gap: 20px; margin-bottom: 25px; flex-wrap: wrap; opacity: 0.9;">
                    <span style="display: flex; align-items: center; gap: 8px;">🏛️ <strong>Lembaga:</strong> Badan Pengembangan dan Pembinaan Bahasa</span>
                    <span style="display: flex; align-items: center; gap: 8px;">📅 <strong>Tanggal:</strong> 27 Desember 2021</span>
                    <span style="display: flex; align-items: center; gap: 8px;">📊 <strong>Skor:</strong> 500</span>
                    <span style="display: flex; align-items: center; gap: 8px;">🎯 <strong>Peringkat:</strong> Madya</span>
                </div>
                
                <div style="display: inline-block; background: rgba(168, 85, 247, 0.1); border: 2px solid var(--primary-color); border-radius: 15px; padding: 8px; margin-bottom: 25px; width: 100%; max-width: 700px;">
                    <img src="assets/images/certificates/bahasa-indonesia.jpg" alt="UKBI Certificate" style="display: block; width: 100%; border-radius: 10px; object-fit: cover;">
                    <p style="text-align: center; padding: 10px; opacity: 0.8; font-size: 14px;">Sertifikat Uji Kemahiran Berbahasa Indonesia</p>
                </div>

                <div style="line-height: 1.8;">
                    <h3 style="color: var(--primary-color); margin: 25px 0 15px;">Tentang UKBI</h3>
                    <p style="margin-bottom: 15px;">
                        Uji Kemahiran Berbahasa Indonesia (UKBI) adalah tes standar kemahiran berbahasa Indonesia yang diselenggarakan 
                        oleh Badan Pengembangan dan Pembinaan Bahasa, Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi. 
                        UKBI mengukur kemampuan berbahasa Indonesia seseorang dalam berbagai aspek.
                    </p>
                    
                    <h3 style="color: var(--primary-color); margin: 25px 0 15px;">Aspek yang Diuji</h3>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 12px; margin-bottom: 20px;">
                        <div style="padding: 15px; background: rgba(59, 130, 246, 0.1); border-radius: 10px; border: 2px solid rgba(59, 130, 246, 0.3); text-align: center;">
                            <div style="font-size: 28px; margin-bottom: 8px;">👂</div>
                            <strong>Mendengarkan</strong>
                        </div>
                        <div style="padding: 15px; background: rgba(16, 185, 129, 0.1); border-radius: 10px; border: 2px solid rgba(16, 185, 129, 0.3); text-align: center;">
                            <div style="font-size: 28px; margin-bottom: 8px;">💬</div>
                            <strong>Merespons Kaidah</strong>
                        </div>
                        <div style="padding: 15px; background: rgba(245, 158, 11, 0.1); border-radius: 10px; border: 2px solid rgba(245, 158, 11, 0.3); text-align: center;">
                            <div style="font-size: 28px; margin-bottom: 8px;">📖</div>
                            <strong>Membaca</strong>
                        </div>
                    </div>
                    
                    <h3 style="color: var(--primary-color); margin: 25px 0 15px;">Peringkat Kemahiran</h3>
                    <div style="background: rgba(168, 85, 247, 0.05); padding: 20px; border-radius: 12px; margin-bottom: 20px; border: 1px solid rgba(168, 85, 247, 0.2);">
                        <table style="width: 100%; border-collapse: collapse;">
                            <tr style="border-bottom: 1px solid rgba(168, 85, 247, 0.2);">
                                <td style="padding: 10px; font-weight: bold;">Skor</td>
                                <td style="padding: 10px; font-weight: bold;">Peringkat</td>
                            </tr>
                            <tr style="border-bottom: 1px solid rgba(168, 85, 247, 0.1); opacity: 0.5;">
                                <td style="padding: 10px;">835 - 925</td>
                                <td style="padding: 10px;">Istimewa</td>
                            </tr>
                            <tr style="border-bottom: 1px solid rgba(168, 85, 247, 0.1); opacity: 0.6;">
                                <td style="padding: 10px;">725 - 834</td>
                                <td style="padding: 10px;">Sangat Unggul</td>
                            </tr>
                            <tr style="border-bottom: 1px solid rgba(168, 85, 247, 0.1); opacity: 0.7;">
                                <td style="padding: 10px;">625 - 724</td>
                                <td style="padding: 10px;">Unggul</td>
                            </tr>
                            <tr style="border-bottom: 1px solid rgba(168, 85, 247, 0.1); opacity: 0.8;">
                                <td style="padding: 10px;">525 - 624</td>
                                <td style="padding: 10px;">Madya</td>
                            </tr>
                            <tr style="opacity: 0.5;">
                                <td style="padding: 10px;">451 - 524</td>
                                <td style="padding: 10px;">Semenjana</td>
                            </tr>
                            <tr style="opacity: 0.4;">
                                <td style="padding: 10px;">387 - 450</td>
                                <td style="padding: 10px;">Marginal</td>
                            </tr>
                            <tr style="opacity: 0.3;">
                                <td style="padding: 10px;">0 - 386</td>
                                <td style="padding: 10px;">Terbatas</td>
                            </tr>
                        </table>
                    </div>
                    
                    <div style="background: linear-gradient(135deg, rgba(168, 85, 247, 0.1), rgba(236, 72, 153, 0.1)); padding: 20px; border-radius: 15px; border: 2px solid var(--primary-color); margin-top: 25px;">
                        <h4 style="color: var(--primary-color); margin-bottom: 10px;">🎓 Pencapaian</h4>
                        <p style="margin-bottom: 10px;">
                            Dengan skor <strong>500</strong>, menunjukkan kemahiran berbahasa Indonesia pada tingkat <strong>Madya</strong>. 
                            Ini menunjukkan kemampuan memahami dan menggunakan bahasa Indonesia dengan baik dalam konteks formal maupun informal.
                        </p>
                        <p style="font-style: italic; opacity: 0.9;">
                            Sertifikat ini dikeluarkan oleh Badan Pengembangan dan Pembinaan Bahasa, 
                            Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi Republik Indonesia.
                        </p>
                    </div>
                </div>
            `,
            en: `
                <h2 style="font-size: 28px; margin-bottom: 10px; background: linear-gradient(45deg, var(--primary-color), var(--secondary-color)); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">
                    Indonesian Language Proficiency Test (UKBI)
                </h2>
                
                <div style="display: flex; gap: 20px; margin-bottom: 25px; flex-wrap: wrap; opacity: 0.9;">
                    <span style="display: flex; align-items: center; gap: 8px;">🏛️ <strong>Institution:</strong> Language Development and Cultivation Agency</span>
                    <span style="display: flex; align-items: center; gap: 8px;">📅 <strong>Date:</strong> December 27, 2021</span>
                    <span style="display: flex; align-items: center; gap: 8px;">📊 <strong>Score:</strong> 500</span>
                    <span style="display: flex; align-items: center; gap: 8px;">🎯 <strong>Level:</strong> Intermediate</span>
                </div>
                
                <div style="display: inline-block; background: rgba(168, 85, 247, 0.1); border: 2px solid var(--primary-color); border-radius: 15px; padding: 8px; margin-bottom: 25px; width: 100%; max-width: 700px;">
                    <img src="assets/images/certificates/bahasa-indonesia.jpg" alt="UKBI Certificate" style="display: block; width: 100%; border-radius: 10px; object-fit: cover;">
                    <p style="text-align: center; padding: 10px; opacity: 0.8; font-size: 14px;">Indonesian Language Proficiency Certificate</p>
                </div>

                <div style="line-height: 1.8;">
                    <h3 style="color: var(--primary-color); margin: 25px 0 15px;">About UKBI</h3>
                    <p style="margin-bottom: 15px;">
                        Indonesian Language Proficiency Test (UKBI) is a standardized test organized by 
                        the Language Development and Cultivation Agency, Ministry of Education, Culture, Research, and Technology. 
                        UKBI measures a person's Indonesian language proficiency across various aspects.
                    </p>
                    
                    <h3 style="color: var(--primary-color); margin: 25px 0 15px;">Tested Aspects</h3>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 12px; margin-bottom: 20px;">
                        <div style="padding: 15px; background: rgba(59, 130, 246, 0.1); border-radius: 10px; border: 2px solid rgba(59, 130, 246, 0.3); text-align: center;">
                            <div style="font-size: 28px; margin-bottom: 8px;">👂</div>
                            <strong>Listening</strong>
                        </div>
                        <div style="padding: 15px; background: rgba(16, 185, 129, 0.1); border-radius: 10px; border: 2px solid rgba(16, 185, 129, 0.3); text-align: center;">
                            <div style="font-size: 28px; margin-bottom: 8px;">💬</div>
                            <strong>Grammar Response</strong>
                        </div>
                        <div style="padding: 15px; background: rgba(245, 158, 11, 0.1); border-radius: 10px; border: 2px solid rgba(245, 158, 11, 0.3); text-align: center;">
                            <div style="font-size: 28px; margin-bottom: 8px;">📖</div>
                            <strong>Reading</strong>
                        </div>
                    </div>
                    
                    <h3 style="color: var(--primary-color); margin: 25px 0 15px;">Proficiency Levels</h3>
                    <div style="background: rgba(168, 85, 247, 0.05); padding: 20px; border-radius: 12px; margin-bottom: 20px; border: 1px solid rgba(168, 85, 247, 0.2);">
                        <table style="width: 100%; border-collapse: collapse;">
                            <tr style="border-bottom: 1px solid rgba(168, 85, 247, 0.2);">
                                <td style="padding: 10px; font-weight: bold;">Score</td>
                                <td style="padding: 10px; font-weight: bold;">Level</td>
                            </tr>
                            <tr style="border-bottom: 1px solid rgba(168, 85, 247, 0.1); opacity: 0.5;">
                                <td style="padding: 10px;">835 - 925</td>
                                <td style="padding: 10px;">Exceptional</td>
                            </tr>
                            <tr style="border-bottom: 1px solid rgba(168, 85, 247, 0.1); opacity: 0.6;">
                                <td style="padding: 10px;">725 - 834</td>
                                <td style="padding: 10px;">Very Advanced</td>
                            </tr>
                            <tr style="border-bottom: 1px solid rgba(168, 85, 247, 0.1); opacity: 0.7;">
                                <td style="padding: 10px;">625 - 724</td>
                                <td style="padding: 10px;">Advanced</td>
                            </tr>
                            <tr style="border-bottom: 1px solid rgba(168, 85, 247, 0.1); opacity: 0.8;">
                                <td style="padding: 10px;">525 - 624</td>
                                <td style="padding: 10px;">Intermediate</td>
                            </tr>
                            <tr style="border-bottom: 1px solid rgba(168, 85, 247, 0.2); background: rgba(59, 130, 246, 0.1);">
                                <td style="padding: 10px;"><strong>500</strong></td>
                                <td style="padding: 10px;"><strong>Intermediate ✓</strong></td>
                            </tr>
                            <tr style="opacity: 0.5;">
                                <td style="padding: 10px;">451 - 524</td>
                                <td style="padding: 10px;">Basic</td>
                            </tr>
                            <tr style="opacity: 0.4;">
                                <td style="padding: 10px;">387 - 450</td>
                                <td style="padding: 10px;">Marginal</td>
                            </tr>
                            <tr style="opacity: 0.3;">
                                <td style="padding: 10px;">0 - 386</td>
                                <td style="padding: 10px;">Limited</td>
                            </tr>
                        </table>
                    </div>
                    
                    <div style="background: linear-gradient(135deg, rgba(168, 85, 247, 0.1), rgba(236, 72, 153, 0.1)); padding: 20px; border-radius: 15px; border: 2px solid var(--primary-color); margin-top: 25px;">
                        <h4 style="color: var(--primary-color); margin-bottom: 10px;">🎓 Achievement</h4>
                        <p style="margin-bottom: 10px;">
                            With a score of <strong>500</strong>, demonstrating Indonesian language proficiency at <strong>Intermediate</strong> level. 
                            This shows the ability to understand and use Indonesian well in both formal and informal contexts.
                        </p>
                        <p style="font-style: italic; opacity: 0.9;">
                            This certificate is issued by the Language Development and Cultivation Agency, 
                            Ministry of Education, Culture, Research, and Technology of the Republic of Indonesia.
                        </p>
                    </div>
                </div>
            `
        }
    },

    // Balfair GIBS
    {
        id: "balfair-2024",
        type: "project",
        
        title: {
            id: "Banua Litera Fair 2024 - Festival Bulan Bahasa",
            en: "Banua Litera Fair 2024 - Language Month Festival"
        },
        subtitle: {
            id: "Digitaliz x GIBS | Tim Project | 2024",
            en: "Digitaliz x GIBS | Team Project | 2024"
        },
        
        description: {
            id: "Website event management untuk Festival Bulan Bahasa GIBS - kolaborasi tim selama magang",
            en: "Event management website for GIBS Language Month Festival - team collaboration during internship"
        },
        
        tags: ["Laravel", "Blade", "PHP", "Team Project", "Frontend Development"],
        
        content: {
            id: `
                <h2 style="font-size: 28px; margin-bottom: 10px; background: linear-gradient(45deg, var(--primary-color), var(--secondary-color)); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">
                    Banua Litera Fair 2024
                </h2>
                
                <div style="display: flex; gap: 20px; margin-bottom: 25px; flex-wrap: wrap; opacity: 0.9;">
                    <span style="display: flex; align-items: center; gap: 8px;">🏫 <strong>Client:</strong> Global Islamic Boarding School (GIBS)</span>
                    <span style="display: flex; align-items: center; gap: 8px;">🏢 <strong>Perusahaan:</strong> Digitaliz - Unit Digital YHC</span>
                    <span style="display: flex; align-items: center; gap: 8px;">👥 <strong>Tim:</strong> 4 orang</span>
                    <span style="display: flex; align-items: center; gap: 8px;">📅 <strong>Tahun:</strong> 2024</span>
                </div>
                

                <div style="display: flex; flex-direction: row; align-items: flex-start; justify-content: center; gap: 3%; flex-wrap: wrap; width: 100%; margin: 0 auto;">
                
                    <div style="flex: 1 1 60%; margin-bottom: 15px;">
                        <h3 style="color: var(--primary-color); margin-bottom: 15px;">Tentang Project</h3>
                        <p style="margin-bottom: 15px;">
                            Banua Litera Fair 2024 adalah website event management untuk Festival Bulan Bahasa yang diselenggarakan 
                            oleh SMP-SMA Global Islamic Boarding School (GIBS). Project ini merupakan kelanjutan dari event serupa 
                            yang pertama kali diselenggarakan pada tahun 2022.
                        </p>
                        <p style="margin-bottom: 15px;">
                            Website ini dikembangkan oleh tim Digitaliz (unit digital Yayasan Hasnur Centre) sebagai project nyata 
                            selama program magang. Website berfungsi sebagai portal informasi event, timeline kegiatan, kompetisi, 
                            dan sistem pembelian tiket.
                        </p>
                        
                        <h3 style="color: var(--primary-color); margin: 25px 0 15px;">Peran & Kontribusi</h3>
                        <div style="background: rgba(168, 85, 247, 0.05); padding: 20px; border-radius: 12px; margin-bottom: 20px; border: 1px solid rgba(168, 85, 247, 0.2);">
                            <h4 style="color: var(--secondary-color); margin-bottom: 10px;">Frontend Development</h4>
                            <ul style="margin-left: 20px;">
                                <li style="margin-bottom: 10px;">Mengembangkan beberapa section pada halaman utama website</li>
                                <li style="margin-bottom: 10px;">Implementasi responsive design untuk berbagai ukuran layar</li>
                                <li style="margin-bottom: 10px;">Kolaborasi dengan tim menggunakan Git version control</li>
                                <li style="margin-bottom: 10px;">Bekerja dengan Blade templating engine Laravel</li>
                            </ul>
                        </div>
                        
                        <h3 style="color: var(--primary-color); margin: 25px 0 15px;">Tim Pengembang</h3>
                        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 12px; margin-bottom: 25px;">
                            <div style="padding: 15px; background: rgba(59, 130, 246, 0.1); border-radius: 10px; border: 2px solid rgba(59, 130, 246, 0.3);">
                                <strong>👨‍💼 Bachrul Uluum</strong>
                                <p style="margin-top: 5px; font-size: 14px; opacity: 0.9;">Pembimbing & Web Developer Digitaliz</p>
                            </div>
                            <div style="padding: 15px; background: rgba(16, 185, 129, 0.1); border-radius: 10px; border: 2px solid rgba(16, 185, 129, 0.3);">
                                <strong>👨‍💻 Baihaqi</strong>
                                <p style="margin-top: 5px; font-size: 14px; opacity: 0.9;">Rekan Magang - Developer</p>
                            </div>
                            <div style="padding: 15px; background: rgba(245, 158, 11, 0.1); border-radius: 10px; border: 2px solid rgba(245, 158, 11, 0.3);">
                                <strong>👨‍💻 Surya Hidayat</strong>
                                <p style="margin-top: 5px; font-size: 14px; opacity: 0.9;">Rekan Magang - Developer</p>
                            </div>
                            <div style="padding: 15px; background: rgba(139, 92, 246, 0.1); border-radius: 10px; border: 2px solid rgba(139, 92, 246, 0.3);">
                                <strong>👨‍💻 Muhammad Riza Aditya</strong>
                                <p style="margin-top: 5px; font-size: 14px; opacity: 0.9;">Frontend Developer</p>
                            </div>
                        </div>
                        
                        <h3 style="color: var(--primary-color); margin: 25px 0 15px;">Teknologi yang Digunakan</h3>
                        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 12px; margin-bottom: 20px;">
                            <div style="background: linear-gradient(135deg, rgba(239, 68, 68, 0.1), rgba(239, 68, 68, 0.05)); padding: 15px; border-left: 4px solid #ef4444; border-radius: 8px;">
                                <strong style="color: #ef4444;">🔴 Laravel + Blade (50%)</strong>
                                <p style="margin-top: 8px; opacity: 0.9; font-size: 14px;">Backend framework & templating engine</p>
                            </div>
                            <div style="background: linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(139, 92, 246, 0.05)); padding: 15px; border-left: 4px solid #8b5cf6; border-radius: 8px;">
                                <strong style="color: #8b5cf6;">🟣 PHP (43.8%)</strong>
                                <p style="margin-top: 8px; opacity: 0.9; font-size: 14px;">Server-side programming language</p>
                            </div>
                            <div style="background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(59, 130, 246, 0.05)); padding: 15px; border-left: 4px solid #3b82f6; border-radius: 8px;">
                                <strong style="color: #3b82f6;">🔵 CSS (4.8%)</strong>
                                <p style="margin-top: 8px; opacity: 0.9; font-size: 14px;">Styling & responsive design</p>
                            </div>
                            <div style="background: linear-gradient(135deg, rgba(245, 158, 11, 0.1), rgba(245, 158, 11, 0.05)); padding: 15px; border-left: 4px solid #f59e0b; border-radius: 8px;">
                                <strong style="color: #f59e0b;">🟡 JavaScript (1.4%)</strong>
                                <p style="margin-top: 8px; opacity: 0.9; font-size: 14px;">Interactive functionality</p>
                            </div>
                        </div>
                        
                        <h3 style="color: var(--primary-color); margin: 25px 0 15px;">Fitur Website</h3>
                        <ul style="margin-left: 20px; margin-bottom: 20px;">
                            <li style="margin-bottom: 10px;"><strong>Timeline</strong> - Jadwal lengkap kegiatan festival</li>
                            <li style="margin-bottom: 10px;"><strong>Competition</strong> - Informasi berbagai kompetisi yang diadakan</li>
                            <li style="margin-bottom: 10px;"><strong>Ticket System</strong> - Sistem pembelian tiket online</li>
                            <li style="margin-bottom: 10px;"><strong>Responsive Design</strong> - Optimal di berbagai perangkat</li>
                        </ul>
                        
                        <div style="background: linear-gradient(135deg, rgba(168, 85, 247, 0.1), rgba(236, 72, 153, 0.1)); padding: 25px; border-radius: 15px; border: 2px solid var(--primary-color); margin-top: 30px;">
                            <h4 style="color: var(--primary-color); margin-bottom: 15px;">🔗 Link Project</h4>
                            <div style="display: flex; flex-wrap: wrap; gap: 12px;">
                                <a href="https://balfair.gibs.sch.id/" target="_blank" rel="noopener" style="padding: 12px 24px; background: rgba(16, 185, 129, 0.2); border: 2px solid #10b981; border-radius: 25px; color: white; text-decoration: none; display: inline-flex; align-items: center; gap: 8px; transition: all 0.3s;">
                                    🌐 <strong>Live Website</strong>
                                </a>
                                <a href="https://github.com/uluumbch/balfair-2024" target="_blank" rel="noopener" style="padding: 12px 24px; background: rgba(0, 0, 0, 0.3); border: 2px solid #fff; border-radius: 25px; color: white; text-decoration: none; display: inline-flex; align-items: center; gap: 8px; transition: all 0.3s;">
                                    <img src="assets/images/icons/github.png" alt="GitHub" style="width: 20px; height: 20px; border-radius: 50%; background: white; padding: 2px;">
                                    <strong>GitHub Repository</strong>
                                </a>
                                <a href="https://github.com/uluumbch/balfair-2024/tree/Riza" target="_blank" rel="noopener" style="padding: 12px 24px; background: rgba(139, 92, 246, 0.2); border: 2px solid #8b5cf6; border-radius: 25px; color: white; text-decoration: none; display: inline-flex; align-items: center; gap: 8px; transition: all 0.3s;">
                                    🌿 <strong>My Branch (Riza)</strong>
                                </a>
                            </div>
                        </div>
                        
                        <div style="background: rgba(59, 130, 246, 0.1); padding: 20px; border-radius: 12px; border-left: 4px solid #3b82f6; margin-top: 25px;">
                            <h4 style="color: #3b82f6; margin-bottom: 10px;">💡 Pengalaman & Pembelajaran</h4>
                            <p style="margin-bottom: 10px;">
                                Project ini memberikan pengalaman nyata bekerja dalam tim development dengan workflow profesional. 
                                Menggunakan Git branching strategy untuk kolaborasi, code review, dan merge management.
                            </p>
                            <p style="font-style: italic; opacity: 0.9;">
                                Website ini digunakan secara resmi untuk event Festival Bulan Bahasa di Global Islamic Boarding School 
                                dan dapat diakses publik melalui domain resmi GIBS.
                            </p>
                        </div>
                    </div>

                    <div style="flex: 1 1 35%; display: flex; justify-content: center; align-items: center;">
                        <img src='assets/images/projects/balfair/balfair-full.png' alt='Banua Litera Fair 2024' style="width: 100%; height: auto; border: 2px solid var(--primary-color); border-radius: 10px; object-fit: contain; transition: all 0.3s ease;">
                    </div>

                </div>
            `,
            en: `
                <h2 style="font-size: 28px; margin-bottom: 10px; background: linear-gradient(45deg, var(--primary-color), var(--secondary-color)); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">
                    Banua Litera Fair 2024
                </h2>
                
                <div style="display: flex; gap: 20px; margin-bottom: 25px; flex-wrap: wrap; opacity: 0.9;">
                    <span style="display: flex; align-items: center; gap: 8px;">🏫 <strong>Client:</strong> Global Islamic Boarding School (GIBS)</span>
                    <span style="display: flex; align-items: center; gap: 8px;">🏢 <strong>Company:</strong> Digitaliz - YHC Digital Unit</span>
                    <span style="display: flex; align-items: center; gap: 8px;">👥 <strong>Team:</strong> 4 members</span>
                    <span style="display: flex; align-items: center; gap: 8px;">📅 <strong>Year:</strong> 2024</span>
                </div>
                
                <div style="display: flex; flex-direction: row; align-items: flex-start; justify-content: center; gap: 3%; flex-wrap: wrap; width: 100%; margin: 0 auto;">
                
                    <div style="flex: 1 1 60%; margin-bottom: 15px;">
                        <h3 style="color: var(--primary-color); margin: 25px 0 15px;">About the Project</h3>
                        <p style="margin-bottom: 15px;">
                            Banua Litera Fair 2024 is an event management website for the Language Month Festival organized by 
                            Global Islamic Boarding School (GIBS). This project continues the similar event first held in 2022.
                        </p>
                        <p style="margin-bottom: 15px;">
                            The website was developed by Digitaliz team (digital unit of Yayasan Hasnur Centre) as a real project 
                            during the internship program. It serves as an event information portal, timeline, competitions, 
                            and ticket purchasing system.
                        </p>
                        
                        <h3 style="color: var(--primary-color); margin: 25px 0 15px;">Role & Contribution</h3>
                        <div style="background: rgba(168, 85, 247, 0.05); padding: 20px; border-radius: 12px; margin-bottom: 20px; border: 1px solid rgba(168, 85, 247, 0.2);">
                            <h4 style="color: var(--secondary-color); margin-bottom: 10px;">Frontend Development</h4>
                            <ul style="margin-left: 20px;">
                                <li style="margin-bottom: 10px;">Developed several sections on the main website page</li>
                                <li style="margin-bottom: 10px;">Implemented responsive design for various screen sizes</li>
                                <li style="margin-bottom: 10px;">Collaborated with team using Git version control</li>
                                <li style="margin-bottom: 10px;">Worked with Laravel Blade templating engine</li>
                            </ul>
                        </div>
                        
                        <h3 style="color: var(--primary-color); margin: 25px 0 15px;">Development Team</h3>
                        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 12px; margin-bottom: 25px;">
                            <div style="padding: 15px; background: rgba(59, 130, 246, 0.1); border-radius: 10px; border: 2px solid rgba(59, 130, 246, 0.3);">
                                <strong>👨‍💼 Bachrul Uluum</strong>
                                <p style="margin-top: 5px; font-size: 14px; opacity: 0.9;">Supervisor & Web Developer Digitaliz</p>
                            </div>
                            <div style="padding: 15px; background: rgba(16, 185, 129, 0.1); border-radius: 10px; border: 2px solid rgba(16, 185, 129, 0.3);">
                                <strong>👨‍💻 Baihaqi</strong>
                                <p style="margin-top: 5px; font-size: 14px; opacity: 0.9;">Intern - Developer</p>
                            </div>
                            <div style="padding: 15px; background: rgba(245, 158, 11, 0.1); border-radius: 10px; border: 2px solid rgba(245, 158, 11, 0.3);">
                                <strong>👨‍💻 Surya Hidayat</strong>
                                <p style="margin-top: 5px; font-size: 14px; opacity: 0.9;">Intern - Developer</p>
                            </div>
                            <div style="padding: 15px; background: rgba(139, 92, 246, 0.1); border-radius: 10px; border: 2px solid rgba(139, 92, 246, 0.3);">
                                <strong>👨‍💻 Muhammad Riza Aditya</strong>
                                <p style="margin-top: 5px; font-size: 14px; opacity: 0.9;">Frontend Developer</p>
                            </div>
                        </div>
                        
                        <h3 style="color: var(--primary-color); margin: 25px 0 15px;">Technologies Used</h3>
                        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 12px; margin-bottom: 20px;">
                            <div style="background: linear-gradient(135deg, rgba(239, 68, 68, 0.1), rgba(239, 68, 68, 0.05)); padding: 15px; border-left: 4px solid #ef4444; border-radius: 8px;">
                                <strong style="color: #ef4444;">🔴 Laravel + Blade (50%)</strong>
                                <p style="margin-top: 8px; opacity: 0.9; font-size: 14px;">Backend framework & templating engine</p>
                            </div>
                            <div style="background: linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(139, 92, 246, 0.05)); padding: 15px; border-left: 4px solid #8b5cf6; border-radius: 8px;">
                                <strong style="color: #8b5cf6;">🟣 PHP (43.8%)</strong>
                                <p style="margin-top: 8px; opacity: 0.9; font-size: 14px;">Server-side programming language</p>
                            </div>
                            <div style="background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(59, 130, 246, 0.05)); padding: 15px; border-left: 4px solid #3b82f6; border-radius: 8px;">
                                <strong style="color: #3b82f6;">🔵 CSS (4.8%)</strong>
                                <p style="margin-top: 8px; opacity: 0.9; font-size: 14px;">Styling & responsive design</p>
                            </div>
                            <div style="background: linear-gradient(135deg, rgba(245, 158, 11, 0.1), rgba(245, 158, 11, 0.05)); padding: 15px; border-left: 4px solid #f59e0b; border-radius: 8px;">
                                <strong style="color: #f59e0b;">🟡 JavaScript (1.4%)</strong>
                                <p style="margin-top: 8px; opacity: 0.9; font-size: 14px;">Interactive functionality</p>
                            </div>
                        </div>
                        
                        <h3 style="color: var(--primary-color); margin: 25px 0 15px;">Website Features</h3>
                        <ul style="margin-left: 20px; margin-bottom: 20px;">
                            <li style="margin-bottom: 10px;"><strong>Timeline</strong> - Complete festival activity schedule</li>
                            <li style="margin-bottom: 10px;"><strong>Competition</strong> - Information about various competitions</li>
                            <li style="margin-bottom: 10px;"><strong>Ticket System</strong> - Online ticket purchasing system</li>
                            <li style="margin-bottom: 10px;"><strong>Responsive Design</strong> - Optimal on all devices</li>
                        </ul>
                        
                        <div style="background: linear-gradient(135deg, rgba(168, 85, 247, 0.1), rgba(236, 72, 153, 0.1)); padding: 25px; border-radius: 15px; border: 2px solid var(--primary-color); margin-top: 30px;">
                            <h4 style="color: var(--primary-color); margin-bottom: 15px;">🔗 Project Links</h4>
                            <div style="display: flex; flex-wrap: wrap; gap: 12px;">
                                <a href="https://balfair.gibs.sch.id/" target="_blank" rel="noopener" style="padding: 12px 24px; background: rgba(16, 185, 129, 0.2); border: 2px solid #10b981; border-radius: 25px; color: white; text-decoration: none; display: inline-flex; align-items: center; gap: 8px; transition: all 0.3s;">
                                    🌐 <strong>Live Website</strong>
                                </a>
                                <a href="https://github.com/uluumbch/balfair-2024" target="_blank" rel="noopener" style="padding: 12px 24px; background: rgba(0, 0, 0, 0.3); border: 2px solid #fff; border-radius: 25px; color: white; text-decoration: none; display: inline-flex; align-items: center; gap: 8px; transition: all 0.3s;">
                                    <img src="assets/images/icons/github.png" alt="GitHub" style="width: 20px; height: 20px; border-radius: 50%; background: white; padding: 2px;">
                                    <strong>GitHub Repository</strong>
                                </a>
                                <a href="https://github.com/uluumbch/balfair-2024/tree/Riza" target="_blank" rel="noopener" style="padding: 12px 24px; background: rgba(139, 92, 246, 0.2); border: 2px solid #8b5cf6; border-radius: 25px; color: white; text-decoration: none; display: inline-flex; align-items: center; gap: 8px; transition: all 0.3s;">
                                    🌿 <strong>My Branch (Riza)</strong>
                                </a>
                            </div>
                        </div>
                        
                        <div style="background: rgba(59, 130, 246, 0.1); padding: 20px; border-radius: 12px; border-left: 4px solid #3b82f6; margin-top: 25px;">
                            <h4 style="color: #3b82f6; margin-bottom: 10px;">💡 Experience & Learning</h4>
                            <p style="margin-bottom: 10px;">
                                This project provided real experience working in a development team with professional workflow. 
                                Used Git branching strategy for collaboration, code review, and merge management.
                            </p>
                            <p style="font-style: italic; opacity: 0.9;">
                                This website is officially used for the Language Month Festival event at Global Islamic Boarding School 
                                and is publicly accessible through GIBS official domain.
                            </p>
                        </div>
                    </div>

                    <div style="flex: 1 1 35%; display: flex; justify-content: center; align-items: center;">
                        <img src='assets/images/projects/balfair/balfair-full.png' alt='Banua Litera Fair 2024' style="width: 100%; height: auto; border: 2px solid var(--primary-color); border-radius: 10px; object-fit: contain; transition: all 0.3s ease;">
                    </div>

            </div>
            `
        }
    },

    // Browser
    {
        id: "riza-browser",
        type: "project",
        
        title: {
            id: "Riza Browser - Browser Eksperimen di Colab",
            en: "Riza Browser - Experimental Browser in Colab"
        },
        subtitle: {
            id: "Personal Project | Python + IPython | 2024",
            en: "Personal Project | Python + IPython | 2024"
        },
        
        description: {
            id: "Browser sederhana yang dibuat di Google Colab sebagai eksperimen pembelajaran",
            en: "Simple browser built in Google Colab as a learning experiment"
        },
        
        tags: ["Python", "IPython Widgets", "Web Scraping", "Google Colab", "Experiment"],
        
        content: {
            id: `
                <h2 style="font-size: 28px; margin-bottom: 10px; background: linear-gradient(45deg, var(--primary-color), var(--secondary-color)); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">
                    Riza Browser 🌐
                </h2>
                
                <div style="display: flex; gap: 20px; margin-bottom: 25px; flex-wrap: wrap; opacity: 0.9;">
                    <span style="display: flex; align-items: center; gap: 8px;">🎨 <strong>Type:</strong> Personal Experiment</span>
                    <span style="display: flex; align-items: center; gap: 8px;">💻 <strong>Platform:</strong> Google Colab</span>
                    <span style="display: flex; align-items: center; gap: 8px;">🐍 <strong>Language:</strong> Python</span>
                    <span style="display: flex; align-items: center; gap: 8px;">📅 <strong>Year:</strong> 2024</span>
                </div>
                
                <div style="display: inline-block; background: rgba(168, 85, 247, 0.1); border: 2px solid var(--primary-color); border-radius: 15px; padding: 8px; margin-bottom: 25px; width: 100%; max-width: 800px;">
                    <img src="assets/images/projects/riza-browser/browser-ui.png" alt="Riza Browser Interface" style="display: block; width: 100%; border-radius: 10px; object-fit: cover;">
                    <p style="text-align: center; padding: 10px; opacity: 0.8; font-size: 14px;">Riza Browser - Interface Pencarian Gambar</p>
                </div>

                <div style="line-height: 1.8;">
                    <h3 style="color: var(--primary-color); margin: 25px 0 15px;">💡 Cerita di Balik Project</h3>
                    <p style="margin-bottom: 15px;">
                        Project ini bermula dari tugas kuliah tentang konsep aplikasi freemium. Alih-alih hanya membuat presentasi konsep, 
                        saya memutuskan untuk mencoba membangun prototype-nya langsung. Dan jadilah "Riza Browser" - browser sederhana 
                        yang berjalan di Google Colab.
                    </p>
                    <p style="margin-bottom: 15px;">
                        Meskipun terdengar sepele, project ini memberikan pembelajaran berharga tentang web scraping, API interaction, 
                        dan building interactive UI menggunakan Python. Plus, ini project "gabut" yang ternyata cukup produktif! 😄
                    </p>
                    
                    <h3 style="color: var(--primary-color); margin: 25px 0 15px;">✨ Fitur yang Berhasil Diimplementasi</h3>
                    <div style="background: rgba(168, 85, 247, 0.05); padding: 20px; border-radius: 12px; margin-bottom: 20px; border: 1px solid rgba(168, 85, 247, 0.2);">
                        <ul style="margin-left: 20px;">
                            <li style="margin-bottom: 12px;">
                                <strong>🔍 Web Search</strong><br>
                                <span style="opacity: 0.9; font-size: 14px;">
                                    Pencarian web menggunakan DuckDuckGo & Bing tanpa memerlukan API key. 
                                    Menggunakan web scraping untuk mendapatkan hasil pencarian.
                                </span>
                            </li>
                            <li style="margin-bottom: 12px;">
                                <strong>🖼️ Image Search</strong><br>
                                <span style="opacity: 0.9; font-size: 14px;">
                                    Pencarian gambar dengan tampilan gallery yang rapi. Hasil ditampilkan dalam grid layout yang responsif.
                                </span>
                            </li>
                            <li style="margin-bottom: 12px;">
                                <strong>🎨 Modern UI</strong><br>
                                <span style="opacity: 0.9; font-size: 14px;">
                                    Interface bersih dengan sistem tab (Web, Gambar, Video) menggunakan IPython widgets. 
                                    Design minimalis tapi fungsional.
                                </span>
                            </li>
                            <li style="margin-bottom: 12px;">
                                <strong>💾 Basic Caching</strong><br>
                                <span style="opacity: 0.9; font-size: 14px;">
                                    Sistem cache sederhana untuk menyimpan hasil pencarian dan mengurangi request berulang.
                                </span>
                            </li>
                        </ul>
                    </div>
                    
                    <h3 style="color: var(--primary-color); margin: 25px 0 15px;">🛠️ Teknologi yang Digunakan</h3>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 12px; margin-bottom: 20px;">
                        <div style="background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(59, 130, 246, 0.05)); padding: 15px; border-left: 4px solid #3b82f6; border-radius: 8px;">
                            <strong style="color: #3b82f6;">🐍 Python</strong>
                            <p style="margin-top: 8px; opacity: 0.9; font-size: 14px;">Core programming language untuk logic dan API interaction</p>
                        </div>
                        <div style="background: linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(139, 92, 246, 0.05)); padding: 15px; border-left: 4px solid #8b5cf6; border-radius: 8px;">
                            <strong style="color: #8b5cf6;">📊 IPython Widgets</strong>
                            <p style="margin-top: 8px; opacity: 0.9; font-size: 14px;">Interactive UI components dalam Jupyter/Colab notebook</p>
                        </div>
                        <div style="background: linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(16, 185, 129, 0.05)); padding: 15px; border-left: 4px solid #10b981; border-radius: 8px;">
                            <strong style="color: #10b981;">🌐 DuckDuckGo API</strong>
                            <p style="margin-top: 8px; opacity: 0.9; font-size: 14px;">Web scraping untuk hasil pencarian tanpa API key</p>
                        </div>
                        <div style="background: linear-gradient(135deg, rgba(245, 158, 11, 0.1), rgba(245, 158, 11, 0.05)); padding: 15px; border-left: 4px solid #f59e0b; border-radius: 8px;">
                            <strong style="color: #f59e0b;">🔎 Bing Search</strong>
                            <p style="margin-top: 8px; opacity: 0.9; font-size: 14px;">Alternative search engine untuk variasi hasil</p>
                        </div>
                        <div style="background: linear-gradient(135deg, rgba(236, 72, 153, 0.1), rgba(236, 72, 153, 0.05)); padding: 15px; border-left: 4px solid #ec4899; border-radius: 8px;">
                            <strong style="color: #ec4899;">☁️ Google Colab</strong>
                            <p style="margin-top: 8px; opacity: 0.9; font-size: 14px;">Cloud-based Python notebook environment</p>
                        </div>
                    </div>
                    
                    <h3 style="color: var(--primary-color); margin: 25px 0 15px;">🎯 Fitur & Batasan</h3>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin-bottom: 25px;">
                        <div style="background: rgba(16, 185, 129, 0.1); padding: 20px; border-radius: 12px; border: 2px solid rgba(16, 185, 129, 0.3);">
                            <h4 style="color: #10b981; margin-bottom: 12px;">✅ Yang Sudah Jalan</h4>
                            <ul style="margin-left: 20px; font-size: 14px;">
                                <li>Web search dengan hasil real</li>
                                <li>Image search dengan gallery view</li>
                                <li>Tab navigation yang smooth</li>
                                <li>Basic caching system</li>
                                <li>Clean & modern UI</li>
                            </ul>
                        </div>
                        <div style="background: rgba(245, 158, 11, 0.1); padding: 20px; border-radius: 12px; border: 2px solid rgba(245, 158, 11, 0.3);">
                            <h4 style="color: #f59e0b; margin-bottom: 12px;">⏳ Placeholder/Rencana</h4>
                            <ul style="margin-left: 20px; font-size: 14px;">
                                <li>Video search (UI only)</li>
                                <li>VPN Global feature</li>
                                <li>AI Assistant integration</li>
                                <li>Cloud storage</li>
                                <li>Ad blocking feature</li>
                            </ul>
                        </div>
                    </div>
                    
                    <h3 style="color: var(--primary-color); margin: 25px 0 15px;">📚 Pembelajaran dari Project Ini</h3>
                    <div style="background: rgba(59, 130, 246, 0.1); padding: 20px; border-radius: 12px; border-left: 4px solid #3b82f6; margin-bottom: 20px;">
                        <ul style="margin-left: 20px;">
                            <li style="margin-bottom: 10px;">
                                <strong>Web Scraping</strong> - Belajar cara mengambil data dari website tanpa API resmi
                            </li>
                            <li style="margin-bottom: 10px;">
                                <strong>IPython Widgets</strong> - Membuat interactive UI di Python notebook
                            </li>
                            <li style="margin-bottom: 10px;">
                                <strong>API Integration</strong> - Menghubungkan berbagai search engine
                            </li>
                            <li style="margin-bottom: 10px;">
                                <strong>Error Handling</strong> - Mengatasi berbagai edge cases dalam web interaction
                            </li>
                            <li style="margin-bottom: 10px;">
                                <strong>UI/UX Design</strong> - Merancang interface yang user-friendly meskipun di notebook
                            </li>
                        </ul>
                    </div>
                    
                    <div style="background: linear-gradient(135deg, rgba(168, 85, 247, 0.1), rgba(236, 72, 153, 0.1)); padding: 25px; border-radius: 15px; border: 2px solid var(--primary-color); margin-top: 30px;">
                        <h4 style="color: var(--primary-color); margin-bottom: 15px;">🔗 Try It Yourself!</h4>
                        <p style="margin-bottom: 15px; opacity: 0.9;">
                            Kamu bisa langsung mencoba browser ini tanpa perlu install apapun. Cukup buka link Colab dan jalankan!
                        </p>
                        <div style="display: flex; flex-wrap: wrap; gap: 12px;">
                            <a href="https://colab.research.google.com/drive/1wjqVtGWhAha8BkpPduSLi61rxBYwF0sF?usp=sharing" target="_blank" rel="noopener" style="padding: 12px 24px; background: rgba(245, 158, 11, 0.2); border: 2px solid #f59e0b; border-radius: 25px; color: white; text-decoration: none; display: inline-flex; align-items: center; gap: 8px; transition: all 0.3s;">
                                ☁️ <strong>Open in Google Colab</strong>
                            </a>
                            <a href="https://github.com/MRizaA/Riza_Browser_v1" target="_blank" rel="noopener" style="padding: 12px 24px; background: rgba(0, 0, 0, 0.3); border: 2px solid #fff; border-radius: 25px; color: white; text-decoration: none; display: inline-flex; align-items: center; gap: 8px; transition: all 0.3s;">
                                <img src="assets/images/icons/github.png" alt="GitHub" style="width: 20px; height: 20px; border-radius: 50%; background: white; padding: 2px;">
                                <strong>GitHub Repository</strong>
                            </a>
                        </div>
                    </div>
                    
                    <div style="background: rgba(236, 72, 153, 0.1); padding: 20px; border-radius: 12px; border-left: 4px solid #ec4899; margin-top: 25px;">
                        <h4 style="color: #ec4899; margin-bottom: 10px;">💭 Refleksi</h4>
                        <p style="margin-bottom: 10px;">
                            Project "gabut" ini ternyata mengajarkan banyak hal! Dari konsep sederhana tugas kuliah, berkembang menjadi 
                            eksperimen yang cukup kompleks. Meskipun masih banyak fitur yang placeholder, tapi browser ini sudah fungsional 
                            untuk kebutuhan dasar pencarian web dan gambar.
                        </p>
                        <p style="font-style: italic; opacity: 0.9;">
                            "Sometimes the best projects come from just trying things out. Gak harus sempurna, yang penting jadi dan belajar dari prosesnya!"
                        </p>
                    </div>
                </div>
            `,
            en: `
                <h2 style="font-size: 28px; margin-bottom: 10px; background: linear-gradient(45deg, var(--primary-color), var(--secondary-color)); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">
                    Riza Browser 🌐
                </h2>
                
                <div style="display: flex; gap: 20px; margin-bottom: 25px; flex-wrap: wrap; opacity: 0.9;">
                    <span style="display: flex; align-items: center; gap: 8px;">🎨 <strong>Type:</strong> Personal Experiment</span>
                    <span style="display: flex; align-items: center; gap: 8px;">💻 <strong>Platform:</strong> Google Colab</span>
                    <span style="display: flex; align-items: center; gap: 8px;">🐍 <strong>Language:</strong> Python</span>
                    <span style="display: flex; align-items: center; gap: 8px;">📅 <strong>Year:</strong> 2024</span>
                </div>
                
                <div style="display: inline-block; background: rgba(168, 85, 247, 0.1); border: 2px solid var(--primary-color); border-radius: 15px; padding: 8px; margin-bottom: 25px; width: 100%; max-width: 800px;">
                    <img src="assets/images/projects/riza-browser/browser-ui.png" alt="Riza Browser Interface" style="display: block; width: 100%; border-radius: 10px; object-fit: cover;">
                    <p style="text-align: center; padding: 10px; opacity: 0.8; font-size: 14px;">Riza Browser - Image Search Interface</p>
                </div>

                <div style="line-height: 1.8;">
                    <h3 style="color: var(--primary-color); margin: 25px 0 15px;">💡 The Story Behind</h3>
                    <p style="margin-bottom: 15px;">
                        This project started from a college assignment about freemium app concepts. Instead of just making a presentation, 
                        I decided to try building the prototype directly. And thus "Riza Browser" was born - a simple browser 
                        running in Google Colab.
                    </p>
                    <p style="margin-bottom: 15px;">
                        Although it sounds trivial, this project provided valuable lessons about web scraping, API interaction, 
                        and building interactive UIs using Python. Plus, it's a "fun" project that turned out to be quite productive! 😄
                    </p>
                    
                    <h3 style="color: var(--primary-color); margin: 25px 0 15px;">✨ Successfully Implemented Features</h3>
                    <div style="background: rgba(168, 85, 247, 0.05); padding: 20px; border-radius: 12px; margin-bottom: 20px; border: 1px solid rgba(168, 85, 247, 0.2);">
                        <ul style="margin-left: 20px;">
                            <li style="margin-bottom: 12px;">
                                <strong>🔍 Web Search</strong><br>
                                <span style="opacity: 0.9; font-size: 14px;">
                                    Web search using DuckDuckGo & Bing without requiring API keys. 
                                    Uses web scraping to get search results.
                                </span>
                            </li>
                            <li style="margin-bottom: 12px;">
                                <strong>🖼️ Image Search</strong><br>
                                <span style="opacity: 0.9; font-size: 14px;">
                                    Image search with neat gallery display. Results shown in responsive grid layout.
                                </span>
                            </li>
                            <li style="margin-bottom: 12px;">
                                <strong>🎨 Modern UI</strong><br>
                                <span style="opacity: 0.9; font-size: 14px;">
                                    Clean interface with tab system (Web, Images, Video) using IPython widgets. 
                                    Minimalist but functional design.
                                </span>
                            </li>
                            <li style="margin-bottom: 12px;">
                                <strong>💾 Basic Caching</strong><br>
                                <span style="opacity: 0.9; font-size: 14px;">
                                    Simple cache system to store search results and reduce repeated requests.
                                </span>
                            </li>
                        </ul>
                    </div>
                    
                    <h3 style="color: var(--primary-color); margin: 25px 0 15px;">🛠️ Technologies Used</h3>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 12px; margin-bottom: 20px;">
                        <div style="background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(59, 130, 246, 0.05)); padding: 15px; border-left: 4px solid #3b82f6; border-radius: 8px;">
                            <strong style="color: #3b82f6;">🐍 Python</strong>
                            <p style="margin-top: 8px; opacity: 0.9; font-size: 14px;">Core programming language for logic and API interaction</p>
                        </div>
                        <div style="background: linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(139, 92, 246, 0.05)); padding: 15px; border-left: 4px solid #8b5cf6; border-radius: 8px;">
                            <strong style="color: #8b5cf6;">📊 IPython Widgets</strong>
                            <p style="margin-top: 8px; opacity: 0.9; font-size: 14px;">Interactive UI components in Jupyter/Colab notebook</p>
                        </div>
                        <div style="background: linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(16, 185, 129, 0.05)); padding: 15px; border-left: 4px solid #10b981; border-radius: 8px;">
                            <strong style="color: #10b981;">🌐 DuckDuckGo API</strong>
                            <p style="margin-top: 8px; opacity: 0.9; font-size: 14px;">Web scraping for search results without API key</p>
                        </div>
                        <div style="background: linear-gradient(135deg, rgba(245, 158, 11, 0.1), rgba(245, 158, 11, 0.05)); padding: 15px; border-left: 4px solid #f59e0b; border-radius: 8px;">
                            <strong style="color: #f59e0b;">🔎 Bing Search</strong>
                            <p style="margin-top: 8px; opacity: 0.9; font-size: 14px;">Alternative search engine for variety results</p>
                        </div>
                        <div style="background: linear-gradient(135deg, rgba(236, 72, 153, 0.1), rgba(236, 72, 153, 0.05)); padding: 15px; border-left: 4px solid #ec4899; border-radius: 8px;">
                            <strong style="color: #ec4899;">☁️ Google Colab</strong>
                            <p style="margin-top: 8px; opacity: 0.9; font-size: 14px;">Cloud-based Python notebook environment</p>
                        </div>
                    </div>
                    
                    <h3 style="color: var(--primary-color); margin: 25px 0 15px;">🎯 Features & Limitations</h3>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin-bottom: 25px;">
                        <div style="background: rgba(16, 185, 129, 0.1); padding: 20px; border-radius: 12px; border: 2px solid rgba(16, 185, 129, 0.3);">
                            <h4 style="color: #10b981; margin-bottom: 12px;">✅ Working Features</h4>
                            <ul style="margin-left: 20px; font-size: 14px;">
                                <li>Web search with real results</li>
                                <li>Image search with gallery view</li>
                                <li>Smooth tab navigation</li>
                                <li>Basic caching system</li>
                                <li>Clean & modern UI</li>
                            </ul>
                        </div>
                        <div style="background: rgba(245, 158, 11, 0.1); padding: 20px; border-radius: 12px; border: 2px solid rgba(245, 158, 11, 0.3);">
                            <h4 style="color: #f59e0b; margin-bottom: 12px;">⏳ Placeholder/Plans</h4>
                            <ul style="margin-left: 20px; font-size: 14px;">
                                <li>Video search (UI only)</li>
                                <li>VPN Global feature</li>
                                <li>AI Assistant integration</li>
                                <li>Cloud storage</li>
                                <li>Ad blocking feature</li>
                            </ul>
                        </div>
                    </div>
                    
                    <h3 style="color: var(--primary-color); margin: 25px 0 15px;">📚 Lessons Learned</h3>
                    <div style="background: rgba(59, 130, 246, 0.1); padding: 20px; border-radius: 12px; border-left: 4px solid #3b82f6; margin-bottom: 20px;">
                        <ul style="margin-left: 20px;">
                            <li style="margin-bottom: 10px;">
                                <strong>Web Scraping</strong> - Learned how to extract data from websites without official APIs
                            </li>
                            <li style="margin-bottom: 10px;">
                                <strong>IPython Widgets</strong> - Creating interactive UI in Python notebooks
                            </li>
                            <li style="margin-bottom: 10px;">
                                <strong>API Integration</strong> - Connecting various search engines
                            </li>
                            <li style="margin-bottom: 10px;">
                                <strong>Error Handling</strong> - Managing various edge cases in web interaction
                            </li>
                            <li style="margin-bottom: 10px;">
                                <strong>UI/UX Design</strong> - Designing user-friendly interfaces even in notebooks
                            </li>
                        </ul>
                    </div>
                    
                    <div style="background: linear-gradient(135deg, rgba(168, 85, 247, 0.1), rgba(236, 72, 153, 0.1)); padding: 25px; border-radius: 15px; border: 2px solid var(--primary-color); margin-top: 30px;">
                        <h4 style="color: var(--primary-color); margin-bottom: 15px;">🔗 Try It Yourself!</h4>
                        <p style="margin-bottom: 15px; opacity: 0.9;">
                            You can try this browser directly without installing anything. Just open the Colab link and run!
                        </p>
                        <div style="display: flex; flex-wrap: wrap; gap: 12px;">
                            <a href="https://colab.research.google.com/drive/1wjqVtGWhAha8BkpPduSLi61rxBYwF0sF?usp=sharing" target="_blank" rel="noopener" style="padding: 12px 24px; background: rgba(245, 158, 11, 0.2); border: 2px solid #f59e0b; border-radius: 25px; color: white; text-decoration: none; display: inline-flex; align-items: center; gap: 8px; transition: all 0.3s;">
                                ☁️ <strong>Open in Google Colab</strong>
                            </a>
                            <a href="https://github.com/MRizaA/Riza_Browser_v1" target="_blank" rel="noopener" style="padding: 12px 24px; background: rgba(0, 0, 0, 0.3); border: 2px solid #fff; border-radius: 25px; color: white; text-decoration: none; display: inline-flex; align-items: center; gap: 8px; transition: all 0.3s;">
                                <img src="assets/images/icons/github.png" alt="GitHub" style="width: 20px; height: 20px; border-radius: 50%; background: white; padding: 2px;">
                                <strong>GitHub Repository</strong>
                            </a>
                        </div>
                    </div>
                    
                    <div style="background: rgba(236, 72, 153, 0.1); padding: 20px; border-radius: 12px; border-left: 4px solid #ec4899; margin-top: 25px;">
                        <h4 style="color: #ec4899; margin-bottom: 10px;">💭 Reflection</h4>
                        <p style="margin-bottom: 10px;">
                            This "fun" project taught me a lot! From a simple college assignment concept, it evolved into 
                            quite a complex experiment. Although many features are still placeholders, this browser is functional 
                            for basic web and image search needs.
                        </p>
                        <p style="font-style: italic; opacity: 0.9;">
                            "Sometimes the best projects come from just trying things out. It doesn't have to be perfect, what matters is that it works and you learn from the process!"
                        </p>
                    </div>
                </div>
            `
        }
    },

    // SMA Negeri 1 Rantau Badauh
    {
        id: "sma-rantau-badauh",
        type: "education",
        
        title: {
            id: "SMA Negeri 1 Rantau Badauh",
            en: "Senior High School 1 Rantau Badauh"
        },
        subtitle: {
            id: "2019 - 2022",
            en: "2019 - 2022"
        },
        
        description: {
            id: "Lulusan SMA jurusan IPA",
            en: "Senior High School graduate - Science Major"
        },
        
        tags: ["SMA", "IPA", "2019-2022"],
        
        content: {
            id: `
                <h2 style="font-size: 28px; margin-bottom: 10px; background: linear-gradient(45deg, var(--primary-color), var(--secondary-color)); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">
                    SMA Negeri 1 Rantau Badauh
                </h2>
                
                <div style="display: flex; gap: 20px; margin-bottom: 25px; flex-wrap: wrap; opacity: 0.9;">
                    <span style="display: flex; align-items: center; gap: 8px;">🏫 <strong>Sekolah:</strong> SMA Negeri 1 Rantau Badauh</span>
                    <span style="display: flex; align-items: center; gap: 8px;">📅 <strong>Periode:</strong> 2019 - 2022</span>
                    <span style="display: flex; align-items: center; gap: 8px;">📚 <strong>Jurusan:</strong> IPA (Ilmu Pengetahuan Alam)</span>
                    <span style="display: flex; align-items: center; gap: 8px;">📍 <strong>Lokasi:</strong> Rantau Badauh, Barito Kuala</span>
                </div>
                
                <div style="line-height: 1.8;">
                    <h3 style="color: var(--primary-color); margin: 25px 0 15px;">Tentang Sekolah</h3>
                    <p style="margin-bottom: 15px;">
                        SMA Negeri 1 Rantau Badauh merupakan salah satu sekolah menengah atas di Kabupaten Barito Kuala, 
                        Kalimantan Selatan. Sekolah ini berlokasi di Kecamatan Rantau Badauh dan menjadi pilihan utama 
                        bagi siswa di wilayah tersebut untuk melanjutkan pendidikan tingkat menengah atas.
                    </p>
                    
                    <h3 style="color: var(--primary-color); margin: 25px 0 15px;">Program Studi</h3>
                    <div style="background: rgba(59, 130, 246, 0.1); padding: 20px; border-radius: 12px; margin-bottom: 20px; border-left: 4px solid #3b82f6;">
                        <h4 style="color: #3b82f6; margin-bottom: 10px;">🔬 Jurusan IPA (Ilmu Pengetahuan Alam)</h4>
                        <p style="margin-bottom: 15px;">
                            Fokus pada mata pelajaran sains dan matematika dengan penekanan pada:
                        </p>
                        <ul style="margin-left: 20px;">
                            <li style="margin-bottom: 8px;">Matematika (Wajib & Peminatan)</li>
                            <li style="margin-bottom: 8px;">Fisika</li>
                            <li style="margin-bottom: 8px;">Kimia</li>
                            <li style="margin-bottom: 8px;">Biologi</li>
                            <li style="margin-bottom: 8px;">Bahasa Inggris</li>
                            <li style="margin-bottom: 8px;">Bahasa Indonesia</li>
                        </ul>
                    </div>
                    
                    <h3 style="color: var(--primary-color); margin: 25px 0 15px;">Kegiatan & Pengalaman</h3>
                    <div style="display: grid; gap: 12px; margin-bottom: 20px;">
                        <div style="background: rgba(16, 185, 129, 0.1); padding: 15px; border-radius: 10px; border-left: 4px solid #10b981;">
                            <strong>🏆 Kompetisi KSN Matematika</strong>
                            <p style="margin-top: 8px; opacity: 0.9; font-size: 14px;">
                                Terpilih mewakili sekolah dalam Kompetisi Sains Nasional bidang Matematika tingkat kabupaten
                            </p>
                        </div>
                        <div style="background: rgba(245, 158, 11, 0.1); padding: 15px; border-radius: 10px; border-left: 4px solid #f59e0b;">
                            <strong>📚 Pembelajaran Aktif</strong>
                            <p style="margin-top: 8px; opacity: 0.9; font-size: 14px;">
                                Mengikuti berbagai kegiatan ekstrakurikuler dan pembelajaran di luar kelas
                            </p>
                        </div>
                    </div>
                    
                    <h3 style="color: var(--primary-color); margin: 25px 0 15px;">Persiapan Masa Depan</h3>
                    <p style="margin-bottom: 15px;">
                        Pendidikan SMA di jurusan IPA memberikan fondasi kuat dalam bidang sains dan matematika yang sangat 
                        berguna untuk melanjutkan studi ke jenjang perguruan tinggi, khususnya program D3 Teknik Informatika 
                        di Politeknik Hasnur.
                    </p>
                    
                    <div style="background: linear-gradient(135deg, rgba(168, 85, 247, 0.1), rgba(236, 72, 153, 0.1)); padding: 20px; border-radius: 15px; border: 2px solid var(--primary-color); margin-top: 25px;">
                        <h4 style="color: var(--primary-color); margin-bottom: 10px;">🎓 Pencapaian</h4>
                        <p>
                            Menyelesaikan pendidikan SMA dengan baik dan melanjutkan ke pendidikan vokasi di bidang teknologi informasi, 
                            mengaplikasikan kemampuan analitis dan problem-solving yang dipelajari selama masa SMA.
                        </p>
                    </div>
                </div>
            `,
            en: `
                <h2 style="font-size: 28px; margin-bottom: 10px; background: linear-gradient(45deg, var(--primary-color), var(--secondary-color)); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">
                    Senior High School 1 Rantau Badauh
                </h2>
                
                <div style="display: flex; gap: 20px; margin-bottom: 25px; flex-wrap: wrap; opacity: 0.9;">
                    <span style="display: flex; align-items: center; gap: 8px;">🏫 <strong>School:</strong> SMA Negeri 1 Rantau Badauh</span>
                    <span style="display: flex; align-items: center; gap: 8px;">📅 <strong>Period:</strong> 2019 - 2022</span>
                    <span style="display: flex; align-items: center; gap: 8px;">📚 <strong>Major:</strong> Science (IPA)</span>
                    <span style="display: flex; align-items: center; gap: 8px;">📍 <strong>Location:</strong> Rantau Badauh, Barito Kuala</span>
                </div>
                
                <div style="line-height: 1.8;">
                    <h3 style="color: var(--primary-color); margin: 25px 0 15px;">About the School</h3>
                    <p style="margin-bottom: 15px;">
                        SMA Negeri 1 Rantau Badauh is one of the senior high schools in Barito Kuala Regency, 
                        South Kalimantan. The school is located in Rantau Badauh District and is the main choice 
                        for students in the area to continue their senior high school education.
                    </p>
                    
                    <h3 style="color: var(--primary-color); margin: 25px 0 15px;">Study Program</h3>
                    <div style="background: rgba(59, 130, 246, 0.1); padding: 20px; border-radius: 12px; margin-bottom: 20px; border-left: 4px solid #3b82f6;">
                        <h4 style="color: #3b82f6; margin-bottom: 10px;">🔬 Science Major (IPA)</h4>
                        <p style="margin-bottom: 15px;">
                            Focus on science and mathematics subjects with emphasis on:
                        </p>
                        <ul style="margin-left: 20px;">
                            <li style="margin-bottom: 8px;">Mathematics (Core & Specialization)</li>
                            <li style="margin-bottom: 8px;">Physics</li>
                            <li style="margin-bottom: 8px;">Chemistry</li>
                            <li style="margin-bottom: 8px;">Biology</li>
                            <li style="margin-bottom: 8px;">English</li>
                            <li style="margin-bottom: 8px;">Indonesian Language</li>
                        </ul>
                    </div>
                    
                    <h3 style="color: var(--primary-color); margin: 25px 0 15px;">Activities & Experience</h3>
                    <div style="display: grid; gap: 12px; margin-bottom: 20px;">
                        <div style="background: rgba(16, 185, 129, 0.1); padding: 15px; border-radius: 10px; border-left: 4px solid #10b981;">
                            <strong>🏆 KSN Mathematics Competition</strong>
                            <p style="margin-top: 8px; opacity: 0.9; font-size: 14px;">
                                Selected to represent school in National Science Competition in Mathematics at regency level
                            </p>
                        </div>
                        <div style="background: rgba(245, 158, 11, 0.1); padding: 15px; border-radius: 10px; border-left: 4px solid #f59e0b;">
                            <strong>📚 Active Learning</strong>
                            <p style="margin-top: 8px; opacity: 0.9; font-size: 14px;">
                                Participated in various extracurricular activities and outdoor learning
                            </p>
                        </div>
                    </div>
                    
                    <h3 style="color: var(--primary-color); margin: 25px 0 15px;">Future Preparation</h3>
                    <p style="margin-bottom: 15px;">
                        High school education in the Science major provided a strong foundation in science and mathematics 
                        which was very useful for continuing studies to higher education, especially the D3 Informatics Engineering 
                        program at Politeknik Hasnur.
                    </p>
                    
                    <div style="background: linear-gradient(135deg, rgba(168, 85, 247, 0.1), rgba(236, 72, 153, 0.1)); padding: 20px; border-radius: 15px; border: 2px solid var(--primary-color); margin-top: 25px;">
                        <h4 style="color: var(--primary-color); margin-bottom: 10px;">🎓 Achievement</h4>
                        <p>
                            Completed high school education successfully and continued to vocational education in information technology, 
                            applying analytical and problem-solving skills learned during high school.
                        </p>
                    </div>
                </div>
            `
        }
    },

    // SMP Negeri 2 Rantau Badauh
    {
        id: "smp-rantau-badauh",
        type: "education",
        
        title: {
            id: "SMP Negeri 2 Rantau Badauh",
            en: "Junior High School 2 Rantau Badauh"
        },
        subtitle: {
            id: "2016 - 2019",
            en: "2016 - 2019"
        },
        
        description: {
            id: "Lulusan SMP dengan prestasi UNBK peringkat 1",
            en: "Junior High School graduate - Rank 1 National Exam"
        },
        
        tags: ["SMP", "UNBK Rank 1", "2016-2019"],
        
        content: {
            id: `
                <h2 style="font-size: 28px; margin-bottom: 10px; background: linear-gradient(45deg, var(--primary-color), var(--secondary-color)); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">
                    SMP Negeri 2 Rantau Badauh
                </h2>
                
                <div style="display: flex; gap: 20px; margin-bottom: 25px; flex-wrap: wrap; opacity: 0.9;">
                    <span style="display: flex; align-items: center; gap: 8px;">🏫 <strong>Sekolah:</strong> SMP Negeri 2 Rantau Badauh</span>
                    <span style="display: flex; align-items: center; gap: 8px;">📅 <strong>Periode:</strong> 2016 - 2019</span>
                    <span style="display: flex; align-items: center; gap: 8px;">🏆 <strong>Prestasi:</strong> UNBK Peringkat 1</span>
                    <span style="display: flex; align-items: center; gap: 8px;">📍 <strong>Lokasi:</strong> Rantau Badauh, Barito Kuala</span>
                </div>
                
                <div style="line-height: 1.8;">
                    <h3 style="color: var(--primary-color); margin: 25px 0 15px;">Tentang Sekolah</h3>
                    <p style="margin-bottom: 15px;">
                        SMP Negeri 2 Rantau Badauh adalah sekolah menengah pertama yang berlokasi di Kecamatan Rantau Badauh, 
                        Kabupaten Barito Kuala, Kalimantan Selatan. Sekolah ini berkomitmen memberikan pendidikan berkualitas 
                        untuk membentuk siswa yang berprestasi dan berkarakter.
                    </p>
                    
                    <h3 style="color: var(--primary-color); margin: 25px 0 15px;">Prestasi Akademik</h3>
                    <div style="text-align: center; margin: 30px 0;">
                        <div style="display: inline-block; padding: 30px 50px; background: linear-gradient(135deg, rgba(245, 158, 11, 0.2), rgba(239, 68, 68, 0.2)); border-radius: 20px; border: 3px solid #f59e0b; box-shadow: 0 10px 30px rgba(245, 158, 11, 0.3);">
                            <div style="font-size: 72px; margin-bottom: 10px;">🏆</div>
                            <div style="font-size: 48px; font-weight: bold; background: linear-gradient(45deg, #f59e0b, #ef4444); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">
                                #1
                            </div>
                            <p style="margin-top: 15px; font-size: 20px; font-weight: 600;">Peringkat Pertama UNBK</p>
                            <p style="margin-top: 5px; opacity: 0.9;">Tahun Pelajaran 2018/2019</p>
                            <p style="margin-top: 5px; font-size: 14px; opacity: 0.8;">Tingkat Sekolah</p>
                        </div>
                    </div>
                    
                    <h3 style="color: var(--primary-color); margin: 25px 0 15px;">Mata Pelajaran Unggulan</h3>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 12px; margin-bottom: 20px;">
                        <div style="padding: 15px; background: rgba(59, 130, 246, 0.1); border-radius: 10px; border: 2px solid rgba(59, 130, 246, 0.3); text-align: center;">
                            <div style="font-size: 32px; margin-bottom: 8px;">🔢</div>
                            <strong>Matematika</strong>
                        </div>
                        <div style="padding: 15px; background: rgba(16, 185, 129, 0.1); border-radius: 10px; border: 2px solid rgba(16, 185, 129, 0.3); text-align: center;">
                            <div style="font-size: 32px; margin-bottom: 8px;">📘</div>
                            <strong>Bahasa Indonesia</strong>
                        </div>
                        <div style="padding: 15px; background: rgba(139, 92, 246, 0.1); border-radius: 10px; border: 2px solid rgba(139, 92, 246, 0.3); text-align: center;">
                            <div style="font-size: 32px; margin-bottom: 8px;">🔬</div>
                            <strong>IPA</strong>
                        </div>
                        <div style="padding: 15px; background: rgba(236, 72, 153, 0.1); border-radius: 10px; border: 2px solid rgba(236, 72, 153, 0.3); text-align: center;">
                            <div style="font-size: 32px; margin-bottom: 8px;">🌏</div>
                            <strong>Bahasa Inggris</strong>
                        </div>
                    </div>
                    
                    <h3 style="color: var(--primary-color); margin: 25px 0 15px;">Pengalaman & Pembelajaran</h3>
                    <div style="background: rgba(168, 85, 247, 0.05); padding: 20px; border-radius: 12px; margin-bottom: 20px; border: 1px solid rgba(168, 85, 247, 0.2);">
                        <ul style="margin-left: 20px;">
                            <li style="margin-bottom: 12px;">
                                <strong>Konsistensi Akademik</strong> - Mempertahankan prestasi akademik yang baik selama 3 tahun
                            </li>
                            <li style="margin-bottom: 12px;">
                                <strong>UNBK Peringkat 1</strong> - Meraih peringkat tertinggi dalam Ujian Nasional Berbasis Komputer
                            </li>
                            <li style="margin-bottom: 12px;">
                                <strong>Pengembangan Diri</strong> - Aktif dalam kegiatan pembelajaran dan ekstrakurikuler
                            </li>
                            <li style="margin-bottom: 12px;">
                                <strong>Fondasi Kuat</strong> - Membangun dasar pengetahuan yang solid untuk jenjang pendidikan selanjutnya
                            </li>
                        </ul>
                    </div>
                    
                    <div style="background: linear-gradient(135deg, rgba(168, 85, 247, 0.1), rgba(236, 72, 153, 0.1)); padding: 20px; border-radius: 15px; border: 2px solid var(--primary-color); margin-top: 25px;">
                        <h4 style="color: var(--primary-color); margin-bottom: 10px;">🎓 Perjalanan Pendidikan</h4>
                        <p style="margin-bottom: 10px;">
                            Masa SMP menjadi periode penting dalam membangun fondasi akademik yang kuat. Prestasi sebagai 
                            peringkat 1 UNBK menunjukkan dedikasi dan konsistensi dalam belajar, yang menjadi modal penting 
                            untuk melanjutkan pendidikan ke jenjang SMA dan selanjutnya.
                        </p>
                    </div>
                </div>
            `,
            en: `
                <h2 style="font-size: 28px; margin-bottom: 10px; background: linear-gradient(45deg, var(--primary-color), var(--secondary-color)); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">
                    Junior High School 2 Rantau Badauh
                </h2>
                
                <div style="display: flex; gap: 20px; margin-bottom: 25px; flex-wrap: wrap; opacity: 0.9;">
                    <span style="display: flex; align-items: center; gap: 8px;">🏫 <strong>School:</strong> SMP Negeri 2 Rantau Badauh</span>
                    <span style="display: flex; align-items: center; gap: 8px;">📅 <strong>Period:</strong> 2016 - 2019</span>
                    <span style="display: flex; align-items: center; gap: 8px;">🏆 <strong>Achievement:</strong> UNBK Rank 1</span>
                    <span style="display: flex; align-items: center; gap: 8px;">📍 <strong>Location:</strong> Rantau Badauh, Barito Kuala</span>
                </div>
                
                <div style="line-height: 1.8;">
                    <h3 style="color: var(--primary-color); margin: 25px 0 15px;">About the School</h3>
                    <p style="margin-bottom: 15px;">
                        SMP Negeri 2 Rantau Badauh is a junior high school located in Rantau Badauh District, 
                        Barito Kuala Regency, South Kalimantan. The school is committed to providing quality education 
                        to develop achieving and character-building students.
                    </p>
                    
                    <h3 style="color: var(--primary-color); margin: 25px 0 15px;">Academic Achievement</h3>
                    <div style="text-align: center; margin: 30px 0;">
                        <div style="display: inline-block; padding: 30px 50px; background: linear-gradient(135deg, rgba(245, 158, 11, 0.2), rgba(239, 68, 68, 0.2)); border-radius: 20px; border: 3px solid #f59e0b; box-shadow: 0 10px 30px rgba(245, 158, 11, 0.3);">
                            <div style="font-size: 72px; margin-bottom: 10px;">🏆</div>
                            <div style="font-size: 48px; font-weight: bold; background: linear-gradient(45deg, #f59e0b, #ef4444); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">
                                #1
                            </div>
                            <p style="margin-top: 15px; font-size: 20px; font-weight: 600;">First Rank UNBK</p>
                            <p style="margin-top: 5px; opacity: 0.9;">Academic Year 2018/2019</p>
                            <p style="margin-top: 5px; font-size: 14px; opacity: 0.8;">School Level</p>
                        </div>
                    </div>
                    
                    <h3 style="color: var(--primary-color); margin: 25px 0 15px;">Key Subjects</h3>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 12px; margin-bottom: 20px;">
                        <div style="padding: 15px; background: rgba(59, 130, 246, 0.1); border-radius: 10px; border: 2px solid rgba(59, 130, 246, 0.3); text-align: center;">
                            <div style="font-size: 32px; margin-bottom: 8px;">🔢</div>
                            <strong>Mathematics</strong>
                        </div>
                        <div style="padding: 15px; background: rgba(16, 185, 129, 0.1); border-radius: 10px; border: 2px solid rgba(16, 185, 129, 0.3); text-align: center;">
                            <div style="font-size: 32px; margin-bottom: 8px;">📘</div>
                            <strong>Indonesian</strong>
                        </div>
                        <div style="padding: 15px; background: rgba(139, 92, 246, 0.1); border-radius: 10px; border: 2px solid rgba(139, 92, 246, 0.3); text-align: center;">
                            <div style="font-size: 32px; margin-bottom: 8px;">🔬</div>
                            <strong>Science</strong>
                        </div>
                        <div style="padding: 15px; background: rgba(236, 72, 153, 0.1); border-radius: 10px; border: 2px solid rgba(236, 72, 153, 0.3); text-align: center;">
                            <div style="font-size: 32px; margin-bottom: 8px;">🌏</div>
                            <strong>English</strong>
                        </div>
                    </div>
                    
                    <h3 style="color: var(--primary-color); margin: 25px 0 15px;">Experience & Learning</h3>
                    <div style="background: rgba(168, 85, 247, 0.05); padding: 20px; border-radius: 12px; margin-bottom: 20px; border: 1px solid rgba(168, 85, 247, 0.2);">
                        <ul style="margin-left: 20px;">
                            <li style="margin-bottom: 12px;">
                                <strong>Academic Consistency</strong> - Maintained good academic performance for 3 years
                            </li>
                            <li style="margin-bottom: 12px;">
                                <strong>UNBK Rank 1</strong> - Achieved highest rank in Computer-Based National Examination
                            </li>
                            <li style="margin-bottom: 12px;">
                                <strong>Self Development</strong> - Active in learning activities and extracurriculars
                            </li>
                            <li style="margin-bottom: 12px;">
                                <strong>Strong Foundation</strong> - Built solid knowledge base for further education
                            </li>
                        </ul>
                    </div>
                    
                    <div style="background: linear-gradient(135deg, rgba(168, 85, 247, 0.1), rgba(236, 72, 153, 0.1)); padding: 20px; border-radius: 15px; border: 2px solid var(--primary-color); margin-top: 25px;">
                        <h4 style="color: var(--primary-color); margin-bottom: 10px;">🎓 Educational Journey</h4>
                        <p style="margin-bottom: 10px;">
                            Junior high school was an important period in building a strong academic foundation. The achievement as 
                            rank 1 UNBK demonstrated dedication and consistency in learning, which became important capital 
                            to continue education to high school and beyond.
                        </p>
                    </div>
                </div>
            `
        }
    },

    // SDN Danda Jaya 2
    {
        id: "sdn-danda-jaya-2",
        type: "education",
        
        title: {
            id: "SDN Danda Jaya 2",
            en: "SDN Danda Jaya 2 (Elementary School)"
        },
        subtitle: {
            id: "2009 - 2016",
            en: "2009 - 2016"
        },
        
        description: {
            id: "Lulusan sekolah dasar dengan rata-rata nilai akademik yang baik",
            en: "Elementary school graduate with solid academic performance"
        },
        
        tags: ["SD", "2009-2016", "Barito Kuala"],
        
        content: {
            id: `
                <h2 style="font-size: 28px; margin-bottom: 10px; background: linear-gradient(45deg, var(--primary-color), var(--secondary-color)); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">
                    SDN Danda Jaya 2
                </h2>
                
                <div style="display: flex; gap: 20px; margin-bottom: 25px; flex-wrap: wrap; opacity: 0.9;">
                    <span style="display: flex; align-items: center; gap: 8px;">🏫 <strong>Sekolah:</strong> SDN Danda Jaya 2</span>
                    <span style="display: flex; align-items: center; gap: 8px;">📅 <strong>Periode:</strong> 2009 - 2016</span>
                    <span style="display: flex; align-items: center; gap: 8px;">📍 <strong>Lokasi:</strong> Desa Danda Jaya, Kec. Rantau Badauh</span>
                    <span style="display: flex; align-items: center; gap: 8px;">🗂️ <strong>NIS:</strong> 1108</span>
                </div>
                
                <div style="line-height: 1.8;">
                    <h3 style="color: var(--primary-color); margin: 25px 0 15px;">Tentang Sekolah</h3>
                    <p style="margin-bottom: 15px;">
                        SDN Danda Jaya 2 adalah sekolah dasar negeri yang berlokasi di Desa Danda Jaya, Kecamatan Rantau Badauh, 
                        Kabupaten Barito Kuala, Kalimantan Selatan. Sekolah ini menjadi fondasi awal pendidikan formal dalam 
                        membentuk karakter dan kompetensi akademik siswa.
                    </p>
                    
                    <h3 style="color: var(--primary-color); margin: 25px 0 15px;">Prestasi Akademik</h3>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin-bottom: 25px;">
                        <div style="background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(59, 130, 246, 0.05)); padding: 20px; border-left: 4px solid #3b82f6; border-radius: 8px;">
                            <div style="font-size: 14px; color: #3b82f6; font-weight: 600; margin-bottom: 8px;">Rata-rata Rapor</div>
                            <div style="font-size: 32px; font-weight: bold; color: #3b82f6;">74,4</div>
                            <p style="margin-top: 8px; opacity: 0.9; font-size: 13px;">Tahun Pelajaran 2015/2016</p>
                        </div>
                        <div style="background: linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(16, 185, 129, 0.05)); padding: 20px; border-left: 4px solid #10b981; border-radius: 8px;">
                            <div style="font-size: 14px; color: #10b981; font-weight: 600; margin-bottom: 8px;">Nilai Ujian Sekolah</div>
                            <div style="font-size: 32px; font-weight: bold; color: #10b981;">76,6</div>
                            <p style="margin-top: 8px; opacity: 0.9; font-size: 13px;">Ujian Akhir Sekolah Dasar</p>
                        </div>
                    </div>
                    
                    <h3 style="color: var(--primary-color); margin: 25px 0 15px;">Mata Pelajaran Utama</h3>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 12px; margin-bottom: 20px;">
                        <div style="padding: 15px; background: rgba(59, 130, 246, 0.1); border-radius: 10px; border-left: 3px solid #3b82f6;">
                            <div style="font-weight: 600; margin-bottom: 5px;">📘 Bahasa Indonesia</div>
                            <div style="font-size: 13px; opacity: 0.9;">Rapor: 78 | Ujian: 84</div>
                        </div>
                        <div style="padding: 15px; background: rgba(16, 185, 129, 0.1); border-radius: 10px; border-left: 3px solid #10b981;">
                            <div style="font-weight: 600; margin-bottom: 5px;">🔢 Matematika</div>
                            <div style="font-size: 13px; opacity: 0.9;">Rapor: 70 | Ujian: 85</div>
                        </div>
                        <div style="padding: 15px; background: rgba(139, 92, 246, 0.1); border-radius: 10px; border-left: 3px solid #8b5cf6;">
                            <div style="font-weight: 600; margin-bottom: 5px;">🔬 IPA</div>
                            <div style="font-size: 13px; opacity: 0.9;">Rapor: 82 | Ujian: 87,5</div>
                        </div>
                        <div style="padding: 15px; background: rgba(245, 158, 11, 0.1); border-radius: 10px; border-left: 3px solid #f59e0b;">
                            <div style="font-weight: 600; margin-bottom: 5px;">🌍 IPS</div>
                            <div style="font-size: 13px; opacity: 0.9;">Rapor: 69 | Ujian: 60</div>
                        </div>
                    </div>
                    
                    <h3 style="color: var(--primary-color); margin: 25px 0 15px;">Perjalanan Pendidikan</h3>
                    <div style="background: rgba(168, 85, 247, 0.05); padding: 20px; border-radius: 12px; margin-bottom: 20px; border: 1px solid rgba(168, 85, 247, 0.2);">
                        <p style="margin-bottom: 15px;">
                            Pendidikan dasar di SDN Danda Jaya 2 menjadi fase penting dalam membentuk 
                            fondasi akademik dan karakter. Dengan rata-rata nilai rapor 74,4 dan nilai ujian sekolah 76,6, 
                            menunjukkan konsistensi dalam pembelajaran terutama di bidang sains dan bahasa.
                        </p>
                        <p>
                            Keberhasilan di tingkat SD ini menjadi modal awal untuk melanjutkan pendidikan ke jenjang SMP 
                            dengan prestasi yang terus meningkat hingga meraih peringkat 1 UNBK di tingkat sekolah.
                        </p>
                    </div>
                    
                    <h3 style="color: var(--primary-color); margin: 25px 0 15px;">Kompetensi yang Dikembangkan</h3>
                    <div style="display: grid; gap: 10px; margin-bottom: 25px;">
                        <div style="background: rgba(59, 130, 246, 0.1); padding: 12px; border-radius: 8px; border-left: 3px solid #3b82f6;">
                            ✓ Kemampuan dasar dalam matematika dan sains
                        </div>
                        <div style="background: rgba(16, 185, 129, 0.1); padding: 12px; border-radius: 8px; border-left: 3px solid #10b981;">
                            ✓ Pemahaman literasi dan komunikasi dalam bahasa Indonesia
                        </div>
                        <div style="background: rgba(139, 92, 246, 0.1); padding: 12px; border-radius: 8px; border-left: 3px solid #8b5cf6;">
                            ✓ Pengetahuan umum dan kesadaran sosial
                        </div>
                        <div style="background: rgba(245, 158, 11, 0.1); padding: 12px; border-radius: 8px; border-left: 3px solid #f59e0b;">
                            ✓ Disiplin dan kebiasaan belajar yang baik
                        </div>
                    </div>
                    
                    <div style="background: linear-gradient(135deg, rgba(168, 85, 247, 0.1), rgba(236, 72, 153, 0.1)); padding: 20px; border-radius: 15px; border: 2px solid var(--primary-color); margin-top: 25px;">
                        <h4 style="color: var(--primary-color); margin-bottom: 10px;">🎓 Lanjut ke Jenjang Berikutnya</h4>
                        <p style="margin-bottom: 10px;">
                            Lulus dari SDN Danda Jaya 2 pada 25 Juni 2016 dengan hasil belajar yang konsisten. 
                            Melanjutkan pendidikan ke SMP Negeri 2 Rantau Badauh dengan persiapan akademik yang solid.
                        </p>
                    </div>
                </div>
            `,
            en: `
                <h2 style="font-size: 28px; margin-bottom: 10px; background: linear-gradient(45deg, var(--primary-color), var(--secondary-color)); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">
                    SDN Danda Jaya 2
                </h2>
                
                <div style="display: flex; gap: 20px; margin-bottom: 25px; flex-wrap: wrap; opacity: 0.9;">
                    <span style="display: flex; align-items: center; gap: 8px;">🏫 <strong>School:</strong> SDN Danda Jaya 2</span>
                    <span style="display: flex; align-items: center; gap: 8px;">📅 <strong>Period:</strong> 2009 - 2016</span>
                    <span style="display: flex; align-items: center; gap: 8px;">📍 <strong>Location:</strong> Danda Jaya Village, Rantau Badauh District</span>
                    <span style="display: flex; align-items: center; gap: 8px;">🗂️ <strong>Student ID:</strong> 1108</span>
                </div>
                
                <div style="line-height: 1.8;">
                    <h3 style="color: var(--primary-color); margin: 25px 0 15px;">About the School</h3>
                    <p style="margin-bottom: 15px;">
                        SDN Danda Jaya 2 is an elementary school located in Danda Jaya Village, Rantau Badauh District, 
                        Barito Kuala Regency, South Kalimantan. The school serves as the foundation of formal education 
                        in developing academic competence and character formation for students.
                    </p>
                    
                    <h3 style="color: var(--primary-color); margin: 25px 0 15px;">Academic Achievement</h3>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin-bottom: 25px;">
                        <div style="background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(59, 130, 246, 0.05)); padding: 20px; border-left: 4px solid #3b82f6; border-radius: 8px;">
                            <div style="font-size: 14px; color: #3b82f6; font-weight: 600; margin-bottom: 8px;">Average Report Card</div>
                            <div style="font-size: 32px; font-weight: bold; color: #3b82f6;">74,4</div>
                            <p style="margin-top: 8px; opacity: 0.9; font-size: 13px;">Academic Year 2015/2016</p>
                        </div>
                        <div style="background: linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(16, 185, 129, 0.05)); padding: 20px; border-left: 4px solid #10b981; border-radius: 8px;">
                            <div style="font-size: 14px; color: #10b981; font-weight: 600; margin-bottom: 8px;">School Exam Score</div>
                            <div style="font-size: 32px; font-weight: bold; color: #10b981;">76,6</div>
                            <p style="margin-top: 8px; opacity: 0.9; font-size: 13px;">Elementary School Final Exam</p>
                        </div>
                    </div>
                    
                    <h3 style="color: var(--primary-color); margin: 25px 0 15px;">Main Subjects</h3>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 12px; margin-bottom: 20px;">
                        <div style="padding: 15px; background: rgba(59, 130, 246, 0.1); border-radius: 10px; border-left: 3px solid #3b82f6;">
                            <div style="font-weight: 600; margin-bottom: 5px;">📘 Indonesian Language</div>
                            <div style="font-size: 13px; opacity: 0.9;">Report: 78 | Exam: 84</div>
                        </div>
                        <div style="padding: 15px; background: rgba(16, 185, 129, 0.1); border-radius: 10px; border-left: 3px solid #10b981;">
                            <div style="font-weight: 600; margin-bottom: 5px;">🔢 Mathematics</div>
                            <div style="font-size: 13px; opacity: 0.9;">Report: 70 | Exam: 85</div>
                        </div>
                        <div style="padding: 15px; background: rgba(139, 92, 246, 0.1); border-radius: 10px; border-left: 3px solid #8b5cf6;">
                            <div style="font-weight: 600; margin-bottom: 5px;">🔬 Science</div>
                            <div style="font-size: 13px; opacity: 0.9;">Report: 82 | Exam: 87,5</div>
                        </div>
                        <div style="padding: 15px; background: rgba(245, 158, 11, 0.1); border-radius: 10px; border-left: 3px solid #f59e0b;">
                            <div style="font-weight: 600; margin-bottom: 5px;">🌍 Social Studies</div>
                            <div style="font-size: 13px; opacity: 0.9;">Report: 69 | Exam: 60</div>
                        </div>
                    </div>
                    
                    <h3 style="color: var(--primary-color); margin: 25px 0 15px;">Educational Journey</h3>
                    <div style="background: rgba(168, 85, 247, 0.05); padding: 20px; border-radius: 12px; margin-bottom: 20px; border: 1px solid rgba(168, 85, 247, 0.2);">
                        <p style="margin-bottom: 15px;">
                            Elementary education at SDN Danda Jaya 2 was an important phase in building 
                            academic foundation and character development. With an average report card of 74.4 and school exam score of 76.6, 
                            it demonstrates consistency in learning, especially in science and language subjects.
                        </p>
                        <p>
                            This success at the elementary level provided a strong foundation to continue to junior high school 
                            with continuously improving achievements, eventually reaching rank 1 in the UNBK at the school level.
                        </p>
                    </div>
                    
                    <h3 style="color: var(--primary-color); margin: 25px 0 15px;">Competencies Developed</h3>
                    <div style="display: grid; gap: 10px; margin-bottom: 25px;">
                        <div style="background: rgba(59, 130, 246, 0.1); padding: 12px; border-radius: 8px; border-left: 3px solid #3b82f6;">
                            ✓ Foundation in mathematics and science
                        </div>
                        <div style="background: rgba(16, 185, 129, 0.1); padding: 12px; border-radius: 8px; border-left: 3px solid #10b981;">
                            ✓ Understanding of literacy and communication in Indonesian language
                        </div>
                        <div style="background: rgba(139, 92, 246, 0.1); padding: 12px; border-radius: 8px; border-left: 3px solid #8b5cf6;">
                            ✓ General knowledge and social awareness
                        </div>
                        <div style="background: rgba(245, 158, 11, 0.1); padding: 12px; border-radius: 8px; border-left: 3px solid #f59e0b;">
                            ✓ Discipline and good learning habits
                        </div>
                    </div>
                    
                    <div style="background: linear-gradient(135deg, rgba(168, 85, 247, 0.1), rgba(236, 72, 153, 0.1)); padding: 20px; border-radius: 15px; border: 2px solid var(--primary-color); margin-top: 25px;">
                        <h4 style="color: var(--primary-color); margin-bottom: 10px;">🎓 Continuing to Next Level</h4>
                        <p style="margin-bottom: 10px;">
                            Graduated from SDN Danda Jaya 2 on June 25, 2016 with consistent learning results. 
                            Continued education to SMP Negeri 2 Rantau Badauh with solid academic preparation.
                        </p>
                    </div>
                </div>
            `
        }
    },

    // SADP
    {
        id: "sadp-17agustus-app",
        type: "project",
        
        title: {
            id: "Sistem Manajemen Lomba 17 Agustus",
            en: "17th August Competition Management System"
        },
        subtitle: {
            id: "Technical Test | Golang + React.js | PT Sinar Alam Duta Perdana | 2025",
            en: "Technical Test | Golang + React.js | PT Sinar Alam Duta Perdana | 2025"
        },
        
        description: {
            id: "Aplikasi web fullstack untuk manajemen kompetisi kemerdekaan dengan multiple user roles - dibuat sebagai technical test",
            en: "Fullstack web application for independence competition management with multiple user roles - created as technical test"
        },
        
        tags: ["Golang", "React.js", "MySQL", "RESTful API", "Fullstack", "Multi-Role System"],
        
        content: {
            id: `<h2 style="font-size: 28px; margin-bottom: 10px; background: linear-gradient(45deg, var(--primary-color), var(--secondary-color)); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">
                Sistem Manajemen Lomba 17 Agustus 🇮🇩
            </h2>

            <div style="display: flex; gap: 20px; margin-bottom: 25px; flex-wrap: wrap; opacity: 0.9;">
                <span style="display: flex; align-items: center; gap: 8px;">🎯 <strong>Tipe:</strong> Technical Test</span>
                <span style="display: flex; align-items: center; gap: 8px;">🏢 <strong>Untuk:</strong> PT Sinar Alam Duta Perdana</span>
                <span style="display: flex; align-items: center; gap: 8px;">💻 <strong>Stack:</strong> Golang, React.js, MySQL</span>
                <span style="display: flex; align-items: center; gap: 8px;">📅 <strong>Tahun:</strong> 2025</span>
            </div>

            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 15px; margin-bottom: 25px;">
                <div style="background: rgba(168, 85, 247, 0.1); border: 2px solid var(--primary-color); border-radius: 15px; padding: 8px;">
                    <img src="assets/images/projects/sadp/login.png" alt="Login Page" style="display: block; width: 100%; height: 220px; border-radius: 10px; object-fit: cover;">
                    <p style="text-align: center; padding: 10px; opacity: 0.8; font-size: 14px;">Halaman Login</p>
                </div>
                <div style="background: rgba(168, 85, 247, 0.1); border: 2px solid var(--primary-color); border-radius: 15px; padding: 8px;">
                    <img src="assets/images/projects/sadp/admin.png" alt="Admin Panel" style="display: block; width: 100%; height: 220px; border-radius: 10px; object-fit: cover;">
                    <p style="text-align: center; padding: 10px; opacity: 0.8; font-size: 14px;">Admin - Kelola User</p>
                </div>
                <div style="background: rgba(168, 85, 247, 0.1); border: 2px solid var(--primary-color); border-radius: 15px; padding: 8px;">
                    <img src="assets/images/projects/sadp/peserta.png" alt="User View" style="display: block; width: 100%; height: 220px; border-radius: 10px; object-fit: cover;">
                    <p style="text-align: center; padding: 10px; opacity: 0.8; font-size: 14px;">User - Lihat & Daftar Lomba</p>
                </div>
                <div style="background: rgba(168, 85, 247, 0.1); border: 2px solid var(--primary-color); border-radius: 15px; padding: 8px;">
                    <img src="assets/images/projects/sadp/guest.png" alt="Guest View" style="display: block; width: 100%; height: 220px; border-radius: 10px; object-fit: cover;">
                    <p style="text-align: center; padding: 10px; opacity: 0.8; font-size: 14px;">Guest - Lihat & Daftar Menjadi Peserta</p>
                </div>
            </div>

            <div style="line-height: 1.8;">
                <h3 style="color: var(--primary-color); margin: 25px 0 15px;">📖 Latar Belakang</h3>
                <p style="margin-bottom: 15px;">
                    Aplikasi ini dibuat sebagai technical testsaat melamar posisi Fullstack Developer 
                    di PT Sinar Alam Duta Perdana.
                </p>
                <p style="margin-bottom: 15px;">
                    Tugas yang diberikan adalah membuat aplikasi web dengan waktu pengerjaan terbatas. 
                    Meskipun tidak lolos ke tahap interview, ini menjadi pengalaman berharga untuk pertama kali membangun 
                    aplikasi fullstack dengan Golang.
                </p>
                
                <h3 style="color: var(--primary-color); margin: 25px 0 15px;">🛠️ Teknologi yang Digunakan</h3>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 12px; margin-bottom: 25px;">
                    <div style="background: linear-gradient(135deg, rgba(0, 173, 216, 0.1), rgba(0, 173, 216, 0.05)); padding: 15px; border-left: 4px solid #00ADD8; border-radius: 8px;">
                        <strong style="color: #00ADD8;">🔷 Golang + Gorilla Mux</strong>
                        <p style="margin-top: 8px; opacity: 0.9; font-size: 14px;">
                            Backend API dengan Gorilla Mux untuk routing. Query langsung ke MySQL untuk fetch & update data.
                        </p>
                    </div>
                    <div style="background: linear-gradient(135deg, rgba(97, 218, 251, 0.1), rgba(97, 218, 251, 0.05)); padding: 15px; border-left: 4px solid #61DAFB; border-radius: 8px;">
                        <strong style="color: #61DAFB;">⚛️ React.js</strong>
                        <p style="margin-top: 8px; opacity: 0.9; font-size: 14px;">
                            Frontend dengan React hooks untuk state management. Axios untuk koneksi ke backend.
                        </p>
                    </div>
                    <div style="background: linear-gradient(135deg, rgba(0, 117, 143, 0.1), rgba(0, 117, 143, 0.05)); padding: 15px; border-left: 4px solid #00758F; border-radius: 8px;">
                        <strong style="color: #00758F;">🐘 MySQL</strong>
                        <p style="margin-top: 8px; opacity: 0.9; font-size: 14px;">
                            Database dengan 3 tabel (users, lomba, peserta). Relasi antar tabel untuk menjaga konsistensi data.
                        </p>
                    </div>
                </div>
                
                <h3 style="color: var(--primary-color); margin: 25px 0 15px;">✨ Fitur Aplikasi</h3>
                
                <h4 style="color: var(--secondary-color); margin: 20px 0 10px; font-size: 18px;">👨‍💼 Admin</h4>
                <div style="background: rgba(168, 85, 247, 0.05); padding: 20px; border-radius: 12px; margin-bottom: 20px; border: 1px solid rgba(168, 85, 247, 0.2);">
                    <ul style="margin-left: 20px;">
                        <li style="margin-bottom: 10px;">
                            <strong>Kelola User:</strong> Tambah, edit, hapus user (admin & peserta)
                        </li>
                        <li style="margin-bottom: 10px;">
                            <strong>Kelola Lomba:</strong> Buat jenis lomba baru (Tarik Tambang, Balap Karung, dll)
                        </li>
                        <li style="margin-bottom: 10px;">
                            <strong>Kelola Peserta:</strong> Daftarkan user ke lomba, lihat & hapus registrasi
                        </li>
                    </ul>
                </div>
                
                <h4 style="color: var(--secondary-color); margin: 20px 0 10px; font-size: 18px;">👤 User (Peserta)</h4>
                <div style="background: rgba(168, 85, 247, 0.05); padding: 20px; border-radius: 12px; margin-bottom: 20px; border: 1px solid rgba(168, 85, 247, 0.2);">
                    <ul style="margin-left: 20px;">
                        <li style="margin-bottom: 10px;">
                            <strong>Lihat Lomba:</strong> Browse lomba yang tersedia
                        </li>
                        <li style="margin-bottom: 10px;">
                            <strong>Daftar Lomba:</strong> Registrasi diri ke lomba pilihan (otomatis pakai ID user login)
                        </li>
                        <li style="margin-bottom: 10px;">
                            <strong>Lihat Peserta:</strong> Cek siapa saja yang terdaftar di lomba tertentu
                        </li>
                    </ul>
                </div>
                
                <h4 style="color: var(--secondary-color); margin: 20px 0 10px; font-size: 18px;">🌐 Guest (Pengunjung)</h4>
                <div style="background: rgba(168, 85, 247, 0.05); padding: 20px; border-radius: 12px; margin-bottom: 20px; border: 1px solid rgba(168, 85, 247, 0.2);">
                    <ul style="margin-left: 20px;">
                        <li style="margin-bottom: 10px;">
                            <strong>Browse Only:</strong> Lihat lomba & peserta tanpa login (read-only)
                        </li>
                        <li style="margin-bottom: 10px;">
                            <strong>Prompt Register:</strong> Harus daftar/login untuk bisa ikut lomba
                        </li>
                    </ul>
                </div>
                
                <h3 style="color: var(--primary-color); margin: 25px 0 15px;">💡 Yang Saya Pelajari</h3>
                <div style="background: rgba(236, 72, 153, 0.1); padding: 20px; border-radius: 12px; margin-bottom: 20px; border-left: 4px solid #ec4899;">
                    <ul style="margin-left: 20px;">
                        <li style="margin-bottom: 12px;">
                            <strong>First Time Golang:</strong> Ini project Golang pertama saya. Belajar setup backend dengan 
                            Gorilla Mux, handle HTTP requests, dan query ke database.
                        </li>
                        <li style="margin-bottom: 12px;">
                            <strong>Multi-Role System:</strong> Implementasi 3 level user (Admin, User, Guest) dengan akses berbeda-beda. 
                            Admin bisa CRUD semua data, User cuma bisa daftar lomba, Guest cuma bisa lihat.
                        </li>
                        <li style="margin-bottom: 12px;">
                            <strong>Database Relations:</strong> Setup foreign keys supaya data tetap konsisten. 
                            Misal: kalau user dihapus, registrasi lomba mereka juga ikut terhapus otomatis.
                        </li>
                        <li style="margin-bottom: 12px;">
                            <strong>React + Backend Integration:</strong> Connect React frontend ke Golang backend pakai Axios. 
                            Handle CORS, error responses, dan loading states.
                        </li>
                        <li style="margin-bottom: 12px;">
                            <strong>Duplicate Prevention:</strong> User gak bisa daftar 2x ke lomba yang sama. 
                            Pakai unique constraint di database untuk cegah duplikasi.
                        </li>
                    </ul>
                </div>
                
                <div style="background: linear-gradient(135deg, rgba(168, 85, 247, 0.1), rgba(236, 72, 153, 0.1)); padding: 25px; border-radius: 15px; border: 2px solid var(--primary-color); margin-top: 30px;">
                    <h4 style="color: var(--primary-color); margin-bottom: 15px;">🔗 GitHub Repository</h4>
                    <a href="https://github.com/MRizaA/17-agustus-sadp" target="_blank" rel="noopener" style="padding: 12px 24px; background: rgba(0, 0, 0, 0.3); border: 2px solid #fff; border-radius: 25px; color: white; text-decoration: none; display: inline-flex; align-items: center; gap: 8px; transition: all 0.3s;">
                        <img src="assets/images/icons/github.png" alt="GitHub" style="width: 20px; height: 20px; border-radius: 50%; background: white; padding: 2px;">
                        <strong>Lihat Source Code</strong>
                    </a>
                </div>
                
                <div style="background: rgba(59, 130, 246, 0.1); padding: 20px; border-radius: 12px; border-left: 4px solid #3b82f6; margin-top: 25px;">
                    <h4 style="color: #3b82f6; margin-bottom: 10px;">💭 Refleksi</h4>
                    <p style="margin-bottom: 10px;">
                        Project ini dibuat dalam waktu terbatas sebagai fresh graduate yang baru pertama kali pakai Golang. 
                        Meskipun tidak lolos ke tahap interview, saya belajar banyak tentang bagaimana membangun aplikasi 
                        fullstack dari nol dengan teknologi baru.
                    </p>
                    <p style="font-style: italic; opacity: 0.9;">
                        "Technical test bukan cuma tentang hasil akhir, tapi juga tentang kemampuan belajar cepat dan 
                        problem-solving. Project ini bukti bahwa saya bisa handle teknologi baru dan bikin aplikasi yang 
                        functional dalam waktu singkat."
                    </p>
                </div>
            </div>`,
            en: `<h2 style="font-size: 28px; margin-bottom: 10px; background: linear-gradient(45deg, var(--primary-color), var(--secondary-color)); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">
                    17th August Competition Management System 🇮🇩
                </h2>

                <div style="display: flex; gap: 20px; margin-bottom: 25px; flex-wrap: wrap; opacity: 0.9;">
                    <span style="display: flex; align-items: center; gap: 8px;">🎯 <strong>Type:</strong> Technical Test</span>
                    <span style="display: flex; align-items: center; gap: 8px;">🏢 <strong>For:</strong> PT Sinar Alam Duta Perdana</span>
                    <span style="display: flex; align-items: center; gap: 8px;">💻 <strong>Stack:</strong> Golang, React.js, MySQL</span>
                    <span style="display: flex; align-items: center; gap: 8px;">📅 <strong>Year:</strong> 2025</span>
                </div>

                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 15px; margin-bottom: 25px;">
                    <div style="background: rgba(168, 85, 247, 0.1); border: 2px solid var(--primary-color); border-radius: 15px; padding: 8px;">
                        <img src="assets/images/projects/sadp/login.png" alt="Login Page" style="display: block; width: 100%; height: 220px; border-radius: 10px; object-fit: cover;">
                        <p style="text-align: center; padding: 10px; opacity: 0.8; font-size: 14px;">Login Page</p>
                    </div>
                    <div style="background: rgba(168, 85, 247, 0.1); border: 2px solid var(--primary-color); border-radius: 15px; padding: 8px;">
                        <img src="assets/images/projects/sadp/admin.png" alt="Admin Panel" style="display: block; width: 100%; height: 220px; border-radius: 10px; object-fit: cover;">
                        <p style="text-align: center; padding: 10px; opacity: 0.8; font-size: 14px;">Admin - Manage Users</p>
                    </div>
                    <div style="background: rgba(168, 85, 247, 0.1); border: 2px solid var(--primary-color); border-radius: 15px; padding: 8px;">
                        <img src="assets/images/projects/sadp/peserta.png" alt="User View" style="display: block; width: 100%; height: 220px; border-radius: 10px; object-fit: cover;">
                        <p style="text-align: center; padding: 10px; opacity: 0.8; font-size: 14px;">User - View & Register Competitions</p>
                    </div>
                    <div style="background: rgba(168, 85, 247, 0.1); border: 2px solid var(--primary-color); border-radius: 15px; padding: 8px;">
                        <img src="assets/images/projects/sadp/guest.png" alt="Guest View" style="display: block; width: 100%; height: 220px; border-radius: 10px; object-fit: cover;">
                        <p style="text-align: center; padding: 10px; opacity: 0.8; font-size: 14px;">Guest - View & Register as Participant</p>
                    </div>
                </div>

                <div style="line-height: 1.8;">
                    <h3 style="color: var(--primary-color); margin: 25px 0 15px;">📖 Background</h3>
                    <p style="margin-bottom: 15px;">
                        This application was created as a technical test when applying for a Fullstack Developer 
                        position at PT Sinar Alam Duta Perdana.
                    </p>
                    <p style="margin-bottom: 15px;">
                        The given task was to build a web application within a limited timeframe.
                        Although I didn't advance to the interview stage, this became a valuable experience as my first time 
                        building a fullstack application with Golang.
                    </p>
                    
                    <h3 style="color: var(--primary-color); margin: 25px 0 15px;">🛠️ Technologies Used</h3>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 12px; margin-bottom: 25px;">
                        <div style="background: linear-gradient(135deg, rgba(0, 173, 216, 0.1), rgba(0, 173, 216, 0.05)); padding: 15px; border-left: 4px solid #00ADD8; border-radius: 8px;">
                            <strong style="color: #00ADD8;">🔷 Golang + Gorilla Mux</strong>
                            <p style="margin-top: 8px; opacity: 0.9; font-size: 14px;">
                                Backend API with Gorilla Mux for routing. Direct MySQL queries for data fetching and updates.
                            </p>
                        </div>
                        <div style="background: linear-gradient(135deg, rgba(97, 218, 251, 0.1), rgba(97, 218, 251, 0.05)); padding: 15px; border-left: 4px solid #61DAFB; border-radius: 8px;">
                            <strong style="color: #61DAFB;">⚛️ React.js</strong>
                            <p style="margin-top: 8px; opacity: 0.9; font-size: 14px;">
                                Frontend with React hooks for state management. Axios for backend integration.
                            </p>
                        </div>
                        <div style="background: linear-gradient(135deg, rgba(0, 117, 143, 0.1), rgba(0, 117, 143, 0.05)); padding: 15px; border-left: 4px solid #00758F; border-radius: 8px;">
                            <strong style="color: #00758F;">🐘 MySQL</strong>
                            <p style="margin-top: 8px; opacity: 0.9; font-size: 14px;">
                                Database with 3 tables (users, competitions, participants). Table relationships to maintain data consistency.
                            </p>
                        </div>
                    </div>
                    
                    <h3 style="color: var(--primary-color); margin: 25px 0 15px;">✨ Application Features</h3>
                    
                    <h4 style="color: var(--secondary-color); margin: 20px 0 10px; font-size: 18px;">👨‍💼 Admin</h4>
                    <div style="background: rgba(168, 85, 247, 0.05); padding: 20px; border-radius: 12px; margin-bottom: 20px; border: 1px solid rgba(168, 85, 247, 0.2);">
                        <ul style="margin-left: 20px;">
                            <li style="margin-bottom: 10px;">
                                <strong>Manage Users:</strong> Create, edit, delete users (admin & participants)
                            </li>
                            <li style="margin-bottom: 10px;">
                                <strong>Manage Competitions:</strong> Create new competition types (Tug of War, Sack Race, etc.)
                            </li>
                            <li style="margin-bottom: 10px;">
                                <strong>Manage Participants:</strong> Register users to competitions, view & delete registrations
                            </li>
                        </ul>
                    </div>
                    
                    <h4 style="color: var(--secondary-color); margin: 20px 0 10px; font-size: 18px;">👤 User (Participant)</h4>
                    <div style="background: rgba(168, 85, 247, 0.05); padding: 20px; border-radius: 12px; margin-bottom: 20px; border: 1px solid rgba(168, 85, 247, 0.2);">
                        <ul style="margin-left: 20px;">
                            <li style="margin-bottom: 10px;">
                                <strong>View Competitions:</strong> Browse available competitions
                            </li>
                            <li style="margin-bottom: 10px;">
                                <strong>Register for Competitions:</strong> Self-register to chosen competitions (automatically uses logged-in user ID)
                            </li>
                            <li style="margin-bottom: 10px;">
                                <strong>View Participants:</strong> Check who's registered for specific competitions
                            </li>
                        </ul>
                    </div>
                    
                    <h4 style="color: var(--secondary-color); margin: 20px 0 10px; font-size: 18px;">🌐 Guest (Visitor)</h4>
                    <div style="background: rgba(168, 85, 247, 0.05); padding: 20px; border-radius: 12px; margin-bottom: 20px; border: 1px solid rgba(168, 85, 247, 0.2);">
                        <ul style="margin-left: 20px;">
                            <li style="margin-bottom: 10px;">
                                <strong>Browse Only:</strong> View competitions & participants without login (read-only)
                            </li>
                            <li style="margin-bottom: 10px;">
                                <strong>Registration Prompt:</strong> Must register/login to participate in competitions
                            </li>
                        </ul>
                    </div>
                    
                    <h3 style="color: var(--primary-color); margin: 25px 0 15px;">💡 What I Learned</h3>
                    <div style="background: rgba(236, 72, 153, 0.1); padding: 20px; border-radius: 12px; margin-bottom: 20px; border-left: 4px solid #ec4899;">
                        <ul style="margin-left: 20px;">
                            <li style="margin-bottom: 12px;">
                                <strong>First Time with Golang:</strong> This was my first Golang project. Learned to set up a backend 
                                with Gorilla Mux, handle HTTP requests, and query databases.
                            </li>
                            <li style="margin-bottom: 12px;">
                                <strong>Multi-Role System:</strong> Implemented 3 user levels (Admin, User, Guest) with different access rights. 
                                Admins can CRUD all data, Users can only register for competitions, Guests can only view.
                            </li>
                            <li style="margin-bottom: 12px;">
                                <strong>Database Relations:</strong> Set up foreign keys to maintain data consistency. 
                                For example: when a user is deleted, their competition registrations are automatically removed.
                            </li>
                            <li style="margin-bottom: 12px;">
                                <strong>React + Backend Integration:</strong> Connected React frontend to Golang backend using Axios. 
                                Handled CORS, error responses, and loading states.
                            </li>
                            <li style="margin-bottom: 12px;">
                                <strong>Duplicate Prevention:</strong> Users cannot register twice for the same competition. 
                                Used unique constraints in the database to prevent duplication.
                            </li>
                        </ul>
                    </div>
                    
                    <div style="background: linear-gradient(135deg, rgba(168, 85, 247, 0.1), rgba(236, 72, 153, 0.1)); padding: 25px; border-radius: 15px; border: 2px solid var(--primary-color); margin-top: 30px;">
                        <h4 style="color: var(--primary-color); margin-bottom: 15px;">🔗 GitHub Repository</h4>
                        <a href="https://github.com/MRizaA/17-agustus-sadp" target="_blank" rel="noopener" style="padding: 12px 24px; background: rgba(0, 0, 0, 0.3); border: 2px solid #fff; border-radius: 25px; color: white; text-decoration: none; display: inline-flex; align-items: center; gap: 8px; transition: all 0.3s;">
                            <img src="assets/images/icons/github.png" alt="GitHub" style="width: 20px; height: 20px; border-radius: 50%; background: white; padding: 2px;">
                            <strong>View Source Code</strong>
                        </a>
                    </div>
                    
                    <div style="background: rgba(59, 130, 246, 0.1); padding: 20px; border-radius: 12px; border-left: 4px solid #3b82f6; margin-top: 25px;">
                        <h4 style="color: #3b82f6; margin-bottom: 10px;">💭 Reflection</h4>
                        <p style="margin-bottom: 10px;">
                            This project was created under time constraints as a fresh graduate using Golang for the first time. 
                            Although I didn't advance to the interview stage, I learned a lot about building fullstack 
                            applications from scratch with new technologies.
                        </p>
                        <p style="font-style: italic; opacity: 0.9;">
                            "Technical tests aren't just about the final result, but also about the ability to learn quickly and 
                            problem-solve. This project proves that I can handle new technologies and build functional applications 
                            in a short time frame."
                        </p>
                    </div>
                </div>`
        }
    },

    {
    id: "sadp-poster-17agustus",
    type: "project",
    
    title: {
        id: "Poster Lomba 17 Agustus - PT Sinar Alam",
        en: "17th August Competition Poster - PT Sinar Alam"
    },
    subtitle: {
        id: "Design Test | Canva | PT Sinar Alam Duta Perdana | 2025",
        en: "Design Test | Canva | PT Sinar Alam Duta Perdana | 2025"
    },
    
    description: {
        id: "Poster event digital dengan tema kemerdekaan Indonesia - dibuat sebagai design test",
        en: "Digital event poster with Indonesian independence theme - created as design test"
    },
    
    tags: ["Graphic Design", "Canva", "Event Poster", "Visual Communication"],
    
    
    content: {
        id: `<h2 style="font-size: 28px; margin-bottom: 10px; background: linear-gradient(45deg, var(--primary-color), var(--secondary-color)); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">
                Poster Lomba 17 Agustus 🎨
            </h2>

            <div style="display: flex; gap: 20px; margin-bottom: 25px; flex-wrap: wrap; opacity: 0.9;">
                <span style="display: flex; align-items: center; gap: 8px;">🎯 <strong>Tipe:</strong> Design Test</span>
                <span style="display: flex; align-items: center; gap: 8px;">🏢 <strong>Untuk:</strong> PT Sinar Alam Group</span>
                <span style="display: flex; align-items: center; gap: 8px;">🎨 <strong>Tool:</strong> Canva (Free)</span>
                <span style="display: flex; align-items: center; gap: 8px;">📅 <strong>Tahun:</strong> 2025</span>
            </div>

            <div style="display: inline-block; background: rgba(168, 85, 247, 0.1); border: 2px solid var(--primary-color); border-radius: 15px; padding: 8px; margin-bottom: 25px; width: 100%; max-width: 700px;">
                <img src="assets/images/projects/sadp/poster.jpg" alt="Poster Final" style="display: block; width: 100%; border-radius: 10px; object-fit: contain;">
                <p style="text-align: center; padding: 10px; opacity: 0.8; font-size: 14px;">Poster Lomba 17 Agustus - Final Design</p>
            </div>

            <div style="line-height: 1.8;">
                <h3 style="color: var(--primary-color); margin: 25px 0 15px;">📖 Latar Belakang</h3>
                <p style="margin-bottom: 15px;">
                    Poster ini adalah bagian kedua dari technical test untuk posisi Fullstack Developer di PT Sinar Alam Duta Perdana. 
                    Selain coding, test juga mengevaluasi kemampuan design visual dan komunikasi grafis.
                </p>
                <p style="margin-bottom: 15px;">
                    <strong>Brief:</strong> Buat poster acara 17 Agustus internal perusahaan dengan logo PT Sinar Alam Group, 
                    tema merah-putih, informasi event lengkap, dan visual yang menarik untuk karyawan.
                </p>
                
                <h3 style="color: var(--primary-color); margin: 25px 0 15px;">📝 Apa yang Harus Ada</h3>
                <div style="background: rgba(59, 130, 246, 0.1); padding: 20px; border-radius: 12px; margin-bottom: 20px; border-left: 4px solid #3b82f6;">
                    <strong>Informasi Event:</strong>
                    <ul style="margin: 10px 0 0 20px;">
                        <li>Tanggal: 17 Agustus 2025, 08.00 WIB</li>
                        <li>Lokasi: Lapangan Kantor PT Sinar Alam Group</li>
                        <li>Lomba: Tarik Tambang, Balap Karung, Makan Kerupuk, dll</li>
                        <li>Dress Code: Merah-Putih atau Pakaian Adat</li>
                    </ul>
                    
                    <strong style="display: block; margin-top: 15px;">Design Requirements:</strong>
                    <ul style="margin: 10px 0 0 20px;">
                        <li>Logo PT Sinar Alam Group</li>
                        <li>Warna merah-putih dominan</li>
                        <li>Layout mudah dibaca</li>
                    </ul>
                </div>
                
                <h3 style="color: var(--primary-color); margin: 25px 0 15px;">🎨 Proses Design</h3>
                
                <div style="background: rgba(168, 85, 247, 0.05); padding: 15px; border-radius: 12px; margin-bottom: 15px;">
                    <strong>1. Cari Referensi</strong>
                    <p style="margin-top: 8px;">
                        Lihat beberapa poster 17 Agustus yang sudah ada untuk inspirasi layout dan komposisi.
                    </p>
                </div>
                
                <div style="background: rgba(168, 85, 247, 0.05); padding: 15px; border-radius: 12px; margin-bottom: 15px;">
                    <strong>2. Pilih Elemen dari Canva</strong>
                    <p style="margin-top: 8px;">
                        Pakai elemen gratis dari library Canva:
                    </p>
                    <ul style="margin: 8px 0 0 20px; font-size: 14px;">
                        <li>Ilustrasi anak-anak bermain (tarik tambang, balap karung)</li>
                        <li>Ornamen tradisional: awan mega mendung, peta Indonesia</li>
                        <li>Bangunan khas Indonesia: rumah adat, menara</li>
                    </ul>
                </div>
                
                <div style="background: rgba(168, 85, 247, 0.05); padding: 15px; border-radius: 12px; margin-bottom: 20px;">
                    <strong>3. Susun & Edit</strong>
                    <p style="margin-top: 8px;">
                        Atur posisi elemen, sesuaikan warna, tambahkan teks informasi event, 
                        dan logo PT Sinar Alam Group.
                    </p>
                </div>
                
                <h3 style="color: var(--primary-color); margin: 25px 0 15px;">🎨 Elemen Design</h3>
                <div style="display: grid; gap: 12px; margin-bottom: 20px;">
                    <div style="background: linear-gradient(135deg, rgba(239, 68, 68, 0.1), rgba(239, 68, 68, 0.05)); padding: 15px; border-left: 4px solid #ef4444; border-radius: 8px;">
                        <strong style="color: #ef4444;">🔴 Warna</strong>
                        <p style="margin-top: 8px; opacity: 0.9; font-size: 14px;">
                            Merah-putih untuk tema kemerdekaan, gold/kuning untuk accent agar lebih festive
                        </p>
                    </div>
                    <div style="background: linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(139, 92, 246, 0.05)); padding: 15px; border-left: 4px solid #8b5cf6; border-radius: 8px;">
                        <strong style="color: #8b5cf6;">🎭 Ilustrasi</strong>
                        <p style="margin-top: 8px; opacity: 0.9; font-size: 14px;">
                            Anak-anak sedang tarik tambang (dari Canva). Background: awan mega mendung, 
                            peta Indonesia, bangunan khas Kalimantan
                        </p>
                    </div>
                    <div style="background: linear-gradient(135deg, rgba(245, 158, 11, 0.1), rgba(245, 158, 11, 0.05)); padding: 15px; border-left: 4px solid #f59e0b; border-radius: 8px;">
                        <strong style="color: #f59e0b;">✍️ Tipografi</strong>
                        <p style="margin-top: 8px; opacity: 0.9; font-size: 14px;">
                            Font besar & menarik untuk judul "Lomba 17 Agustus". Banner kuning untuk subtitle. 
                            Font jelas untuk info detail.
                        </p>
                    </div>
                </div>
                
                <h3 style="color: var(--primary-color); margin: 25px 0 15px;">📐 Komposisi Layout</h3>
                <div style="background: rgba(16, 185, 129, 0.1); padding: 20px; border-radius: 12px; margin-bottom: 20px; border-left: 4px solid #10b981;">
                    <ul style="margin-left: 20px;">
                        <li style="margin-bottom: 10px;">
                            <strong>Top:</strong> Logo PT Sinar Alam Group
                        </li>
                        <li style="margin-bottom: 10px;">
                            <strong>Hero:</strong> Judul besar "Lomba 17 Agustus" + subtitle dengan banner kuning
                        </li>
                        <li style="margin-bottom: 10px;">
                            <strong>Center:</strong> Ilustrasi anak-anak bermain + ornamen tradisional
                        </li>
                        <li style="margin-bottom: 10px;">
                            <strong>Bottom:</strong> 2 box info (Waktu & Tempat | Aneka Lomba)
                        </li>
                        <li style="margin-bottom: 10px;">
                            <strong>Footer:</strong> Dress code info
                        </li>
                    </ul>
                </div>
                
                <div style="background: linear-gradient(135deg, rgba(168, 85, 247, 0.1), rgba(236, 72, 153, 0.1)); padding: 25px; border-radius: 15px; border: 2px solid var(--primary-color); margin-top: 30px;">
                    <h4 style="color: var(--primary-color); margin-bottom: 15px;">🔗 Lihat Design</h4>
                    <a href="https://www.canva.com/design/DAGz71IAxDg/F41BMX4IuqqrVf6NxCMQgg/edit" target="_blank" rel="noopener" style="padding: 12px 24px; background: rgba(97, 218, 251, 0.2); border: 2px solid #61dafb; border-radius: 25px; color: white; text-decoration: none; display: inline-flex; align-items: center; gap: 8px; transition: all 0.3s;">
                        🎨 <strong>Buka di Canva</strong>
                    </a>
                </div>
                
                <div style="background: rgba(59, 130, 246, 0.1); padding: 20px; border-radius: 12px; border-left: 4px solid #3b82f6; margin-top: 25px;">
                    <h4 style="color: #3b82f6; margin-bottom: 10px;">💭 Refleksi</h4>
                    <p style="margin-bottom: 10px;">
                        Poster ini dibuat dengan Canva gratis dalam waktu terbatas. Fokus pada komposisi yang jelas, 
                        warna sesuai tema, dan informasi mudah dibaca. Meskipun bukan designer profesional, 
                        ini menunjukkan bahwa developer juga bisa communicate ideas secara visual.
                    </p>
                    <p style="font-style: italic; opacity: 0.9;">
                        "Kemampuan design dasar adalah value add penting untuk developer. Tidak harus perfect, 
                        tapi bisa bikin visual yang informatif dan menarik."
                    </p>
                </div>
            </div>`,
        en: `<h2 style="font-size: 28px; margin-bottom: 10px; background: linear-gradient(45deg, var(--primary-color), var(--secondary-color)); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">
                17th August Competition Poster 🎨
            </h2>

            <div style="display: flex; gap: 20px; margin-bottom: 25px; flex-wrap: wrap; opacity: 0.9;">
                <span style="display: flex; align-items: center; gap: 8px;">🎯 <strong>Type:</strong> Design Test</span>
                <span style="display: flex; align-items: center; gap: 8px;">🏢 <strong>For:</strong> PT Sinar Alam Group</span>
                <span style="display: flex; align-items: center; gap: 8px;">🎨 <strong>Tool:</strong> Canva (Free)</span>
                <span style="display: flex; align-items: center; gap: 8px;">📅 <strong>Year:</strong> 2025</span>
            </div>

            <div style="display: inline-block; background: rgba(168, 85, 247, 0.1); border: 2px solid var(--primary-color); border-radius: 15px; padding: 8px; margin-bottom: 25px; width: 100%; max-width: 700px;">
                <img src="assets/images/projects/sadp/poster.jpg" alt="Final Poster" style="display: block; width: 100%; border-radius: 10px; object-fit: contain;">
                <p style="text-align: center; padding: 10px; opacity: 0.8; font-size: 14px;">17th August Competition Poster - Final Design</p>
            </div>

            <div style="line-height: 1.8;">
                <h3 style="color: var(--primary-color); margin: 25px 0 15px;">📖 Background</h3>
                <p style="margin-bottom: 15px;">
                    This poster was the second part of the technical test for a Fullstack Developer position at PT Sinar Alam Duta Perdana. 
                    Beyond coding, the test also evaluated visual design skills and graphic communication abilities.
                </p>
                <p style="margin-bottom: 15px;">
                    <strong>Brief:</strong> Create a poster for the company's internal 17th August event featuring PT Sinar Alam Group's logo, 
                    red-and-white theme, complete event information, and visually appealing design for employees.
                </p>
                
                <h3 style="color: var(--primary-color); margin: 25px 0 15px;">📝 Required Elements</h3>
                <div style="background: rgba(59, 130, 246, 0.1); padding: 20px; border-radius: 12px; margin-bottom: 20px; border-left: 4px solid #3b82f6;">
                    <strong>Event Information:</strong>
                    <ul style="margin: 10px 0 0 20px;">
                        <li>Date: August 17, 2025, 08:00 AM</li>
                        <li>Location: PT Sinar Alam Group Office Field</li>
                        <li>Competitions: Tug of War, Sack Race, Cracker Eating, etc.</li>
                        <li>Dress Code: Red-White or Traditional Attire</li>
                    </ul>
                    
                    <strong style="display: block; margin-top: 15px;">Design Requirements:</strong>
                    <ul style="margin: 10px 0 0 20px;">
                        <li>PT Sinar Alam Group logo</li>
                        <li>Dominant red-and-white colors</li>
                        <li>Easy-to-read layout</li>
                    </ul>
                </div>
                
                <h3 style="color: var(--primary-color); margin: 25px 0 15px;">🎨 Design Process</h3>
                
                <div style="background: rgba(168, 85, 247, 0.05); padding: 15px; border-radius: 12px; margin-bottom: 15px;">
                    <strong>1. Reference Research</strong>
                    <p style="margin-top: 8px;">
                        Reviewed existing 17th August posters for layout and composition inspiration.
                    </p>
                </div>
                
                <div style="background: rgba(168, 85, 247, 0.05); padding: 15px; border-radius: 12px; margin-bottom: 15px;">
                    <strong>2. Select Elements from Canva</strong>
                    <p style="margin-top: 8px;">
                        Used free elements from Canva's library:
                    </p>
                    <ul style="margin: 8px 0 0 20px; font-size: 14px;">
                        <li>Illustrations of children playing (tug of war, sack race)</li>
                        <li>Traditional ornaments: mega mendung clouds, Indonesia map</li>
                        <li>Indonesian iconic buildings: traditional houses, towers</li>
                    </ul>
                </div>
                
                <div style="background: rgba(168, 85, 247, 0.05); padding: 15px; border-radius: 12px; margin-bottom: 20px;">
                    <strong>3. Arrange & Edit</strong>
                    <p style="margin-top: 8px;">
                        Positioned elements, adjusted colors, added event information text, 
                        and incorporated PT Sinar Alam Group logo.
                    </p>
                </div>
                
                <h3 style="color: var(--primary-color); margin: 25px 0 15px;">🎨 Design Elements</h3>
                <div style="display: grid; gap: 12px; margin-bottom: 20px;">
                    <div style="background: linear-gradient(135deg, rgba(239, 68, 68, 0.1), rgba(239, 68, 68, 0.05)); padding: 15px; border-left: 4px solid #ef4444; border-radius: 8px;">
                        <strong style="color: #ef4444;">🔴 Colors</strong>
                        <p style="margin-top: 8px; opacity: 0.9; font-size: 14px;">
                            Red-and-white for independence theme, gold/yellow accents for a more festive feel
                        </p>
                    </div>
                    <div style="background: linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(139, 92, 246, 0.05)); padding: 15px; border-left: 4px solid #8b5cf6; border-radius: 8px;">
                        <strong style="color: #8b5cf6;">🎭 Illustrations</strong>
                        <p style="margin-top: 8px; opacity: 0.9; font-size: 14px;">
                            Children playing tug of war (from Canva). Background: mega mendung clouds, 
                            Indonesia map, Kalimantan traditional buildings
                        </p>
                    </div>
                    <div style="background: linear-gradient(135deg, rgba(245, 158, 11, 0.1), rgba(245, 158, 11, 0.05)); padding: 15px; border-left: 4px solid #f59e0b; border-radius: 8px;">
                        <strong style="color: #f59e0b;">✍️ Typography</strong>
                        <p style="margin-top: 8px; opacity: 0.9; font-size: 14px;">
                            Large, eye-catching font for "17th August Competition" title. Yellow banner for subtitle. 
                            Clear fonts for detailed information.
                        </p>
                    </div>
                </div>
                
                <h3 style="color: var(--primary-color); margin: 25px 0 15px;">📐 Layout Composition</h3>
                <div style="background: rgba(16, 185, 129, 0.1); padding: 20px; border-radius: 12px; margin-bottom: 20px; border-left: 4px solid #10b981;">
                    <ul style="margin-left: 20px;">
                        <li style="margin-bottom: 10px;">
                            <strong>Top:</strong> PT Sinar Alam Group logo
                        </li>
                        <li style="margin-bottom: 10px;">
                            <strong>Hero:</strong> Large "17th August Competition" title + subtitle with yellow banner
                        </li>
                        <li style="margin-bottom: 10px;">
                            <strong>Center:</strong> Illustration of children playing + traditional ornaments
                        </li>
                        <li style="margin-bottom: 10px;">
                            <strong>Bottom:</strong> 2 info boxes (Time & Place | Various Competitions)
                        </li>
                        <li style="margin-bottom: 10px;">
                            <strong>Footer:</strong> Dress code information
                        </li>
                    </ul>
                </div>
                
                <div style="background: linear-gradient(135deg, rgba(168, 85, 247, 0.1), rgba(236, 72, 153, 0.1)); padding: 25px; border-radius: 15px; border: 2px solid var(--primary-color); margin-top: 30px;">
                    <h4 style="color: var(--primary-color); margin-bottom: 15px;">🔗 View Design</h4>
                    <a href="https://www.canva.com/design/DAGz71IAxDg/F41BMX4IuqqrVf6NxCMQgg/edit" target="_blank" rel="noopener" style="padding: 12px 24px; background: rgba(97, 218, 251, 0.2); border: 2px solid #61dafb; border-radius: 25px; color: white; text-decoration: none; display: inline-flex; align-items: center; gap: 8px; transition: all 0.3s;">
                        🎨 <strong>Open in Canva</strong>
                    </a>
                </div>
                
                <div style="background: rgba(59, 130, 246, 0.1); padding: 20px; border-radius: 12px; border-left: 4px solid #3b82f6; margin-top: 25px;">
                    <h4 style="color: #3b82f6; margin-bottom: 10px;">💭 Reflection</h4>
                    <p style="margin-bottom: 10px;">
                        This poster was created using free Canva tools within a limited timeframe. The focus was on clear composition, 
                        theme-appropriate colors, and easy-to-read information. Though not a professional designer, 
                        this demonstrates that developers can also communicate ideas visually.
                    </p>
                    <p style="font-style: italic; opacity: 0.9;">
                        "Basic design skills are an important value-add for developers. It doesn't have to be perfect, 
                        but being able to create informative and appealing visuals matters."
                    </p>
                </div>
            </div>`
    }
    },

    // Blender 3D House
    {
        id: "blender-3d-house",
        type: "project",
        
        title: {
            id: "Model Rumah 3D",
            en: "3D House Model"
        },
        subtitle: {
            id: "Project Kampus | Blender 3D | Politeknik Hasnur",
            en: "Campus Project | Blender 3D | Politeknik Hasnur"
        },
        
        description: {
            id: "Model 3D rumah isometric dengan environment - dibuat saat kuliah",
            en: "Isometric 3D house model with environment - created during college"
        },
        
        tags: ["Blender", "3D Modeling", "House Model"],
        
        content: {
            id: `
                <h2 style="font-size: 28px; margin-bottom: 10px; background: linear-gradient(45deg, var(--primary-color), var(--secondary-color)); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">
                    Model Rumah 3D 🏠
                </h2>

                <div style="display: flex; gap: 20px; margin-bottom: 25px; flex-wrap: wrap; opacity: 0.9;">
                    <span>🎓 Project Kampus</span>
                    <span>🏫 Politeknik Hasnur</span>
                    <span>🎨 Blender 3D</span>
                </div>

                <div style="display: inline-block; background: rgba(168, 85, 247, 0.1); border: 2px solid var(--primary-color); border-radius: 15px; padding: 8px; margin-bottom: 25px; width: 100%; max-width: 700px;">
                    <img src="assets/images/projects/3d/rumah 3d.png" alt="Rumah 3D" style="display: block; width: 100%; border-radius: 10px; object-fit: contain;">
                    <p style="text-align: center; padding: 10px; opacity: 0.8; font-size: 14px;">Model Rumah 3D</p>
                </div>

                <div style="line-height: 1.8;">
                    <p style="margin-bottom: 15px;">
                        Model rumah 3D dengan Blender. Ini adalah salah satu project selama masa kuliah, dibuat sesuai 
                        gambar yang diberikan sebagai contoh. Project ini memberi saya pengalaman dalam menggunakan 
                        tools 3D modeling untuk pertama kalinya.
                    </p>
                    <p style="margin-bottom: 20px;">
                        Stylenya dibuat seperti miniatur atau diorama dengan bentuk-bentuk sederhana dan warna cerah. 
                        Hasil akhirnya cukup memuaskan untuk level pemula.
                    </p>

                    <h3 style="color: var(--primary-color); margin: 25px 0 15px;">🛠️ Tools yang Digunakan</h3>
                    <div style="background: rgba(168, 85, 247, 0.05); padding: 20px; border-radius: 12px; margin-bottom: 20px; border: 1px solid rgba(168, 85, 247, 0.2);">
                        <strong style="display: block; margin-bottom: 10px;">Blender 3D</strong>
                        <p style="font-size: 14px; opacity: 0.9;">
                            Software gratis dan open-source untuk 3D modeling, animation, dan rendering. 
                            Digunakan untuk membuat model rumah, pohon, props, atur cahaya, dan render hasil akhir.
                        </p>
                    </div>

                    <h3 style="color: var(--primary-color); margin: 25px 0 15px;">💡 Yang Dipelajari</h3>
                    <div style="background: rgba(236, 72, 153, 0.1); padding: 20px; border-radius: 12px; margin-bottom: 20px; border-left: 4px solid #ec4899;">
                        <ul style="margin-left: 20px;">
                            <li style="margin-bottom: 10px;">Dasar-dasar 3D modeling dengan Blender</li>
                            <li style="margin-bottom: 10px;">Menyusun multiple objects menjadi satu scene</li>
                            <li style="margin-bottom: 10px;">Mengatur lighting dan camera angle</li>
                            <li style="margin-bottom: 10px;">Render hasil akhir dengan quality yang baik</li>
                        </ul>
                    </div>

                    <div style="background: rgba(59, 130, 246, 0.1); padding: 20px; border-radius: 12px; border-left: 4px solid #3b82f6; margin-top: 25px;">
                        <p style="font-style: italic; opacity: 0.9;">
                            "Project 3D pertama yang cukup kompleks. Banyak belajar tentang patience dan detail. 
                            Every small piece contributes to the whole picture."
                        </p>
                    </div>
                </div>
            `,
            en: `
                <h2 style="font-size: 28px; margin-bottom: 10px; background: linear-gradient(45deg, var(--primary-color), var(--secondary-color)); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">
                    3D House Model 🏠
                </h2>

                <div style="display: flex; gap: 20px; margin-bottom: 25px; flex-wrap: wrap; opacity: 0.9;">
                    <span>🎓 Campus Project</span>
                    <span>🏫 Politeknik Hasnur</span>
                    <span>🎨 Blender 3D</span>
                </div>

                <div style="display: inline-block; background: rgba(168, 85, 247, 0.1); border: 2px solid var(--primary-color); border-radius: 15px; padding: 8px; margin-bottom: 25px; width: 100%; max-width: 700px;">
                    <img src="assets/images/projects/3d/rumah 3d.png" alt="3D House" style="display: block; width: 100%; border-radius: 10px; object-fit: contain;">
                    <p style="text-align: center; padding: 10px; opacity: 0.8; font-size: 14px;">3D House Model</p>
                </div>

                <div style="line-height: 1.8;">
                    <p style="margin-bottom: 15px;">
                        3D house model created with Blender. This was one of my projects during college, based on 
                        a reference image provided as an example. This project gave me hands-on experience using 
                        3D modeling tools for the first time.
                    </p>
                    <p style="margin-bottom: 20px;">
                        The style is designed like a miniature or diorama with simple shapes and bright colors. 
                        The final result was quite satisfying for a beginner level.
                    </p>

                    <h3 style="color: var(--primary-color); margin: 25px 0 15px;">🛠️ Tools Used</h3>
                    <div style="background: rgba(168, 85, 247, 0.05); padding: 20px; border-radius: 12px; margin-bottom: 20px; border: 1px solid rgba(168, 85, 247, 0.2);">
                        <strong style="display: block; margin-bottom: 10px;">Blender 3D</strong>
                        <p style="font-size: 14px; opacity: 0.9;">
                            Free and open-source software for 3D modeling, animation, and rendering. 
                            Used to create house models, trees, props, set lighting, and render final results.
                        </p>
                    </div>

                    <h3 style="color: var(--primary-color); margin: 25px 0 15px;">💡 What I Learned</h3>
                    <div style="background: rgba(236, 72, 153, 0.1); padding: 20px; border-radius: 12px; margin-bottom: 20px; border-left: 4px solid #ec4899;">
                        <ul style="margin-left: 20px;">
                            <li style="margin-bottom: 10px;">Basic 3D modeling with Blender</li>
                            <li style="margin-bottom: 10px;">Composing multiple objects into one scene</li>
                            <li style="margin-bottom: 10px;">Setting up lighting and camera angles</li>
                            <li style="margin-bottom: 10px;">Rendering final results with good quality</li>
                        </ul>
                    </div>

                    <div style="background: rgba(59, 130, 246, 0.1); padding: 20px; border-radius: 12px; border-left: 4px solid #3b82f6; margin-top: 25px;">
                        <p style="font-style: italic; opacity: 0.9;">
                            "First complex 3D project. Learned a lot about patience and detail. 
                            Every small piece contributes to the whole picture."
                        </p>
                    </div>
                </div>
            `
        }
    },

    // Logo Cabe Hiyung
    {
        id: "logo-cabe-hiyung",
        type: "project",
        
        title: {
            id: "Logo Cabe Hiyung",
            en: "Cabe Hiyung Logo"
        },
        subtitle: {
            id: "Project Kampus | Adobe Illustrator | Politeknik Hasnur",
            en: "Campus Project | Adobe Illustrator | Politeknik Hasnur"
        },
        
        description: {
            id: "Logo design dengan filosofi dan color palette - project belajar desain grafis",
            en: "Logo design with philosophy and color palette - graphic design learning project"
        },
        
        tags: ["Logo Design", "Adobe Illustrator", "Graphic Design", "Branding"],
        
        content: {
            id: `
                <h2 style="font-size: 28px; margin-bottom: 10px; background: linear-gradient(45deg, var(--primary-color), var(--secondary-color)); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">
                    Logo Cabe Hiyung 🌶️
                </h2>

                <div style="display: flex; gap: 20px; margin-bottom: 25px; flex-wrap: wrap; opacity: 0.9;">
                    <span>🎓 Project Kampus</span>
                    <span>🏫 Politeknik Hasnur</span>
                    <span>🎨 Adobe Illustrator</span>
                </div>

                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 15px; margin-bottom: 25px;">
                    <div style="background: rgba(168, 85, 247, 0.1); border: 2px solid var(--primary-color); border-radius: 15px; padding: 8px;">
                        <img src="assets/images/projects/logo/hiyung1.png" alt="Logo Cabe Hiyung" style="display: block; width: 100%; height: 280px; border-radius: 10px; object-fit: contain; background: white;">
                        <p style="text-align: center; padding: 10px; opacity: 0.8; font-size: 14px;">Logo Final Design</p>
                    </div>
                    <div style="background: rgba(168, 85, 247, 0.1); border: 2px solid var(--primary-color); border-radius: 15px; padding: 8px;">
                        <img src="assets/images/projects/logo/hiyung2.png" alt="Filosofi Logo" style="display: block; width: 100%; height: 280px; border-radius: 10px; object-fit: contain; background: white;">
                        <p style="text-align: center; padding: 10px; opacity: 0.8; font-size: 14px;">Filosofi Logo</p>
                    </div>
                    <div style="background: rgba(168, 85, 247, 0.1); border: 2px solid var(--primary-color); border-radius: 15px; padding: 8px;">
                        <img src="assets/images/projects/logo/hiyung3.png" alt="Color Palette" style="display: block; width: 100%; height: 280px; border-radius: 10px; object-fit: contain; background: white;">
                        <p style="text-align: center; padding: 10px; opacity: 0.8; font-size: 14px;">Color Palette</p>
                    </div>
                </div>

                <div style="line-height: 1.8;">
                    <p style="margin-bottom: 15px;">
                        Logo "Cabe Hiyung" dibuat sebagai project belajar desain grafis di kampus. Logonya menggabungkan 
                        huruf "H" dengan bentuk cabai, terinspirasi dari logo Hasnur Centre dengan menambahkan unsur 
                        cabai yang mencerminkan produk cabai hiyung berkualitas.
                    </p>

                    <h3 style="color: var(--primary-color); margin: 25px 0 15px;">🎨 Filosofi Design</h3>
                    <div style="background: rgba(168, 85, 247, 0.05); padding: 20px; border-radius: 12px; margin-bottom: 20px; border: 1px solid rgba(168, 85, 247, 0.2);">
                        <div style="margin-bottom: 15px;">
                            <strong style="display: block; margin-bottom: 8px; color: var(--secondary-color);">Huruf "H"</strong>
                            <p style="font-size: 14px; opacity: 0.9;">
                                Melambangkan "Hiyung" dan "Hasnur", mengambil inspirasi dari bentuk logo Hasnur Centre
                            </p>
                        </div>
                        <div>
                            <strong style="display: block; margin-bottom: 8px; color: var(--secondary-color);">Cabai</strong>
                            <p style="font-size: 14px; opacity: 0.9;">
                                Melambangkan produk cabai berkualitas dengan bentuk yang segar dan menarik
                            </p>
                        </div>
                    </div>

                    <h3 style="color: var(--primary-color); margin: 25px 0 15px;">🎨 Color Palette</h3>
                    <div style="background: rgba(168, 85, 247, 0.05); padding: 20px; border-radius: 12px; margin-bottom: 20px; border: 1px solid rgba(168, 85, 247, 0.2);">
                        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 12px; margin-bottom: 15px;">
                            <div style="text-align: center;">
                                <div style="background: #326900; height: 80px; border-radius: 8px; margin-bottom: 8px;"></div>
                                <strong style="font-size: 14px;">#326900</strong>
                                <p style="font-size: 12px; opacity: 0.8; margin-top: 4px;">Hijau Tua</p>
                            </div>
                            <div style="text-align: center;">
                                <div style="background: #00731D; height: 80px; border-radius: 8px; margin-bottom: 8px;"></div>
                                <strong style="font-size: 14px;">#00731D</strong>
                                <p style="font-size: 12px; opacity: 0.8; margin-top: 4px;">Hijau</p>
                            </div>
                            <div style="text-align: center;">
                                <div style="background: #942100; height: 80px; border-radius: 8px; margin-bottom: 8px;"></div>
                                <strong style="font-size: 14px;">#942100</strong>
                                <p style="font-size: 12px; opacity: 0.8; margin-top: 4px;">Merah Tua</p>
                            </div>
                            <div style="text-align: center;">
                                <div style="background: #FF1700; height: 80px; border-radius: 8px; margin-bottom: 8px;"></div>
                                <strong style="font-size: 14px;">#FF1700</strong>
                                <p style="font-size: 12px; opacity: 0.8; margin-top: 4px;">Merah</p>
                            </div>
                        </div>
                        <p style="font-size: 14px; opacity: 0.9;">
                            Warna merah dan hijau dipilih untuk merepresentasikan warna alami cabai segar. 
                            Kombinasi ini menciptakan visual yang kuat dan mudah dikenali.
                        </p>
                    </div>

                    <h3 style="color: var(--primary-color); margin: 25px 0 15px;">🛠️ Tools yang Digunakan</h3>
                    <div style="background: rgba(168, 85, 247, 0.05); padding: 20px; border-radius: 12px; margin-bottom: 20px; border: 1px solid rgba(168, 85, 247, 0.2);">
                        <strong style="display: block; margin-bottom: 10px;">Adobe Illustrator</strong>
                        <p style="font-size: 14px; opacity: 0.9;">
                            Software desain grafis vector-based untuk membuat logo, ilustrasi, dan typography. 
                            Digunakan untuk membuat bentuk logo, mengatur warna, dan export dalam berbagai format.
                        </p>
                    </div>

                    <h3 style="color: var(--primary-color); margin: 25px 0 15px;">💡 Yang Dipelajari</h3>
                    <div style="background: rgba(236, 72, 153, 0.1); padding: 20px; border-radius: 12px; margin-bottom: 20px; border-left: 4px solid #ec4899;">
                        <ul style="margin-left: 20px;">
                            <li style="margin-bottom: 10px;">Dasar-dasar logo design dan branding</li>
                            <li style="margin-bottom: 10px;">Menggunakan tools vector di Adobe Illustrator</li>
                            <li style="margin-bottom: 10px;">Memilih color palette yang tepat</li>
                            <li style="margin-bottom: 10px;">Membuat filosofi dan konsep di balik design</li>
                        </ul>
                    </div>

                    <div style="background: rgba(59, 130, 246, 0.1); padding: 20px; border-radius: 12px; border-left: 4px solid #3b82f6; margin-top: 25px;">
                        <p style="font-style: italic; opacity: 0.9;">
                            "Project ini mengajarkan pentingnya makna di balik design. Logo bukan hanya soal bentuk yang 
                            bagus, tapi juga cerita dan filosofi yang ingin disampaikan."
                        </p>
                    </div>
                </div>
            `,
            en: `
                <h2 style="font-size: 28px; margin-bottom: 10px; background: linear-gradient(45deg, var(--primary-color), var(--secondary-color)); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">
                    Cabe Hiyung Logo 🌶️
                </h2>

                <div style="display: flex; gap: 20px; margin-bottom: 25px; flex-wrap: wrap; opacity: 0.9;">
                    <span>🎓 Campus Project</span>
                    <span>🏫 Politeknik Hasnur</span>
                    <span>🎨 Adobe Illustrator</span>
                </div>

                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 15px; margin-bottom: 25px;">
                    <div style="background: rgba(168, 85, 247, 0.1); border: 2px solid var(--primary-color); border-radius: 15px; padding: 8px;">
                        <img src="assets/images/projects/logo/hiyung1.png" alt="Cabe Hiyung Logo" style="display: block; width: 100%; height: 280px; border-radius: 10px; object-fit: contain; background: white;">
                        <p style="text-align: center; padding: 10px; opacity: 0.8; font-size: 14px;">Final Logo Design</p>
                    </div>
                    <div style="background: rgba(168, 85, 247, 0.1); border: 2px solid var(--primary-color); border-radius: 15px; padding: 8px;">
                        <img src="assets/images/projects/logo/hiyung2.png" alt="Logo Philosophy" style="display: block; width: 100%; height: 280px; border-radius: 10px; object-fit: contain; background: white;">
                        <p style="text-align: center; padding: 10px; opacity: 0.8; font-size: 14px;">Logo Philosophy</p>
                    </div>
                    <div style="background: rgba(168, 85, 247, 0.1); border: 2px solid var(--primary-color); border-radius: 15px; padding: 8px;">
                        <img src="assets/images/projects/logo/hiyung3.png" alt="Color Palette" style="display: block; width: 100%; height: 280px; border-radius: 10px; object-fit: contain; background: white;">
                        <p style="text-align: center; padding: 10px; opacity: 0.8; font-size: 14px;">Color Palette</p>
                    </div>
                </div>

                <div style="line-height: 1.8;">
                    <p style="margin-bottom: 15px;">
                        "Cabe Hiyung" logo was created as a graphic design learning project at campus. The logo combines 
                        the letter "H" with a chili pepper shape, inspired by the Hasnur Centre logo while incorporating 
                        the chili element to reflect the quality cabe hiyung products.
                    </p>

                    <h3 style="color: var(--primary-color); margin: 25px 0 15px;">🎨 Design Philosophy</h3>
                    <div style="background: rgba(168, 85, 247, 0.05); padding: 20px; border-radius: 12px; margin-bottom: 20px; border: 1px solid rgba(168, 85, 247, 0.2);">
                        <div style="margin-bottom: 15px;">
                            <strong style="display: block; margin-bottom: 8px; color: var(--secondary-color);">Letter "H"</strong>
                            <p style="font-size: 14px; opacity: 0.9;">
                                Represents "Hiyung" and "Hasnur", drawing inspiration from the Hasnur Centre logo shape
                            </p>
                        </div>
                        <div>
                            <strong style="display: block; margin-bottom: 8px; color: var(--secondary-color);">Chili Pepper</strong>
                            <p style="font-size: 14px; opacity: 0.9;">
                                Symbolizes quality chili products with a fresh and appealing shape
                            </p>
                        </div>
                    </div>

                    <h3 style="color: var(--primary-color); margin: 25px 0 15px;">🎨 Color Palette</h3>
                    <div style="background: rgba(168, 85, 247, 0.05); padding: 20px; border-radius: 12px; margin-bottom: 20px; border: 1px solid rgba(168, 85, 247, 0.2);">
                        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 12px; margin-bottom: 15px;">
                            <div style="text-align: center;">
                                <div style="background: #326900; height: 80px; border-radius: 8px; margin-bottom: 8px;"></div>
                                <strong style="font-size: 14px;">#326900</strong>
                                <p style="font-size: 12px; opacity: 0.8; margin-top: 4px;">Dark Green</p>
                            </div>
                            <div style="text-align: center;">
                                <div style="background: #00731D; height: 80px; border-radius: 8px; margin-bottom: 8px;"></div>
                                <strong style="font-size: 14px;">#00731D</strong>
                                <p style="font-size: 12px; opacity: 0.8; margin-top: 4px;">Green</p>
                            </div>
                            <div style="text-align: center;">
                                <div style="background: #942100; height: 80px; border-radius: 8px; margin-bottom: 8px;"></div>
                                <strong style="font-size: 14px;">#942100</strong>
                                <p style="font-size: 12px; opacity: 0.8; margin-top: 4px;">Dark Red</p>
                            </div>
                            <div style="text-align: center;">
                                <div style="background: #FF1700; height: 80px; border-radius: 8px; margin-bottom: 8px;"></div>
                                <strong style="font-size: 14px;">#FF1700</strong>
                                <p style="font-size: 12px; opacity: 0.8; margin-top: 4px;">Red</p>
                            </div>
                        </div>
                        <p style="font-size: 14px; opacity: 0.9;">
                            Red and green colors chosen to represent the natural colors of fresh chilies. 
                            This combination creates strong and easily recognizable visuals.
                        </p>
                    </div>

                    <h3 style="color: var(--primary-color); margin: 25px 0 15px;">🛠️ Tools Used</h3>
                    <div style="background: rgba(168, 85, 247, 0.05); padding: 20px; border-radius: 12px; margin-bottom: 20px; border: 1px solid rgba(168, 85, 247, 0.2);">
                        <strong style="display: block; margin-bottom: 10px;">Adobe Illustrator</strong>
                        <p style="font-size: 14px; opacity: 0.9;">
                            Vector-based graphic design software for creating logos, illustrations, and typography. 
                            Used to create logo shapes, arrange colors, and export in various formats.
                        </p>
                    </div>

                    <h3 style="color: var(--primary-color); margin: 25px 0 15px;">💡 What I Learned</h3>
                    <div style="background: rgba(236, 72, 153, 0.1); padding: 20px; border-radius: 12px; margin-bottom: 20px; border-left: 4px solid #ec4899;">
                        <ul style="margin-left: 20px;">
                            <li style="margin-bottom: 10px;">Basics of logo design and branding</li>
                            <li style="margin-bottom: 10px;">Using vector tools in Adobe Illustrator</li>
                            <li style="margin-bottom: 10px;">Choosing the right color palette</li>
                            <li style="margin-bottom: 10px;">Creating philosophy and concept behind design</li>
                        </ul>
                    </div>

                    <div style="background: rgba(59, 130, 246, 0.1); padding: 20px; border-radius: 12px; border-left: 4px solid #3b82f6; margin-top: 25px;">
                        <p style="font-style: italic; opacity: 0.9;">
                            "This project taught me the importance of meaning behind design. A logo isn't just about 
                            looking good, but also the story and philosophy it conveys."
                        </p>
                    </div>
                </div>
            `
        }
    }


// TEMPLATE UNTUK MENAMBAH EXPERIENCE BARU:
/*
{
    id: "unique-id",
    type: "work", // work, project, education, certification, achievement
    
    title: {
        id: "Judul Indonesia",
        en: "English Title"
    },
    subtitle: {
        id: "Subtitle Indonesia",
        en: "English Subtitle"
    },
    
    description: {
        id: "Deskripsi singkat untuk card",
        en: "Short description for card"
    },
    
    tags: ["Tag1", "Tag2", "Tag3"],
    
    content: {
        id: `
            <div class="back-btn" onclick="showExperienceList()" style="margin-bottom: 20px;">
                <span>←</span> <span>Kembali</span>
            </div>
            
            <h2 style="font-size: 28px; margin-bottom: 10px; background: linear-gradient(45deg, var(--primary-color), var(--secondary-color)); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">
                Judul Halaman Detail
            </h2>
            
            <!-- Meta Info -->
            <div style="display: flex; gap: 20px; margin-bottom: 25px; flex-wrap: wrap; opacity: 0.9;">
                <span style="display: flex; align-items: center; gap: 8px;">📅 <strong>Label:</strong> Value</span>
            </div>
            
            <!-- Gambar (optional) -->
            <div style="width: 100%; max-width: 600px; height: 300px; background: rgba(168, 85, 247, 0.1); border: 2px solid rgba(168, 85, 247, 0.3); border-radius: 15px; margin: 25px 0;">
                <img src="path/to/image.jpg" style="width: 100%; height: 100%; object-fit: contain; border-radius: 15px;">
            </div>
            
            <!-- Content -->
            <div style="line-height: 1.8;">
                <h3 style="color: var(--primary-color); margin: 25px 0 15px;">Section Title</h3>
                <p>Paragraph content...</p>
                
                <!-- Bisa tambah list, table, grid, dll -->
            </div>
        `,
        en: `
            <!-- English version -->
        `
    }
}
*/


];