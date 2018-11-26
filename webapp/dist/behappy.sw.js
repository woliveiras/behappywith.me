const identification = 'behappy.sw';
const version = 2;
const currentId = identification + '-' + version;
const previousId = identification + '-' + (version - 1);

const urls = [   
    '/',
    'bundle.js',
    'style.css',
    'img/avatars.png',
    'img/botoes.png',
    'img/favicon.ico',
    'img/logo.png',
    'img/icon-72x72.png',
    'img/icon-96x96.png',
    'img/icon-128x128.png',
    'img/icon-144x144.png',
    'img/icon-152x152.png',
    'img/icon-192x192.png',
    'img/icon-384x384.png',
    'img/icon-512x512.png'
];

installServiceWorker = () => {
    console.log('ServiceWorker Installed');
};

function activeServiceWorker() {
    caches.open(currentId).then(cache => {
        console.log(`Cache storage ${currentId} activated`);

        cache.addAll(urls)
            .then(function(){
                caches.delete(previousId)
                console.log(`Cache storage ${previousId} deleted`);
            })
    })
}

function searchFiles(event) {    
    event.respondWith(
        caches.match(event.request).then(function(cachedFile) {            
            return cachedFile ? cachedFile : fetch(event.request);
        })
    )
}

function searchFilesWithSave(event) {
    event.respondWith(
        caches.match(event.request).then(function(cachedFile) {        
            if (cachedFile) {
                return cachedFile;
            }

            const requestClone = event.request.clone();
            return fetch(requestClone).then(function(response) {                
                const responseClone = response.clone();
                caches.open(currentId).then(function(cache) {
                    cache.put(event.request, responseClone);
                });
                return response;
            });
        })
    );
}

self.addEventListener("activate", activeServiceWorker);
self.addEventListener("fetch", searchFiles);
self.addEventListener('install', installServiceWorker);