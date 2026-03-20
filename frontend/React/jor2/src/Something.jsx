import { useEffect, useState } from "react";
import "./App.css";
function App() {
let names = ["Alice", "Bob", "Charlie", "David", "Eve"];
const [filteredNames, setFilteredNames] = useState([]);
function handleInputChange() {
// filter names array
 // a---> filteredNames --> ["Alice"]
 // input value
 const userInput = document.getElementById("userInput");
 const userInputValue = userInput.value;
 const newArray = names.filter((n) => {
 return n.toLowerCase().includes(userInputValue);
});
console.log(newArray);
 setFilteredNames(newArray);
 // ["alice"]
 }
 return (
 <div>
<input
 type="text"
onChange={handleInputChange}
placeholder="search name"
id="userInput"
/>
 {filteredNames.map((n) => {
 return <p>{n}</p>;
})}
</div>
 );
}
export default App;