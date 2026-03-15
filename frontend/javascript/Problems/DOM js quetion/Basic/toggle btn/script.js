const btn = document.querySelector("#myBtn");
const para = document.querySelector("#myPara");

btn.addEventListener("click", () => {
    if (para.hasAttribute("hidden")) {
        para.removeAttribute("hidden");
        btn.textContent = "Hide Paragraph";
    } else {
        para.setAttribute("hidden", "");
        btn.textContent = "Show Paragraph";
    }
});
```

// ---

// **Logic kaise kaam karta hai:**
// ```
// Button Click
//      ↓
// para hidden hai?
//      ↓              ↓
//     YES              NO
//      ↓              ↓
// removeAttribute   setAttribute
//   ("hidden")      ("hidden","")
//      ↓              ↓
//   Show para       Hide para
//      ↓              ↓
// btn → "Hide"    btn → "Show"