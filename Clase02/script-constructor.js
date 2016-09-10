function Perro(raza, tamano, genero, color, foto) {
	// var raza = "Siberian Husky";
	this.raza = raza;
	this.tamano = tamano;
	this.genero = genero;
	this.color = color;
	this.foto = foto;

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


var objPerro = new Perro("Shitzu", "pequeño", "hembra", "caramelo", "tati.jpg");
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


var objPerro2 = new Perro("Pastor Alemán", "grande", "Macho", "Marrón", "pastor.jpg");

console.log(objPerro2);