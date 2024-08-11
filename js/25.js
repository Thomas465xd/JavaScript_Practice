// Fetch API con Async/Await

const url = 'https://jsonplaceholder.typicode.com/users';

const consultarAPI = async () => {

    try {
        const response = await fetch(url);
        if(!response.ok) throw new Error("Error en la petición");

        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error.message);
    }

}

consultarAPI();

/*
    async function: It takes a function that returns a promise
    await: It waits for the promise to be resolved

    In other words, an async function can wait for the data to be fetched 
    and await makes the code wait for the promise (or the data) to be resolved
*/