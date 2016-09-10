var resultados = document.getElementById("resultados"),
	operador1 = document.getElementById("operador1"),
	operador2 = document.getElementById("operador2"),
	botones = document.querySelectorAll(".btnOperacion");
/*	btnSuma = document.getElementById("btnSuma"),
	btnResta = document.getElementById("btnResta"),
	btnMultiplicacion = document.getElementById("btnMultiplicacion"),
	btnDivision = document.getElementById("btnDivision");*/

function sumar(a, b) {
	var suma = a + b;

	resultados.innerHTML = suma;
	// return suma;
}

function restar(a, b) {
	var resta = a - b;

	resultados.innerHTML = resta;
	// return resta;

}

function multiplicar(a, b) {
	var multiplicacion = a * b;

	resultados.innerHTML = multiplicacion;
	// return multiplicacion;
}

function dividir(a, b) {
	var division = a / b;

	resultados.innerHTML = division;
	// return division;
}

function validar(op1, op2) {
	if(isNaN(op1) || isNaN(op2)) {
		resultados.innerHTML = "Operador(es) inválidos";
		return false;
	} else {
		return true;
	}
}

function fnOperacion(e){
	// resultados.innerHTML = e.target.id;
	if(validar(operador1.value, operador2.value)) {
		var op1 = parseInt(operador1.value),
			op2 = parseInt(operador2.value);	

		switch(e.target.id) {
			case "btnSuma":
				sumar(op1, op2);
				break;
			case "btnResta":
				restar(op1, op2);
				break;
			case "btnMultiplicacion":
				multiplicar(op1, op2);
				break;
			case "btnDivision":
				if(op2!=0) {
					dividir(op1, op2);
				} else {
					resultados.innerHTML = "Operación entre cero inválida";
				}
				break;
		}
	}
}

for(var i=0; i<botones.length; i++) {
	botones[i].addEventListener("click", fnOperacion);
}




/*btnSuma.addEventListener("click", function(evt){
	evt.preventDefault();
	if(validar(operador1.value, operador2.value)) {
		var op1 = parseInt(operador1.value),
			op2 = parseInt(operador2.value);

		sumar(op1, op2);		
	}
});


btnResta.addEventListener("click", function(evt){
	evt.preventDefault();
	if(validar(operador1.value, operador2.value)) {
		var op1 = parseInt(operador1.value),
			op2 = parseInt(operador2.value);

		restar(op1, op2);
	}
});

btnMultiplicacion.addEventListener("click", function(evt){
	evt.preventDefault();
	if(validar(operador1.value, operador2.value)) {
		var op1 = parseInt(operador1.value),
			op2 = parseInt(operador2.value);

		multiplicar(op1, op2);
	}
});

btnDivision.addEventListener("click", function(evt){
	evt.preventDefault();
	if(validar(operador1.value, operador2.value)) {
		var op1 = parseInt(operador1.value),
			op2 = parseInt(operador2.value);

		if(op2!=0) {
			dividir(op1, op2);
		} else {
			resultados.innerHTML = "Operación entre cero inválida";
		}
		
	}
});*/
/*var resultado = sumar(10, 20);




console.log("SUMAR", resultado);*/