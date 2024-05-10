import React from 'react'
import { Link } from 'react-router-dom'
import Profile from './Profile'
import SideBar from './SideBar'

export default function Dashboard() {
  return (
    <>
    <h1>Dashboard</h1>
    <Link to="/events">go to events</Link>
   {/*  <Profile/>
    <SideBar/> */}
    </>
  )
}

