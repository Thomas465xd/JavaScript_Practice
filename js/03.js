// Objects

const products = {
    name: 'Raspberry Pi 4',
    price: 100,
    discount: 0.12,
    stock: 12,
}

//console.log(products);
//console.table(products); // Display in a table

//console.log(products.name); // Accessing Specific properties

/*
    Objects have properties and methods
    Keys and Values {x: y}
*/

/* Destructuring */
const { name, price, stock } = products;
console.log(name, price, stock);

/* 
    Destructuring with methods

    const { price: p } = products;
    console.log(p);
*/

// Object Literal Enhancement
const auth = true;
const user = "Thomas";

const newObject = {
    //auth: auth,
    //user: user

    auth, 
    user
}

console.log(newObject);

/* 
    Object Literal Enhancement

    const newObject = {
        auth,   
        user
    }

    console.log(newObject);
*/