/* ===== Komponen reusable ===== */
const $ = s => document.querySelector(s);
const esc = t => String(t).replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const Card = (inner, cls = "") => `<article class="card ${cls}">${inner}</article>`;
const ProductCard = ([k,cat,name,desc,price]) => Card(`<div class="thumb"><span class="cat">${esc(cat)}</span><img src="${IMG[k]}" alt="${esc(name)}" loading="lazy" width="520" height="520"></div><h3>${esc(name)}</h3><p>${esc(desc)}</p><div class="meta"><span class="price">${price}</span><span class="stock">Stok: ${STOCK}</span></div><a class="btn btn-p btn-s" href="#booking" data-pick="${esc(name)}">Sewa Sekarang</a>`);
const PackageCard = ([n,items,feat,price,old]) => Card(`${feat?'<span class="tag">Terlengkap</span>':''}<h3>${esc(n)}</h3><div class="price">${rp(price)} <s class="old">${rp(old)}</s></div><span class="save">Hemat ${rp(old-price)}</span><ul>${items.map(x=>`<li>${esc(x)}</li>`).join("")}</ul><a class="btn ${feat?'btn-p':'btn-o'} btn-s" href="#booking" data-pick="${esc(n)}" style="margin-top:auto">Pilih Paket</a>`, "pkg"+(feat?" feat":""));

$("#why").innerHTML = WHY.map(([i,t,d]) => Card(`<div class="ico" aria-hidden="true">${i}</div><h3>${t}</h3><p style="margin:0">${d}</p>`)).join("");
$("#products").innerHTML = PRODUCTS.map(ProductCard).join("");
$("#packages").innerHTML = PACKAGES.map(PackageCard).join("");
$("#steps").innerHTML = STEPS.map(([t,d]) => `<li><h3>${t}</h3><p>${d}</p></li>`).join("");
$("#gallery").innerHTML = GALLERY.map(([src,alt]) => `<figure><img src="${src}" alt="${esc(alt)}" loading="lazy"></figure>`).join("");
$("#testi").innerHTML = TESTI.map(t => Card(`<p class="quote">${t}</p><p class="who">[Nama pelanggan]</p>`)).join("");
$("#faqs").innerHTML = FAQ.map(([q,a]) => `<details><summary>${q}</summary><p>${a}</p></details>`).join("");
$("#item").innerHTML = `<option value="">Pilih...</option><optgroup label="Perlengkapan">${PRODUCTS.map(p=>`<option>${esc(p[2])}</option>`).join("")}</optgroup><optgroup label="Paket">${PACKAGES.map(p=>`<option>${esc(p[0])}</option>`).join("")}</optgroup>`;

/* ===== Interaksi ===== */
const menu = $("#menu"), burger = $("#burger");
burger.onclick = () => { const o = menu.classList.toggle("open"); burger.setAttribute("aria-expanded", o); };
menu.addEventListener("click", e => { if (e.target.tagName === "A") { menu.classList.remove("open"); burger.setAttribute("aria-expanded", false); } });
document.addEventListener("click", e => { const p = e.target.closest("[data-pick]"); if (p) $("#item").value = p.dataset.pick; });
const today = new Date().toISOString().slice(0,10); $("#mulai").min = today;
if (WA_NUMBER) $("#wa").href = `https://wa.me/${WA_NUMBER}`;

/* ===== Validasi & kirim booking ===== */
const rules = {
 nama: v => v.trim().length >= 2 || "Isi nama minimal 2 huruf.",
 hp: v => /^(\+?62|0)8\d{7,12}$/.test(v.replace(/[\s-]/g,"")) || "Isi nomor WhatsApp yang valid, contoh 08123456789.",
 item: v => !!v || "Pilih perlengkapan atau paket.",
 mulai: v => (!!v && v >= today) || "Pilih tanggal mulai hari ini atau setelahnya.",
 durasi: v => (+v >= 1 && +v <= 60) || "Durasi antara 1 sampai 60 hari."
};
$("#bf").addEventListener("submit", e => {
 e.preventDefault();
 const f = e.target; let ok = true, first = null;
 for (const k in rules) {
  const el = f[k], r = rules[k](el.value), bad = r !== true;
  $("#e-" + k).textContent = bad ? r : "";
  el.setAttribute("aria-invalid", bad);
  if (bad) { ok = false; first = first || el; }
 }
 const st = $("#status");
 if (!ok) { st.textContent = "Periksa kembali kolom yang bertanda merah."; first.focus(); return; }
 const msg = `Halo Jajalin.outdor, saya mau booking.%0ANama: ${encodeURIComponent(f.nama.value)}%0AWA: ${encodeURIComponent(f.hp.value)}%0AItem: ${encodeURIComponent(f.item.value)}%0AMulai: ${f.mulai.value}%0ADurasi: ${f.durasi.value} hari%0ACatatan: ${encodeURIComponent(f.catatan.value || "-")}`;
 if (WA_NUMBER) { window.open(`https://wa.me/${WA_NUMBER}?text=${msg}`, "_blank", "noopener"); st.textContent = "Booking dibuka di WhatsApp. Kirim pesannya untuk konfirmasi."; }
 else st.textContent = "Data valid, tetapi nomor WhatsApp Jajalin.outdor belum diatur. Isi WA_NUMBER di kode agar form bisa terkirim.";
});
