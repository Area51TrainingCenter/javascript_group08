/*function entregarPedidoAlCliente(){
	alert("Fin del proceso");
}

function entregarCocinado(){
	setTimeout(function(){
		alert("Se entrego cocinado");
		entregarPedidoAlCliente();
	},2000);	
}

function entregarPedidoACocina(){
	setTimeout(function(){
		alert("Se entrego el pedido");
		entregarCocinado();
	},2000);	
}

function tomarPedido(){
	setTimeout(function(){
		alert("Se tomo el pedido");
		entregarPedidoACocina();
	},2000);
}


function entregarCarta() {
	setTimeout(function(){
		alert("Cliente escogio plato");
		tomarPedido();
	}, 3000);
}*/

function entregarPedidoAlCliente(){
	alert("Fin del proceso");
}

function entregarCocinado(cb){
	setTimeout(function(){
		alert("Se entrego cocinado");
		cb();
	},2000);	
}

function entregarPedidoACocina(cb){
	setTimeout(function(){
		alert("Se entrego el pedido");
		cb(entregarPedidoAlCliente);
	},2000);	
}

function tomarPedido(cb){
	setTimeout(function(){
		alert("Se tomo el pedido");
		cb(entregarCocinado);
	},2000);
}


function entregarCarta(cb) {
	setTimeout(function(){
		alert("Cliente escogio plato");
		cb(entregarPedidoACocina);
	}, 3000);
}


entregarCarta(tomarPedido);