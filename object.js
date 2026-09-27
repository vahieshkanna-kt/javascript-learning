let student={
     name:"vahi",
    rollno:123446,
     dept:'cse',
     "college name":'info',
      number:33,
 //function     
     Address(number){
        return number+5
     }
};

console.log(student.Address(55));


//delete
delete student.name;


//add
student['age']=20

student.regno=123456789

console.log(student);

//in operator
let student={
     name:"vahi",
    rollno:123446,
     dept:'cse'
};


console.log('name' in student);