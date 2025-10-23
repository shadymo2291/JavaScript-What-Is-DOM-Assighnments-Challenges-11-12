console.log("#".repeat(30));
console.log(
  "%cDOM_Document_Object_Model|Chalenges|Assighnments",
  "color: #ff3377; font-size: 20px; font-weight: bold"
);
console.log("#".repeat(30));

// Assighment_5

console.log("#".repeat(30));
console.log(
  "%cDOM_Document_Object_Model|Assighnment_5",
  "color: #09b757ff; font-size: 13px; font-weight: bold"
);
console.log("#".repeat(30));

let myImages = document.images;

for (let i = 0; i < myImages.length; i++) {
  if (myImages[i].hasAttribute("alt") === true) {
    myImages[i].alt = "Old";
  } else {
    myImages[i].alt = "Elzero New";
  }
  console.log(myImages[i].alt);
}
