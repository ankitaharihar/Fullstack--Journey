const addContentButton = document.querySelector("#addContentButton");
const contentArea = document.querySelector("#contentArea");

let contentCount = 1;

addContentButton.addEventListener("click", () => {
    contentArea.insertAdjacentHTML(
        "beforeend",
        `<div class="content-card"><p>New Content Added! ${contentCount}</p></div>`
    );

    contentCount += 1;
});