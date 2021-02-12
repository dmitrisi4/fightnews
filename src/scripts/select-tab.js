let tabSelects = document.querySelectorAll('[data-tab-select]');

const getTargetTab = (element) => element.attributes.href?.value ?? element.dataset.target;

tabSelects.forEach(select => {
	let target = document.getElementById(select.dataset.tabSelect);
	let buttons = [...target.children];

	buttons.forEach(button => {
		button.addEventListener('click', () => {
			select.value = getTargetTab(button);
			if (button.dataset.clickFromSelect) {
				delete button.dataset.clickFromSelect;
			}
		})
	})

	select.addEventListener('change', () => {
		let targetButton = buttons.find(child => getTargetTab(child) === select.value);

		targetButton.dataset.clickFromSelect = 'true';
		targetButton.click();
	});
})