const opinionsSectionElement: HTMLElement =
  document.querySelector(".main__opinions")!;

const opinionsSlideElement: NodeListOf<HTMLDivElement> =
  document.querySelectorAll(".main__opinions-slide")!;

let current: number = 0;
let prev: number = 4;
let next: number = 1;

const nextOpinionsSlide = () => {
  if (current < 4) {
    toSlide(current + 1);
  } else {
    toSlide(0);
  }
};

const prevOpinionsSlide = () => {
  if (current > 0) {
    toSlide(current - 1);
  } else {
    toSlide(opinionsSlideElement.length - 1);
  }
};

const toSlide = (number: number) => {
  current = number;
  prev = current - 1;
  next = current + 1;

  for (let i = 0; i < opinionsSlideElement.length; i++) {
    opinionsSlideElement[i].classList.remove("active");
    opinionsSlideElement[i].classList.remove("prev");
    opinionsSlideElement[i].classList.remove("next");
  }

  if (next == 5) {
    next = 0;
  }

  if (prev == -1) {
    prev = 4;
  }

  opinionsSlideElement[current].classList.add("active");
  opinionsSlideElement[prev].classList.add("prev");
  opinionsSlideElement[next].classList.add("next");
};

document
  .querySelector(".main__opinions-btn-left")!
  .addEventListener("click", prevOpinionsSlide);

document
  .querySelector(".main__opinions-btn-right")!
  .addEventListener("click", nextOpinionsSlide);
