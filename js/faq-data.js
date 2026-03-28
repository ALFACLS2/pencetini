const FAQ_DATA = [

{
    title: "📄 Administrasi",
    image: "https://res.cloudinary.com/dprt1m1wl/image/upload/v1774710141/tulisan_400_x_200_px_tvpon8.png",
    items: [
      { q: "CV & surat lamaran harus diprint?", a: "Yes. Semua dokumen wajib hardcopy (diprint) dan dibawa saat tes." },
      { q: "SKCK saya sudah tidak aktif, masih bisa ikut?", a: "Masih bisa, silakan ikuti tes." },
      { q: "Saya belum punya SKCK?", a: "Wajib punya. Silakan segera diurus." },
      { q: "SKCK masih proses perpanjangan?", a: "Tetap boleh ikut tes, tapi wajib bawa bukti perpanjangannya." },
      { q: "Belum punya NPWP / NPWP hilang?", a: "Bisa bikin online, cepat kok." },
      { q: "NPWP digital perlu diprint?", a: "Yes, wajib diprint." },
      { q: "Saya cuma punya SKL, bisa dipakai?", a: "Tidak bisa. Wajib ijazah. Khusus lulusan 2026: SKL masih diperbolehkan." }
    ]
  },
  {
    title: "👔 Dresscode",
    image: "https://res.cloudinary.com/dprt1m1wl/image/upload/v1774710544/tulisan_400_x_200_px_2_cljmse.png",
    items: [
      { q: "Sepatu bebas?", a: "Bebas, tapi WAJIB bertali." },
      { q: "Bagaimana jika ga punya polo hitam?", a: "Usahakan pinjam dulu. Kalau tidak, pertimbangkan untuk ikut." },
      { q: "Boleh polo selain hitam?", a: "Tidak. Harus hitam." },
      { q: "Kalau pakai kemeja/kaos hitam?", a: "Tidak. Wajib polo hitam." },
      { q: "Hijab bagaimana?", a: "Gunakan hijab segiempat dan diikat di leher." },
      { q: "Rambut/kumis/jenggot?", a: "Harap dirapikan." }
    ]
  },
  {
    title: "📍 Lokasi",
    image: "https://res.cloudinary.com/dprt1m1wl/image/upload/v1774710959/tulisan_400_x_200_px_3_a462yd.png",
    items: [
      { q: "Tes di mana?", a: "Cek di sini: https://maps.app.goo.gl/v88v2Y9ZXXPijZL1A" },
      { q: "Sudah sampai lokasi?", a: "Ikuti arahan petugas keamanan. Jangan jalan sendiri." }
    ]
  },
  {
    title: "🌐 Sistem & Akun",
    image: "https://res.cloudinary.com/dprt1m1wl/image/upload/v1774711319/tulisan_400_x_200_px_4_dm1tgs.png",
    items: [
      { q: "NIK sudah terdaftar?", a: "Cek IG alfakarir.cileungsi2" },
      { q: "Belum daftar Alfakarir?", a: "Wajib punya akun, daftar dari halaman utama." }
    ]
  },
  {
    title: "❌ Ketidakhadiran & Walk In",
    image: "https://res.cloudinary.com/dprt1m1wl/image/upload/v1774712466/tulisan_400_x_200_px_5_md2nqe.png",
    items: [
      { q: "Tidak hadir sebelumnya, bisa daftar lagi?", a: "Bisa. Ikuti Walk In Interview." },
      { q: "Jadwal Walk In?", a: "Pantau Instagram untuk update terbaru." },
      { q: "Posisi apa saja?", a: "Menyesuaikan kebutuhan." }
    ]
  },
  {
    title: "⚠️ Catatan Penting",
    image: "https://res.cloudinary.com/dprt1m1wl/image/upload/v1774712879/tulisan_400_x_200_px_6_edabbv.png",
    items: [
      { q: "Lamaran masih diproses?", a: "Mohon ditunggu atau bisa ikut Walk In." },
      { q: "Sudah gagal tapi status masih diproses?", a: "Boleh ikut Walk In lagi." }
    ]
  }

];

const content = document.getElementById("content");
const title = document.getElementById("title");
const subtitle = document.getElementById("subtitle");

function showCategory() {
  content.innerHTML = "";
  title.innerText = "FAQ";
  subtitle.innerText = "Pilih kategori";

  FAQ_DATA.forEach((cat, i) => {
    const div = document.createElement("div");
    div.className = "category-card";

    div.innerHTML = `
      <img src="${cat.image}">
      <div class="category-title">${cat.title}</div>
    `;

    div.onclick = () => showFAQ(i);
    content.appendChild(div);
  });
}

function showFAQ(index) {
  content.innerHTML = "";
  title.innerText = FAQ_DATA[index].title;
  subtitle.innerText = "Klik untuk baca";

  FAQ_DATA[index].items.forEach(item => {
    const div = document.createElement("div");
    div.className = "faq-card";

    div.innerHTML = `
      <div class="q">${item.q}</div>
      <div class="a">${item.a}</div>
    `;

    content.appendChild(div);
  });

  const back = document.createElement("button");
  back.className = "btn small";
  back.innerText = "⬅ Kembali";
  back.onclick = showCategory;

  content.appendChild(back);
}

showCategory();
