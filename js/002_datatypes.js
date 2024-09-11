console.log("Hello from the datatypes page");

/**
 * Type of data you can store in a variable is called dataype
 * js is not a type safe language (you dont have to explicitly define the datatype)
 * JS is a case-sensitive language
 * JS supported the following datatypes
 * - Number (float,double,integer)
 * - String (char, string)
 * - array (list)
 * - object (map,dictionary)
 * - bool (true and false)
 * JS preffered the camel casing
 * Arrays in JS can be homo or hetrogenous
 */

// boolean
let isMarried = false;
let isBrillient = true;

// Integer

let age = 23;
const PI = 3.1415;
let pi = 3.43432;
console.log("Value of age is " + age);
console.log("Value of PI is " + PI);
console.log("Value of PI is " + pi);

// String
let nam = "Shahzad Farooq"; //  i used double quotations
let initial = "SF6";
let favouritePlayer = `Sergio Ramos SR4`; // camel case
let date_of_birth = "Oct 18 2003"; // snake case
let FavouritePlayer = "Cristiano Ronaldo"; // Pascal case
console.log(nam, initial, favouritePlayer);

// Arrays

let friendsName = [
  "Zaid",
  "Muhtshim",
  "Ali Imran",
  "Safdar",
  "Tanvir",
  6,
  true,
  [1, 2, 3],
];
// console.log(friendsName[7]);

// Object
let myDetails = {
  name: "Shahzad Farooq",
  email: "shahzad@shahzadfarooq.com",
  age: 21,
  friendsList: ["Zaid", "Muhtshim"],
};

console.log(myDetails.friendsList);
// JSON = JavaScript Object Notation

let myJson = {
  "name": "Shahzad",
  "age": 18,
  "friendsList": ["Zaid", "Muhtshim"],
};
