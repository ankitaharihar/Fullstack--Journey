const openModalButton = document.querySelector("#openModalButton");
const closeModalButton = document.querySelector("#closeModalButton");
const modalOverlay = document.querySelector("#modalOverlay");

openModalButton.addEventListener("click", () => {
    modalOverlay.classList.add("is-open");
});

closeModalButton.addEventListener("click", () => {
    modalOverlay.classList.remove("is-open");
});