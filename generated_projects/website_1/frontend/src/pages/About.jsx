import React from 'react'

function About() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            About Resume Portal
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            Empowering students to showcase their talents
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Our Mission</h2>
              <p className="mt-4 text-lg text-gray-600">
                We believe every student deserves the opportunity to present their skills and achievements in the best possible way. Our platform makes it easy to upload, manage, and share your professional resume with potential employers.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Why Choose Us</h2>
              <ul className="mt-4 space-y-3 text-lg text-gray-600">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Secure and private resume storage
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Easy upload and management tools
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Professional formatting options
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-gray-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 text-center">Our Impact</h2>
          <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-3">
            <div className="text-center">
              <p className="text-4xl font-extrabold text-indigo-600">10,000+</p>
              <p className="mt-2 text-lg text-gray-600">Students Registered</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-extrabold text-indigo-600">25,000+</p>
              <p className="mt-2 text-lg text-gray-600">Resumes Uploaded</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-extrabold text-indigo-600">95%</p>
              <p className="mt-2 text-lg text-gray-600">Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About