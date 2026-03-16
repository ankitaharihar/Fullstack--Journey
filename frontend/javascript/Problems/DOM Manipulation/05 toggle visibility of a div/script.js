const toggleButton = document.querySelector("#toggleButton");
const infoBox = document.querySelector("#infoBox");

toggleButton.addEventListener("click", () => {
    const isHidden = infoBox.style.display === "none";

    infoBox.style.display = isHidden ? "block" : "none";
    toggleButton.textContent = isHidden ? "Hide Content" : "Show Content";
});