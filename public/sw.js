const CACHE_NAME = 'drtrans-pwa-v3';

const PRECACHE_URLS = [
  '/',
  '/about/',
  '/area/',
  '/area/rental-motor-stasiun-madiun/',
  '/area/rental-mobil-stasiun-madiun/',
  '/area/rental-motor-terminal-purbaya-madiun/',
  '/area/rental-mobil-terminal-purbaya-madiun/',
  '/site.webmanifest',
  '/assets/aistudio/favicon_1c1a2659.svg',
  '/assets/aistudio/apple-touch-icon_f28537ea.png',
  '/assets/aistudio/icon-192_2a25d102.png',
  '/assets/aistudio/icon-512_279a0046.png',
  '/fonts/hanken-grotesk/hanken-grotesk-latin.woff2',
  '/fonts/instrument-serif/instrument-serif-latin-italic.woff2',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => cache.addAll(PRECACHE_URLS))
      .then(() => self.skipWaiting()),
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))))
      .then(() => self.clients.claim()),
  );
});

self.addEventListener('fetch', (event) => {
  const { request } = event;
  if (request.method !== 'GET') return;

  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  // Navigation requests: network-first with cache fallback
  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request)
        .then((response) => {
          if (response.ok) {
            const copy = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(request, copy));
          }
          return response;
        })
        .catch(async () => {
          const cached = await caches.match(request);
          return cached || (await caches.match('/')) || Response.error();
        }),
    );
    return;
  }

  // Static assets: cache-first with background refresh
  event.respondWith(
    caches.match(request).then((cached) => {
      const networkFetch = fetch(request)
        .then((response) => {
          if (response.ok) {
            const copy = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(request, copy));
          }
          return response;
        })
        .catch(() => cached);

      return cached || networkFetch;
    }),
  );
});
