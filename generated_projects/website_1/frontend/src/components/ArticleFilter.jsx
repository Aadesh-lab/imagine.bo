import React from 'react'

function ArticleFilter({ categories, selectedCategory, onCategoryChange }) {
  return (
    <div className="mb-8">
      <div className="flex flex-wrap gap-2 justify-center">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onCategoryChange(category)}
            className={`px-4 py-2 rounded-full font-medium transition-colors ${
              selectedCategory === category
                ? 'bg-red-600 text-white'
                : 'bg-white text-gray-700 hover:bg-red-100'
            }`}
          >
            {category === 'all' ? 'All Articles' : category}
          </button>
        ))}
      </div>
    </div>
  )
}

export default ArticleFilter