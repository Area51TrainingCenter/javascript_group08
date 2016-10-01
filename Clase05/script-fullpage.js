$(function(){
	$(".contenedor").fullpage({
		'afterLoad': function(ancla, indice) {
			switch(indice) {
				case 1:
					$("h1").eq(0).addClass("slideInLeft");
					break;
				case 2:
					$("h1").eq(1).addClass("rotateOut");
					break;
				case 3:
					var video = document.getElementsByTagName("video")[0];
					video.currentTime = 0;
					video.play();
					break;
			}
		}
	});
/*	setTimeout(function(){
		$("h1").eq(0).addClass("slideInLeft");
	}, 3000);*/
	
})