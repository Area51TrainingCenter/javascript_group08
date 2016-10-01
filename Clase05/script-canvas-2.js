var canvas = document.getElementById("canvas"),
	contexto = canvas.getContext("2d");

contexto.strokeStyle = "blue";

var px = 0, py = 0;
contexto.moveTo(px, py);


canvas.addEventListener("mousemove", function(e) {
	contexto.lineTo(e.pageX-canvas.offsetLeft, e.pageY -canvas.offsetTop);
	contexto.stroke();
})