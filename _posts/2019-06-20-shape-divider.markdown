---
layout: post
title: "Utiliser les séparateurs de sections"
date:   2019-06-20 17:51:58 +0100
categories: html5
thumbnail: "dividerCloud.png"
visible : true
---

<style>
.triangle:before {
    right: 50%;
    border-right: 1000px solid transparent;
    border-left: 1000px solid;
}

.triangle:after {
    left: 50%;
    border-left: 1000px solid transparent;
    border-right: 1000px solid;
}

.triangle:after, .triangle:before {
    content: '';
    position: absolute;
    bottom: 0;
    width: 50%;
    z-index: 10;
    border-bottom: 160px solid #FFFFFF;
}

.round svg{
	width: 100%;
    left: 0;
    bottom: -1px;
    height: 100%;
    position: absolute;
}
</style>

Dans les sites web, notament les site web en structure "one-page" il est de plus en plus courant de faire appel à des "shape divider" pour séparer les couleurs d'arrière plan des différentes sections.
Je vais vous montrer plusieurs solutions pour réaliser ce genre de séparation. 

Je ne traiterai pas ici des solutions qui utilisent des images jpg ou des png avec de la transparance car ce n'est pas du tout recommander pour ce qui est des performances du site.

### La séparation oblique simple

Une séparation oblique entre un fond transparant et un fond de couleur rouge. Avec juste un peu de CSS dans une div entre 2 sections. Minimaliste mais très efficace. Vous pouvez jouer sur l'hauteur et sur les couleurs de la propriété linear-gradient pour le personnaliser. 

{% highlight html %}
<div style="min-height: 100px;background-image: linear-gradient(to right top,hsla(0, 0%, 100%, 0) 48%,red 50%);"></div>
{% endhighlight %}

Démo :

<div style="min-height: 150px;background-image: linear-gradient(to right top,red 48%,hsla(0, 0%, 100%, 0) 50%);"></div>
<div style="min-height: 150px;background-image: linear-gradient(to right top,hsla(0, 0%, 100%, 0) 48%,red 50%);"></div>



### La séparation avec pseudo-elements CSS 

Un peu plus complexe que l'exemple ci-dessus. Voici un exemple utilisant les pseudo-élements CSS 
Afin de réaliser ma pointe du triangle, j'utilise le pseudo-element CSS before pour géré la partie gauche, et after pour la partie droite. Ensuite il suffit de jouer avec le rapport entre l'hauteur indiquer dans le paramètre border-bottom (ici 160px) l'hauteur de l'element parent (ici 200px) pour modifier l'angle du triange afin qu'il corresponde à vos besoins. Bon je l'avoue il reste pas mal de chose à optimiser ( largeur maximal 2000px, pas de meta class, etc.)

{% highlight html %}
<style>
.triangle:before {
    right: 50%;
    border-right: 1000px solid transparent;
    border-left: 1000px solid;
}

.triangle:after {
    left: 50%;
    border-left: 1000px solid transparent;
    border-right: 1000px solid;
}

.triangle:after, .triangle:before {
    content: '';
    position: absolute;
    bottom: 0;
    width: 50%;
    z-index: 10;
    border-bottom: 160px solid #FFFFFF;
}
</style>

<div style="background-color:green;width:100%;height:200px;margin-bottom:50px;position: relative;">
	<div class="triangle"></div>
</div>
{% endhighlight %}

Démo :

<div style="background-color:green;width:100%;height:200px;margin-bottom:50px;position: relative;">
	<div class="triangle"></div>
</div>

### L'utilisation des SVG

Solution la plus fréquente lorsqu'il s'agit de faire des formes un peu plus recherchées. Sur le principe c'est comme d'appliquer un png avec fond transparant entre deux sections colorées. Par contre les deux gros avantages sont qu'il n'y a pas de chargement d'images en plus lors du render de la page et la seconde c'est que le svg étant vectoriel, il s'adapte très bien au différent changement de dimention. 

{% highlight html %}
<style>
.round svg{
	width: 100%;
    left: 0;
    bottom: -1px;
    height: 100%;
    position: absolute;
}
</style>

<div style="background-color:blue;width:100%;height:200px;margin-bottom:50px;position: relative;">
	<div class="round">
		<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
			 width="240px" height="24px" viewBox="0 0 240 24" enable-background="new 0 0 240 24" xml:space="preserve" preserveAspectRatio="none"
			 style="height: 30%;width:102%;left:-1%;">
		<path fill="#ffffff" d="M119.849,0C47.861,0,0,24,0,24h240C240,24,191.855,0.021,119.849,0z"/>
		</svg>
	</div>
</div>
{% endhighlight %}


<div style="background-color:blue;width:100%;height:200px;margin-bottom:50px;position: relative;">
	<div class="round">
		<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
			 width="240px" height="24px" viewBox="0 0 240 24" enable-background="new 0 0 240 24" xml:space="preserve" preserveAspectRatio="none"
			 style="height: 30%;width:102%;left:-1%;">
		<path fill="#ffffff" d="M119.849,0C47.861,0,0,24,0,24h240C240,24,191.855,0.021,119.849,0z"/>
		</svg>
	</div>
</div>

### Bibliotheque proposant des formes SVG 

- [Elementor](https://elementor.com/blog/v130-shape-divider/) utilisée par de nombreux thèmes Wordpress
- [Joomla Quix Builder](https://www.themexpert.com/docs/quix-builder/features/shape-divider)