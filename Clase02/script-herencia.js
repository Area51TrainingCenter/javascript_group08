/* CLASE EQUIPOS */
function Equipos() {
	// this.marca = "Epson";
}

Equipos.prototype.marca = "";
Equipos.prototype.ubicacion = "";

/* CLASE IMPRESORAS */
function Impresoras() {
	Equipos.call();
}

Impresoras.prototype = Object.create(Equipos.prototype);
Impresoras.prototype.constructor = Impresoras;

Impresoras.prototype.paginasImpresa = 0;
Impresoras.prototype.nivelToner = "";

var impresoras = new Impresoras();

impresoras.paginasImpresa = 50;
impresoras.nivelToner = "Alto";
impresoras.ubicacion = "Marketing";
impresoras.marca = "Xerox";

console.log(impresoras);