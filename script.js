var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var result = document.querySelector("h3");
var body = document.querySelector("body");

function setBackgroundColor(){
	body.style.background="linear-gradient(to right," + color1.value  + "," + color2.value + ")";
	result.textContent = body.style.background;
}

color1.addEventListener("input", setBackgroundColor);
color2.addEventListener("input",setBackgroundColor);
