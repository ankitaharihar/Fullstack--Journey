import React, { useState } from 'react'

function Counter() {
    
    const [count,setCount] = useState(0);

function increase(){
    setCount(count + 1);
}

function decrease(){
    setCount(count -1);
}
  return (
  <div>
    <h1 className='text-3xl font-bold '>Task 4</h1>
    <hr /><br /><p className="text-2xl font-bold border-2">Counter: {count}</p> <br />
    <div className="flex gap-4">
      <button onClick={increase} className="text-2xl font-bold border-2">Increase</button>
      <button onClick={decrease} className="text-2xl font-bold border-2">Decrease</button>
    </div>
  </div>
)
}

export default Counter;