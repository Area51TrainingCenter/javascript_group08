
var catAd = prompt("Ingrese el cateto adyacente"),
	catOp = prompt("Ingrese el cateto opuesto");

if(isNaN(catAd) || isNaN(catOp)) {
	alert("Los catetos deben ser números");
} else {
	var hipotenusa = Math.sqrt(Math.pow(catAd, 2) + Math.pow(catOp, 2));

	console.log("Hipotenusa", hipotenusa);
}


