const closeButton = document.getElementById(
  "close_message_button"
) as HTMLDivElement;

const addPostMessageBox = document.getElementById(
  "addPostMessage"
) as HTMLDivElement;

closeButton.addEventListener("click", () => {
  console.log("chuj");
  addPostMessageBox.style.display = "none";
});

if (addPostMessageBox !== undefined) {
  setTimeout(hideAddPostMessageBox, 5000);
  setTimeout(deleteAddPostMessageBox, 6000);
}

function deleteAddPostMessageBox() {
  addPostMessageBox.style.display = "none";
}

function hideAddPostMessageBox() {
  addPostMessageBox.style.transition = "1s";
  addPostMessageBox.style.transform = "translate(-50%, -125%)";
}
