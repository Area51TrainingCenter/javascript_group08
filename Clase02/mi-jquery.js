function $(elemento){
	var elems = document.querySelectorAll(elemento);

	this.on = function(nombreEvento, callback) {
		for(var i=0; i<elems.length; i++) {
			elems[i].addEventListener(nombreEvento, callback);
		}
	}

	this.addClass = function(clase) {
		for(var i=0; i<elems.length; i++) {
			elems[i].className += " " + clase; 
		}		
	}

	return this;
}