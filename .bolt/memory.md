# Project memory

## Product intent & audience

- Website for a rental business (jenis sewa belum dikonfirmasi) dengan kehadiran di Google Maps.
- Audiens: calon penyewa yang mencari layanan sewa terpercaya.
- Bahasa situs: Bahasa Indonesia.

## Brand personality & voice

- Jujur dan transparan — menampilkan rating agregat asli (4,3 dari 42 ulasan) meskipun hanya memajang ulasan positif.
- Mengandalkan social proof nyata (ulasan Google Maps asli) alih-alih placeholder.

## Visual design & UX direction

- Framework: Astro.
- Halaman utama memiliki section testimoni dengan 6 kartu ulasan.
- Setiap kartu menampilkan: nama pemberi ulasan, bulan sewa, bintang rating, dan teks ulasan.
- Section description menyebutkan rating agregat (4,3/42 ulasan) untuk kredibilitas.
- Pola: kartu ulasan dengan star rating visual.

## Decisions, constraints & rationale

- Placeholder testimoni diganti dengan 6 ulasan positif asli dari Google Maps (semua bintang 5).
- Hanya ulasan positif yang dipajang, tapi rating agregat tetap ditampilkan apa adanya agar tidak menyesatkan.
- Data ulasan dimasukkan secara manual (bukan via API Google Maps) berdasarkan konteks edit.

## Open questions & assumptions

- Jenis usaha sewa belum dikonfirmasi (kendaraan, properti, alat, dll.).
- Apakah perlu mekanisme pembaruan ulasan otomatis di masa depan?
- Apakah section testimoni juga akan ditampilkan di halaman lain selain homepage?