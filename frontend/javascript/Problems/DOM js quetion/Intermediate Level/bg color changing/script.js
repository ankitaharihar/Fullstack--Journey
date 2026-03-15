//one color change 
const btn = document.querySelector("#myBtn");
const div = document.querySelector("#myDiv");

btn.addEventListener("click", () => {
    div.style.backgroundColor = "lightblue";
});



//different color
//const btn = document.querySelector("#myBtn");
// const div = document.querySelector("#myDiv");
// const colors = ["lightblue", "lightgreen", "lightyellow", "lightcoral", "plum"];
// let i = 0;

// btn.addEventListener("click", () => {
//     div.style.backgroundColor = colors[i % colors.length];
//     i++;
// });