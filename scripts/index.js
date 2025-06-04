"use strict";

const form = document.getElementById("sign-up-form");
const email = document.getElementById("email");
const emailError = document.getElementById("email-error");
const successEmail = document.getElementById("success-email");
const dialog = document.getElementById("success-dialog");
const closeButton = document.getElementById("dialog-close");

if (form) {
    form.addEventListener("submit", function(event) {
        setEmailValidationStyle();

        if (successEmail && email) {
            successEmail.innerText = email.value;
        }

        if (dialog) {
            dialog.showModal();
        }

        event.preventDefault();
    });
}


if (email) {
    email.addEventListener("blur", function(event) {
        setEmailValidationStyle();
    });

    email.addEventListener("invalid", function(event) {
        setEmailValidationStyle();
        event.preventDefault();
    });
}


if (closeButton) {
    closeButton.addEventListener("click", function(event) {
        if (dialog) {
            dialog.close();
        }
    });
}

function setEmailValidationStyle() {
    if (emailError) {
        if (email.validity.valid) {
            emailError.innerText = ""
            email.removeAttribute("data-invalid");
        }
        else {
            emailError.innerText = "Valid email required"
            email.setAttribute("data-invalid", "");
        }
    }
}