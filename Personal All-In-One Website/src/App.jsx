import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div id='main' className='flex justify-normal'>
        <div id='block'>
          <h1 id='text'>&#127800; Sprigazalea &#127800;</h1>
          <text id='text'>there is information here</text>
          <img src='Personal All-In-One Website/public/474F3583-B516-4547-9537-1DEEB0578ABB.png'></img>
        </div>
      </div>
    </>
  )
}

export default App
