const CACHE_NAME = 'tutova-psychology-v2';
const urlsToCache = [
  '/',
  '/manifest.json',
  '/android-chrome-192x192.png',
  '/android-chrome-512x512.png',
  '/apple-touch-icon.png',
  '/_next/static/css/',
  '/_next/static/js/',
  '/offline.html'
];

// Установка сервис-воркера
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

// Перехват запросов
self.addEventListener('fetch', (event) => {
  // Обрабатываем только GET запросы
  if (event.request.method !== 'GET') return;
  
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Возвращаем кэшированную версию если есть
        if (response) {
          return response;
        }
        
        // Пытаемся загрузить из сети
        return fetch(event.request)
          .then((response) => {
            // Проверяем что ответ валидный
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }
            
            // Клонируем ответ для кэширования
            const responseToCache = response.clone();
            
            caches.open(CACHE_NAME)
              .then((cache) => {
                cache.put(event.request, responseToCache);
              });
            
            return response;
          })
          .catch(() => {
            // Если сеть недоступна, показываем офлайн страницу для навигационных запросов
            if (event.request.destination === 'document') {
              return caches.match('/offline.html');
            }
          });
      }
    )
  );
});

// Активация сервис-воркера
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});