document.addEventListener("DOMContentLoaded", function() {
		let isFront = false;
		function hasId(element){
				return typeof element.id != 'undefined';
		}
		if( hasId(document.body) && document.body.id == 'page-front' ){isFront = true;}

		/* Content After load */
		if (isFront) {
			const afterload = document.getElementById("afterload");
			afterload.style.display = "block";
		}

		/* SpyScroll + Smooth Scroll */
		const makeNavLinksSmooth = ( ) => {
			const navLinks = document.querySelectorAll( '.page-scroll' );
		  for ( let n in navLinks ) {
		    if ( navLinks.hasOwnProperty( n ) ) {
		      navLinks[ n ].addEventListener( 'click', e => {
		        e.preventDefault( );
		        document.querySelector( navLinks[ n ].hash )
		          .scrollIntoView( {
		            behavior: "smooth"
		          } );
			      });
			    }
			  }
			}

		const spyScrolling = ( ) => {
			const sections = document.querySelectorAll( 'section' );
		  window.onscroll = ( ) => {
		    const scrollPos = document.documentElement.scrollTop || document.body.scrollTop;

		    for ( let s in sections )
		      if ( sections.hasOwnProperty( s ) && sections[ s ].offsetTop <= scrollPos ) {
		        const id = sections[ s ].id;
		        document.querySelector( '.active' ).classList.remove( 'active' );
		        document.querySelector( `a[href*=${ id }]` ).parentNode.classList.add( 'active' );
		      }
			  }
			}

		if (isFront) {
			makeNavLinksSmooth( );
			spyScrolling( );
		}

		/* NavBar class OnScroll + Responsive */
		let scrollpos = window.scrollY;
	  const header = document.querySelector("nav#mainNav");
	  const header_height = header.offsetHeight;

	  const add_class_on_scroll = () => {header.classList.add("affix");header.classList.remove("affix-top");}
	  const remove_class_on_scroll = () => {header.classList.remove("affix");header.classList.add("affix-top");}

		if(!isFront){
			add_class_on_scroll();
		}

	  window.addEventListener('scroll', function() {
	    scrollpos = window.scrollY;
		if(isFront){
	    	if (scrollpos >= header_height) { add_class_on_scroll(); }
	    	else { remove_class_on_scroll(); }
		}
	});
		

		const navBtn = document.querySelector("button.navbar-toggle");
		const navCollapse = document.querySelector("div.navbar-collapse");
		navBtn.addEventListener('click', function() {
			console.log("click Navbar");
			if (this.classList.contains('collapsed')) {
		    // The box that we clicked has a class of bad so let's remove it and add the good class
		   this.classList.remove('collapsed');
			 navCollapse.classList.add('in');
		 }
		 else {
			 this.classList.add('collapsed');
			 navCollapse.classList.remove('in');
		 }
		})

  	/* blob */

			function generateBlob(feature) {
			  const percentage1 = Math.floor(Math.random()*50)+25;
			  const percentage2 = Math.floor(Math.random()*50)+25;
			  const percentage3 = Math.floor(Math.random()*50)+25;
			  const percentage4 = Math.floor(Math.random()*50)+25;
			  var percentage11 = 100 - percentage1;
			  var percentage21 = 100 - percentage2;
			  var percentage31 = 100 - percentage3;
			  var percentage41 = 100 - percentage4;
			  var borderRadius = `${percentage1}% ${percentage11}% ${percentage21}% ${percentage2}% / ${percentage3}% ${percentage4}% ${percentage41}% ${percentage31}%`;
			  //$("."+feature).css("border-radius", borderRadius);
				document.getElementsByClassName(feature)[0].style.borderRadius = borderRadius;
			}

			if (isFront) {
				generateBlob("feature1");
				generateBlob("feature2");
				generateBlob("feature3");
				generateBlob("feature4");
				generateBlob("feature5");
				generateBlob("feature6");
			}
			/* Contact Form */
			const loadEasyContactCaptcha = ( ) => {
				const math = document.getElementById("math");
				const contactBtn = document.getElementById("contactBtn");
				math.addEventListener('keyup', (event) => {
					if (event.isComposing || event.keyCode === 229) {return;}
					console.log(math.value);
				    if(math.value == 42){contactBtn.disabled = false;}
					else{contactBtn.disabled = true;}
				});
			}

			if (isFront) {
				loadEasyContactCaptcha();
			}

			/* Support WebP */
			function canUseWebP() {
		    var elem = document.createElement('canvas');
		    if (!!(elem.getContext && elem.getContext('2d'))) {
		        // was able or not to get WebP representation
		        return elem.toDataURL('image/webp').indexOf('data:image/webp') == 0;
		    }
		    // very old browser like IE 8, canvas not supported
		    return false;
	   }
		  document.documentElement.classList.add((canUseWebP() ? 'webp' : 'no-webp'));


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



});
