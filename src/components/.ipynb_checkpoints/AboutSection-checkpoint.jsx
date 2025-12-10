import React from 'react';
import * as Icons from 'lucide-react'; // Safe import

const AboutSection = () => {
  return (
    <section id="about" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      <div className="border-r-0 md:border-r border-stone-300 md:pr-6">
        <div className="mb-4">
          <Icons.Code2 className="w-8 h-8 mb-2" />
          <h3 className="text-xl border-b border-stone-900 pb-1 mb-3">Development</h3>
        </div>
        <p className="text-sm text-stone-700">
          Specializing in modern web technologies, creating responsive and performant applications 
          that deliver exceptional user experiences across all devices.
        </p>
      </div>

      <div className="border-r-0 lg:border-r border-stone-300 lg:pr-6">
        <div className="mb-4">
          <Icons.Palette className="w-8 h-8 mb-2" />
          <h3 className="text-xl border-b border-stone-900 pb-1 mb-3">Design</h3>
        </div>
        <p className="text-sm text-stone-700">
          Crafting beautiful interfaces with attention to typography, color, and layout. Every pixel 
          serves a purpose in creating cohesive and engaging digital experiences.
        </p>
      </div>

      <div className="border-r-0 md:border-r border-stone-300 md:pr-6">
        <div className="mb-4">
          <Icons.Briefcase className="w-8 h-8 mb-2" />
          <h3 className="text-xl border-b border-stone-900 pb-1 mb-3">Experience</h3>
        </div>
        <p className="text-sm text-stone-700">
          Years of professional experience working with diverse clients and teams, delivering projects 
          ranging from small business websites to enterprise applications.
        </p>
      </div>

      <div>
        <div className="mb-4">
          <Icons.Mail className="w-8 h-8 mb-2" />
          <h3 className="text-xl border-b border-stone-900 pb-1 mb-3">Contact</h3>
        </div>
        <p className="text-sm text-stone-700 mb-4">
          Interested in collaborating? Let's discuss your next project and explore how we can work 
          together to create something remarkable.
        </p>
        <a 
          href="mailto:hello@example.com" 
          className="inline-block bg-stone-900 text-white px-4 py-2 text-sm uppercase tracking-wider hover:bg-stone-700 transition-colors"
        >
          Get In Touch
        </a>
      </div>
    </section>
  );
};

export default AboutSection;
