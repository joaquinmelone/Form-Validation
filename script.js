// FORM

const form = document.querySelector("form");


const country = document.getElementById("country");
const zip = document.getElementById("zip");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");

const submitButton = document.getElementById("submit-button");

// ERROR MESSAGES SPACE

const countryError = document.querySelector(".country-error-message");
const zipError = document.querySelector(".zip-error-message");
const passwordError = document.querySelector(".password-error-message");
const confirmPasswordError = document.querySelector(".confirm-password-error-message");

// EMAIL CHECK

const email = document.getElementById("email");
const emailError = document.querySelector(".email-error-message");

email.addEventListener("input", e => {
    if (email.validity.valid) {
        emailError.textContent = "";
    }

    else {
        showEmailError();
    }
})

function showEmailError() {
    if (email.validity.valueMissing) {
        emailError.textContent = "Esta casilla es obligatoria.";
    }

    else if (!email.validity.patternMismatch) {
        emailError.textContent = "El formato del correo electrónico es incorrecto.";
    }
}

form.addEventListener("submit", e => {
    // EMAIL ERROR MANAGEMENT
    if (!email.validity.valid) {
        showEmailError();
        e.preventDefault();
    }
})