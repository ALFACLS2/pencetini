const home = document.getElementById("homePage");
const categoryPage = document.getElementById("faqCategoryPage");
const detailPage = document.getElementById("faqDetailPage");

const categoryList = document.getElementById("faqCategoryList");
const detailList = document.getElementById("faqDetailList");
const title = document.getElementById("faqTitle");

// NAV
document.getElementById("faqBtn").onclick = () => {
  home.classList.remove("active");
  categoryPage.classList.add("active");
};

document.getElementById("backHomeBtn").onclick = () => {
  categoryPage.classList.remove("active");
  home.classList.add("active");
};

document.getElementById("backCategoryBtn").onclick = () => {
  detailPage.classList.remove("active");
  categoryPage.classList.add("active");
};

// RENDER CATEGORY
FAQ_DATA.forEach((cat, i) => {
  const div = document.createElement("div");
  div.className = "category-card";
  div.innerHTML = `
    <img src="${cat.image}">
    <div class="category-title">${cat.title}</div>
  `;
  div.onclick = () => openCategory(i);
  categoryList.appendChild(div);
});

// OPEN CATEGORY
function openCategory(i) {
  categoryPage.classList.remove("active");
  detailPage.classList.add("active");

  const data = FAQ_DATA[i];
  title.innerText = data.title;

  detailList.innerHTML = "";

  data.items.forEach(item => {
    const div = document.createElement("div");
    div.className = "faq-item";
    div.innerHTML = `
      <h3>${item.q}</h3>
      <p>${item.a}</p>
    `;
    div.onclick = () => div.classList.toggle("active");
    detailList.appendChild(div);
  });
}
