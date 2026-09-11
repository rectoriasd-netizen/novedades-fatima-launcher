// Service worker mínimo, solo para que algunos navegadores
// habiliten la opción "Instalar aplicación". No cachea nada
// ni intercepta pedidos: cada apertura va directo a la red.
self.addEventListener("install", function (event) {
  self.skipWaiting();
});

self.addEventListener("activate", function (event) {
  self.clients.claim();
});

self.addEventListener("fetch", function (event) {
  // No-op: dejamos pasar todos los pedidos tal cual.
});
