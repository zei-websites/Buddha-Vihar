// ==========================================================================
// Buddha Vihar — site script
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {

  /* ---------- Footer year ---------- */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- Mobile nav toggle ---------- */
  const navToggle = document.getElementById('navToggle');
  const mainNav = document.getElementById('mainNav');

  if (navToggle && mainNav) {
    navToggle.addEventListener('click', () => {
      const isOpen = mainNav.classList.toggle('open');
      navToggle.classList.toggle('open', isOpen);
      navToggle.setAttribute('aria-expanded', String(isOpen));
    });

    // Close nav when a link is tapped (mobile)
    mainNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mainNav.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ---------- Order Online dropdown ---------- */
  const orderDropdown = document.querySelector('.order-dropdown');
  const orderToggle = document.getElementById('orderToggle');

  if (orderDropdown && orderToggle) {
    orderToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = orderDropdown.classList.toggle('open');
      orderToggle.setAttribute('aria-expanded', String(isOpen));
    });

    document.addEventListener('click', (e) => {
      if (!orderDropdown.contains(e.target)) {
        orderDropdown.classList.remove('open');
        orderToggle.setAttribute('aria-expanded', 'false');
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        orderDropdown.classList.remove('open');
        orderToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* ---------- Sticky header shadow on scroll ---------- */
  const header = document.getElementById('siteHeader');
  if (header) {
    const onScroll = () => {
      header.style.boxShadow = window.scrollY > 8 ? '0 0.3rem 1rem rgba(18,49,40,0.10)' : 'none';
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ---------- Gallery lightbox ---------- */
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxClose = document.getElementById('lightboxClose');
  const celebItems = document.querySelectorAll('.celeb-item');

  const openLightbox = (src, alt) => {
    if (!lightbox || !lightboxImg) return;
    lightboxImg.src = src;
    lightboxImg.alt = alt || '';
    lightbox.classList.add('open');
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    if (!lightbox) return;
    lightbox.classList.remove('open');
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  celebItems.forEach(item => {
    item.addEventListener('click', () => {
      const img = item.querySelector('img');
      openLightbox(item.dataset.full, img ? img.alt : '');
    });
  });

  if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
  if (lightbox) {
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) closeLightbox();
    });
  }
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeLightbox();
  });

  /* ---------- Scroll reveal ---------- */
  const revealTargets = document.querySelectorAll(
    '.offer-card, .about-copy, .about-media, .visit-card, .celeb-item'
  );
  revealTargets.forEach(el => el.classList.add('reveal'));

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    revealTargets.forEach(el => observer.observe(el));
  } else {
    revealTargets.forEach(el => el.classList.add('in-view'));
  }

});
