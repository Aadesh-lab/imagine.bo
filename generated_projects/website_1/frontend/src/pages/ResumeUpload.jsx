import React from 'react'
import { useState, useEffect } from 'react'
import ResumeUploadForm from '../components/ResumeUploadForm'
import ResumeList from '../components/ResumeList'

function ResumeUpload() {
  const [resumes, setResumes] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [uploadSuccess, setUploadSuccess] = useState(false)

  useEffect(() => {
    fetchResumes()
  }, [])

  const fetchResumes = async () => {
    try {
      const token = localStorage.getItem('token')
      const response = await fetch('/api/resumes', {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      })
      
      if (!response.ok) {
        throw new Error('Failed to fetch resumes')
      }
      
      const data = await response.json()
      setResumes(data.resumes || [])
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  const handleUpload = async (file, title) => {
    setError('')
    setUploadSuccess(false)
    
    const formData = new FormData()
    formData.append('resume', file)
    formData.append('title', title)
    
    try {
      const token = localStorage.getItem('token')
      const response = await fetch('/api/resumes/upload', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
        body: formData,
      })
      
      if (!response.ok) {
        throw new Error('Failed to upload resume')
      }
      
      setUploadSuccess(true)
      fetchResumes()
    } catch (err) {
      setError(err.message)
    }
  }

  const handleDelete = async (resumeId) => {
    try {
      const token = localStorage.getItem('token')
      const response = await fetch(`/api/resumes/${resumeId}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      })
      
      if (!response.ok) {
        throw new Error('Failed to delete resume')
      }
      
      fetchResumes()
    } catch (err) {
      setError(err.message)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900">Resume Management</h1>
          <p className="mt-4 text-xl text-gray-600">
            Upload and manage your professional resumes
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Upload New Resume</h2>
            {error && (
              <div className="mb-4 rounded-md bg-red-50 p-4">
                <p className="text-sm text-red-800">{error}</p>
              </div>
            )}
            {uploadSuccess && (
              <div className="mb-4 rounded-md bg-green-50 p-4">
                <p className="text-sm text-green-800">Resume uploaded successfully!</p>
              </div>
            )}
            <ResumeUploadForm onUpload={handleUpload} />
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Resumes</h2>
            {loading ? (
              <div className="text-center py-8">
                <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div>
              </div>
            ) : (
              <ResumeList resumes={resumes} onDelete={handleDelete} />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ResumeUpload