import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { ArrowLeft } from 'lucide-react';

const ArticleDetail = ({ article, onBack }) => {
  return (
    <div className="min-h-screen bg-stone-50">
      <Header />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-stone-700 hover:text-stone-900 mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Articles
        </button>
        
        <div className="mb-4">
          <span className="text-xs uppercase tracking-wider bg-stone-900 text-white px-2 py-1">
            {article.category}
          </span>
        </div>
        
        <h1 className="text-4xl sm:text-5xl leading-tight mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
          {article.title}
        </h1>
        
        <div className="flex items-center gap-4 text-sm text-stone-600 mb-6 pb-6 border-b border-stone-300">
          <span>By {article.author}</span>
          <span>•</span>
          <span>{article.date}</span>
        </div>
        
        <img 
          src={article.image} 
          alt={article.title}
          className="w-full h-96 object-cover rounded mb-8"
        />
        
        <div className="prose prose-lg max-w-none">
          {article.content.split('\n\n').map((paragraph, index) => (
            <p key={index} className="mb-4 text-stone-700 leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ArticleDetail;
