const nameForm = document.querySelector("#nameForm");
const userInput = document.querySelector("#userInput");
const errorMessage = document.querySelector("#errorMessage");

nameForm.addEventListener("submit", (event) => {
    event.preventDefault();

    if (userInput.value.trim() === "") {
        errorMessage.textContent = "This field cannot be empty";
        return;
    }

    errorMessage.textContent = "";
    userInput.value = "";
});