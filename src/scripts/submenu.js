import jq from 'jquery';
//
// jq('.dropdown-menu .dropdown-toggle').on('click', function (e) {
// 	if (!jq(this).next().hasClass('show')) {
// 		jq(this).parents('.dropdown-menu').first().find('.show').removeClass('show');
// 	}
// 	let $subMenu = jq(this).next('.dropdown-menu');
// 	$subMenu.toggleClass('show');
//
// 	jq(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function (e) {
// 		jq('.dropdown-submenu .show').removeClass('show');
// 	});
//
// 	return false;
// });

let toggleBtns = document.querySelectorAll('.dropdown-menu .dropdown-toggle');
toggleBtns.forEach(el => {
	let btnClickListener = (event) => {
		event.stopPropagation();
		let submenu = el.nextElementSibling;
		if (!submenu.classList.contains('show')) {
			let openedMenu = [...el.closest('.dropdown-menu').childNodes]
				.find(node => node instanceof Element && node.querySelector('.dropdown-menu.show'));
			openedMenu?.classList.remove('show');
			openedMenu?.querySelector('.dropdown-menu').classList.remove('show');
		}
		submenu.classList.toggle('show');
		submenu.closest('.dropdown-submenu').classList.toggle('show');
		jq(el).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function (e) {
			document.querySelectorAll('.dropdown-submenu').forEach(el => el.classList.remove('show'));
			document.querySelectorAll('.dropdown-submenu .show').forEach(el => el.classList.remove('show'));
		});
		// el.closest('li.dropdown.show').addEventListener('hidden.bs.dropdown', function (e) {
		// 	document.querySelectorAll('.dropdown-submenu .show').forEach(el => {
		// 		el.classList.remove('show');
		// 	});
		// });
	}
	el.addEventListener('click', btnClickListener)
})