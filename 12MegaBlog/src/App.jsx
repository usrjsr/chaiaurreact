import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import './App.css'
import authService from "./appwrite/auth"
import { login, logout } from './store/auth.slice'
import { Footer, Header } from './components'
import { Outlet } from 'react-router-dom'

function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }))
        } else {
          dispatch(logout())
        }
      })
      .finally(() => setLoading(false))
  }, [])

  return !loading ? (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 text-gray-800 font-sans flex flex-col">
      {/* Header */}
      <header className="shadow-md sticky top-0 z-50 bg-white">
        <Header />
      </header>

      {/* Main Content */}
      <main className="min-h-[70vh] px-4 py-8 bg-gradient-to-br from-white via-gray-100 to-white rounded-2xl shadow-xl m-4 transition-all duration-300 ease-in-out">
    <Outlet />
     </main>

      {/* Footer */}
      <footer className="bg-white mt-auto border-t py-4 shadow-inner">
        <Footer />
      </footer>
    </div>
  ) : null
}

export default App
