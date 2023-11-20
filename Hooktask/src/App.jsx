import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  
  const time=new Date().toLocaleTimeString()
 const [Time ,setTime]= useState(time)
 const Updatetime=()=>{
  setTime(new Date().toLocaleTimeString());
 }

  return (
    <>
     <h1 className="text-4xl font-bold text-black-500 ">{Time}</h1>
<button  onClick={Updatetime} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  get time
</button>

    </>
  )
}

export default App
