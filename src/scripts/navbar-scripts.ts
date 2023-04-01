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

// Sticky navbar

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
});

// Nabvar position

const navbar: HTMLElement = document.querySelector(".nav")!;
const video: HTMLVideoElement = document.querySelector("video")!;

document.addEventListener("DOMContentLoaded", () => {
  if (window.innerWidth < 1024) {
    video.style.marginTop = "100px";
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 1024) {
    video.style.marginTop = "0px";
  } else {
    video.style.marginTop = "100px";
  }

  console.log(navbar);
});
