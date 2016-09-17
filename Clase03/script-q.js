function entregarCartaAlCliente(){
	var diferido = Q.defer();

	setTimeout(function(){
		diferido.resolve("arroz con pollo"); // Promesa cumplida
		// diferido.reject(); // Promesa rechazada
	}, 1000)

	return diferido.promise;
}


/*var promesa = entregarCartaAlCliente();
promesa.then(function(){
	alert("Promesa cumplida");
});
promesa.fail(function(){
	alert("Promesa rechazada");
})*/

entregarCartaAlCliente()
	.then(function(msg){
		alert("Promesa cumplida: quiero " + msg);
	})
	.fail(function(){
		alert("Promesa rechazada");
	});