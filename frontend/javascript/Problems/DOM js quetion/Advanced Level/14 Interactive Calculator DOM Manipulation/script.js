const display = document.querySelector("#display");
const keys = document.querySelectorAll(".key");
const clearBtn = document.querySelector("#clearBtn");
const equalBtn = document.querySelector("#equalBtn");

keys.forEach((button) => {
    button.addEventListener("click", () => {
        display.value += button.dataset.value;
    });
});

clearBtn.addEventListener("click", () => {
    display.value = "";
});

equalBtn.addEventListener("click", () => {
    if (display.value.trim() === "") {
        return;
    }

    try {
        const result = Function(`return ${display.value}`)();
        display.value = result;
    } catch (error) {
        display.value = "Error";
    }
});
