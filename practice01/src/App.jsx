import { useState } from 'react'

import './App.css'

function App() {
  
  const [name, setname] = useState("")
  const [fullname, setfullname] = useState("")

  const inputevent=(e)=>{
    setname(e.target.value)
  }
  const onsubmit=()=>{
    setfullname(name)
  }

  return (
    <>
 <dir>
  <h1 className=' text-4xl font-bold text-blue-500'>hello{fullname}</h1>
  <input className='border-2 border-gray-300 p-2 rounded-md focus:outline-none focus:ring focus:border-blue-500' type="text" placeholder='Enter your name'onChange={inputevent} value={name}/>
  <button onClick={onsubmit} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Click Me</button>
 </dir>

    </>
  )
}

export default App
