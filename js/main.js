var first = document.querySelector(".services-cards-first");
var second = document.querySelector(".services-cards-second");
var left = document.querySelector(".services-button.one")
var right = document.querySelector(".services-button.two")
function swapfirst(){
	first.style = "transform: translate(0vw);"
	second.style = "transform: translate(100vw);"
	left.style = "color: #888888;"
	right.style = "color: #181a45;"
}
function swapsecond(){
	second.style = "transform: translate(0vw);"
	first.style = "transform: translate(-100vw);"
	right.style = "color: #888888;"
	left.style = "color: #181a45;"
}
