const CACHE_NAME = 'water-app-v1';

// Install event - caching basic files
self.addEventListener('install', (event) => {
  console.log('Service Worker: Installed');
});

// Activate event
self.addEventListener('activate', (event) => {
  console.log('Service Worker: Activated');
});

// Fetch event - required for PWA install criteria
self.addEventListener('fetch', (event) => {
  // We leave this empty to let the browser handle requests normally,
  // but the presence of the fetch listener satisfies PWA requirements.
});
