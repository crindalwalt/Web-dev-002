console.log("Loops revision");

let friendsName = ["Saim", "Noor", "Zaid", "Muhtshim", "Amna", "Aaliyah"];
let marksArray = [75, 45, 99, 10];
let hetroArray = ["Saim", 75, true, [1, 2, 3]];

// console.log(friendsName[0]);
// console.log(friendsName[1]);
// console.log(friendsName[2]);
// console.log(friendsName[3]);

// for loop
// while loop
// do while loop
// foreach loop

// for(let index = 0;index < friendsName.length;index++){
//     console.log(friendsName[index])
// }

// let index = 0;
// while(index > friendsName.length){

//     console.log(friendsName[index]);
//     index++;
// }

// let index = 0;
// do {
//   console.log(friendsName[index]);
//   index++;
// } while (index < friendsName.length);


let todoItems = document.querySelectorAll(".todo-item");
// console.log(todoItems) ✅

for(let index = 0;index < todoItems.length;index++){
    let element  = todoItems[index];
    // console.log(element) ✅

    element.addEventListener("click",()=>{
        // console.log("element is clicked"); ✅
        element.style.backgroundColor = "salmon";
        element.style.border = "2px solid white";

        console.log(element.children)
        element.children[1].style.textDecoration = "line-through"
        element.children[0].checked = true;
    })

}
