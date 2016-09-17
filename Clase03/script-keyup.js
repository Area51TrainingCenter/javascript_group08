var nombre = document.getElementById("nombre");
var txt = document.getElementById("txt");

txt.addEventListener("keyup", function(){
	var textoIngresado = txt.value;
	nombre.innerHTML = textoIngresado;
});