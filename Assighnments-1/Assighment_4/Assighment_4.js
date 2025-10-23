console.log("#".repeat(30));
console.log(
  "%cDOM_Document_Object_Model|Chalenges|Assighnments",
  "color: #ff3377; font-size: 20px; font-weight: bold"
);
console.log("#".repeat(30));

// Assighment_3

console.log("#".repeat(30));
console.log(
  "%cDOM_Document_Object_Model|Assighnment_4",
  "color: #09b757ff; font-size: 13px; font-weight: bold"
);
console.log("#".repeat(30));

let divOne = document.getElementsByClassName("one")[0];
let divTwo = document.getElementsByClassName("two")[0];

let divOneText = divOne.innerHTML;
let divTwoText = divTwo.innerHTML;

divOne.innerHTML = divTwoText;

divOne.title = divOne.className;

divTwo.innerHTML = divOneText + " " + divTwo.attributes.length;

divTwo.title = divTwo.className;

console.log(divOne.className);
console.log(divOne.innerHTML);
console.log(divOne.title);

console.log("-------------------");

console.log(divTwo.className);
console.log(divTwo.title);
console.log(divTwo.innerHTML);

console.log("-------------------");

console.log(divOne);
console.log(divTwo);
