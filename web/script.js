// Toggle mobile menu
function toggleMenu() {
  const nav = document.getElementById("navlinks");
  const toggleBtn = document.getElementById("menuToggle");
  nav.classList.toggle("active");
  toggleBtn.textContent = nav.classList.contains("active") ? "✖" : "☰";
}

// Slideshow logic
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

// Scroll-triggered animation (repeats on scroll)
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

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);
