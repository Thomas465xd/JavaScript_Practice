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

const { name } = product;
const { name: clientName, lastName, address: { street, city } } = client;

console.log(name, clientName, lastName, street, city);