let name = "Shahzad Farooq";
let student = "Ali";
// console.log(student);
student = "Laraib"

// console.log(student);


//datatypes
let nombre = "Ali Imran";
nombre = 23;
nombre = false;
nombre = ["This", "That"];
nombre = {
    name: "Raheel",
    age: 24,

}
let something;
nombre = NaN;
nombre = undefined;
// console.log(something);


let num1 = 23;
let num2 = 34;
let result = num1 + num2; // 57
result += result + num1 + num2; // 114 + 57
console.log(!(result > 34 || result < 170));


let isMarried = false;
console.log(!isMarried)


let randomNumber =Math.ceil(Math.random() * 100000);
console.log(randomNumber);
let userInput = parseInt(prompt("Guess the number"));
if(userInput > randomNumber){
    alert("lower");
}else{
    alert("higher")
}
console.log(randomNumber);