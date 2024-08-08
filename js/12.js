// Function Declaration

function sum(a, b) {
    return a + b;
}

function substract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

console.log(sum(1, 1));
console.log(substract(6, 3));
console.log(multiply(4, 6));
console.log(divide(10, 2));

// Default Parameters

function sumV2(a = 0, b = 0) {
    return a + b;
}

console.log(sumV2(2));

/*
    functions are reusable
    functions can be called
    functions can have parameters and return values
    functions can be assigned to variables  
    functions can be passed as arguments
*/

