console.log("Date and Time Object in JS");

let dateObj = new Date();

let year = dateObj.getFullYear();
let date = dateObj.getDate();
let day = dateObj.getDay();
let hour = dateObj.getHours();
let minutes = dateObj.getMinutes();
let seconds = dateObj.getSeconds();
let miliseconds = dateObj.getMilliseconds();
console.log(`Time now ${hour}:${minutes}: ${seconds} (${miliseconds})`);
let dayArray = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
// console.log(dayArray[day]);
let monthsArray = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let monthIndex = dateObj.getMonth();
console.log(monthsArray[monthIndex]);
console.log(dateObj.setUTCMonth());