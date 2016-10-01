var ancho = document.body.offsetWidth,
	altura = document.body.offsetHeight;

var contenido = document.getElementsByClassName("contenido")[0];
var poster = document.getElementsByClassName("poster")[0];
var info = document.getElementsByClassName("info")[0];
var horarios = document.getElementsByClassName("horarios")[0];
var criticas = document.getElementsByClassName("criticas")[0];

contenido.style.transform = "translateZ(-"+ altura/2 + "px)";
poster.style.transform = "translateZ("+ altura/2 + "px)";
info.style.transform = "rotateX(90deg) translateZ("+ altura/2 + "px)";
horarios.style.transform = "translateZ(-"+ altura/2 + "px) rotateY(180deg)";
criticas.style.transform = "rotateX(-90deg) translateZ("+ altura/2 + "px)";

var angulo = 0;

contenido.addEventListener("click", function(){
	angulo += 90;

	contenido.style.transform = "rotateX(-" + angulo + "deg)";
})