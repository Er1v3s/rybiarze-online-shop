if (
  window.location.pathname === "/index.html" ||
  window.location.pathname === "/"
) {
  const arrowLeftElement: HTMLImageElement =
    document.querySelector(".slider-arrow-left")!;
  const arrowRightElement: HTMLImageElement = document.querySelector(
    ".slider-arrow-right"
  )!;
  const sliderGalleryElement: HTMLDivElement = document.querySelector(
    ".main__slider-gallery"
  )!;
  const imageElements: NodeListOf<HTMLImageElement> =
    document.querySelectorAll(".main__slider-img")!;
  const sliderBottomElement: HTMLDivElement = document.querySelector(
    ".main__slider-bottom"
  )!;

  let sliderWidth: number = sliderGalleryElement.clientWidth;
  let slide: number = 1;
  const imglength: number = imageElements.length;

  for (let i = 0; i < imglength; i++) {
    const divElement: HTMLDivElement = document.createElement("div");
    divElement.classList.add("main__slider-button");
    sliderBottomElement.appendChild(divElement);
  }

  const sliderBottomCircles: NodeListOf<HTMLDivElement> =
    document.querySelectorAll(".main__slider-button");
  const sliderBottomCirclesArray: Array<HTMLDivElement> =
    Array.prototype.slice.call(sliderBottomCircles);
  sliderBottomCirclesArray[0].style.backgroundColor = "rgba(31,31,31)";

  const resetCircleBackground = (): void => {
    sliderBottomCirclesArray.forEach((circle: HTMLDivElement) => {
      circle.style.backgroundColor = "transparent";
    });
  };

  const changeActiveCircle = (): void => {
    resetCircleBackground();
    sliderBottomCirclesArray[slide - 1].style.backgroundColor =
      "rgba(31,31,31)";
  };

  let autoChangeSlide: NodeJS.Timeout = setInterval(() => {
    slide < imglength ? nextSlide() : goToFirstSlide();
  }, 3000);

  const resetInterval = (): void => {
    clearInterval(autoChangeSlide);
    autoChangeSlide = setInterval(() => {
      slide < imglength ? nextSlide() : goToFirstSlide();
    }, 3000);
  };

  const nextSlide = (): void => {
    sliderGalleryElement.style.transform = `translateX(-${
      slide * sliderWidth
    }px)`;
    slide++;
    changeActiveCircle();
  };

  const prevSlide = (): void => {
    slide--;
    sliderGalleryElement.style.transform = `translateX(-${
      (slide - 1) * sliderWidth
    }px)`;
    changeActiveCircle();
  };

  const goToFirstSlide = (): void => {
    slide = 1;
    sliderGalleryElement.style.transform = `translateX(0px)`;
    changeActiveCircle();
  };

  const goToLastSlide = (): void => {
    slide = imglength;
    sliderGalleryElement.style.transform = `translateX(-${
      (imglength - 1) * sliderWidth
    }px)`;
    changeActiveCircle();
  };

  sliderBottomCirclesArray.forEach((circle: HTMLDivElement, index: number) => {
    circle.addEventListener("click", () => {
      sliderGalleryElement.style.transform = `translateX(-${
        index * sliderWidth
      }px)`;
      slide = index + 1;
      changeActiveCircle();
    });
  });

  arrowRightElement.addEventListener("click", () => {
    resetInterval();
    slide < imglength ? nextSlide() : goToFirstSlide();
  });

  arrowLeftElement.addEventListener("click", () => {
    resetInterval();
    slide <= 1 ? goToLastSlide() : prevSlide();
  });

  window.addEventListener("keydown", (event: KeyboardEvent) => {
    resetInterval();
    if (event.key === "ArrowRight") {
      slide < imglength ? nextSlide() : goToFirstSlide();
    } else if (event.key === "ArrowLeft") {
      slide <= 1 ? goToLastSlide() : prevSlide();
    }
  });

  let touchStartX: number;
  let touchEndX: number;

  window.addEventListener("touchstart", (event: TouchEvent) => {
    touchStartX = event.touches[0].clientX;
  });

  window.addEventListener("touchmove", (event: TouchEvent) => {
    touchEndX = event.touches[0].clientX;
  });

  window.addEventListener("touchend", () => {
    if (touchStartX - touchEndX > 50) {
      slide < imglength ? nextSlide() : goToFirstSlide();
    }

    if (touchStartX - touchEndX < -50) {
      slide <= 1 ? goToLastSlide() : prevSlide();
    }
    resetInterval();
  });

  window.addEventListener("resize", () => {
    sliderWidth = sliderGalleryElement.clientWidth;
    sliderGalleryElement.style.transform = `translateX(-${
      slide * sliderWidth - sliderWidth
    }px)`;
  });
}
