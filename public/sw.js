// Service Worker für optimales Caching
const CACHE_NAME = 'ixone-v1';
const urlsToCache = [
  '/',
  '/src/styles/components.css',
  '/fonts/inter-var.woff2',
  '/favicon.svg'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Cache hit - return response
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});