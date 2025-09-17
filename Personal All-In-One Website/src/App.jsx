import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div id='main'>
        <div id='block'>
          <h1 id='text'>&#127800; lalala &#127800;</h1>
          <text id='text'>there is information here</text>
        </div>
      </div>
    </>
  )
}

export default App
