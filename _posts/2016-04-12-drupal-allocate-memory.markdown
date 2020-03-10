---
layout: post
title: "Drupal REST services"
date:   2016-04-12 23:18:07 +0100
categories: drupal
thumbnail: "alloc.png"
---

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
