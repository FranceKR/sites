import React from 'react';
import ArticleCard from './ArticleCard';
import { articlesDatabase } from '../data/articlesDatabase';

const ArticleGrid = ({ onArticleClick }) => {
  const latestArticles = articlesDatabase.slice(0, 3);

  return (
    <section id="articles">
      <div className="mb-6">
        <h2 className="text-3xl sm:text-4xl border-b-2 border-stone-900 pb-2">
          Latest Articles
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {latestArticles.map((article) => (
          <ArticleCard 
            key={article.id} 
            article={article}
            onClick={() => onArticleClick(article)}
          />
        ))}
      </div>
    </section>
  );
};

export default ArticleGrid;
