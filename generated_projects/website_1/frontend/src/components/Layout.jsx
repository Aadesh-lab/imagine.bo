import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from './NavBar.jsx'
import Footer from './Footer.jsx'

function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <NavBar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout