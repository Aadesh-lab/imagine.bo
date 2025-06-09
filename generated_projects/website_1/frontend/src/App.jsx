import React from 'react'
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar.jsx'
import HomePage from './pages/HomePage.jsx'
import LoginPage from './pages/LoginPage.jsx'
import SignupPage from './pages/SignupPage.jsx'
import AboutPage from './pages/AboutPage.jsx'
import ContactPage from './pages/ContactPage.jsx'
import ResumeUploadPage from './pages/ResumeUploadPage.jsx'
import ArticlePage from './pages/ArticlePage.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <NavBar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/resume-upload" element={<ResumeUploadPage />} />
          <Route path="/articles" element={<ArticlePage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App