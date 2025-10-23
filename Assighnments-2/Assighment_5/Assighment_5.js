console.log("#".repeat(30));
console.log(
  "%cDOM_Document_Object_Model|Chalenges|Assighnments",
  "color: #ff3377; font-size: 20px; font-weight: bold"
);
console.log("#".repeat(30));

// Assighment_5

let myEle = document.body.children;

for (let i = 0; i < myEle.length; i++) {
  myEle[i].onclick = function () {
    console.log(`This is ${myEle[i].tagName.toLocaleLowerCase()}`);
  };
}
