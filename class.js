/*let car={
    name:'bmw',
    price:2333333

}*/


class car{
     name = 'bmw';
    price = 2333333;

    //constructor
display()
{
    console.log('Name:', this.name);
    console.log('Price:', this.price);
    return true;
}
}

let bmw = new car();
console.log(bmw.display());