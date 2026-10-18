//JSON - javascript object notation
//JSON is a format used to store and exchange data
/*{
  "name": "Vahiesh",
  "age": 20,
  "course": "B.Tech IT"
}  


//normal data
let student = {
    name: "Vahiesh",
    age: 20 
};
//stringify - We can convert the object into JSON text using
console.log(JSON.stringify(student));

//parse
let jsonData = '{"name":"Vahiesh","age":20}';
// parse - We can convert it back into a JavaScript object:
let students = JSON.parse(jsonData);

console.log(students.name);

//Browser Storage
//Sometimes we want a website to remember information in the browser.*/

//localStorage
//localStorage stores data in the browser.
localStorage.setItem("name", "Vahiesh");

//get value
let data = localStorage.getItem("name");

console.log(data);

//To remove one item:
localStorage.removeItem("name");

//To remove everything stored by your website:
localStorage.clear();

//We cannot directly store the object in the correct form
//We use JSON.stringify():
localStorage.setItem(
    "student",
    JSON.stringify(student)
);

//sessionStorage - sessionStorage works similarly to localStorage
sessionStorage.setItem("name", "Vahiesh");

let name = sessionStorage.getItem("name");

console.log(name);


