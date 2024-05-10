import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from '../App'

export default function SideBar() {
    const {theme}=useContext(ThemeContext)
  return (
    <h1> this is SideBar { theme}</h1>
  )
}

