
const burgerMenu = () => {
	function open() {
		document.getElementById('header-nav').classList.toggle('show');
		document.querySelector('body').classList.toggle('scroll-of');
	};
	document.getElementById('burger-btn').onclick = function() {
		open();
	};

};

export default burgerMenu;
