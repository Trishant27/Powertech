import React from 'react';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="relative bg-navy text-white py-24 md:py-32 lg:py-40 overflow-hidden"
    >
      {/* Background image with dark blend */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("/images/common pages/Frontpagedg.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center right',
          backgroundRepeat: 'no-repeat',
          opacity: 0.5,
        }}
      />
      {/* Dark overlay — heavier on the left (text side), lighter on the right */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: 'linear-gradient(to right, rgba(10,13,18,0.97) 0%, rgba(10,13,18,0.92) 40%, rgba(10,13,18,0.75) 65%, rgba(10,13,18,0.45) 100%)',
        }}
      />
      {/* Bottom fade to match page background */}
      <div className="absolute bottom-0 left-0 right-0 h-32 z-0"
        style={{ background: 'linear-gradient(to bottom, transparent, #121212)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-orange/10 border border-orange/30 px-4 py-2 mb-8">
            <div className="w-2 h-2 bg-orange rounded-full animate-pulse"></div>
            <span className="text-orange font-bold text-sm tracking-wider uppercase">
              ENGINEERED FOR UPTIME
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight mb-6 tracking-tight">
            PRECISION DG SET<br />
            INSTALLATIONS &<br />
            <span className="text-orange">ELECTRICAL MASTERY</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl font-medium">
            Engineered for zero downtime. From installation to 24/7 maintenance, we deliver reliability at scale.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={scrollToContact}
              className="bg-orange hover:bg-orange/90 text-white font-bold px-8 py-4 text-sm tracking-wider uppercase transition shadow-industrial flex items-center justify-center gap-2 group"
            >
              GET IN TOUCH
              <svg className="w-5 h-5 group-hover:translate-x-1 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
            <button
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-transparent border-2 border-white/20 hover:border-orange hover:bg-orange/10 text-white font-bold px-8 py-4 text-sm tracking-wider uppercase transition"
            >
              VIEW CAPABILITIES
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
