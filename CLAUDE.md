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

Nerego monta el ecosistema digital completo para negocios locales. La pieza
central es una **web profesional con sistema de reservas integrado** que el
cliente puede usar desde el día 1. Sobre esa base se añaden capas de
automatización por WhatsApp e inteligencia de negocio.

#### Los 4 pilares del servicio (en este orden de prioridad):

1. **Web profesional + Reservas online** — Página web del negocio con sistema
   de reservas integrado. El cliente elige servicio, día y hora desde la web,
   sin llamar ni escribir. El dueño recibe la cita confirmada automáticamente.
   **Esta es la puerta de entrada y el producto estrella.**
2. **Sistema de Reactivación** — Recupera clientes inactivos con mensajes
   automáticos por WhatsApp. "Luis no viene hace 2 meses → recibe un mensaje
   → reserva desde la web esa misma tarde."
3. **Vendedor Digital 24/7** — Agente IA en WhatsApp que responde preguntas,
   sugiere servicios y redirige a la web para reservar. Funciona fuera de
   horario, fines de semana, festivos.
4. **Cerebro de Negocio** — Informes semanales automáticos con datos reales:
   citas, ingresos, clientes nuevos vs recurrentes, horas pico. El dueño sabe
   qué pasa sin preguntar.

### Estructura de precios (tres niveles)

- **Esencial** (~120 €/mes) — Web + reservas + Reactivación.
- **Acelerador** (~220 €/mes) — Todo lo anterior + Vendedor Digital 24/7.
- **Premium** (~350 €/mes) — Todo lo anterior + Cerebro de Negocio + soporte
  prioritario.
- Setup inicial: ~150 € (una vez).

### Entrada al cliente

La **web con reservas** es la puerta de entrada. Es lo primero que el dueño de
negocio entiende y quiere. Se ofrece una **consulta gratuita** donde se muestra
cómo quedaría su web con el sistema de reservas funcionando. El objetivo es que
el dueño vea el resultado antes de decidir.

WhatsApp es el **canal de comunicación y automatización**, no el sistema de
reservas. Los clientes reservan en la web; WhatsApp se usa para recordatorios,
reactivación y atención fuera de horario.

### Tono y lenguaje

- **Directo, cálido, sin jerga técnica.** Habla como le hablarías al dueño de
  la barbería de tu barrio.
- Nada de "IA", "automatización", "stack tecnológico" en el copy visible.
  Usa: "tu negocio lleno", "clientes que vuelven solos", "reservas desde tu web",
  "citas sin llamadas", "saber qué pasa en tu negocio sin preguntar".
- **No uses "caso piloto"** — es un término que resta credibilidad.
- Ejemplos siempre concretos: "Un cliente entra en tu web a las 23:00. Ve que
  el martes a las 11:00 hay hueco. Reserva. Tú te enteras por la mañana con
  la cita ya confirmada."

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

### Sección 1 — Header + Hero ✅ (construida, pendiente de ajuste)
- Nav fijo con logo + CTA "Habla con nosotros"
- Titular: "Tu negocio lleno, sin perseguir clientes"
- Subtítulo: "Tus clientes reservan desde tu web, reciben recordatorios por
  WhatsApp y los que se fueron vuelven solos."
- CTA principal → formulario de consulta
- Elemento visual: **DOS mockups** —
  1. Pantalla de laptop/tablet mostrando la web del negocio con el calendario
     de reservas (slots disponibles, selección de servicio y hora)
  2. Móvil con WhatsApp mostrando recordatorio automático de cita
  - El mockup de reservas web va delante/más grande (es el producto principal).
  - El mockup de WhatsApp va detrás/más pequeño (es el complemento).
  - Si el layout no permite los dos bien, prioriza el de reservas web.

### Sección 2 — Problema
- 3–4 pains concretos del dueño de negocio local:
  - "Pierdes clientes porque no contestas a tiempo"
  - "Clientes que vinieron una vez y no volvieron"
  - "No sabes qué pasa en tu negocio hasta fin de mes"
  - "Dependes de que te llamen para tener citas"
- Tono empático, no agresivo. El dueño se ve reflejado.

### Sección 3 — Solución (los 4 pilares)
- Cada pilar con: nombre, qué hace en una frase, ejemplo real de barbería
- **Orden: Web+Reservas → Reactivación → Vendedor Digital → Cerebro de Negocio**
- El pilar de Web+Reservas va destacado visualmente (es el producto estrella)
- Visual: mockup SVG por pilar
- No mencionar tecnología. Solo resultados.

### Sección 4 — Cómo funciona
- 3 pasos simples:
  1. "Te enseñamos cómo quedaría" (consulta gratuita con demo real)
  2. "Montamos todo en días" (web + reservas + WhatsApp)
  3. "Tu negocio funciona solo" (reservas automáticas, clientes que vuelven)
- Aquí SÍ tiene sentido la numeración porque es una secuencia real.

### Sección 5 — Caso real / Demo
- Cuando Hair Gallery esté cerrado: caso real con datos y capturas.
- Mientras tanto: demo visual tipo "antes vs después" de una barbería.
  Mockup de la web de la barbería con calendario de reservas funcionando.
  Ejemplo: "Antes: 6 llamadas perdidas al día. Después: reservas 24h desde
  la web, 0 llamadas necesarias."

### Sección 6 — Nichos
- Grid visual con los sectores: barberías (destacado), peluquerías, clínicas,
  fisioterapia, restaurantes, centros de estética, transporte.
- Cada nicho puede evolucionar a landing propia más adelante.

### Sección 7 — Precios
- Los tres niveles (Esencial, Acelerador, Premium) con lo que incluye cada uno.
- Esencial incluye web + reservas (dejarlo claro como base).
- Setup como nota al pie, no como barrera.
- CTA en cada plan → "Quiero este plan" / "Hablamos"

### Sección 8 — Sobre Nerego
- Breve. Joaquín, Murcia, por qué hace esto.
- Sin "caso piloto". Sin tech bro. Cercano y directo.
- Foto o ilustración.

### Sección 9 — FAQ
- 5–6 preguntas reales que haría un dueño de barbería:
  "¿Necesito saber de tecnología?", "¿Cuánto tarda en funcionar?",
  "¿Puedo gestionar las reservas yo?", "¿Y si un cliente quiere cambiar
  la cita?", "¿Mis clientes no se van a molestar con los mensajes?", etc.

### Sección 10 — CTA final + Footer
- CTA de cierre: "¿Quieres ver cómo quedaría la web de tu negocio?"
- Formulario corto o botón WhatsApp.
- Footer con datos legales, contacto, redes.

---

## SEO y Schema (Fase 14 del roadmap)

- Público: dueños de negocios locales en España buscando soluciones prácticas.
- Keywords orientativas: "web para barbería con reservas", "sistema reservas
  peluquería", "página web barbería", "reservas online peluquería",
  "recuperar clientes barbería", "gestión citas automática".
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
**Fase 2 — ✅ Completa** (Header + Hero — pendiente ajuste de mockups)
**Fase actual → Fase 2.1** (Ajuste del hero: cambiar mockup WhatsApp por mockup
de web con reservas como elemento principal + WhatsApp como complemento.
Actualizar subtítulo.)

**Pregúntame en qué fase estamos antes de generar secciones nuevas.**
