// interactions: mobile nav, accordion, dynamic year, subtle reveal & smooth nav
document.addEventListener('DOMContentLoaded', function () {
  // set year
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- Mobile menu ---------- */
  const toggle = document.querySelector('.mobile-toggle');
  toggle && toggle.addEventListener('click', () => {
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', expanded ? 'false' : 'true');

    let menu = document.querySelector('.mobile-menu');
    if (!menu) {
      menu = document.createElement('div');
      menu.className = 'mobile-menu';
      menu.innerHTML = `
        <div class="mobile-menu-inner" role="dialog" aria-modal="true" aria-label="Mobile menu">
          <button class="close-mobile" aria-label="Close menu">✕</button>
          <nav class="mobile-links">
            <a href="#services">Services</a>
            <a href="#why">Why us</a>
            <a href="#why-right">Why we're right</a>
            <a href="#team">Team</a>
            <a href="#faq">FAQ</a>
            <a class="btn primary" href="#contact">Contact us</a>
          </nav>
        </div>
      `;
      document.body.appendChild(menu);
      document.body.classList.add('no-scroll');

      menu.querySelector('.close-mobile').addEventListener('click', () => {
        menu.remove();
        document.body.classList.remove('no-scroll');
        toggle.setAttribute('aria-expanded', 'false');
      });

      // close when link clicked
      menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
        menu.remove();
        document.body.classList.remove('no-scroll');
        toggle.setAttribute('aria-expanded', 'false');
      }));
    } else {
      menu.remove();
      document.body.classList.remove('no-scroll');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });

  /* ---------- Smooth scroll for nav links (offset for sticky header) ---------- */
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href').slice(1);
      const el = document.getElementById(targetId);
      if (el) {
        e.preventDefault();
        const headerOffset = 86; // approximate header height
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
      // close all
      document.querySelectorAll('.acc-panel').forEach(p => p.style.display = 'none');
      document.querySelectorAll('.acc-btn').forEach(b => b.setAttribute('aria-expanded', 'false'));
      document.querySelectorAll('.acc-btn span').forEach(s => s.textContent = '+');
      if (!isOpen) {
        panel.style.display = 'block';
        this.setAttribute('aria-expanded', 'true');
        this.querySelector('span').textContent = '-';
        // scroll panel into view a bit
        setTimeout(() => {
          panel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }, 200);
      }
    });
  });

  /* ---------- Reveal on scroll (simple) ---------- */
  const revealEls = document.querySelectorAll('.service-card, .compare-card, .team-card, .portrait-card, .why-right-section, .acc-item');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = 'translateY(0)';
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealEls.forEach(el => revealObserver.observe(el));

  /* ---------- Small hover polish for CTAs (keyboard accessible) ---------- */
  document.querySelectorAll('.btn').forEach(b => {
    b.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') b.click();
    });
  });
});
