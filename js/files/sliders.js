/*
Документация по работе в шаблоне:
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/

// Подключаем слайдер Swiper из node_modules
// При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
// Пример: { Navigation, Autoplay }
import Swiper, { Navigation, Pagination, Autoplay, Keyboard, FreeMode} from 'swiper';
/*
Основниые модули слайдера:
Navigation, Pagination, Autoplay,
EffectFade, Lazy, Manipulation
Подробнее смотри https://swiperjs.com/
*/

// Стили Swiper
// Базовые стили
import "../../scss/base/swiper.scss";
// Полный набор стилей из scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Полный набор стилей из node_modules
import 'swiper/css';

// Инициализация слайдеров
function initSliders() {
	// Перечень слайдеров
	// Проверяем, есть ли слайдер на стронице
	if (document.querySelector('.swiper-gallery')) {
		new Swiper('.swiper-gallery', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Keyboard, FreeMode],
			slidesPerView: 3.3,
			watchOverflow: true,
			spaceBetween: 16,
			autoHeight: true,
			speed: 300,
			slideToClickedSlide: false,
			simulateTouch: true,
			// freeMode: true,
			keyboard: {
				enabled: true,
				onlyInViewport: true,
			 },

			//preloadImages: false,

			//Брейкпоинты
			breakpoints: {
				320: {
					slidesPerView: 1.06,
				},
				340: {
					slidesPerView: 1.06,
				},
				480: {
					slidesPerView: 1.07,
				},
				560: {
					slidesPerView: 1.15,
				},
				650: {
					slidesPerView: 1.4,
				},
				768: {
					slidesPerView: 1.6,
				},
				700: {
					slidesPerView: 1.8,
				},
				830: {
					slidesPerView: 2.1,
				},
				870: {
					slidesPerView: 2.4,
				},
				900: {
					slidesPerView: 2.7,
				},
				950: {
					slidesPerView: 2.9,
				},
				1024: {
					slidesPerView: 3.1,
					spaceBetween: 12,
				},
				1120: {
					slidesPerView: 3.2,
				},
				1240: {
					slidesPerView: 3.3,
				},
				1440: {
					slidesPerView: 3.3,
					spaceBetween: 12,
				}
			},
			// События
			on: {
			}
		});
	}
	if (document.querySelector('.swiper-videos')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		const sliderVideo = new Swiper('.swiper-videos', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Pagination, Autoplay],
			observer: true,
			observeParents: true,
			observeSlideChildren: true,
			slidesPerView: 2.75,
			spaceBetween: 0,
			// autoHeight: true,
			speed: 800,
			centeredSlides: true,
			slideToClickedSlide: false,
			initialSlide: 0,
			loop: true,
			loopedSlides: 3,
			simulateTouch: false,

			//touchRatio: 0,
			//preloadImages: false,
			lazy: true,

			// Эффекты
			effect: 'fade',
			autoplay: {
				delay: 2000,
				disableOnInteraction: false,
				pauseOnMouseEnter: true,
			},

			// Пагинация
			pagination: {
				el: '.swiper-pagination',
				type: 'fraction',

				renderFraction: function (currentClass, totalClass) {
					return '0' + '<span class="' + currentClass + '"></span>' + '/' + '<span class="pag-zero">0</span>' + '<span class="' + totalClass + '">0</span>';
				}
			},

			// Брейкпоинты
			breakpoints: {
				320: {
					slidesPerView: 1,
				},
				480: {
					slidesPerView: 1.2,
				},
				560: {
					slidesPerView: 1.4,
				},
				768: {
					slidesPerView: 1.8,
				},
				992: {
					slidesPerView: 2,
				},
				1268: {
					slidesPerView: 2.2,
				},
			},
			// События
			on: {
			}
		});
		sliderVideo.on('slideChange', function() {
			let videoTitle = document.querySelector('.main-videos__title');
			function changeOpacity(elem) {
				elem.style.opacity = 1;
			}
			switch (sliderVideo.realIndex) {
				case 0:
					videoTitle.style.opacity = 0;
					videoTitle.textContent = 'HIIT';
					videoTitle.href = 'https://youtu.be/eESsBCFthjk';
					setTimeout(changeOpacity(videoTitle), 2000);
					break;
				case 1:
					videoTitle.textContent = 'Все тело за 4 упражнения';
					videoTitle.href = 'https://youtu.be/_HQi_wtZPWk';
					break;
				case 2:
					videoTitle.textContent = 'Имидж';
					videoTitle.href = 'https://youtu.be/55SauZWtC2c';
					break;
				case 3:
					videoTitle.textContent = 'Лимфатическая система';
					videoTitle.href = 'https://youtu.be/TZLOWFwpw2s';
					break;
				case 4:
					videoTitle.textContent = 'Мышцы пресса';
					videoTitle.href = 'https://youtu.be/o0T9qoofUNY';
					break;
				case 5:
					videoTitle.textContent = 'Новогодняя антихрупкость';
					videoTitle.href = 'https://youtu.be/4nYknwKs8T0';
					break;
				default:
					videoTitle.textContent = '';
					videoTitle.href = '';
			}
		});
		let slideLinks = document.querySelectorAll('.swiper-slide');

		slideLinks.forEach(function(link) {
		link.addEventListener('click', function(event) {
			if (sliderVideo.realIndex !== sliderVideo.slides.indexOf(this.parentNode)) {
				event.preventDefault();
			}});
		});
	}
	if (document.querySelector('.swiper-store')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		new Swiper('.swiper-store', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation],
			observer: true,
			observeParents: true,
			slidesPerView: 3,
			spaceBetween: 173,
			autoHeight: true,
			speed: 800,
			centeredSlides: true,
			centeredSlidesBounds: true,
			slideToClickedSlide: true,
			simulateTouch: true,
			initialSlide: 1,
			loop: true,

			touchRatio: 0,
			//preloadImages: false,
			lazy: true,

			// Эффекты
			// effect: 'coverflow',

			// coverflowEffect: {
			// 	rotate: 0,
			// 	stretch: 0,
			// 	depth: 100,
			// 	modifier: 2.5,
			// },

			breakpoints: {
				320: {
					// slidesPerView: 1,
					// spaceBetween: 0,
					// autoHeight: true,
				},
				480: {
					// slidesPerView: 1.2,
				},
				560: {
					// slidesPerView: 2,
					spaceBetween: 55,
				},
				768: {
					spaceBetween: 11,
				},
				1024: {
					spaceBetween: 30,
					// slidesPerView: 2.5,
				},
				1160: {
					spaceBetween: 70,
					// slidesPerView: 2.7,
				},
				1292: {
					spaceBetween: 100,
				},
				1368: {
					spaceBetween: 130,
				},
				1440: {
					spaceBetween: 173,
				},
			},
			// События
			on: {
			}
		});
	}
	if (document.querySelector('.swiper-academy')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		new Swiper('.swiper-academy', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, Keyboard, FreeMode],
			slidesPerView: 4,
			watchOverflow: true,
			spaceBetween: 16,
			autoHeight: true,
			speed: 300,
			slideToClickedSlide: false,
			simulateTouch: true,
			// freeMode: true,
			keyboard: {
				enabled: true,
				onlyInViewport: true,
			 },

			//preloadImages: false,

			// Эффекты
			// effect: 'fade',

			// Кнопки "влево/вправо"
			navigation: {
				prevEl: '.arrow-prev',
				nextEl: '.arrow-next',
			},

			//Брейкпоинты
			breakpoints: {
				320: {
					slidesPerView: 1.03,
				},
				340: {
					slidesPerView: 1.135,
					spaceBetween: 8,
				},
				480: {
					slidesPerView: 1.4,
				},
				560: {
					slidesPerView: 1.8,
				},
				768: {
					slidesPerView: 2,
				},
				810: {
					slidesPerView: 2.2,
				},
				950: {
					slidesPerView: 2.5,
				},
				1024: {
					slidesPerView: 2.85,
					spaceBetween: 12,
				},
				1120: {
					slidesPerView: 3.2,
				},
				1240: {
					slidesPerView: 3.6,
				},
				1440: {
					slidesPerView: 4,
				}
			},
			// События
			on: {
			}
		});
	}
}
// Скролл на базе слайдера (по классу swiper_scroll для оболочки слайдера)
function initSlidersScroll() {
	let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
	if (sliderScrollItems.length > 0) {
		for (let index = 0; index < sliderScrollItems.length; index++) {
			const sliderScrollItem = sliderScrollItems[index];
			const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
			const sliderScroll = new Swiper(sliderScrollItem, {
				observer: true,
				observeParents: true,
				direction: 'vertical',
				slidesPerView: 'auto',
				freeMode: {
					enabled: true,
				},
				scrollbar: {
					el: sliderScrollBar,
					draggable: true,
					snapOnRelease: false
				},
				mousewheel: {
					releaseOnEdges: true,
				},
			});
			sliderScroll.scrollbar.updateSize();
		}
	}
}

window.addEventListener("load", function (e) {
	// Запуск инициализации слайдеров
	initSliders();
	// Запуск инициализации скролла на базе слайдера (по классу swiper_scroll)
	//initSlidersScroll();
});