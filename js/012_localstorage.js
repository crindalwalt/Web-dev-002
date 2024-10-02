console.log("wellcome to the localstorage");


let createNote = ()=>{
    console.log("note has been added");

    let noteElement = document.querySelector("#note").value;
    console.log( noteElement);

    let priorityElement = document.querySelector("#priority").value;
    console.log(priorityElement);
    let timeNow = new Date();
    let noteObj = {
        note : noteElement,
        priority: priorityElement,
        createdAt : timeNow,
    }
    console.log(noteObj);
}





// grabbing elements
let submitNoteButton  = document.querySelector("#submitNote");


// event listeners
submitNoteButton.addEventListener("click",createNote);