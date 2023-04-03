document.addEventListener("DOMContentLoaded", () => {
  // Overlay

  const headerImagesElements: NodeListOf<HTMLDivElement> =
    document.querySelectorAll(".commercial-baner div")!;

  const textContentArray: Array<string> = [
    "Najlepsze na świecie wędki, wyciągniesz nimi wszystko, nawet utopionego opla",
    "Kołowrotki - można nimi kręcić...",
    "Zanęta tak dobra, że sam byś ją zjadł (ale lepiej nie jedz)",
    "Takich haczyków jak na zdjęciu to nie kupuj, te są dla dzieci. Ale po kliknięciu powinieneś znaleźć odpowiednie dla siebie",
    "Prawdziwi mężczyźni używają sygnalizatorów, ale spławiki w naszym sklepie też są",
  ];

  headerImagesElements.forEach((element: HTMLDivElement, index: number) => {
    const headerImageOverlayElement: HTMLDivElement =
      document.createElement("div");
    headerImageOverlayElement.setAttribute("class", "overlay");

    const overlayTextFieldElement: HTMLSpanElement =
      document.createElement("span");
    overlayTextFieldElement.innerText = textContentArray[index];

    headerImageOverlayElement.appendChild(overlayTextFieldElement);

    element.appendChild(headerImageOverlayElement);
  });

  // Pause video when is not visible

  const video: HTMLVideoElement = document.querySelector("video")!;

  if (video) {
    let isPaused: boolean = true;

    const handleVideo = (): void => {
      const isVisible = isElementVisible(video);
      if (isVisible && isPaused) {
        video.play();
        isPaused = false;
      } else if (!isVisible && !isPaused) {
        video.pause();
        isPaused = true;
      }
    };

    const isElementVisible = (element: HTMLElement): boolean => {
      const rect = element.getBoundingClientRect();
      const windowHeight =
        window.innerHeight || document.documentElement.clientHeight;
      return rect.bottom >= 0 && rect.top <= windowHeight;
    };

    document.addEventListener("scroll", handleVideo);
    document.addEventListener("visibilitychange", handleVideo);
  }

  // Keybaord write effect

  const textField: HTMLDivElement =
    document.querySelector(".video-text-field")!;

  if (textField) {
    const text: string =
      "Rybiarze - Twój przewodnik po świecie wędkarstwa: techniki połowowe, sprzęt, najlepsze łowiska i porady dla początkujących i zaawansowanych wędkarzy. Z nami nauczysz się, jak skutecznie łowić ryby, wybierać odpowiedni sprzęt i znaleźć najlepsze miejsca na wędkowanie.";
    let i = 0;

    const typeWriter = (): void => {
      if (i < text.length) {
        textField.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 25);
      }
    };

    typeWriter();
  }
});
