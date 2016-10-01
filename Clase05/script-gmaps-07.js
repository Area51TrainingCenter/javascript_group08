$(function(){
  var mapa = new GMaps({
    div: '.contenedor',
      lat: -12.043333,
      lng: -77.028333
  });

  $("button").on("click",function(){
    $("select").html("");
    GMaps.geocode({
      address: $('#address').val(),
      callback: function(results, status) {
        if (status == 'OK') {
          results.forEach(function(item, ind){
            var parte0 = item.address_components[0].long_name;
            var parte1 = item.address_components[1].long_name;
            var parte2 = item.address_components[2].long_name;
            var parte3 = item.address_components[3].long_name;

            var completo = parte0 + ", " + parte1 + ", " + parte2 + ", " + parte3;

            var latitud = item.geometry.location.lat();
            var longitud = item.geometry.location.lng();

            $("select").append("<option value='"+latitud+","+longitud+"'>" + completo + "</option");
          });

          var latlng = results[0].geometry.location;
          mapa.setCenter(latlng.lat(), latlng.lng());
          mapa.addMarker({
            lat: latlng.lat(),
            lng: latlng.lng()
          });
        }
      }
    });
  });

  $("select").on("change", function(valor, item){
    var coordenadas = $("select").val().split(",");
    mapa.setCenter(coordenadas[0], coordenadas[1]);
    mapa.addMarker({
      lat: coordenadas[0],
      lng: coordenadas[1]
    });
  })

 



})
 