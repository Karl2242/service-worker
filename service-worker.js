// Nom du cache où seront stockés les fichiers
const CACHE_NAME = "mon-app-cache-v1";
// Liste des fichiers à mettre en cache
const ASSETS = [
    "/", // Page d'accueil
    "/index.html", // Fichier HTML
    "/styles.css", // Feuille de styles
    "/app.js" // Script principal
];

// Installation du Service Worker : mise en cache des fichiers
self.addEventListener("install", event => {
    console.log("Service Worker installé !");
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            console.log("Mise en cache des fichiers...");
            return cache.addAll(ASSETS); // Ajoute les fichiers dans le cache
        })
    );
});

// Activation du Service Worker : suppression des anciens caches
self.addEventListener("activate", event => {
    console.log("Service Worker activé !");
    event.waitUntil(
        caches.keys().then(keys => {
            return Promise.all(
                keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))
            );
        })
    );
    return self.clients.claim(); // Active immédiatement le Service Worker
});

// Interception des requêtes réseau
self.addEventListener("fetch", event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            // Si la ressource est en cache, on la renvoie
            if (response) {
                return response;
            }
            // Sinon, on va chercher la ressource sur le réseau
            return fetch(event.request).then(networkResponse => {
                // Vérifie que la réponse est valide
                if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') {
                    return networkResponse;
                }
                // Copie la réponse et l'ajoute au cache
                const responseToCache = networkResponse.clone();
                caches.open(CACHE_NAME).then(cache => {
                    cache.put(event.request, responseToCache);
                });
                return networkResponse;
            });
        }).catch(() => {
            // Si hors ligne et ressource absente du cache, affiche un message d'erreur
            return new Response("⚠️ Vous êtes hors ligne et cette ressource n'est pas en cache.");
        })
    );
});