import { ChevronRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="mb-20">
      <div className="flex items-center gap-4 mb-8">
        <span className="bg-stone-900 text-white px-4 py-2 text-xs font-bold uppercase tracking-wider">
          Featured
        </span>
        <div className="flex-1 h-px bg-stone-300"></div>
      </div>

      <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
        <div className="lg:col-span-8">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.05] mb-6 font-serif" style={{ fontFamily: 'Playfair Display, serif' }}>
            Building the Future of Data Infrastructure
          </h2>
          <div className="border-l-4 border-stone-900 pl-6 mb-6">
            <p className="text-xl sm:text-2xl text-stone-700 leading-relaxed font-light">
              Crafting scalable data pipelines and elegant digital experiences at the intersection of engineering and design.
            </p>
          </div>
        </div>

        <div className="lg:col-span-4 space-y-6 text-stone-700">
          <p className="leading-relaxed">
            With a unique blend of technical expertise in data engineering and a keen eye for design, I create solutions that are both powerful and beautiful.
          </p>
          <p className="leading-relaxed">
            This portfolio serves as a digital newspaper, chronicling projects, insights, and explorations in technology and design—because the best work tells a story.
          </p>
          <div className="pt-4">
            <a href="#articles" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-stone-900 hover:gap-3 transition-all">
              Read More <ChevronRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}