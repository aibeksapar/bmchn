const htmlElement = document.documentElement;

// Options for the observer (which mutations to observe)
const config = { attributes: true };

// Callback function to execute when mutations are observed
const callback = (mutationList, observer) => {
  for (const mutation of mutationList) {
     if (mutation.type === "attributes") {
		if (htmlElement.classList.contains('menu-open')) {
			document.querySelector('.menu__body').appendChild(document.querySelector('.bottom-footer'));
		} else {
			document.querySelector('.footer__body').appendChild(document.querySelector('.bottom-footer'));
		}
    }
  }
};

// Create an observer instance linked to the callback function
const observer = new MutationObserver(callback);

// Start observing the target node for configured mutations
observer.observe(htmlElement, config);

// Later, you can stop observing
// observer.disconnect();

let slideActive = document.querySelector('.swiper-slide-active');
let videoTitle = document.querySelector('.main-videos__title');
// sliderVideo

// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

