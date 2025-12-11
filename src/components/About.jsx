import { Code2, Palette, Briefcase, Mail } from 'lucide-react';

export default function About() {
  const sections = [
    {
      icon: Code2,
      title: 'Engineering',
      content: 'Specialized in building robust data pipelines, ETL processes, and scalable backend systems using modern tools like Python, SQL, Spark, and cloud platforms.'
    },
    {
      icon: Palette,
      title: 'Design',
      content: 'Creating intuitive interfaces and compelling visual experiences with attention to typography, layout, and user-centered design principles.'
    },
    {
      icon: Briefcase,
      title: 'Experience',
      content: 'Years of professional experience across startups and enterprises, delivering data solutions that drive business decisions and user engagement.'
    },
    {
      icon: Mail,
      title: 'Connect',
      content: 'Available for consulting, collaboration, and interesting conversations about data, design, and technology.',
      cta: true
    }
  ];

  return (
    <section id="about" className="mb-20">
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-4xl sm:text-5xl font-serif whitespace-nowrap" style={{ fontFamily: 'Playfair Display, serif' }}>
          About
        </h2>
        <div className="flex-1 h-1 bg-stone-900"></div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {sections.map((section, i) => (
          <div key={i}>
            <section.icon className="w-10 h-10 text-stone-900 mb-4" />
            <h3 className="text-2xl font-serif mb-4 pb-2 border-b-2 border-stone-900 inline-block" style={{ fontFamily: 'Playfair Display, serif' }}>
              {section.title}
            </h3>
            <p className="text-sm text-stone-700 leading-relaxed mb-6">
              {section.content}
            </p>
            {section.cta && (
              <a href="mailto:hello@francekhalil.com" className="inline-block bg-stone-900 text-white px-6 py-3 text-xs font-bold uppercase tracking-wider hover:bg-stone-700 transition-colors">
                Get in Touch
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}