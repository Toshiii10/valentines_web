const CACHE_NAME = "valentine-app-v2";
const assetsToCache = [
  "./",
  "./index.html",
  "./style.css",
  "./app.js",
  "./data.js",
  "./icon-192.png",
  "./icon-512.png",
  "./YOUR_AUDIO_FILE.mp3"
];

self.addEventListener("install", event => {
  self.skipWaiting(); // Forces the new service worker to activate immediately
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(assetsToCache);
    })
  );
});

// Stale-While-Revalidate Pattern
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(cachedResponse => {
      const fetchPromise = fetch(event.request).then(networkResponse => {
        caches.open(CACHE_NAME).then(cache => {
          cache.put(event.request, networkResponse.clone());
        });
        return networkResponse;
      }).catch(() => {
        // Silently fail if offline, it will just use the cachedResponse
      });
      return cachedResponse || fetchPromise;
    })
  );
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cache => {
          if (cache !== CACHE_NAME) {
            return caches.delete(cache);
          }
        })
      );
    })
  );
});
