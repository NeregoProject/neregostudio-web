# Redirecciones 301 — WordPress → Nuevo sitio

> Documento completado en Fase 15 (Configuración Nginx + redirecciones).

## Estado: PENDIENTE — Fase 15

---

## Mapa de redirecciones conocidas

| URL origen (WordPress) | URL destino (nuevo sitio) | Estado |
|------------------------|---------------------------|--------|
| `/2026/05/24/como-responder-resenas-de-google-automaticamente-sin-perder-tiempo/` | `/blog/responder-resenas-google.html` | ⏳ Pendiente |
| `/2026/05/24/citas-peluqueria-whatsapp-automatico/` | `/blog/citas-peluqueria-whatsapp.html` | ⏳ Pendiente |
| `/wp-admin/` | `/` (home) | ⏳ Pendiente |
| `/wp-login.php` | `/` (home) | ⏳ Pendiente |

URLs adicionales: pendiente exportar Search Console y Screaming Frog crawl antes del swap.

---

## Configuración Nginx

Ver `nginx/redirects.conf` para el bloque `server {}` con las directivas `rewrite` y `return 301`.

---

## Verificación

```bash
# Verificar cada redirección individualmente
curl -I https://neregostudio.com/2026/05/24/como-responder-resenas-de-google-automaticamente-sin-perder-tiempo/
# Esperado: HTTP/2 301 + Location: /blog/responder-resenas-google.html

curl -I https://neregostudio.com/2026/05/24/citas-peluqueria-whatsapp-automatico/
# Esperado: HTTP/2 301 + Location: /blog/citas-peluqueria-whatsapp.html
```

---

*Configuración Nginx completa y resultados de verificación se añaden en Fase 15.*
