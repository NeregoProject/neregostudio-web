# Configuración de Easypanel

> Documento completado en Fase 12.

## Estado: PENDIENTE — Fase 12

---

## Proyecto staging

- **Nombre del proyecto:** `neregostudio-staging`
- **Tipo:** Static / Nginx
- **Dominio:** `staging.neregostudio.com`
- **SSL:** Let's Encrypt (automático)
- **Directorio raíz a servir:** `/src`
- **Nginx config:** subir `nginx/nginx.conf` adaptado para staging

## Proyecto producción

- **Nombre del proyecto:** `neregostudio`
- **Tipo:** Static / Nginx
- **Dominio:** `neregostudio.com`
- **SSL:** Let's Encrypt (automático)
- **Nginx config:** `nginx/nginx.conf` + `nginx/redirects.conf`

---

## Variables de entorno

Ninguna por ahora. El webhook de n8n se configura directamente en `src/js/form.js`
como constante (sin hardcodear en HTML visible).

---

*Pasos de Easypanel, opciones de menú y screenshots se añaden en Fase 12.*
