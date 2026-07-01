// Mobile nav toggle
const burger = document.getElementById('burger');
const nav = document.getElementById('nav');
burger.addEventListener('click', () => nav.classList.toggle('open'));
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));

// Header shrink on scroll
const header = document.querySelector('.site-header');
window.addEventListener('scroll', () => {
  header.style.height = window.scrollY > 40 ? '64px' : '';
  document.querySelector('.header-inner').style.height = window.scrollY > 40 ? '64px' : '';
});

// Lead form (front-end only — plug your backend / Telegram bot into submit)
const form = document.getElementById('leadForm');
const status = document.getElementById('formStatus');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = form.name.value.trim();
  const phone = form.phone.value.trim();
  if (!name || !phone) {
    status.hidden = false;
    status.textContent = 'Заполните имя и телефон.';
    status.style.color = '#e0857a';
    return;
  }
  // TODO: send to your endpoint here (fetch('/api/lead', {...}))
  status.hidden = false;
  status.style.color = 'var(--gold-2)';
  status.textContent = 'Спасибо! Мы свяжемся с вами в ближайшее время.';
  form.reset();
});

// Reveal-on-scroll animation
const io = new IntersectionObserver((entries) => {
  entries.forEach(en => { if (en.isIntersecting) { en.target.style.opacity = 1; en.target.style.transform = 'none'; io.unobserve(en.target); } });
}, { threshold: 0.12 });
document.querySelectorAll('section .container > *, .card, .case, .aud-item').forEach(el => {
  el.style.opacity = 0;
  el.style.transform = 'translateY(24px)';
  el.style.transition = 'opacity .6s ease, transform .6s ease';
  io.observe(el);
});
