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

let myImages = document.images;

for (let i = 0; i < document.images.length; i++) {
  myImages[i].alt = "Elzero Logo";
  myImages[i].src = "https://elzero.org/wp-content/themes/elzero/imgs/logo.png";
}

