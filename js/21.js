// Optional Chaining ( ? )
const student = {
    name: "Thomas",
    class: "JS 101", 
    approved: true,
    tests: {
        test1: 100,
        test2: 90
    }
};

console.log(student.tests?.test1);

console.log("After Student")

/*
    Optional Chaining ( ? )
    is a logic operator that returns undefined if the object or property does not exist
    and returns the value of the property if it exists
*/

// Nullish coalescing operator (??)
const page = null ?? 1;
console.log(page);

/*
    Nullish coalescing operator (??)
    is a logic operator that returns the first value that is not null or undefined
*/