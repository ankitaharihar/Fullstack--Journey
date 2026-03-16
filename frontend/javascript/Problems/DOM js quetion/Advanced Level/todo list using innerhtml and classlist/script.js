const taskInput = document.querySelector("#taskInput");
const addTaskBtn = document.querySelector("#addTaskBtn");
const taskList = document.querySelector("#taskList");

addTaskBtn.addEventListener("click", () => {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        return;
    }

    taskList.classList.add("has-items");
    taskList.innerHTML += `<li class="task-item">${taskText} <button class="delete-btn">Delete</button></li>`;
    taskInput.value = "";
});

taskList.addEventListener("click", (event) => {
    if (!event.target.classList.contains("delete-btn")) {
        return;
    }

    event.target.parentElement.remove();

    if (taskList.children.length === 0) {
        taskList.classList.remove("has-items");
    }
});
