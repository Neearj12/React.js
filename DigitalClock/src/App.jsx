import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const time=new Date().toLocaleTimeString()
  const [Time, setTime] = useState(time)
 
  const updatetime=()=>{
    
 setTime(new Date().toLocaleTimeString());

  }
  setInterval(updatetime,1000)
  return (
    <>
<h1  className="text-4xl font-bold text-blue-500">{Time}</h1>


    </>
  )
}

export default App
