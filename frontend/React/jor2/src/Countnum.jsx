import { useState } from "react";

function Countnum(){
let [num, setNum] = useState(0);
function Increase(){
    setNum(num + 1);
}
function Decrease(){
    setNum(num - 1)
}
function Reset(){
    setNum(0)
}
return(
    <div>
        <h1>Num is {num}</h1>
        <button onClick={Increase}>Increase</button>
        <button onClick={Decrease}>Decrease</button>
        <button onClick={Reset}>Reset</button>
        {/* <button onClick={0}>Going to 0</button> */}
    </div>
)
}

export default Countnum;