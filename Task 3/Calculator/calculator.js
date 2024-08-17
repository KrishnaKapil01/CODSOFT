
document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".btn");
    const display = document.getElementById("display");
    let currentInput = "";
    let previousInput = "";
    let operator = null;

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            const value = this.getAttribute("data-value");

            if (value === "C") {
                currentInput = "";
                previousInput = "";
                operator = null;
                display.textContent = "0";
            } else if (value === "=") {
                if (currentInput !== "" && previousInput !== "") {
                    currentInput = eval(`${previousInput} ${operator} ${currentInput}`);
                    display.textContent = currentInput;
                    previousInput = "";
                    operator = null;
                }
            } else if (["+", "-", "*", "/"].includes(value)) {
                if (currentInput !== "") {
                    if (previousInput === "") {
                        previousInput = currentInput;
                    } else {
                        previousInput = eval(`${previousInput} ${operator} ${currentInput}`);
                        display.textContent = previousInput;
                    }
                    currentInput = "";
                    operator = value;
                }
            } else {
                currentInput += value;
                display.textContent = currentInput;
            }
        });
    });
});
