# Dokumentasi Redirect Migrasi & Perbandingan Website DRTRANS.ID

Dokumen ini disiapkan sebagai panduan transisi dari website **drtrans.id** sebelumnya ke website baru berbasis **Astro 7** (`PT. AZZAHRA JAYA TRANSPORTATION`), agar peringkat SEO, backlink lama, dan pengalaman pengunjung tetap terjaga tanpa error `404`.

---

## 1. Peta Halaman Website Baru

| Rute Baru | Fungsi Halaman | Status Indexing |
|---|---|---|
| `/` | Beranda (Hero, Armada Motor & Mobil + Hiace, Keunggulan, Layanan, Wisata, FAQ) | `index, follow` |
| `/about/` | Halaman Tentang Kami (`PT. AZZAHRA JAYA TRANSPORTATION`) | `index, follow` |
| `/work/` | Indeks Panduan Area Madiun (Stasiun Madiun & Terminal Purboyo) | `index, follow` |
| `/work/sewa-motor-stasiun-madiun/` | SEO On-Page: Sewa Motor Dekat Stasiun Madiun | `index, follow` |
| `/work/sewa-mobil-stasiun-madiun/` | SEO On-Page: Sewa Mobil Dekat Stasiun Madiun | `index, follow` |
| `/work/sewa-motor-terminal-madiun/` | SEO On-Page: Sewa Motor Terminal Purboyo Madiun | `index, follow` |
| `/work/sewa-mobil-terminal-madiun/` | SEO On-Page: Sewa Mobil & Hiace Terminal Madiun | `index, follow` |
| `/privacy/`, `/terms/`, `/cookies/` | Halaman Legal | `noindex, nofollow` |
| `/sitemap-index.xml`, `/robots.txt`, `/site.webmanifest` | Sitemap SEO, Crawler & PWA Manifest | Teknis |

> **Penting:** Seluruh URL website baru menggunakan trailing slash (`/about/`, `/work/`). Pastikan aturan redirect mengarah langsung ke URL dengan trailing slash agar tidak terjadi redirect berantai (*redirect chain*).

---

## 2. Pemetaan Redirect 301 (Halaman Lama → Halaman Baru)

Sebelum mengaktifkan redirect di server produksi, cek seluruh URL lama yang terindeks di **Google Search Console → Indexing → Pages** atau pencarian Google `site:drtrans.id`.

| Pola URL Lama (Umum / Legacy) | Target Redirect `301` | Alasan |
|---|---|---|
| `/home`, `/index.html`, `/index.php` | `/` | Kanonisasi beranda |
| `/tentang`, `/tentang-kami`, `/profil`, `/about-us` | `/about/` | Profil perusahaan & PT |
| `/armada`, `/daftar-harga`, `/harga`, `/unit` | `/#armada` | Daftar unit motor, mobil & Hiace |
| `/sewa-motor`, `/rental-motor`, `/rental-motor-madiun` | `/#armada-motor` | Katalog unit roda dua |
| `/sewa-mobil`, `/rental-mobil`, `/rental-mobil-madiun` | `/#armada-mobil` | Katalog unit roda empat |
| `/stasiun-madiun`, `/sewa-motor-stasiun-madiun` | `/work/sewa-motor-stasiun-madiun/` | Audiens Stasiun Madiun (motor) |
| `/sewa-mobil-stasiun-madiun`, `/rental-mobil-stasiun-madiun` | `/work/sewa-mobil-stasiun-madiun/` | Audiens Stasiun Madiun (mobil) |
| `/terminal-madiun`, `/terminal-purboyo`, `/sewa-motor-terminal-madiun` | `/work/sewa-motor-terminal-madiun/` | Audiens Terminal Madiun (motor) |
| `/sewa-mobil-terminal-madiun`, `/sewa-elf-hiace`, `/hiace-madiun` | `/work/sewa-mobil-terminal-madiun/` | Audiens Terminal & Hiace |
| `/layanan`, `/service`, `/services` | `/#layanan` | Daftar layanan darat |
| `/wisata`, `/paket-wisata`, `/tour` | `/#wisata` | Paket wisata Madiun & luar kota |
| `/faq`, `/syarat-ketentuan`, `/cara-booking` | `/#faq` | Pertanyaan umum & syarat |
| `/kontak`, `/contact`, `/hubungi-kami` | `/about/` | Informasi kontak & legalitas |
| `/privacy-policy` | `/privacy/` | Kebijakan privasi |
| `/terms-of-service`, `/terms-and-conditions` | `/terms/` | Syarat & ketentuan |
| `/cookie-policy` | `/cookies/` | Kebijakan cookie |
| `/artikel/*`, `/blog/*`, `/category/*`, `/tag/*` (yang tidak dipakai lagi) | `/work/` (atau `/` jika tidak relevan) | Menjaga link equity agar tidak `404` |

---

## 3. Contoh Konfigurasi Redirect Siap Pakai

### A. Cloudflare Pages / Workers (`public/_redirects`)
Cocok jika menggunakan konfigurasi `wrangler.jsonc`:

```text
/home / 301
/index.html / 301
/tentang-kami /about/ 301
/tentang /about/ 301
/about-us /about/ 301
/rental-motor-madiun /#armada-motor 301
/rental-mobil-madiun /#armada-mobil 301
/sewa-motor-stasiun-madiun /work/sewa-motor-stasiun-madiun/ 301
/sewa-mobil-stasiun-madiun /work/sewa-mobil-stasiun-madiun/ 301
/sewa-motor-terminal-madiun /work/sewa-motor-terminal-madiun/ 301
/sewa-mobil-terminal-madiun /work/sewa-mobil-terminal-madiun/ 301
/paket-wisata /#wisata 301
/kontak /about/ 301
/hubungi-kami /about/ 301
/blog/* /work/ 301
```

### B. Vercel (`vercel.json`)
Tambahkan properti `"redirects"` di `vercel.json`:

```json
{
  "framework": "astro",
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "redirects": [
    { "source": "/tentang-kami", "destination": "/about/", "permanent": true },
    { "source": "/about-us", "destination": "/about/", "permanent": true },
    { "source": "/rental-motor-madiun", "destination": "/#armada-motor", "permanent": true },
    { "source": "/rental-mobil-madiun", "destination": "/#armada-mobil", "permanent": true },
    { "source": "/kontak", "destination": "/about/", "permanent": true },
    { "source": "/blog/:slug*", "destination": "/work/", "permanent": true }
  ]
}
```

### C. Apache / cPanel (`.htaccess`)
```apache
RewriteEngine On
RewriteRule ^tentang-kami/?$ /about/ [R=301,L]
RewriteRule ^about-us/?$ /about/ [R=301,L]
RewriteRule ^rental-motor-madiun/?$ /#armada-motor [R=301,L,NE]
RewriteRule ^rental-mobil-madiun/?$ /#armada-mobil [R=301,L,NE]
RewriteRule ^kontak/?$ /about/ [R=301,L]
RewriteRule ^blog/.*$ /work/ [R=301,L]
```

### D. Nginx (`server` block)
```nginx
rewrite ^/tentang-kami/?$ /about/ permanent;
rewrite ^/about-us/?$ /about/ permanent;
rewrite ^/rental-motor-madiun/?$ /#armada-motor permanent;
rewrite ^/rental-mobil-madiun/?$ /#armada-mobil permanent;
rewrite ^/kontak/?$ /about/ permanent;
rewrite ^/blog/ /work/ permanent;
```

### Checklist Pasca-Deploy SEO
1. Pastikan domain kanonik (`https://www.drtrans.id`) dan redirect `http://` + non-`www` konsisten satu arah.
2. Submit ulang `/sitemap-index.xml` di **Google Search Console**.
3. Pantau tab **Pages (Not found 404)** di Search Console selama 2–4 minggu pertama dan tambahkan aturan `301` jika ada URL lama yang terlewat.

---

## 4. Perbandingan Website Sebelumnya vs Website Baru (Astro 7)

### Website Sebelumnya (Legacy / CMS Dinamis)
**Kelebihan:**
- Biasanya memiliki dashboard admin/CMS untuk edit teks, upload foto unit, atau menulis artikel blog tanpa menyentuh kode.
- URL lama sudah dikenal mesin pencari dan memiliki histori indeks/backlink.
- Jika memakai plugin form/booking, dapat menambah field kustom langsung dari panel admin.

**Kekurangan:**
- Beban asset (JS/CSS pihak ketiga, font eksternal, plugin) cenderung besar sehingga skor *Core Web Vitals* (LCP/INP) di jaringan seluler lambat.
- Membutuhkan maintenance server/database dan pembaruan keamanan rutin (rawan celah plugin jika berbasis WordPress).
- Banyak halaman tipis (*thin content*) atau duplikat tag/kategori yang membebani *crawl budget* SEO.

### Website Baru (`drtrans.id` — Astro 7 + Tailwind CSS 4 + PWA)
**Kelebihan:**
- **Performa sangat cepat (Static HTML):** Output statis murni tanpa framework runtime berat, font self-hosted (`Hanken Grotesk` & `Instrument Serif`), sehingga loading hampir instan di jaringan mobile.
- **PWA Siap Install & Offline:** Memiliki `site.webmanifest`, Service Worker (`sw.js`), tombol install in-app, serta fallback cache saat sinyal lemah di perjalanan/stasiun/terminal.
- **SEO On-Page & Schema Terstruktur:** Halaman `/work/*` ditargetkan khusus untuk audiens Stasiun Madiun dan Terminal Purboyo Madiun, lengkap dengan meta tags, canonical, `sitemap-index.xml`, dan JSON-LD (`AutoRental`, `AboutPage`, `Service`, `BreadcrumbList`).
- **Desain Modern & Responsif:** Mendukung mode terang/gelap otomatis, aksesibilitas keyboard, navigasi mega menu ringkas, dan konversi langsung ke WhatsApp.
- **Keamanan & Biaya Hosting Rendah:** Tidak ada database atau admin login publik yang rawan diretas; dapat di-hosting gratis/murah di Cloudflare Workers/Pages atau Vercel.

**Kekurangan:**
- **Tidak ada dashboard CMS GUI:** Perubahan harga, unit baru, atau penambahan artikel `/work/*.mdx` dilakukan melalui file config/MDX (`src/config/*`, `src/content/work/*`) dan build ulang.
- **Booking via WhatsApp:** Belum ada sistem kalender ketersediaan unit *real-time* atau payment gateway otomatis (pembayaran masih konfirmasi manual BCA/BRI via WhatsApp).
- **Perlu masa transisi SEO:** Karena struktur URL dirapikan dan halaman tak terpakai dipangkas, aturan redirect `301` wajib dipasang saat launch agar traffic organik lama tidak turun sementara.
