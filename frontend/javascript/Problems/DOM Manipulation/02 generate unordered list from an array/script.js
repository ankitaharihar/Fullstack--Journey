const fruits = ["Apple", "Banana", "Cherry"];
const app = document.querySelector("#app");
const list = document.createElement("ul");

fruits.forEach((fruit) => {
    const listItem = document.createElement("li");

    listItem.textContent = fruit;
    list.appendChild(listItem);
});

app.appendChild(list);