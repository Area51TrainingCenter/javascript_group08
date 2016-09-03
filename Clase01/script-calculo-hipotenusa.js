// Etiqueta para mostrar cálculo de hipotenusa
var etqHipotenusa = document.createElement("h1");
// Etiqueta para crear un formulario
var formulario = document.createElement("form");
// Etiqueta para crear una tabla
var tabla = document.createElement("table");
var filaUno = document.createElement("tr");
var filaDos = document.createElement("tr");

var celdaImagen = document.createElement("td");
var celdaCatetoOpuesto = document.createElement("td");
var celdaCatetoAdyacente = document.createElement("td");
var celdaBoton = document.createElement("td");

var imagen = document.createElement("img");
imagen.src = "triangulo.jpg";

var inputCatOp = document.createElement("input");
inputCatOp.type = "text";
inputCatOp.placeholder = "Cateto Opuesto";
inputCatOp.style.outline = "none";

var inputCatAd = document.createElement("input");
inputCatAd.type = "text";
inputCatAd.placeholder = "Cateto Adyacente";
inputCatAd.style.outline = "none";

var boton = document.createElement("input");
boton.type = "submit";
boton.value = "Calcular hipotenusa";

document.body.appendChild(etqHipotenusa);

celdaImagen.appendChild(imagen);
celdaCatetoOpuesto.appendChild(inputCatOp);
filaUno.appendChild(celdaImagen);
filaUno.appendChild(celdaCatetoOpuesto);

celdaCatetoAdyacente.appendChild(inputCatAd);
celdaBoton.appendChild(boton);
filaDos.appendChild(celdaCatetoAdyacente);
filaDos.appendChild(celdaBoton);

tabla.appendChild(filaUno);
tabla.appendChild(filaDos);

formulario.appendChild(tabla);

document.body.appendChild(formulario);


// Evento Click
boton.addEventListener("click", function(e){
	e.preventDefault();



	if(isNaN(inputCatAd.value) || isNaN(inputCatOp.value)) { 

		if(isNaN(inputCatOp.value)) {
			inputCatOp.style.border = "1px solid red";
		} else {
			inputCatOp.style.border = "";
		}

		if(isNaN(inputCatAd.value)) {
			inputCatAd.style.border = "1px solid red";
		} else {
			inputCatAd.style.border = "";
		}



	} else {
		inputCatOp.style.border = "";
		inputCatAd.style.border = "";

		var hipotenusa = Math.sqrt( Math.pow(inputCatAd.value,2) + Math.pow(inputCatOp.value, 2)  );
		etqHipotenusa.innerHTML = hipotenusa;
	}
});

inputCatAd.addEventListener("keyup", function(){
	if(isNaN(inputCatAd.value)) {
		inputCatAd.style.border = "1px solid red";
	} else {
		inputCatAd.style.border = "";
	}
});

inputCatOp.addEventListener("keyup", function(){
	if(isNaN(inputCatOp.value)) {
		inputCatOp.style.border = "1px solid red";
	} else {
		inputCatOp.style.border = "";
	}
});

