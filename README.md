# Nerego Studio — Web Corporativa

Sitio web estático de **Nerego Studio** (neregostudio.com), agencia consultora de IA y Ciberseguridad para negocios locales en España.

Reemplaza la instalación anterior en WordPress + Elementor. Desplegado como HTML/CSS/JS estático en Easypanel + Nginx.

---

## Sobre el proyecto

Nerego Studio ofrece dos servicios secuenciales:

1. **Diagnóstico Inteligente de Negocio** — Auditoría de procesos, oportunidades de IA y revisión de ciberseguridad. Entregable en Notion.
2. **Implementación y orquestación** — Ejecución del roadmap. El cliente no toca nada técnico.

**Bonificación clave:** si el cliente contrata implementación en los 30 días posteriores al diagnóstico, el coste del diagnóstico se descuenta al 100%.

---

## Stack técnico

- HTML5 semántico
- CSS3 puro con custom properties (sin frameworks)
- JavaScript vanilla (sin frameworks)
- Lenis (smooth scroll, ~5KB)
- Google Fonts vía `<link>` con `display=swap`
- SVG inline para iconografía y mockups
- Nginx para servir estático y gestionar redirecciones 301
- Easypanel para hosting y SSL

---

## Estructura de carpetas

```
neregostudio-web/
├── README.md
├── .gitignore
├── docs/
│   ├── 01-arquitectura.md          # Decisiones técnicas y convenciones
│   ├── 02-diseno-tokens.md         # Sistema de diseño completo
│   ├── 03-deploy-easypanel.md      # Guía de despliegue
│   ├── 04-migracion-wordpress.md   # Plan de migración y swap de dominio
│   ├── 05-redirecciones-301.md     # Mapa de URLs y config Nginx
│   ├── 06-backup-wordpress.md      # Procedimiento de backup WP
│   └── 07-verificacion-postmigracion.md  # Checklist post-swap
├── src/
│   ├── index.html                  # Landing principal
│   ├── diagnostico.html            # Formulario de onboarding
│   ├── blog/
│   │   ├── index.html              # Listado de posts
│   │   ├── responder-resenas-google.html
│   │   └── citas-peluqueria-whatsapp.html
│   ├── css/
│   │   ├── reset.css               # Reset moderno (Andy Bell)
│   │   ├── tokens.css              # Variables CSS (colores, tipos, espaciado)
│   │   ├── base.css                # Estilos globales: body, headings, links
│   │   ├── components.css          # Componentes reutilizables: botones, cards, badges
│   │   └── sections.css            # Secciones específicas de página
│   ├── js/
│   │   ├── main.js                 # Menú móvil, header sticky, inicialización Lenis
│   │   ├── animations.js           # Intersection Observer, entradas, parallax
│   │   ├── form.js                 # Validación y envío del formulario diagnóstico
│   │   └── cookies.js              # Banner de cookies (localStorage)
│   └── assets/
│       ├── images/
│       ├── videos/
│       └── svg/
│           ├── mockups/            # Mockups SVG de los productos
│           ├── icons/              # Iconos SVG de Lucide copiados inline
│           └── logos/              # Logo Nerego Studio
├── nginx/
│   ├── nginx.conf                  # Configuración principal Nginx
│   └── redirects.conf              # Redirecciones 301 desde URLs de WordPress
├── easypanel/
│   └── deploy-config.md            # Configuración específica de Easypanel
└── backup/
    └── .gitkeep                    # Carpeta de backups WP (excluida del repo)
```

---

## Levantar el proyecto en local

No hay proceso de build. Sirve `src/` directamente:

```bash
# Opción 1: Python (disponible en cualquier sistema)
cd src
python -m http.server 3000
# → http://localhost:3000

# Opción 2: Node (si tienes npx)
npx serve src -p 3000

# Opción 3: VS Code Live Server
# Clic derecho en src/index.html → "Open with Live Server"
```

---

## Despliegue

### Staging
1. Rama `main` → Easypanel proyecto `neregostudio-staging`
2. Dominio: `staging.neregostudio.com`
3. Ver `docs/03-deploy-easypanel.md` para pasos detallados

### Producción
1. Swap de dominio en Easypanel: `neregostudio.com` al nuevo proyecto
2. Ver `docs/04-migracion-wordpress.md` para el plan completo de migración

---

## Convenciones de código

Ver `docs/01-arquitectura.md` para la referencia completa.

**CSS:** BEM moderno. Clases en kebab-case. Bloques descriptivos del componente.
```
.hero {}
.hero__title {}
.hero__cta {}
.hero__cta--primary {}
```

**JS:** Funciones nombradas, no arrow functions anónimas sueltas. Módulos por responsabilidad. Sin `console.log` en producción.

**Git:** Commits convencionales (`feat:`, `fix:`, `docs:`, `chore:`, `style:`, `refactor:`).

---

## Roadmap del proyecto

| Fase | Descripción | Estado |
|------|-------------|--------|
| 0 | Setup estructura + git | ✅ Completo |
| 1 | Sistema de diseño (tokens, reset, base) | ⏳ Pendiente |
| 2 | Header + Hero | ⏳ Pendiente |
| 3 | Pain points + Ofertas + Bonificación | ⏳ Pendiente |
| 4 | Cómo funciona + Por qué Nerego | ⏳ Pendiente |
| 5 | Lo que construimos (4 mockups SVG) | ⏳ Pendiente |
| 6 | Demo en vivo (Neregón embebido) | ⏳ Pendiente |
| 7 | Casos + Sobre Joaquín + FAQ + Footer | ⏳ Pendiente |
| 8 | JS y animaciones globales | ⏳ Pendiente |
| 9 | diagnostico.html + formulario n8n | ⏳ Pendiente |
| 10 | Blog (2 posts rescatados) | ⏳ Pendiente |
| 11 | SEO y Schema markup | ⏳ Pendiente |
| 12 | Setup Easypanel staging | ⏳ Pendiente |
| 13 | Auditoría Lighthouse + ajustes | ⏳ Pendiente |
| 14 | Backup WordPress completo | ⏳ Pendiente |
| 15 | Nginx + redirecciones 301 | ⏳ Pendiente |
| 16 | Swap de dominios | ⏳ Pendiente |
| 17 | Verificación post-migración | ⏳ Pendiente |
| 18 | Apagado de WordPress | ⏳ Pendiente |

---

## Comandos útiles

```bash
# Ver estado del repo
git status

# Verificar redirecciones (cuando Nginx esté activo)
curl -I https://neregostudio.com/2026/05/24/como-responder-resenas-de-google-automaticamente-sin-perder-tiempo/

# Test del webhook n8n (datos dummy)
curl -X POST https://neregostudio.com/captacion-leads-v2 \
  -H "Content-Type: application/json" \
  -d '{"nombre":"Test","email":"test@test.com","negocio":"Test"}'
```

---

## Contacto

**Joaquín** · Fundador Nerego Studio · Murcia, España
nerego.ai@gmail.com · [LinkedIn](https://linkedin.com/in/joaquin-nerego)
