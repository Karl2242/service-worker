/* app.js */

// Vérifie si le navigateur supporte les Service Workers
if ('serviceWorker' in navigator) {
    // Attends que la page soit complètement chargée
    window.addEventListener('load', function() {
        // Enregistre le fichier service-worker.js
        navigator.serviceWorker.register('./service-worker.js')
            .then(reg => {
                console.log('Service Worker enregistré ✅', reg);
            })
            .catch(err => console.error('Erreur d\'enregistrement du Service Worker ❌', err));
    });
}

// Vérifie si l'utilisateur est en ligne ou hors ligne
// Quand on clique sur le bouton, on vérifie l'état de la connexion
document.getElementById('check-online').addEventListener('click', () => {
    // navigator.onLine retourne true si l'utilisateur est en ligne, false sinon
    const status = navigator.onLine ? "✅ Vous êtes en ligne" : "⚠️ Vous êtes hors ligne";
    // Affiche le message dans l'élément HTML avec l'id 'status'
    document.getElementById('status').textContent = status;
});