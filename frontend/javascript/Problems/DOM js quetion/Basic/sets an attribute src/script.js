const img = document.querySelector("#myImg");
const btn = document.querySelector("#myBtn");

btn.addEventListener("click", () => {
    img.setAttribute("src", "cat 2.jpg");
    img.setAttribute("alt", "cat");
});