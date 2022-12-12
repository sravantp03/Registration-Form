const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', e => {
    e.preventDefault();
    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisaply = inputControl.querySelector('.error');
    errorDisaply.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}

const setSuccess = (element) => {
    const inputControl = element.parentElement;
    const successDisaply = inputControl.querySelector('.error');
    successDisaply.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
}

const isValidUsername = (username) => {
    const nameRegex = /^[a-zA-Z\_]+$/;
    return nameRegex.test(username);
  }

const isValidEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const isValidPassword = (password) =>
{
    const re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    return re.test(password);
}

const validateInputs = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    // username check
    if (usernameValue === '') {
        setError(username, "Username is required");
    } else if (!isValidUsername(usernameValue)) {
        setError(username, "Username contains only alphabets and underscores");
    } 
    else {
        setSuccess(username);
    }

    // email check
    if (emailValue === '') {
        setError(email, "Email Id is required");
    } else if (!isValidEmail(emailValue)) {
        setError(email, "Provide a valid email address");
    } else {
        setSuccess(email);
    }

    // password check
    if (passwordValue === '') {
        setError(password, "Password is required");
    } else if (!isValidPassword(passwordValue)) {
        setError(password, "Password should contain number and special character");
    } 
    else if (passwordValue.length < 8) {
        setError(password, "Password must be atleast 8 characters");
    } else {
        setSuccess(password);
    }

    // password confirming
    if (password2Value === '') {
        setError(password2, "Confirm your password");
    } else if (passwordValue != password2Value) {
        setError(password2, "Password doesn't match");
    } else {
        setSuccess(password2);
    }
}