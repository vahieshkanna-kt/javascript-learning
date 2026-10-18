//JavaScript Promises
/*A Promise is an object in JavaScript that represents the eventual result of an asynchronous operation.
Pending = Waiting.
Fulfilled = Success.
Rejected = Failure.*/

/*let myPromise = new Promise(function(resolve, reject) {

    resolve("Order successful!");

});

console.log(myPromise);

//then()
//then() is used to handle a successful Promise result.
let myPromise = new Promise(function(resolve, reject) {

    resolve("Data received successfully");

});

myPromise.then(function(result) {

    console.log(result);

});

//catch()
//catch() is used to handle a rejected Promise.
let myPromise = new Promise(function(resolve, reject) {

    reject("Something went wrong");

});

myPromise.catch(function(error) {

    console.log(error);

});

//finally
//finally() runs when the Promise settles, whether it succeeds or fails
let myPromise = new Promise(function(resolve, reject) {

    resolve("Task completed");

});

myPromise
    .then(function(result) {
        console.log(result);
    })
    .catch(function(error) {
        console.log(error);
    })
    .finally(function() {
        console.log("Process finished");
    });

    //Example

    let myPromise = new Promise(function(resolve, reject) {

    let age = 20;

    if (age >= 18) {

        resolve("Eligible");

    } else {

        reject("Not Eligible");

    }

});

myPromise
    .then(function(result) {

        console.log(result);

    })
    .catch(function(error) {

        console.log(error);

    });*/

//async 
//The async keyword is used before a function.
async function greet() {
    return "Hello Vahiesh";
}

greet().then(function(result) {
    console.log(result);
});

//await
//The await keyword waits for a Promise to settle and gives you its result.
//It can be used inside an async function.

async function getData() {
    let result = await Promise.resolve("Data received");

    console.log(result);
}

getData();

//Error handling with try/catch
//Sometimes a Promise may fail. We can handle that using try and catch.
async function getResult() {
    try {
        let result = await Promise.reject("Something went wrong");

        console.log(result);
    } 
    catch (error) {
        console.log(error);
    }
}

getResult();

//real world example
function getStudent() {
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve("Student name: Vahiesh");
        }, 2000);
    });
}

async function displayStudent() {
    console.log("Loading...");

    let result = await getStudent();

    console.log(result);
}

displayStudent();


