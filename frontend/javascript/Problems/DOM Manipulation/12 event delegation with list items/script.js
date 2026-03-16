const addItemButton = document.querySelector("#addItemButton");
const itemList = document.querySelector("#itemList");
const logOutput = document.querySelector("#logOutput");

let itemCount = 4;

itemList.addEventListener("click", (event) => {
    if (event.target.tagName !== "LI") {
        return;
    }

    const clickedText = event.target.textContent;

    console.log(clickedText);
    logOutput.textContent = `Clicked item: ${clickedText}`;
});

addItemButton.addEventListener("click", () => {
    const listItem = document.createElement("li");

    listItem.textContent = `New Item ${itemCount}`;
    itemList.appendChild(listItem);
    itemCount += 1;
});