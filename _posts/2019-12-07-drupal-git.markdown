---
layout: post
title:  "Utilisation des commandes Git sous Drupal"
date:   2019-12-07 19:02:23 +0100
categories: drupal
thumbnail: "drupal-github.jpg"
visible : true
---

J'ai pendant longtemps recherché et recherché les mêmes commandes git sous Drupal.
Notament sur comment faire un patch, soumettre mes propres modules et apporter des modifications à des modules existants.


### Pour s’identifier à Drupal

Pour ajouter vos identifiants Drupal en tant que variable globale
{% highlight console %}
git config --global user.name 'your_name'
git config --global user.email 'your_email'
{% endhighlight %}

Pour visualiser vos identifiants
{% highlight console %}
git config --global -l
{% endhighlight %}

### Pour récupérer un directory distant d'un module
{% highlight console %}
git clone -b 8.x-2.x https://git.drupalcode.org/project/domain_simple_sitemap.git
{% endhighlight %}
La dernière version du module domain_simple_sitemap est la 8.x-2.x

### Pour récupérer la version de la branche courante
{% highlight console %}
cd domain_simple_sitemap
git branch
{% endhighlight %}
Cela renvoi la liste des branches disponible : "8.x-1.x" et "8.x-2.x"
De plus noter la présence d'un astérix devant la banche active

### Pour créer une nouvelle branche à partir du HEAD
{% highlight console %}
git checkout -b 8.x-3.x
{% endhighlight %}
### pour créer une nouvelle branche à partir d'une branche
{% highlight console %}
git checkout -b 8.x-3.x 8.x-2.x
{% endhighlight %}
### Pour switcher de branche
{% highlight console %}
git checkout 8.x-1.x
{% endhighlight %}
### Pour supprimer une branche
{% highlight console %}
git branch -d 8.x-1.x
{% endhighlight %}
On peut également faire un Hard delete avec la commande ci-dessous
{% highlight console %}
git branch -D 8.x-1.x
{% endhighlight %}
Pour supprimer une branche distante
{% highlight console %}
git push origin --delete 8.x-1.x
{% endhighlight %}

### Pour commiter un changement
{% highlight console %}
git add -A
git commit -m "Commentaire concernant le changement"
{% endhighlight %}

### Pour commiter une branche
{% highlight console %}
git push origin -u 8.x-3.x
{% endhighlight %}
### Pour Pusher
Pour récupérer les commits en attente
{% highlight console %}
git status
{% endhighlight %}
Pour envoyer vers les servers Drupal
{% highlight console %}
git push origin 8.x-2.x
{% endhighlight %}

Si jamais il y a l’erreur suivante :
[drupalgit1.png]
[drupalgit2.png]
[drupalgit3.png]

Sasir votre nom d'utilisateur et votre nouveau password généré. 


### Pour créer un Patch
{% highlight console linenos %}
 git clone -b 8.x-2.x https://git.drupalcode.org/project/domain_simple_sitemap.git
 cd domain_simple_sitemap
 git branch 3037259-fix-for-domain_simple_sitemap
 git branch
 git checkout 3037259-fix-for-domain_simple_sitemap
 git branch
 [ Faire vos modif ]
 git diff
 git add -A
 git commit -m "Patch for domain simple sitemap - Test example"
 git diff 8.x-2.x
 git diff 8.x-2.x > 3037259-fix-for-domain_simple_sitemap.patch
{% endhighlight %}

On peut faire beaucoup plus court mais pour des raisons de compréhension, je vais expliciter ligne par ligne.
Donc on récupère une branche d'un module, on crée une nouvelle branche que l'on nomme en fonction de l'id de la node de l'issue sur le site drupal. On change pour mettre cette nouvelle branche en active.
Une fois vos modifications faites, on les commits vers cette nouvelle branche. Et on utilise la commande "git diff 8.x-2.x" pour lister les différences entre la branche courante et la branche "8.x-2.x". Le fait d'ajouter un fichier ".patch" dans la commande, exporte les modification à la racine du module dans un fichier ".patch"

### Pour appliquer un Patch
{% highlight console %}
git apply -v 3037259-fix-for-domain_simple_sitemap.patch
{% endhighlight %}

### links
- [Drupal Git intructions](https://www.drupal.org/project/drupal/git-instructions)
- [Getting started with Git on Drupal.org](https://www.drupal.org/node/1013552)
- [Making a Drupal patch with Git](https://www.drupal.org/node/707484)
- [Applying Drupal patches](https://www.drupal.org/patch/apply)

_Credit : Image from Drupal_git module_
