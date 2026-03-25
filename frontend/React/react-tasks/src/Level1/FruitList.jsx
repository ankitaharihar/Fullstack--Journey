import React from 'react'

function FruitList() {
    const fruits = ["Apple","Orange","Banana","Watermelon"]
  return (
<div>
    <h1 className='text-3xl font-bold'>Task 6</h1>
   <hr /> <ul className='list-disc'>
    {fruits.map((fruit,index) => (
        <li key={index} className='text-lg font-bold'>{fruit}</li>
    ))}
    </ul>
    </div>
  ) 
}

export default FruitList;