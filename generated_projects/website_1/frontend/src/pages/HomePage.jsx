import React from 'react'
import { Link } from 'react-router-dom'
import HeroSection from '../components/HeroSection.jsx'
import FeatureCard from '../components/FeatureCard.jsx'

function HomePage() {
  const features = [
    {
      title: 'Upload Resume',
      description: 'Easily upload and manage your professional resume',
      icon: '📄',
      link: '/resume-upload'
    },
    {
      title: 'Read Articles',
      description: 'Stay updated with latest industry insights and tips',
      icon: '📚',
      link: '/articles'
    },
    {
      title: 'Connect',
      description: 'Get in touch with our team for opportunities',
      icon: '🤝',
      link: '/contact'
    }
  ]

  return (
    <div className="w-full">
      <HeroSection />
      
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          What We Offer
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </section>

      <section className="bg-blue-50 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-blue-900">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Join thousands of professionals who trust our platform for career advancement.
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              to="/signup"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
            >
              Sign Up Now
            </Link>
            <Link
              to="/about"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold border border-blue-600"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage