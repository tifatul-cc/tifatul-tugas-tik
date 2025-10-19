// Toggle sidebar / menu mobile
const menuToggle = document.querySelector('.menu-toggle');
const sidebar = document.querySelector('.sidebar');

menuToggle.addEventListener('click', () => {
  sidebar.classList.toggle('active');
});

// Smooth scroll ke section ketika klik link navbar
document.querySelectorAll('.nav-links a, .sidebar nav a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop - 60,  // 60 untuk offset navbar
        behavior: 'smooth'
      });
    }
    // tutup sidebar kalau mobile
    sidebar.classList.remove('active');
  });
});
