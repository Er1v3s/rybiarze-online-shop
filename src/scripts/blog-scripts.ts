document.addEventListener("DOMContentLoaded", () => {
  if (window.location.pathname === "/rybiarze-online-shop/pages/blog.html") {
    const blogContainers: NodeListOf<HTMLDivElement> =
      document.querySelectorAll(".blog-main__container");

    blogContainers.forEach((blogContainerElement: HTMLDivElement) => {
      const blogButtonElement: HTMLButtonElement =
        blogContainerElement.querySelector(".blog-main__button")!;

      blogButtonElement.addEventListener("click", () => {
        blogContainerElement.classList.toggle("expanded");
        if (blogContainerElement.classList.contains("expanded")) {
          blogButtonElement.innerText = "Schowaj";
        } else {
          blogButtonElement.innerText = "Zobacz więcej";
        }
      });
    });
  }
});
