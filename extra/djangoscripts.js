/* =====================
   THEME TOGGLE
===================== */
const toggleBtn = document.getElementById("themeToggle");
const body = document.body;

function updateToggleText() {
  const isDark = body.classList.contains("dark-mode");
  toggleBtn.textContent = isDark ? "☀️ Light Mode" : "🌙 Dark Mode";
}

// Load saved theme
const savedTheme = localStorage.getItem("django-theme");
if (savedTheme === "dark-mode") {
  body.classList.add("dark-mode");
}
updateToggleText();

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  const isDark = body.classList.contains("dark-mode");
  localStorage.setItem("django-theme", isDark ? "dark-mode" : "light-mode");
  updateToggleText();
});

/* =====================
   SCROLL TO TOP
===================== */
const scrollTopBtn = document.getElementById("scrollTopBtn");

if (scrollTopBtn) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      scrollTopBtn.classList.add("show");
    } else {
      scrollTopBtn.classList.remove("show");
    }
  });

  scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

/* =====================
   MCQ INTERACTION
===================== */
document.querySelectorAll(".mcq").forEach((mcq) => {
  const options = mcq.querySelectorAll("input[type='radio']");

  options.forEach((opt) => {
    opt.addEventListener("change", () => {
      mcq.querySelectorAll("label").forEach((lbl) =>
        lbl.classList.remove("correct", "wrong")
      );

      const parentLabel = opt.closest("label");

      if (opt.dataset.correct === "true") {
        parentLabel.classList.add("correct");
      } else {
        parentLabel.classList.add("wrong");
        const correctInput = mcq.querySelector("input[data-correct='true']");
        if (correctInput) {
          correctInput.closest("label").classList.add("correct");
        }
      }
    });
  });
});
