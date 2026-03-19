import { useState } from "react";

function Day3(){
//  let [isVisiable, setIsVisiable]=useState(true);
// let [camera,setCamera]=useState(false);


// function ToggleIsVisiable(){
//         setIsVisiable(!isVisiable);
//     }
//     return(
//         <div>
//             <button onClick={ToggleIsVisiable}>Increase</button>
//             {isVisiable && }
//         </div>
//     )
 
// }


// function ToggleCamera(){
//    setCamera(!camera);
//     }
//     return(
//         <div>
//             <button onClick={ToggleCamera}>ToggleCamera</button>
//             {camera ? <p>Camera is on </p> : <p>Camera is off</p>}
          
//         </div>
//     );
   
 

// }

// let [num,setNum]=useState(0);


// function Increase(){
//     setNum(num + 1)
// }
// return(
//     <div>
//         <p>Count is {num}</p>
//     <button onClick={Increase}>Increase</button>
    
//     </div>
    
// )
// }


let [msg,setMsg]=useState([]);


function AddMsg(){
    setMsg([...msg, "newmsg"]);
}
return(
    <div>
        <button onClick={AddMsg}>Click Me</button>
        {msg.map((m)=>{
            return <p>{m}</p>
        })}
    </div>
)
}
export default Day3;
