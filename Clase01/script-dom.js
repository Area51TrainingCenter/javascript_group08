// Ésta es una referencia a la etiqueta con el id igual a "titulo"
var refTitulo = document.getElementById("titulo");

// Aquí modificamos el contenido de la etiqueta seleccionada previamente
refTitulo.innerHTML = "Curso de Javascript";


var refPs = document.getElementsByTagName("p");
refPs[0].innerHTML = "Texto cambiado";
refPs[1].innerHTML = "Segundo texto cambiado";

var refCla = document.getElementsByClassName("rojo");

refCla[0].innerHTML = "Contenido de la primera clase";
refCla[1].innerHTML = "Contenido de la segunda clase";


// var refs = document.querySelector("p");
var refs = document.querySelectorAll("p");
refs[0].innerHTML = "Texto con querySelector";
refs[1].innerHTML = "Texto con querySelector";



