//check for visited
document.addEventListener("DOMContentLoaded", function(){
	
	var form = document.getElementById('ga-form-container');
	
	if (document.cookie.indexOf("visited=") >= 0){
		// They've been here before.
		form.style.display = 'none';
	}
	else{
		form.style.display = 'flex';
	}
});



function gaOptIn(){
	var form = document.getElementById('ga-form-container');
	form.style.display = 'none';
	setCookie('y');
}
function gaOptOut(){
	var form = document.getElementById('ga-form-container');
	form.style.display = 'none';
	setCookie('n');
}



function setCookie(allow){
	expiry = new Date();
	expiry.setTime(expiry.getTime()+(10*60*1000)); // Ten minutes
	document.cookie = "visited=yes; expires=" + expiry.toGMTString();
}








//control whether the 3d model is loaded (src) and displayed (inline)
function toggleiFrame(){
	var heading = document.getElementById('toggle-model-text');
	var iframe = document.getElementById('martello');
	if(iframe.src == 'about:blank'){
		// iframe.src = 'https://www.mapsmadeeasy.com/maps/public_3D/8461da85c242470595e0981eed9e67bd';
		iframe.src = 'https://www.mapsmadeeasy.com/maps/public_3D/b70e7cbb91834eddaea1b944434bc41b';
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
		expandNav();
	}
	else{
		document.body.classList.remove('no-scroll');
		shrinkNav();
	}
}

function expandNav(){
	// logo.src = 'images/wide_tagline.svg';
	logo.style.height = ('3rem');
	navcontent.style.padding = ('0.5rem 6vw');
}

function shrinkNav(){
	if(atTop == 0){
		// logo.src = 'images/wide.svg';
		logo.style.height = ('1.8rem');
		navcontent.style.padding = ('0.3rem 6vw');
	}
}





//prevent scrolling when interacting with iframe
function iFrameScrollOff(){
	document.body.classList.add('no-scroll');
}
//
function iFrameScrollOn(){
	document.body.classList.remove('no-scroll');
}







//shrink navbar when scrolling
var logo = document.getElementById('nav-logo');
var navcontent = document.getElementById('navbar-content');
var atTop = 1;
window.onscroll = function(){  
	if((atTop == 1) && (window.scrollY > 80)){
		logo.src = 'images/wide.svg';
		logo.style.height = ('1.8rem');
		navcontent.style.padding = ('0.6rem 5vw');
		atTop = 0;
	}
	else if((atTop == 0) && (window.scrollY < 80)){
		logo.src = 'images/wide_tagline.svg';
		logo.style.height = ('3rem');
		navcontent.style.padding = ('0.6rem 5vw');
		atTop = 1;
	}
	//add a div for the promo offer that gets hidden on scroll down
};



// faq accordion
var faq = document.getElementsByClassName('faq-question');
var i,j,isActive = 0;

for (i = 0; i < faq.length; i++){
	faq[i].onclick = function(){
		
		//determine if clicked faq is already active
		isActive = this.classList.contains("active");
		//get answer element for clicked faq
		var answer = this.nextElementSibling;

		if(isActive){
			//remove active class from clicked faq
			this.classList.remove('active');
			//hide answer
			answer.style.display = 'none';
		}
		else{
			//close all faqs
			for (j = 0; j < faq.length; j++) {
				faq[j].classList.remove('active');
				faq[j].nextElementSibling.style.display = 'none';
			}
			//add active class to clicked faq
			this.classList.toggle('active');
			//display answer
			answer.style.display = 'block';
		}
	};
}