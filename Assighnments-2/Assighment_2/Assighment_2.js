console.log("#".repeat(30));
console.log(
  "%cDOM_Document_Object_Model|Chalenges|Assighnments",
  "color: #ff3377; font-size: 20px; font-weight: bold"
);
console.log("#".repeat(30));

// Assighment_2

console.log("#".repeat(30));
console.log(
  "%cDOM_Document_Object_Model|Assighnment_2",
  "color: #09b757ff; font-size: 13px; font-weight: bold"
);
console.log("#".repeat(30));

let myCurrentElement = document.getElementsByClassName("current element")[0];
let myInputAdd = document.getElementsByClassName("add")[0];
let myInputRemove = document.getElementsByClassName("remove")[0];
let myClassContainer = document.getElementsByClassName("list")[0];
let myEleShowClass = document.getElementsByClassName("showClass")[0];
let myListOfClass = myCurrentElement.classList;

let myNote = document.createElement("p");
let myNoteText = document.createTextNode("No Classes To Show");
myNote.appendChild(myNoteText);
myNote.className = "note";
myEleShowClass.appendChild(myNote);

myInputAdd.onfocus = function () {
  myInputRemove.value = "";
};
myInputRemove.onfocus = function () {
  myInputAdd.value = "";
};

myCurrentElement.onclick = function () {
  // To Add Class
  for (let i = 0; i < myInputAdd.value.split(" ").length; i++) {
    let AddnewValue = myInputAdd.value.split(" ")[i].toLowerCase();
    if (myInputAdd.value === "") {
      AddnewValue;
      break;
    }

    myNote.style.display = "none";

    if (myListOfClass.contains(`${AddnewValue}`) === false) {
      if (AddnewValue !== "") {
        myListOfClass.add(AddnewValue);

        let newClass = document.createElement("div");
        let newClassText = document.createTextNode(AddnewValue);

        newClass.appendChild(newClassText);
        newClass.className = `kid ${AddnewValue}`;
        myClassContainer.appendChild(newClass);
      }
    } else {
      console.log(`this class ${AddnewValue} is already exsist`);
    }
  }

  // To Remove Class
  for (let y = 0; y < myInputRemove.value.split(" ").length; y++) {
    let removeNewValue = myInputRemove.value.split(" ")[y].toLowerCase();

    if (myListOfClass.contains(`${removeNewValue}`) === true) {
      myListOfClass.remove(removeNewValue);
      for (x = 0; x < myClassContainer.children.length; x++) {
        if (myClassContainer.children[x].innerHTML === removeNewValue)
          myClassContainer.children[x].remove();
      }
    }
  }

  if (myClassContainer.children.length === 0) {
    myNote.style.display = "block";
  }
};

console.log(myClassContainer.children.length);
