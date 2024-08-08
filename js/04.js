// Objects - Methods and Properties

const products = {
    name: 'Raspberry Pi 4',
    price: 100,
    discount: 0.12,
    stock: 12,
}

//Object.freeze(products); // Freeze properties
//Object.seal(products); // Seal properties (Update existing properties)

// Reassign properties
products.stock = 10;

// Add new properties
products.category = 'Home Server';

// Delete Properties
delete products.category;

console.table(products);