var contenedor = document.querySelector(".contenedor");
var cantidadLadrillos = 40;
var colores = ["red", "yellow", "green", "blue", "pink", "purple", "gray", "orange", "lightblue", "brown", "maroon", "navy", "aqua"];

function obtenerColorAleatorio(){
	var numero = Math.random();
	var numColor = Math.floor(numero*colores.length);

	return colores[numColor];
}

function agregarLadrillos(num) {
	for(var i=0; i<cantidadLadrillos; i++) {
		var ladrillo = document.createElement("div");
		ladrillo.className="ladrillo";
		ladrillo.style.backgroundColor = obtenerColorAleatorio();
		contenedor.appendChild(ladrillo);		
	}
}

agregarLadrillos();
