# Verificación post-migración

> Checklist a ejecutar en Fase 17, inmediatamente después del swap de dominios.

## Estado: PENDIENTE — Fase 17

---

## Checklist funcional

### Páginas
- [ ] `https://neregostudio.com/` carga correctamente
- [ ] `https://neregostudio.com/diagnostico.html` carga correctamente
- [ ] `https://neregostudio.com/blog/` carga correctamente
- [ ] `https://neregostudio.com/blog/responder-resenas-google.html` carga
- [ ] `https://neregostudio.com/blog/citas-peluqueria-whatsapp.html` carga

### SSL
- [ ] HTTPS activo en `neregostudio.com`
- [ ] Redirección automática HTTP → HTTPS
- [ ] Sin warnings de certificado en Chrome/Safari/Firefox

### Redirecciones 301
- [ ] `/2026/05/24/como-responder-resenas-de-google-automaticamente-sin-perder-tiempo/` → 301 correcto
- [ ] `/2026/05/24/citas-peluqueria-whatsapp-automatico/` → 301 correcto
- [ ] URLs de WordPress conocidas → 301 o 404 controlado (no 500)

### Formulario de diagnóstico
- [ ] Envío de datos dummy llega al webhook n8n `/captacion-leads-v2`
- [ ] Mensaje de éxito visible al usuario
- [ ] Mensaje de error visible al usuario si el webhook falla

### Chatbot Neregón
- [ ] Widget `@n8n/chat` carga en la sección Demo
- [ ] Chips de preguntas sugeridas visibles
- [ ] Clic en chip inyecta texto correctamente
- [ ] Conversación funciona end-to-end

### Performance
- [ ] Lighthouse Performance ≥ 90
- [ ] Lighthouse Accessibility = 100
- [ ] Lighthouse Best Practices = 100
- [ ] Lighthouse SEO = 100
- [ ] LCP < 2.5s
- [ ] CLS < 0.1
- [ ] INP < 200ms

### SEO
- [ ] Meta title y description correctos en todas las páginas
- [ ] Open Graph funciona (test con opengraph.xyz o similar)
- [ ] Schema JSON-LD válido (test con Google Rich Results)
- [ ] `sitemap.xml` accesible en `https://neregostudio.com/sitemap.xml`
- [ ] `robots.txt` accesible en `https://neregostudio.com/robots.txt`
- [ ] Search Console: solicitar reindexación de las 5 páginas principales

### Analytics
- [ ] Plausible / GA4 recibe visitas (verificar en tiempo real)

---

## Comandos de verificación

```bash
# SSL y cabeceras
curl -I https://neregostudio.com/

# Redirecciones (debe devolver 301)
curl -I https://neregostudio.com/2026/05/24/como-responder-resenas-de-google-automaticamente-sin-perder-tiempo/
curl -I https://neregostudio.com/2026/05/24/citas-peluqueria-whatsapp-automatico/

# Test formulario n8n
curl -X POST https://neregostudio.com/captacion-leads-v2 \
  -H "Content-Type: application/json" \
  -d '{"nombre":"Test Verificacion","email":"test@neregostudio.com","negocio":"Test post-migración","telefono":"600000000"}'

# Sitemap accesible
curl -I https://neregostudio.com/sitemap.xml

# Robots accesible
curl https://neregostudio.com/robots.txt
```

---

## Resultado de la verificación

*Fecha de swap:* —
*Ejecutado por:* Joaquín
*Resultado:* —

| Check | Resultado | Notas |
|-------|-----------|-------|
| Páginas | — | — |
| SSL | — | — |
| Redirecciones | — | — |
| Formulario | — | — |
| Chatbot | — | — |
| Lighthouse | — | — |
| SEO | — | — |

---

*Tabla completada en Fase 17 con resultados reales.*
