import Ellipsis from "ftellipsis/build/ftellipsis.min";

let ellipsisElements = document.querySelectorAll('.text-ellipsis');

ellipsisElements.forEach(element => {
	let ellipsis = new Ellipsis(element);
	ellipsis.calc();
	ellipsis.set();
})
