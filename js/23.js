// ECMAScript Modules Introduction

import exponent, { sum, substract, multiply, divide } from  "./functions.js";

const result = sum(1, 2);
console.log(result);

const result2 = substract(2, 3);
console.log(result2);

const result3 = multiply(2, 3);
console.log(result3);

const result4 = divide(1000, 2);
console.log(result4);

const result5 = exponent(2, 3);
console.log(result5);

/*
    Syntax:

    import { function1, function2, ..., functionN } from "module";
*/