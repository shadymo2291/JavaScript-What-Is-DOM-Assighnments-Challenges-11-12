console.log("#".repeat(30));
console.log(
  "%cDOM_Document_Object_Model|Chalenges|Assighnments",
  "color: #ff3377; font-size: 20px; font-weight: bold"
);
console.log("#".repeat(30));

// Assighment_6

console.log("#".repeat(30));
console.log(
  "%cDOM_Document_Object_Model|Assighnment_6",
  "color: #09b757ff; font-size: 13px; font-weight: bold"
);
console.log("#".repeat(30));

let iptNumber = document.querySelector("[type='number']");
let iptText = document.querySelector("[type='text']");
let iptSubmit = document.querySelector("[type='submit']");
let mySelect = document.querySelector("select");
let elementNumber = "";
let elementText = "";
let newEle = "";
let selection = "Div";

iptNumber.addEventListener("input", function () {
  elementNumber = iptNumber.value;
});

iptText.addEventListener("input", function () {
  elementText = iptText.value;
});

mySelect.onchange = function () {
  selection = mySelect.value;
};

let myContainer = document.querySelector(".results");

iptSubmit.onclick = function (e) {
  e.preventDefault();
  myContainer.innerHTML = "";

  let textValid = false;
  let numberValid = false;

  for (let i = 1; i <= elementNumber; i++) {
    if (selection === "Div") {
      newEle = document.createElement("div");
    } else {
      newEle = document.createElement("section");
    }

    newEle.className = "box";
    newEle.title = "Element";
    newEle.id = `id-${i}`;
    newEle.innerHTML = elementText;
    if (elementText !== "") {
      myContainer.appendChild(newEle);
    }
  }
};
