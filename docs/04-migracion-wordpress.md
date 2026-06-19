# Plan de migración desde WordPress

> Documento completado en Fase 16 (Swap de dominios).

## Estado: PENDIENTE — Fase 16

---

## Resumen del plan

1. Fase 12: Levantar nuevo sitio en `staging.neregostudio.com`
2. Fase 13: Auditoría Lighthouse y optimizaciones
3. Fase 14: Backup completo de WordPress
4. Fase 15: Configurar redirecciones 301 en Nginx
5. Fase 16: Swap de dominios en Easypanel
6. Fase 17: Verificación post-migración
7. Fase 18 (14 días después): Apagado definitivo de WordPress

---

## URLs a redirigir (conocidas)

```
/2026/05/24/como-responder-resenas-de-google-automaticamente-sin-perder-tiempo/
→ /blog/responder-resenas-google.html

/2026/05/24/citas-peluqueria-whatsapp-automatico/
→ /blog/citas-peluqueria-whatsapp.html
```

URLs adicionales pendientes de exportar desde Google Search Console.

---

## Checklist pre-swap

- [ ] Staging accesible y funcionando al 100%
- [ ] Lighthouse ≥ 90/100/100/100 en staging
- [ ] Formulario diagnóstico envía a n8n correctamente
- [ ] Chatbot Neregón carga en staging
- [ ] Todas las redirecciones 301 verificadas con curl
- [ ] Backup de WordPress descargado y verificado
- [ ] SSL listo para el dominio principal en el nuevo proyecto

---

## Procedimiento de swap (minuto a minuto)

*Se completa en Fase 16.*

---

## Plan de rollback

Si algo falla tras el swap:
1. En Easypanel: quitar `neregostudio.com` del proyecto nuevo
2. En Easypanel: volver a añadir `neregostudio.com` al proyecto WordPress
3. SSL se regenera automáticamente
4. Tiempo estimado de rollback: < 5 minutos

---

*Detalles completos y comandos de verificación se añaden en Fase 16.*
