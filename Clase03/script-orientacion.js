if(window.DeviceOrientationEvent) {
/*	var hGamma = document.getElementById("gamma"),
		hBeta = document.getElementById("beta"),
		hAlpha = document.getElementById("alpha");*/

	var div = document.getElementsByTagName("div")[0];
	
	window.addEventListener("deviceorientation", function(evt){
		var alpha = parseInt(evt.alpha),
			beta = parseInt(evt.beta),
			gamma = parseInt(evt.gamma);

			div.style.transform = "rotateX(" + beta + "deg) rotateY(" + alpha + "deg) rotateZ(" + gamma + "deg)";

/*		hAlpha.innerHTML = alpha;
		hBeta.innerHTML = beta;
		hGamma.innerHTML = gamma;*/


	})


}