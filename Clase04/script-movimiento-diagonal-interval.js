var anchoBody = document.body.offsetWidth;
var altoBody = document.body.offsetHeight;
var circulo = document.getElementsByTagName("div")[0];

var px = circulo.offsetLeft,
	py = circulo.offsetTop,
    anchoCirculo = circulo.offsetWidth,
    altoCirculo = circulo.offsetHeight,
    dx = 10,
    dy = 10,
    tiempo = 20;

function fntMovimiento(){
	var limiteSuperiorX = (px + anchoCirculo + dx > anchoBody);
	var limiteInferiorX = (px + dx < 0);

	var limiteSuperiorY = (py + altoCirculo + dy > altoBody);
	var limiteInferiorY = (py + dy < 0);

	if(limiteSuperiorX || limiteInferiorX) {
		dx *= -1;
	}

	if(limiteSuperiorY || limiteInferiorY) {
		dy *= -1;
	}

	px += dx;
	py += dy;

	circulo.style.left = (px + "px");
	circulo.style.top = (py + "px");
}

setInterval(fntMovimiento, tiempo);