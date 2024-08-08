// Function Expression
const sum = function (a = 0, b = 0) {
    console.log(a + b);
}

sum(2, 3);

/*
    You can assign a function to a variable
    The "variable function" has nearly the same characteristics as "normal"  functions
    
    When JS compiles it first reads the function and then assigns it to a variable
    Thats why if you call a variable function before it was declared you will get an error

    Example:

    sum(2, 3);

    const sum = function (a = 0, b = 0) {
        console.log(a + b);
    }

    Output: Uncaught TypeError: Cannot read properties of undefined (reading 'log')
*/