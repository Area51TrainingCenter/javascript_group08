var canvas = document.getElementById("canvas"),
	contexto = canvas.getContext("2d");

contexto.strokeStyle = "blue";
contexto.fillStyle = "orange";

// contexto.clearRect(0,0, 500, 500);
contexto.moveTo(10, 10);
contexto.lineTo(200, 200);

contexto.rect(50, 50, 150, 150);

contexto.arc(250, 250, 100, 0, Math.PI/2);

contexto.stroke();
// contexto.fill();