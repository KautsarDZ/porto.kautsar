# Portofolio Kautsar

Repository ini berisi landing page portfolio pribadi yang dibuat dengan React, Vite, TypeScript, Tailwind CSS, Framer Motion, dan Lucide React. Fokus utama proyek ini adalah menampilkan profil profesional, skill, pengalaman, pendidikan, project, sertifikasi, serta kontak dalam satu halaman yang modern dan responsif.

## Spesifikasi singkat

- Single-page portfolio dengan tata letak yang rapi dan modern
- Tema gelap dengan nuansa teknologi / network operations
- Hero section dengan foto profil, tagline, dan tombol aksi
- Section skill yang bisa digeser secara interaktif
- Timeline pengalaman kerja dan pendidikan
- Daftar project dan sertifikasi
- Komponen NOC terminal simulasi untuk memberikan kesan teknis dan cyber
- Tombol copy email untuk pengalaman interaksi yang lebih praktis

## Ciri dan tampilan

- Visual berkonsep dark mode dengan warna biru, abu, dan neon yang lembut
- Layout responsif untuk desktop dan mobile
- Animasi halus saat scroll dan pergantian section
- Fokus pada profil profesional di bidang IT, networking, NOC, dan support sistem
- Desain bernuansa profesional, teknis, dan terpercaya

## Cara penggunaan

Pastikan Node.js versi 20+ sudah terpasang. Kemudian jalankan perintah berikut dari root proyek:

```bash
npm install
npm run dev
```

Untuk build produksi:

```bash
npm run build
```

Untuk preview hasil build:

```bash
npm run preview
```

## File penting

- `src/data/portfolio.ts` : semua konten portfolio (nama, summary, skill, pengalaman, proyek, kontak)
- `src/App.tsx` : struktur utama halaman dan komponen utama
- `src/components/NocTerminal.tsx` : komponen simulasi terminal / NOC UI
- `src/App.css` : styling visual dan tema halaman

## VS Code extensions yang dipakai

Berikut ekstensi yang direkomendasikan dan umum dipakai untuk project ini:

- `ES7+ React/Redux/React-Native snippets`
- `Tailwind CSS IntelliSense`
- `Auto Rename Tag`
- `Prettier - Code formatter`
- `GitHub Copilot`
- `GitHub Copilot Chat`
- `GitLens - Git supercharged`
- `Live Server` (untuk preview cepat bila diperlukan)
- `Error Lens`
- `Material Icon Theme`
- `vscode-icons`

Ekstensi di atas membantu saat menulis komponen React, styling Tailwind, debugging, dan manajemen git.

## Troubleshooting singkat

Jika saat menjalankan `npm install` error atau script tidak bisa dijalankan di Windows, coba langkah berikut:

### 1) PowerShell memblokir script

```powershell
Set-ExecutionPolicy -Scope CurrentUser RemoteSigned
```

Lalu coba ulang:

```bash
npm install
```

### 2) `npm` tidak terdeteksi

Pastikan Node.js sudah terinstall dengan benar dan terminal di-restart. Bisa cek dengan:

```bash
node -v
npm -v
```

Jika belum muncul, install ulang Node.js LTS dari situs resmi Node.js.

### 3) Install stuck atau dependency rusak

```bash
rm -rf node_modules package-lock.json
npm install
```

Pada Windows, bisa pakai:

```powershell
Remove-Item -Recurse -Force node_modules, package-lock.json
npm install
```

## Catatan

Repositori ini cocok digunakan sebagai portfolio pribadi atau template landing page yang bisa disesuaikan cepat lewat file `src/data/portfolio.ts` tanpa harus mengubah struktur utama aplikasi.


