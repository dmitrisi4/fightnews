
let btnCheckboxes = document.querySelectorAll('.btn-checkbox');
let toggleClass = (check) => {
	check.classList.toggle('active');
}

btnCheckboxes.forEach(check => {
	check.addEventListener('click', () => toggleClass(check));
})
