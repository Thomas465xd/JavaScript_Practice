// Fetch API con Promises

const url = 'https://jsonplaceholder.typicode.com/users';
const url2 = 'https://jsonplaceholder.typicode.com/posts';

fetch(url)
    .then((response) => {
        if(response.ok) {
            return response.json();
        }

        throw new Error(response.status);
    })
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.log(error);
    })

/*
    fetch(url): It takes a URL and returns a promise
    .then: It takes a callback function that is executed when the promise is resolved
    .catch: It takes a callback function that is executed when the promise is rejected
    return response.json(): It returns a promise that resolves to a JSON object
*/