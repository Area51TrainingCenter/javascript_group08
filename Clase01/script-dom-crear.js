var elemento = document.createElement("h1");
elemento.innerHTML = "Título en el h1";

elemento.style.fontFamily = "Verdana";
elemento.style.fontSize = "20px";
elemento.style.color = "rgb(255, 255, 0)";
elemento.style.fontWeight = "normal";
elemento.style.fontStyle = "italic";

document.body.appendChild(elemento);

var ladrido = document.createElement("audio");
ladrido.src = "guau.mp3";
// ladrido.controls = "true";
ladrido.play();

// document.body.appendChild(ladrido);

// <audio src="guau.mp3" controls="true"></audio>