---
layout: post
title:  "Comparatif CMS"
date:   2020-01-26 07:05:57 +0100
categories: cms
thumbnail: "cms.jpg"
visible : true
---

Bonjour et bienvenue sur le premier article de cette nouvelle année 2020, pour ce premier article j'ai choisi le thème des CMS ( Content Management System) et notament sur le fait de comment choisir un CMS pour créer son site web.
Il y a de nombreux CMS qui existe sur le marché, certain nécessite une Base de données, d'autre nécessite des connaissances en programmation et d'autres ont des orientations particulières (blogging, evenementiel, e-commerce)

Ci dessus est une liste non-exhaustive des CMS qui existe, je vais vous donner un petit feedback des CMS qui j'ai déjà dû utiliser dans ma carrière de Développeur Frontend.

### 1) Drupal

C'est un des CMS que j'utilise depuis le plus longtemps, mon premier site Drupal remonte à 2008 lors d'un Stage en informatique dans une mairie. Mais c'est qu'en 2011 lors de la sortie de Drupal 7 que j'ai vraiment commencé à l'utiliser.
Ce CMS ne nécessite qu'une Base de données MySQL et d'un hébergeur pour le faire fonctionner. Très rapide à mettre en place, et extremement customisable avec de nombreux modules et templates il peut correspondre à tous les besoins. J'ai participé à des formations et j'ai appris à intégré mes propres thèmes (crée à partir du système de grid Twitter Bootstrap), mes propres modules et hooks (morceaux de code pour supplenter du code existant)
Avec la version 8 sortie fin 2015, et encore plus à partir de la version 8.8 datant de fin 2019, l'utilisation de Drupal nécessite de plus en plus l'utilisation de Drush / Composer pour gérer les changements de version du core et des modules.
Pour conclure, je dirais que c'est un CMS nécessitant un peu de connaissances en informatique, et qui est adapté à la pupart des cas d'utilisations. Par contre pour un site simple mono-utilisateur, son utilisation fait un peu l'effet d'une tondeuse pour couper un brin d'herbe...

### 2) Wordpress

Sans trop m'avancé, je peux dire que c'est le CMS le plus populaire est le plus utilisé. J'ai moi même eu un blog sur Wordpress de 2008 à 2011 concacré aux jeux vidéo. Comme pour Drupal il nécessite uniquement d'une base de données MySQL et d'un hébergeur. Il y a beaucoup de thème et beaucoup de module disponible (même si une bonne partie est payante).
Je pense que sa popularité et sa grande communauté est en même temps un grand avantage et son plus grand défaut. De nombreuses personnes n'ont jamais fait les mises à jours de sécurité, et de nombreux hackeur ciblent cette plateforme.
Contrairement à drupal, ou il y a un module pour chaque besoin avec une communauté de développeur derrière, l'impression que me donne Wordpress c'est que chaque développeur à créé son propre module.  C'est un CMS très bien fait, destiné à n'importe quel utilisateur à l'aise avec la bureautique en générale. Je recommande dans le cas d'un blog multiutilisateur ou d'un site statique avec un peu de e-commerce.

### 3) Typo3

J'avoue que je n'ai jamais testé en profondeur ce CMS. J'ai déjà fait un test d'installation de Typo3, et j'avous ne pas avoir vu d'avantage par rapport à un site Drupal ou Wordpress

### 4) Joomla / Spip / EZ Publish / Magento / Alfresco

Pour ces 5 CMS, j'ai eu quelques expériences très rapide. Très utilisé dans les années 2010, maintenant ils font plutôt l'objet de refonte vers Drupal et Wordpress

### 5) Wix / 1&1

Il existe de nombreux site clé en main, qui sont très attractifs pour les débutants. Ca convient très bien pour un site statique, où l'on souhaite juste une présence sur le web mais sans plus. Le piège c'est que chaque modification ou chaque ajout de fonctionnalité est payante.

### 6) Concrete 5 / Kentico 12

Des CMS un peu différent des autres car ils sont créés pour des débutants qui veulent une solution un peu plus évolué que les sites clés en main ( Wix / 1&1) mais qui ne nécessite pas des fonctionnalités trop poussées. Avec un interface très intuitive et un système très bien fait de wysiwyg / drag&drop c'est parfait pour un débutant qui souhaite un site vitrine, avec quelques articles et un formulaire de contact. Il faut aussi noté que Kentico est accès Cloud mais il est payant ce qui peut rebuter des entreprises.

### 7) Shopify / PrestaShop

Comme leurs noms l'indique, c'est CMS sont accès sur le e-commerce. Je suis déjà intervenu ponctuellement sur des sites utilisant ce CMS mais j'en ai une connaissance limité. Je prefaire passer par le module Commerce de Drupal ou par le plugin WooCommerce de Wordpress.

### 8) Blogger

J'ajoute quand même Blogger, c'est un CMS essentiellement axé sur le Blog, il en existe plein, mais c'est le plus populaire actuellement.

### 9) Jekyll / Hexo / Gridea

Les nouveaux venu dans la sphère des CMS qui offre une nouvelle alternative au CMS avec base de données. Effectivement ces CMS utilise des fichiers Markdown pour chacun des articles et nécessite une connaissance approfondie du code. Sans interface d'administration ils sont plutôt adapté


### Pour conclure
Il n'y a pas de CMS mieux que les autres, il faut voir en fonction du nombre d'utilisateur, des type de contenu, des fonctionnalité désirées pour choisir au mieux sont CMS (et en fonction de son niveau en informatique)

J'ai passé de 2008 à 2011 sur Wordpress, puis je me suis interessé à Drupal car c'était la solution la plus demandée par les entreprises. En ce début d'année 2020, j'ai suivi plusieurs tutoraux sur solution Jekyll (sponsorisé par Github) dans le but de refondre mon site Drupal 8 en quelque chose de beaucoup plus leger, de plus rapide et de beaucoup plus maintenable. Comme je suis le seul auteur, et que je rédige que peu d'article, chaque mois je passais plus de temps à mettre à jour le site Drupal 8 via composer qu'à rédiger les articles. Jekyll est très interressant car il n'y a plus d'interface administration, tout est géré avec quelques lignes de commandes et la syntaxe me rappelle étrangement de l'angular/mustashe.

Une fois que j'aurai fini de faire le tour de Jekyll, je souhaite me former sur AEM (Adobe Experience Manager) dans lequel je détect un fort potentiel.
