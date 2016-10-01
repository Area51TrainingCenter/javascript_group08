var canvas = document.getElementById("canvas"),
	contexto = canvas.getContext("2d");

contexto.strokeStyle = "blue";

var px, py;

var dibujar = false;

canvas.addEventListener("mousedown", function(e){
	px = e.pageX-canvas.offsetLeft;
	py = e.pageY-canvas.offsetTop;

	contexto.moveTo(px, py);
	dibujar = true;
})


canvas.addEventListener("mousemove", function(e) {
	if(!dibujar) return;

	contexto.lineTo(e.pageX-canvas.offsetLeft, e.pageY -canvas.offsetTop);
	contexto.stroke();
});

canvas.addEventListener("mouseup", function(e){
	dibujar = false;
})