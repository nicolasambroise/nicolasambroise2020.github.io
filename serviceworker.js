const CACHE = "NIA-offline-v0.1";

self.addEventListener("install", function(event) {
  event.waitUntil(preLoad());
});

var preLoad = function(){
  console.log("Installing web app");
  return caches.open(CACHE).then(function(cache) {
    console.log("caching index and important routes");

    return cache.addAll([
        '/',
        '/js/custom.min.js',
        '/js/manup.min.js',
        '/js/sw.min.js',
        '/css/critical.min.css',
        '/css/custom.min.css',
        '/css/main.css',

        '/img/avatar/AmbroiseNicolas2020Square100.png',
        '/img/avatar/AmbroiseNicolas2020Square100.webp',
        '/img/avatar/AmbroiseNicolas2020Square150.png',
        '/img/avatar/AmbroiseNicolas2020Square150.webp',
        '/img/avatar/AmbroiseNicolas2020Square200.png',
        '/img/avatar/AmbroiseNicolas2020Square200.webp',
        '/img/avatar/AmbroiseNicolas2020Square300.png',
        '/img/avatar/AmbroiseNicolas2020Square300.webp',
        '/img/avatar/AmbroiseNicolas2020Square500.png',
        '/img/avatar/AmbroiseNicolas2020Square500.webp',

        '/img/design/laptop.jpg',
        '/img/design/laptop.webp',
        '/img/design/overlay.png',
        '/img/design/overlay.webp',
        '/img/favicon/favicon-32x32.png',
        '/img/favicon/favicon-16x16.png',
        '/img/favicon/favicon-96x96.png',
        '/img/favicon/android-icon-192x192.png',

        '/fontawesome/webfonts/fa-brands-400.woff2',
        '/fontawesome/webfonts/fa-brands-400.woff',
        '/fontawesome/webfonts/fa-brands-400.ttf',
        '/fontawesome/webfonts/fa-solid-900.woff2',
        '/fontawesome/webfonts/fa-solid-900.woff',
        '/fontawesome/webfonts/fa-solid-900.ttf'
      ]);
  });
};

// If any fetch fails, it will look for the request in the cache and serve it from there first
self.addEventListener("fetch", function(event) {
  if (event.request.method !== "GET") return;
  event.respondWith(
    checkResponse(event.request).catch(function() {
      return returnFromCache(event.request);
    }));
  event.waitUntil(addToCache(event.request));
});

var checkResponse = function(request){
  return new Promise(function(fulfill, reject) {
    fetch(request).then(function(response){
      if(response.status !== 404) {
        fulfill(response);
      } else {
        reject();
      }
    }, reject);
  });
};

var addToCache = function(request){
  return caches.open(CACHE).then(function (cache) {
    return fetch(request).then(function (response) {
      console.log(response.url + " was cached");
      return caches.open(CACHE)
            .then(function (cache) {
                // here be the fix
                if (!/^https?:$/i.test(new URL(request.url).protocol)) return;
                cache.put(request, response);
            });
      //return cache.put(request, response);
    });
  });
};

var returnFromCache = function(request){
  return caches.open(CACHE).then(function (cache) {
    return cache.match(request).then(function (matching) {
     if(!matching || matching.status == 404) {
       return cache.match("offline.html");
     } else {
       return matching;
     }
    });
  });
};
