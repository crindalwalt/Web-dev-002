console.log("welcome to swtich in JS");

/**
 * Switch is also a conditional which decides on the value of the expression
 *
 *
 *
 */

// let passwordInDB = "Pakistan123";

// let userPassword = prompt("Enter your password");

// let age = parseInt(prompt("Enter your age"));
let name = prompt("Enter your name for US visa");

switch (name) {
  case "Shahzad":
    console.log("you can go");
    break;
  case "Usama":
    console.log("Not allowed");
    break;
  case "Khumaini":
    console.log("Definatly not allowed");
    break;
  default:
    console.log("invalid choice");
    break;
}
