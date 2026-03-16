const toggleBtn = document.querySelector("#toggleBtn");
const infoText = document.querySelector("#infoText");

let isVisible = true;

toggleBtn.addEventListener("click", () => {
    if (isVisible) {
        infoText.style.display = "none";
        toggleBtn.innerText = "Show";
    } else {
        infoText.style.display = "block";
        toggleBtn.innerText = "Hide";
    }

    isVisible = !isVisible;
});
