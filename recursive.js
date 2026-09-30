//recursive function
//base case
//update statement
//recursive call xdone

function factorial(n){
    if(n == 1){
        return 1;
    }
 return n + factorial(n-1);
}

console.log(factorial(5));


