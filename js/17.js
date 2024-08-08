// if - else conditionals
const stock = 4000;
const available = 200;

const auth = true;

if(auth) {
    // The condition is true
    console.log('Access granted...');

} else {
    // The condition is false
    console.log('Access denied, please login...');
}

if(stock > available) {
    // The condition is true
    console.log('Stock available');
} else {
    // The condition is false
    console.log('Stock not available');
}

/** 
 * < Minor than
 * > Greater than
 * <= Less than or equal
 * >= Greater than or equal
 * == Equal
 * === Strict equal
 * != Not equal
 * !== Strict not equal
*/