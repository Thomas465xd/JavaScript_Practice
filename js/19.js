// Logical Operators: &&, ||, ! (AND, OR, NOT)

const pay = 10;
const balance = 20;
const card = true;

/** 
 * Logical Or and Logical And
 * || Or - At least one condition must be true
 * && And - All conditions must be true
 */

if( balance > pay || card) {
    console.log('You Can Pay');
} else {
    console.log('You cannot pay');
}