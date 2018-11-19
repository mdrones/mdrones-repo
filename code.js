//control whether the 3d model is loaded (src) and displayed (inline)
function toggleModel(){
	var heading = document.getElementById('toggle-model-text');
	var iframe = document.getElementById('martello');
	if(iframe.src == 'about:blank'){
		iframe.src = 'https://www.mapsmadeeasy.com/maps/public_3D/8461da85c242470595e0981eed9e67bd';
		heading.innerHTML = "Hide 3D Model";
		iframe.style.display = 'inline';
	}
	else if(iframe.style.display == 'none'){
		heading.innerHTML = "Hide 3D Model";
		iframe.style.display = 'inline';
	}
	else if(iframe.style.display == 'inline'){
		iframe.style.display = 'none';
		heading.innerHTML = "Show 3D Model";
	}
}

//toggle-remove scrollbars when the menu is open to prevent scrolling
window.onload = toggleScroll();
function toggleScroll(){
	var menuOpen = document.getElementById('menu-checkbox').checked;
	if(menuOpen){
		document.body.classList.add('no-scroll');
	}
	else{
		document.body.classList.remove('no-scroll');
	}
}

// https://www.w3schools.com/howto/howto_js_accordion.asp
var acc = document.getElementsByClassName('faq-question');
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");

        /* Toggle between hiding and showing the active panel */
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}

//shrink navbar when scrolling
var logo = document.getElementById('main-logo');
var navcontent = document.getElementById('navbar-content');
var atTop = 1;
window.onscroll = function(){  
	if((atTop == 1) && (window.scrollY > 200)){
		logo.src = 'images/wide.svg';
		logo.style.height = ('1.8rem');
		navcontent.style.padding = ('0.3rem 6vw');
		atTop = 0;
	}
	else if((atTop == 0) && (window.scrollY < 200)){
		logo.src = 'images/wide_tagline.svg';
		logo.style.height = ('2.8rem');
		navcontent.style.padding = ('0.6rem 6vw');
		atTop = 1;
	}
}