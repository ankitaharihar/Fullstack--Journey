const taskList = document.querySelector("#taskList");

taskList.addEventListener("click", (event) => {
    if (!event.target.classList.contains("removeButton")) {
        return;
    }

    event.target.closest("li").remove();
});