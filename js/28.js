// Manipulating Elements in the DOM
const heading = document.querySelector('.heading');
const links = document.querySelectorAll(".navegacion a");

// You can access the element properties using the Object syntax or the dot notation
heading.textContent = "A new Heading";
heading.id = "main-heading";
heading.classList.add("blue");

if(heading.classList.contains("blue")) {
    heading.style.color = "blue";
}

// The links are an array. So you need to access them using forEach or the array notation
links.forEach(link => {
    link.classList.add("active");
})

if(links[2].classList.contains("active")) {
    links[2].style.color = "red";
}