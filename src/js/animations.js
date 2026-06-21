// animations.js — Scroll reveals con IntersectionObserver

(function () {
  'use strict';

  // -------------------------------------------------------------------------
  // UTILIDAD
  // -------------------------------------------------------------------------

  function prefersReducedMotion() {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }

  // -------------------------------------------------------------------------
  // SCROLL REVEAL
  // Añade .js-reveal (y --reveal-delay para stagger) a los elementos
  // seleccionados, luego observa con IntersectionObserver. Al entrar al
  // viewport añade .is-revealed, que dispara la transición CSS.
  // -------------------------------------------------------------------------

  function setupReveal(el, delayMs) {
    el.classList.add('js-reveal');
    if (delayMs > 0) {
      el.style.setProperty('--reveal-delay', delayMs + 'ms');
    }
  }

  function initScrollReveal() {
    if (prefersReducedMotion()) return;

    // Cabeceras de sección — fade up individual, sin stagger
    var headerSelectors = [
      '.pains__header',
      '.solution__header',
      '.how__header',
      '.niches__header',
      '.pricing__header',
      '.about__content',
      '.faq__header',
      '.cta-final__inner'
    ];

    headerSelectors.forEach(function (sel) {
      document.querySelectorAll(sel).forEach(function (el) {
        setupReveal(el, 0);
      });
    });

    // Grids de cards — stagger de 80ms entre ítems, máximo 400ms
    var staggerSelectors = [
      '.pain-card',
      '.pillar-card',
      '.how-step',
      '.niche-card',
      '.pricing-card',
      '.faq-item'
    ];

    staggerSelectors.forEach(function (sel) {
      document.querySelectorAll(sel).forEach(function (el, i) {
        setupReveal(el, Math.min(i * 80, 400));
      });
    });

    // Observar todos los elementos preparados
    var reveals = document.querySelectorAll('.js-reveal');
    if (!reveals.length) return;

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            observer.unobserve(entry.target); // dispara una sola vez
          }
        });
      },
      {
        threshold: 0.08,
        rootMargin: '0px 0px -40px 0px'
      }
    );

    reveals.forEach(function (el) { observer.observe(el); });
  }

  // -------------------------------------------------------------------------
  // INIT
  // -------------------------------------------------------------------------

  document.addEventListener('DOMContentLoaded', function () {
    initScrollReveal();
  });

}());
