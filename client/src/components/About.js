import React, { useEffect, useRef, useState } from 'react';
import ThreeBackground from './ThreeBackground';
import useParallax3D from './useParallax3D';

const About = () => {
  const sectionElRef = useRef(null);
  const [visible, setVisible] = useState(false);

  const { ref: parallaxRef, style: parallaxStyle } = useParallax3D({
    rotateX: 1.5,
    rotateY: 1,
    translateY: 12,
    speed: 0.5,
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (sectionElRef.current) observer.observe(sectionElRef.current);
    return () => observer.disconnect();
  }, []);

  // Merge refs
  const setRefs = (el) => {
    sectionElRef.current = el;
    parallaxRef.current = el;
  };

  return (
    <section
      className="py-20 md:py-28 bg-navy relative overflow-hidden perspective-section"
      ref={setRefs}
      style={parallaxStyle}
    >
      {/* Three.js 3D Background — 'about' variant */}
      <ThreeBackground variant="about" />

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 z-[1]">
        <div className="absolute inset-0" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Image with Badge */}
          <div
            className={`relative ${visible ? 'animate-rotateInY' : 'opacity-0'}`}
            style={{
              animationDelay: '0.2s',
              transformStyle: 'preserve-3d',
            }}
          >
            <div className="relative bg-darkGrey border border-white/10 p-8 aspect-square flex items-center justify-center shadow-3d">
              {/* Rotating 3D wireframe gear icon */}
              <div className="text-center" style={{ transformStyle: 'preserve-3d' }}>
                <div
                  style={{
                    animation: 'floatZ 6s ease-in-out infinite',
                    transformStyle: 'preserve-3d',
                  }}
                >
                  <svg
                    className="w-32 h-32 mx-auto mb-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={1}
                    style={{
                      color: '#60A5FA',
                      filter: 'drop-shadow(0 0 20px rgba(96,165,250,0.4))',
                    }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <div className="text-gray-400 text-sm uppercase tracking-wider">Field Engineer</div>
              </div>
              
              {/* Floating Badge */}
              <div
                className="absolute -bottom-6 -right-6 bg-orange p-6 animate-badge-float"
                style={{ background: '#60A5FA', boxShadow: '0 8px 24px rgba(96,165,250,0.4)' }}
              >
                <div className="text-center">
                  <div
                    className="text-4xl font-black text-white mb-1"
                    style={{ transform: 'translateZ(10px)' }}
                  >
                    0.0%
                  </div>
                  <div
                    className="text-xs text-white uppercase tracking-wider font-bold"
                    style={{ transform: 'translateZ(5px)' }}
                  >
                    Downtime
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div style={{ transformStyle: 'preserve-3d' }}>
            <div
              className={`inline-flex items-center gap-2 bg-blue-900/40 border border-blue-400/30 px-4 py-2 mb-6 ${
                visible ? 'animate-3d-entrance' : 'opacity-0'
              }`}
              style={{ animationDelay: '0.3s' }}
            >
              <span className="text-blue-300 font-bold text-xs tracking-wider uppercase">
                WHY POWERTECH
              </span>
            </div>

            <h2
              className={`text-4xl md:text-5xl font-black text-white mb-6 tracking-tight ${
                visible ? 'animate-3d-entrance' : 'opacity-0'
              }`}
              style={{
                animationDelay: '0.4s',
                transform: 'translateZ(15px)',
                textShadow: '0 4px 20px rgba(0,0,0,0.4)',
              }}
            >
              MACHINED EXCELLENCE<br />
              <span style={{ color: '#60A5FA', textShadow: '0 0 30px rgba(96,165,250,0.3)' }}>
                IN EVERY DETAIL
              </span>
            </h2>

            <p
              className={`text-gray-300 text-lg mb-8 leading-relaxed ${
                visible ? 'animate-3d-entrance' : 'opacity-0'
              }`}
              style={{ animationDelay: '0.5s', transform: 'translateZ(10px)' }}
            >
              Powertech delivers mission-critical power infrastructure with military-grade precision. 
              Our certified engineering team ensures every installation meets the highest standards of 
              reliability and safety.
            </p>

            {/* Bulleted List with 3D Icons */}
            <div className="space-y-4 mb-8">
              {[
                {
                  title: 'ISO Certified Operations',
                  desc: 'Compliance with international safety and quality standards',
                  icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
                },
                {
                  title: '24/7 Emergency Response',
                  desc: 'Round-the-clock technical support and rapid deployment',
                  icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
                },
                {
                  title: 'Turnkey Solutions',
                  desc: 'End-to-end project management from design to commissioning',
                  icon: 'M13 10V3L4 14h7v7l9-11h-7z',
                },
                {
                  title: '100% Safety Record',
                  desc: 'Zero workplace incidents across 500+ installations',
                  icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className={`flex items-start gap-4 ${
                    visible ? 'animate-3d-entrance' : 'opacity-0'
                  }`}
                  style={{
                    animationDelay: `${0.6 + i * 0.1}s`,
                    transformStyle: 'preserve-3d',
                  }}
                >
                  <div
                    className="flex-shrink-0 w-12 h-12 bg-blue-900/40 border border-blue-400/30 flex items-center justify-center transition-transform duration-300"
                    style={{ transform: 'translateZ(15px)' }}
                    onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateZ(25px) rotateY(15deg)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateZ(15px) rotateY(0deg)'; }}
                  >
                    <svg className="w-6 h-6 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg mb-1 uppercase tracking-wide">{item.title}</h4>
                    <p className="text-gray-400">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
