// const toggleBtn = document.getElementById("themeToggle");
// const body = document.body;

// /* Load saved theme */
// const savedTheme = localStorage.getItem("django-theme");
// if (savedTheme) {
//   body.className = savedTheme;
//   toggleBtn.textContent =
//     savedTheme === "dark-mode" ? "☀️ Light Mode" : "🌙 Dark Mode";
// }

// /* Toggle theme */
// toggleBtn.addEventListener("click", () => {
//   body.classList.toggle("dark-mode");

//   const isDark = body.classList.contains("dark-mode");
//   toggleBtn.textContent = isDark ? "☀️ Light Mode" : "🌙 Dark Mode";

//   localStorage.setItem("django-theme", isDark ? "dark-mode" : "light-mode");
// });
// window.addEventListener("scroll", () => {
//   const btn = document.getElementById("themeToggle");
//   if (window.scrollY > 40) {
//     btn.textContent = body.classList.contains("dark-mode") ? "☀️" : "🌙";
//   } else {
//     btn.textContent = body.classList.contains("dark-mode")
//       ? "☀️ Light"
//       : "🌙 Dark";
//   }
// });
// const scrollTopBtn = document.getElementById("scrollTopBtn");

// if (scrollTopBtn) {
//   window.addEventListener("scroll", () => {
//     if (window.scrollY > 200) {
//       scrollTopBtn.classList.add("show");
//     } else {
//       scrollTopBtn.classList.remove("show");
//     }
//   });

//   scrollTopBtn.addEventListener("click", () => {
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     });
//   });
// }
// /* =====================
//    MCQ INTERACTION
// ===================== */
// document.querySelectorAll(".mcq").forEach((mcq) => {
//   const options = mcq.querySelectorAll("input[type='radio']");

//   options.forEach((opt) => {
//     opt.addEventListener("change", () => {
//       options.forEach((o) => {
//         o.parentElement.classList.remove("correct", "wrong");
//       });

//       if (opt.dataset.correct === "true") {
//         opt.parentElement.classList.add("correct");
//       } else {
//         opt.parentElement.classList.add("wrong");

//         const correct = mcq.querySelector("input[data-correct='true']");
//         if (correct) {
//           correct.parentElement.classList.add("correct");
//         }
//       }
//     });
//   });
// });
/* =====================
   THEME TOGGLE
===================== */
const toggleBtn = document.getElementById("themeToggle");
const body = document.body;

// Load saved theme
const savedTheme = localStorage.getItem("django-theme");
if (savedTheme) {
  body.className = savedTheme;
  updateToggleText();
}

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  const isDark = body.classList.contains("dark-mode");
  
  localStorage.setItem("django-theme", isDark ? "dark-mode" : "light-mode");
  updateToggleText();
});

function updateToggleText() {
  const isDark = body.classList.contains("dark-mode");
  toggleBtn.textContent = isDark ? "☀️ Light Mode" : "🌙 Dark Mode";
}

/* =====================
   SCROLL TO TOP
===================== */
const scrollTopBtn = document.getElementById("scrollTopBtn");

if (scrollTopBtn) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      scrollTopBtn.classList.add("show");
      scrollTopBtn.style.opacity = "1";
      scrollTopBtn.style.pointerEvents = "auto";
    } else {
      scrollTopBtn.classList.remove("show");
      scrollTopBtn.style.opacity = "0";
      scrollTopBtn.style.pointerEvents = "none";
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
      // Clear previous styles in this specific MCQ group
      const allLabels = mcq.querySelectorAll("label");
      allLabels.forEach((lbl) => lbl.classList.remove("correct", "wrong"));

      const parentLabel = opt.closest("label");

      if (opt.dataset.correct === "true") {
        parentLabel.classList.add("correct");
      } else {
        parentLabel.classList.add("wrong");
        
        // Highlight the correct answer automatically if wrong selected
        const correctInput = mcq.querySelector("input[data-correct='true']");
        if (correctInput) {
          correctInput.closest("label").classList.add("correct");
        }
      }
    });
  });
});