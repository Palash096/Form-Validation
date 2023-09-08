// start storing values from registration form into varaibles.
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('confirm-password');

// attaching eventListner to form element
form.addEventListener('submit', e => {
    e.preventDefault(); // prevent the page from loading unless and until all the validations are matched

    validateForm(); 
});

// Display Error message
const setError = (element, message) => {
    // This part will select the element where we have to display the error msg
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    errorDisplay.innerText = message;

    // This part will refer to the css file and make the border of the input text red
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    inputControl.classList.add('success');
    inputControl.classList.remove('error');
    errorDisplay.innerText = '';
}

// email validation
// regex means regular expression
const isValid = email => {
    const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regexEmail.test(String(email).toLowerCase());
}

// validation logic
const validateForm = () => {
    // trim all the white spaces
    const userData = username.value.trim();
    const emailData = email.value.trim();
    const passwordData = password.value.trim();
    const confirm_passwordData = password2.value.trim();

    if(userData === ''){
        setError(username, "Username field is Empty");
    } else {
        setSuccess(username);
    }

    if(emailData === ''){
        setError(email, "Email field is Empty");
    } else if(!isValid(emailData)) {
        setError(email, "Provide Valid Email!");
    } else {
        setSuccess(email);
    }

    if(passwordData === ''){
        setError(password, "Password field is Empty");
    } else if(passwordData.length < 8) {
        setError(password, "Password must be greater thatn 8 Characters");
    } else {
        setSuccess(password);
    }

    if(confirm_passwordData === ''){
        setError(password2, "Password field is Empty");
    } else if(confirm_passwordData !== passwordData){
        setError(password2, "Password doesn't match");
    } else {
        setSuccess(password2);
    }
}

