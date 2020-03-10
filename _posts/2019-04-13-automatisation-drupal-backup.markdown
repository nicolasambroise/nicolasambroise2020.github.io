---
layout: post
title: "Drupal REST services"
date:   2019-04-13 00:16:07 +0100
categories: drupal
thumbnail: "backup.jpg"
---
Backup Drupal
Le Backup Auto est très pratique pour les sites Drupal, si un problème survient ou si une mise à jour se passe mal, on peut restaurer son site à une version antérieur.

Pour accéder à la partie de configuration des Backup, il faut se rendre dans Configuration > Backup and Migrate



Trois types de Backup sont disponibles :

Backup de la base de données : un backup très rapide qui contient uniquement une extraction de la base de données
Sauvegarde des utilisateurs
Sauvegarde de la configuration du site
Sauvegarde des contenus (Pages, Activités, Contribution, etc.)
Backup du Public Files Directory : un backup plus long à générer, il contiendra les données suivantes :
Sauvegarde des images et des documents
Sauvegarde des modules
Sauvegarde du thème du site
Backup complet du site : ensemble des 2 backups précèdent.


Recommandations :

Nous vous conseillons de faire un backup de la base de données chaque semaine et un backup du Public Files Directory chaque mois.
Ces backups peuvent être programmés automatiquement mais un dossier de destination FTP doit être spécifié et il doit y avoir assez de place sur l’hébergeur. Il est également possible de supprimer automatiquement les anciens backups.
Avant chaque mise à jour importante, nous vous conseillons de faire un backup manuel du site.
