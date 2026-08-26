const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (!reducedMotion && 'IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
} else {
  document.querySelectorAll('.reveal').forEach((el) => el.classList.add('visible'));
}

const menuToggle = document.querySelector('.menu-toggle');
const nav = document.getElementById('primary-nav');
if (menuToggle && nav) {
  const closeMenu = () => {
    nav.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Open navigation');
  };
  menuToggle.addEventListener('click', () => {
    const open = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!open));
    menuToggle.setAttribute('aria-label', open ? 'Open navigation' : 'Close navigation');
    nav.classList.toggle('open', !open);
  });
  nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', (event) => { if (event.key === 'Escape') closeMenu(); });
}

const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightbox-image');
const lightboxCaption = document.getElementById('lightbox-caption');
const lightboxClose = document.querySelector('.lightbox-close');
let lastFocused = null;

function openLightbox(img, caption = '') {
  if (!lightbox || !lightboxImage) return;
  lastFocused = document.activeElement;
  lightboxImage.src = img.currentSrc || img.src;
  lightboxImage.alt = img.alt || '';
  lightboxCaption.textContent = caption;
  lightbox.classList.add('open');
  lightbox.setAttribute('aria-hidden', 'false');
  document.body.classList.add('lightbox-open');
  lightboxClose?.focus();
}
function closeLightbox() {
  if (!lightbox) return;
  lightbox.classList.remove('open');
  lightbox.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('lightbox-open');
  if (lightboxImage) lightboxImage.src = '';
  lastFocused?.focus?.();
}

document.querySelectorAll('.project-main-image').forEach((img) => {
  img.setAttribute('tabindex', '0');
  img.setAttribute('role', 'button');
  img.setAttribute('aria-label', `Open larger preview: ${img.alt}`);
  img.addEventListener('click', () => openLightbox(img));
  img.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openLightbox(img); } });
});

document.querySelectorAll('.project-gallery figure').forEach((figure) => {
  const img = figure.querySelector('img');
  const caption = figure.querySelector('figcaption')?.textContent || '';
  if (!img) return;
  figure.setAttribute('tabindex', '0');
  figure.setAttribute('role', 'button');
  figure.setAttribute('aria-label', `Open larger preview: ${caption || img.alt}`);
  figure.addEventListener('click', () => openLightbox(img, caption));
  figure.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openLightbox(img, caption); } });
});

lightboxClose?.addEventListener('click', closeLightbox);
lightbox?.addEventListener('click', (event) => { if (event.target === lightbox) closeLightbox(); });
document.addEventListener('keydown', (event) => { if (event.key === 'Escape' && lightbox?.classList.contains('open')) closeLightbox(); });
