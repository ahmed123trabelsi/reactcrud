import React from 'react'
import { useParams } from 'react-router-dom'

export default function Profile() {
  const {username}=useParams()
  return (
    <>
    <h1>Profile</h1>
    <h3>welcome{username}</h3>
    </>
  )
}

