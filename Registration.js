const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirm_password = document.getElementById('confirm_password');
const gender = document.getElementById('gender');

form.addEventListener('submit', e =>{
    e.preventDefault();
    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
}

const isValid = email => {
    const regEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regEmail.test(String(email).toLowerCase());
}


const validateInputs = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const confirm_passwordValue = confirm_password.value.trim();

    if(usernameValue === ''){
        setError(username, "Username is required");
    } else {
        setSuccess(username);
    }

    if(emailValue === ''){
        setError(email, "Email is required");
    } else if(!isValid(emailValue)) {
        setError(email, "Provide a valid email format");
    } else {
        setSuccess(email);
    }

    if(passwordValue === ''){
        setError(password, "Password is required");
    } else if(passwordValue.length < 8){
        setError(password, "Password must be less than 8 characters.");
    } else {
        setSuccess(password);
    }

    if(confirm_passwordValue === ''){
        setError(confirm_password, "Please confirm your Password");
    } else if(confirm_passwordValue !== passwordValue){
        setError(confirm_password, "Password dosn't matched!");
    } else {
        setSuccess(confirm_password);
    }
};

