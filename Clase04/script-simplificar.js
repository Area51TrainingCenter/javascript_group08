var anchoBody = document.body.offsetWidth;
var circulo = document.getElementsByTagName("div")[0];

var px = circulo.offsetLeft,
    anchoCirculo = circulo.offsetWidth,
    dx = 10,
    tiempo = 50;

function fntMovimiento(){
	var limiteSuperior = (px + anchoCirculo + dx > anchoBody);
	var limiteInferior = (px + dx < 0);

	if(limiteSuperior || limiteInferior) {
		// dx = dx * -1;
		dx *= -1;
	}

/*			if(px + dx < 0) {
		dx = dx * -1;
	}*/

	// px = px + dx;
	px += dx;

	circulo.style.left = (px + "px");
	setTimeout(fntMovimiento, tiempo);
}

setTimeout(fntMovimiento, tiempo);