document.addEventListener("DOMContentLoaded", () => {
  // Mobile menu

  const burgerMenuElement: HTMLDivElement =
    document.querySelector(".nav__burger")!;
  const mobileMenuElement: HTMLDivElement =
    document.querySelector(".nav__mobile-menu")!;

  burgerMenuElement.addEventListener("click", () => {
    showMobileMenu();

    burgerMenuElement.classList.toggle("active");
    burgerMenuElement.classList.toggle("not-active");
  });

  document.addEventListener("click", (e: MouseEvent | TouchEvent) => {
    const target = e.target;
    if (mobileMenuElement.classList.contains("nav__mobile-menu--show")) {
      if (
        target instanceof Node &&
        !mobileMenuElement.contains(target) &&
        !burgerMenuElement.contains(target)
      ) {
        transformBurger();
        showMobileMenu();
      }
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth >= 768) {
      mobileMenuElement.classList.remove("nav__mobile-menu--show");

      transformBurger();
    }
  });

  window.addEventListener("scroll", () => {
    if (window.scrollY > 167) {
      burgerMenuElement.classList.add("active-after-scroll");
    } else {
      burgerMenuElement.classList.remove("active-after-scroll");
    }
  });

  const showMobileMenu = (): void => {
    if (mobileMenuElement.classList.contains("nav__mobile-menu--show")) {
      mobileMenuElement.style.animation = "slide-out 0.7s ease forwards";
      setTimeout(() => {
        mobileMenuElement.classList.remove("nav__mobile-menu--show");
      }, 700);
    } else {
      mobileMenuElement.style.animation = "slide-in 0.7s ease forwards";

      mobileMenuElement.classList.add("nav__mobile-menu--show");
    }
  };

  const transformBurger = (): void => {
    burgerMenuElement.classList.remove("active");
    burgerMenuElement.classList.add("not-active");
  };

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
    navLogoElement.setAttribute("class", "nav__logo--after-scroll");

    navIconElement.forEach((element: HTMLElement) => {
      element.classList.add("after-scroll");
    });
    navSpanElement.forEach((element: HTMLSpanElement) => {
      element.setAttribute("class", "after-scroll");
    });

    mobileMenuElement.style.marginTop = "50px";
  };

  const returnToPrimarySize = (): void => {
    navLogoElement.setAttribute("class", "nav__logo");

    navIconElement.forEach((element: HTMLElement) => {
      element.classList.remove("after-scroll");
    });

    navSpanElement.forEach((element: HTMLSpanElement) => {
      element.removeAttribute("class");
    });

    mobileMenuElement.style.marginTop = "100px";
  };
});
