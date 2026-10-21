//Fetch API is a JavaScript feature used to request data from a server and receive its response.

/*fetch("https://jsonplaceholder.typicode.com/users/1")
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data);
    })
    .catch(function(error) {
        console.log(error);
    });

 //get data 
    fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => response.json())
  .then(json => console.log(json))*/


  fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then(response => response.json())
  .then(json => console.log(json))