# Nerego Studio — Web Corporativa

Sitio web estático de **Nerego Studio** (neregostudio.com), agencia de automatización e IA para negocios locales en España. Nicho prioritario: barberías y peluquerías.

Reemplaza la instalación anterior en WordPress + Elementor. Desplegado como HTML/CSS/JS estático en Easypanel + Nginx.

---

## Sobre el proyecto

Nerego Studio ayuda a negocios locales (barberías, clínicas, restaurantes, fisioterapeutas) a llenar su agenda y recuperar clientes sin esfuerzo, usando WhatsApp automatizado e inteligencia artificial.

### Tres productos concretos

1. **Sistema de Reactivación** — Recupera clientes inactivos con mensajes automáticos por WhatsApp.
2. **Vendedor Digital 24/7** — Agente IA que responde, agenda citas y gestiona reservas por WhatsApp.
3. **Cerebro de Negocio** — Informes semanales automáticos con datos reales del negocio.

### Tres niveles de precio

- **Esencial** (~120 €/mes) — Reactivación + WhatsApp básico.
- **Acelerador** (~220 €/mes) — + Vendedor Digital 24/7.
- **Premium** (~350 €/mes) — + Cerebro de Negocio + soporte prioritario.
- Setup inicial: ~150 € (una vez).

---

## Stack técnico

- HTML5 semántico
- CSS3 puro con custom properties (sin frameworks)
- JavaScript vanilla (sin frameworks)
- Lenis (smooth scroll, ~5 KB)
- Google Fonts vía `<link>` con `display=swap`
- SVG inline para iconografía y mockups
- Nginx para servir estático y gestionar redirecciones 301
- Easypanel para hosting y SSL

---

## Estructura de carpetas

```
neregostudio-web/
├── README.md
├── CLAUDE.md                       # Instrucciones para Claude Code
├── .gitignore
├── docs/
│   ├── 01-arquitectura.md          # Decisiones técnicas y convenciones
│   ├── 02-diseno-tokens.md         # Sistema de diseño completo
│   ├── 03-deploy-easypanel.md      # Guía de despliegue
│   ├── 04-migracion-wordpress.md   # Plan de migración y swap de dominio
│   ├── 05-redirecciones-301.md     # Mapa de URLs y config Nginx
│   ├── 06-backup-wordpress.md      # Procedimiento de backup WP
│   └── 07-verificacion-postmigracion.md
├── src/
│   ├── index.html                  # Landing principal
│   ├── diagnostico.html            # Formulario de consulta gratuita
│   ├── blog/
│   │   ├── index.html
│   │   ├── responder-resenas-google.html
│   │   └── citas-peluqueria-whatsapp.html
│   ├── css/
│   │   ├── reset.css               # Reset moderno (Andy Bell)
│   │   ├── tokens.css              # Variables CSS (colores, tipos, espaciado)
│   │   ├── base.css                # Estilos globales
│   │   ├── components.css          # Botones, cards, badges
│   │   └── sections.css            # Secciones específicas de página
│   ├── js/
│   │   ├── main.js                 # Menú móvil, header sticky, Lenis
│   │   ├── animations.js           # Intersection Observer, parallax
│   │   ├── form.js                 # Validación y envío formulario
│   │   └── cookies.js              # Banner de cookies
│   └── assets/
│       ├── images/
│       ├── videos/
│       └── svg/
│           ├── mockups/            # Mockups SVG (móvil, WhatsApp, dashboard)
│           ├── icons/              # Iconos Lucide inline
│           └── logos/              # Logo Nerego Studio
├── nginx/
│   ├── nginx.conf
│   └── redirects.conf              # Redirecciones 301 desde WordPress
├── easypanel/
│   └── deploy-config.md
└── backup/
    └── .gitkeep
```

---

## Levantar el proyecto en local

No hay proceso de build. Sirve `src/` directamente:

```bash
# Python
cd src
python -m http.server 3000
# → http://localhost:3000

# Node
npx serve src -p 3000

# VS Code Live Server
# Clic derecho en src/index.html → "Open with Live Server"
```

---

## Despliegue

### Staging
1. Rama `main` → Easypanel proyecto `neregostudio-staging`
2. Dominio: `staging.neregostudio.com`
3. Ver `docs/03-deploy-easypanel.md`

### Producción
1. Swap de dominio en Easypanel: `neregostudio.com` al nuevo proyecto
2. Ver `docs/04-migracion-wordpress.md`

---

## Convenciones de código

Ver `docs/01-arquitectura.md` para referencia completa.

**CSS:** BEM moderno, kebab-case, bloques descriptivos.
```
.hero {}
.hero__title {}
.hero__cta--primary {}
```

**JS:** Funciones nombradas, módulos por responsabilidad, sin `console.log` en producción.

**Git:** Commits convencionales (`feat:`, `fix:`, `docs:`, `chore:`, `style:`, `refactor:`).

---

## Roadmap del proyecto

| Fase | Descripción | Estado |
|------|-------------|--------|
| 0 | Setup estructura + git | ✅ Completo |
| 1 | Sistema de diseño (tokens, reset, base) | ✅ Completo |
| 2 | Header + Hero | ⏳ En curso |
| 3 | Sección Problema (pains del dueño) | ⏳ Pendiente |
| 4 | Sección Solución (3 productos) | ⏳ Pendiente |
| 5 | Sección Cómo funciona (3 pasos) | ⏳ Pendiente |
| 6 | Sección Caso real / Demo (mockup WhatsApp) | ⏳ Pendiente |
| 7 | Sección Nichos (grid de sectores) | ⏳ Pendiente |
| 8 | Sección Precios (3 niveles) | ⏳ Pendiente |
| 9 | Sección Sobre Nerego + FAQ | ⏳ Pendiente |
| 10 | CTA final + Footer | ⏳ Pendiente |
| 11 | JS y animaciones globales | ⏳ Pendiente |
| 12 | Formulario consulta (form.js + webhook n8n) | ⏳ Pendiente |
| 13 | Blog (2 posts rescatados) | ⏳ Pendiente |
| 14 | SEO y Schema markup | ⏳ Pendiente |
| 15 | Setup Easypanel staging | ⏳ Pendiente |
| 16 | Auditoría Lighthouse + ajustes | ⏳ Pendiente |
| 17 | Backup WordPress completo | ⏳ Pendiente |
| 18 | Nginx + redirecciones 301 | ⏳ Pendiente |
| 19 | Swap de dominios | ⏳ Pendiente |
| 20 | Verificación post-migración | ⏳ Pendiente |
| 21 | Apagado de WordPress | ⏳ Pendiente |

---

## Comandos útiles

```bash
# Estado del repo
git status

# Verificar redirecciones (cuando Nginx esté activo)
curl -I https://neregostudio.com/2026/05/24/como-responder-resenas-de-google-automaticamente-sin-perder-tiempo/

# Test webhook n8n
curl -X POST https://neregostudio.com/captacion-leads-v2 \
  -H "Content-Type: application/json" \
  -d '{"nombre":"Test","email":"test@test.com","negocio":"Test"}'
```

---

## Contacto

**Joaquín** · Fundador Nerego Studio · Murcia, España
nerego.ai@gmail.com · [LinkedIn](https://linkedin.com/in/joaquin-hernandez-54a5493b4)
