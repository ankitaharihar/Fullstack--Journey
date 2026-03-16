const message = document.querySelector("#message");
const updateButton = document.querySelector("#updateButton");

updateButton.addEventListener("click", () => {
    message.textContent = "Text Updated!";
});