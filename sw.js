const CACHE_NAME = "valentine-app-v1";
const assetsToCache = [
  "./",
  "./index.html",
  "./style.css",
  "./app.js",
  "./data.js",
  "./icon-192.png",
  "./icon-512.png",
  "./YOUR_AUDIO_FILE.mp3" // Change this to your actual song file name!
];

// Install the service worker and cache the files
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log("Caching app assets");
      return cache.addAll(assetsToCache);
    })
  );
});

// Fetch files from the cache if offline
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      // Return the cached file if found, otherwise fetch from the network
      return response || fetch(event.request);
    })
  );
});

// Activate and clean up old caches
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(cachedResponse => {
      const fetchPromise = fetch(event.request).then(networkResponse => {
        caches.open(CACHE_NAME).then(cache => {
          cache.put(event.request, networkResponse.clone());
        });
        return networkResponse;
      });
      return cachedResponse || fetchPromise;
    })
  );
});
