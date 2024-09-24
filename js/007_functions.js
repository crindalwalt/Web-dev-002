console.log("Hy there from the funcitons page");

/*
Javascript functions are the block of code that is reuseable in nature or encapsulate a functionality
? two components
    function definition 
    function call
? topics
    parameters and args
    return 
*/

// Function definition
function greetTwoPeople(name1, name2) {
  alert(`Hello Mr. ${name1} and ${name2} Have a good day`);
}

function getPercentage(obtained, total = 60) {

    
  let percentage = (obtained / total) * 100;
  percentage = Math.round(percentage);
  return percentage;
  
}

let result = getPercentage(1001,1100);
console.log(`The result of the sum returned as ${result}`)

// Function Call
let myName = "Shahzad Farooq";
let yourName = "M Salman";
// greet(myName);
// greet(yourName);

// greetTwoPeople("Eman","Alex");

function sum(num1, num2) {
  let addition = num1 + num2;
  alert(addition);
}

// getting values from the user via prompt
// let number1 = parseInt(prompt("Enter number 1"));
// let number2 = parseInt(prompt("Enter number 2"));

// sum(number2,number1);


myName = "Shahzad Farooq";
yourName = "M Salman";
// greetTwoPeople(yourName,myName)


// custom program
function getDrivingLicense (nombre,age){
    if(age <= 17){
        return false;
    }else if(age >= 18 && age <= 60){
        return true;
    }else{
        return false;
    }
}
// let age = parseInt(prompt("Enter your age"));
// let name = prompt("Enter your Name");

// let resultt = getDrivingLicense(name, age);
// if(resultt){

//     alert(`you can drive Mr/Mrs/Ms ${name}`);
// }else{
//     alert(`you cannot drive Mr/Mrs/Ms ${name}`);

// }
/**
 * Write a even or odd program
 * write an prime number checking program
 * write a table printing program
 * write a calculator program which prompt you the calculation first then number of values and then values and print the result

 */

let operationType = parseInt(prompt("******* Pick an Opertation *****\n1) Addition\n2) Multiplication\n3) Subtraction\n4) Division\n Type your choice in 1-4"));