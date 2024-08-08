// Array Methods
const tech = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Node',
    'MongoDB'
]

const newTech = [...tech, 'Sass']; // Add Sass at the end of a new array from the previous array

const tech2 = tech.filter(function(tech) { // Filter the array and return a new array
    if( tech === "JavaScript" ) {
        return tech; // Return only JavaScript
    }

    //console.log(tech);
})

/*
    .filter does NOT mutate the original array
*/

console.log(tech2);

const tech3 = tech.map(function(tech) { // Map creates a new araray with the results of the function call

    if( tech === "React" ) {
        return "Next.js"; // Return only React
    } else {
        return tech;
    }

    //console.log(tech);
})

console.log(tech3);

/*
    .map does not mutate the original array
*/

tech[0] = 'PHP'; // Replace HTML
tech[6] = 'Python'; // Add Python at the end of the array

/*
    tech.push('Java'); // Add Java at the end of the array
    tech.unshift('Ruby'); // Add Ruby at the beginning of the array

    console.table(tech);
    console.log(tech.length);
*/

/*
    console.table(newTech);
    console.log(newTech.length);
*/

/*
    Arrays are mutable
*/