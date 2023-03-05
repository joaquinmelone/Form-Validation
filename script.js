// FORM

const email = document.getElementById("email");
const country = document.getElementById("country");
const zip = document.getElementById("zip");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");

const submitButton = document.getElementById("submit-button");

// ERROR MESSAGES SPACE 

const emailError = document.querySelector(".email-error-message");
const countryError = document.querySelector(".country-error-message");
const zipError = document.querySelector(".zip-error-message");
const passwordError = document.querySelector(".password-error-message");
const confirmPasswordError = document.querySelector(".confirm-password-error-message");

// ALL POSSIBLE ERROR MESSAGES

const errorMessages = ["Este espacio es obligatorio"];

// VALIDATION FUNCTIONS

function emptyValidate(inputField) {
    if (!inputField.checkValidity()) {
        
    }
}

// SUBMIT BUTTON EVENT

submitButton.addEventListener("click", () => {
    validate(email);
})

