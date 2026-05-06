const CACHE = 'prayer-times-v1';
const ASSETS = [
  '/Prayer-times/',
  '/Prayer-times/index.html',
  '/Prayer-times/icon.png',
  '/Prayer-times/manifest.json'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)));
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request))
  );
});
