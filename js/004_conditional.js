console.log("Hello from the Conditional");
/**
 * ? the structures which help you to decide are conditionals
 * two types of conditionals
 * if-else conditional
 * switch  conditional
 *
 * Condition is something that resolves into true or false
 * else if are there to extend your if-else ladder
 *
 *
 *
 *
 *
 */
// syntax
// if(condition){
//     // code if condition is true
// }else{
//     // code if condition is false
// }

// let age = 18;

// if (age >= 18 && age < 80) {
//   //   console.log("you are eligible for the driving license");
//   if(age == 18){
//     alert("happy birthyear");
//   }
//   alert("you are eligible for the driving license");
// } else if (age < 18 && age > 1) {
//   alert(
//     "You are too young to have a driving license. come back when you are 18 or older"
//   );
// } else if (age >= 80) {
//   alert(
//     "Crash at your place , have some rest oldie!, you should not drive and you are not eligible also"
//   );
// } else {
//   alert("Invalid choice");
// }

// let passwordInDB = "Pakistan123";



// let name = prompt("Enter your name","e.g John Doe");
// let boolVal = confirm("Are you sure, you want to delete this file");

// console.log(boolVal);
// if(boolVal){
//     alert("file is deleted");
// }else{
//     alert("you cancelled the deletion");
// }
/**
 * "12"
 * 12
 * 
 */

// alert("hy " + name + " you look wonderful today ");


// writing a alcohol checking program;


// user inputs
let userName = prompt("Tell us your name");
let userAge =  parseInt(
    prompt("Enter your age","e.g 22")
);


if(userAge <= 21){
    //not allowed\
    alert(userName + "! You not not legally suppose to drink");
}else if(userAge == 22 || userAge > 22){
    //allowed
    alert(userName + "! You can drink");
}else{
    // invalid
    alert("Invalid choice");
}


//! Write a program which take user numbers in a subject as an input and calculate the persentage and determine whether he/she is admitable in the school or not and which section

// => Inputs

// user name
// user nat marks


// => given
// total marks for nat 250
// A-F sections


// => check
// check if he/she passes or not
// if passed which section she/he will be
// if failed then show a motivating message to try again
