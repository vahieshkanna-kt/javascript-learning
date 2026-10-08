//function declaration

/*function data(a, b){
    console.log(a+b)

}
data(5,6)



//default value
function data(a = 24, b=45){
    console.log(a+b)

}
data(35 ,77)

//return 
function operation(a, b){
   c= a+b;
   return c;

}
 console.log(operation(30,20));

//arrow function
 let x5=(a)=> 5*a;
 console.log(x5(8));

 
 //practice
 function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

console.log("Addition:", add(10, 5));
console.log("Subtraction:", subtract(10, 5));
console.log("Multiplication:", multiply(10, 5));

//closure inner outer
function outer() {
    let count = 0;

    function inner() {
        count++;
        console.log(count);
    }

    return inner;
}

const result = outer();

result();
result();
result();


//Higher order function
//A function can receive another function or return another function
function message(name, callback) {

    console.log("Hello " + name);

    callback();
}

function welcome() {
    console.log("Welcome to JavaScript");
}

message("ragav", welcome);

//map ,filter ,reduce

//map() creates a new array by performing an operation on every element

let numbers = [1, 2, 3, 4, 5];

let result = numbers.map(function(num) {
    return num * 2;
});

console.log(result);

//filter() creates a new array containing only elements that satisfy a condition

let marks = [35, 80, 45, 90, 25];

let passed = marks.filter(mark => mark >= 50);

console.log(passed);*/

//reduce() combines all array elements into a single value

let cart = [500, 200, 300];

let total = cart.reduce((sum, price) => sum + price, 0);

console.log("Total bill:", total);