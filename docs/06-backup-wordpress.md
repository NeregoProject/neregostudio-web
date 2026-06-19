# Backup de WordPress antes de la migración

> Documento completado en Fase 14 (Backup WordPress completo).

## Estado: PENDIENTE — Fase 14

---

## Qué respaldar

1. **Base de datos:** export SQL completo (posts, opciones, usuarios, taxonomías)
2. **wp-content/uploads/:** todas las imágenes y adjuntos subidos
3. **wp-content/themes/:** tema activo y cualquier tema hijo personalizado
4. **wp-content/plugins/:** listado de plugins activos (para referencia)
5. **wp-config.php:** credenciales de DB (encriptadas o anotadas aparte)

---

## Procedimiento desde Easypanel

*Se documenta en Fase 14 con pasos exactos y capturas.*

Opciones disponibles:
- Plugin All-in-One WP Migration desde el dashboard WordPress
- Acceso SFTP/SSH al VPS desde Easypanel → `tar` del directorio `/var/www/`
- mysqldump desde terminal Easypanel

---

## Dónde guardar el backup

```
backup/
└── wordpress-YYYY-MM-DD/
    ├── database.sql
    ├── uploads.tar.gz
    └── manifest.txt          # qué contiene, cuándo se hizo, hash MD5
```

La carpeta `backup/` está en `.gitignore`. El backup se guarda además en:
- Google Drive (carpeta: Nerego Studio / Backups / WordPress)
- Local en este mismo equipo fuera del repo

---

## Cuánto tiempo conservar

- **Mínimo:** 6 meses tras el apagado definitivo de WordPress (Fase 18)
- **Criterio para eliminar:** ningún usuario ha reportado contenido perdido + Search Console muestra indexación correcta del nuevo sitio

---

*Pasos exactos del procedimiento se añaden en Fase 14.*
