# CLAUDE.md — Nerego Studio (web corporativa)

> Instrucciones de proyecto para Claude Code. Léelas antes de tocar cualquier archivo.
> Si algo de aquí choca con lo que te pido en el chat, pregúntame antes de asumir.

---

## Qué es este proyecto

Sitio web **estático** de Nerego Studio (neregostudio.com), agencia de
automatización e IA para **negocios locales en España** (barberías, peluquerías,
clínicas, fisioterapeutas, restaurantes, etc.).

Reemplaza una instalación anterior en WordPress + Elementor. Se sirve como
HTML/CSS/JS estático en **Easypanel + Nginx**. **No reintroduzcas WordPress.**

---

## El negocio (úsalo para copy, textos y SEO)

### Público objetivo

Dueños de negocios locales con 1–10 empleados en España. Gente práctica que
necesita resultados, no tecnología. **Nicho prioritario: barberías y peluquerías.**
Nichos secundarios: clínicas dentales, fisioterapia, restaurantes, centros de
estética, transporte local, academias.

### Qué ofrece Nerego Studio

Tres productos concretos de automatización:

1. **Sistema de Reactivación** — Recupera clientes inactivos con mensajes
   automáticos por WhatsApp. El negocio deja de perder clientes que ya tenía.
2. **Vendedor Digital 24/7** — Agente IA que responde, agenda citas y gestiona
   reservas por WhatsApp a cualquier hora. El negocio no pierde clientes por no
   contestar.
3. **Cerebro de Negocio** — Informes semanales automáticos con datos reales del
   negocio (citas, ingresos, clientes nuevos vs recurrentes). El dueño sabe qué
   pasa sin preguntar.

### Estructura de precios (tres niveles)

- **Esencial** (~120 €/mes) — Reactivación + WhatsApp básico.
- **Acelerador** (~220 €/mes) — Todo lo anterior + Vendedor Digital 24/7.
- **Premium** (~350 €/mes) — Todo lo anterior + Cerebro de Negocio + soporte
  prioritario.
- Setup inicial: ~150 € (una vez).

### Entrada al cliente

La web y una demo de WhatsApp son las puertas de entrada. No se vende un
"diagnóstico" como producto separado aquí. Se ofrece una **consulta gratuita**
donde se analiza el negocio y se propone el plan. El objetivo es que el dueño
vea rápido cómo funcionaría en su negocio.

### Tono y lenguaje

- **Directo, cálido, sin jerga técnica.** Habla como le hablarías al dueño de
  la barbería de tu barrio.
- Nada de "IA", "automatización", "stack tecnológico" en el copy visible.
  Usa: "tu negocio lleno", "clientes que vuelven solos", "reservas sin llamadas",
  "saber qué pasa en tu negocio sin preguntar".
- **No uses "caso piloto"** — es un término que resta credibilidad.
- Ejemplos siempre concretos: "Tu cliente Luis no viene hace 2 meses. Recibe
  un WhatsApp recordándole que tiene un descuento. Reserva esa misma tarde."

Fundador: **Joaquín** · Murcia, España · nerego.ai@gmail.com

---

## Stack — reglas innegociables

- HTML5 **semántico**.
- **CSS3 puro** con custom properties. ❌ NADA de frameworks CSS (ni Tailwind, ni
  Bootstrap, ni similares).
- **JavaScript vanilla**. ❌ NADA de frameworks JS (ni React, ni Vue, ni similares).
- **Lenis** para smooth scroll (~5 KB), ya incluido. No añadas otra librería de scroll.
- Google Fonts vía `<link>` con `display=swap`.
- **SVG inline** para iconografía y mockups.
- **Sin proceso de build.** Se sirve `src/` directamente.
- No añadas dependencias pesadas sin proponérmelo antes.

---

## Sistema de diseño (Fase 1 completada)

Paleta y tipografía ya definidas en `src/css/tokens.css`:

- **Color primario:** Azul tinta (ink blue) — profesional, confianza.
- **Color acento:** Terracota — calidez, cercanía, local.
- **Tipografía display:** Bricolage Grotesque — personalidad sin ser genérica.
- **Tipografía body:** según tokens.css.

**Usa siempre las variables de `tokens.css`.** No inventes colores ni tamaños.

---

## Convenciones de código

**CSS:** BEM moderno, clases en kebab-case, bloques descriptivos del componente.
```
.hero {}
.hero__title {}
.hero__cta {}
.hero__cta--primary {}
```

**JS:** funciones nombradas (no arrow functions anónimas sueltas), módulos por
responsabilidad, **sin `console.log` en producción**.

**Git:** commits convencionales → `feat:`, `fix:`, `docs:`, `chore:`, `style:`, `refactor:`.

---

## Dónde está todo

Documentación en `docs/`:

- `docs/01-arquitectura.md` — decisiones técnicas y convenciones
- `docs/02-diseno-tokens.md` — sistema de diseño completo
- `docs/03-deploy-easypanel.md` — guía de despliegue
- `docs/04-migracion-wordpress.md` — plan de migración y swap de dominio
- `docs/05-redirecciones-301.md` — mapa de URLs y config Nginx

Código fuente en `src/`:

- `src/css/` → `tokens.css` · `reset.css` · `base.css` · `components.css` · `sections.css`
- `src/js/` → `main.js` · `animations.js` · `form.js` · `cookies.js`
- `src/assets/svg/` → `mockups/` · `icons/` · `logos/`

---

## Estructura de secciones de index.html (nuevo enfoque)

La landing sigue este orden exacto. **No cambies el orden sin consultarme.**

### Sección 1 — Header + Hero
- Nav fijo con logo + CTA "Habla con nosotros"
- Titular directo al dolor: "Tu negocio lleno, sin perseguir clientes"
- Subtítulo que explique el qué (reservas, WhatsApp, clientes que vuelven)
- CTA principal → WhatsApp o formulario de consulta
- Elemento visual: mockup de móvil con conversación WhatsApp de barbería

### Sección 2 — Problema
- 3–4 pains concretos del dueño de negocio local:
  - "Pierdes clientes porque no contestas a tiempo"
  - "Clientes que vinieron una vez y no volvieron"
  - "No sabes qué pasa en tu negocio hasta fin de mes"
  - "Dependes de que te llamen para tener citas"
- Tono empático, no agresivo. El dueño se ve reflejado.

### Sección 3 — Solución (los 3 productos)
- Cada producto con: nombre, qué hace en una frase, ejemplo real de barbería
- Visual: icono o mockup SVG por producto
- No mencionar tecnología. Solo resultados.

### Sección 4 — Cómo funciona
- 3 pasos simples:
  1. "Analizamos tu negocio" (consulta gratuita)
  2. "Montamos tu sistema" (en días, no meses)
  3. "Tus clientes vuelven solos" (resultado)
- Aquí SÍ tiene sentido la numeración porque es una secuencia real.

### Sección 5 — Caso real / Demo
- Cuando Hair Gallery esté cerrado: caso real con datos.
- Mientras tanto: demo visual tipo "antes vs después" de una barbería.
  Mockup de conversación WhatsApp mostrando reserva automática.

### Sección 6 — Nichos
- Grid visual con los sectores: barberías (destacado), peluquerías, clínicas,
  fisioterapia, restaurantes, centros de estética, transporte.
- Cada nicho puede evolucionar a landing propia más adelante.

### Sección 7 — Precios
- Los tres niveles (Esencial, Acelerador, Premium) con lo que incluye cada uno.
- Setup como nota al pie, no como barrera.
- CTA en cada plan → "Quiero este plan" / "Hablamos"

### Sección 8 — Sobre Nerego
- Breve. Joaquín, Murcia, por qué hace esto.
- Sin "caso piloto". Sin tech bro. Cercano y directo.
- Foto o ilustración.

### Sección 9 — FAQ
- 5–6 preguntas reales que haría un dueño de barbería:
  "¿Necesito saber de tecnología?", "¿Cuánto tarda en funcionar?",
  "¿Mis clientes no se van a molestar con los mensajes?", etc.

### Sección 10 — CTA final + Footer
- CTA de cierre potente: "¿Quieres ver cómo funcionaría en tu negocio?"
- Formulario corto o botón WhatsApp.
- Footer con datos legales, contacto, redes.

---

## SEO y Schema (Fase 11 del roadmap)

- Público: dueños de negocios locales en España buscando soluciones prácticas.
- Keywords orientativas: "automatizar barbería", "reservas WhatsApp peluquería",
  "recuperar clientes barbería", "gestión citas automática", "WhatsApp para
  negocios locales".
- Schema pendiente: `LocalBusiness` / `ProfessionalService`.
- Un solo `<h1>` por página, meta description, Open Graph.
- `alt` descriptivo en todas las imágenes.

---

## Cómo levantarlo en local

```bash
cd src
python -m http.server 3000   # → http://localhost:3000
```

---

## Estado del proyecto

El roadmap va por fases (ver tabla en `README.md`).

**Fase 0 — ✅ Completa** (estructura + git)
**Fase 1 — ✅ Completa** (tokens.css, reset.css, base.css)
**Fase actual → Fase 2** (Header + Hero)

**Pregúntame en qué fase estamos antes de generar secciones nuevas.**
