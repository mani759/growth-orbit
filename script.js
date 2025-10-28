// Interactions: mobile nav, accordion, dynamic year, reveal & smooth scroll
document.addEventListener('DOMContentLoaded', function () {
  // Set year
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- Smooth scroll for anchor links ---------- */
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href').slice(1);
      const el = document.getElementById(targetId);
      if (el) {
        e.preventDefault();
        const headerOffset = 70;
        const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - headerOffset;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      }
    });
  });

  /* ---------- Accordion (accessible) ---------- */
  document.querySelectorAll('.acc-btn').forEach(btn => {
    btn.addEventListener('click', function () {
      const panel = this.nextElementSibling;
      const isOpen = panel.style.display === 'block';

      // Close all
      document.querySelectorAll('.acc-panel').forEach(p => p.style.display = 'none');
      document.querySelectorAll('.acc-btn').forEach(b => b.setAttribute('aria-expanded', 'false'));
      document.querySelectorAll('.acc-btn span').forEach(s => s.textContent = '+');

      if (!isOpen) {
        panel.style.display = 'block';
        this.setAttribute('aria-expanded', 'true');
        this.querySelector('span').textContent = '-';

        setTimeout(() => {
          panel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }, 200);
      }
    });
  });

  /* ---------- Reveal on scroll (Intersection Observer) ---------- */
  const revealEls = document.querySelectorAll(
    '.service-card, .compare-card, .team-card, .portrait-card, .why-right-section, .acc-item'
  );

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealEls.forEach(el => revealObserver.observe(el));

  /* ---------- Keyboard accessibility for buttons ---------- */
  document.querySelectorAll('.btn').forEach(b => {
    b.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        b.click();
      }
    });
  });
});
// Interactions: mobile nav, accordion, dynamic year, reveal & smooth scroll
document.addEventListener('DOMContentLoaded', function () {
  // Set year
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- Smooth scroll for anchor links ---------- */
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href').slice(1);
      const el = document.getElementById(targetId);
      if (el) {
        e.preventDefault();
        const headerOffset = 70;
        const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - headerOffset;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      }
    });
  });

  /* ---------- Accordion (accessible) ---------- */
  document.querySelectorAll('.acc-btn').forEach(btn => {
    btn.addEventListener('click', function () {
      const panel = this.nextElementSibling;
      const isOpen = panel.style.display === 'block';

      // Close all
      document.querySelectorAll('.acc-panel').forEach(p => p.style.display = 'none');
      document.querySelectorAll('.acc-btn').forEach(b => b.setAttribute('aria-expanded', 'false'));
      document.querySelectorAll('.acc-btn span').forEach(s => s.textContent = '+');

      if (!isOpen) {
        panel.style.display = 'block';
        this.setAttribute('aria-expanded', 'true');
        this.querySelector('span').textContent = '-';

        setTimeout(() => {
          panel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }, 200);
      }
    });
  });

  /* ---------- Reveal on scroll (Intersection Observer) ---------- */
  const revealEls = document.querySelectorAll(
    '.service-card, .compare-card, .team-card, .portrait-card, .why-right-section, .acc-item'
  );

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealEls.forEach(el => revealObserver.observe(el));

  /* ---------- Keyboard accessibility for buttons ---------- */
  document.querySelectorAll('.btn').forEach(b => {
    b.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        b.click();
      }
    });
  });
});
