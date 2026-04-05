const CACHE='casa-comasine-v1';
const ASSETS=['./','./index.html','./manifest.json','./sw.js','./icons/icon-192.png','./icons/icon-512.png','./assets/bg-placeholder-1.jpg','./assets/bg-placeholder-2.jpg','./assets/bg-placeholder-3.jpg'];
self.addEventListener('install', e => e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS))));
self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request).catch(()=>caches.match('./index.html'))));
});
