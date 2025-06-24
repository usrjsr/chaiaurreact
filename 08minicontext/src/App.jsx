import { useState } from 'react'
import './App.css'
import UsercontextProvider from './context/Usercontextprovider'
import Login from './components/Login'
import Profile from './components/Profile'


function App() {
  
  return (
    <UsercontextProvider>
      <h1>React with Utkarsh</h1>
      <Login/>
      <Profile/>
    </UsercontextProvider>
  )
}

export default App
