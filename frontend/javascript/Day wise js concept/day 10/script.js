// 1] selecting elements from the DOM
// i] using id - getElementbyId("id name")
// const titleElement = document.getElementById("title");
// console.log(titleElement);

// ii] using class - getElementsByClassName("class name")
// const praragraphs = document.getElementsByClassName("para");
// console.log(praragraphs);

// iii] using tag name - getElementsByTagName("tag name")
// const h1Elements = document.getElementsByTagName("h1");
// console.log(h1Elements);    

// 2] using querySelector and querySelectorAll
// i] querySelector - returns the first element that matches the specified CSS selector(s)
//  const firstParagraph = document.querySelector(".para");
// console.log(firstParagraph); 

// // ii] querySelectorAll - returns a static NodeList of all elements that match the specified CSS selector(s)
//  const allParagraphs = document.querySelectorAll(".para");
// console.log(allParagraphs);

// 3] changing the content of an element i] innerHTML - allows you to get or set the HTML content of an element
// const titleElement = document.getElementById("title");
// titleElement.innerHTML = "Title changed by JavaScript";
// const h1Element = document.getElementById("title");


// function changeTitle() {
//     h1Element.textContent = "Title changed by JavaScript";
// }

//ii] textContent - allows you to get or set the text content of an element
// const titleElement = document.getElementById("title");
// titleElement.textContent = "Title changed by JavaScript";

//iii] innerText - allows you to get or set the visible text content of an element
// const titleElement = document.getElementById("title");
// titleElement.innerText = "Title changed by JavaScript";


// const h1Element = document.getElementById("title");
// function changeTitle() {
//     h1Element.textContent = "Title changed by JavaScript";
// }   
// function changestyle() {
//     h1Element.style.color = "blue";
//     h1Element.style.fontSize = "50px";
//     h1Element.style.backgroundColor = "yellow";
// }


//hide button
const h1Element = document.getElementById("title");
function changestyle() {
   if (h1Element.style.display =="none") {
    h1Element.style.display = "block";
}else{
    h1Element.style.display = "none"
}
}