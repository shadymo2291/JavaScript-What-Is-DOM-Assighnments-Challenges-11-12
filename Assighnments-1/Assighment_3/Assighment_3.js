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

let myValue = document.querySelector("[type=number]");

let myResult = document.getElementsByClassName("result")[0];

myResult.innerHTML = `{<span class="US"></span>} USD Dollar = {<span class="EG"></span>} Egyptian Pound`;

let usValue = document.getElementsByClassName("US")[0];

let egValue = document.getElementsByClassName("EG")[0];

usValue.textContent = 0;

egValue.textContent = 0;

myValue.addEventListener("input", function () {
  usValue.textContent = myValue.value;
  egValue.textContent = (parseInt(myValue.value) * 15.6).toFixed(2);
  if (myValue.value === "" || egValue.textContent === NaN) {
    usValue.textContent = 0;
    egValue.textContent = 0;
  }
});
