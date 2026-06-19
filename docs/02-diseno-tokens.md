# Sistema de diseño — Nerego Studio

Preview visual: abrir `docs/preview-paletas.html` en el navegador.
Tokens implementados: `src/css/tokens-A.css` y `src/css/tokens-B.css`.
Una vez elegida la paleta ganadora → renombrar a `tokens.css` y eliminar la otra.

---

## Opción A — "Criterio en blanco"

**Filosofía:** Todo silencio visual. El blanco roto como lienzo de consultoría seria. El azul tinta como autoridad institucional. La terracota como energía de acción, cálida sin gritar. Sensación: despacho premium, no agencia de publicidad.

**Tipografía display:** Bricolage Grotesque (400–800) — editorial, tiene optical size, personalidad sin extravagancia.
**Tipografía body:** Inter (400, 500) — máxima legibilidad, neutral, no compite con el display.

### Paleta A

| Token semántico | Hex | Uso |
|----------------|-----|-----|
| `background` | `#FAFAF7` | Canvas principal de la página |
| `surface` | `#FFFFFF` | Cards, modales, formularios |
| `surface-alt` | `#F3F3EF` | Secciones alternas (pain points, FAQ) |
| `text-primary` | `#0F0F0F` | Titulares, cuerpo principal |
| `text-secondary` | `#5C5C5A` | Subtítulos, descripciones de card |
| `text-muted` | `#9C9C98` | Captions, placeholders, metadatos |
| `text-on-accent` | `#FFFFFF` | Texto sobre fondos de acento |
| `accent-primary` | `#1A2B4A` | Azul tinta — botón secundario, iconos, enlaces, band de oferta |
| `accent-primary-hover` | `#243A62` | Estado hover del acento primario |
| `accent-primary-subtle` | `#EEF1F8` | Fondo de iconos de cards, badges informativos |
| `accent-warm` | `#D4633A` | Terracota — botón primario (CTA principal) |
| `accent-warm-hover` | `#BE4F29` | Estado hover del CTA |
| `accent-warm-subtle` | `#FBF0EC` | Fondo sutil para destacar CTAs secundarios |
| `border` | `#E4E4DF` | Bordes de cards, separadores |
| `border-strong` | `#C8C8C2` | Bordes en hover, outline del botón secundario |
| `dark-bg` | `#1A2B4A` | Banda bonificación (azul tinta oscuro) |
| `dark-surface` | `#243A62` | Cards dentro de dark sections |
| `dark-text-primary` | `#F5F5F2` | Texto sobre fondos dark |
| `dark-text-secondary` | `#A8B4CC` | Texto secundario sobre fondos dark |
| `dark-border` | `rgba(255,255,255,0.10)` | Bordes dentro de dark sections |

**Por qué encaja con Nerego Studio:**
El azul tinta (#1A2B4A) es el color de las instituciones serias — banca privada, asesorías legales, consultoría de alto nivel. No es corporativo en el mal sentido; es profundo y distinto del azul genérico de tech. La terracota como CTA da calidez humana (Joaquín es el consultor, no una corporación) sin ser agresiva. Juntos crean un contraste elegante entre "criterio" y "acción".

---

## Opción B — "Inteligencia verde"

**Filosofía:** Base clara igual que A, pero con secciones enteras en dark (Hero, Demo) que crean contraste dramático. El verde bosque es inusual en agencias tech — señala criterio propio, confianza orgánica, naturaleza. El ámbar es más dorado y cálido que la terracota. La dualidad light/dark da más jerarquía visual entre secciones y hace el sitio sentir como un producto.

**Tipografía display:** Syne (400–800) — geométrica, modernista, arquitectónica. Más estructurada que Bricolage, más cercana al carácter de Linear/Vercel/Stripe.
**Tipografía body:** Inter (400, 500) — mismo que A.

### Paleta B

| Token semántico | Hex | Uso |
|----------------|-----|-----|
| `background` | `#F8F8F5` | Canvas principal |
| `surface` | `#FFFFFF` | Cards, modales |
| `surface-alt` | `#F0F0EB` | Secciones alternas |
| `text-primary` | `#0F0F0F` | Titulares, cuerpo |
| `text-secondary` | `#5A5A56` | Subtítulos, descripciones |
| `text-muted` | `#9A9A94` | Captions, metadatos |
| `text-on-accent` | `#FFFFFF` | Texto sobre acentos |
| `accent-primary` | `#1F3D2E` | Verde bosque — botón secundario, iconos, band oferta clara |
| `accent-primary-hover` | `#2D5540` | Hover del acento primario |
| `accent-primary-subtle` | `#EBF3EE` | Fondo de iconos, badges |
| `accent-warm` | `#E5994A` | Ámbar — CTA principal |
| `accent-warm-hover` | `#D08030` | Hover del CTA |
| `accent-warm-subtle` | `#FDF5E8` | Fondo sutil de CTA |
| `border` | `#E2E2DC` | Bordes de cards |
| `border-strong` | `#C4C4BC` | Bordes en hover |
| `dark-bg` | `#101A14` | Hero, sección Demo — verde casi negro |
| `dark-surface` | `#172118` | Cards en dark sections |
| `dark-surface-alt` | `#1E2C20` | Superficie ligeramente más clara en dark |
| `dark-text-primary` | `#EDF2EE` | Texto principal en dark |
| `dark-text-secondary` | `#8BA898` | Texto secundario en dark |
| `dark-accent` | `#4ADE80` | Verde luminoso — highlights, badges en dark sections |
| `dark-border` | `rgba(237,242,238,0.08)` | Bordes en dark sections |

**Por qué encaja con Nerego Studio:**
El verde bosque (#1F3D2E) es completamente inusual en el nicho de agencias de IA — que van todas a azul o morado. Diferenciarse con verde no es capricho: el verde oscuro transmite criterio propio, profundidad, confianza duradera (como un bosque, no como un flash). El dark hero crea un impacto visual fuerte en el primer scroll que A no tiene, y hace la demo del chatbot sentirse más como "producto real en funcionamiento". Riesgo: más complejo de ejecutar en producción (dos modos de color hay que gestionar con cuidado).

---

## Sistema tipográfico compartido

La escala es idéntica en A y B. Solo cambia la fuente display.

### Escala tipográfica (clamp, mobile-first)

| Token | Valor | Uso |
|-------|-------|-----|
| `text-xs` | `clamp(0.75rem, 1vw, 0.8125rem)` | 12–13px — labels, badges |
| `text-sm` | `clamp(0.875rem, 1.25vw, 0.9375rem)` | 14–15px — captions, microcopy |
| `text-base` | `clamp(1rem, 1.5vw, 1.125rem)` | 16–18px — cuerpo de párrafo |
| `text-lg` | `clamp(1.125rem, 2vw, 1.25rem)` | 18–20px — lead, intro párrafo |
| `text-xl` | `clamp(1.25rem, 2.5vw, 1.5rem)` | 20–24px — subtítulos pequeños |
| `text-2xl` | `clamp(1.5rem, 3vw, 2rem)` | 24–32px — H3 |
| `text-3xl` | `clamp(2rem, 4vw, 2.75rem)` | 32–44px — H2 |
| `text-4xl` | `clamp(2.5rem, 5vw, 3.5rem)` | 40–56px — H1 |
| `text-hero` | `clamp(2.75rem, 7vw, 6rem)` | 44–96px — Hero headline |

### Pesos usados
- `400` regular — cuerpo de párrafo, descripciones
- `500` medium — énfasis sutil en cuerpo
- `600` semibold — H3, botones secundarios
- `700` bold — H2, titulares de cards
- `800` extrabold — H1, Hero, números grandes

### Letter spacing en titulares
- Hero / H1: `-0.03em` a `-0.025em` (óptico, elimina aire innecesario en texto grande)
- H2: `-0.02em`
- H3: `-0.01em`
- Cuerpo: `0` (Inter tiene métricas perfectas sin ajuste)
- Labels / eyebrows: `+0.10em` a `+0.14em` (amplía el tracking para legibilidad en pequeño)

---

## Escala de espaciado (base 8px)

| Token | Valor | Usos típicos |
|-------|-------|-------------|
| `--space-1` | `8px` | Gap entre icono y texto, padding chip |
| `--space-2` | `16px` | Padding interno de card pequeña, gap entre botones |
| `--space-3` | `24px` | Padding interno de card media |
| `--space-4` | `32px` | Margen entre elemento y su título |
| `--space-5` | `40px` | Padding de sección pequeña |
| `--space-6` | `48px` | Padding de card grande, gap entre subsecciones |
| `--space-7` | `56px` | Separación entre componentes de sección |
| `--space-8` | `64px` | Gap entre secciones pequeñas |
| `--space-10` | `80px` | Separación entre secciones en mobile |
| `--space-12` | `96px` | Padding vertical de secciones en tablet |
| `--space-14` | `112px` | — |
| `--space-16` | `128px` | Padding vertical de secciones en desktop |

**Regla:** mínimo `--space-12` entre secciones en mobile, `--space-16` en desktop.

---

## Sistema de sombras

Las sombras son multicapa (dos capas por token) para dar profundidad sin la sombra "caja" genérica.

```css
/* Capa 1: sombra de contacto (pequeña, oscura, offset mínimo) */
/* Capa 2: sombra de ambiente (grande, transparente, difusa) */

--shadow-xs: 0 1px 2px rgba(15, 15, 15, 0.04);
--shadow-sm: 0 1px 3px rgba(15, 15, 15, 0.05), 0 2px 8px rgba(15, 15, 15, 0.04);
--shadow-md: 0 2px 8px rgba(15, 15, 15, 0.06), 0 8px 24px rgba(15, 15, 15, 0.05);
--shadow-lg: 0 8px 24px rgba(15, 15, 15, 0.08), 0 20px 48px rgba(15, 15, 15, 0.06);
--shadow-xl: 0 16px 48px rgba(15, 15, 15, 0.10), 0 32px 80px rgba(15, 15, 15, 0.07);
```

Reglas de uso:
- Cards en reposo: `--shadow-sm`
- Cards en hover: `--shadow-md`
- Modales, drawers: `--shadow-xl`
- Header sticky: `--shadow-sm` (sutil)

---

## Bordes

| Token | Valor | Uso |
|-------|-------|-----|
| `--radius-sm` | `8px` | Chips, badges, inputs |
| `--radius-md` | `12px` | Botones, tags |
| `--radius-lg` | `16px` | Cards estándar |
| `--radius-xl` | `20px` | Cards destacadas, banda bonificación |
| `--radius-2xl` | `24px` | Mockups, imágenes hero |
| `--radius-full` | `9999px` | Pills, avatares, eyebrows |

---

## Transiciones

```css
--ease-out-expo: cubic-bezier(0.16, 1, 0.3, 1);  /* Hover de botones, cards */
--ease-in-out:   cubic-bezier(0.4, 0, 0.2, 1);   /* Toggles, accordion */
--ease-spring:   cubic-bezier(0.34, 1.56, 0.64, 1); /* Animaciones de entrada con rebote */

--duration-fast:   150ms;  /* Hover states (color, border) */
--duration-normal: 250ms;  /* Transform, sombra */
--duration-slow:   400ms;  /* Animaciones de entrada al scroll */
```

---

## Decisión de paleta

*Pendiente: Joaquín elige A o B tras ver la preview.*

Paleta elegida: **___**
Fecha: ___
Tipografía display elegida: **___**
Acción: `tokens-_.css` → `tokens.css`, eliminar el otro.
