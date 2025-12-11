import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Articles from './components/Articles';
import About from './components/About';
import Footer from './components/Footer';
import ArticleDetail from './components/Articles';
import Divider from './components/Divider';
import { articles } from './data/articles';

export default function App() {
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [displayedArticles, setDisplayedArticles] = useState(3);

  if (selectedArticle) {
    return <ArticleDetail article={selectedArticle} onBack={() => setSelectedArticle(null)} />;
  }

  return (
    <div className="min-h-screen bg-stone-50">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <Hero />
        <Divider />
        <Articles 
          articles={articles.slice(0, displayedArticles)} 
          onArticleClick={setSelectedArticle}
          showMore={displayedArticles < articles.length}
          onShowMore={() => setDisplayedArticles(prev => Math.min(prev + 3, articles.length))}
        />
        <Divider />
        <About />
      </main>
      <Footer />
    </div>
  );
}