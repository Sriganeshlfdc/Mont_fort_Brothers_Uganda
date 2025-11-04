// ✅ Toggle mobile menu
function toggleMenu() {
  const nav = document.getElementById("navlinks");
  const toggleBtn = document.getElementById("menuToggle");
  nav.classList.toggle("active");
  toggleBtn.textContent = nav.classList.contains("active") ? "✖" : "☰";
}

// ✅ Slideshow logic
let slideIndex = 0;
showSlides();

function showSlides() {
  const slides = document.getElementsByClassName("slide");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 5000);
}

// ✅ Scroll-triggered animation for .scroll-animate
function revealOnScroll() {
  const elements = document.querySelectorAll('.scroll-animate');
  const windowHeight = window.innerHeight;

  elements.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;
    const elementBottom = el.getBoundingClientRect().bottom;

    if (elementTop < windowHeight - 50 && elementBottom > 50) {
      el.classList.add('visible');
    } else {
      el.classList.remove('visible');
    }
  });
}

// ✅ Scroll-triggered animation for .animate-text
function revealTextOnScroll() {
  const animatedTexts = document.querySelectorAll('.animate-text');
  const windowHeight = window.innerHeight;

  animatedTexts.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;
    if (elementTop < windowHeight - 50) {
      el.classList.add('visible');
    }
  });
}

// ✅ Event listeners
window.addEventListener('scroll', () => {
  revealOnScroll();
  revealTextOnScroll();
});

window.addEventListener('load', () => {
  revealOnScroll();
  revealTextOnScroll();
});
