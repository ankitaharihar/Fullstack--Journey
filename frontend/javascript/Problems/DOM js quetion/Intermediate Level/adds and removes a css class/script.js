const addBtn = document.querySelector("#addBtn");
const removeBtn = document.querySelector("#removeBtn");
const para = document.querySelector("#myPara");

function addClass() {
    para.classList.add("highlight");
}

function removeClass() {
    para.classList.remove("highlight");
}

addBtn.addEventListener("click", addClass);
removeBtn.addEventListener("click", removeClass);