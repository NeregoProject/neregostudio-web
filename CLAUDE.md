# CLAUDE.md — Nerego Studio (web corporativa)

> Instrucciones de proyecto para Claude Code. Léelas antes de tocar cualquier archivo.
> Si algo de aquí choca con lo que te pido en el chat, pregúntame antes de asumir.

---

## Qué es este proyecto

Sitio web **estático** de Nerego Studio (neregostudio.com): creación web, SEO y
visibilidad en buscadores e IA para **pequeños y medianos negocios en España**.

Reemplaza una instalación anterior en WordPress + Elementor. Se sirve como
HTML/CSS/JS estático en **Easypanel + Nginx**. **No reintroduzcas WordPress.**

---

## El negocio (úsalo para copy, textos y SEO)

### Público objetivo

Dueños de pequeños y medianos negocios en España: negocios locales que viven de
que les llamen, les escriban o les pidan presupuesto. Gente práctica que necesita
resultados, no tecnología.

**No hay un nicho único.** Sirve a cualquier negocio local: peluquerías y
barberías, clínicas dentales, fisioterapia, restaurantes, centros de estética,
transporte y montaje de muebles, academias, servicios a domicilio. El copy debe
funcionar para todos ellos, no cerrarse a uno.

### Qué ofrece Nerego Studio

Tres cosas, y solo tres:

1. **Creación web** — Web profesional a medida, rápida y pensada para convertir
   visitas en contactos: llamadas, WhatsApps y solicitudes de presupuesto.
2. **SEO y posicionamiento** — Que el negocio aparezca en Google cuando alguien
   busca su servicio en su zona. Incluye SEO local y ficha de Google.
3. **Visibilidad en IA** — Preparar el negocio para que herramientas como ChatGPT
   lo recomienden cuando alguien pregunta por ese servicio.

> **Importante:** los servicios de reservas online, reactivación de clientes por
> WhatsApp, agente de IA 24/7 y "cerebro de negocio" **ya no forman parte de la
> oferta**. Si los encuentras mencionados en cualquier archivo del proyecto,
> avísame: son restos de una etapa anterior y hay que eliminarlos.

### Precios actuales

- **Proyecto web:** desde 300 €.
- **Mantenimiento con posicionamiento:** desde 80 €/mes.

No hay planes con nombre (Esencial / Acelerador / Premium). Esa estructura es de
una etapa anterior y ya no se usa. **Si encuentras importes de 120 €, 220 €,
350 €, 500 € o 150 € en cualquier archivo, avísame antes de tocarlos.**

Son precios de entrada, pensados para acumular casos reales. Se revisarán al
alza más adelante.

### La auditoría gratuita

Es la puerta de entrada al cliente y el CTA principal de toda la web.

**Llámala siempre "auditoría"**, en singular y en femenino: "auditoría gratuita",
"pide tu auditoría". Nunca "consulta", "diagnóstico", "revisión" ni "análisis".
El archivo del formulario se llama `diagnostico.html` por motivos históricos, pero
el texto visible para el usuario siempre dice auditoría.

La auditoría entrega: los principales problemas de la web, qué frena su
visibilidad en Google, qué oportunidades está perdiendo frente a la competencia
y las tres mejoras prioritarias.

Se ofrece sin compromiso y sin llamada comercial. Ese punto se comunica siempre.

### Tono y lenguaje

- **Primera persona del singular, SIEMPRE.** Joaquín trabaja solo y es una de sus
  mejores bazas comerciales. Escribe "hago", "monto", "trabajo", "te enseño".
  ❌ Nunca "hacemos", "nuestro equipo", "en Nerego creemos". Nada de plurales
  de agencia.
- **Directo, cálido, sin jerga técnica.** Habla como le hablarías al dueño de la
  barbería de tu barrio.
- **Resultados, no tecnicismos.** Un negocio pequeño no compra "SEO", compra más
  llamadas, más WhatsApps y más presupuestos. Titula por el resultado.
- **Sí se puede mencionar Google y ChatGPT.** Son el diferencial del discurso y
  aparecen en el titular principal. Lo que hay que evitar es la jerga hueca:
  "stack tecnológico", "soluciones end-to-end", "transformación digital".
- **Honestidad por encima de espectacularidad.** No prometas posiciones ni
  resultados garantizados. Decir abiertamente que nadie puede garantizar
  aparecer en ChatGPT es un activo de confianza, no una debilidad.
- **No uses "caso piloto"** — resta credibilidad.
- Ejemplos siempre concretos y reales, nunca inventados.

Fundador: **Joaquín** · Murcia, España · nerego.ai@gmail.com

---

## Stack — reglas innegociables

- HTML5 **semántico**.
- **CSS3 puro** con custom properties. ❌ NADA de frameworks CSS (ni Tailwind, ni
  Bootstrap, ni similares).
- **JavaScript vanilla**. ❌ NADA de frameworks JS (ni React, ni Vue, ni similares).
- **Lenis** para smooth scroll (~5 KB), ya incluido. No añadas otra librería de scroll.
- Google Fonts vía `<link>` con `display=swap`.
- **SVG inline** para iconografía.
- **Sin proceso de build.** Se sirve `src/` directamente.
- No añadas dependencias pesadas sin proponérmelo antes.
- **El rendimiento es argumento de venta.** Vendemos SEO: la web propia tiene que
  cargar rápido. Antes de añadir imágenes pesadas o librerías, propónmelo.

---

## Sistema de diseño

Paleta y tipografía definidas en `src/css/tokens.css`:

- **Color primario:** Azul tinta (ink blue) — profesional, confianza.
- **Color acento:** Terracota — calidez, cercanía, local.
- **Tipografía display:** Bricolage Grotesque.
- **Tipografía body:** según tokens.css.

**Usa siempre las variables de `tokens.css`.** No inventes colores ni tamaños.

El naranja/terracota está reservado para el CTA principal. Evita competir con él
en la misma pantalla.

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
- `src/assets/svg/` → `icons/` · `logos/`

---

## Estructura real de la web

**Navegación principal:** Lo que hago · Cómo trabajo · Caso real · Sobre mí ·
FAQ · Blog · [Auditoría gratuita]

**Secciones de `index.html`:**

1. **Header + Hero** — Titular: "Hago que Google y ChatGPT recomienden tu
   negocio". Subtítulo en primera persona. CTA principal a la auditoría y CTA
   secundario a "Ver cómo trabajo".
2. **Lo que hago** — Los servicios, titulados por resultado y no por técnica.
3. **Cómo trabajo** — El proceso, paso a paso.
4. **Caso real** — JL Salazar (transporte y montaje de muebles en Murcia). Es la
   pieza comercial más fuerte de la web.
5. **Sectores** — Los tipos de negocio con los que trabaja.
6. **Sobre mí** — Joaquín, en primera persona.
7. **FAQ**
8. **CTA final + Footer**

**Otras páginas:** `diagnostico.html` (formulario de auditoría) y `blog/`.

**No cambies el orden de secciones ni añadas secciones nuevas sin consultarme.**

---

## SEO y Schema

- Un solo `<h1>` por página, meta description y Open Graph en todas.
- `alt` descriptivo en todas las imágenes.
- Schema: `LocalBusiness` / `ProfessionalService`.
- Keywords orientativas: "diseño web para negocios locales", "SEO local Murcia",
  "página web para pequeños negocios", "aparecer en Google negocio local",
  "que ChatGPT recomiende mi negocio", "posicionamiento web Murcia".
- **Cuidado con los precios en el schema.** Si hay `Offer` o `priceRange` en los
  metadatos, tiene que coincidir con los precios visibles en la web.

---

## Cómo levantarlo en local

```bash
cd src
python -m http.server 3000   # → http://localhost:3000
```

---

## Estado del proyecto

**La web está terminada y en producción.** La migración desde WordPress está
completa. Ya no hay fases de construcción pendientes.

**Fase actual: pulido.** Ajustes de detalle sobre una web que ya funciona:
copy, rendimiento, conversión y contenido nuevo.

Esto significa que:

- **No generes secciones nuevas por iniciativa propia.** Pregúntame primero.
- Los cambios son quirúrgicos: localiza, muéstrame qué vas a tocar, espera
  confirmación y entonces edita.
- Antes de aplicar cualquier cambio que afecte a varios archivos, enséñame la
  lista de archivos y líneas afectadas.

**Trabajamos paso a paso: un cambio por vez, y espera mi confirmación antes de
seguir con el siguiente.**
