const email = document.getElementById('email');
const errorMsg = document.getElementById('error-msg');

function emailValidate() {
    if (!emailIsValid(email.value)) {
        email.parentElement.classList.add('invalid-input');
        errorMsg.style.display = 'block';
        errorMsg.innerHTML = 'Please provide a valid email';
    } else {
        email.parentElement.classList.remove('invalid-input');
        errorMsg.style.display = 'none';
    }
}

function emailIsValid (email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
