//Export

//math.js
export function add(a, b) {
    return a + b;
}

export function subtract(a, b) {
    return a - b;
}


//app.js
import { add, subtract } from "./math.js";

console.log(add(10, 5));
console.log(subtract(10, 5));
//The { } tells JavaScript which named exports you want.



//Default export
//You can also have one default export.
//With a default export, we don't need { }.

//message.js
export default function greet() {
    console.log("Hello Vahiesh");
}

//app.js
import greet from "./message.js";

greet();