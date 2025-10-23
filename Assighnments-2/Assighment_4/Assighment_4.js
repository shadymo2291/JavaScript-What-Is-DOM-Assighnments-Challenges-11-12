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

let myDiv = document.getElementsByTagName("div")[0];
let myWord = myDiv.childNodes[4].data.trim();

myDiv.innerHTML = myWord;

console.log(myDiv.innerHTML);
