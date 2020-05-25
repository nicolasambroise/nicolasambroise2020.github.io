---
layout: post
title:  "Utilisation de Composer avec Drupal8"
date:   2020-04-15 07:58:43 +0100
categories: drupal
thumbnail: "drupal-composer.jpg"
visible : true
---

Jusqu'à présent j'effectuer les mises à jour de Drupal à la main. Soit en passant par l'interface d'administration, soit en copiant-collant le module directement via FTP. A partir de la version 8.8.0 ce n'est plus trop possible, les mises à jours doivent se faire en passant par drush ou composer.

Avec l'arrivé de Drupal 9 qui aura lieu le 3 juin 2020, il est temps de faire un post la-dessus.

Afin de m'y retrouver j'ai fait une liste des commandes utiles :

- Verifier que Drush est bien installé
{% highlight powershell %}
$ drush -v
{% endhighlight %}

- Activer le mode maintenance
{% highlight powershell %}
$ drush sset system.maintenance_mode 1
{% endhighlight %}
Pour info mettre à 0 pour désactiver

- Clear le cache
{% highlight powershell %}
$ drush cr
$ drush cache:rebuild
{% endhighlight %}
ATTENTION cela fonctionne si la fonction n'a pas été overright par un autre module de gestion de cache.

- Mise à jour de la Base de données
{% highlight powershell %}
$ drush updb
$ drush updatedb
{% endhighlight %}

- Backup de la Base de données
{% highlight powershell %}
$ drush sql:dump
{% endhighlight %}

- Backup de la config
{% highlight powershell %}
$ drush config-export
{% endhighlight %}

- Verifier que composer est bien installer
{% highlight powershell %}
$ composer -v
{% endhighlight %}

- Mettre à jour composer
{% highlight powershell %}
$ composer self-update
{% endhighlight %}

- Création d'un site Drupal en ligne de commande
{% highlight powershell %}
$ composer create-project drupal/recommended-project Le_nom_du_folder_de_mon_site
{% endhighlight %}

Ce qui donnera
{% highlight powershell %}
$ composer create-project drupal/recommended-project d8_test
$ cd d8_test
{% endhighlight %}

- Convertion d'un site Drupal pour le rendre compatible avec Composer
Il suffit de se placer à la racine du projet Drupal
{% highlight powershell %}
$ composer global require grasmash/composerize-drupal
$ composer composerize-drupal --composer-root=. --drupal-root=. --no-update
{% endhighlight %}
Cela va créer le fichier composer.json à la racine; Il ne restera qu'à lancer la commande suivante
{% highlight powershell %}
$ composer install
{% endhighlight %}

- Ajouter un module
ATTENTION : Avant d'ajouter un module regarder bien si la partie "installer-paths" du fichier composer.json pointe bien sur "modules/contrib" sinon ça va être le bazar
{% highlight powershell %}
$ composer require drupal/<module>
{% endhighlight %}
Ce qui donnera
{% highlight powershell %}
$ composer require drupal/metatag
{% endhighlight %}
Il suffira ensuite de l'activer soit via drush, soit dans l'interface d'admin
Possibilité de ciblé une version spécifique
{% highlight powershell %}
$ composer require 'drupal/token:^1.5' // for latest stable
{% endhighlight %}


- Desinstaller un module
ATTENTION, il devra déjà est desinstaller via l'interface d'admin, sinon il produira une erreur
{% highlight powershell %}
$ composer remove drupal/<module>
{% endhighlight %}

- Ajout de module en masse
Il suffit d'ouvrir le fichier composer.json et de copier dans la partie "require" l'ensemble des dépendances
à partir d'un autre projet. Et ensuite de lancer la commande suivante
{% highlight powershell %}
$ composer update
{% endhighlight %}
ATTENTION : Cette commande mets égalment à jour la version Core de Drupal.

- Mettre à jour un module
{% highlight powershell %}
$ composer update --with-dependencies drupal/<module>
{% endhighlight %}
Note il est possible d'utiliser le "*" pour mettre à jour tout les modules mais je déconseille car si il y a la moindre erreur, c'est galère à réparer.

- Lister les modules/vendeur qui ne sont pas à jour
{% highlight powershell %}
$ composer outdated
{% endhighlight %}

- Ajouter une libraire ou un vendor
Cela fonctionne exactement de la même façon que les modules.
{% highlight powershell %}
$ composer require npm-asset/chosen-js:^1.8
{% endhighlight %}

- Ajouter un patch
Cela fonctionne exactement de la même façon que les modules.
{% highlight powershell %}
$ composer require cweagans/composer-patches
{% endhighlight %}

- Mettre à jour Drupal Core en préprod
Dans une première étape regarder s'il y a des MAJ disponible sur le composer
{% highlight powershell %}
$ composer update --dry-run "drupal/*"
{% endhighlight %}
ATTENTION si passage à la version 8.7.* à 8.8.*, il faudra vider le dossier vendor (rm -rf vendor) et mettre à jour pathauto (=1.6)
Lance la MAJ automatique avec gestion des dépendances
{% highlight powershell %}
$ composer update drupal/core --with-dependencies
{% endhighlight %}
S'il y a une erreur, essayer une des commandes ci dessous (dans l'ordre qui sont de plus en plus risquée)
{% highlight powershell %}
$ composer prohibits drupal/core:8.8.4   // force blocking dependencies
$ composer update drupal/core    // ne mets pas à jour les dépendances
$ composer update drupal/* --with-dependencies // Mets à jour le Core et certain module avec les dépendances
$ composer update drupal/*  // ne mets pas à jour les dépendances
$ composer update // Mets tout à jour (Core + Module + Lib + Vendor + Theme + Patch) ATTENTION au timeout.
{% endhighlight %}

- Mettre à jour Drupal Core en prod
Copier coller le fichier composer.json de la preprod et lancer la commande suivante
{% highlight powershell %}
$ composer install --no-dev
{% endhighlight %}

### Links
- [Utilisation de composer](https://www.drupal.org/docs/develop/using-composer)
- [MAJ du Core via composer](https://www.drupal.org/docs/8/update/update-core-via-composer)
- [Ajouter composer à un site existant](https://www.drupal.org/docs/8/install/add-composer-to-an-existing-site)
- [Gestion des dependances](https://www.drupal.org/docs/develop/using-composer/using-composer-to-install-drupal-and-manage-dependencies)


image from freecodecamp.org