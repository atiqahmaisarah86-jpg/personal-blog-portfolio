document.addEventListener('DOMContentLoaded', () => {
  const body = document.body;
  const themeToggle = document.querySelector('.theme-toggle');
  const savedTheme = localStorage.getItem('portfolio-theme');

  if (savedTheme === 'dark') {
    body.classList.add('dark');
  }

  themeToggle?.addEventListener('click', () => {
    body.classList.toggle('dark');
    localStorage.setItem('portfolio-theme', body.classList.contains('dark') ? 'dark' : 'light');
  });

  const revealTargets = document.querySelectorAll('.card, .hero-content, .page-header');
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealTargets.forEach((el) => observer.observe(el));

  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  document.querySelectorAll('.nav-links a').forEach((link) => {
    if (link.href === window.location.href) {
      link.classList.add('active');
    }
  });

  const hero = document.querySelector('.hero');
  if (hero) {
    hero.addEventListener('mousemove', (event) => {
      const x = (event.clientX / window.innerWidth) * 100;
      const y = (event.clientY / window.innerHeight) * 100;
      hero.style.setProperty('--mx', `${x}%`);
      hero.style.setProperty('--my', `${y}%`);
      hero.style.background = `radial-gradient(circle at ${x}% ${y}%, rgba(255,255,255,0.12), rgba(7,17,32,0.65) 35%, rgba(7,17,32,0.95) 100%), linear-gradient(135deg, #7c5cff 0%, #00d4ff 45%, #ff6ec7 100%)`;
    });

    hero.addEventListener('mouseleave', () => {
      hero.style.background = 'linear-gradient(135deg, rgba(7,17,32,0.88), rgba(7,17,32,0.52)), linear-gradient(120deg, #7c5cff 0%, #00d4ff 45%, #ff6ec7 100%)';
    });
  }
});
