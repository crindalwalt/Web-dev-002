console.log("Hello from the DOM manuplation page");

/**
    DOM manuplation 
        how to grab an element
        JS style Object
        event listeners
        displaying data dynamically
        news project website


    ? three ways to grab an element
    id
    class
    tag name

*/



// Grabbing element by ID
let mainButton =  document.getElementById("mainbtn");
mainButton.innerHTML = "<s>I am a gun</s>";

console.log(mainButton);



// Grabbin element by className

// let randomButton = document.getElementsByClassName("random");
// console.log(randomButton[0].innerHTML = "Salman");

// Grabbing element by tag name

let buttonByTag = document.getElementsByTagName("button");
console.log("Button by tag name is " , buttonByTag);
let dosraButton = buttonByTag[1];
dosraButton.style.border = "3px solid red";


// JS style Object
mainButton.style.backgroundColor  = "#83a0bf";
mainButton.style.border = "none";
mainButton.style.padding = "1rem 2rem";
mainButton.style.color = "White";
mainButton.style.fontWeight = "bolder";
mainButton.style.borderRadius = "1rem";




// JS querySelectors
let button = document.querySelector(".random");
console.log(button.innerHTML = "hello");

let qsAll  = document.querySelectorAll("button");
console.log(qsAll);

