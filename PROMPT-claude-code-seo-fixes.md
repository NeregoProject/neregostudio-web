# PROMPT PARA CLAUDE CODE — Implementar correcciones de auditoría SEO en neregostudio.com

Actúa sobre el repositorio de la web de Nerego Studio (sitio estático HTML/CSS/JS servido con Nginx en Docker, desplegado vía Easypanel). Implementa TODOS los cambios siguientes, verifica cada uno, y al final haz commit y push siguiendo el plan de commits indicado al final. NO despliegues nada: el deploy lo hago yo manualmente desde Easypanel.

Antes de empezar, localiza y confirma: `index.html` (o el archivo principal de la home), el `Dockerfile`, la configuración de Nginx (`nginx.conf`, `default.conf` o equivalente) y el `sitemap.xml`. Si la estructura difiere de lo que asumo, adapta las rutas pero conserva la intención de cada cambio.

---

## TAREA 1 — Crear las 3 páginas legales (crítico legal, RGPD/LSSI)

Crea estos 3 archivos en la raíz del sitio (junto a index.html) EXACTAMENTE con este contenido. Contienen placeholders entre corchetes ([NOMBRE Y APELLIDOS], [NIF], etc.): NO los inventes ni los rellenes con datos ficticios. Déjalos tal cual y, al terminar todas las tareas, recuérdame la lista completa de placeholders que debo rellenar yo a mano antes del deploy.

### Archivo: `aviso-legal.html`

```html
<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Aviso Legal | Nerego Studio</title>
<meta name="description" content="Aviso legal de Nerego Studio: datos identificativos del titular, condiciones de uso y propiedad intelectual del sitio neregostudio.com.">
<meta name="robots" content="noindex, follow">
<link rel="canonical" href="https://neregostudio.com/aviso-legal.html">
<style>
  :root{--brand:#1A2B4A;--accent:#D4633A;--ink:#1f2430;--sub:#5b6270;--bg:#f7f6f3;--line:#e4e1da;}
  *{box-sizing:border-box;margin:0;padding:0;}
  body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Arial,sans-serif;color:var(--ink);background:var(--bg);line-height:1.7;}
  .top{background:var(--brand);color:#fff;padding:14px 0;}
  .top .wrap{display:flex;justify-content:space-between;align-items:center;}
  .top a{color:#fff;text-decoration:none;font-weight:700;font-size:.95rem;}
  .top a.back{font-weight:500;font-size:.85rem;color:#c9d4e8;}
  .wrap{max-width:820px;margin:0 auto;padding:0 24px;}
  header.page{padding:56px 0 32px;border-bottom:3px solid var(--accent);}
  header.page h1{font-size:2rem;color:var(--brand);line-height:1.2;}
  header.page p{color:var(--sub);margin-top:8px;font-size:.95rem;}
  main{padding:36px 0 72px;}
  h2{font-size:1.15rem;color:var(--brand);margin:34px 0 10px;}
  h2:first-of-type{margin-top:0;}
  p,li{font-size:.97rem;margin-bottom:12px;}
  ul{padding-left:22px;margin-bottom:12px;}
  a{color:var(--accent);}
  .datos{background:#fff;border:1px solid var(--line);border-left:5px solid var(--accent);border-radius:10px;padding:20px 24px;margin:8px 0 12px;}
  .datos p{margin-bottom:6px;}
  footer{border-top:1px solid var(--line);padding:26px 0 50px;text-align:center;color:var(--sub);font-size:.85rem;}
  footer nav{margin-top:8px;display:flex;gap:16px;justify-content:center;flex-wrap:wrap;}
  footer a{color:var(--sub);}
</style>
</head>
<body>

<div class="top">
  <div class="wrap">
    <a href="/">Nerego Studio</a>
    <a class="back" href="/">&larr; Volver al inicio</a>
  </div>
</div>

<header class="page">
  <div class="wrap">
    <h1>Aviso Legal</h1>
    <p>Última actualización: 5 de julio de 2026</p>
  </div>
</header>

<main>
  <div class="wrap">

    <h2>1. Datos identificativos del titular</h2>
    <p>En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE), se informa de que el titular de este sitio web es:</p>
    <div class="datos">
      <p><strong>Titular:</strong> [NOMBRE Y APELLIDOS]</p>
      <p><strong>Nombre comercial:</strong> Nerego Studio</p>
      <p><strong>NIF:</strong> [NIF]</p>
      <p><strong>Domicilio:</strong> [DIRECCIÓN COMPLETA], Murcia (España)</p>
      <p><strong>Correo electrónico:</strong> [EMAIL DE CONTACTO]</p>
      <p><strong>Sitio web:</strong> https://neregostudio.com</p>
    </div>

    <h2>2. Objeto</h2>
    <p>El presente sitio web tiene por objeto dar a conocer los servicios de diseño y desarrollo web, automatización de procesos e implantación de asistentes de inteligencia artificial que Nerego Studio ofrece a negocios y profesionales, así como facilitar el contacto comercial con quienes estén interesados en dichos servicios.</p>

    <h2>3. Condiciones de uso</h2>
    <p>El acceso y la navegación por este sitio web atribuyen la condición de usuario e implican la aceptación de las presentes condiciones. El usuario se compromete a hacer un uso adecuado de los contenidos y servicios del sitio y a no emplearlos para actividades ilícitas, contrarias a la buena fe o al orden público, ni para dañar, inutilizar o sobrecargar el sitio web o impedir su normal utilización.</p>

    <h2>4. Propiedad intelectual e industrial</h2>
    <p>Todos los contenidos de este sitio web (textos, diseños, logotipos, ilustraciones, código fuente y demás elementos) son titularidad de Nerego Studio o de terceros que han autorizado su uso, y están protegidos por la normativa de propiedad intelectual e industrial. Queda prohibida su reproducción, distribución, comunicación pública o transformación sin autorización expresa del titular, salvo para uso personal y privado.</p>

    <h2>5. Responsabilidad</h2>
    <p>El titular no se hace responsable de los daños o perjuicios derivados del uso incorrecto del sitio web, de la falta de disponibilidad puntual del servicio ni de la existencia de virus o programas maliciosos ajenos a su control, si bien aplica medidas razonables para evitarlos. Los enlaces a sitios de terceros que puedan aparecer en esta web tienen carácter meramente informativo; el titular no asume responsabilidad sobre sus contenidos.</p>

    <h2>6. Protección de datos</h2>
    <p>El tratamiento de los datos personales recogidos a través de este sitio web se rige por lo dispuesto en la <a href="/politica-privacidad.html">Política de Privacidad</a>, redactada conforme al Reglamento (UE) 2016/679 (RGPD) y a la Ley Orgánica 3/2018 (LOPDGDD).</p>

    <h2>7. Legislación aplicable y jurisdicción</h2>
    <p>Las presentes condiciones se rigen por la legislación española. Para la resolución de cualquier controversia derivada del uso de este sitio web, las partes se someten a los juzgados y tribunales del domicilio del usuario cuando este tenga la condición de consumidor, y en su defecto, a los de la ciudad de Murcia.</p>

  </div>
</main>

<footer>
  <div class="wrap">
    <p>© 2026 Nerego Studio · Murcia, España</p>
    <nav>
      <a href="/aviso-legal.html">Aviso legal</a>
      <a href="/politica-privacidad.html">Política de privacidad</a>
      <a href="/politica-cookies.html">Cookies</a>
    </nav>
  </div>
</footer>

</body>
</html>

```

### Archivo: `politica-privacidad.html`

```html
<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Política de Privacidad | Nerego Studio</title>
<meta name="description" content="Política de privacidad de Nerego Studio: cómo tratamos los datos personales recogidos a través del formulario de contacto y el asistente de chat, conforme al RGPD.">
<meta name="robots" content="noindex, follow">
<link rel="canonical" href="https://neregostudio.com/politica-privacidad.html">
<style>
  :root{--brand:#1A2B4A;--accent:#D4633A;--ink:#1f2430;--sub:#5b6270;--bg:#f7f6f3;--line:#e4e1da;}
  *{box-sizing:border-box;margin:0;padding:0;}
  body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Arial,sans-serif;color:var(--ink);background:var(--bg);line-height:1.7;}
  .top{background:var(--brand);color:#fff;padding:14px 0;}
  .top .wrap{display:flex;justify-content:space-between;align-items:center;}
  .top a{color:#fff;text-decoration:none;font-weight:700;font-size:.95rem;}
  .top a.back{font-weight:500;font-size:.85rem;color:#c9d4e8;}
  .wrap{max-width:820px;margin:0 auto;padding:0 24px;}
  header.page{padding:56px 0 32px;border-bottom:3px solid var(--accent);}
  header.page h1{font-size:2rem;color:var(--brand);line-height:1.2;}
  header.page p{color:var(--sub);margin-top:8px;font-size:.95rem;}
  main{padding:36px 0 72px;}
  h2{font-size:1.15rem;color:var(--brand);margin:34px 0 10px;}
  h2:first-of-type{margin-top:0;}
  p,li{font-size:.97rem;margin-bottom:12px;}
  ul{padding-left:22px;margin-bottom:12px;}
  li{margin-bottom:6px;}
  a{color:var(--accent);}
  .datos{background:#fff;border:1px solid var(--line);border-left:5px solid var(--accent);border-radius:10px;padding:20px 24px;margin:8px 0 12px;}
  .datos p{margin-bottom:6px;}
  table{width:100%;border-collapse:collapse;margin:10px 0 16px;font-size:.9rem;background:#fff;border:1px solid var(--line);border-radius:10px;overflow:hidden;}
  th,td{text-align:left;padding:10px 12px;border-bottom:1px solid var(--line);vertical-align:top;}
  th{background:var(--brand);color:#fff;font-size:.8rem;text-transform:uppercase;letter-spacing:.4px;}
  footer{border-top:1px solid var(--line);padding:26px 0 50px;text-align:center;color:var(--sub);font-size:.85rem;}
  footer nav{margin-top:8px;display:flex;gap:16px;justify-content:center;flex-wrap:wrap;}
  footer a{color:var(--sub);}
</style>
</head>
<body>

<div class="top">
  <div class="wrap">
    <a href="/">Nerego Studio</a>
    <a class="back" href="/">&larr; Volver al inicio</a>
  </div>
</div>

<header class="page">
  <div class="wrap">
    <h1>Política de Privacidad</h1>
    <p>Última actualización: 5 de julio de 2026</p>
  </div>
</header>

<main>
  <div class="wrap">

    <h2>1. Responsable del tratamiento</h2>
    <div class="datos">
      <p><strong>Responsable:</strong> [NOMBRE Y APELLIDOS] (Nerego Studio)</p>
      <p><strong>NIF:</strong> [NIF]</p>
      <p><strong>Domicilio:</strong> [DIRECCIÓN COMPLETA], Murcia (España)</p>
      <p><strong>Correo electrónico:</strong> [EMAIL DE CONTACTO]</p>
    </div>
    <p>Esta política describe cómo se tratan los datos personales que nos facilitas a través de https://neregostudio.com, conforme al Reglamento (UE) 2016/679 (RGPD) y a la Ley Orgánica 3/2018 (LOPDGDD).</p>

    <h2>2. Qué datos recogemos y para qué</h2>
    <table>
      <thead><tr><th>Canal</th><th>Datos</th><th>Finalidad</th><th>Base legal</th></tr></thead>
      <tbody>
        <tr>
          <td>Formulario de contacto</td>
          <td>Nombre, teléfono y tipo de negocio</td>
          <td>Atender tu solicitud de información y ponernos en contacto contigo sobre nuestros servicios</td>
          <td>Consentimiento del interesado (art. 6.1.a RGPD) y medidas precontractuales (art. 6.1.b RGPD)</td>
        </tr>
        <tr>
          <td>Asistente de chat</td>
          <td>Los datos que voluntariamente escribas en la conversación (por ejemplo, nombre o datos de contacto)</td>
          <td>Responder a tus consultas sobre nuestros servicios y, si lo solicitas, gestionar el contacto comercial</td>
          <td>Consentimiento del interesado (art. 6.1.a RGPD)</td>
        </tr>
        <tr>
          <td>Correo electrónico</td>
          <td>Tu dirección de email y los datos que incluyas en el mensaje</td>
          <td>Atender y responder tu comunicación</td>
          <td>Consentimiento y medidas precontractuales</td>
        </tr>
      </tbody>
    </table>
    <p>No utilizamos tus datos para elaborar perfiles ni tomamos decisiones automatizadas con efectos jurídicos sobre ti. No enviaremos comunicaciones comerciales por medios electrónicos sin tu consentimiento previo.</p>

    <h2>3. Cuánto tiempo conservamos los datos</h2>
    <p>Conservamos los datos el tiempo necesario para atender tu solicitud y, como máximo, durante un año desde el último contacto, salvo que se inicie una relación comercial (en cuyo caso se conservarán mientras dure la relación y durante los plazos legales aplicables) o que solicites antes su supresión.</p>

    <h2>4. Destinatarios y encargados del tratamiento</h2>
    <p>No cedemos tus datos a terceros salvo obligación legal. Para prestar el servicio utilizamos proveedores tecnológicos que actúan como encargados del tratamiento con las garantías del art. 28 RGPD:</p>
    <ul>
      <li><strong>[HOSTINGER INTERNATIONAL LTD.]</strong> — alojamiento del sitio web y de las herramientas de automatización (servidores en la Unión Europea).</li>
      <li><strong>[GOOGLE IRELAND LTD.]</strong> — servicios de correo y hojas de cálculo donde se gestionan las solicitudes recibidas.</li>
    </ul>
    <p>Si alguno de estos proveedores tratase datos fuera del Espacio Económico Europeo, dicho tratamiento se ampararía en las Cláusulas Contractuales Tipo aprobadas por la Comisión Europea u otro mecanismo válido de transferencia internacional.</p>

    <h2>5. Tus derechos</h2>
    <p>Puedes ejercer en cualquier momento tus derechos de acceso, rectificación, supresión, oposición, limitación del tratamiento y portabilidad, así como retirar el consentimiento prestado, escribiendo a <strong>[EMAIL DE CONTACTO]</strong> e indicando el derecho que deseas ejercer. Deberás acompañar tu solicitud de información que permita verificar tu identidad.</p>
    <p>Si consideras que el tratamiento no se ajusta a la normativa, puedes presentar una reclamación ante la Agencia Española de Protección de Datos (<a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer">www.aepd.es</a>).</p>

    <h2>6. Seguridad</h2>
    <p>Aplicamos medidas técnicas y organizativas apropiadas para proteger tus datos frente a accesos no autorizados, pérdida o alteración, incluyendo el cifrado de las comunicaciones mediante HTTPS y el control de acceso a las herramientas donde se gestionan las solicitudes.</p>

    <h2>7. Cambios en esta política</h2>
    <p>Podremos actualizar esta política para adaptarla a cambios normativos o del servicio. La versión vigente estará siempre publicada en esta página con su fecha de última actualización.</p>

  </div>
</main>

<footer>
  <div class="wrap">
    <p>© 2026 Nerego Studio · Murcia, España</p>
    <nav>
      <a href="/aviso-legal.html">Aviso legal</a>
      <a href="/politica-privacidad.html">Política de privacidad</a>
      <a href="/politica-cookies.html">Cookies</a>
    </nav>
  </div>
</footer>

</body>
</html>

```

### Archivo: `politica-cookies.html`

```html
<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Política de Cookies | Nerego Studio</title>
<meta name="description" content="Política de cookies de Nerego Studio: qué cookies y tecnologías de almacenamiento utiliza neregostudio.com y cómo puedes gestionarlas.">
<meta name="robots" content="noindex, follow">
<link rel="canonical" href="https://neregostudio.com/politica-cookies.html">
<style>
  :root{--brand:#1A2B4A;--accent:#D4633A;--ink:#1f2430;--sub:#5b6270;--bg:#f7f6f3;--line:#e4e1da;}
  *{box-sizing:border-box;margin:0;padding:0;}
  body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Arial,sans-serif;color:var(--ink);background:var(--bg);line-height:1.7;}
  .top{background:var(--brand);color:#fff;padding:14px 0;}
  .top .wrap{display:flex;justify-content:space-between;align-items:center;}
  .top a{color:#fff;text-decoration:none;font-weight:700;font-size:.95rem;}
  .top a.back{font-weight:500;font-size:.85rem;color:#c9d4e8;}
  .wrap{max-width:820px;margin:0 auto;padding:0 24px;}
  header.page{padding:56px 0 32px;border-bottom:3px solid var(--accent);}
  header.page h1{font-size:2rem;color:var(--brand);line-height:1.2;}
  header.page p{color:var(--sub);margin-top:8px;font-size:.95rem;}
  main{padding:36px 0 72px;}
  h2{font-size:1.15rem;color:var(--brand);margin:34px 0 10px;}
  h2:first-of-type{margin-top:0;}
  p,li{font-size:.97rem;margin-bottom:12px;}
  ul{padding-left:22px;margin-bottom:12px;}
  li{margin-bottom:6px;}
  a{color:var(--accent);}
  table{width:100%;border-collapse:collapse;margin:10px 0 16px;font-size:.9rem;background:#fff;border:1px solid var(--line);border-radius:10px;overflow:hidden;}
  th,td{text-align:left;padding:10px 12px;border-bottom:1px solid var(--line);vertical-align:top;}
  th{background:var(--brand);color:#fff;font-size:.8rem;text-transform:uppercase;letter-spacing:.4px;}
  footer{border-top:1px solid var(--line);padding:26px 0 50px;text-align:center;color:var(--sub);font-size:.85rem;}
  footer nav{margin-top:8px;display:flex;gap:16px;justify-content:center;flex-wrap:wrap;}
  footer a{color:var(--sub);}
</style>
</head>
<body>

<div class="top">
  <div class="wrap">
    <a href="/">Nerego Studio</a>
    <a class="back" href="/">&larr; Volver al inicio</a>
  </div>
</div>

<header class="page">
  <div class="wrap">
    <h1>Política de Cookies</h1>
    <p>Última actualización: 5 de julio de 2026</p>
  </div>
</header>

<main>
  <div class="wrap">

    <h2>1. Qué son las cookies</h2>
    <p>Las cookies son pequeños archivos de texto que los sitios web almacenan en tu navegador. También existen tecnologías similares, como el almacenamiento local (localStorage), que cumplen funciones parecidas. En esta política usamos "cookies" para referirnos a ambas.</p>

    <h2>2. Qué cookies utiliza este sitio</h2>
    <p>https://neregostudio.com es un sitio informativo que utiliza únicamente cookies y almacenamiento técnico estrictamente necesarios para su funcionamiento. En concreto:</p>
    <table>
      <thead><tr><th>Origen</th><th>Tipo</th><th>Finalidad</th><th>Duración</th></tr></thead>
      <tbody>
        <tr>
          <td>Asistente de chat (propio, alojado en nuestra infraestructura)</td>
          <td>Técnica / de sesión</td>
          <td>Mantener el hilo de la conversación del chat mientras navegas por el sitio</td>
          <td>Sesión / hasta [DURACIÓN] </td>
        </tr>
      </tbody>
    </table>
    <p>Estas cookies técnicas están exentas del deber de consentimiento conforme al art. 22.2 de la LSSI-CE, ya que son imprescindibles para prestar el servicio que solicitas expresamente al usar el chat.</p>
    <p><strong>No utilizamos cookies de análisis, publicidad ni seguimiento de terceros.</strong> Si en el futuro incorporamos alguna (por ejemplo, herramientas de analítica), actualizaremos esta política y solicitaremos tu consentimiento previo mediante un aviso de cookies.</p>

    <h2>3. Cómo gestionar o eliminar las cookies</h2>
    <p>Puedes configurar tu navegador para bloquear o eliminar las cookies de este sitio. Ten en cuenta que, al ser cookies técnicas, bloquearlas puede impedir el funcionamiento del asistente de chat. Instrucciones para los navegadores más habituales:</p>
    <ul>
      <li><a href="https://support.google.com/chrome/answer/95647?hl=es" target="_blank" rel="noopener noreferrer">Google Chrome</a></li>
      <li><a href="https://support.mozilla.org/es/kb/impedir-que-los-sitios-web-guarden-sus-preferencia" target="_blank" rel="noopener noreferrer">Mozilla Firefox</a></li>
      <li><a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer">Safari</a></li>
      <li><a href="https://support.microsoft.com/es-es/microsoft-edge/eliminar-las-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer">Microsoft Edge</a></li>
    </ul>

    <h2>4. Más información</h2>
    <p>Para saber cómo tratamos los datos personales que puedas facilitarnos a través del chat o del formulario de contacto, consulta nuestra <a href="/politica-privacidad.html">Política de Privacidad</a>. Si tienes cualquier duda sobre esta política, escríbenos a <strong>[EMAIL DE CONTACTO]</strong>.</p>

  </div>
</main>

<footer>
  <div class="wrap">
    <p>© 2026 Nerego Studio · Murcia, España</p>
    <nav>
      <a href="/aviso-legal.html">Aviso legal</a>
      <a href="/politica-privacidad.html">Política de privacidad</a>
      <a href="/politica-cookies.html">Cookies</a>
    </nav>
  </div>
</footer>

</body>
</html>

```

---

## TAREA 2 — Enlazar las páginas legales en el footer de index.html

En el footer de `index.html`, los 3 enlaces legales apuntan hoy a `href="#"`. Sustitúyelos por:

```html
<a href="/aviso-legal.html">Aviso legal</a>
<a href="/politica-privacidad.html">Política de privacidad</a>
<a href="/politica-cookies.html">Cookies</a>
```

Elimina también el comentario `<!-- Páginas legales pendientes de crear (Fase futura) -->` si existe. Si hay más páginas además de index.html con el mismo footer, aplica el cambio en todas.

---

## TAREA 3 — Casilla de consentimiento RGPD en el formulario de contacto

El formulario de contacto recoge nombre, teléfono y tipo de negocio. Añade justo antes del botón de envío una casilla de consentimiento obligatoria, respetando el estilo visual existente del formulario:

```html
<label class="consent">
  <input type="checkbox" name="privacidad" required>
  He leído y acepto la <a href="/politica-privacidad.html" target="_blank" rel="noopener">política de privacidad</a>
</label>
```

Si el envío del formulario se gestiona por JavaScript (webhook a n8n), asegúrate de que la validación impide el envío si la casilla no está marcada. Añade el CSS mínimo necesario para que la casilla quede integrada con el diseño actual (tamaño de fuente pequeño, color secundario).

---

## TAREA 4 — og:image y twitter:image

En el `<head>` de `index.html` hay un comentario `<!-- TODO: añadir og:image cuando esté disponible -->`. Sustitúyelo por:

```html
<meta property="og:image" content="https://neregostudio.com/assets/img/og-image.jpg">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="Nerego Studio — Webs y automatización con IA para negocios locales">
<meta name="twitter:image" content="https://neregostudio.com/assets/img/og-image.jpg">
```

La imagen física NO existe todavía: créame un placeholder funcional. Genera `assets/img/og-image.jpg` de 1200×630 px programáticamente (por ejemplo con un script de Python/PIL o un SVG rasterizado): fondo azul marino #1A2B4A, texto "Nerego Studio" en blanco grande y debajo "Webs y automatización IA para negocios locales" en #D4633A o blanco al 70%. Peso final < 300 KB. Recuérdame al final que puedo sustituirla por una versión de diseño exportada del mockup del hero cuando quiera, sin tocar el HTML.

---

## TAREA 5 — Title y H1 con keyword + ubicación

- Cambia el `<title>` actual ("Nerego Studio — Más clientes, menos trabajo manual") por:

```html
<title>Nerego Studio | Webs y automatización IA en Murcia</title>
```

- Actualiza `og:title` y `twitter:title` para que coincidan con el nuevo title.
- Cambia el H1 por: `Más clientes y menos trabajo manual con automatización IA` (conserva cualquier markup interno de estilo/animación que tenga el H1 actual, solo cambia el texto).
- Revisa la meta description: si tiene 160 caracteres, recórtala a ~150 sin perder el mensaje.

---

## TAREA 6 — Nginx: redirección www→non-www + cabeceras de seguridad

Sustituye/actualiza la configuración de Nginx del repo con esta base (es la OPCIÓN B, pensada para Easypanel donde Traefik termina el SSL por delante y el Nginx del contenedor sirve HTTP). Intégrala con la configuración existente sin perder directivas que ya haya (gzip, error_page, etc.):

```nginx
# ============================================================
# CAMBIOS NGINX — neregostudio.com
# Corrige los puntos #3 y #4 de la auditoría SEO
# ============================================================

# ------------------------------------------------------------
# OPCIÓN A — Si el SSL lo termina tu propio Nginx del contenedor
# (poco probable en Easypanel, ver OPCIÓN B más abajo)
# ------------------------------------------------------------
# Bloque adicional: redirige www -> dominio raíz con 301 permanente
# server {
#     listen 443 ssl http2;
#     server_name www.neregostudio.com;
#     # rutas a certificados que cubran www.neregostudio.com
#     return 301 https://neregostudio.com$request_uri;
# }

# ------------------------------------------------------------
# OPCIÓN B — Setup habitual en Easypanel (Traefik delante termina
# el SSL y tu Nginx solo sirve HTTP dentro del contenedor).
# En este caso la redirección www se hace comparando el header Host:
# ------------------------------------------------------------
server {
    listen 80;
    server_name neregostudio.com www.neregostudio.com;

    root /usr/share/nginx/html;
    index index.html;

    # --- Fix #3: consolidar www -> non-www (301 permanente) ---
    if ($host = "www.neregostudio.com") {
        return 301 https://neregostudio.com$request_uri;
    }

    # --- Fix #4: cabeceras de seguridad ---
    # HSTS: fuerza HTTPS durante 1 año en navegadores que ya visitaron el sitio
    add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;
    # Evita que el navegador "adivine" tipos de contenido distintos al declarado
    add_header X-Content-Type-Options "nosniff" always;
    # Impide que la web se incruste en iframes de otros dominios (clickjacking)
    add_header X-Frame-Options "SAMEORIGIN" always;
    # Limita la información de referrer enviada a terceros
    add_header Referrer-Policy "strict-origin-when-cross-origin" always;

    location / {
        try_files $uri $uri/ =404;
    }

    # Cache razonable para estáticos (opcional, mejora rendimiento)
    location ~* \.(css|js|svg|png|jpg|jpeg|webp|ico|woff2?)$ {
        expires 30d;
        add_header Cache-Control "public, immutable";
        # OJO: dentro de un location con add_header, Nginx descarta los
        # add_header del nivel server. Hay que repetir los de seguridad:
        add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;
        add_header X-Content-Type-Options "nosniff" always;
        add_header X-Frame-Options "SAMEORIGIN" always;
        add_header Referrer-Policy "strict-origin-when-cross-origin" always;
    }
}

# ------------------------------------------------------------
# NOTAS IMPORTANTES ANTES DE DESPLEGAR
# ------------------------------------------------------------
# 1. En Easypanel, asegúrate de que el dominio www.neregostudio.com está
#    AÑADIDO al servicio (con su certificado). Si Traefik no conoce el
#    dominio www, la petición ni siquiera llegará a tu Nginx y la
#    redirección no podrá ejecutarse.
# 2. Si Easypanel ofrece "Redirect" a nivel de dominio en el panel,
#    puedes hacer la redirección ahí y dejar en Nginx solo las cabeceras.
#    Es igual de válido y más simple.
# 3. No añadimos Content-Security-Policy todavía: como cargas el widget
#    de chat desde un CDN externo, una CSP mal ajustada puede romperlo.
#    Se puede añadir en una segunda fase probando primero con
#    Content-Security-Policy-Report-Only.
# 4. Verificación tras el deploy:
#    curl -sI https://www.neregostudio.com/ | head -5   -> debe dar 301
#    curl -sI https://neregostudio.com/ | grep -i strict -> debe mostrar HSTS

```

Lee los comentarios del bloque: en particular, el detalle de que `add_header` dentro de un `location` descarta los del nivel `server` (por eso se repiten), y que NO se añade Content-Security-Policy en esta fase para no romper el widget de chat externo.

---

## TAREA 7 — favicon.ico de respaldo

Genera un `favicon.ico` (32×32, o multi-tamaño 16/32/48) a partir del favicon SVG existente del sitio y colócalo en la raíz. Si no puedes rasterizar el SVG en este entorno, crea un .ico simple con las iniciales "N" sobre fondo #1A2B4A. No hace falta enlazarlo en el HTML.

---

## TAREA 8 — sitemap.xml (opcional, decide por consistencia)

Las páginas legales llevan `noindex, follow`, así que NO las añadas al sitemap. Solo verifica que el sitemap sigue siendo consistente con las páginas indexables reales.

---

## VERIFICACIÓN antes de commitear

1. Valida que los 3 HTML nuevos son bien formados y que todos los enlaces internos entre ellos y hacia index.html funcionan con rutas correctas.
2. Comprueba que no queda ningún `href="#"` en el footer.
3. Comprueba que la config de Nginx pasa `nginx -t` si tienes forma de testearla (por ejemplo con Docker); si no, revisa la sintaxis manualmente.
4. Comprueba que og-image.jpg existe, mide 1200×630 y pesa < 300 KB.
5. Haz un resumen de todos los archivos creados/modificados.

## COMMITS Y PUSH

Haz 3 commits separados en este orden y luego push a la rama principal:

1. `feat: páginas legales RGPD/LSSI + checkbox consentimiento + enlaces footer`
2. `feat: og:image, twitter:image y title/H1 con keyword local`
3. `fix(nginx): redirección www->non-www + cabeceras de seguridad + favicon.ico`

## AL TERMINAR, RECUÉRDAME

- Los placeholders que debo rellenar a mano en las 3 páginas legales (lístalos).
- Que antes del deploy debo verificar en Easypanel que el dominio www.neregostudio.com está añadido al servicio con certificado (si Traefik no lo conoce, la redirección nunca se ejecutará).
- Que tras el deploy verifique:
  - `curl -sI https://www.neregostudio.com/ | head -5` → debe devolver 301
  - `curl -sI https://neregostudio.com/ | grep -i strict` → debe mostrar HSTS
  - La vista previa del enlace en https://www.opengraph.xyz y compartiéndomelo por WhatsApp
