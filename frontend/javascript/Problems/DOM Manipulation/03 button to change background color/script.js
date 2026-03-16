const colorButton = document.querySelector("#colorButton");
const colorValue = document.querySelector("#colorValue");

function getRandomNumber() {
    return Math.floor(Math.random() * 256);
}

function getRandomColor() {
    const red = getRandomNumber();
    const green = getRandomNumber();
    const blue = getRandomNumber();

    return `rgb(${red}, ${green}, ${blue})`;
}

colorButton.addEventListener("click", () => {
    const randomColor = getRandomColor();

    document.body.style.backgroundColor = randomColor;
    colorValue.textContent = `Current color: ${randomColor}`;
});