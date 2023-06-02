let currentStep: string;
const startBtn = document.querySelector("#start-btn") as HTMLButtonElement;
startBtn.addEventListener("click", () => {
    currentStep = "q1";
    console.log(currentStep);
})