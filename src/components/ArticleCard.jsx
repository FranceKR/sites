import React from 'react';

const ArticleCard = ({ article, onClick }) => {
  return (
    <article 
      onClick={onClick}
      className="border-b border-stone-300 pb-6 cursor-pointer hover:opacity-80 transition-opacity"
    >
      <div className="mb-3">
        <img 
          src={article.image} 
          alt={article.title}
          className="w-full h-48 object-cover rounded"
        />
      </div>
      <div className="mb-2">
        <span className="text-xs uppercase tracking-wider bg-stone-900 text-white px-2 py-1">
          {article.category}
        </span>
      </div>
      <h3 className="text-2xl mb-2 leading-tight">
        {article.title}
      </h3>
      <p className="text-sm text-stone-700 mb-3">
        {article.excerpt}
      </p>
      <div className="flex justify-between items-center text-xs text-stone-600">
        <span>By {article.author}</span>
        <span>{article.date}</span>
      </div>
    </article>
  );
};

export default ArticleCard;
