# Website CV & Portofolio Profesional — Wahida

Selamat datang di website Curriculum Vitae (CV) dan Portofolio modern untuk **Wahida, S.M.** sebagai **Expert di Bidang Human Resources (HR) dan Office Administration**.

---

## 🌟 Fitur Unggulan Website

1. **Desain Profesional & Modern (Executive Aesthetic)**:
   - Skema warna elegan corporate navy blue & gold.
   - Tipografi modern menggunakan Google Font *Plus Jakarta Sans*.
   - Ikon lengkap dari Font Awesome.
   - Desain sepenuhnya responsif (optimal di HP, Tablet, Laptop, dan Desktop).

2. **Mode Gelap / Terang (Dark & Light Mode)**:
   - Dilengkapi tombol beralih tema di navbar kanan atas.
   - Menyimpan preferensi tema pengunjung secara otomatis (*Local Storage*).

3. **Interaktif & Dinamis**:
   - Filter Kategori Keahlian (*Semua*, *Human Resources*, *Administrasi & Operasional*, *Software & Tools*).
   - Animasi hitung angka statistik (*Counter Animation*) saat di-scroll.
   - Indikator menu aktif otomatis mengikuti posisi layar scroll.
   - Menu hamburger fleksibel untuk tampilan ponsel (mobile).

4. **Fitur Cetak CV / Ekspor PDF**:
   - Tombol **"Cetak CV"** dan **"Unduh / Cetak CV"** dengan format cetak khusus (*Print CSS*).
   - Menghilangkan navigasi, tombol, dan background gelap ketika dicetak atau disimpan sebagai PDF (Ctrl + P).

5. **Integrasi Kontak & WhatsApp**:
   - Formulir pesan interaktif dengan validasi langsung.
   - Tombol klik langsung ke **WhatsApp** dengan pesan pembuka otomatis.

---

## 📂 Struktur Berkas

```
cv wahida/
│
├── index.html          # Struktur halaman web CV utama
├── gallery.html        # Halaman galeri dokumentasi kegiatan & foto
├── css/
│   └── style.css       # Gaya tampilan, variabel warna, responsive, gallery & print styling
├── js/
│   └── script.js       # Fitur interaktif (tema, filter CV, filter galeri, lightbox modal)
└── README.md           # Panduan penggunaan & kustomisasi
```

---

## 🚀 Cara Menjalankan & Membuka Website

### Cara Termudah:
Cukup klik ganda (double-click) file **`index.html`** di Windows Explorer. Halaman web akan langsung terbuka di browser favorit Anda (Google Chrome, Microsoft Edge, Mozilla Firefox, dll).

### Menggunakan Live Server (VS Code / Antigravity):
Jika menggunakan ekstensi Live Server:
1. Klik kanan pada `index.html`.
2. Pilih **"Open with Live Server"**.

---

## ✏️ Panduan Kustomisasi Sederhana

### 1. Mengganti Foto Profil
1. Siapkan foto formal Anda (misalnya: `foto-wahida.jpg`).
2. Masukkan file foto tersebut ke dalam folder yang sama dengan `index.html` (atau buat folder `assets/images/`).
3. Buka file `index.html`, cari bagian:
   ```html
   <!-- Avatar Wrapper -->
   <div class="avatar-wrapper">
     <div class="avatar-placeholder">
       <i class="fas fa-user-tie"></i>
       <span>WAHIDA, S.M.</span>
     </div>
   </div>
   ```
4. Ganti blok `<div class="avatar-placeholder">...</div>` dengan gambar Anda:
   ```html
   <img src="foto-wahida.jpg" class="avatar-img" alt="Wahida, S.M.">
   ```

### 2. Mengubah Nomor WhatsApp & Email
Buka `index.html` dan `js/script.js`:
- Di `index.html`: Ubah tautan `https://wa.me/6281234567890` dengan nomor telepon WhatsApp Anda (gunakan format kode negara `62` tanpa tanda `+` atau `0` di depan).
- Di `js/script.js`: Cari baris `const waNumber = '6281234567890';` lalu ubah sesuai nomor Anda.
- Ganti email `wahida.hr.expert@gmail.com` dan profil LinkedIn sesuai akun Anda.

### 3. Mengubah Riwayat Pengalaman & Angka Statistik
- Seluruh teks pengalaman, nama perusahaan, tahun, dan deskripsi tugas dapat langsung disesuaikan di `index.html` pada bagian `<section id="experience">`.
- Untuk angka statistik (7+ tahun, 500+ karyawan, dll), ubah atribut `data-target="angka"` di bagian `<section class="stats-section">`.

### 4. Mengubah / Menambah Foto di Galeri Kegiatan (`gallery.html`)
1. Buka berkas **`gallery.html`**.
2. Setiap kartu kegiatan memiliki struktur seperti ini:
   ```html
   <div class="gallery-card" data-category="training">
     <div class="gallery-thumb">
       <span class="gallery-badge">Pelatihan SDM</span>
       <img src="foto-anda.jpg" alt="Judul Foto Kegiatan">
     </div>
     <div class="gallery-info">
       <div class="gallery-meta">
         <i class="far fa-calendar-alt"></i>
         <span>Tanggal Kegiatan</span>
       </div>
       <h3 class="gallery-title">Judul Kegiatan Anda</h3>
       <p class="gallery-desc">Deskripsi singkat apa yang dilakukan pada kegiatan ini.</p>
     </div>
   </div>
   ```
3. Ganti tautan `src="..."` dengan nama berkas foto Anda (misal `kegiatan1.jpg`).
4. Atribut `data-category="..."` dapat diisi dengan:
   - `training`: Pelatihan & Workshop
   - `recruitment`: Rekrutmen & Onboarding
   - `engagement`: Gathering & Budaya Perusahaan
   - `operational`: Operasional & Bipartit
5. Setiap kartu yang diklik otomatis akan memunculkan foto dan detail dalam pop-up layar penuh (*Lightbox Modal*).
