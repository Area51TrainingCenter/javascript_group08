var http = require("http");

var servidor = http.createServer(function(req, res){});

servidor.listen(9000, function(){
	console.log("Servidor ejecutándose en el puerto 9000");
});

var webSocketServer = require("websocket").server;
var wsServer = new webSocketServer({
	httpServer: servidor
});

var cuenta=0;
var clientes = [];

wsServer.on("request", function(r){
	var conexion = r.accept("echo-protocol", r.origin);

	var id = cuenta++
	clientes[id] = conexion;
	console.log("Conexión aceptada: " + (new Date()));

	conexion.on("message", function(msg) {
		var mensaje = msg.utf8Data;

		for(var i in clientes) {
			clientes[i].sendUTF(mensaje);
		}
	});

	conexion.on("close", function(){
		delete clientes[id];
		console.log("Usuario desconectado");
	})
});