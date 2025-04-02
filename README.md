# Service Worker Demo

Cette application web démontre l'utilisation des Service Workers pour créer une expérience hors ligne.

## 📋 Description

Ce projet simple montre comment utiliser un Service Worker pour :
- Mettre en cache des ressources web
- Permettre le chargement de l'application même hors connexion
- Vérifier l'état de connexion de l'utilisateur

## 🚀 Installation

1. Clonez ce dépôt ou téléchargez les fichiers
2. Vous devez servir les fichiers via un serveur web (les Service Workers ne fonctionnent pas avec `file://`)

   Vous pouvez utiliser **Live server** (Go Live) pour avoir un serveur local simple

## 💡 Comment tester

1. Ouvrez l'application dans votre navigateur
2. Attendez que le message "Service Worker enregistré ✅" apparaisse dans la console
3. Cliquez sur le bouton "Vérifier la connexion" pour voir votre état actuel
4. **Test hors ligne** :
   - Ouvrez les DevTools (F12)
   - Allez dans l'onglet "Application" ou "Network"
   - Activez le mode "Offline"
5. Rafraîchissez la page - elle devrait toujours fonctionner !

## 🔧 Structure des fichiers

- `index.html` - Structure HTML de l'application
- `styles.css` - Styles CSS de l'application
- `app.js` - Code JavaScript pour enregistrer le Service Worker et vérifier l'état de connexion
- `service-worker.js` - Code du Service Worker qui gère la mise en cache et les requêtes

## 📚 En savoir plus

Pour en apprendre davantage sur les Service Workers :
- [MDN Web Docs - Service Worker API](https://developer.mozilla.org/fr/docs/Web/API/Service_Worker_API)
- [web.dev - Service Workers](https://web.dev/learn/pwa/service-workers)