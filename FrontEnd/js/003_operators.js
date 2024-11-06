/**
 * ? Operators
 * Operator has the following types in js
 * - Arithmatic operators (+,-,*,/,%)
 * - camparison operators (<,>,>=,<=,==,===)
 * - Assignment operators (=,+=,-=,*=,/=)
 * - Logical Operators (and &&,or || , not !)
 *
 * * == only checks the value not the datatype
 * * === check the value and datatypes as well
 */

// Arithmatic Operators (+,-,*,/,%)
let num1 = 23;
let num2 = 54;
let num3 = 5;
let num4 = 2;

let result = num3 + num4;
result = num3 - num4;
result = num3 * num4;
result = num3 / num4;
result = num3 % num4;
console.log(result);

// camparison operator
let condition = num1 < num2;
condition = num2 > num1;
condition = num3 >= num1;
condition = num4 >= (num1 - 24);
let age = "25";
let maliciousCode = "a;lsdkfja;sdlkfja;sldkfja;sdlfkj";
let yearsToLive = 25;
console.log(age === yearsToLive);

 

// Assignment operator 
let phone = "Oneplus";
phone = "Blackberry";
let Revenue = 120;
console.log(Revenue);
Revenue = 120 + 20;
console.log(Revenue);
Revenue = Revenue + 50;
console.log(Revenue);
Revenue += 20;
console.log(Revenue);
Revenue -= 200;
console.log(Revenue);
Revenue *= 200;
console.log(Revenue);
Revenue /= 20;
console.log(Revenue);


// Logical Operator
let isNamazi = true;
let isEmani = true;
let isKhalafti = true;
let isJannati = isKhalafti || isEmani;
console.log(isJannati);


let condition1 = (1 >= (2-1)) && (true == false);
console.log(!condition1);
