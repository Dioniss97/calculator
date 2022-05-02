let buttons = document.querySelectorAll(".button");
let display = document.querySelector(".display");

buttons.forEach(button => {
    button.addEventListener("click", () => {
    display.innerHTML += buttons.dataset.number;
    });
});