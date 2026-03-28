const home = document.getElementById("homePage");
const faq = document.getElementById("faqPage");

document.getElementById("faqBtn").onclick = () => {
  home.classList.remove("active");
  faq.classList.add("active");
};

document.getElementById("backBtn").onclick = () => {
  faq.classList.remove("active");
  home.classList.add("active");
};

function toggleFAQ(el) {
  el.classList.toggle("active");
}
