const burgerMenu = () => {
	function open() {
		document.getElementById('header-nav').classList.toggle('show');
		document.querySelector('body').classList.toggle('scroll-of');
	};
	document.querySelectorAll('#burger-btn').forEach(btn => {
		btn.addEventListener('click', open);
	})
};

export default burgerMenu;
