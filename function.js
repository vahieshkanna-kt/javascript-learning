//function

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