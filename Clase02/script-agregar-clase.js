/*var div = document.getElementsByTagName("div")[0];
var button = document.getElementsByTagName("button")[0];

button.addEventListener("click", function(){
	div.className = "claseAnimacion";
})*/

$("button").on("click", function(){
	$("div").addClass("claseAnimacion");
});