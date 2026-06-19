# Arquitectura técnica — Nerego Studio Web

## Decisiones técnicas

### HTML estático vs WordPress
WordPress fue descartado para la versión nueva por las siguientes razones:
- Superficie de ataque enorme (plugins, actualizaciones, bots que escanean `/wp-admin`)
- Rendimiento inferior: PHP + MySQL en cada request vs fichero servido desde caché Nginx
- Complejidad operativa desproporcionada para un sitio de contenido bajo
- Dependencia de Elementor para diseño, que añade JS/CSS no optimizable

El sitio nuevo es HTML/CSS/JS puro. Nginx sirve ficheros estáticos. No hay base de datos, no hay servidor de aplicaciones, no hay superficie de ataque dinámica.

### Sin frameworks CSS (Tailwind, Bootstrap, etc.)
El sitio tiene un sistema de diseño propio muy definido. Los frameworks CSS generan código no usado, dificultan la personalización profunda y añaden una capa de abstracción innecesaria para un proyecto de este tamaño.

Las variables CSS (custom properties) + organización en módulos cubren el 100% de las necesidades.

### Sin frameworks JS (React, Vue, etc.)
El sitio no tiene estado complejo. Las interacciones son:
- Menú móvil (toggle de clase CSS)
- Header sticky (IntersectionObserver o scroll listener)
- Animaciones de entrada (IntersectionObserver)
- Formulario con fetch POST
- Accordion de FAQ (toggle de clase CSS)
- Inyección de texto en el chat

JavaScript vanilla cubre todo esto sin overhead. Tiempo de hidratación: 0ms.

### Lenis para smooth scroll
Lenis (~5KB gzipped) da smooth scroll nativo mejorado sin scroll hijacking. Alternativa al `scroll-behavior: smooth` del navegador, con control más fino para sincronizar con animaciones.

Se usa exclusivamente para esto. No se usa GSAP salvo que Lenis + IntersectionObserver resulten insuficientes para alguna animación específica.

---

## Estructura de archivos

```
src/
├── css/
│   ├── reset.css        # Reset Andy Bell: box-sizing, márgenes, tipografía heredada
│   ├── tokens.css       # Custom properties: colores, tipos, espaciado, sombras, radios
│   ├── base.css         # Estilos globales: body, h1-h6, a, focus, selección
│   ├── components.css   # Botones, cards, badges, accordion, chips, formularios
│   └── sections.css     # Estilos específicos de cada sección del index y subpáginas
└── js/
    ├── main.js          # Inicialización: Lenis, menú móvil, header sticky
    ├── animations.js    # IntersectionObserver, parallax de mockups, stagger
    ├── form.js          # Validación cliente + fetch POST al webhook n8n
    └── cookies.js       # Banner de cookies + gestión de localStorage
```

### Orden de carga de CSS (en cada HTML)
```html
<link rel="stylesheet" href="/css/reset.css">
<link rel="stylesheet" href="/css/tokens.css">
<link rel="stylesheet" href="/css/base.css">
<link rel="stylesheet" href="/css/components.css">
<link rel="stylesheet" href="/css/sections.css">
```

### Orden de carga de JS (al final de `<body>`)
```html
<script src="https://cdn.jsdelivr.net/npm/@studio-freight/lenis@1/bundled/lenis.min.js"></script>
<script src="/js/main.js" defer></script>
<script src="/js/animations.js" defer></script>
```
`form.js` y `cookies.js` se cargan solo en las páginas que los necesitan.

---

## Convenciones CSS

### Metodología: BEM moderno
```css
/* Bloque */
.hero {}

/* Elemento */
.hero__title {}
.hero__subtitle {}
.hero__cta-group {}

/* Modificador */
.hero__cta--primary {}
.hero__cta--secondary {}

/* Estado (preferir sobre modificador cuando es dinámico) */
.header--scrolled {}
.accordion__item--open {}
.nav--open {}
```

### Reglas
- Propiedades en orden: box model → posicionamiento → tipografía → visual → transición
- Custom properties siempre con prefijo `--ns-` (Nerego Studio) o categoría (`--color-`, `--space-`, `--font-`)
- Sin `!important` salvo en reset justificado
- Sin inline styles salvo para valores calculados dinámicamente desde JS (ej: `transform: translateY(${parallaxOffset}px)`)
- Mobile-first: los media queries son `min-width`, no `max-width`

### Media queries
```css
/* Mobile: base (sin query) */
/* Tablet: */
@media (min-width: 768px) {}
/* Desktop: */
@media (min-width: 1024px) {}
/* Desktop XL: */
@media (min-width: 1280px) {}
```

---

## Convenciones JS

- Funciones nombradas, no arrow functions anónimas sueltas en el scope global
- Sin `var`. Usar `const` por defecto, `let` solo cuando la variable muta
- Sin `console.log` en producción
- Sin `document.write()`
- Event listeners siempre con `{ passive: true }` en scroll/touch
- `defer` en todos los scripts excepto los que el usuario necesita antes del primer paint

---

## Dependencias externas

| Librería | Versión | Peso | Justificación |
|----------|---------|------|---------------|
| Lenis | 1.x | ~5KB gz | Smooth scroll con control preciso para sincronizar con parallax |
| Google Fonts (Bricolage Grotesque + Inter) | — | ~30KB gz | Tipografía de sistema de diseño |
| @n8n/chat | latest | ~40KB gz | Widget de chatbot en producción, ya en uso |

Nada más. Sin AOS, sin Animate.css, sin jQuery, sin Axios.
