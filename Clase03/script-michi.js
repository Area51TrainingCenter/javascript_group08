var celdas = document.getElementsByTagName("td");

var turno = 1;

function marcarCelda(ref) {
	if(ref.innerHTML==""){
		if(turno==1) {
			ref.innerHTML = "X";
			turno = 2;
		} else {
			ref.innerHTML = "O";
			turno = 1;
		}
	} else {
		alert("Por favor marque otra celda");
	}
}

function combGanadora(a, b, c, letra) {
	var comb = celdas[a].innerHTML==letra && celdas[b].innerHTML==letra && celdas[c].innerHTML==letra;

	return comb;
}

function verificarGanador() {
	var comb1x = combGanadora(0, 1, 2, "X"),
		comb2x = combGanadora(3, 4, 5, "X"),
		comb3x = combGanadora(6, 7, 8, "X"),
		comb4x = combGanadora(0, 3, 6, "X"),
		comb5x = combGanadora(1, 4, 7, "X"),
		comb6x = combGanadora(2, 5, 8, "X"),
		comb7x = combGanadora(0, 4, 8, "X"),
		comb8x = combGanadora(2, 4, 6, "X");

	if(comb1x || comb2x || comb3x || comb4x || comb5x || comb6x || comb7x || comb8x) {
		return "Ganó la X";
	} else {
		var comb1o = combGanadora(0, 1, 2, "O"),
			comb2o = combGanadora(3, 4, 5, "O"),
			comb3o = combGanadora(6, 7, 8, "O"),
			comb4o = combGanadora(0, 3, 6, "O"),
			comb5o = combGanadora(1, 4, 7, "O"),
			comb6o = combGanadora(2, 5, 8, "O"),
			comb7o = combGanadora(0, 4, 8, "O"),
			comb8o = combGanadora(2, 4, 6, "O");

			if(comb1o || comb2o || comb3o || comb4o || comb5o || comb6o || comb7o || comb8o) {
					return "Ganó la O";
			} else {
				return false;
			}			

	}
}

function verificarEmpate() {

	for(var ind=0; ind<celdas.length; ind++) {
		if(celdas[ind].innerHTML=="") return false;
	}

	return true;
}

function fnClickEnCelda(evt) {
	marcarCelda(this);
	var estado = verificarGanador();

	if(estado) {
		alert(estado);
	} else {
		if(verificarEmpate()) {
			alert("Ocurrió un empate");
		}
	}
}

for(var ind=0; ind < celdas.length; ind++) {
	celdas[ind].addEventListener("click", fnClickEnCelda);
}