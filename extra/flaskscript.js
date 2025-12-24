// =======================
// DARK / LIGHT MODE
// =======================
document.body.classList.add("dark");

// Toggle theme
const toggle = document.getElementById("themeToggle");
toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});
// =======================
// SCROLL TO TOP
// =======================
const scrollBtn = document.getElementById("scrollTop");

scrollBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
