import React from 'react';

const Footer = () => {
  return (
    <footer className="border-t-4 border-double border-stone-900 bg-white mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
          <div>
            <h4 className="text-sm uppercase tracking-wider border-b border-stone-900 pb-1 mb-3">
              Quick Links
            </h4>
            <ul className="text-sm space-y-2 text-stone-700">
              <li><a href="#about" className="hover:text-stone-900 transition-colors">About</a></li>
              <li><a href="#work" className="hover:text-stone-900 transition-colors">Portfolio</a></li>
              <li><a href="#articles" className="hover:text-stone-900 transition-colors">Articles</a></li>
              <li><a href="#contact" className="hover:text-stone-900 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm uppercase tracking-wider border-b border-stone-900 pb-1 mb-3">
              Connect
            </h4>
            <ul className="text-sm space-y-2 text-stone-700">
              <li><a href="#" className="hover:text-stone-900 transition-colors">LinkedIn</a></li>
              <li><a href="#" className="hover:text-stone-900 transition-colors">GitHub</a></li>
              <li><a href="#" className="hover:text-stone-900 transition-colors">Twitter</a></li>
              <li><a href="#" className="hover:text-stone-900 transition-colors">Dribbble</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm uppercase tracking-wider border-b border-stone-900 pb-1 mb-3">
              Subscribe
            </h4>
            <p className="text-sm text-stone-700 mb-3">
              Get updates on new articles and projects delivered to your inbox.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 border border-stone-300 px-3 py-2 text-sm focus:outline-none focus:border-stone-900"
              />
              <button 
                type="submit"
                className="bg-stone-900 text-white px-4 py-2 text-sm uppercase tracking-wider hover:bg-stone-700 transition-colors"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-stone-300 pt-6 text-center text-xs text-stone-600">
          <p>© 2025 France Khalil. All rights reserved.</p>
          <p className="mt-1 italic">Designed and developed with attention to detail.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
