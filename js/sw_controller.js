/* Services Worker */
if ("serviceWorker" in navigator) {
  if (navigator.serviceWorker.controller) {
    console.log("An active service worker found, no need to register");
  } else {
     navigator.serviceWorker.register("/serviceworker.js").then(function(reg) {
         console.log("Service worker has been registered for scope: " + reg.scope);
         if (!navigator.serviceWorker.controller) {return;}
         if(reg.installing) {
           console.log('Service worker installing');
           trackInstalling(reg.installing);return;
         } else if(reg.waiting) {
           console.log('Service worker installed');
           updateReady(reg.waiting);return;
         } else if(reg.active) {
           console.log('Service worker active');
         }
     }, function(err) {
    		  // registration failed :(
    		  console.log('ServiceWorker registration failed: ', err);
     });

     // Ensure refresh is only called once.
     // This works around a bug in "force update on reload".
     var refreshing;
       navigator.serviceWorker.addEventListener('controllerchange', function() {
       if (refreshing) return;
       console.log('Refreshing !');
       window.location.reload();
       refreshing = true;
     });
   }
 }

 function trackInstalling(worker) {
   var indexController = this;
   worker.addEventListener('statechange', function() {
   if (worker.state == 'installed') {
     updateReady(worker);
   }
   });
 };

 function updateReady(worker) {
   console.log("New version available");
   if (confirm('New version available, press OK to reload the website')) {
     worker.postMessage({action: 'skipWaiting'});
   } else {
     alert('Why did you press cancel? You should have confirmed');
   }
 };
