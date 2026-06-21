// main.js — Lenis, header sticky, menú móvil, animación hero, parallax mockup

(function () {
  'use strict';

  // -------------------------------------------------------------------------
  // UTILIDAD: preferencia de movimiento reducido
  // -------------------------------------------------------------------------

  function prefersReducedMotion() {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }

  // -------------------------------------------------------------------------
  // LENIS — SMOOTH SCROLL
  // Inicializa Lenis si está disponible. El RAF loop es necesario para que
  // Lenis interpole el scroll en cada frame.
  // -------------------------------------------------------------------------

  function initLenis() {
    if (typeof Lenis === 'undefined') return;

    var lenis = new Lenis({
      lerp: 0.08,
      smoothWheel: true
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }

  // -------------------------------------------------------------------------
  // HEADER STICKY
  // Observa un sentinel div en la parte superior de la página.
  // Cuando sale del viewport → clase .header--scrolled.
  // -------------------------------------------------------------------------

  function initStickyHeader() {
    var header = document.getElementById('header');
    var sentinel = document.getElementById('scroll-sentinel');
    if (!header || !sentinel) return;

    var observer = new IntersectionObserver(
      function (entries) {
        header.classList.toggle('header--scrolled', !entries[0].isIntersecting);
      },
      { threshold: 0 }
    );

    observer.observe(sentinel);
  }

  // -------------------------------------------------------------------------
  // MENÚ MÓVIL
  // Toggle overlay, focus trap, Escape, aria-expanded, bloqueo scroll body.
  // -------------------------------------------------------------------------

  function initMobileMenu() {
    var hamburger = document.getElementById('hamburger-btn');
    var overlay   = document.getElementById('mobile-menu');
    if (!hamburger || !overlay) return;

    var isOpen = false;

    function getFocusableElements() {
      return Array.from(overlay.querySelectorAll(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
      ));
    }

    function openMenu() {
      isOpen = true;
      overlay.classList.add('is-open');
      hamburger.classList.add('is-open');
      hamburger.setAttribute('aria-expanded', 'true');
      overlay.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';

      // Focus al primer enlace tras la transición
      setTimeout(function () {
        var focusable = getFocusableElements();
        if (focusable.length) focusable[0].focus();
      }, 100);
    }

    function closeMenu() {
      isOpen = false;
      overlay.classList.remove('is-open');
      hamburger.classList.remove('is-open');
      hamburger.setAttribute('aria-expanded', 'false');
      overlay.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
      hamburger.focus();
    }

    // Botón hamburguesa
    hamburger.addEventListener('click', function () {
      if (isOpen) { closeMenu(); } else { openMenu(); }
    });

    // Escape cierra el overlay
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && isOpen) { closeMenu(); }
    });

    // Focus trap dentro del overlay
    overlay.addEventListener('keydown', function (e) {
      if (e.key !== 'Tab') return;
      var focusable = getFocusableElements();
      if (!focusable.length) return;
      var first = focusable[0];
      var last  = focusable[focusable.length - 1];

      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    });

    // Clic en enlace del overlay cierra el menú
    overlay.querySelectorAll('.nav-overlay__link, .nav-overlay__cta').forEach(function (el) {
      el.addEventListener('click', closeMenu);
    });
  }

  // -------------------------------------------------------------------------
  // HERO — ANIMACIÓN PALABRA A PALABRA
  // Divide el H1 en spans por palabra, anima con CSS transitions y delays.
  // -------------------------------------------------------------------------

  function initHeroAnimation() {
    if (prefersReducedMotion()) return;

    var eyebrow  = document.querySelector('.hero__eyebrow');
    var title    = document.querySelector('.hero__title');
    var subhead  = document.querySelector('.hero__subhead');
    var ctaGroup = document.querySelector('.hero__cta-group');
    var micro    = document.querySelector('.hero__microcopy');
    var visual   = document.querySelector('.hero__visual');

    // --- Divide el H1 en <span class="hero__word"> por palabra ---
    var numWords = 0;
    if (title) {
      var words = title.textContent.trim().split(/\s+/);
      numWords = words.length;
      title.innerHTML = words.map(function (word) {
        return '<span class="hero__word">' + word + '</span>';
      }).join(' ');
    }

    // Easing compartida
    var ease = 'cubic-bezier(0.16,1,0.3,1)';

    // Función helper: aplica estado inicial y programa la transición
    function animateIn(el, fromY, delay, duration) {
      if (!el) return;
      el.style.opacity   = '0';
      el.style.transform = 'translateY(' + fromY + 'px)';
      el.style.transition =
        'opacity '   + duration + 'ms ' + ease + ' ' + delay + 'ms,' +
        'transform ' + duration + 'ms ' + ease + ' ' + delay + 'ms';
    }

    function triggerIn(el) {
      if (!el) return;
      el.style.opacity   = '1';
      el.style.transform = 'translateY(0)';
    }

    // --- Configurar estados iniciales ---
    animateIn(eyebrow, 12, 0, 400);

    if (title) {
      title.querySelectorAll('.hero__word').forEach(function (word, i) {
        word.style.opacity   = '0';
        word.style.transform = 'translateY(24px)';
        var delay = 80 + i * 50;
        word.style.transition =
          'opacity 600ms '   + ease + ' ' + delay + 'ms,' +
          'transform 600ms ' + ease + ' ' + delay + 'ms';
      });
    }

    var lastWordDelay = 80 + (numWords - 1) * 50;
    var subheadDelay  = lastWordDelay + 280;
    var ctaDelay      = subheadDelay  + 240;

    animateIn(subhead,  16, subheadDelay, 500);
    animateIn(ctaGroup, 12, ctaDelay,     400);
    animateIn(micro,    12, ctaDelay + 60, 400);
    animateIn(visual,   40, 200,           800);

    // --- Disparar animaciones en el siguiente frame de pintura ---
    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        triggerIn(eyebrow);
        if (title) {
          title.querySelectorAll('.hero__word').forEach(triggerIn);
        }
        triggerIn(subhead);
        triggerIn(ctaGroup);
        triggerIn(micro);
        triggerIn(visual);
      });
    });

    // Limpiar transition del visual una vez completada la entrada
    // para que el parallax no la herede
    if (visual) {
      setTimeout(function () {
        visual.style.transition = '';
      }, 1200);
    }
  }

  // -------------------------------------------------------------------------
  // HERO — PARALLAX SUTIL DEL MOCKUP
  // Desplaza .hero__visual a un ritmo distinto al scroll (±30px máximo).
  // -------------------------------------------------------------------------

  function initHeroParallax() {
    if (prefersReducedMotion()) return;

    var visual = document.querySelector('.hero__visual');
    var hero   = document.querySelector('.hero');
    if (!visual || !hero) return;

    var ticking = false;

    function updateParallax() {
      var rect   = hero.getBoundingClientRect();
      var inView = rect.bottom > 0 && rect.top < window.innerHeight;
      if (!inView) { ticking = false; return; }

      var progress = -rect.top / rect.height;          // 0 → 1 mientras el hero sale por arriba
      var offset   = progress * 60 - 30;               // rango −30px a +30px
      offset = Math.max(-30, Math.min(30, offset));

      visual.style.transform = 'translateY(' + offset + 'px)';
      ticking = false;
    }

    window.addEventListener('scroll', function () {
      if (!ticking) {
        requestAnimationFrame(updateParallax);
        ticking = true;
      }
    }, { passive: true });
  }

  // -------------------------------------------------------------------------
  // INIT
  // -------------------------------------------------------------------------

  document.addEventListener('DOMContentLoaded', function () {
    initLenis();
    initStickyHeader();
    initMobileMenu();
    initHeroAnimation();
    initHeroParallax();
  });

}());
