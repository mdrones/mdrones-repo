// Get new ideas off the ground
//Certain conditions can make flying impractical, but we always work hard to be flexible in the face of adverse weather.

//https://www.mapsmadeeasy.com/maps/public_3D/4d4d909a162343979289039a76ad1ed0
//https://www.mapsmadeeasy.com/maps/public_3D/8461da85c242470595e0981eed9e67bd

// setTimeout(function(){
// 	document.getElementById('martello').src = "https://www.mapsmadeeasy.com/maps/public_3D/8461da85c242470595e0981eed9e67bd";
// }, 8000);

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