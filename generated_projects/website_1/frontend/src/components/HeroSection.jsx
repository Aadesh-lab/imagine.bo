import React from 'react'
import { Link } from 'react-router-dom'

function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Advance Your Career with Confidence
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
          Upload your resume, explore opportunities, and connect with top employers in your industry.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/resume-upload"
            className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-lg"
          >
            Upload Resume
          </Link>
          <Link
            to="/articles"
            className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold text-lg"
          >
            Browse Articles
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div>
            <div className="text-4xl font-bold mb-2">10K+</div>
            <div className="text-lg">Active Job Seekers</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">500+</div>
            <div className="text-lg">Partner Companies</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">95%</div>
            <div className="text-lg">Success Rate</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection