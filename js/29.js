// DOM Events using JS - click

const heading = document.querySelector('.heading');
const links = document.querySelectorAll(".navegacion a");

// To register an event you need to use the addEventListener method
heading.addEventListener('click', () => {
    heading.style.color = 'red';
})

heading.addEventListener('mouseenter', () => {
    heading.textContent = "Mouse Entering Heading";
})

heading.addEventListener('mouseleave', () => {
    heading.textContent = "Mouse Leaving Heading";
})

/* 
    You can't use the .addEventListener('type', listener, options) method with the
    links elements because they are in an array so to use the .addEventListener you need
    to use a forEach or the array notation
*/

links.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        console.log(event.target.textContent);
    })
})

links.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        event.target.textContent = "You Clicked";
    })
})