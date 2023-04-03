document.addEventListener("DOMContentLoaded", () => {
  const scrollBtnElement: HTMLButtonElement =
    document.querySelector("button.scroll-btn")!;
  const headerElement = document.querySelector("header")!;

  scrollBtnElement.addEventListener("click", () => {
    scrollBtnElement.style.transition = "1s ease-out";
    if (window.scrollY <= headerElement.offsetHeight - 100) {
      scrollDown();
    } else {
      scrollUp();
    }
  });

  const scrollDown = () => {
    window.scrollTo(0, headerElement.offsetHeight);
    scrollBtnElement.style.transform = "rotateX(540deg) translateX(-50%)";
  };

  const scrollUp = () => {
    window.scrollTo(0, headerElement.scrollTop);
    scrollBtnElement.style.transform = "rotateX(0deg) translateX(-50%)";
  };
});
