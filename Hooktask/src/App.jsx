import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  let color=' bg-yellow-200'
  const [bg,setbg]=useState(color)
  const [Name,setName]=useState('click Me')
  

  
  const updatecolor= ()=>{
    setbg((prevbg)=>(prevbg=== color ? 'bg-green-400' : color))
    setName("ouchh !!: wolf") 
    
}
const update2=()=>{
  setbg(color);
  setName("aayoo")
}

  


  return (
    <>
<div id='button' className={` ${bg} h-96 w-full  p-4 m-4 rounded-md shadow-md flex items-center justify-center`}>
  <button id='button' onMouseLeave={update2} onMouseEnter={updatecolor} className='"bg-blue-500 hover:bg-blue-700
   text-white font-bold py-2 px-4 rounded"'>{Name}</button>
</div>

    </>
  )
}

export default App
