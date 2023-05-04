if (
  window.location.pathname === "/rybiarze-online-shop/pages/shop.html" ||
  window.location.pathname === "/rybiarze-online-shop/index.html" ||
  window.location.pathname === "/rybiarze-online-shop/"
) {
  const opinionsSlideElement: NodeListOf<HTMLDivElement> =
    document.querySelectorAll(".slider-v2-slide")!;

  let current: number = 0;
  let prev: number = 4;
  let next: number = 1;

  const nextOpinionsSlide = () => {
    console.log("XD");
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
    .querySelector(".slider-v2-btn-left")!
    .addEventListener("click", prevOpinionsSlide);

  document
    .querySelector(".slider-v2-btn-right")!
    .addEventListener("click", nextOpinionsSlide);
}
