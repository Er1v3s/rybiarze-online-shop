document.addEventListener("DOMContentLoaded", () => {
  if (window.location.pathname === "/rybiarze-online-shop/pages/blog.html") {
    const blogContainerElement: HTMLDivElement = document.querySelector(
      ".blog-main__container"
    )!;
    const blogButtonElement: HTMLButtonElement =
      document.querySelector(".blog-main__button")!;

    blogButtonElement.addEventListener("click", () => {
      //   console.log();
      blogContainerElement.classList.toggle("expanded");
      if (blogContainerElement.classList.contains("expanded")) {
        blogButtonElement.innerText = "Schowaj";
      } else {
        blogButtonElement.innerText = "Zobacz więcej";
      }
    });
  }
});
