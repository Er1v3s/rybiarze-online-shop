class Slider {
  sliderContainer: HTMLDivElement;
  sliderCards: NodeListOf<HTMLDivElement>;
  leftButton: HTMLButtonElement;
  rightButton: HTMLButtonElement;
  currentOffset: number;
  itemMargin: number;
  cardWidth: number;
  cardsPerView: number;
  maxOffset: number;

  constructor(slider: HTMLDivElement) {
    this.sliderContainer = slider.querySelector(".slider-v3-carousel")!;
    this.sliderCards = slider.querySelectorAll(".slider-v3-item")!;
    this.leftButton = slider.querySelector(".slider-v3-button--left")!;
    this.rightButton = slider.querySelector(".slider-v3-button--right")!;
    this.currentOffset = 0;
    this.itemMargin = 16;
    this.cardWidth = this.sliderCards[0].clientWidth + this.itemMargin;
    this.cardsPerView = Math.floor(slider.offsetWidth / this.cardWidth) + 1;
    this.maxOffset =
      -this.cardWidth * (this.sliderCards.length - this.cardsPerView);

    this.showHideBtn();
    this.addEventListeners();
  }

  private showHideBtn = () => {
    this.leftButton.style.display = this.currentOffset != 0 ? "block" : "none";
    this.rightButton.style.display =
      this.currentOffset != this.maxOffset ? "block" : "none";
  };

  private handleLeftClick = () => {
    if (this.currentOffset < 0) {
      this.currentOffset += this.cardWidth;
      this.sliderContainer.style.transform = `translateX(${this.currentOffset}px)`;
    }

    this.showHideBtn();
  };

  private handleRightClick = () => {
    if (this.currentOffset > this.maxOffset) {
      this.currentOffset -= this.cardWidth;
      this.sliderContainer.style.transform = `translateX(${this.currentOffset}px)`;
    }

    this.showHideBtn();
  };

  private addEventListeners = () => {
    this.leftButton.addEventListener("click", this.handleLeftClick);
    this.rightButton.addEventListener("click", this.handleRightClick);
  };
}

// Tworzenie trzech różnych sliderów

if (window.location.pathname === "/rybiarze-online-shop/pages/shop.html") {
  new Slider(document.querySelector(".slider-v3.slider-1")!);
  new Slider(document.querySelector(".slider-v3.slider-2")!);
  new Slider(document.querySelector(".slider-v3.slider-3")!);
}
