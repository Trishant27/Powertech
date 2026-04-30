import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import services from '../data/servicesData';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// ============================================================
// HOW TO ADD IMAGES:
// Drop your images into:
//   client/public/images/services/<slug>/
// Name them anything: 01.jpg, site-photo.png, work1.webp etc.
// Then register them in the imageMap below.
// ============================================================

const imageMap = {
  'dg-set-installation': [
    // Add image filenames here once you have them, e.g.:
    // '/images/services/dg-set-installation/01.jpg',
    // '/images/services/dg-set-installation/02.jpg',
  ],
  'dg-piping-systems': [
    // '/images/services/dg-piping-systems/01.jpg',
  ],
  'electrical-integration': [
    // '/images/services/electrical-integration/01.jpg',
  ],
  'mechanical-services': [
    // '/images/services/mechanical-services/01.jpg',
  ],
  'hsd-fuel-systems': [
    // '/images/services/hsd-fuel-systems/01.jpg',
  ],
  'unloading-shifting': [
    // '/images/services/unloading-shifting/01.jpg',
  ],
};

const ServiceDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [lightbox, setLightbox] = useState(null); // index of open image

  const service = services.find((s) => s.slug === slug);
  const images = imageMap[slug] || [];

  // If slug doesn't match any service, go back home
  if (!service) {
    return (
      <div className="min-h-screen bg-charcoal flex items-center justify-center">
        <div className="text-center">
          <p className="text-white text-xl mb-4">Service not found.</p>
          <button
            onClick={() => navigate('/')}
            className="bg-orange text-white font-bold px-6 py-3 uppercase tracking-wider"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-charcoal">
      <Navbar />

      {/* Hero Banner */}
      <section className="bg-navy border-b border-white/10 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back button */}
          <button
            onClick={() => {
              navigate('/');
              setTimeout(() => {
                document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
              }, 150);
            }}
            className="flex items-center gap-2 text-gray-400 hover:text-orange transition text-sm font-bold uppercase tracking-wider mb-10 group"
          >
            <svg className="w-4 h-4 group-hover:-translate-x-1 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M11 17l-5-5m0 0l5-5m-5 5h12" />
            </svg>
            All Services
          </button>

          <div className="inline-flex items-center gap-2 bg-orange/10 border border-orange/30 px-4 py-2 mb-6">
            <span className="text-orange font-bold text-xs tracking-wider uppercase">Technical Service</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight mb-6">
            {service.title}
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl leading-relaxed">
            {service.fullDescription}
          </p>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-14 bg-darkGrey border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-black text-white uppercase tracking-tight mb-8">
            What We Cover
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {service.highlights.map((point, i) => (
              <div key={i} className="flex items-start gap-3 bg-navy border border-white/10 px-5 py-4">
                <span className="mt-1 flex-shrink-0 w-2 h-2 bg-orange rounded-full"></span>
                <span className="text-gray-300 font-medium">{point}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-16 bg-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-black text-white uppercase tracking-tight mb-10">
            Our Work
          </h2>

          {images.length === 0 ? (
            /* Placeholder grid shown until real images are added */
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[1, 2, 3, 4, 5, 6].map((n) => (
                <div
                  key={n}
                  className="aspect-video bg-darkGrey border border-white/10 flex flex-col items-center justify-center gap-3"
                >
                  <svg className="w-10 h-10 text-white/20" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span className="text-white/20 text-xs font-bold uppercase tracking-wider">
                    Image coming soon
                  </span>
                </div>
              ))}
            </div>
          ) : (
            /* Real image grid with lightbox */
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {images.map((src, i) => (
                <button
                  key={i}
                  onClick={() => setLightbox(i)}
                  className="aspect-video overflow-hidden border border-white/10 hover:border-orange/50 transition group focus:outline-none"
                >
                  <img
                    src={src}
                    alt={`${service.title} - ${i + 1}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                  />
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-orange transition"
            onClick={() => setLightbox(null)}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Prev */}
          {lightbox > 0 && (
            <button
              className="absolute left-4 text-white hover:text-orange transition"
              onClick={(e) => { e.stopPropagation(); setLightbox(lightbox - 1); }}
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}

          <img
            src={images[lightbox]}
            alt={`${service.title} - ${lightbox + 1}`}
            className="max-h-[85vh] max-w-[90vw] object-contain"
            onClick={(e) => e.stopPropagation()}
          />

          {/* Next */}
          {lightbox < images.length - 1 && (
            <button
              className="absolute right-4 text-white hover:text-orange transition"
              onClick={(e) => { e.stopPropagation(); setLightbox(lightbox + 1); }}
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}

          <div className="absolute bottom-4 text-white/50 text-sm">
            {lightbox + 1} / {images.length}
          </div>
        </div>
      )}

      {/* CTA */}
      <section className="py-14 bg-navy border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-1">
              Interested in this service?
            </h3>
            <p className="text-gray-400">Our team will get back to you within 24 hours.</p>
          </div>
          <button
            onClick={() => { navigate('/'); setTimeout(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }), 100); }}
            className="flex-shrink-0 bg-orange hover:bg-orange/90 text-white font-bold px-8 py-4 text-sm tracking-wider uppercase transition flex items-center gap-2 group"
          >
            GET IN TOUCH
            <svg className="w-5 h-5 group-hover:translate-x-1 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServiceDetail;
