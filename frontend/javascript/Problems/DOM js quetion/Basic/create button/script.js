const btn = document.getElementById("myBtn");
const para = document.getElementById("myPara");

btn.addEventListener("click", () => {
    para.textContent = "Message updated successfully! 🎉";
});