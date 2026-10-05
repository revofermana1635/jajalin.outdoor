/* ===== Konfigurasi & data (ubah di sini) ===== */
const WA_NUMBER = "6285774275739"; // isi format internasional tanpa +, contoh:
const PRICE = "[Harga]", STOCK = "[Stok]";
const WHY = [
 ["💸","Harga Terjangkau","Sewa dulu, hemat biaya untuk perjalananmu."],
 ["🧼","Peralatan Terawat","Dicek dan dirawat sebelum disewakan."],
 ["🎒","Pilihan Perlengkapan Lengkap","Dari tenda sampai headlamp, ada di satu tempat."],
 ["📲","Proses Booking Mudah","Isi form, konfirmasi lewat WhatsApp."]
];
const PRODUCTS = [
 ["tenda2","Tenda","Tenda Kapasitas 2 Orang","Tenda dome ringkas untuk camping berdua atau pendakian santai.","Rp 30.000"],
 ["tenda","Tenda","Tenda Kapasitas 4 Orang","Tenda dome untuk camping bersama teman atau keluarga.","Rp 50.000"],
 ["carrier","Carrier","Tas Carrier","Tas gunung untuk pendakian dan perjalanan panjang.","Rp 30.000"],
 ["sb","Sleeping Bag","Sleeping Bag","Menjaga tetap hangat saat malam di alam.","Rp 20.000"],
 ["matras","Matras","Matras","Alas tidur yang nyaman dan ringan.","Rp 10.000"],
 ["kompor","Kompor Outdoor","Kompor Portable","Kompor portable untuk masak di area camping.","Rp 30.000"],
 ["masak","Peralatan Camping","Alat Masak","Set panci, wajan, dan teko untuk masak di alam.","Rp 20.000"],
 ["lamp","Lampu/Headlamp","Headlamp","Penerangan hands-free untuk malam hari dan jalur gelap.","Rp 15.000"],
 ["pole","Trekking Pole","Trekking Pole","Membantu keseimbangan di jalur menanjak dan menurun.","Rp 10.000"],
 ["kursi","Peralatan Camping","Kursi dan Meja Lipat","Set kursi dan meja lipat portable untuk santai di campsite.","Rp 30.000"]
];
const IMG = {
 "tenda2": "images/products/tenda2.webp",
 "tenda": "images/products/tenda.webp",
 "carrier": "images/products/carrier.webp",
 "sb": "images/products/sb.webp",
 "matras": "images/products/matras.webp",
 "kompor": "images/products/kompor.webp",
 "masak": "images/products/masak.webp",
 "lamp": "images/products/lamp.webp",
 "pole": "images/products/pole.webp",
 "kursi": "images/products/kursi.webp",
};
const PACKAGES = [
 ["Paket Camping 2 Orang",["1× Tenda Kapasitas 2 Orang","2× Sleeping Bag","2× Matras","1× Kompor Portable","1× Alat Masak","2× Headlamp"],false,150000,170000],
 ["Paket Camping 4 Orang",["1× Tenda Kapasitas 4 Orang","4× Sleeping Bag","4× Matras","1× Kompor Portable","1× Alat Masak","2× Headlamp","1× Kursi dan Meja Lipat"],false,250000,280000],
 ["Paket Hiking (per orang)",["1× Tas Carrier","1× Sleeping Bag","1× Matras","1× Headlamp","1× Trekking Pole"],false,75000,85000],
 ["Paket Camping Lengkap (4 orang)",["1× Tenda Kapasitas 4 Orang","4× Sleeping Bag","4× Matras","4× Headlamp","1× Kompor Portable","1× Alat Masak","1× Kursi dan Meja Lipat","2× Tas Carrier"],true,325000,370000]
];
const rp = n => "Rp " + n.toLocaleString("id-ID");
const STEPS = [
 ["Pilih perlengkapan","Lihat katalog dan tentukan alat atau paket yang kamu butuhkan."],
 ["Hubungi kami / booking","Isi form booking atau chat langsung untuk cek ketersediaan."],
 ["Bayar dan deposit","Selesaikan pembayaran dan deposit sesuai ketentuan."],
 ["Ambil atau terima alat","Ambil perlengkapanmu, lalu siap berangkat."]
];
const GALLERY = [
 [
  "images/gallery/galeri-1.webp",
  "Camping di tepi sungai hutan: peserta makan bersama di depan tenda"
 ],
 [
  "images/gallery/galeri-2.webp",
  "Suasana malam di campsite tepi sungai dengan tenda dan masakan hangat"
 ],
 [
  "images/gallery/galeri-3.webp",
  "Rombongan teman berfoto bersama di campsite dekat jembatan bambu"
 ],
 [
  "images/gallery/galeri-4.webp",
  "Memasak dan menyiapkan tenda di campsite berumput"
 ],
 [
  "images/gallery/galeri-5.webp",
  "Tenda ungu di padang terbuka dengan latar perbukitan"
 ]
];
const TESTI = ["[Testimoni pelanggan]","[Testimoni pelanggan]","[Testimoni pelanggan]"];
const FAQ = [
 ["Berapa lama minimal masa sewa?","Minimal masa sewa: [Isi minimal masa sewa]."],
 ["Apakah ada deposit?","[Isi ketentuan deposit]. Detail mengikuti kebijakan Jajalin.outdor."],
 ["Bagaimana jika alat rusak atau hilang?","[Isi ketentuan kerusakan/kehilangan]."],
 ["Apakah bisa booking online?","Bisa. Isi form booking di halaman ini, lalu konfirmasi dilakukan lewat WhatsApp."],
 ["Apakah tersedia layanan antar?","[Isi informasi layanan antar]."],
 ["Bagaimana cara memperpanjang masa sewa?","[Isi cara perpanjangan]. Hubungi kami sebelum masa sewa berakhir."]
];
