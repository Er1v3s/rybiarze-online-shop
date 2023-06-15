// Pobierz elementy formularza
const emailInput = document.getElementById("email") as HTMLInputElement;
const passwordInput = document.getElementById("password") as HTMLInputElement;
const confirmPasswordInput = document.getElementById(
  "confirm_password"
) as HTMLInputElement;
const form = document.querySelector("#registration_form") as HTMLFormElement;
const errorContainer = document.querySelector(
  ".login-main__error-wrapper"
) as HTMLDivElement;
const registerButton = document.querySelector(
  ".login-main__submit-btn"
) as HTMLButtonElement;

form.addEventListener("", (e) => {
  e.preventDefault();
  if (!validateForm()) {
    console.log("Wir haba eine problema!");
  } else {
    console.log("Success!");
  }
});

emailInput.addEventListener("input", validateEmail);
passwordInput.addEventListener("input", validatePassword);
confirmPasswordInput.addEventListener("input", validateConfirmPassword);

emailInput.addEventListener("focusout", whyEmailIsNotValid);
passwordInput.addEventListener("focusout", whyPasswordIsNotValid);
confirmPasswordInput.addEventListener("focusout", whyConfirmPasswordIsNotValid);

function validateEmail() {
  const email = emailInput.value.trim();
  if (email == "") {
    emailInput.style.borderColor = "navajowhite";
  } else if (!isValidEmail(email)) {
    emailInput.style.borderColor = "red";
  } else {
    emailInput.style.borderColor = "green";
  }
}

function isValidEmail(email: string) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function validatePassword() {
  const password = passwordInput.value;
  if (password == "") {
    passwordInput.style.borderColor = "navajowhite";
  } else if (!isValidPassword(password)) {
    passwordInput.style.borderColor = "red";
  } else {
    passwordInput.style.borderColor = "green";
  }
}

function isValidPassword(password: string) {
  const passwordRegex =
    /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;
  return passwordRegex.test(password);
}

function validateConfirmPassword() {
  const confirmPassword = confirmPasswordInput.value;
  const password = passwordInput.value;
  if (confirmPassword === "") {
    confirmPasswordInput.style.borderColor = "navajowhite";
  } else if (confirmPassword !== password) {
    confirmPasswordInput.style.borderColor = "red";
  } else {
    confirmPasswordInput.style.borderColor = "green";
  }
}

function whyEmailIsNotValid() {
  if (!isValidEmail(emailInput.value.trim())) {
    showError("Niepoprawy adres email.");
  } else {
    hideError();
  }
}

function whyPasswordIsNotValid() {
  if (!isValidPassword(passwordInput.value)) {
    showError(
      "Hasło powinno zawierać przynajmniej 8 znaków w tym jedną wielką literę, cyfrę i znak specjalny"
    );
  } else {
    hideError();
  }
}

function whyConfirmPasswordIsNotValid() {
  if (confirmPasswordInput.value !== passwordInput.value) {
    showError("Hasła się od siebie różnią");
  } else if (confirmPasswordInput.value == "") {
    showError("Potwierdź swoje hasło");
  } else {
    hideError();
  }
}

function showError(errorMessage: string) {
  errorContainer.innerText = errorMessage;
  errorContainer.style.display = "block";
}

function hideError() {
  errorContainer.innerText = "";
  errorContainer.style.display = "none";
}

function validateForm() {
  validateEmail();
  validatePassword();
  validateConfirmPassword();
  return errorContainer.innerText === "";
}
