// =============================================
// GIVU Website — script.js
// =============================================

document.addEventListener('DOMContentLoaded', () => {

  // ── Scroll Reveal ──────────────────────────
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  reveals.forEach(el => observer.observe(el));

  // ── FAQ Accordion ──────────────────────────
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const btn = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');
    if (!btn || !answer) return;

    btn.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      // Close all
      faqItems.forEach(i => {
        i.classList.remove('open');
        const a = i.querySelector('.faq-answer');
        if (a) a.style.maxHeight = '0';
      });
      // Open clicked
      if (!isOpen) {
        item.classList.add('open');
        answer.style.maxHeight = answer.scrollHeight + 'px';
      }
    });
  });

  // ── Mobile Nav ─────────────────────────────
  const hamburger = document.querySelector('.nav-hamburger');
  const navLinks = document.querySelector('.nav-links');
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('mobile-open');
    });
    // Close on link click
    navLinks.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => navLinks.classList.remove('mobile-open'));
    });
  }

  // ── Nav scroll background ──────────────────
  const nav = document.querySelector('nav');
  if (nav) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 40) {
        nav.style.background = 'rgba(10,10,10,0.92)';
      } else {
        nav.style.background = 'rgba(10,10,10,0.6)';
      }
    }, { passive: true });
  }

  // ── Receipt card subtle float ──────────────
  const receiptCards = document.querySelectorAll('.receipt-card');
  receiptCards.forEach((card, i) => {
    const delay = i * 0.4;
    const duration = 3 + i * 0.5;
    const amplitude = 6 + i * 2;
    let start = null;

    function animate(ts) {
      if (!start) start = ts;
      const elapsed = (ts - start) / 1000;
      const y = Math.sin((elapsed + delay) * (2 * Math.PI / duration)) * amplitude;
      const baseRotate = card.classList.contains('rotated-left') ? -1.5 : card.classList.contains('rotated-right') ? 1 : 0;
      card.style.transform = `translateY(${y}px) rotate(${baseRotate}deg)`;
      requestAnimationFrame(animate);
    }
    requestAnimationFrame(animate);
  });

});
