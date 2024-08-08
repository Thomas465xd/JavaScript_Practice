// Functions to export
export function sum(a, b) {
    return a + b;
}

export const sum2 = (a, b) => a + b;

export function substract(a, b) {
    return a - b;
}

export const substract2 = (a, b) => a - b;

/*
    Syntax 1:
    export function x(a, b) { ... }
*/

function multiply(a, b) {
    return a * b;
}

const multiply2 = (a, b) => a * b;

function divide(a, b) {
    return a / b;
}

const divide2 = (a, b) => a / b;

export { multiply, divide, multiply2, divide2 };

/*
    Syntax 2:
    export { function1, function2, ..., functionN };
*/

export default function exponent(a, b) {
    return Math.pow(a, b);
}

/*
    Syntax for default export:
    export default function x(a, b) { ... }

    There can only be one default export per module.
*/
