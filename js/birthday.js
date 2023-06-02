"use strict";
let currentStep;
const startBtn = document.querySelector("#start-btn");
startBtn.addEventListener("click", () => {
    currentStep = "q1";
    console.log(currentStep);
});
