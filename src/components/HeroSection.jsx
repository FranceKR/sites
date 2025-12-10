import React from 'react';

const HeroSection = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-12 gap-8">
      <div className="lg:col-span-12">
        <div className="mb-2">
          <span className="text-xs uppercase tracking-wider border-b border-stone-900 pb-1">
            Featured Story
          </span>
        </div>
        <h2 className="text-4xl sm:text-5xl md:text-6xl leading-tight mb-4">
          Creative Developer & Designer Launches New Portfolio Platform
        </h2>
        <p className="text-lg mb-4 text-stone-700">
          In a bold move to showcase years of experience and innovative projects, a new personal 
          website debuts with a unique newspaper-inspired design. The platform aims to revolutionize 
          how professionals present their work online.
        </p>
        <p className="mb-4 text-stone-700">
          The website features a distinctive editorial layout that breaks away from conventional portfolio 
          designs, offering visitors an engaging and memorable browsing experience. Each section has been 
          carefully crafted to tell a compelling story about the creator's journey and expertise.
        </p>
        <p className="text-stone-700">
          "I wanted something different," the creator explains. "Something that would stand out and 
          reflect my appreciation for timeless design and great typography." The result is a harmonious 
          blend of classic newspaper aesthetics with modern web capabilities.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
