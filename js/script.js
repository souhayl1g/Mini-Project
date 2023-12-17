const header = document.querySelector("header");

window.addEventListener("scroll",function() {
    header.classList.toggle("sticky",window.scrollY > 10);
});

document.getElementById('submitButton').addEventListener('click', function () {
    validateForm();
});

function clearErrors() {
    var errorContainer = document.getElementById('errorContainer');
    errorContainer.innerHTML = '';
}

function validateForm() {
    var nom = document.getElementById('nom').value;
    var prenom = document.getElementById('prenom').value;
    var telephone = document.getElementById('telephone').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    clearErrors();

    if (!/^[a-zA-Z]+$/.test(nom) || nom.length < 3) {
        displayError('nomError', 'Le nom doit contenir au moins 3 caractères et ne doit contenir que des lettres.');
    }

    if (prenom.length < 4) {
        displayError('prenomError', 'Le prénom doit contenir au moins 4 caractères.');
    }

    if (!/^\d+$/.test(telephone)) {
        displayError('telephoneError', 'Le numéro de téléphone ne doit contenir que des chiffres.');
    }

    // Validate Email
    if (!isValidEmail(email)) {
        displayError('emailError', 'L\'adresse e-mail n\'est pas valide.');
    }
}

function isValidEmail(email) {
    // Simple email validation using a regular expression
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function clearErrors() {
    // Clear all previous error messages
    var errorElements = document.getElementsByClassName('error');
    for (var i = 0; i < errorElements.length; i++) {
        errorElements[i].textContent = '';
    }
}

function displayError(elementId, errorMessage) {
    // Display error message next to the specified element
    document.getElementById(elementId).textContent = errorMessage;
}
