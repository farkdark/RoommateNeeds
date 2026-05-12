// Simple Service Worker
self.addEventListener('fetch', (event) => {
    // Allows the app to be installable
});

self.addEventListener('install', (event) => {
    self.skipWaiting();
});
