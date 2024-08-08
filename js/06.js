// Objects - Destructuring of 2 or more objects

const product = {
    name: 'Raspberry Pi 4',
    price: 100,
    discount: 0.12,
    stock: 12,
}

const client = {
    name: 'John',
    lastName: 'Doe',
    email: 'tq7k3@example.com',
    age: 30,
    address: {
        street: '123 Main St',
        city: 'New York',
        state: 'NY',
        zip: '10001',
    },
}

/*
    const cart = {
        total: 1, 
        ...product // Spread Operator
    }

    console.table(cart);
*/

/*
    const newObject = {
        //product: {...product},
        ...product,
        
        //client: {...client},
        ...client
    }

    console.table(newObject);
*/

// Object asign
const newObject2 = Object.assign(product, client);

console.table(newObject2);

/* 
    Object asign is used to copy the properties of one object to another 
*/