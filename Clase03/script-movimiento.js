if(window.DeviceMotionEvent) {
	var circulo = document.getElementById("circulo");
	var ancho = document.body.offsetWidth,
		alto = document.body.offsetHeight;

	window.addEventListener("devicemotion", function(e) {
		var aceleracionX = e.accelerationIncludingGravity.x,
			aceleracionY = e.accelerationIncludingGravity.y;

		var posX = circulo.offsetLeft,
			posY = circulo.offsetTop;

		var anchoCirculo = circulo.offsetWidth,
			altoCirculo = circulo.offsetHeight;

		var desp = 5;


		if(aceleracionX > 2) {
			posX += desp;
			// circulo.style.left = (posX + desp) + "px";
		} else if(aceleracionX<-2) {
			posX -= desp;
			// circulo.style.left = (posX - desp) + "px";
		}

		if(aceleracionY > 2) {
			posY += desp;
			// circulo.style.top = (posY + desp) + "px";
		} else if(aceleracionY<-2) {
			posY -= desp;
			// circulo.style.top = (posY - desp) + "px";
		}

		var limInfX = (posX<0),
			limSupX = (posX > (ancho - anchoCirculo));

		if(limInfX) {
			posX = 0;
		} else if(limSupX) {
			posX = ancho - anchoCirculo;
		}

		var limInfY = (posY<0),
			limSupY = (posY > (alto - altoCirculo));

		if(limInfY) {
			posY = 0;
		} else if(limSupY) {
			posY = alto - altoCirculo;
		}

		circulo.style.left = posX + "px";
		circulo.style.top = posY + "px";

	})
}