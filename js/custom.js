document.addEventListener("DOMContentLoaded", function() {

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
		      } );
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

		makeNavLinksSmooth( );
		spyScrolling( );

		/* NavBar class OnScroll + Responsive */
		let scrollpos = window.scrollY;
	  const header = document.querySelector("nav#mainNav");
	  const header_height = header.offsetHeight;

	  const add_class_on_scroll = () => header.classList.add("affix");
	  const remove_class_on_scroll = () => header.classList.remove("affix");

	  window.addEventListener('scroll', function() {
	    scrollpos = window.scrollY;

	    if (scrollpos >= header_height) { add_class_on_scroll() }
	    else { remove_class_on_scroll() }
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

			generateBlob("feature1");
			generateBlob("feature2");
			generateBlob("feature3");
			generateBlob("feature4");
			generateBlob("feature5");
			generateBlob("feature6");

			/* Contact Form */
			const math = document.getElementById("math");
			const contactBtn = document.getElementById("contactBtn");
			math.addEventListener('blur', (event) => {
				 console.log(math.value);
			   if(math.value == 42){contactBtn.disabled = false;}
				 else{contactBtn.disabled = true;}
			});
});
