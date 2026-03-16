const searchInput = document.querySelector("#searchInput");
const fruitItems = document.querySelectorAll("#fruitList li");

searchInput.addEventListener("input", () => {
    const searchValue = searchInput.value.trim().toLowerCase();

    fruitItems.forEach((fruitItem) => {
        const isMatch = fruitItem.textContent.toLowerCase().includes(searchValue);

        fruitItem.style.display = isMatch ? "list-item" : "none";
    });
});