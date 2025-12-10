import React, { useState } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ArticleGrid from './components/ArticleGrid';
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';
import ArticleDetail from './components/ArticleDetail';

export default function App() {
  const [selectedArticle, setSelectedArticle] = useState(null);

  if (selectedArticle) {
    return (
      <ArticleDetail 
        article={selectedArticle} 
        onBack={() => setSelectedArticle(null)} 
      />
    );
  }

  return (
    <div className="min-h-screen bg-stone-50">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <HeroSection />
        <div className="border-t-4 border-double border-stone-900 my-8" />
        <ArticleGrid onArticleClick={setSelectedArticle} />
        <div className="border-t-4 border-double border-stone-900 my-8" />
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
}