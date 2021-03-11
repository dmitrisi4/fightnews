document.querySelectorAll('[data-open-search]').forEach(btn => {
	let form = document.getElementById(btn.getAttribute('data-open-search'));
	let input = form.querySelector('.input-search');
	let clearBtn = form.querySelector('.clear-btn');

	let inputListener = (e) => {
		if (e.target.value.length) {
			clearBtn.classList.remove('d-none');
		} else {
			clearBtn.classList.add('d-none');
		}
	}

	let clearListener = (e) => {
		let event = new Event('input', {
			bubbles: true,
			cancelable: true,
		});

		input.value = '';
		input.dispatchEvent(event);
	}

	let clickListener = (e) => {
		if (form.classList.contains('d-none')) {
			form.classList.remove('d-none');
			btn.classList.add('d-none');
			input.addEventListener('input', inputListener);
		} else {
			form.classList.add('d-none');
			btn.classList.remove('d-none');
			input.removeEventListener('input', inputListener);
		}
	}

	let documentClickListener = (e) => {
		if (!form.classList.contains('d-none') && !form.contains(e.target) && !btn.contains(e.target)) {
			form.classList.add('d-none');
			btn.classList.remove('d-none');
		}
	}

	btn.addEventListener('click', clickListener);
	clearBtn.addEventListener('click', clearListener);
	document.addEventListener('click', documentClickListener);
});


let clearBtn = document.querySelectorAll('.clear-btn');

clearBtn.forEach(btn => {

})
