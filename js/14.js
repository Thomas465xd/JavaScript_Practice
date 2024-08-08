// Arrow Functions or One Line functions
const sum = (a = 0, b = 0) => console.log(a + b);

const sub = (a = 0, b = 0) => console.log(a - b);

const multiply = (a = 0, b = 0) => {
    console.log(a * b);
}

const divide = (a = 0, b = 0) => {
    console.log(a / b);
};

sum(2, 3);

sub(6, 3);

multiply(4, 6);

divide(10, 2);

/*
    Arrow functions are shorter and easier to read
    Arrow functions can be used as callbacks
    Arrow functions HAVE to be assigned to variables
*/