console.log("#".repeat(30));
console.log(
  "%cDOM_Document_Object_Model|Chalenges|Assighnments",
  "color: #ff3377; font-size: 20px; font-weight: bold"
);
console.log("#".repeat(30));

// Assighment_3

console.log("#".repeat(30));
console.log(
  "%cDOM_Document_Object_Model|Assighnment_3",
  "color: #09b757ff; font-size: 13px; font-weight: bold"
);
console.log("#".repeat(30));

let myP = document.getElementsByTagName("p")[0];

myP.remove();

let myDiv = document.querySelector(".our-element");

let startDiv = document.createElement("div");

startDiv.className = "start";
startDiv.title = "Start Element";
startDiv.setAttribute("data-value", "Start");
startDiv.innerHTML = "Satrt";

let endtDiv = document.createElement("div");

endtDiv.className = "end";
endtDiv.title = "End Element";
endtDiv.setAttribute("data-value", "End");
endtDiv.innerHTML = "End";

myDiv.before(startDiv);
myDiv.after(endtDiv);
