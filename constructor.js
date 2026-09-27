
//let a={
  //  name :'java'
//}

//new operator
function User(a){
    this.name = a
}

let java = new User('java');
let python = new User('python');

console.log(java,python)



function User(){
    this.name = 'java';
    this.age=function(){
        return 34;
    }
}

let data = new User();


console.log(data.age());