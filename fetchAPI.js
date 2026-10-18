//Fetch API is a JavaScript feature used to request data from a server and receive its response.

fetch("https://jsonplaceholder.typicode.com/users/1")
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data);
    })
    .catch(function(error) {
        console.log(error);
    });