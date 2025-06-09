import React, { useState, useEffect } from 'react'
import ArticleCard from '../components/ArticleCard.jsx'
import ArticleFilter from '../components/ArticleFilter.jsx'

function ArticlePage() {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  useEffect(() => {
    fetchArticles()
  }, [])

  const fetchArticles = async () => {
    setLoading(true)
    setError('')    
    try {
      const response = await fetch('/api/articles')
      const data = await response.json()

      if (response.ok) {
        setArticles(data.articles || mockArticles)
      } else {
        setError(data.message || 'Failed to load articles')
        setArticles(mockArticles)
      }
    } catch (err) {
      setError('Network error. Showing sample articles.')
      setArticles(mockArticles)
    } finally {
      setLoading(false)
    }
  }

  const mockArticles = [
    {
      id: 1,
      title: '10 Tips for a Winning Resume in 2024',
      excerpt: 'Learn the latest strategies to make your resume stand out in today\'s competitive job market.',
      author: 'Sarah Johnson',
      date: '2024-01-15',
      category: 'Career Tips',
      readTime: '5 min read',
      image: 'https://via.placeholder.com/400x200'
    },
    {
      id: 2,
      title: 'The Future of Remote Work',
      excerpt: 'Explore how remote work is reshaping the professional landscape and what it means for your career.',
      author: 'Michael Chen',
      date: '2024-01-12',
      category: 'Industry Trends',
      readTime: '7 min read',
      image: 'https://via.placeholder.com/400x200'
    },
    {
      id: 3,
      title: 'Mastering the Virtual Interview',
      excerpt: 'Essential tips and tricks for acing your next video interview from home.',
      author: 'Emily Rodriguez',
      date: '2024-01-10',
      category: 'Interview Prep',
      readTime: '6 min read',
      image: 'https://via.placeholder.com/400x200'
    },
    {
      id: 4,
      title: 'Building Your Personal Brand Online',
      excerpt: 'Discover how to create a compelling professional presence across digital platforms.',
      author: 'David Kim',
      date: '2024-01-08',
      category: 'Personal Branding',
      readTime: '8 min read',
      image: 'https://via.placeholder.com/400x200'
    },
    {
      id: 5,
      title: 'Negotiating Your Salary Like a Pro',
      excerpt: 'Expert strategies for getting the compensation you deserve in your next role.',
      author: 'Lisa Wang',
      date: '2024-01-05',
      category: 'Career Tips',
      readTime: '6 min read',
      image: 'https://via.placeholder.com/400x200'
    },
    {
      id: 6,
      title: 'The Rise of AI in Recruitment',
      excerpt: 'Understanding how artificial intelligence is changing the hiring process.',
      author: 'James Miller',
      date: '2024-01-03',
      category: 'Industry Trends',
      readTime: '7 min read',
      image: 'https://via.placeholder.com/400x200'
    }
  ]

  const filteredArticles = selectedCategory === 'all' 
    ? articles 
    : articles.filter(article => article.category === selectedCategory)

  const categories = ['all', ...new Set(articles.map(article => article.category))]

  return (
    <div className="py-12 px-4 bg-red-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-red-900 mb-4">
            Career Insights & Articles
          </h1>
          <p className="text-xl text-gray-700">
            Stay informed with the latest career advice and industry trends
          </p>
        </div>

        {error && (
          <div className="bg-yellow-50 border border-yellow-200 text-yellow-800 px-4 py-3 rounded-lg mb-6">
            {error}
          </div>
        )}

        <ArticleFilter 
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />

        {loading ? (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-red-600"></div>
            <p className="mt-4 text-gray-600">Loading articles...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article) => (
              <ArticleCard key={article.id} {...article} />
            ))}
          </div>
        )}

        {filteredArticles.length === 0 && !loading && (
          <div className="text-center py-12">
            <p className="text-gray-600">No articles found in this category.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default ArticlePage