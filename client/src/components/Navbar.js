import React, { useState, useEffect } from 'react';

const SECTIONS = ['home', 'services', 'about', 'contact'];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Scroll-based active section detection
  useEffect(() => {
    const navHeight = 80;
    const triggerOffset = navHeight + Math.round(window.innerHeight * 0.35);

    const handleScroll = () => {
      const scrollY = window.scrollY + triggerOffset;
      let current = 'home';
      SECTIONS.forEach((id) => {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollY) {
          current = id;
        }
      });
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const handleWhatsApp = () => {
    window.open(
      'https://wa.me/917083964914?text=Hi%20Powertech,%20I%20would%20like%20to%20inquire%20about%20your%20services',
      '_blank'
    );
  };

  return (
    <nav className="bg-navy text-white sticky top-0 z-50 border-b border-white/10 shadow-industrial">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

          {/* Logo */}
          <div className="flex-shrink-0">
            <button onClick={() => scrollToSection('home')} className="flex items-center gap-2">
              <img
                src="/Powertech-logo.png"
                alt="Powertech Logo"
                className="h-10 w-auto object-contain"
                style={{ animation: 'logoPulse 3s ease-in-out infinite' }}
                onError={(e) => { e.target.style.display = 'none'; }}
              />
              <span className="text-2xl font-black tracking-tight">
                POWER<span className="text-orange">TECH</span>
                <span className="text-white/50 text-sm font-bold">.co</span>
              </span>
            </button>
          </div>

          {/* Desktop Menu - Center */}
          <div className="hidden lg:flex items-center space-x-8">
            {SECTIONS.map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`text-sm font-bold tracking-wider uppercase transition-colors duration-200 flex flex-col items-center gap-1 ${
                  activeSection === section ? 'text-orange' : 'text-white hover:text-orange'
                }`}
              >
                <span>{section}</span>
                {/* Underline: always rendered, slides in/out with scaleX */}
                <span
                  style={{
                    display: 'block',
                    height: '2px',
                    width: '100%',
                    backgroundColor: '#FF6B00',
                    borderRadius: '1px',
                    transform: activeSection === section ? 'scaleX(1)' : 'scaleX(0)',
                    transition: 'transform 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
                    transformOrigin: 'center',
                  }}
                />
              </button>
            ))}
          </div>

          {/* Desktop Utility - Right */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={handleWhatsApp}
              className="p-2 hover:bg-white/5 rounded transition"
              title="WhatsApp"
            >
              <svg className="w-5 h-5 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-orange hover:bg-orange/90 text-white font-bold px-6 py-3 text-sm tracking-wider uppercase transition shadow-lg"
            >
              GET IN TOUCH
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none p-2"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-charcoal border-t border-white/10">
          <div className="px-4 pt-2 pb-3 space-y-1">
            {SECTIONS.map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`block w-full text-left px-4 py-3 font-bold tracking-wider uppercase text-sm transition ${
                  activeSection === section
                    ? 'text-orange bg-white/5'
                    : 'text-white hover:bg-white/5'
                }`}
              >
                {section}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left px-4 py-3 bg-orange hover:bg-orange/90 text-white font-bold tracking-wider uppercase text-sm transition mt-2"
            >
              GET IN TOUCH
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
