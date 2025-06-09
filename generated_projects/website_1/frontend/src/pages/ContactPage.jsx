import React, { useState } from 'react'
import ContactForm from '../components/ContactForm.jsx'

function ContactPage() {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (formData) => {
    setLoading(true)
    setError('')
    setSuccess(false)
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setSuccess(true)
      } else {
        setError(data.message || 'Failed to send message')
      }
    } catch (err) {
      setError('Network error. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-600">
            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">
                Contact Information
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-gray-700 mb-2">Email</h3>
                  <p className="text-gray-600">support@careerplatform.com</p>
                  <p className="text-gray-600">careers@careerplatform.com</p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-700 mb-2">Phone</h3>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                  <p className="text-sm text-gray-500">Monday - Friday, 9am - 6pm EST</p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-700 mb-2">Office</h3>
                  <p className="text-gray-600">
                    123 Career Street<br />
                    Suite 456<br />
                    New York, NY 10001
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <h3 className="font-semibold text-gray-700 mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-400 hover:text-gray-600">
                    <span className="text-2xl">📘</span>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-gray-600">
                    <span className="text-2xl">🐦</span>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-gray-600">
                    <span className="text-2xl">💼</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div>
            {success && (
              <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg mb-6">
                Thank you for your message! We'll get back to you soon.
              </div>
            )}
            
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6">
                {error}
              </div>
            )}

            <ContactForm onSubmit={handleSubmit} loading={loading} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactPage