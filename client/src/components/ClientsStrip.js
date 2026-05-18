import React from 'react';
import { useNavigate } from 'react-router-dom';

const logos = [
  { name: 'Reliance Industries', src: '/images/icons/Reliance industries  logo.png' },
  { name: 'NTT',               src: '/images/icons/NTT logo.png' },
  { name: 'Ctrl S',            src: '/images/icons/ctrls logo.png' },
  { name: 'Digital Edge',      src: '/images/icons/Digital edge logo.png' },
  { name: 'PDG',               src: '/images/icons/PDG Logo.png' },
  { name: 'Nestlé',            src: '/images/icons/Nestle Logo.png' },
  { name: 'Oberoi Realty',     src: '/images/icons/oberoi realty logo.png' },
];

const ClientsStrip = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-white border-y border-blue-100 py-14" id="clients-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 px-4 py-2 mb-3">
              <span className="text-orange font-bold text-xs tracking-wider uppercase">
                Trusted Partners
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-black text-navy tracking-tight">
              COLLABORATED WITH <span className="text-orange">INDUSTRY LEADERS</span>
            </h2>
          </div>
          <button
            onClick={() => navigate('/clients')}
            className="flex-shrink-0 flex items-center gap-2 bg-orange hover:bg-blue-700 text-white font-bold px-6 py-3 text-sm tracking-wider uppercase transition btn-3d group"
          >
            View All Clients
            <svg className="w-4 h-4 group-hover:translate-x-1 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </div>

        {/* Logo Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {logos.map((logo) => (
            <button
              key={logo.name}
              onClick={() => navigate('/clients')}
              className="flex items-center justify-center bg-charcoal border border-blue-100 p-4 h-20 hover:border-orange hover:shadow-md transition group"
              title={logo.name}
            >
              <img
                src={logo.src}
                alt={logo.name}
                className="max-h-10 max-w-full object-contain grayscale group-hover:grayscale-0 transition duration-300"
              />
            </button>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ClientsStrip;
