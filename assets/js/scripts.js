// Smooth scrolling for internal links
const navLinks = document.querySelectorAll('a.nav-link');
navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    if(this.hash !== '') {
      e.preventDefault();
      const target = document.querySelector(this.hash);
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Navbar background change on scroll
const navbar = document.getElementById('mainNav');
window.addEventListener('scroll', () => {
  if(window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});