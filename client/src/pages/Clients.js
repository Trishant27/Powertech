import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const clients = [
  {
    name: 'Reliance Digital',
    logo: '/images/icons/Reliance digital logo.png',
    description: 'DG set installation and electrical integration for Reliance Digital retail stores across Maharashtra.',
    industry: 'Retail & Electronics',
    website: 'https://www.reliancedigital.in',
  },
  {
    name: 'NTT',
    logo: '/images/icons/NTT logo.png',
    description: 'Power backup infrastructure and HSD fuel systems for NTT data centre facilities.',
    industry: 'Data Centres & Telecom',
    website: 'https://www.global.ntt',
  },
  {
    name: 'Ctrl S',
    logo: '/images/icons/ctrls logo.png',
    description: 'Critical DG set commissioning and AMC services for CtrlS hyperscale data centre operations.',
    industry: 'Data Centres',
    website: 'https://www.ctrls.in',
  },
  {
    name: 'Digital Edge',
    logo: '/images/icons/Digital edge logo.png',
    description: 'Electrical integration and mechanical services supporting Digital Edge data centre infrastructure projects.',
    industry: 'Data Centres & Technology',
    website: 'https://www.digitaledgedc.com',
  },
  {
    name: 'PDG',
    logo: '/images/icons/PDG Logo.png',
    description: 'Turnkey DG set installation, piping systems, and unloading & shifting services for PDG projects.',
    industry: 'Power & Infrastructure',
    website: 'https://princetondg.com/locations/india/',
  },
  {
    name: 'Nestlé',
    logo: '/images/icons/Nestle Logo.png',
    description: 'HSD fuel systems and DG piping for Nestlé manufacturing and distribution facilities in India.',
    industry: 'FMCG & Manufacturing',
    website: 'https://www.nestle.in',
  },
  {
    name: 'Oberoi Realty',
    logo: '/images/icons/oberoi realty logo.png',
    description: 'Power infrastructure, DG set installation, and electrical integration for Oberoi Realty premium residential and commercial developments.',
    industry: 'Real Estate & Construction',
    website: 'https://www.oberoirealty.com',
  },
];

const ClientCard = ({ client }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="bg-white border border-blue-100 p-8 hover:border-orange hover:shadow-lg transition group">
      {/* Logo */}
      <div className="flex items-center gap-4 mb-6">
        <div className="w-16 h-16 flex items-center justify-center bg-charcoal border border-blue-100 p-2 flex-shrink-0">
          {client.logo && !imgError ? (
            <img
              src={client.logo}
              alt={`${client.name} logo`}
              className="w-full h-full object-contain"
              onError={() => setImgError(true)}
            />
          ) : (
            /* Fallback: initials */
            <span className="text-navy font-black text-xl">
              {client.name.split(' ').map(w => w[0]).join('').slice(0, 2)}
            </span>
          )}
        </div>
        <div>
          <h3 className="text-xl font-black text-navy uppercase tracking-tight">
            {client.name}
          </h3>
          <span className="text-xs font-bold text-orange uppercase tracking-wider">
            {client.industry}
          </span>
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-500 text-sm leading-relaxed mb-6">
        {client.description}
      </p>

      {/* Website link */}
      {client.website && (
        <a
          href={client.website}
          target="_blank"
          rel="noopener noreferrer"
          className="text-orange hover:text-navy font-bold text-xs uppercase tracking-wider flex items-center gap-1 transition"
        >
          Visit Website
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      )}
    </div>
  );
};

const Clients = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-charcoal">
      <Navbar />

      {/* Header */}
      <section className="bg-navy border-b border-white/10 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-gray-400 hover:text-orange transition text-sm font-bold uppercase tracking-wider mb-10 group"
          >
            <svg className="w-4 h-4 group-hover:-translate-x-1 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M11 17l-5-5m0 0l5-5m-5 5h12" />
            </svg>
            Back to Home
          </button>
          <div className="inline-flex items-center gap-2 bg-blue-900/40 border border-blue-400/30 px-4 py-2 mb-6">
            <span className="text-blue-300 font-bold text-xs tracking-wider uppercase">Our Clients</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight mb-6">
            TRUSTED BY <span style={{ color: '#60A5FA' }}>INDUSTRY LEADERS</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl leading-relaxed">
            From Fortune 500 companies to India's leading real estate developers — Powertech Engineers has delivered mission-critical power infrastructure across industries.
          </p>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-white border-b border-blue-100 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 gap-8 text-center">
            {[
              { value: '7+', label: 'Major Clients' },
              { value: '1000+', label: 'DG Installs' },
              { value: '15+', label: 'Years Experience' },
            ].map((s, i) => (
              <div key={i}>
                <div className="text-3xl font-black text-navy mb-1">{s.value}</div>
                <div className="text-xs text-gray-500 font-bold uppercase tracking-wider">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Grid */}
      <section className="py-16 bg-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {clients.map((client) => (
              <ClientCard key={client.name} client={client} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-navy border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-1">
              Want to work with us?
            </h3>
            <p className="text-gray-400">Join our growing list of satisfied clients.</p>
          </div>
          <button
            onClick={() => { navigate('/'); setTimeout(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }), 150); }}
            className="flex-shrink-0 bg-orange hover:bg-blue-700 text-white font-bold px-8 py-4 text-sm tracking-wider uppercase transition flex items-center gap-2 group btn-3d"
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

export default Clients;
