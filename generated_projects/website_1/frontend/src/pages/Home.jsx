import React from 'react'
import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import Features from '../components/Features'

function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Ready to showcase your skills?
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Join thousands of students who have already uploaded their resumes
            </p>
            <div className="mt-8 flex justify-center space-x-4">
              <Link
                to="/signup"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
              >
                Get Started
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home