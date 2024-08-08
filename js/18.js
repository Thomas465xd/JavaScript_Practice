// Comparing using the strict operators

const x = 20;
const y = 20;
const z = '20';

/* 
    == Equal to
    === Strict equal to
    != Not equal
    !== Strict not equal
*/

if(x == y) {
    console.log('x is equal to y');
} else {
    console.log('x is not equal to y');
}

if(x == z) {
    console.log('x is equal to z');
} else {
    console.log('x is not equal to z');
}

if(y === z) {
    console.log('y is equal to z');
} else {
    console.log('y is not equal to z');
}