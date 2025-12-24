// sw.js
const CACHE_NAME = 'niuniu-pwa-v1';
const urlsToCache = [
  './',
  './index.html',
  './manifest.json',
  './goldNiu.png',   // 如果您有图标
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
      .catch(err => console.log('缓存失败:', err))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});