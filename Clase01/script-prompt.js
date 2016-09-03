
var catAd = prompt("Ingrese el cateto adyacente"),
	catOp = prompt("Ingrese el cateto opuesto");

if(isNaN(catAd)) {
	alert("El cateto adyacente no es un número");
} else if(isNaN(catOp)) {
	alert("El cateto opuesto no es un número");
} else {
	var hipotenusa = Math.sqrt(Math.pow(catAd, 2) + Math.pow(catOp, 2));

	console.log("Hipotenusa", hipotenusa);
}


