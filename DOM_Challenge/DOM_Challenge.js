console.log("#".repeat(30));
console.log(
  "%cDOM_Document_Object_Model|Chalenges",
  "color: #ff3377; font-size: 20px; font-weight: bold"
);
console.log("#".repeat(30));

// Create The Header:

let myHeader = document.createElement("header");
document.body.appendChild(myHeader);

let logoName = document.createElement("h1");
let logoNameText = document.createTextNode("ELzero");
logoName.appendChild(logoNameText);
myHeader.append(logoName);
logoName.style.cssText =
  "box-sizing: border-box; font-size: 25px;color: #009688; font-family: sans-serif; margin:0";

let mylist = document.createElement("ul");
myHeader.appendChild(mylist);

let eachLi = "";
let eachA = "";

for (let i = 0; i < 4; i++) {
  eachLi = document.createElement("li");
  eachA = document.createElement("a");
  eachA.style.cssText = "cursor: pointer; color: #8a8a8aff";
  eachA.className = "li";
  eachLi.appendChild(eachA);
  mylist.appendChild(eachLi);
}

document.getElementsByClassName("li")[0].innerHTML = "Home";
document.getElementsByClassName("li")[1].innerHTML = "About";
document.getElementsByClassName("li")[2].innerHTML = "Services";
document.getElementsByClassName("li")[3].innerHTML = "Contact";

mylist.style.cssText =
  "box-sizing: border-box; display: flex; gap: 10px; list-style: none; padding: 0; font-size: 12px;";
myHeader.style.cssText =
  "box-sizing: border-box; font-family: sans-serif; display: flex; align-items: center; justify-content: space-between; margin: 0 15px";

// ----------------------------------------------------

// Create The Main Content

let myContainer = document.createElement("div");
myContainer.className = "container";
document.body.appendChild(myContainer);

document.body.style.cssText =
  "box-sizing: border-box; height: 100vh; display: grid; grid-template-rows: 10% 80% 10%; margin: 0; padding: 0";

let myProduct = "";
let productNumber = "";
let productDescripton = "";

for (let y = 1; y <= 15; y++) {
  myProduct = document.createElement("div");
  myProduct.className = "product";
  myProduct.style.cssText =
    "box-sizing: border-box; background-color: #fff; padding: 10px; margin: 0; border-radius: 5px; display: flex; flex-direction: column; justify-content: center;";

  productNumber = document.createElement("p");
  productNumber.innerHTML = `${y}`;
  productNumber.className = "number";
  productNumber.style.cssText =
    "box-sizing: border-box; font-size: 20px; font-weight: bold;padding: 0; margin: 0;";
  myProduct.appendChild(productNumber);

  productDescripton = document.createElement("p");
  productDescripton.innerHTML = `Product`;
  productDescripton.className = "des";
  myProduct.appendChild(productDescripton);
  productDescripton.style.cssText =
    "box-sizing: border-box; font-size: 10px; color: #8a8a8aff; padding: 0; margin: 0;";

  myContainer.appendChild(myProduct);
}

myContainer.style.cssText =
  "box-sizing: border-box; height: 100%; background-color: #eee; padding: 15px; text-align: center; display: grid; grid-template-columns: repeat(3, 1fr); gap: 15px; ";

console.log(document.querySelectorAll(".number").length);

// ----------------------------------------------------

// Create The Footer Content

let myFooter = document.createElement("footer");
let myFooterText = document.createTextNode("Copyright 2025");
myFooter.appendChild(myFooterText);

document.body.appendChild(myFooter);

myFooter.style.cssText =
  "display: flex; font-family: sans-serif; box-sizing: border-box; justify-content: center; align-items: center; background-color: #009688; color: #fff; font-size: 20px; font-weight: bold;";
