import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function About() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <section className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">About ResumeHub</h1>
            <p className="text-xl text-center max-w-3xl mx-auto">Empowering professionals to manage and share their career documents with confidence</p>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
                <p className="text-gray-700 mb-4">At ResumeHub, we believe that managing your professional documents should be simple, secure, and efficient. Our mission is to provide a platform that empowers job seekers and professionals to organize, update, and share their resumes with ease.</p>
                <p className="text-gray-700 mb-4">We understand the challenges of job hunting and career management in today's fast-paced world. That's why we've created a solution that streamlines the process, allowing you to focus on what matters most - landing your dream job.</p>
                <p className="text-gray-700">With ResumeHub, you can upload multiple versions of your resume, track who views them, and share them instantly with potential employers. Our platform is designed with security and privacy in mind, ensuring your personal information remains protected.</p>
              </div>
              <div className="bg-gray-100 p-8 rounded-lg">
                <h3 className="text-2xl font-semibold mb-4">Key Features</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Secure cloud storage for all your resumes</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Version control for multiple resume iterations</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">One-click sharing with custom links</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Analytics to track resume views</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Mobile-friendly access from any device</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gray-100 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-32 h-32 bg-indigo-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-3xl font-bold">AJ</div>
                <h3 className="text-xl font-semibold mb-2">Alex Johnson</h3>
                <p className="text-gray-600 mb-2">Founder & CEO</p>
                <p className="text-gray-700">Passionate about helping professionals succeed in their careers through innovative technology solutions.</p>
              </div>
              <div className="text-center">
                <div className="w-32 h-32 bg-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-3xl font-bold">EC</div>
                <h3 className="text-xl font-semibold mb-2">Emily Chen</h3>
                <p className="text-gray-600 mb-2">CTO</p>
                <p className="text-gray-700">Expert in cloud architecture and security, ensuring your data is always safe and accessible.</p>
              </div>
              <div className="text-center">
                <div className="w-32 h-32 bg-green-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-3xl font-bold">MP</div>
                <h3 className="text-xl font-semibold mb-2">Michael Park</h3>
                <p className="text-gray-600 mb-2">Head of Design</p>
                <p className="text-gray-700">Creates intuitive user experiences that make resume management a breeze for everyone.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Join Thousands of Professionals</h2>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">Start managing your resumes more effectively today. Sign up for free and experience the difference ResumeHub can make in your career journey.</p>
            <a href="/signup" className="bg-indigo-600 text-white hover:bg-indigo-700 px-8 py-3 rounded-lg font-semibold text-lg inline-block">Get Started Now</a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default About;