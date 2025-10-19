// Animasi scroll muncul halus
const cards = document.querySelectorAll('.menu-card');

window.addEventListener('scroll', () => {
  const triggerBottom = window.innerHeight * 0.8;
  cards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;
    if (cardTop < triggerBottom) {
      card.classList.add('show');
    }
  });
});

// Tambah efek animasi saat muncul
cards.forEach(card => {
  card.style.opacity = 0;
  card.style.transition = 'all 0.8s ease';
});

document.addEventListener('scroll', () => {
  cards.forEach(card => {
    const pos = card.getBoundingClientRect().top;
    if (pos < window.innerHeight * 0.8) {
      card.style.opacity = 1;
      card.style.transform = 'translateY(0)';
    }
  });
});
