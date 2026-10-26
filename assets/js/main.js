// Ekush Sacramento — small interactions (no libraries needed)

// 1. Mobile menu toggle
const toggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.nav-links');
if (toggle && links) {
  toggle.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open);
  });
  // Close the menu after tapping a link
  links.querySelectorAll('a').forEach(a =>
    a.addEventListener('click', () => {
      links.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    })
  );
}

// 2. Auto-update the year in the footer
const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

// 3. Fade sections in as you scroll
const targets = document.querySelectorAll('.section .container');
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); }
    });
  }, { threshold: 0.12 });
  targets.forEach(t => { t.classList.add('reveal'); io.observe(t); });
}
