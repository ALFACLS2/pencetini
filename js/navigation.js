const homePage = document.getElementById("homePage");
const faqPage = document.getElementById("faqPage");

const faqBtn = document.getElementById("faqBtn");
const backBtn = document.getElementById("backBtn");

faqBtn.addEventListener("click", () => {
  homePage.classList.remove("active");
  faqPage.classList.add("active");
});

backBtn.addEventListener("click", () => {
  faqPage.classList.remove("active");
  homePage.classList.add("active");
});
