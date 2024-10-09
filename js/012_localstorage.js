console.info("Js file is connected");
let getNotes = () => {
  let response = localStorage.getItem("reminders");
  let parsedResponse = JSON.parse(response);
  let container = document.querySelector("#notesHolder");
  console.log();
  let index = 0;
  while (index < parsedResponse.length){
    let element  = parsedResponse[index];
    // console.log("note " + index)
    let noteString = `
      <tr>
                <th scope="row">${Math.round(element.id)}</th>
                <td>${element.note}</td>
                <td>${element.priority}</td>
                <td>
                    <div class="d-flex">
                        <button class="btn btn-sm btn-outline-primary m-2">Edit</button>
                        <button class="btn btn-sm btn-outline-danger m-2">Delete</button>
                    </div>
                </td>
              </tr>
    `;
    container.innerHTML += noteString;

    index++;
  }
};
getNotes();
/**
 * 1: user se data lena hy
 * 2: create a data package (objTalha)
 * 3: create a storage  getNotes(); structure
 *
 *
 *
 *
 *
 *
 */

let notesCollection = JSON.parse(localStorage.getItem("reminders")) ?? [];

// function to display reminders

// function to take user input
let getUserInput = () => {
  let note = document.querySelector("#note").value;
  let priority = document.querySelector("#priority").value;
  let dateNow = new Date();
  let randomNumber = Math.random() * 10000;
  let noteObj = {
    id: randomNumber,
    note: note,
    priority: priority,
    date: dateNow,
  };
  notesCollection.push(noteObj);

  let arrayToStore = JSON.stringify(notesCollection);

  localStorage.setItem("reminders", arrayToStore);

  getNotes();

  console.log(notesCollection);
};

//  Grabbing DOM elements
let submitButton = document.querySelector("#submitNote");

// Event listeners
submitButton.addEventListener("click", getUserInput);
