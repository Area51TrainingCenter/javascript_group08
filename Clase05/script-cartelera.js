var pelicula = document.getElementsByClassName("pelicula")[0];

var angulo = 0;

pelicula.addEventListener("click", function(){
	angulo += 90;

	pelicula.style.transform = "rotateY(-" + angulo + "deg)";
})