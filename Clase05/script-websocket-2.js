var ws = new WebSocket("ws://159.203.86.61:9000", "echo-protocol");

var canvas = document.getElementById("canvas"),
	contexto = canvas.getContext("2d");

var canvasR = document.getElementById("canvasR"),
	contextoR = canvasR.getContext("2d");

contexto.strokeStyle = "blue";
contextoR.strokeStyle = "green";

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

	var info = {};
	info.x0 = px;
	info.y0 = py;
	info.x1 = e.pageX-canvas.offsetLeft;
	info.y1 = e.pageY-canvas.offsetTop;

	px = e.pageX-canvas.offsetLeft;
	py = e.pageY-canvas.offsetTop;

	ws.send(JSON.stringify(info));
});

canvas.addEventListener("mouseup", function(e){
	dibujar = false;
});

ws.addEventListener("message", function(e){
	var data = JSON.parse(e.data);

	contextoR.moveTo(data.x0, data.y0);
	contextoR.lineTo(data.x1, data.y1);

	contextoR.stroke();

})