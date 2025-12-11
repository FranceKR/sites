import React from 'react';
import TypingAnimation from './TypingAnimation';

const Header = () => {
  const today = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <header className="border-b-4 border-double border-stone-900 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Top info bar */}
        <div className="flex justify-between items-center text-xs sm:text-sm text-stone-600 mb-4">
          <div className="flex items-center gap-4">
            <span>{today}</span>
            <span className="hidden sm:inline">Vol. I, No. 1</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="hidden sm:inline">Portfolio Edition</span>
            <span>Free</span>
          </div>
        </div>

        {/* Typing animation & subtitle */}
        <div className="text-center border-y border-stone-900 py-6">
          <TypingAnimation />
          <p className="text-xs sm:text-sm text-stone-600 mt-2 italic tracking-widest">
            Data Engineer
          </p>
        </div>

        {/* Optional test banner */}
        <div className="bg-red-500 text-white p-4 text-center font-bold">TEST</div>

        {/* Navigation */}
        <nav className="mt-4">
          <ul className="flex justify-center items-center space-x-6 text-xs sm:text-sm uppercase tracking-wider">
            <li>
              <a
                href="#about"
                className="text-stone-900 hover:text-stone-600 transition-colors no-underline"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#work"
                className="text-stone-900 hover:text-stone-600 transition-colors no-underline hidden sm:inline"
              >
                Work
              </a>
            </li>
            <li>
              <a
                href="#articles"
                className="text-stone-900 hover:text-stone-600 transition-colors no-underline"
              >
                Articles
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-stone-900 hover:text-stone-600 transition-colors no-underline"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
