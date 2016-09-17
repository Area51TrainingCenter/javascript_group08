if(window.DeviceOrientationEvent) {
	var hGamma = document.getElementById("gamma"),
		hBeta = document.getElementById("beta"),
		hAlpha = document.getElementById("alpha");
	
	window.addEventListener("deviceorientation", function(evt){
		var alpha = evt.alpha,
			beta = evt.beta,
			gamma = evt.gamma;

		hAlpha.innerHTML = alpha;
		hBeta.innerHTML = beta;
		hGamma.innerHTML = gamma;


	})


}