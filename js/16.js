// Array Methods Part 2
const tech = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Node',
    'MongoDB'
]

const numbers = [1, 2, 3, 4, 5];

// Filter - Lets you filter an array based on a condition
const newArray = tech.filter(function(tech) {
    if( tech === "JavaScript" ) {
        return tech;
    }
});

// You can do the same thing with arrow functions 
const newArray2 = tech.filter ((tech) => tech !== "HTML");

console.log(newArray);
console.log(newArray2);

const result = numbers.filter(numero => numero < 4);

console.log(result);

/*
    .filter does NOT mutate the original array
*/

// Includes - Lets you check if an item exists in an array
const includes = numbers.includes(2);
console.log(includes);

const technologies = tech.includes('HTML');
console.log(technologies);

/*
    .includes does NOT mutate the original array
    .includes returns true or false (bool)
*/

// Some - Returns true if any item in the array matches the condition
const some = numbers.some(number => number > 4);
console.log(some);

/*
    .some does NOT mutate the original array
    .some returns true or false (bool)
*/

// Every - Returns true if all items in the array match the condition
const every = numbers.every(number => number > 4);
console.log(every);

/*
    .every does NOT mutate the original array
    .every returns true or false (bool)
*/

// Find - Returns the first item that matches the condition
const find = numbers.find(number => number > 4);
console.log(find);

/*
    .find does NOT mutate the original array
    .find returns the first item that matches the condition
*/

// Reduce - returns a sum of all items in the array
const reduce = numbers.reduce((total, number) => total + number);
console.log(reduce);

/* 
    .reduce((previousValue, currentValue, currentIndex, array) => {}, initialValue)
    .reduce does NOT mutate the original array
    .reduce takes to arguments instead of 1
*/