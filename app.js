let colors = [
	"green",
	"red",
	"pink",
	"gray",
	"black",
	"brown",
	"white",
	"blue",
	"purple",
	"aqua",
	"gold",
	"yellow",
];
let btn = document.querySelector("#btn");
let color = document.querySelector(".color");

btn.addEventListener("click", function () {
	let randColor = Math.floor(Math.random() * colors.length);
	document.body.style.backgroundColor = colors[randColor];
	color.innerHTML = colors[randColor];
});
