// ShortCircuiting Evaluation

/*
    if({}) {
        console.log("Truthy");
    } else {
        console.log("Falsy");
    }
*/

const user = {};
user && console.log("Authenticated User");

const auth = true;
auth ? console.log("Authenticated User") : console.log("Not Authenticated");

