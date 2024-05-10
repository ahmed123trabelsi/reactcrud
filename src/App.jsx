import { lazy, Suspense, useState } from 'react'

import './App.css'
import  Header  from './componets/Header'


import { createContext } from 'react'
import Events from './componets/Events'
import { Route, Routes } from 'react-router-dom'

import Navigation from './pages/Navigation'
import NotFound from './componets/NotFound'
import EventDetails from './componets/EventDetails'
import AddEvent from './componets/AddEvent'
import UpdateEvent from './componets/UpdateEvent'

export const ThemeContext=createContext(null);
const Dashboard=lazy(()=>import("./pages/Dashboard")); 
const Profile = lazy(() => import('./pages/Profile'));
function App() {
/*   const [count, setCount] = useState(0)
  const [show, setShow] = useState(true)
let name="ahmed"
let person={
  name:"ahmed",
  age:25
} */
/* let show=(name)=>{return name} */
/* let students=[
  {name:"ahmed",age:"7"},
  {name:"baha",age:"7"},
  {name:"abdelaziz",age:"7"}
]
const style1={
  color:"green",
  backgroundColor:"red",
  fontSize:"5rem"
}
const  handleClick = ()=>{alert("ahmed")}
let test=true */
/* const [theme, setTheme] = useState("hii") */

  return (
    <>
    <Navigation/>
  <Suspense fallback={<div>loading..</div>}> 
  <Routes>
  <Route path="/" element={<Dashboard />} />
          <Route path="/profile/:username" element={<Profile />} />
          <Route path="/events" element={<Events />} />
          <Route path="/events/:eventName" element={<EventDetails />} />
          <Route path="/add" element={<AddEvent/>} />
            <Route path="/update/:id" element={<UpdateEvent />} />
 
   {/* <Route path="/events" element ={ <Events/>} >
     <Route index element ={<CounterF/>}/>
    <Route path=":username" element ={ <Profile/>}/>
  </Route> */}
  <Route path="*" element={<NotFound />} />
 </Routes> </Suspense> 
 {/*   < ThemeContext.Provider value={{theme,setTheme}} >  
     <Dashboard theme={theme} setTheme={setTheme}/>
     </ThemeContext.Provider>
    <MemoExemple/> */}
  {/*   <CountC propName={test}/> */}
   {/*  <button onClick={()=>setShow(!show)}>show</button> */}
  {/*   {show &&<CounterF Name={name}></CounterF>} */}
    {/*   <h1>hello {name}</h1>
      <p>{person.name}</p>
      <p>{person.age}</p>
      <h1>{show('mohsen')}</h1> */}
      {/* <Header name="name"></Header>
    
      <h1 style={style1}> etudiants</h1>
      <ul>
       { students.map((student,index)=>{ return <li key={index}>name :{student.name} - age : {student.age}</li>})}
      </ul>
      <button onClick={()=>handleClick()}>CLICK HERE</button>
      {
        test ?
       <p>is true</p> 
          :
      <p>is false</p>
      } */}
    </>
  )
}

export default App

