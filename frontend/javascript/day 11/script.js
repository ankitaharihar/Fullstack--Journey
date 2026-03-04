const img = document.querySelector("img");

function changeStyle(){
    // h1E1.classList.toggle("para");
    img.setAttribute("src","hehe.jpg");
}

const parent = document.querySelector(".parent");

function createAndAddElement(){
    const para = document.createElement("p");
    para.innerText = "I am a new element";
    parent.appendChild(para);
}