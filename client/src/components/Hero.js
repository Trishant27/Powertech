import React, { useRef, useEffect, useState } from 'react';
import ThreeBackground from './ThreeBackground';

const Hero = () => {
  const sectionRef = useRef(null);
  const [mouseParallax, setMouseParallax] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Mouse parallax for text layers
  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setMouseParallax({ x, y });
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Trigger entrance animation
  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative bg-navy text-white py-24 md:py-32 lg:py-40 overflow-hidden"
      style={{ transformStyle: 'preserve-3d' }}
    >
      {/* Three.js 3D Background */}
      <ThreeBackground variant="hero" />

      {/* Background image with dark blend */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          backgroundImage: 'url("/images/common pages/Frontpagedg.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center right',
          backgroundRepeat: 'no-repeat',
          opacity: 0.12,
        }}
      />
      {/* Dark overlay */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background: 'linear-gradient(to right, rgba(10,13,18,0.97) 0%, rgba(10,13,18,0.92) 40%, rgba(10,13,18,0.75) 65%, rgba(10,13,18,0.45) 100%)',
        }}
      />
      {/* Bottom fade to match page background */}
      <div className="absolute bottom-0 left-0 right-0 h-32 z-[1]"
        style={{ background: 'linear-gradient(to bottom, transparent, #F0F4FF)' }}
      />

      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        style={{ transformStyle: 'preserve-3d' }}
      >
        <div
          className="max-w-4xl"
          style={{ transformStyle: 'preserve-3d' }}
        >
          {/* Badge — deepest 3D layer (z=70) */}
          <div
            className={`inline-flex items-center gap-2 bg-orange/10 border border-orange/30 px-4 py-2 mb-8 ${visible ? 'animate-flipInX' : ''}`}
            style={{
              transform: `translateZ(70px) translate(${mouseParallax.x * -12}px, ${mouseParallax.y * -8}px)`,
              animationDelay: '0.1s',
            }}
          >
            <div className="w-2 h-2 bg-orange rounded-full animate-pulse"></div>
            <span className="text-orange font-bold text-sm tracking-wider uppercase">
              ENGINEERED FOR UPTIME
            </span>
          </div>

          {/* Headline — mid 3D layer (z=50) */}
          <h1
            className={`text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight mb-6 tracking-tight ${visible ? 'animate-3d-entrance' : ''}`}
            style={{
              transform: `translateZ(50px) translate(${mouseParallax.x * -8}px, ${mouseParallax.y * -5}px)`,
              animationDelay: '0.3s',
              textShadow: '0 4px 30px rgba(0,0,0,0.5)',
            }}
          >
            PRECISION DG SET<br />
            INSTALLATIONS &<br />
            <span style={{ color: '#60A5FA', textShadow: '0 0 40px rgba(96,165,250,0.4)' }}>
              ELECTRICAL MASTERY
            </span>
          </h1>

          {/* Subheadline — z=40 */}
          <p
            className={`text-lg md:text-xl text-gray-300 mb-10 max-w-2xl font-medium ${visible ? 'animate-3d-entrance' : ''}`}
            style={{
              transform: `translateZ(40px) translate(${mouseParallax.x * -5}px, ${mouseParallax.y * -3}px)`,
              animationDelay: '0.5s',
            }}
          >
            Engineered for zero downtime. From installation to 24/7 maintenance, we deliver reliability at scale.
          </p>

          {/* CTA Buttons — z=30 */}
          <div
            className={`flex flex-col sm:flex-row gap-4 ${visible ? 'animate-3d-entrance' : ''}`}
            style={{
              transform: `translateZ(30px) translate(${mouseParallax.x * -3}px, ${mouseParallax.y * -2}px)`,
              animationDelay: '0.7s',
            }}
          >
            <button
              onClick={scrollToContact}
              className="bg-orange hover:bg-orange/90 text-white font-bold px-8 py-4 text-sm tracking-wider uppercase transition shadow-industrial flex items-center justify-center gap-2 group btn-3d"
            >
              GET IN TOUCH
            </button>
            <button
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-transparent border-2 border-white/20 hover:border-orange hover:bg-orange/10 text-white font-bold px-8 py-4 text-sm tracking-wider uppercase transition btn-3d"
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
