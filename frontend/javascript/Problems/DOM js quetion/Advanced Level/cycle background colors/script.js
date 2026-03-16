const colorBtn = document.querySelector("#colorBtn");
const colorBox = document.querySelector("#colorBox");

const colors = ["lightcoral", "lightseagreen", "lightskyblue"];
let index = 0;

colorBtn.addEventListener("click", () => {
    colorBox.style.backgroundColor = colors[index];
    index = (index + 1) % colors.length;
});
