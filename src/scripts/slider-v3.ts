const carouselElement: HTMLDivElement = document.querySelector(
  ".slider-v3-carousel"
)!;

const allImages: NodeListOf<HTMLImageElement> = document.querySelectorAll(
  ".slider-v3-carousel img"
);
const allImagesArray: Array<HTMLImageElement> =
  Array.prototype.slice.call(allImages);
const firstImg = allImages[0];

const arrowIcons: NodeListOf<HTMLElement> =
  document.querySelectorAll(".slider-v3-icon")!;

let isDragStart: boolean = false,
  isDragging: boolean = false,
  prevPageX: number,
  prevScrollLeft: number,
  positionDiff: number,
  scrollPosition: number = 1,
  imgIterator: number = 1;

document.addEventListener("DOMContentLoaded", () => {
  if (window.innerWidth >= 768 && window.innerWidth <= 1024) {
    scrollPosition = 2;
    imgIterator = 2;
  } else if (window.innerWidth > 1024 && window.innerWidth <= 1440) {
    scrollPosition = 3;
    imgIterator = 3;
  } else if (window.innerWidth > 1440) {
    scrollPosition = 5;
    imgIterator = 5;
  }
});

const showHideIcons = () => {
  arrowIcons[0].style.display =
    scrollPosition <= imgIterator ? "none" : "block";
  arrowIcons[1].style.display =
    scrollPosition == allImagesArray.length ? "none" : "block";
};

arrowIcons.forEach((icon) => {
  icon.addEventListener("click", () => {
    let firstImgWidth = firstImg.clientWidth;
    carouselElement.scrollLeft +=
      icon.id == "left" ? -firstImgWidth : firstImgWidth;
    if (icon.id == "left") {
      carouselElement.scrollLeft += -firstImgWidth;
      scrollPosition--;
    } else {
      carouselElement.scrollLeft += firstImgWidth;
      scrollPosition++;
    }
    setTimeout(() => showHideIcons(), 60);
  });
});

const autoSlide = (): void | number => {
  if (
    carouselElement.scrollLeft -
      (carouselElement.scrollWidth - carouselElement.clientWidth) >
      -1 ||
    carouselElement.scrollLeft <= 0
  )
    return;

  positionDiff = Math.abs(positionDiff);
  let firstImgWidth = firstImg.clientWidth;
  let valDifference = firstImgWidth - positionDiff;

  if (carouselElement.scrollLeft > prevScrollLeft) {
    return (carouselElement.scrollLeft +=
      positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff);
  }
  carouselElement.scrollLeft -=
    positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
};

const dragStart = (e: MouseEvent | TouchEvent) => {
  isDragStart = true;
  prevPageX = e instanceof MouseEvent ? e.pageX : e.touches[0].pageX;
  prevScrollLeft = carouselElement.scrollLeft;
};

const dragging = (e: MouseEvent | TouchEvent) => {
  if (!isDragStart) return;
  e.preventDefault();
  isDragging = true;
  positionDiff =
    e instanceof MouseEvent
      ? e.pageX - prevPageX
      : e.touches[0].pageX - prevPageX;
  carouselElement.scrollLeft = prevScrollLeft - positionDiff;
  showHideIcons();
};

const dragStop = () => {
  isDragStart = false;
  if (!isDragging) return;
  isDragging = false;
  autoSlide();
};

carouselElement.addEventListener("touchstart", dragStart);
carouselElement.addEventListener("touchmove", dragging);
carouselElement.addEventListener("touchend", dragStop);
