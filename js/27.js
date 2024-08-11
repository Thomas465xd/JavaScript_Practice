// Selectors - DOM
const heading = document.querySelector('.heading');

console.log(heading);
console.log(heading.tagName);
console.log(heading.textContent);
console.log(heading.classList);
console.log(heading.id);

/*
    To Select an HTML element you have to use document.(querySelector, querySelectorAll, etc...)
    You Can Manipulte the DOM with some methods like heading.textContent, heading.classList, etc...

    .querySelector lets you select one element of the DOM
*/

const links = document.querySelectorAll('.navegacion a');

console.log(links);

/*
    .querySelectorAll lets you select multiple elements of the DOM
*/