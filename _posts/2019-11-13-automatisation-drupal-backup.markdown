---
layout: post
title: "Gestion du Backup dans Drupal"
date:   2019-11-13 00:16:07 +0100
categories: drupal
thumbnail: "backup.jpg"
visible : true
---
Les Backups sur les sites créer avec le CMS Drupal peuvent être automatiques et/ou manuels. Que ce soit sur Drupal 7 ou 8, je vous conseillerai d'installer le module "Backup & Migrate". Je pense qu'il fait partie du top10 des modules que j'installe de base sur tous mes sites.

Le Backup manuel est à privilégié juste avant les mises à jour, comme ça dans le cas où quelque choses se passe mal, on peut restaurer son site à une version antérieur

Le Backup automatique est également très pratique pour les sites Drupal, il permet de faire des backups à interval régulier. Donc s'il y a un problème qui se produit on pourra toujours retrouver une sauvegarde de son site.

Pour accéder à la partie de configuration des Backup, il faut se rendre dans Configuration > Développement >Backup and Migrate

### Les type de Backup

Trois types de Backup sont disponibles :

Backup de la base de données : un backup très rapide qui contient uniquement une extraction de la base de données
- Sauvegarde des utilisateurs
- Sauvegarde de la configuration du site
- Sauvegarde des contenus (Pages, Activités, Contribution, etc.)

Backup du Public Files Directory : un backup plus long à générer, il contiendra les données suivantes :
- Sauvegarde des images et des documents
- Sauvegarde des modules
- Sauvegarde du thème du site

Backup complet du site : ensemble des 2 backups précèdent.

### Ou sont stocké les Backups

Par défaut, ils arrivent directement dans votre dossier download. Vous pouvez également les stocker dans votre dossier privé "Private file directory" mais je vous le déconseille car en cas de crash celui ci n'est pas forcement accessible.
Vous pouvez également créer un dossier en dehors de votre site (même sur un autre hébergeur ou dans le cloud) afin d'avoir toujours au moins un backup récent accessible même en cas de crash de votre hébergeur.

### Mise en place du backup automatique

Il suffit de se rendre dans l'onglet "Schedules" et de cliquer sur le bouton "add Schedule".
Je vous conseil de faire un backup de la base de données chaque semaine et un backup du Public Files Directory chaque mois.

On peut garder un grand nombre de backup mais attention, il doit y avoir assez de place sur l’hébergeur sinon il risque de se remplir très vite. C'est pourquoi, il est également possible de supprimer automatiquement les anciens backups.

Mes recommandations pour un hebergeur de type Mutualisé OVH :
- Weekly Backup | Frequence : Weekly | Backup : only Bdd | Keep : Last 5 Backups
- Monthly Backyp | Frequence : Monthly | Backup : All | Keep : Last 2 Backups

### Conclusion

L'utilisation des Backup m'a quelques fois sauvé la vie. C'est pourquoi le module "Backup & Migrate" fait parti de mon top 10 des modules Drupal et que c'est sauvant l'un des premiers que je configure sur un nouveau site.
