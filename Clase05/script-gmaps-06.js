$(function(){
	var mapa = new GMaps({
		div: '.contenedor',
  		lat: -12.043333,
  		lng: -77.028333
	});

	mapa.addMarker({
		lat: -12.043333,
		lng: -77.028333,
		title: "Punto de prueba",
		infoWindow: {
  			content: '<h1>Restaurante de un solo cuchillo</h1><hr><em>Traer su propio cuchillo</em><a href="#">Clic aquí</a>'
		}
/*		click: function(e){
			alert("Evento click");
		}*/
	});

})