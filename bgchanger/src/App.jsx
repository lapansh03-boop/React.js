import React, { useState } from 'react'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className="w-full h-screen duration-200" style={{ backgroundColor: color }}>
      <div className="fixed flex flex-wrap justify-content bottom-12 insert-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
        <button 
        onClick={() => setColor("Red") }
        className=" outline-none px-4 py-1 shadow-lg text-white rounded-full" style={{ backgroundColor: "Red" }}>
          Red
        </button>

        <button className=" outline-none px-4 py-1 shadow-lg text-white rounded-full" style={{ backgroundColor: "Green" }} onClick={() => setColor("green")}>
          Green
        </button>
        <button className=" outline-none px-4 py-1 shadow-lg text-white rounded-full" style={{ backgroundColor: "Blue" }} onClick={() => setColor("blue")}>
          Blue
        </button>
        <button className=" outline-none px-4 py-1 shadow-lg text-white rounded-full" style={{ backgroundColor: "Olive" }} onClick={() => setColor("olive")}>
          Olive
        </button>
        <button className=" outline-none px-4 py-1 shadow-lg text-white rounded-full" style={{ backgroundColor: "Yellow" }} onClick={() => setColor("yellow")}>
          Yellow
        </button>
        </div>
        
      </div>
    </div>
    

  )
}

export default App
