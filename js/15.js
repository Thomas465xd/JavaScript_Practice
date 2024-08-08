// Callback Functions

const sum = function (a = 0, b = 0) {
    return a + b;
}

const sumArrow = (a = 0, b = 0) =>  {
    return a + b;
}

function sumV2(a = 0, b = 0) {
    return a + b;
}

const result = sum(10, 20);
const resultArrow = sumArrow(15, 2);
const resultV2 = sumV2(4, 23);

console.log(result);
console.log(resultArrow);
console.log(resultV2);

/*
    return makes the function return a value
    that value can then be assigned to a variable
*/