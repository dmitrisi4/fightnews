
const burgerMenu = () => {
	function open() {
		document.getElementById("header-nav").classList.toggle("show");
	};
	document.getElementById("burger-btn").onclick = function() {
		open();
	};

};

export default burgerMenu;
