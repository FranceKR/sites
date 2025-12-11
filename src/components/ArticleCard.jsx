export default function ArticleCard({ article, onClick }) {
  return (
    <article onClick={onClick} className="cursor-pointer group border-b-2 border-stone-200 pb-6 hover:border-stone-900 transition-colors">
      <span className="inline-block bg-stone-900 text-white px-3 py-1 text-xs font-bold uppercase tracking-wider mb-4">
        {article.category}
      </span>
      <h3 className="text-2xl sm:text-3xl leading-tight mb-3 font-serif group-hover:text-stone-600 transition-colors" style={{ fontFamily: 'Playfair Display, serif' }}>
        {article.title}
      </h3>
      <p className="text-stone-700 leading-relaxed mb-4">
        {article.excerpt}
      </p>
      <div className="flex justify-between items-center text-xs uppercase tracking-wider text-stone-600 pt-3 border-t border-stone-200">
        <span>{article.date}</span>
        <span>{article.readTime}</span>
      </div>
    </article>
  );
}