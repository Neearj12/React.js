import React, { useContext } from 'react'
import CompC from './CompC'
import  {firstname,lastname} from'./App';


const CompB = () => {
    const fname=useContext(firstname)
    const lname=useContext(lastname)
  return (
    <>
    <h1>my name is {fname} {lname}</h1>
    </>
  )
}

export default CompB