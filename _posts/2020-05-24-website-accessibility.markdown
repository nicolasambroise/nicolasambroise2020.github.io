---
layout: post
title:  "Accessibilité Web"
date:   2020-02-15 18:16:07 +0100
categories: lighthouse
thumbnail: "fusee.jpg"
visible : true
---

Cette article traite d'un domaine très vaste et souvant traité trop rapidement par les développeurs. Il s'agit de l'accessibilité. Cela concerne le fait de rendre votre site web accessible à tous. Que ce soit les personnes qui utilisent différent support pour accéder à votre site web (PC, tablette, smartphone), mais également pour les personnes qui ont une déficience (mal-voyant, mal-entendant, handicap moteur).
Il faut savoir que plus de 15% de la population souffre de handicap. La notion de handicap est à prendre avec des pincettes, effectivement un handicap visuel ne signifie pas directement aveugle, ça peux être un myopie ou du daltonisme. il faut donc soigner l'accessibilité du site si vous voulez que ces visiteurs ai une bonne image de votre marque.

L'accessibilité fait parti d'un des 5 axes qui font qu'un site sera pleinement fonctionnel.
- Optimisation des performances
- Mise en place d'un référencement naturelle (SEO)
- Rendre l'application disponible hors-ligne (PWA)
- Améliorer l'affichage et l'accessibilité (Responcive/Handicap + UI/UX)
- Augmenter la sécurité de votre site
Cet axe sera complété par la partie Design et Expérience utilisateur que nous traiterons dans un prochain post.


### 1) Le Responsive Design

Commençons par la notion de "Responsive Design", par ces 2 mots il s'agit d'adapter votre site web à différent support (PC écran 27", Laptop écran 12", Tablette, Smartphone, SmartTV, ...) et aux différentes orientations (Portrait et Paysage).

Lors de la création d'un nouveau site, le plus simple pour commencer est de partir d'un template qui intégre déjà le système de grille comme Bootstrap, Materialize (Material Design), CSS Pure ou encore Skeleton
https://getbootstrap.com/docs/4.5/layout/grid/
https://materializecss.com/
https://material.io/design/layout/responsive-layout-grid.html
http://getskeleton.com/
https://purecss.io/

La majeur partie de ces frameworks sont basés sur un système de grille à 12 ou 24 colonnes.
Ensuite, il faut prendre en compte le poids de ces différents frameworks, ainsi que les autres élément qui le compose. Il est conseillé de prendre le CSS form de Bootstrap si on utilise déjà son CSS grid. Car à trop mixer les frameworks CSS, il arrive qu'il y ai des conflits.

Il faudra ensuite bien lire la documentation du framework choisi pour comprendre comment former les éléments et quelles classes leur mettre.

Dans le cas où vous aurez besoin de créer un système de grille avec un nombre différent de colonnes ou avec un système métrique différent, je vous conseille ce lien pour vous faire gagner du temps https://grid.layoutit.com/

Si vous n'avez pas besoin d'un système de grille complexe car votre site est assez simple de structure ( ou si vous avez du temps et que vous voulez l'implémenter à la main ) il est possible de définir des "@media queries" dans votre CSS afin que la taille de vos elements puissent varier en fonction de la taille de l'écran.

Je vous conseil ces liens sur les "@media queries" :
https://www.alsacreations.com/article/lire/930-css3-media-queries.html
https://www.w3schools.com/css/css_rwd_mediaqueries.asp
https://openclassrooms.com/fr/courses/1603881-apprenez-a-creer-votre-site-web-avec-html5-et-css3/1607616-utilisez-le-responsive-design-avec-les-media-queries
https://developer.mozilla.org/fr/docs/Web/CSS/Requ%C3%AAtes_m%C3%A9dia/Utiliser_les_Media_queries


### 2) Gestion des handicaps

Comme je l'ai dis en introduction, il y a plusieurs sorte d'handicap et au sein de chaque catégorie il y a différentes variations et différent dégrès d'handicap.

Voyont d'abord les différentes sorte de handicap:

a) Handicap visuel
Dans cette catégorie je vais énuméré 3 sous-catégorie :
- Une personne fortement mal-voyante (Aveugle ou assimilé)
- Une personne mal-voyante (myope/presbyte)
- Une personne qui ne distingue pas les couleurs (daltonisme et assimilé)

Pour qu'une personne fortement mal-voyante puisse profité pleinement de l'utilisation de notre site web il faut que celui-ci soit propre afin que les logiciels de lecture vocal arrivent facilement à ce repéré.
Pour ce faire il faut que la structure html soit claire et que les balises sur les images soit bien renseignées.

Pour une personne mal-voyante il faudra veuiller à ce que les boutons soient bien dimensionnés (supérieur à 42px*42px) et distinct les un des autres. Il faudra également faire attention à la dimension des textes et à leur contrast. D'après la norme ANSI (adapté par le W3C ) une personne avec une acuité visuelle de 20:40 aurait besoin d'un contrast de 4,5:1 pour pouvoir lire correctement (AA) et une personne 20:80 aurait besoin d'un contrast 7:1 (AAA). Il existe de nombreux outil pour checker le contrast sur votre site 


Handicap auditif


Handicap moteur
