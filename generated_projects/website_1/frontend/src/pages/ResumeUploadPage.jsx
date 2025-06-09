import React, { useState } from 'react'
import ResumeUploadForm from '../components/ResumeUploadForm.jsx'

function ResumeUploadPage() {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')
  const [uploadedFile, setUploadedFile] = useState(null)

  const handleUpload = async (file, additionalInfo) => {
    setLoading(true)
    setError('')
    setSuccess(false)
    
    try {
      const formData = new FormData()
      formData.append('resume', file)
      formData.append('title', additionalInfo.title)
      formData.append('description', additionalInfo.description)

      const response = await fetch('/api/resume-upload', {
        method: 'POST',
        body: formData,
      })

      const data = await response.json()

      if (response.ok) {
        setSuccess(true)
        setUploadedFile(data.file)
      } else {
        setError(data.message || 'Failed to upload resume')
      }
    } catch (err) {
      setError('Network error. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Upload Your Resume
          </h1>
          <p className="text-xl text-gray-600">
            Share your professional experience with potential employers
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          {success && (
            <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg mb-6">
              <p className="font-semibold">Resume uploaded successfully!</p>
              {uploadedFile && (
                <p className="text-sm mt-1">
                  File: {uploadedFile.name} ({(uploadedFile.size / 1024).toFixed(2)} KB)
                </p>
              )}
            </div>
          )}
          
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6">
              {error}
            </div>
          )}

          <ResumeUploadForm onSubmit={handleUpload} loading={loading} />

          <div className="mt-8 pt-8 border-t border-gray-200">
            <h2 className="text-lg font-semibold mb-4 text-gray-800">
              Tips for a Great Resume
            </h2>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                Keep it concise - ideally 1-2 pages
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                Use clear, professional formatting
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                Include relevant keywords for your industry
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                Quantify your achievements when possible
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                Proofread carefully for errors
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ResumeUploadPage