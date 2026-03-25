import React, { useState } from 'react'

function Toggle() {
    const[isvisiable,setIsVisiable] = useState(true);

function toggleMessage(){
    setIsVisiable(!isvisiable);

}
  return (
    <>
    <h1 className='text-3xl font-bold'>Task 5</h1>
    <hr /><br />{isvisiable && <p className="text-2xl font-bold border-2">This is visiable 🙄</p>}<br />
    <button onClick={toggleMessage} className="text-2xl font-bold border-2">
        {isvisiable ? "Hide Message" : "Show Message"}
        </button>
        
    </>
  )
}

export default Toggle;