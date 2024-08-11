// Performance and Multiple Async/Await functions

const url = 'https://jsonplaceholder.typicode.com/users';
const url2 = 'https://jsonplaceholder.typicode.com/posts';
const url3 = 'https://jsonplaceholder.typicode.com/albums';

const consultarAPI = async () => {
    try {
        const start = performance.now(); // It measures the time in milliseconds 

        const response = await fetch(url);

        // if(!response.ok) throw new Error("Error en la petición");

        const data = await response.json();
        console.log(data);

        const response2 = await fetch(url2);

        // if(!response.ok) throw new Error("Error en la petición");

        const data2 = await response2.json();
        console.log(data);

        const response3 = await fetch(url3);

        // if(!response.ok) throw new Error("Error en la petición");

        const data3 = await response3.json();
        console.log(data);

        const end = performance.now(); // It measures the time in milliseconds

        console.log("Response Time of First Function: " + (end - start) + "ms");
    } catch (error) {
        console.log(error.message);
    }

}

consultarAPI();

const consultarAPI2 = async() => {
    try {
        const start = performance.now(); // It measures the time in milliseconds 

        const [response, response2, response3] = await Promise.all([
            fetch(url),
            fetch(url2),
            fetch(url3)
        ])

        const [data, data2, data3] = await Promise.all([
            response.json(), 
            response2.json(), 
            response3.json()
        ])

        console.log(data);
        console.log(data2);
        console.log(data3);

        const end = performance.now(); // It measures the time in milliseconds

        console.log("Response Time of Second Function: " + (end - start) + "ms");
    } catch (error) {
        console.log(error.message);
    }
}

consultarAPI2();

/*
    You Can enhance performance by using this aproach:

    const [response, response2, response3] = await Promise.all([
        fetch(url),
        fetch(url2),
        fetch(url3)
    ])

    const [data, data2, data3] = await Promise.all([
        response.json(), 
        response2.json(), 
        response3.json()
    ])

    console.log(data);
    console.log(data2);
    console.log(data3);

    Using a promise all it waits for all promises to be resolved
*/