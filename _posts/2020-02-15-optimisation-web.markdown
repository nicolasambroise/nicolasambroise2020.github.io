---
layout: post
title:  "Optimisation Web & Performances"
date:   2020-02-15 18:16:07 +0100
categories: lighthouse
thumbnail: "fusee.jpg"
visible : true
---

Félicitation, vous venez de finir votre site web. Il y a maintenant pour moi 5 grands axes d'améliorations. Ces axes peuvent être traité dans l'ordre de votre choix ou même en parallèle.
- Optimisation des performances
- Mise en place d'un référencement naturelle (SEO)
- Rendre l'application disponible hors-ligne (PWA)
- Améliorer l'affichage et l'accéssibilité (Responsive + UI/UX)
- Augmenter la sécurité de votre site

Aujourd'hui, nous allons regarder plus en détail la partie performances, afin d'augmenter la rapidité de chargement de vos pages.
Logiquement, plus il y aura de fichiers (html/css/js/png/jpg/...) à charger lors de l'ouverture de la page, plus celle-ci sera longue à charger.
Qui n'a jamais été frustré par une barre de chargement qui n'avance pas lors du chargement d'un gros site web sur son smartphone.

Dans l'ordre :
1. Voir si on a effectivement besoin de toutes les ressources.
2. Voir si on a besoin de l'entièreté de ces ressources.
3. Voir si on peut réécrire certain script
4. Voir si on peut charger des versions locals des scripts
5. Voir si on peut optimiser le poids de ces fichiers
6. Voir si on peut optimiser le poids des images
7. Voir si on peut concaténer certain fichiers afin de réduire le nombre d'appel.
8. Voir si on peut ajouter un délais au chargement du JS/CSS afin de ne pas bloquer le chargement initial de la page.
9. Voir si on peut ajouter un délais au chargement des images afin de ne pas bloquer le chargement initial de la page.
10. Voir si on peut ajouter un délais au chargement du contenu sous la ligne de flottaison afin de ne pas bloquer le chargement initial de la page.

Vous pouvez avoir un aperçu de l'ensemble des fichiers qui sont chargés à l'ouverture de votre page dans l'onglet Network de votre inspecteur chrome. Ensuite un autre outil important de l'inspecteur est l'outil "Coverage" situé dans le console drawer de chrome. Pour utiliser ce dernier il suffit de cliquer sur le bouton "reload" et de naviguer sur votre page (passage au hover des boutons, redimentionner la fenetre, scroll sur la page...)

Notice d'utilisation de l'outil Coverage : https://developers.google.com/web/tools/chrome-devtools/coverage
Voici le rapport sur la première version de mon site:<br />

![Coverage JS](/img/illustration/perf1.PNG)
![Coverage CSS](/img/illustration/perf2.PNG)
<br />
### 1) Voir si on a effectivement besoin de toutes les ressources.
Concernant le premier point, il faut simplement enlevé les appels à tous les fichiers dont le taux de bits non-utilisé est à 100%.
Je me suis directement rendu compte que je chargais une police d'écriture "Poppins" à l'ouverture de la page alors que celle-ci n'était plus utilisée.
<br />
### 2) Voir si on a besoin de l'entièreté de ces ressources
Le second point concerne toutes les ressources mais principalement celle qui ont un taux de bits non-utilisé à plus de 80%.
Le fait de supprimer les parties qui ne sont pas appelé peuvent réduire le poids total
Effectivement je vois qu'il y a plusieurs CSS et JS qui ne sont que très faiblement utilisé. J'ai donc décidé de copier coller uniquement ce qui m'était utile dans un fichier séparé et j'ai ainsi pu supprimer les grosses bibliothèques CSS comme bootstrap, fontawesome ou animate.<br />
### 3) Voir si on peut réécrire certain script
Pour le point n°3, il concerne principalement les scripts JS. J'ai effectivement vu que je chargais beaucoup de bibliothèques JS que j'utilisais peu au final. J'ai donc pris la décision de réécrire mes scripts JQuery en Javascript. C'est un exercice assez fastidieux, mais après vous n'avais plus besoin d'appeler la célébre jquery.js.
Voici quelques liens que j'ai utilisé :<br>
[You might not need jQuery](http://youmightnotneedjquery.com/)<br>
[Convert jQuery to JS](https://github.com/jackocnr/intl-tel-input/wiki/Converting-jQuery-to-JavaScript)<br>
[SpyScroll with Vanilla JS](https://codepen.io/jonasmarco/pen/JjoKNaZ)<br>
[Change Class on Scroll JS](https://gist.github.com/ohiosveryown/93015ccc1f43437db6169dbfb18196fa)<br>
<br />
### 4) Voir si on peut charger des versions locals des scripts
Par exemple pour mes police au lieu de faire un appel au cdn de google, je les download et je les inclus localement dans un de mes fichiers CSS.
{% highlight css %}
@font-face {
  font-family: "Montserrat";
  src: url("../fonts/Montserrat-Regular.eot"); /* IE9 Compat Modes */
  src: url("../fonts/Montserrat-Regular.eot?#iefix") format("embedded-opentype"), /* IE6-IE8 */
    url("../fonts/Montserrat-Regular.otf") format("opentype"), /* Open Type Font */
    url("../fonts/Montserrat-Regular.svg") format("svg"), /* Legacy iOS */
    url("../fonts/Montserrat-Regular.ttf") format("truetype"), /* Safari, Android, iOS */
    url("../fonts/Montserrat-Regular.woff") format("woff"), /* Modern Browsers */
    url("../fonts/Montserrat-Regular.woff2") format("woff2"); /* Modern Browsers */
  font-weight: 400;
  font-style: normal;
}
{% endhighlight %}<br>
[Fonts Google à télécharger](https://fonts.google.com/)<br>
[Fonts gratuit à télécharger (Dafont)](https://www.dafont.com/fr/)<br>
[Fonts gratuit à télécharger (fontsquirrel)](https://www.fontsquirrel.com/)<br>
[Utiliser les fonts alternatifs](https://css-tricks.com/snippets/css/using-font-face/)<br>
[Convertisseur de fonts](https://www.font-converter.net/en)<br>

Il faut garder à l'esprit que le texte ne sera affiché qu'une fois le font chargé. Donc je vous conseil d'utiliser une police neutre pendant le chargement. Dans votre style critique (charger directement) il faut ajouter :
{% highlight css %}
html,body,h1,h2,p,a,... {
    font-family: sans-serif;
}
{% endhighlight %}<br>
[Gestion de l'affichage pendant le chargement](https://sidegains.com/seo/webfont-load/)
<br />
### 5) Voir si on peut optimiser le poids de ces fichiers<br />
Il existe plusieurs site qui permettent de créer des versions "minified" des fichiers JS et CSS, je vous conseil par exemple :<br>
[CSS minifier](https://cssminifier.com/)<br>
[JS minifier](https://javascript-minifier.com/)<br>
Je ne peux que vous conseiller d'utiliser Node avec un task runner (comme Gulp ou Grunt) afin de générer les fichiers minifié de manière automatique à chaque édition du le fichier source.
On peut également minifier les fichiers Html mais le bénefice engendré est moindre que pour le JS / CSS.
<br />
### 6) Voir si on peut optimiser le poids des images<br />
Pour les images, je pars du fait que les images sont déjà idéalement dimentionné et que vous connaissez déjà les différences entre une images en .jpg, en .png et en .gif.
Avec l'arrivé du format .webp il peut être tentant de convertir toutes les images de son site dans ce format afin de réduire grandement le poids des images sans perdre en qualité. Il faut garder à l'esprit que certain browser n'arrivent pas à lire ces images, il nous faut donc une image des fallback au cas où notre browser ne sait pas lire le webp :
{% highlight html %}
<picture>
    <source srcset="img/avatar/AmbroiseNicolas2020Square100.webp" type="image/webp">        
    <img alt="nicolas ambroise picture" src="img/avatar/AmbroiseNicolas2020Square100.png">
</picture>
{% endhighlight %}
On peut mettre les fallback en cascade s'il y a besoin de gérer également plusieurs dimentions d'images.		 
{% highlight html %}
<picture>
    <source media="(min-width: 1680px)" srcset="img/avatar/AmbroiseNicolas2020Square300.webp" type="image/webp">
    <source media="(min-width: 1200px)" srcset="img/avatar/AmbroiseNicolas2020Square200.webp" type="image/webp">
    <source media="(min-width: 767px)" srcset="img/avatar/AmbroiseNicolas2020Square150.webp" type="image/webp">
    <source srcset="img/avatar/AmbroiseNicolas2020Square100.webp" type="image/webp">
    <source media="(min-width: 1680px)" srcset="img/avatar/AmbroiseNicolas2020Square300.png">
    <source media="(min-width: 1200px)" srcset="img/avatar/AmbroiseNicolas2020Square200.png">
    <source media="(min-width: 767px)" srcset="img/avatar/AmbroiseNicolas2020Square150.png">
    <img alt="nicolas ambroise picture" data-entity-type="" data-entity-uuid="" src="img/avatar/AmbroiseNicolas2020Square100.png">
 </picture>
 {% endhighlight %}
Et comment ça se passe coté CSS me dirait vous ?
Pour cela il suffit de faire appel à la librairie modernizr afin d'ajouter la classe .webp sur la balise <html> de votre site (en asynchrone)
{% highlight css %}
.no-webp #header {
    background-image: url(../img/design/overlay.png);
}
.webp #header {
    background-image: url(../img/design/overlay.webp);
}
{% endhighlight %}
On peut également avoir le script directement sans passé par la lib modernizr
{% highlight js %}
function canUseWebP() {
    var elem = document.createElement('canvas');

    if (!!(elem.getContext && elem.getContext('2d'))) {
        // was able or not to get WebP representation
        return elem.toDataURL('image/webp').indexOf('data:image/webp') == 0;
    }

    // very old browser like IE 8, canvas not supported
    return false;
}
{% endhighlight %}
basé sur la réponse : [stackoverflow.com/5573096...](https://stackoverflow.com/questions/5573096/detecting-webp-support)

voici déjà un état intermédiaire lors de l'utilisation de Coverage
![Coverage JS-CSS](/img/illustration/perf3.PNG)
<br />
### 7) Voir si on peut concaténer certain fichiers afin de réduire le nombre d'appel.<br />
Comme signalé en introduction de la partie performance, plus il y a de fichier et plus ceux-ci sont volumineux et plus le site va mettre de temps à tout récupérer et traiter. Une bonne idée peut-être de concaténer les fichiers CSS qui se charge en même temps au sein d'un même fichier. De même pour le JS. Je vous recommanderai de toujours avoir un fichier critical.css qui contient uniquement le style minimum pour que votre site renvoi un rendu agréable. Celui la ne doit pas être inclu dans le fichier concaténé.
<br />
### 8) Voir si on peut ajouter un délais au chargement du JS/CSS afin de ne pas bloquer le chargement initial de la page.<br />
Dans un premier temps il faut déplacer un maximum de JS en bas de la page afin de les faire charger après le html.
{% highlight html %}
<!-- Critical -->
<link rel="stylesheet" href="/css/critical.min.css" type="text/css">
 <!-- Preload -->
<link rel="preload" href="/css/main.css" as="style" onload="this.rel='stylesheet'">
<link rel="preload" href="/css/custom.min.css" as="style" onload="this.rel='stylesheet'">

<!-- NoScript -->
<noscript>
   <link rel="stylesheet" href="/css/main.css" type="text/css">
   <link rel="stylesheet" href="/css/custom.min.css" type="text/css">
</noscript>
{% endhighlight %}
### 9) Voir si on peut ajouter un délais au chargement des images afin de ne pas bloquer le chargement initial de la page.<br />
Dans le html
{% highlight html %}
<br />
<img data-src="/img/thumbnail/image.jpg" style="width:100%" alt="image" loading="lazy" class="lazyload">
{% endhighlight %}

Dans le JS
{% highlight js %}
/* Lazy Loading */
if ('loading' in HTMLImageElement.prototype) {
	const images = document.querySelectorAll('img[loading="lazy"]');
	images.forEach(img => {
		img.src = img.dataset.src;
	});
} else {
	// Dynamically import the LazySizes library
	const script = document.createElement('script');
	script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.1.2/lazysizes.min.js';
	document.body.appendChild(script);
}
{% endhighlight %}
Plus d'info sur Native Script <br>
[Native lazy loading](https://web.dev/native-lazy-loading/#load-in-distance-threshold)<br>
<br />
### 10) Voir si on peut ajouter un délais au chargement du contenu sous la ligne de flottaison afin de ne pas bloquer le chargement initial de la page.<br />

Bien plus simple qu'il n'y parait il suffit d'encapsuler l'ensemble de votre contenu dans une div portant un id précis, pour mon exemple j'ai pris l'id "afterload", il suffit d'afficher le contenu une fois le DOM pret.
{% highlight html %}
<body>
  <div id="directload">
  ...
  </div>
  <div id="afterload">
  ...
  </div>
  <script>
  document.addEventListener("DOMContentLoaded", function() {
    const afterload = document.getElementById("afterload");
    afterload.style.display = "block";
  });
  </script>
</body>
{% endhighlight %}
Une autre solution serait de charger le reste du site en Ajax pour réduire encore un peu, ou pour faire un effet infinite scrolling mais c'est uniquement bénéfique si le contenu est très très long...

### Tester votre performance
- [Audit Google Lighthouse](https://developers.google.com/web/tools/lighthouse) : Inspecteur chrome (F12) puis onglet Audit
- [WebPageTest](https://www.webpagetest.org/)
- [Gtmetrix](https://gtmetrix.com/)
- [Pingdom](https://tools.pingdom.com/)

 <br>
### En resumé
Il y a plein de chose à faire pour réduire le nombre de bits téléchargé au début du chargement. Dans mon exemple, je passe de 41 requetes pour une total d'environ 605.5KB à 20 requetes pour un total de 377.6KB. On visualise mieux le résultat ainsi : on passe de 3.4s (+2.5s pour le full download) de chargement à 0.9s de temps de chargement.
