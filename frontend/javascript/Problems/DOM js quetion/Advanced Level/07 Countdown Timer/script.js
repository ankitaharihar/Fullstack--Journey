const startValue = document.querySelector("#startValue");
const startBtn = document.querySelector("#startBtn");
const countdownDisplay = document.querySelector("#countdownDisplay");

let timerId = null;

startBtn.addEventListener("click", () => {
    let count = Number(startValue.value);

    if (!Number.isInteger(count) || count < 0) {
        return;
    }

    countdownDisplay.textContent = count;

    if (timerId !== null) {
        clearInterval(timerId);
    }

    timerId = setInterval(() => {
        count--;
        countdownDisplay.textContent = count;

        if (count <= 0) {
            clearInterval(timerId);
            timerId = null;
        }
    }, 1000);
});
