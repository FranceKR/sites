import { Linkedin, Github, Twitter, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t-4 border-double border-stone-900 bg-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider border-b-2 border-stone-900 pb-2 mb-4">
              Navigate
            </h4>
            <ul className="space-y-2 text-sm text-stone-700">
              {['About', 'Articles', 'Work', 'Contact'].map(item => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="hover:text-stone-900 transition-colors inline-flex items-center gap-2">
                    <span className="text-stone-400">→</span> {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider border-b-2 border-stone-900 pb-2 mb-4">
              Connect
            </h4>
            <ul className="space-y-2 text-sm text-stone-700">
              {[
                { name: 'LinkedIn', icon: Linkedin },
                { name: 'GitHub', icon: Github },
                { name: 'Twitter', icon: Twitter },
                { name: 'Email', icon: Mail }
              ].map(item => (
                <li key={item.name}>
                  <a href="#" className="hover:text-stone-900 transition-colors inline-flex items-center gap-2">
                    <item.icon className="w-4 h-4" /> {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="sm:col-span-2">
            <h4 className="text-sm font-bold uppercase tracking-wider border-b-2 border-stone-900 pb-2 mb-4">
              Subscribe
            </h4>
            <p className="text-sm text-stone-700 mb-4 leading-relaxed">
              Get the latest articles and insights delivered directly to your inbox.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="your.email@example.com"
                className="flex-1 border-2 border-stone-300 px-4 py-2 text-sm focus:outline-none focus:border-stone-900 transition-colors"
              />
              <button className="bg-stone-900 text-white px-6 py-2 text-xs font-bold uppercase tracking-wider hover:bg-stone-700 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-t-2 border-stone-200 pt-6 text-center">
          <p className="text-xs text-stone-600 uppercase tracking-wider mb-1">
            © 2025 France Khalil. All Rights Reserved.
          </p>
          <p className="text-xs text-stone-500 italic font-serif" style={{ fontFamily: 'Playfair Display, serif' }}>
            Designed and crafted with meticulous attention to detail.
          </p>
        </div>
      </div>
    </footer>
  );
}