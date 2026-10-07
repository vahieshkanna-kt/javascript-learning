//function declaration

function data(a, b){
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