import React, { useEffect, useState } from 'react'

const App = () => {
  const [num,setnum]=useState(0)
  const [nums,setnums]=useState(0)
  useEffect(()=>{
    alert("i am clicked")
  },[num])
  return (
    <div>
      <button onClick={()=>{
        setnum(num+1)
      }}>click me {num}
      </button>
      <br />
      <button onClick={()=>{
        setnums(nums+1)
      }}>click me {nums}
      </button>
    </div>
  )
}

export default App
