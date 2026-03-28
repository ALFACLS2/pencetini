// ================= FAQ NAVIGATION =================

const homePage = document.getElementById("homePage");
const categoryPage = document.getElementById("faqCategoryPage");
const detailPage = document.getElementById("faqDetailPage");

const faqBtn = document.getElementById("faqBtn");
const backHomeBtn = document.getElementById("backHomeBtn");
const backCategoryBtn = document.getElementById("backCategoryBtn");

faqBtn.onclick = () => {
  showPage("category");
  renderCategories();
};

backHomeBtn.onclick = () => showPage("home");
backCategoryBtn.onclick = () => showPage("category");

function showPage(page) {
  homePage.classList.remove("active");
  categoryPage.classList.remove("active");
  detailPage.classList.remove("active");

  if (page === "home") homePage.classList.add("active");
  if (page === "category") categoryPage.classList.add("active");
  if (page === "detail") detailPage.classList.add("active");
}

// ================= RENDER CATEGORY =================

function renderCategories() {
  const container = document.getElementById("faqCategoryList");
  container.innerHTML = "";

  FAQ_DATA.forEach((cat, index) => {
    container.innerHTML += `
      <div class="category-card" onclick="openCategory(${index})">
        <img src="${cat.image}">
        <div class="category-title">${cat.title}</div>
      </div>
    `;
  });
}

// ================= OPEN CATEGORY =================

function openCategory(index) {
  const category = FAQ_DATA[index];

  document.getElementById("faqTitle").innerText = category.title;

  const container = document.getElementById("faqDetailList");
  container.innerHTML = "";

  category.items.forEach(item => {
    container.innerHTML += `
      <div class="faq-item" onclick="this.classList.toggle('active')">
        <img src="${category.image}">
        <h3>${item.q}</h3>
        <p>${item.a}</p>
      </div>
    `;
  });

  showPage("detail");
}
