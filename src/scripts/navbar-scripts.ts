document.addEventListener("DOMContentLoaded", () => {
  // Mobile menu

  const burgerMenuElement: HTMLDivElement =
    document.querySelector(".nav__burger")!;
  const mobileMenuElement: HTMLDivElement =
    document.querySelector(".nav__mobile-menu")!;

  mobileMenuElement.addEventListener("mouseover", () => {
    mobileMenuElement.style.display = "block";
  });

  mobileMenuElement.addEventListener("mouseout", () => {
    mobileMenuElement.style.display = "none";
  });

  burgerMenuElement.addEventListener("click", () => {
    if (mobileMenuElement.style.display !== "block") {
      mobileMenuElement.style.display = "block";
    } else {
      mobileMenuElement.style.display = "none";
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth >= 768) {
      mobileMenuElement.style.display = "none";
    }
  });

  // Sticky navbar

  window.addEventListener("scroll", () => {
    if (window.scrollY > 167) {
      changeNavSize();
    } else {
      returnToPrimarySize();
    }
  });

  const navLogoElement: HTMLDivElement = document.querySelector(".nav__logo")!;
  const navIconElement: NodeListOf<HTMLElement> = document.querySelectorAll(
    ".nav__options ul li a i"
  )!;
  const navSpanElement: NodeListOf<HTMLSpanElement> = document.querySelectorAll(
    ".nav__options ul li a span"
  )!;

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
