/**
 * Function are the block of code that can be reused
 * consist of two parts
 *      definition
 *      call
 * It is made 2 way
 *      common js
 *      arrow function
 */




// common js function
// function definition
function greet(){
    // alert("Hy there,Good Morning");
}

// arrow function
let sayGreetings = (name,designation="King of our Heart")=>{
 
    console.log(`Hy ${name} have a good day,we are blessed to have you as our ${designation}`);
}




let getPercentage = (obtain, total)=>{
    let result  = (obtain/total)*100;
    return result;
}

// function call
// greet()


sayGreetings("Yahya","President");
sayGreetings("Yahya");

let myPercentage = getPercentage(1001,1100);
// alert(myPercentage)

let personName = "Muzamil";
let designation = "Kuch ni";
sayGreetings(personName,designation);


class Car {
    name = "Mustang";
    sound = ()=>{
        console.log("VROOM VROOM");
    } 
}

let date = new Date();
let Mustang = new Car();
Mustang.sound();
console.log(Mustang.name);



