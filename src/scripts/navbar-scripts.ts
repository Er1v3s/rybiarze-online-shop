// Mobile menu

const burger_menu: HTMLDivElement = document.querySelector(".nav__burger")!;
const mobile_menu: HTMLDivElement =
  document.querySelector(".nav__mobile-menu")!;

mobile_menu.addEventListener("mouseover", () => {
  mobile_menu.style.display = "block";
});

mobile_menu.addEventListener("mouseout", () => {
  mobile_menu.style.display = "none";
});

burger_menu.addEventListener("click", () => {
  if (mobile_menu.style.display == "none") {
    mobile_menu.style.display = "block";
  } else {
    mobile_menu.style.display = "none";
  }
});

window.addEventListener("resize", () => {
  if (innerWidth >= 768) {
    mobile_menu.style.display = "none";
  }
});

// Sticky navbar

const nav_container: HTMLDivElement =
  document.querySelector(".nav__container")!;
const navbar_logo: HTMLDivElement = document.querySelector(".nav__logo")!;
const nav_options_i: NodeListOf<HTMLElement> = document.querySelectorAll(
  ".nav__options ul li a i"
)!;
const nav_options_span: NodeListOf<HTMLSpanElement> = document.querySelectorAll(
  ".nav__options ul li a span"
)!;

window.addEventListener("scroll", () => {
  if (scrollY > 167) {
    navbar_logo.setAttribute("class", "nav__logo--afterScroll");

    nav_options_i.forEach((element) => {
      element.classList.add("afterScroll");
    });
    nav_options_span.forEach((element) => {
      element.setAttribute("class", "afterScroll");
    });
  } else {
    navbar_logo.setAttribute("class", "nav__logo");

    nav_options_i.forEach((element) => {
      element.classList.remove("afterScroll");
    });
    nav_options_span.forEach((element) => {
      element.removeAttribute("class");
    });
  }

  window.addEventListener("resize", () => {
    if (innerWidth < 280) {
      navbar_logo.style.display = "none";
      nav_container.style.height = "100px";
      nav_container.style.gridTemplateColumns = "1fr 1fr";
    } else {
      navbar_logo.style.display = "block";
      nav_container.style.height = "0";
      nav_container.style.gridTemplateColumns = "3fr 2fr 1fr";
    }
  });
});

// Nabvar position

const navbar: HTMLElement = document.querySelector(".nav")!;
const video: HTMLVideoElement = document.querySelector("video")!;

document.addEventListener("DOMContentLoaded", () => {
  if (window.innerWidth < 1024) {
    video.style.paddingTop = "100px";
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 1024) {
    video.style.marginTop = "0px";
  } else {
    // video.style.marginTop = "100px";
  }
});
