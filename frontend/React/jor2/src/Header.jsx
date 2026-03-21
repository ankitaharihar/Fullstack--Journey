import { useEffect, useState } from "react";
function Do(){
    const [count, setCount] = useState(0);
    function Increasecount(){
        setCount(count + 1);
    }
    useEffect(()=>{
        console.log("useEffect called");
    } , [count]);
    
    return(
        <div>
            <p>Count: {count}</p>
            <button onClick={Increasecount}>Increase</button>
        </div>
    )
}

export default Do;