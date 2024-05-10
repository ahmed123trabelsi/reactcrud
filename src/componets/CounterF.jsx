import React, { useState } from 'react'
import { useEffect } from 'react'

function CounterF(props) {
    const [count,setCount]=useState(0)
    const [test,setTest]=useState(0)
    useEffect(()=>{console.log("im mounted")
return ()=>{console.log("unmounting")}},[])
    useEffect(()=>{console.log("im changed")},[count])
  return (
    <>
    <button onClick={()=>setTest(test+1)}>Incriment -{test}</button>
    <button onClick={()=>setCount(count+1)}>Incriment</button>
      <p>{count} -{props.Name}</p>
      <button onClick={()=>setCount(count-1)}>deccriment</button>
    </>
  )
}

export default CounterF
