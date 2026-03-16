const appendBtn = document.querySelector("#appendBtn");
const paragraphContainer = document.querySelector("#paragraphContainer");

let paragraphCount = 1;

appendBtn.addEventListener("click", () => {
    const newParagraph = document.createElement("p");
    newParagraph.textContent = `This is paragraph ${paragraphCount}`;
    paragraphContainer.appendChild(newParagraph);
    paragraphCount++;
});
