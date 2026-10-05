# Jajalin.outdor - Website Profil

Website statis (HTML, CSS, JavaScript). Tidak perlu build; cukup upload seluruh folder ini ke hosting.

## Struktur
- `index.html` : struktur halaman
- `css/style.css` : semua gaya, warna, dan tata letak (token warna ada di `:root`)
- `js/data.js` : data yang sering diubah (nomor WhatsApp, produk, paket, FAQ, testimoni, galeri)
- `js/app.js` : komponen kartu, menu, validasi dan pengiriman form booking
- `images/` : logo, favicon, background hero, `products/`, `gallery/`

## Yang perlu kamu isi
1. `WA_NUMBER` di `js/data.js` (format `6285774275739`), supaya form booking dan tombol WhatsApp aktif.
2. Stok produk (`STOCK`), testimoni (`TESTI`), dan jawaban FAQ yang masih `[placeholder]`.
3. Kontak di footer (`index.html`): area layanan, WhatsApp, Instagram, jam operasional.
4. Tambahkan `<meta property="og:image">` dan `og:url` setelah punya domain.

## Menambah produk
Taruh foto di `images/products/`, daftarkan di `IMG` dan tambahkan satu baris di `PRODUCTS` (`js/data.js`).
