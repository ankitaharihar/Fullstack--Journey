const btn = document.querySelector("#myBtn");
const para = document.querySelector("#myPara");

function toggleStyle() {
    para.classList.toggle("highlight");
}

btn.addEventListener("click", toggleStyle);


// ---

// **`classList.toggle` andar kya hota hai:**
// ```
// Button Click
//      ↓
// "highlight" class para pe hai?
//      ↓                    ↓
//     YES                   NO
//      ↓                    ↓
//   Remove it            Add it
//   (class chali jaati)  (class lag jaati)