import ArticleCard from './ArticleCard';

export default function Articles({ articles, onArticleClick, showMore, onShowMore }) {
  return (
    <section id="articles" className="mb-20">
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-4xl sm:text-5xl font-serif whitespace-nowrap" style={{ fontFamily: 'Playfair Display, serif' }}>
          Latest Articles
        </h2>
        <div className="flex-1 h-1 bg-stone-900"></div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
        {articles.map(article => (
          <ArticleCard key={article.id} article={article} onClick={() => onArticleClick(article)} />
        ))}
      </div>

      {showMore && (
        <div className="mt-12 text-center">
          <button 
            onClick={onShowMore}
            className="bg-stone-900 text-white px-8 py-3 text-xs font-bold uppercase tracking-wider hover:bg-stone-700 transition-colors"
          >
            Load More Articles
          </button>
        </div>
      )}
    </section>
  );
}