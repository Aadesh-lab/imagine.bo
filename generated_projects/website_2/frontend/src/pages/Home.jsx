import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <section className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Welcome to ResumeHub</h1>
              <p className="text-xl md:text-2xl mb-8">Your professional resume management platform</p>
              <div className="space-x-4">
                <Link to="/signup" className="bg-white text-indigo-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold text-lg inline-block">Get Started</Link>
                <Link to="/about" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-indigo-600 px-8 py-3 rounded-lg font-semibold text-lg inline-block">Learn More</Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose ResumeHub?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-indigo-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Easy Upload</h3>
                <p className="text-gray-600">Upload your resume in seconds with our intuitive interface. Support for multiple file formats.</p>
              </div>
              <div className="text-center">
                <div className="bg-indigo-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Secure Storage</h3>
                <p className="text-gray-600">Your resumes are stored securely with enterprise-grade encryption and privacy protection.</p>
              </div>
              <div className="text-center">
                <div className="bg-indigo-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m9.032 4.026a9.001 9.001 0 010-5.684m-9.032 5.684a9.001 9.001 0 01-5.684 0m14.716 0a3 3 0 100-5.684m0 5.684a9.001 9.001 0 010-5.684" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Easy Sharing</h3>
                <p className="text-gray-600">Share your resume with potential employers with a single click. Track views and downloads.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gray-100 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">What Our Users Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-indigo-500 rounded-full flex items-center justify-center text-white font-bold">JD</div>
                  <div className="ml-4">
                    <h4 className="font-semibold">John Doe</h4>
                    <p className="text-gray-600 text-sm">Software Engineer</p>
                  </div>
                </div>
                <p className="text-gray-700">"ResumeHub made it so easy to manage all my resume versions. I love how I can quickly share them with recruiters!"</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold">SM</div>
                  <div className="ml-4">
                    <h4 className="font-semibold">Sarah Miller</h4>
                    <p className="text-gray-600 text-sm">Marketing Manager</p>
                  </div>
                </div>
                <p className="text-gray-700">"The platform is intuitive and secure. I feel confident storing my professional documents here."</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">RJ</div>
                  <div className="ml-4">
                    <h4 className="font-semibold">Robert Johnson</h4>
                    <p className="text-gray-600 text-sm">Data Analyst</p>
                  </div>
                </div>
                <p className="text-gray-700">"Great service! The upload process is seamless and I can access my resumes from anywhere."</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Home;