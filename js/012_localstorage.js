console.log("wellcome to the localstorage");
let noteArray = [];

let handleNote = () => {
    // grabbing elements
  let noteElement = document.querySelector("#note").value;
  let priorityElement = document.querySelector("#priority").value;
  let timeNow = new Date();
  // creating an object
  let noteObj = {
    note: noteElement,
    priority: priorityElement,
    createdAt: timeNow,
  };
  // pushing object to an array
  noteArray.push(noteObj);
  // convert array to string for saving in localStoage
  let arrayStringified = JSON.stringify(noteArray);
  // saving that stringified array in localStorage
  localStorage.setItem("notes", arrayStringified);
};

// grabbing elements
let submitNoteButton = document.querySelector("#submitNote");

// event listeners
submitNoteButton.addEventListener("click", handleNote);
