document.addEventListener('DOMContentLoaded', () => {

  // ---- Scroll Reveal ----
  const revealEls = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  revealEls.forEach(el => revealObserver.observe(el));

  // ---- Nav scroll border ----
  const nav = document.getElementById('nav');
  const handleScroll = () => {
    nav.classList.toggle('scrolled', window.scrollY > 24);
  };
  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // ---- FAQ Accordion ----
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const answer = item.querySelector('.faq-answer');
      const isOpen = item.classList.contains('open');

      // Close all
      document.querySelectorAll('.faq-item.open').forEach(openItem => {
        openItem.classList.remove('open');
        openItem.querySelector('.faq-answer').style.maxHeight = null;
      });

      // Toggle clicked
      if (!isOpen) {
        item.classList.add('open');
        answer.style.maxHeight = answer.scrollHeight + 'px';
      }
    });
  });

  // ---- Mobile Nav ----
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');
  hamburger?.addEventListener('click', () => {
    navLinks.classList.toggle('mobile-open');
  });
  navLinks?.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => navLinks.classList.remove('mobile-open'));
  });

  // ---- Hero Slideshow ----
  const slides = document.querySelectorAll('.slide');
  if (slides.length > 1) {
    let current = 0;
    setInterval(() => {
      slides[current].classList.remove('active');
      current = (current + 1) % slides.length;
      slides[current].classList.add('active');
    }, 5000);
  }

  // ---- Themes drag-scroll ----
  const scroll = document.getElementById('themesScroll');
  if (scroll) {
    let isDragging = false;
    let startX = 0;
    let startScroll = 0;

    scroll.addEventListener('mousedown', e => {
      isDragging = true;
      startX = e.pageX - scroll.offsetLeft;
      startScroll = scroll.scrollLeft;
      scroll.style.cursor = 'grabbing';
    });
    window.addEventListener('mouseup', () => {
      isDragging = false;
      scroll.style.cursor = 'grab';
    });
    scroll.addEventListener('mouseleave', () => {
      isDragging = false;
      scroll.style.cursor = 'grab';
    });
    scroll.addEventListener('mousemove', e => {
      if (!isDragging) return;
      e.preventDefault();
      const x = e.pageX - scroll.offsetLeft;
      scroll.scrollLeft = startScroll - (x - startX) * 1.3;
    });
  }

});
