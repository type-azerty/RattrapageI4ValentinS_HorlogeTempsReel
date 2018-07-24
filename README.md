# HorlogeTempsReel par Valentin S
Projet effectué dans un but de rattrapage d'examen en I4.
Les fichiers qui vous intéresseront sont les fichiers : 
* \HorlogeTempsReel\Pages\index.cshtml (importance faible)
* \HorlogeTempsReel\wwwroot\js\script.js (importance majeure)
* \HorlogeTempsReel\HorlogeHub.cs (importance majeure)

## Note importante
Après de nombreuses tentatives, je n'ai pas bien réussi à mettre en place et faire fonctionner correctement le calcul de la latence et du delta et j'ai donc décidé de supprimer cette partie de mon code. Cependant, vous verrez qu'en local, ma libraire SignalR .NET Core arrive plutôt bien à synchroniser l'horloge entre les clients, je force le thread du back-end à recontacter tout les clients à chaque nouveau client qui se connecte. Lancer plusieurs navigateurs pour tester.

La version .NET Core de SignalR pour les projets temps réel venant tout juste de sortir, vous ne trouverez aucun projet similaire sur le net pour cette technologie. Les tutoriels restent encore à faire nous même. SignalR pour .NET Core est énormément différent de SignalR pour .NET Framework.

## Prérequis
- Linux ou Windows
- Visual Studio 2017 v15.7.3
- Runtime et SDK .NET Core 2.1

## Installation
Lancer le projet via le HorlogeTempsReel.sln dans Visual Studio 2017

## Accéder à l'application
- https://localhost:44313/ (certificat ssl sain, généré par iis)
- http://localhost:50934/

## License
BEERWARE
**Free Software**
Voir le fichier LICENSE.md

/*
 * ----------------------------------------------------------------------------
 * "THE BEER-WARE LICENSE" (Revision 42):
 * <phk@FreeBSD.ORG> wrote this file. As long as you retain this notice you
 * can do whatever you want with this stuff. If we meet some day, and you think
 * this stuff is worth it, you can buy me a beer in return Poul-Henning Kamp
 * ----------------------------------------------------------------------------
 */
