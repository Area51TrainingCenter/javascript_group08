var anchoBody = document.body.offsetWidth;
var altoBody = document.body.offsetHeight;
var circulo = document.getElementById("pelota");
var paletas = document.getElementsByClassName("paleta");

var px = circulo.offsetLeft,
	py = circulo.offsetTop,
    anchoCirculo = circulo.offsetWidth,
    altoCirculo = circulo.offsetHeight,
    dx = 20,
    dy = 20;

var altoPaleta = paletas[0].offsetHeight,
	anchoPaleta = paletas[0].offsetWidth;

var score1 = 0,
	score2 = 0;

function fntDetectarColision() {
	for(var i=0; i<paletas.length; i++) {
		var condH1 = paletas[i].offsetLeft <= circulo.offsetLeft+circulo.offsetWidth;
		var condH2 = paletas[i].offsetLeft + paletas[i].offsetWidth >= circulo.offsetLeft;

		var condV1 = paletas[i].offsetTop <= circulo.offsetTop+circulo.offsetHeight;
		var condV2 = paletas[i].offsetTop+paletas[i].offsetHeight >= circulo.offsetTop;		

		var condSup = Math.abs((paletas[i].offsetTop) - (circulo.offsetTop+circulo.offsetHeight))  < 4;
		var condInf = Math.abs((paletas[i].offsetTop+paletas[i].offsetHeight) - (circulo.offsetTop)) < 4;

		if(condH1 && condH2 && condV1 && condV2) {
			if(condSup || condInf) {
				return {
					colision: "superior"
				}
			}
			return {
				colision: "lateral"
			};
		}
	}
	return {};
}

function fntActualizarScore(){
	var refScore1 = document.getElementsByClassName("marcadorIzquierdo")[0];
	var refScore2 = document.getElementsByClassName("marcadorDerecho")[0];

	refScore1.innerHTML = score1;
	refScore2.innerHTML = score2;
}

function fntMovimiento(){
	var limiteSuperiorX = (px + anchoCirculo + dx > anchoBody);
	var limiteInferiorX = (px + dx < 0);

	var limiteSuperiorY = (py + altoCirculo + dy > altoBody);
	var limiteInferiorY = (py + dy < 0);

	if(limiteSuperiorX || limiteInferiorX) {
		dx *= -1;
		if(limiteInferiorX) {
			score2++
		} else {
			score1++
		}

		fntActualizarScore();
	}

	if(limiteSuperiorY || limiteInferiorY) {
		dy *= -1;
	}

	var json = fntDetectarColision();
	if(json.colision != undefined) {
		if(json.colision=="lateral") {
			dx *= -1;
		} else {
			dy *= -1;
		}
		
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