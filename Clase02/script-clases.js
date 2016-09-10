function Perro() {
	// var raza = "Siberian Husky";
	this.raza = "Siberian Husky";
	this.tamano = "Grande";
	this.genero = "Macho";
	this.color = "Negro";
	this.foto = "perro1.jpg";

/*	function ladrar() {
		alert("Perro ladrando");
	}*/

	this.ladrar = function() {
		// alert("Perro ladrando");
		var ladrido = document.createElement("audio");
		ladrido.src = "guau.mp3";
		ladrido.play();
	}
}


var objPerro = new Perro();
// objPerro.ladrar();

var ladrarPerro = document.getElementById("ladrarPerro");
ladrarPerro.addEventListener("click", function(){
	objPerro.ladrar();
})

console.log("Raza", objPerro.raza);
console.log("Tamaño", objPerro.tamano);
console.log("Género", objPerro.genero);
console.log("Color", objPerro.color);
console.log("Foto", objPerro.foto);
