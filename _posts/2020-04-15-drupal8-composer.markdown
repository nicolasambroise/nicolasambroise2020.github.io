---
layout: post
title:  "Utilisation de Composer avec Drupal8"
date:   2020-04-15 07:58:43 +0100
categories: drupal
thumbnail: "ascenseur.jpg"
visible : false
---

Jusqu'à présent j'effectuer les mises à jour de Drupal à la main. Soit en passant par l'interface d'administration, soit en copiant-collant le module directement via FTP. A partir de la version 8.8.0 ce n'est plus trop possible, les mises à jours doivent se faire en passant par drush ou composer.

Afin de m'y retrouver j'ai fait une liste des commandes utiles :

- Verifier que Drush est bien installé
$ drush -v

- Activer le mode maintenance
$ drush sset system.maintenance_mode 1
Pour info mettre à 0 pour désactiver

- Clear le cache
$ drush cr
$ drush cache:rebuild
ATTENTION cela fonctionne si la fonction n'a pas été overright par un autre module de gestion de cache.

- Mise à jour de la Base de données
$ drush updb
$ drush updatedb

- Backup de la Base de données
$ drush sql:dump

- Backup de la config
$ drush config-export

- Verifier que composer est bien installer
$ composer -v

- Mettre à jour composer
$ composer self-update

- Création d'un site Drupal en ligne de commande
$ composer create-project drupal/recommended-project Le_nom_du_folder_de_mon_site
Ce qui donnera
$ composer create-project drupal/recommended-project d8_test
$ cd d8_test

- Convertion d'un site Drupal pour le rendre compatible avec Composer
Il suffit de se placer à la racine du projet Drupal
$ composer global require grasmash/composerize-drupal
$ composer composerize-drupal --composer-root=. --drupal-root=.
Cela va créer le fichier composer.json à la racine; Il ne restera qu'à lancer la commande suivante
$ composer install

- Ajouter un module
ATTENTION : Avant d'ajouter un module regarder bien si la partie "installer-paths" du fichier composer.json pointe bien sur "modules/contrib" sinon ça va être le bazar
$ composer require drupal/<module>
Ce qui donnera
$ composer require drupal/metatag
Il suffira ensuite de l'activer soit via drush, soit dans l'interface d'admin
Possibilité de ciblé une version spécifique
$ composer require 'drupal/token:^1.5' // for latest stable


- Desinstaller un module
ATTENTION, il devra déjà est desinstaller via l'interface d'admin, sinon il produira une erreur
$ composer remove drupal/<module>

- Ajout de module en masse
Il suffit d'ouvrir le fichier composer.json et de copier dans la partie "require" l'ensemble des dépendances
à partir d'un autre projet. Et ensuite de lancer la commande suivante
$ composer update
ATTENTION : Cette commande mets égalment à jour la version Core de Drupal.

- Mettre à jour un module
$ composer update --with-dependencies drupal/<module>
Note il est possible d'utiliser le "*" pour mettre à jour tout les modules mais je déconseille car si il y a la moindre erreur, c'est galère à réparer.

- Lister les modules/vendeur qui ne sont pas à jour
$ composer outdated

- Ajouter une libraire ou un vendor
Cela fonctionne exactement de la même façon que les modules.
$ composer require npm-asset/chosen-js:^1.8

- Ajouter un patch
Cela fonctionne exactement de la même façon que les modules.
$ composer require cweagans/composer-patches

- Mettre à jour Drupal Core en préprod
Dans une première étape regarder s'il y a des MAJ disponible sur le composer
$ composer update --dry-run "drupal/*"
ATTENTION si passage à la version 8.7.* à 8.8.*, il faudra vider le dossier vendor (rm -rf vendor) et mettre à jour pathauto (>1.6)
Lance la MAJ automatique avec gestion des dépendances
$ composer update drupal/core --with-dependencies
S'il y a une erreur, essayer une des commandes ci dessous (dans l'ordre qui sont de plus en plus risquée)
$ composer prohibits drupal/core:8.8.4   // force blocking dependencies
$ composer update drupal/core    // ne mets pas à jour les dépendances
$ composer update drupal/* --with-dependencies // Mets à jour le Core et certain module avec les dépendances
$ composer update drupal/*  // ne mets pas à jour les dépendances
$ composer update // Mets tout à jour (Core + Module + Lib + Vendor + Theme + Patch) ATTENTION au timeout.

- Mettre à jour Drupal Core en prod
Copier coller le fichier composer.json de la preprod et lancer la commande suivante
$ composer install --no-dev

### Links
https://www.drupal.org/docs/develop/using-composer
https://www.drupal.org/docs/8/update/update-core-via-composer
https://www.drupal.org/node/2700999
https://www.drupal.org/docs/8/install/add-composer-to-an-existing-site
https://www.drupal.org/docs/develop/using-composer/using-composer-to-install-drupal-and-manage-dependencies
