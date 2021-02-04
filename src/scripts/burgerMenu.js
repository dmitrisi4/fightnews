
const burgerMenu = () => {
	document.getElementById("burger-btn").onclick = function() {
		open()
	};
	function open() {
		document.getElementById("header-nav").classList.toggle("show");
	};
}

export default burgerMenu;
