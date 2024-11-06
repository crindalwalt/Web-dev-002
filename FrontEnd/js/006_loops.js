console.log("Welcome to Loops page");

/**
 * JS Lopps are used to do repitative task over a controlled condition
 *
 * JS has the vast variety of Loops
 * For loop
 * While Lopp
 * do while loop
 * foreach loop
 * for in loop
 * for of lopp
 *
 * JS Loops are usually use to iterate over a array
 * Loops need 3 constraints to fun
 * ininitialzation (ak variable jo loop ko control krta hy)
 * condition (jab tak true rhy gi loop chaly gi , falsi hoi tu ruk jay gi)
 * updating (controlling variable ko update krna)
 *
 */

let condition = 12 < 24 && 23 == 34;

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

// let lenght = friendsList.length;
// console.log(lenght);

for (let index = 0; index < numbers.length; index++) {
  console.log(numbers[index]);
}

// for loop

let friendsList = [
  "Ali",
  "Asad",
  "Salman",
  "Laraib",
  "Fahad",
  "Saim",
  "Noor",
  "Dua",
  "Umaima",
];

// for(let a = 0; a < friendsList.length;a++){
//     let element = friendsList[a];
//     console.log(element);
// }

// let i = 0;
// while(i < friendsList.length){
//     let element = friendsList[i];
//     console.log(element);
//     i++;
// }

// do while loop

// let i = 0;
// do {
//   let element = friendsList[i];
//   console.log(element);
//   i++;
// } while (i > friendsList.length);

// ============================= PROGRAMS
// even or odd finder

// let num = parseInt(prompt("Enter a number"));

// let isEven = num % 2 == 0;
// if (isEven) {
//   alert(num + " is an even number");
// } else {
//   alert(num + " is an odd number");
// }



// table 
// 5 X 1 = 5
// 5 X 2 = 10
// 5 X 3 = 15
// 5 X 4 = 20
// 5 X 5 = 25


let tableOf = parseInt(prompt("Enter a number you want to generate a table of "));

let index = 1;
while(index <= 20){
    let multiply = index * tableOf;

    console.log(tableOf + " X " + index + " = " + multiply );
    index++;
}


