import React from 'react'

function ArticleCard({ title, excerpt, author, date, category, readTime, image }) {
  return (
    <article className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm font-medium text-red-600">{category}</span>
          <span className="text-sm text-gray-500">{readTime}</span>
        </div>
        <h3 className="text-xl font-bold mb-2 text-gray-800 hover:text-red-600 transition-colors">
          <a href="#">{title}</a>
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{excerpt}</p>
        <div className="flex items-center justify-between">
          <div className="text-sm text-gray-500">
            By <span className="font-medium text-gray-700">{author}</span>
          </div>
          <time className="text-sm text-gray-500">{date}</time>
        </div>
      </div>
    </article>
  )
}

export default ArticleCard