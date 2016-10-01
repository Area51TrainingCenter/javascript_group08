var ws = new WebSocket("ws://127.0.0.1:9000", "echo-protocol");

var boton = document.getElementById("btn"),
	txt = document.getElementById("mensaje"),
	chat = document.getElementById("chatlog");

boton.addEventListener("click", function(){
	var mensajeAEnviar = txt.value;

	ws.send(mensajeAEnviar);
});

ws.addEventListener("message", function(e){
	var mensaje = e.data;

	chat.innerHTML += ("<br>" + mensaje);
})