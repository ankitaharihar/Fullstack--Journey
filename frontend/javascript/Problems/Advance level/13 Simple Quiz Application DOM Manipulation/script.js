const optionButtons = document.querySelectorAll(".optionBtn");
const resultText = document.querySelector("#resultText");
const correctAnswer = "4";

optionButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const selected = button.dataset.answer;

        if (selected === correctAnswer) {
            resultText.textContent = "Correct!";
        } else {
            resultText.textContent = "Wrong answer. Try again.";
        }
    });
});
