// Service worker de NutriScan: hace que la app abra y funcione sin conexión.
const CACHE = 'nutriscan-v11';
const SHELL = ['./', './index.html', './manifest.webmanifest', './icon-192.png', './icon-512.png', './apple-touch-icon.png'];
const ZXING = 'https://cdn.jsdelivr.net/npm/@zxing/library@0.21.3/umd/index.min.js';

self.addEventListener('install', e => {
  e.waitUntil((async () => {
    const c = await caches.open(CACHE);
    await c.addAll(SHELL);
    try { await c.add(new Request(ZXING, { mode: 'no-cors' })); } catch (_) {}
    self.skipWaiting();
  })());
});

self.addEventListener('activate', e => {
  e.waitUntil((async () => {
    for (const k of await caches.keys()) if (k !== CACHE) await caches.delete(k);
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  // Open Food Facts y Gemini: siempre por red (los datos ya se guardan en el iPhone)
  if (url.hostname.includes('openfoodfacts') || url.hostname.includes('googleapis')) return;
  // Lista de acceso: siempre la versión más reciente (nunca desde caché)
  if (url.origin === location.origin && url.pathname.endsWith('/accesos.txt')) return;

  if (req.url === ZXING) { // librería del escáner: primero caché
    e.respondWith(caches.match(req).then(r => r || fetch(req).then(res => {
      caches.open(CACHE).then(c => c.put(req, res.clone()));
      return res;
    })));
    return;
  }
  if (url.origin === location.origin) { // app: responde al instante desde caché y actualiza por detrás
    e.respondWith((async () => {
      const c = await caches.open(CACHE);
      const cached = await c.match(req, { ignoreSearch: true }) || (req.mode === 'navigate' ? await c.match('./index.html') : null);
      const net = fetch(req).then(res => { if (res.ok) c.put(req, res.clone()); return res; }).catch(() => null);
      return cached || (await net) || new Response('Sin conexión', { status: 503 });
    })());
  }
});
