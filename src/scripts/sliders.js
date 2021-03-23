import Swiper from "swiper";

const Sliders = () => {
	const mySwiper = new Swiper('.swiper-container', {
		// Optional parameters
		autoHeight: true,
		spaceBetween: 30,
		loop: true,
		effect: 'fade',
		grabCursor: true,
		// autoplay: {
		// 	delay: 1000,
		// 	disableOnInteraction: false,
		// 	reverseDirection: true,
		// },
		fadeEffect: {
			crossFade: true
		},

		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
		breakpoints: {
			991: {
				direction: 'vertical',
			},
		}
	});

	const postSlider = new Swiper('.post-slider', {
		slidesPerView: 2,
		direction: 'vertical',
		loop: true,
		spaceBetween: 20,

		pagination: {
			el: '.pagination-scroll',
			type: 'progressbar',
		},
		breakpoints: {
			640: {
				direction: 'horizontal',
				slidesPerView: 2,
				spaceBetween: 30,
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
				},
			},
		}
	});
}

export default Sliders;
