function entregarPedidoAlCliente(){
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
}


entregarCarta();