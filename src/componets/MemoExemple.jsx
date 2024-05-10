import React, { useMemo } from 'react'
import { useState } from 'react'


export default function MemoExemple() {
    const [username,setUsername]=useState("");
    const [pwd,setPwd]=useState("");
    const security=useMemo(()=>{ setTimeout(()=>console.log("security check"),5000)
    return pwd.length >3},[pwd])
   /*  const security =()=>{
        setTimeout(()=>console.log("security check"),5000)
        return pwd.length >3
    } */
  return (
    <>
    <h1>MemoExemple</h1>
    <input type="text" name="username" id="username" value={username} onChange={(e)=>setUsername(e.target.value)}/> 
    <br />
    <input type="text" name="pwd" id="pwd" value={pwd} onChange={(e)=>{security;setPwd(e.target.value)}}
    style={security? {color:"lightblue"}:{color:"red"}}/> 
    </>

  )
}

