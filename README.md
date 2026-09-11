# Novedades Fátima — Frontend

Página estática que es el formulario real de carga de novedades del Colegio
Fátima, y que además se puede instalar como acceso directo/PWA en el celular.

Habla con el backend (`novedades-fatima`, Apps Script) por `fetch()` a su
deployment, que expone una API JSON simple (login por sección, lectura de
casos/historial, guardado). No hay HTML servido desde Apps Script: eso evita
el problema de algunos Android/Chrome que bloquean cookies de terceros entre
`script.google.com` y `*.googleusercontent.com`, y que antes hacía fallar la
apertura de la app en algunos celulares (aparecía un error de "Google Drive"
al intentar abrir la URL del `/exec`).

No contiene ningún dato de alumnos ni credenciales en el código: la
contraseña de sección viaja por POST en cada request y no queda guardada acá.

## Contenido

- `index.html` — el formulario completo (login por sección, carga/actualización
  de casos, historial). Llama a la API de Apps Script vía `fetch()`.
- `manifest.json` — metadata de la PWA (nombre, ícono, modo standalone).
- `sw.js` — service worker vacío, solo para habilitar la instalación en más navegadores.
- `icon-192.png` / `icon-512.png` — íconos de la app.

## Publicar con GitHub Pages

1. Subir estos archivos a la raíz del repo (rama `main`).
2. Settings → Pages → Source: rama `main`, carpeta `/ (root)`.
3. Esperar 1-2 minutos y la página queda disponible en:
   `https://<usuario-o-org>.github.io/<nombre-del-repo>/`

## Si cambia la URL del deployment de Apps Script

Editar la constante `API_URL` en `index.html` (aparece una sola vez, al
principio del `<script>`).

## Instalar en el celular (para los directores)

1. Abrir el link de GitHub Pages en Chrome (o el navegador que usen).
2. Menú (⋮) → "Instalar aplicación" o "Agregar a pantalla de inicio".
3. Queda un ícono propio; al tocarlo abre directo el formulario de Novedades.

Quien ya tenía instalado el acceso directo de la versión anterior (la que
solo redirigía al `/exec`) no necesita reinstalar nada: la URL de GitHub
Pages no cambió, solo cambió qué sirve `index.html`.
