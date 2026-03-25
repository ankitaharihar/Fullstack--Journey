import React, { useState } from 'react'

function NameInput() {

  const [name, setName] = useState("");

  return (
    <div>
      
      <h1 className='text-3xl font-bold'>Task 8</h1>

      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <p>Your name is: {name}</p>

    </div>
  )
}

export default NameInput