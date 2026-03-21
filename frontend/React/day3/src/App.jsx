import { useState } from 'react'
import './App.css'             

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      
      <h1 className="bg-yellow-200 text-red-500 text-4xl font-bold mb-6">
        Counter App
      </h1>

      <p className="text-6xl font-bold text-gray-700 mb-8">
        {count}
      </p>

      <button 
        onClick={() => setCount((count) => count + 1)}
        className="bg-yellow-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 text-lg"
      >
        count is {count}
      </button>

    </div>
  )
}

export default App