import { useState, useEffect } from 'react';
import TypingAnimation from './TypingAnimation';

export default function Header() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setDate(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const dateStr = date.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <header className="border-b-4 border-double border-stone-900 bg-white sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Masthead */}
        <div className="border-b border-stone-200 py-3">
          <div className="flex justify-between items-center text-xs text-stone-600">
            <div className="flex items-center gap-3">
              <span className="font-medium">{dateStr}</span>
              <span className="hidden sm:inline text-stone-400">|</span>
              <span className="hidden sm:inline">Vol. I, No. 1</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="hidden md:inline">Portfolio Edition</span>
              <span className="hidden sm:inline text-stone-400">|</span>
              <span className="font-bold uppercase tracking-wider">Free</span>
            </div>
          </div>
        </div>

        {/* Title with Typing Animation */}
        <div className="text-center py-8 border-b border-stone-200">
          <TypingAnimation />
          <div className="flex items-center justify-center gap-4 text-xs sm:text-sm text-stone-600 mt-3">
            <div className="h-px w-12 bg-stone-300"></div>
            <p className="uppercase tracking-[0.3em] font-medium">Data Engineer</p>
            <div className="h-px w-12 bg-stone-300"></div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="py-4">
          <ul className="flex justify-center items-center flex-wrap gap-6 text-xs sm:text-sm uppercase tracking-[0.15em]">
            {['About', 'Articles', 'Work', 'Contact'].map((item, i) => (
              <li key={item} className="flex items-center gap-6">
                {i > 0 && <span className="text-stone-300">•</span>}
                <a href={`#${item.toLowerCase()}`} className="text-stone-700 hover:text-stone-900 font-medium transition-colors">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}