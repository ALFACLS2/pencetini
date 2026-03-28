const FAQ_DATA = [
  {
    title: "📄 Administrasi",
    items: [
      { q: "CV harus print?", a: "Yes, wajib hardcopy." },
      { q: "SKCK belum aktif?", a: "Masih bisa ikut." }
    ]
  },
  {
    title: "👔 Dresscode",
    items: [
      { q: "Sepatu bebas?", a: "Bebas tapi bertali." },
      { q: "Boleh selain polo hitam?", a: "Tidak." }
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
    div.className = "faq-item";

    div.innerHTML = `<strong>${cat.title}</strong>`;
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
