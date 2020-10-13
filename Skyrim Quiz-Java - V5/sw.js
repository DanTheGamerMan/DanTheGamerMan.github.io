const version = 'v1';

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(version).then(function(cache) {
      return cache.addAll([
        '/',
        '/index.html',
        '/style.css',
        '/quizimages/amongus.png',
		'/quizimages/elder.jpg',
		'/quizimages/mc.jpg',
		'/quizimages/halo.jpg',
		'/quizimages/shadow.png',
		'/quizimages/village.jpg',
		'/quizimages/Miraak.jpg',
		'/quizimages/master.jpg',
		'/quizimages/fornite.jpg',
		'/quizimages/download.jpg',
		'/quizimages/tryagain.jpg',
        '/java.js',
        '/filenotfound.txt'
      ]);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(caches.match(event.request).then(function(response) {
    // caches.match() always resolves
    // but in case of success response will have value
    if (response !== undefined) {
      return response;
    } else {
      return fetch(event.request).then(function (response) {
        // response may be used only once
        // we need to save clone to put one copy in cache
        // and serve second one
        let responseClone = response.clone();

        caches.open(version).then(function (cache) {
          cache.put(event.request, responseClone);
        });
        return response;
      }).catch(function () {
        return caches.match('/filenotfound.txt');
      });
    }
  }));
});