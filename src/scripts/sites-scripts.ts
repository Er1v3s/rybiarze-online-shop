document.addEventListener("DOMContentLoaded", () => {
  const scrollBtnElement: HTMLButtonElement =
    document.querySelector(".scroll-btn")!;
  const headerElement = document.querySelector("header")!;

  setTimeout(() => {
    scrollBtnElement.style.transition = "1s ease-out";
  }, 1000);

  scrollBtnElement.addEventListener("click", () => {
    if (window.scrollY <= headerElement.offsetHeight - 100) {
      scrollDown();
    } else {
      scrollUp();
    }
  });

  window.addEventListener("scroll", () => {
    if (window.scrollY <= headerElement.offsetHeight - 100) {
      scrollBtnElement.style.transform = "rotateX(0deg) translateX(-50%)";
    } else {
      scrollBtnElement.style.transform = "rotateX(540deg) translateX(-50%)";
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
