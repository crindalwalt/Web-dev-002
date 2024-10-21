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

let generateRandomNumber = ()=>{
    let randomNumber =Math.ceil(Math.random() * 100);
    console.log(randomNumber)
    localStorage.setItem("number",randomNumber);

}
let number = localStorage.getItem("number");
console.log(number)
let userInput = parseInt(prompt("Guess the number"));
if(userInput >  number){
    alert("lower");
}else{
    alert("higher")
}







let numberBtn = document.querySelector("#num");
numberBtn.addEventListener("click",generateRandomNumber)
// console.log(numberBtn);