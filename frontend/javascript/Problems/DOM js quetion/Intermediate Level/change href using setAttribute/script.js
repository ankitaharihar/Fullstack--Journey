const link = document.querySelector("#myLink");
const changeLinkBtn = document.querySelector("#changeLinkBtn");

function changeHref() {
    link.setAttribute("href", "https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttribute");
    link.textContent = "Read setAttribute on MDN";
}

changeLinkBtn.addEventListener("click", changeHref);
