// Array Destructuring
const tech = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Node',
    'MongoDB'
]

const react = tech[3];
const [ , , , reactjs] = tech;
//const [html, css, reactjs] = tech;

console.log(reactjs);

/*
    Array Destructuring works with positions 

    const [html, css, javascript, react, node, mongodb] = tech;

    console.log(react);
    console.log(html, css, javascript, react, node, mongodb);

*/