// document.querySelector('.select__option').classList.add('_select-selected');
// document.querySelector('.fp-bullets').style.opacity = "1";

// let footer = document.querySelector('.footer');
// if (footer.classList.contains('active-section')) {
// 	console.log(log);
// }

// if (!window.matchMedia("(max-width: 375px)").matches) {
// 	document.querySelector('.select_sel-data').remove();
// }

// Select the node that will be observed for mutations
const targetNode = document.body;

// Options for the observer (which mutations to observe)
const config = { attributes: true, childList: true, subtree: true };

// Callback function to execute when mutations are observed
const callback = (mutationList, observer) => {
  for (const mutation of mutationList) {
    if (mutation.type === "attributes") {
      console.log("A child node has been added or removed.");
    } else if (mutation.type === "attributes") {
      console.log(`The ${mutation.attributeName} attribute was modified.`);
    }
  }
};

// Create an observer instance linked to the callback function
const observer = new MutationObserver(callback);

// Start observing the target node for configured mutations
observer.observe(targetNode, config);
observer.disconnect();

let slideActive = document.querySelector('.swiper-slide-active');
let videoTitle = document.querySelector('.main-videos__title');
// sliderVideo

// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

