var historia = document.getElementById("historia");
var btnIngresar = document.getElementById("btnIngresar");

function verificarExistencia(numero) {
	var diferido = Q.defer();

	setTimeout(function(){
		diferido.resolve();
	}, 1000);

	return diferido.promise;
}

function ingresarHistoria(){
	var diferido = Q.defer();

	setTimeout(function(){
		diferido.resolve();
	}, 1000);

	return diferido.promise;
}

function enviarMensajeChat(){
	alert("Mensaje enviado");
}

function mensajeError(){
	alert("El numero de historia ya existe");
}

function iniciarProceso(e){
	e.preventDefault();
	var numero = historia.value;
	verificarExistencia(numero)
		.then(ingresarHistoria)
		.then(enviarMensajeChat)
		.fail(mensajeError)
}


btnIngresar.addEventListener("click", iniciarProceso);
