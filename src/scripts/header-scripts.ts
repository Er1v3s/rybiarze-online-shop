const header_images: NodeListOf<HTMLDivElement> = document.querySelectorAll(
  ".commercial-baner div"
)!;

const text_content: Array<string> = [
  "Najlepsze na świecie wędki, wyciągniesz nimi wszystko, nawet utopionego opla",
  "Kołowrotki - można nimi kręcić...",
  "Zanęta tak dobra, że sam byś ją zjadł (ale lepiej nie jedz)",
  "Takich haczyków jak na zdjęciu to nie kupuj, te są dla dzieci. Ale po kliknięciu powinieneś znaleźć odpowiednie dla siebie",
  "Prawdziwi mężczyźni używają sygnalizatorów, ale spławiki w naszym sklepie też są",
];

header_images.forEach((element, index) => {
  const header_image_overlay: HTMLDivElement = document.createElement("div");
  header_image_overlay.setAttribute("class", "overlay");
  const overlay_text: HTMLSpanElement = document.createElement("span");
  overlay_text.innerText = text_content[index];
  header_image_overlay.appendChild(overlay_text);
  element.appendChild(header_image_overlay);
});
