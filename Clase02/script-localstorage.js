var usuario = document.getElementById("usuario"),
	contrasena = document.getElementById("contrasena"),
	boton = document.getElementById("boton"),
	tbody = document.getElementById("listado");

function ClaseUsuario(datosUsuario) {
	this.usuario = datosUsuario.usuario; 
	this.contrasena = datosUsuario.contrasena;

	this.agregar = function(){
		tbody.innerHTML += "<tr><td>" + this.usuario + "</td><td>" + this.contrasena + "</td></tr>";
		usuario.value = "";
		contrasena.value = "";
	}
}

var jsonUsuario = {};
var arrUsuarios = [];

boton.addEventListener("click", function(evt){
	evt.preventDefault();
	// jsonUsuario.usuario = usuario.value;
	// jsonUsuario.contrasena = contrasena.value;

	jsonUsuario = {
		usuario : usuario.value,
		contrasena : contrasena.value
	};

	arrUsuarios.push(jsonUsuario);

	if(window.localStorage) {
		localStorage.datos = JSON.stringify(arrUsuarios);
	}

	var obj = new ClaseUsuario(jsonUsuario);
	obj.agregar();
});

if(window.localStorage) {
	if(localStorage.datos) {
		arrUsuarios = JSON.parse(localStorage.datos);
		
		arrUsuarios.forEach(function(elem, ind) {
			var obj = new ClaseUsuario(elem);
			obj.agregar();			
		})
	}
}