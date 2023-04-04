document.addEventListener("DOMContentLoaded", () => {
  // Mobile menu

  const burgerMenuElement: HTMLDivElement =
    document.querySelector(".nav__burger")!;
  const mobileMenuElement: HTMLDivElement =
    document.querySelector(".nav__mobile-menu")!;

  burgerMenuElement.addEventListener("click", () => {
    mobileMenuElement.classList.toggle("nav__mobile-menu--show");
  });

  document.addEventListener("click", (e: MouseEvent | TouchEvent) => {
    const target = e.target;
    if (
      target instanceof Node &&
      !mobileMenuElement.contains(target) &&
      !burgerMenuElement.contains(target)
    ) {
      mobileMenuElement.classList.remove("nav__mobile-menu--show");
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth >= 768) {
      mobileMenuElement.classList.remove("nav__mobile-menu--show");
    }
  });

  // Sticky navbar

  const navLogoElement: HTMLDivElement = document.querySelector(".nav__logo")!;
  const navIconElement: NodeListOf<HTMLElement> = document.querySelectorAll(
    ".nav__options ul li a i"
  )!;
  const navSpanElement: NodeListOf<HTMLSpanElement> = document.querySelectorAll(
    ".nav__options ul li a span"
  )!;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 167) {
      changeNavSize();
    } else {
      returnToPrimarySize();
    }
  });

  const changeNavSize = (): void => {
    navLogoElement.setAttribute("class", "nav__logo--afterScroll");

    navIconElement.forEach((element: HTMLElement) => {
      element.classList.add("afterScroll");
    });
    navSpanElement.forEach((element: HTMLSpanElement) => {
      element.setAttribute("class", "afterScroll");
    });

    mobileMenuElement.style.marginTop = "50px";
  };

  const returnToPrimarySize = (): void => {
    navLogoElement.setAttribute("class", "nav__logo");

    navIconElement.forEach((element: HTMLElement) => {
      element.classList.remove("afterScroll");
    });
    navSpanElement.forEach((element: HTMLSpanElement) => {
      element.removeAttribute("class");
    });

    mobileMenuElement.style.marginTop = "100px";
  };
});
