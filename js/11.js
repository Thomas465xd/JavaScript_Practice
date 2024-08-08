// Iterating arrays with forEach and for...of
const tech = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Node',
    'MongoDB'
]

// For loops

/*
    for(let i = 0; i < tech.length; i++) {
        console.log(tech[i]); // On each iteration it prints the tech name
    }
*/

/*
    for uses an index to "navigate" the array
    for uses 3 arguments: (let i = 0; i < tech.length; i++)

    .length returns the length of the array
*/

// ForEach Loops
tech.forEach(function(tech) {
    console.log(tech); // On each iteration it prints the tech name
})

/*
    .forEach navigates through each of the array elements
*/

const numbers = [1, 2, 3, 4, 5];

// Map
const arrayMap = numbers.map(function(number) {
    return number * 2; // On each iteration it multiplies the number by 2
})

console.log(arrayMap);

/*
    .map creates a new array
    .map navigates through each of the array elements
*/

// for ... of
for(let number of numbers) {
    console.log(number);
}

/*
    .for...of navigates through each of the array elements
    it has a simpler syntax but is not commonly used
*/
