"use strict";

const elTitle = document.querySelector("#title");
const elForm = document.querySelector("#form");
const elInput = document.querySelector("#input");
const elButton = document.querySelector("#button");
const dots = document.querySelector(".dots");
const elText = document.querySelector(".text");
const elDesc = document.querySelector(".desc");

elForm.addEventListener("submit", (e) => {
  e.preventDefault();
  elText.textContent = "";

  if (
    elInput.value == "" ||
    elInput.value == null ||
    elInput.value == undefined ||
    elInput.value == isNaN
  ) {
    elText.textContent = "Xato! Son kiriting";
    elDesc.style.cssText = "display: none;";
    elText.style.cssText = "display: block;";
    dots.style.cssText = "display: none;";
  } else if (elInput.value == 0) {
    dots.style.cssText = "display: block";
    elText.style.cssText = "display: none;";
    elDesc.style.cssText = "display: none;";
  } else if (elInput.value % 2 === 0) {
    elText.textContent = "Juft son";
    elDesc.style.cssText = "display: block;";
    elText.style.cssText = "display: block;";
    dots.style.cssText = "display: none;";
  } else if (elInput.value % 2 !== 0) {
    elText.textContent = "Toq son";
    elDesc.style.cssText = "display: block;";
    elText.style.cssText = "display: block;";
    dots.style.cssText = "display: none;";
  }
});

elDesc.textContent = "";

elButton.addEventListener("click", () => {
  let result = false;
  elDesc.textContent = "";
  for (let i = 2; i < elInput.value; i++) {
    if (elInput.value % i == 0) {
      result = true;
    }
  }

  if (result == false) {
    elDesc.textContent = "tub son";
  }
});
