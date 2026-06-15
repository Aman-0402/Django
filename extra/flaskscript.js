/* =====================
   THEME TOGGLE
===================== */
const toggle = document.getElementById("themeToggle");
const body = document.body;

function applyTheme(dark) {
  if (dark) {
    body.classList.add("dark");
  } else {
    body.classList.remove("dark");
  }
  if (toggle) {
    toggle.textContent = dark ? "☀️" : "🌗";
    toggle.setAttribute("aria-label", dark ? "Switch to light mode" : "Switch to dark mode");
  }
}

// Load saved theme — default to dark
const saved = localStorage.getItem("flask-theme");
applyTheme(saved !== "light");

if (toggle) {
  toggle.addEventListener("click", () => {
    const isDark = body.classList.contains("dark");
    localStorage.setItem("flask-theme", isDark ? "light" : "dark");
    applyTheme(!isDark);
  });
}

/* =====================
   SCROLL TO TOP
===================== */
const scrollBtn = document.getElementById("scrollTop");

if (scrollBtn) {
  scrollBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Show/hide the floating variant (lesson pages only)
  if (scrollBtn.classList.contains("scroll-top-btn")) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        scrollBtn.classList.add("show");
      } else {
        scrollBtn.classList.remove("show");
      }
    });
  }
}
