# Sistema de diseño — Nerego Studio

**Paleta elegida: Opción A — "Criterio en blanco"**
Tokens implementados en `src/css/tokens.css`.
Preview de referencia archivada en `docs/archive/preview-paletas.html`.

---

## Paleta — Azul tinta · Terracota

**Filosofía:** Todo silencio visual. El blanco roto como lienzo de consultoría seria. El azul tinta como autoridad institucional. La terracota como energía de acción, cálida sin gritar.

**Tipografía display:** Bricolage Grotesque (400–800) — editorial, optical size, personalidad sin extravagancia.
**Tipografía body:** Inter (400, 500) — máxima legibilidad, no compite con el display.

### Colores

| Token | Hex | Uso |
|-------|-----|-----|
| `--color-bg` | `#FAFAF7` | Canvas principal de la página |
| `--color-surface` | `#FFFFFF` | Cards, modales, formularios |
| `--color-surface-alt` | `#F3F3EF` | Secciones alternas (pain points, FAQ) |
| `--color-text-primary` | `#0F0F0F` | Titulares, cuerpo principal |
| `--color-text-secondary` | `#5C5C5A` | Subtítulos, descripciones de card |
| `--color-text-muted` | `#9C9C98` | Captions, placeholders, metadatos |
| `--color-text-on-accent` | `#FFFFFF` | Texto sobre fondos de acento |
| `--color-accent-primary` | `#1A2B4A` | Azul tinta — botón secundario, iconos, enlaces |
| `--color-accent-primary-hover` | `#243A62` | Estado hover del acento primario |
| `--color-accent-primary-subtle` | `#EEF1F8` | Fondo de iconos de cards, badges informativos |
| `--color-accent-warm` | `#D4633A` | Terracota — botón primario (CTA principal) |
| `--color-accent-warm-hover` | `#BE4F29` | Estado hover del CTA |
| `--color-accent-warm-subtle` | `#FBF0EC` | Fondo sutil para destacar CTAs secundarios |
| `--color-border` | `#E4E4DF` | Bordes de cards, separadores |
| `--color-border-strong` | `#C8C8C2` | Bordes en hover, outline del botón secundario |
| `--color-dark-bg` | `#1A2B4A` | Banda bonificación y secciones de énfasis |
| `--color-dark-surface` | `#243A62` | Cards dentro de dark sections |
| `--color-dark-text-primary` | `#F5F5F2` | Texto sobre fondos dark |
| `--color-dark-text-secondary` | `#A8B4CC` | Texto secundario sobre fondos dark |
| `--color-dark-border` | `rgba(255,255,255,0.10)` | Bordes dentro de dark sections |

---

## Tipografía

### Fuentes
```html
<!-- En el <head> de cada HTML, antes de los CSS -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400;12..96,500;12..96,600;12..96,700;12..96,800&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
```

### Escala tipográfica

| Token | Valor clamp | Rango px | Uso |
|-------|-------------|----------|-----|
| `--text-xs` | `clamp(0.75rem, 1vw, 0.8125rem)` | 12–13px | Labels, badges, eyebrows |
| `--text-sm` | `clamp(0.875rem, 1.25vw, 0.9375rem)` | 14–15px | Captions, microcopy |
| `--text-base` | `clamp(1rem, 1.5vw, 1.125rem)` | 16–18px | Cuerpo de párrafo |
| `--text-lg` | `clamp(1.125rem, 2vw, 1.25rem)` | 18–20px | Lead, intro párrafo |
| `--text-xl` | `clamp(1.25rem, 2.5vw, 1.5rem)` | 20–24px | Subtítulos pequeños |
| `--text-2xl` | `clamp(1.5rem, 3vw, 2rem)` | 24–32px | H4, card titles grandes |
| `--text-3xl` | `clamp(2rem, 4vw, 2.75rem)` | 32–44px | H3 |
| `--text-4xl` | `clamp(2.5rem, 5vw, 3.5rem)` | 40–56px | H2 |
| `--text-hero` | `clamp(2.75rem, 7vw, 6rem)` | 44–96px | H1, Hero headline |

### Pesos
| Token | Valor | Uso |
|-------|-------|-----|
| `--font-weight-regular` | `400` | Cuerpo, descripciones |
| `--font-weight-medium` | `500` | Énfasis sutil |
| `--font-weight-semibold` | `600` | H4–H6, botones secundarios |
| `--font-weight-bold` | `700` | H2, H3, títulos de cards |
| `--font-weight-extrabold` | `800` | H1, Hero, números grandes |

### Letter spacing
- Hero / H1: `--tracking-tighter` (`-0.03em`)
- H2: `--tracking-tight` (`-0.02em`)
- H3: `--tracking-tight` (`-0.02em`)
- H4: `--tracking-snug` (`-0.01em`)
- Cuerpo: `--tracking-normal` (`0`)
- Labels / eyebrows uppercase: `--tracking-wider` (`0.10em`) o `--tracking-widest` (`0.15em`)

---

## Espaciado (base 8px)

| Token | Valor | Usos típicos |
|-------|-------|-------------|
| `--space-1` | `8px` | Gap icono-texto, padding chip |
| `--space-2` | `16px` | Padding card pequeña, gap botones |
| `--space-3` | `24px` | Padding card media |
| `--space-4` | `32px` | Margen elemento → título |
| `--space-5` | `40px` | Padding sección pequeña |
| `--space-6` | `48px` | Padding card grande, subsecciones |
| `--space-7` | `56px` | Separación entre componentes |
| `--space-8` | `64px` | Gap entre secciones pequeñas |
| `--space-10` | `80px` | Entre secciones en mobile |
| `--space-12` | `96px` | Padding secciones en tablet |
| `--space-14` | `112px` | — |
| `--space-16` | `128px` | Padding secciones en desktop |

**Regla:** mínimo `--space-12` entre secciones en mobile, `--space-16` en desktop.

---

## Sombras

Todas son multicapa (contacto + ambiente). Sin `box-shadow` genérica.

```css
--shadow-xs: 0 1px 2px rgba(15, 15, 15, 0.04);
--shadow-sm: 0 1px 3px rgba(15, 15, 15, 0.05), 0 2px 8px rgba(15, 15, 15, 0.04);
--shadow-md: 0 2px 8px rgba(15, 15, 15, 0.06), 0 8px 24px rgba(15, 15, 15, 0.05);
--shadow-lg: 0 8px 24px rgba(15, 15, 15, 0.08), 0 20px 48px rgba(15, 15, 15, 0.06);
--shadow-xl: 0 16px 48px rgba(15, 15, 15, 0.10), 0 32px 80px rgba(15, 15, 15, 0.07);
```

Reglas de uso:
- Cards en reposo: `--shadow-sm`
- Cards en hover: `--shadow-md`
- Modales, menú móvil overlay: `--shadow-xl`
- Header sticky: `--shadow-sm`

---

## Bordes (radio)

| Token | Valor | Uso |
|-------|-------|-----|
| `--radius-sm` | `8px` | Chips, badges, inputs, `code` |
| `--radius-md` | `12px` | Botones |
| `--radius-lg` | `16px` | Cards estándar |
| `--radius-xl` | `20px` | Cards destacadas, banda bonificación |
| `--radius-2xl` | `24px` | Mockups, hero image area |
| `--radius-full` | `9999px` | Pills, eyebrows, avatares, scrollbar |

---

## Transiciones

```css
--ease-out-expo: cubic-bezier(0.16, 1, 0.3, 1);   /* Hover botones, cards */
--ease-in-out:   cubic-bezier(0.4, 0, 0.2, 1);    /* Toggles, accordion */
--ease-spring:   cubic-bezier(0.34, 1.56, 0.64, 1); /* Entradas con rebote */

--duration-fast:   150ms;   /* Color, border en hover */
--duration-normal: 250ms;   /* Transform, sombra */
--duration-slow:   400ms;   /* Entradas al scroll */
```

---

## Layout

```css
--container-max:     1280px;
--container-padding: clamp(24px, 5vw, 64px);   /* Mobile: 24px, desktop: 64px */
--section-gap:       clamp(96px, 10vw, 128px);  /* Separación entre secciones */
```

---

## Orden de carga de CSS en HTML

```html
<link rel="stylesheet" href="/css/reset.css">
<link rel="stylesheet" href="/css/tokens.css">
<link rel="stylesheet" href="/css/base.css">
<link rel="stylesheet" href="/css/components.css">
<link rel="stylesheet" href="/css/sections.css">
```

---

---

## Opción descartada — B: "Inteligencia verde"

Documentada aquí como constancia histórica. Descartada el 2026-06-19 en favor de A.

**Resumen:** Verde bosque `#1F3D2E` como acento primario + ámbar `#E5994A` como CTA + secciones Hero/Demo en dark `#101A14`. Fuente display: Syne.

**Por qué se descartó:** A da sensación más consolidada y legible para el perfil de cliente (dueño de negocio local no técnico). B es visualmente más arriesgada y la gestión de dos modos de color añade complejidad de implementación sin beneficio suficiente para este público objetivo.

**Referencia visual:** `docs/archive/preview-paletas.html` (tab "Opción B").
