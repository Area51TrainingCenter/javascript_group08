var btn = document.getElementById("btn");

function generarUsuario(){
	var diferido = Q.defer();

	var req = new XMLHttpRequest();
	req.onreadystatechange = function(){
		if(req.readyState==4) {
			if(req.status==200) {
				diferido.resolve(req.responseText);
			} else {
				diferido.reject();
			}
		}
	}

	req.open("GET", "https://randomuser.me/api/", true);
	req.send();

	return diferido.promise;
}


btn.addEventListener("click", function(){
	generarUsuario()
		.then(function(usuario){
			var obj = JSON.parse(usuario);
			alert("Usuario generado");
			console.log(obj);
		})
		.fail(function(){
			alert("Ocurrio un error");
		})
})