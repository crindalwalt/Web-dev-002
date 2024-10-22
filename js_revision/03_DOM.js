console.log("DOM manuplation");

// console.log()


// let btn = document.getElementById("num");
// btn.style.backgroundColor = "purple";
// btn.style.padding = ".8rem 1.2rem";
// btn.style.color = "white";
// btn.style.fontWeight = "bold";
// btn.style.border = "none";
// btn.style.borderRadius = "1rem";
// btn.style.margin = "1rem";
// console.log(btn);




// let grayedElement = document.getElementsByClassName("bg-gray")[1];
// grayedElement.style.border = "3px solid red";


let element = document.querySelector("#num");
console.log(element);
let kalaPelaButton = ()=>{
    element.style.backgroundColor = "salmon";
    element.style.padding = ".8rem 1.2rem";
    element.style.color = "white";
    element.style.fontWeight = "bold";
    element.style.border = "none";
    element.style.borderRadius = "1rem";
    element.style.margin = "1rem";
}


element.addEventListener("keydown",kalaPelaButton)

let music = new Audio("../assets/shot.m4a");

let keyElem = document.querySelector("#textarea");
console.log(keyElem);
keyElem.addEventListener("keydown",(e)=>{
    console.log(e)
    if(e.shiftKey == true){
        console.log("Shift is pressed");
        music.play()
        kalaPelaButton();
    }
console.log("keyis pressed" + e.key);
})
