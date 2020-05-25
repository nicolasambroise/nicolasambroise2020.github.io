---
layout: post
title: "Drupal Corriger Erreur page Blanche WSOD"
date:   2019-07-18 23:18:07 +0100
categories: drupal
thumbnail: "alloc.png"
visible : false
---

J'ai rencontré, le mois dernier 2 erreurs drupal qui se sont traduite par des pages blanches (aussi appelée WSOD pour White Screen of Death) qui m'ont pris pas mal de temps à analyser et à corriger. Le problème de ses erreurs c'est qu'elles se sont produite sur des sites en production sans qu'aucune modification n'ai eu lieu les quelques jours qui ont précédée. L'une sur un site en Drupal 7 hébergé sur une serveur privé et l'autre sur un Site en Drupal 8 hébergé chez OVH.

### Erreur 1


### Erreur 2 sur le site en PHP

Comme je l'ai mentionné en introduction, sur un site Drupal 7 en production, j'ai reçu un appel d'un de mes collègues me disant que le site répondait avec une page blanche (il s'agit d'un site évenementiel que l'on met à jour que 3 mois avant l'evenement et fort heureusement on été hors de la période d'affluance)

En me connectant directement sur le server SQL, j'ai vu que la table watchlog était pleine de l'alerte suivante :
Warning include(): Unable to allocate memory for pool in ...

Si ce genre de message apparait sur un site en production, il vient rarement seul, généralement il remplit rapidement les logs et l'écran ( si l'affichage des erreurs n'a pas été désactivée)

Ce n’est pas un problème de Drupal c’est un problème PHP, il s’est posé plusieurs fois lors de la mise en place de Drupal sur le notre serveur. Et il s’est reposé quelque fois lors de mise à jour du Core de Drupal .

Un bon point, cela ne bloque ni la navigation, ni l'utilisation du site. Mais l'apparition de cette erreur est jointe à un ralentissement assez important du site ( car les pages ne sont plus mises en cache) et l'affichage des erreur nuit à l'expérience utilisateur. C’est pourquoi, sur plusieurs sites j’ai masqué ces messages d’erreur dans le menu config de Drupal.

Les causes possibles sont :

Plus de place sur le serveur, donc impossible de mettre des choses en cache => Peut être tester rapidement en uploadant un fichier (de taille moyenne) sur le serveur via FTP
Faire de la place sur le serveur, déplacer les Backup, fichier volumineux non utilisé ...
Aller visiter l’url « /admin/config/development/performance » et cliquer sur le bouton « Clear all cache »
Problème mémoire de PHP
Il faut redémarrer Apache et verifier si les services PHP Pear et PHP APC sont bien lancés.
Dans les configurations PHP (fichier php.ini coté serveur), éditer les valeurs ci-dessous puis redemarrer les services.
apc.enabled=1
apc.enable_cli = 1
apc.max_file_size 5M
apc.shm_size 256M
apc.ttl 120
apc.gc_ttl 120
apc.user_ttl = 120
apc.shm_segments=1
apc.shm_size=256M
apc.cache_by_default=1
apc.rfc1867=1
apc.stat=1
apc.slam_defense = 0


J'ai déjà été confronté plusieurs fois à ce problème, et j'espère que ce petit tuto pourra vous aider.


