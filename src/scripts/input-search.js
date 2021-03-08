let toggleSearch = (e) => {
	e.preventDefault();
	let searchForm = document.querySelector('.search-group');
	searchForm.classList.toggle('active');
}
document.querySelector('.search-btn').addEventListener('click', toggleSearch);