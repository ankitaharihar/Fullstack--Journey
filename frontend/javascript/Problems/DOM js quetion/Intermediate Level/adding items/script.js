const btn = document.querySelector("#myBtn");
const list = document.querySelector("#myList");
let count = 4;

btn.addEventListener("click", () => {
    list.innerHTML += `<li>Item ${count}</li>`;
    count++;
});