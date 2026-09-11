# Novedades Fátima — Launcher

Página estática que redirige a la webapp real de Apps Script
(`novedades-fatima`) y permite instalarla como acceso directo/PWA
en el celular, evitando el problema de algunos Android que
interceptan los enlaces a `script.google.com` y los mandan
(erróneamente) a la app de Google Drive.

No contiene ningún dato de alumnos ni credenciales: solo redirige
a la URL pública del deployment, que sigue protegida por el login
de Google como siempre.

## Contenido

- `index.html` — redirige de inmediato a la URL del `/exec` de Apps Script.
- `manifest.json` — metadata de la PWA (nombre, ícono, modo standalone).
- `sw.js` — service worker vacío, solo para habilitar la instalación en más navegadores.
- `icon-192.png` / `icon-512.png` — íconos de la app.

## Publicar con GitHub Pages

1. Subir estos archivos a la raíz del repo (rama `main`).
2. Settings → Pages → Source: rama `main`, carpeta `/ (root)`.
3. Esperar 1-2 minutos y la página queda disponible en:
   `https://<usuario-o-org>.github.io/<nombre-del-repo>/`

## Si cambia la URL del deployment de Apps Script

Editar la constante `DESTINO` en `index.html` (aparece una sola vez)
y el `href` del link de respaldo justo arriba en el mismo archivo.

## Instalar en el celular (para los directores)

1. Abrir el link de GitHub Pages en Chrome.
2. Menú (⋮) → "Instalar aplicación" o "Agregar a pantalla de inicio".
3. Queda un ícono propio; al tocarlo abre directo la app de Novedades.
