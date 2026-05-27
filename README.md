# iTunes Mobile

iTunes Mobile est une application qui utilise l'API publique iTunes. Elle permet de rechercher des morceaux, de consulter le détail d'un résultat, de l'ajouter à une liste personnelle et de donner une note personnalisée.

## Fonctionnalités  
 

- Recherche dans l'API iTunes.
- Recherche par artiste ou par nom de track.
- Liste de résultats sélectionnables.
- Vue détail pour le résultat sélectionné.
- Ajout d'un morceau dans une liste personnelle.
- Rating personnalisé de 1 à 5 étoiles.
- Sauvegarde de la liste et des notes avec AsyncStorage.
- Lancement sur téléphone avec Expo Go.

## Technologies utilisées

- JavaScript
- React Native
- Expo
- API iTunes Search
- AsyncStorage

## Installation

Depuis le dossier du projet :

```bash
npm install
```

## Lancement

Pour lancer l'application avec Expo :

```bash
npm start

npx expo start --tunnel
```

la connexion locale ne fonctionnait pas correctement sur mon réseau. J'ai donc utilisé le mode tunnel d'Expo pour ouvrir l'application sur mon téléphone avec Expo Go.

## Organisation du code

```txt
src/
  components/
    AppHeader.js
    Library.js
    Rating.js
    ResultCard.js
    ResultsList.js
    SearchForm.js
    TrackDetails.js
  services/
    itunesApi.js
  utils/
    storage.js
App.js
```
