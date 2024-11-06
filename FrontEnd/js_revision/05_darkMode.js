console.log("New Application");
let primaryColor = "#83a0bf";
let todoItems = document.querySelectorAll(".todo-item");
// console.log(todoItems) ✅
// let colorButton = document.querySelector(".colorButton");
// console.log(colorButton);

// colorButton.addEventListener("click", () => {
//   let colorPicker = document.querySelector("#colorPicker");
//   console.log(colorPicker.value);
//   primaryColor = colorPicker.value;
// });

for (let index = 0; index < todoItems.length; index++) {
  let element = todoItems[index];
  // console.log(element) ✅

  element.addEventListener("click", () => {
    // console.log("element is clicked"); ✅
    element.style.backgroundColor = primaryColor;
    element.style.border = "2px solid white";

    console.log(element.children);
    element.children[1].style.textDecoration = "line-through";
    element.children[0].checked = true;
  });
}
//

let theme1Button = document.querySelector("#theme1");
theme1Button.addEventListener("click", () => {
  let theme1 = {
    background: "#cad2c5",
    textColor: "#333333",
    boxColor: "#354f52",
    boxActiveColor: "#84a98c",
  };
  //   background
  let container = document.querySelector(".container");
  container.style.backgroundColor = theme1.background;
  container.style.color = theme1.textColor;
  let nav = document.querySelector(".nav");
  nav.style.backgroundColor = theme1.background
  let todoItem = document.querySelectorAll(".todo-item");
  todoItem.forEach((item) => {
    item.style.backgroundColor = theme1.boxColor;
    item.style.color = theme1.background;
  });
  primaryColor = theme1.boxActiveColor
  // todoItem.style.backgroundColor = theme1.boxColor;
});
