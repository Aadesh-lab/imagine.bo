import React, { useState } from 'react'

function ResumeUploadForm({ onSubmit, loading }) {
  const [file, setFile] = useState(null)
  const [formData, setFormData] = useState({
    title: '',
    description: ''
  })
  const [errors, setErrors] = useState({})
  const [dragActive, setDragActive] = useState(false)

  const validateForm = () => {
    const newErrors = {}
    
    if (!file) {
      newErrors.file = 'Please select a file to upload'
    } else if (!file.name.match(/\.(pdf|doc|docx)$/)) {
      newErrors.file = 'Please upload a PDF or Word document'
    } else if (file.size > 5 * 1024 * 1024) {
      newErrors.file = 'File size must be less than 5MB'
    }
    
    if (!formData.title) {
      newErrors.title = 'Title is required'
    }
    
    if (!formData.description) {
      newErrors.description = 'Description is required'
    }
    
    return newErrors
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newErrors = validateForm()
    
    if (Object.keys(newErrors).length === 0) {
      onSubmit(file, formData)
    } else {
      setErrors(newErrors)
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const handleDrag = (e) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true)
    } else if (e.type === "dragleave") {
      setDragActive(false)
    }
  }

  const handleDrop = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFile(e.dataTransfer.files[0])
      if (errors.file) {
        setErrors(prev => ({ ...prev, file: '' }))
      }
    }
  }

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0])
      if (errors.file) {
        setErrors(prev => ({ ...prev, file: '' }))
      }
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-6">
        <label className="block text-gray-700 font-semibold mb-2">
          Resume File
        </label>
        <div
          className={`border-2 border-dashed rounded-lg p-8 text-center ${
            dragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300'
          } ${errors.file ? 'border-red-500' : ''}`}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        >
          <input
            type="file"
            id="file-upload"
            className="hidden"
            onChange={handleFileChange}
            accept=".pdf,.doc,.docx"
          />
          <label htmlFor="file-upload" className="cursor-pointer">
            {file ? (
              <div>
                <p className="text-lg font-medium text-gray-700">{file.name}</p>
                <p className="text-sm text-gray-500 mt-1">
                  {(file.size / 1024).toFixed(2)} KB
                </p>
              </div>
            ) : (
              <div>
                <p className="text-lg text-gray-700 mb-2">
                  Drag and drop your resume here, or click to browse
                </p>
                <p className="text-sm text-gray-500">
                  Supported formats: PDF, DOC, DOCX (Max 5MB)
                </p>
              </div>
            )}
          </label>
        </div>
        {errors.file && (
          <p className="mt-1 text-sm text-red-600">{errors.file}</p>
        )}
      </div>

      <div className="mb-6">
        <label htmlFor="title" className="block text-gray-700 font-semibold mb-2">
          Resume Title
        </label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
            errors.title ? 'border-red-500' : 'border-gray-300'
          }`}
          placeholder="e.g., Senior Software Engineer Resume"
        />
        {errors.title && (
          <p className="mt-1 text-sm text-red-600">{errors.title}</p>
        )}
      </div>

      <div className="mb-6">
        <label htmlFor="description" className="block text-gray-700 font-semibold mb-2">
          Description
        </label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          rows="4"
          className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
            errors.description ? 'border-red-500' : 'border-gray-300'
          }`}
          placeholder="Brief description of your experience and what you're looking for..."
        />
        {errors.description && (
          <p className="mt-1 text-sm text-red-600">{errors.description}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? 'Uploading...' : 'Upload Resume'}
      </button>
    </form>
  )
}

export default ResumeUploadForm