const emailInput = document.querySelector("#emailInput");
const phoneInput = document.querySelector("#phoneInput");
const emailMessage = document.querySelector("#emailMessage");
const phoneMessage = document.querySelector("#phoneMessage");

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^\d{10}$/;

emailInput.addEventListener("input", () => {
    if (emailRegex.test(emailInput.value)) {
        emailMessage.textContent = "Valid email address";
    } else {
        emailMessage.textContent = "Invalid email address";
    }
});

phoneInput.addEventListener("input", () => {
    if (phoneRegex.test(phoneInput.value)) {
        phoneMessage.textContent = "Valid phone number";
    } else {
        phoneMessage.textContent = "Invalid phone number";
    }
});
