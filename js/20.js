// Ternary Operators
const auth = true;

const pay = 30;
const balance = 20;
const card = true;

auth ? console.log('Access granted...') : console.log('Access denied, please login...')

/*
    Ternary Operator Form:
    condition ? true : false

    You can add more conditions to a ternary operator:
    condition ? true : condition ? true : false
*/

balance > pay ? console.log('You can pay') : card ? console.log('You can pay with card') : console.log('You cannot pay')