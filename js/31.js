// DOM Events - Submits
const form = document.querySelector('#formulario');
form.addEventListener('submit', (evento) => {
    evento.preventDefault();

    const name = document.querySelector('#nombre').value;
    const password = document.querySelector('#password').value;

    // Prevent the previous alert
    const alertaPrevia = document.querySelector('.alert');
    if(alertaPrevia) {
        alertaPrevia.remove();
    }

    const alert = document.createElement('DIV');
    alert.textContent = "Alert Content";
    alert.classList.add("alert", "text-white", "uppercase", "text-sm", "text-center", "p-2", "font-black");
    
    if(name === "" || password === "") {
        //console.log("All fields are required");
        alert.textContent = "All fields are required";
        alert.classList.add("bg-red-500");
    } else {
        //console.log(name, password);
        alert.textContent = "Form Submitted";
        alert.classList.add("bg-green-500");
    }

    // Append the alert to the form
    form.appendChild(alert);

    // Remove the alert after 3 seconds
    setTimeout(() => {
        alert.remove();
    }, 3000);
})

/*
    This code manages the submission event of a form. When the form is submitted,
    it prevents the default behavior of submitting and refreshing the page using `evento.preventDefault()`.

    It then captures the values of the "name" and "password" input fields. 
    A new `DIV` element is created and styled using multiple CSS classes, 
    including "bg-red-500" for a red background, "text-white" for white text, 
    and other classes to adjust text size, alignment, padding, and font weight. 
    This `DIV` is appended to the form as an alert message.

    The code checks if either the "name" or "password" field is empty. 
    If either is empty, the alert's text content is updated to "All fields are required". 
    If both fields are filled, the alert is updated to "Form Submitted".
*/
