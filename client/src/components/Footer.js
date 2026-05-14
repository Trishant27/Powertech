import React, { useEffect, useRef, useState } from 'react';
import useParallax3D from './useParallax3D';

const Footer = () => {
  const footerElRef = useRef(null);
  const [visible, setVisible] = useState(false);

  const { ref: parallaxRef, style: parallaxStyle } = useParallax3D({
    rotateX: 1,
    translateY: 8,
    speed: 0.3,
  });

  const setRefs = (el) => {
    footerElRef.current = el;
    parallaxRef.current = el;
  };

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
    if (footerElRef.current) observer.observe(footerElRef.current);
    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer
      className="bg-navy border-t border-white/10 text-white py-12 perspective-section"
      ref={setRefs}
      style={parallaxStyle}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
          style={{ transformStyle: 'preserve-3d' }}
        >
          {/* Company Info */}
          <div
            className={visible ? 'animate-3d-entrance' : 'opacity-0'}
            style={{
              animationDelay: '0.1s',
              transform: 'translateZ(10px)',
            }}
          >
            <div className="flex items-center gap-2 mb-4">
              <img
                src="/Powertech-logo.png"
                alt="Powertech Logo"
                className="h-10 w-auto object-contain"
              />
              <span className="text-xl font-black tracking-tight">
                POWER<span className="text-orange">TECH</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Industrial-grade power solutions engineered for zero downtime.
            </p>
            <div className="text-xs text-gray-500 uppercase tracking-wider font-bold">
              IND-CONTRACTOR
            </div>
          </div>

          {/* Quick Links */}
          <div
            className={visible ? 'animate-3d-entrance' : 'opacity-0'}
            style={{
              animationDelay: '0.2s',
              transform: 'translateZ(15px)',
            }}
          >
            <h4 className="text-sm font-black uppercase tracking-wider mb-4 text-blue-400">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('home')}
                  className="text-gray-400 hover:text-orange transition text-sm"
                  style={{ transition: 'transform 0.2s ease, color 0.2s' }}
                  onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateX(4px) translateZ(5px)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateX(0) translateZ(0)'; }}
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-gray-400 hover:text-orange transition text-sm"
                  style={{ transition: 'transform 0.2s ease, color 0.2s' }}
                  onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateX(4px) translateZ(5px)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateX(0) translateZ(0)'; }}
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-gray-400 hover:text-orange transition text-sm"
                  style={{ transition: 'transform 0.2s ease, color 0.2s' }}
                  onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateX(4px) translateZ(5px)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateX(0) translateZ(0)'; }}
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-400 hover:text-orange transition text-sm"
                  style={{ transition: 'transform 0.2s ease, color 0.2s' }}
                  onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateX(4px) translateZ(5px)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateX(0) translateZ(0)'; }}
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div
            className={visible ? 'animate-3d-entrance' : 'opacity-0'}
            style={{
              animationDelay: '0.3s',
              transform: 'translateZ(20px)',
            }}
          >
            <h4 className="text-sm font-black uppercase tracking-wider mb-4 text-blue-400">Services</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>DG Set Installation</li>
              <li>DG Piping Systems</li>
              <li>Electrical Integration</li>
              <li>Mechanical Services</li>
              <li>HSD Fuel Systems</li>
              <li>AMC Services</li>
            </ul>
          </div>

          {/* Contact */}
          <div
            className={visible ? 'animate-3d-entrance' : 'opacity-0'}
            style={{
              animationDelay: '0.4s',
              transform: 'translateZ(25px)',
            }}
          >
            <h4 className="text-sm font-black uppercase tracking-wider mb-4 text-blue-400">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a href="mailto:powertechengineer82@gmail.com" className="text-gray-400 hover:text-orange transition text-sm break-all">
                  powertechengineer82@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+919920836944" className="text-gray-400 hover:text-orange transition text-sm">
                  +91 99208 36944
                </a>
              </li>
              <li>
                <a href="https://wa.me/919920836944" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-green-500 hover:text-green-400 transition text-sm">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Powertech. All rights reserved.
            </div>
            <div className="flex gap-6 text-xs text-gray-500 uppercase tracking-wider">
              <button
                className="hover:text-orange transition"
                style={{ transition: 'transform 0.2s, color 0.2s' }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateZ(5px) scale(1.05)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateZ(0) scale(1)'; }}
              >
                MSDS
              </button>
              <button
                className="hover:text-orange transition"
                style={{ transition: 'transform 0.2s, color 0.2s' }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateZ(5px) scale(1.05)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateZ(0) scale(1)'; }}
              >
                Safety Standards
              </button>
              <button
                className="hover:text-orange transition"
                style={{ transition: 'transform 0.2s, color 0.2s' }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateZ(5px) scale(1.05)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateZ(0) scale(1)'; }}
              >
                Compliance
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
