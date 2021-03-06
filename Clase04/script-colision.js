var anchoBody = document.body.offsetWidth;
var altoBody = document.body.offsetHeight;
var circulo = document.getElementsByTagName("div")[0];
var paletas = document.getElementsByClassName("paleta");

var px = circulo.offsetLeft,
	py = circulo.offsetTop,
    anchoCirculo = circulo.offsetWidth,
    altoCirculo = circulo.offsetHeight,
    dx = 20,
    dy = 20;

var altoPaleta = paletas[0].offsetHeight,
	anchoPaleta = paletas[0].offsetWidth;

function fntDetectarColision() {
	for(var i=0; i<paletas.length; i++) {
		var condH1 = paletas[i].offsetLeft < circulo.offsetLeft+circulo.offsetWidth;
		var condH2 = paletas[i].offsetLeft + paletas[i].offsetWidth > circulo.offsetLeft;

		var condV1 = paletas[i].offsetTop < circulo.offsetTop+circulo.offsetHeight;
		var condV2 = paletas[i].offsetTop+paletas[i].offsetHeight > circulo.offsetTop;		

		if(condH1 && condH2 && condV1 && condV2) {
			return true;
		}
	}
	return false;
}

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

	if(fntDetectarColision()) {
		dx *= -1;
	}

	px += dx;
	py += dy;



	circulo.style.left = (px + "px");
	circulo.style.top = (py + "px");

	

	funcionAnimacion(fntMovimiento);
}

function centrarPaletas(){
	for(var i=0; i<paletas.length; i++) {
		paletas[i].style.top = (altoBody/2 - altoPaleta/2) + "px";
	}
}

centrarPaletas();

// var posicionVMouse;

function fntSeguirMouse(e) {
	// posicionVMouse = e.pageX;
	if(e.pageY < altoBody-altoPaleta) {
		for(var i = 0; i<paletas.length; i++) {
			paletas[i].style.top = e.pageY + "px";
		}		
	}
}

document.addEventListener("mousemove", fntSeguirMouse);

var funcionAnimacion = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame;
funcionAnimacion(fntMovimiento);

// window.requestAnimationFrame(fntMovimiento);