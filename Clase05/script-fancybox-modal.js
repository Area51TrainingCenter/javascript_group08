$(function(){
	var eVideo = document.getElementsByTagName("video")[0];

	//var eVideo = $("video");
	var boton = $("button").eq(0);
	var btn = $("#btnMostrarTexto").eq(0);

	btn.on("click", function(){
		$.fancybox.defaults.width = 300;
		$.fancybox.defaults.autoSize = false;
		$.fancybox.defaults.autoHeight = true;

		$.fancybox("<h1>El registro fue procesado en la fecha " + (new Date()));
	})

	boton.on("click", function(){
		$.fancybox.close();
	})

	$(".ejecutar").fancybox({
		'modal': true,
		'beforeShow': function(){
			eVideo.play();
		},
		'afterClose': function(){
			eVideo.pause();
			eVideo.currentTime = 0;
		}
	});
})