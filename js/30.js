// DOM Events - Inputs
const inputName = document.getElementById('nombre');
inputName.addEventListener('input', (event) => {
    console.log(event.target.value);
})

/*
    event.target.value is the value of the input
*/

const inputPassword = document.querySelector('#password');
inputPassword.addEventListener("input", passwordFunction);

function passwordFunction() {
    inputPassword.type = "text";

    setTimeout(() => {
        inputPassword.type = "password";
    }, 300);
}

/* 
    The code above is a function that changes the type of the input to "text" for 1 second
    and then changes it back to "password", creating the effect of a password input
*/