const slider: HTMLDivElement = document.querySelector(".slider-v3")!;
const sliderContainer: HTMLDivElement = slider.querySelector(
  ".slider-v3-carousel"
)!;
const sliderCards: NodeListOf<HTMLDivElement> =
  slider.querySelectorAll(".slider-v3-item")!;

const leftButton: HTMLButtonElement = slider.querySelector(
  ".slider-v3-button--left"
)!;
const rightButton: HTMLButtonElement = slider.querySelector(
  ".slider-v3-button--right"
)!;

let currentOffset: number = 0;
const itemMargin: number = 16;

const cardWidth = sliderCards[0].clientWidth + itemMargin;
const cardsPerView = Math.floor(slider.offsetWidth / cardWidth) + 1;
const maxOffset = -cardWidth * (sliderCards.length - cardsPerView);

console.log(cardWidth);
const showHideBtn = () => {
  leftButton.style.display = currentOffset != 0 ? "block" : "none";
  rightButton.style.display = currentOffset != maxOffset ? "block" : "none";
};

const handleLeftClick = () => {
  if (currentOffset < 0) {
    currentOffset += cardWidth;
    sliderContainer.style.transform = `translateX(${currentOffset}px)`;
  }

  showHideBtn();
};

const handleRightClick = () => {
  if (currentOffset > maxOffset) {
    currentOffset -= cardWidth;
    sliderContainer.style.transform = `translateX(${currentOffset}px)`;
  }

  showHideBtn();
};

document.addEventListener("DOMContentLoaded", showHideBtn);
leftButton.addEventListener("click", handleLeftClick);
rightButton.addEventListener("click", handleRightClick);
