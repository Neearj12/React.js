// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
let add=(a,b)=>{
return a+b;
}
let sub=(a,b)=>{
return a-b;
}
let Mult=(a,b)=>{
  return (a*b)
}
let div=(a,b)=>{
return (a/b)
}
  return (
    <>
   <ul>
    <li>sum of two number is {add(1,3)}</li>
    <li>subtraction of two num {sub(3,2)}</li>
    <li>multi of two num is {Mult(3,2)}</li>
    <li>div of two num is {div(4,2)}</li>
   </ul>
    </>
  )
}

export default App
