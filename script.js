// === DARK MODE TOGGLE ===
const themeToggle = document.querySelector('.theme-toggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  themeToggle.textContent = document.body.classList.contains('dark') ? '🌙' : '☀️';
});

// === ANIMASI SCROLL ===
const animatedElements = document.querySelectorAll('.hero-content, .hero-image, .about-content, .about, .menu-item');

function showOnScroll() {
  const triggerBottom = window.innerHeight * 0.85;
  animatedElements.forEach(el => {
    const boxTop = el.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      el.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', showOnScroll);
window.addEventListener('load', showOnScroll);
