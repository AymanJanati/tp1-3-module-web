/* ============================================================
   LUMIÈRE STUDIO — main.js
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ── Mobile nav toggle ── */
  const toggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  if (toggle && navLinks) {
    toggle.addEventListener('click', () => {
      toggle.classList.toggle('open');
      navLinks.classList.toggle('open');
    });
    // close on link click
    navLinks.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        toggle.classList.remove('open');
        navLinks.classList.remove('open');
      });
    });
  }

  /* ── Active nav link ── */
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    const href = a.getAttribute('href').split('/').pop();
    if (href === currentPage) a.classList.add('active');
  });

  /* ── Scroll reveal ── */
  const reveals = document.querySelectorAll('.reveal');
  if (reveals.length) {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          entry.target.style.transitionDelay = `${i * 0.07}s`;
          entry.target.classList.add('visible');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });
    reveals.forEach(el => obs.observe(el));
  }

  /* ── Counter animation ── */
  const counters = document.querySelectorAll('[data-count]');
  if (counters.length) {
    const countObs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = parseInt(el.dataset.count, 10);
          const suffix = el.dataset.suffix || '';
          const duration = 1600;
          const start = performance.now();
          const update = (now) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const ease = 1 - Math.pow(1 - progress, 3);
            el.textContent = Math.floor(ease * target) + suffix;
            if (progress < 1) requestAnimationFrame(update);
          };
          requestAnimationFrame(update);
          countObs.unobserve(el);
        }
      });
    }, { threshold: 0.5 });
    counters.forEach(c => countObs.observe(c));
  }

  /* ── Range input label update ── */
  const ranges = document.querySelectorAll('input[type="range"]');
  ranges.forEach(r => {
    const output = document.getElementById(r.id + '-val');
    if (output) {
      const update = () => {
        const v = parseInt(r.value);
        output.textContent = v >= 1000 ? `${(v/1000).toFixed(0)}k€+` : `${v}€`;
      };
      r.addEventListener('input', update);
      update();
    }
  });

  /* ── File drop label ── */
  const fileInput = document.getElementById('file-upload');
  const fileLabel = document.getElementById('file-label');
  if (fileInput && fileLabel) {
    fileInput.addEventListener('change', () => {
      const name = fileInput.files[0]?.name;
      fileLabel.textContent = name || 'Choisir un fichier';
    });
  }

  /* ── Contact form ── */
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = form.querySelector('button[type="submit"]');
      btn.innerHTML = '<span>Message envoyé ✓</span>';
      btn.style.background = 'rgba(201,168,76,0.2)';
      btn.disabled = true;
      setTimeout(() => {
        btn.innerHTML = '<span>Envoyer le message</span>';
        btn.style.background = '';
        btn.disabled = false;
        form.reset();
      }, 3000);
    });
  }

  /* ── Smooth scroll for anchor links ── */
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  /* ── Nav background on scroll ── */
  const navEl = document.querySelector('nav');
  if (navEl) {
    window.addEventListener('scroll', () => {
      navEl.style.background = window.scrollY > 50
        ? 'rgba(10,10,10,0.98)'
        : 'rgba(10,10,10,0.92)';
    }, { passive: true });
  }

});
