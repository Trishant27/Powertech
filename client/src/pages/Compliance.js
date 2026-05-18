import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const areas = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: 'Statutory Licences & Registrations',
    items: [
      'Registered electrical contractor with State Electricity Board',
      'PESO licence for petroleum storage and handling',
      'GST registered business entity',
      'MSME registered enterprise',
      'Labour law compliances — PF, ESIC, and Contract Labour Act',
    ],
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
      </svg>
    ),
    title: 'Environmental Compliance',
    items: [
      'CPCB emission norms for DG sets (all kVA ratings)',
      'Proper exhaust stack height as per CPCB guidelines',
      'Acoustic enclosures for noise-sensitive installations',
      'Hazardous waste disposal through authorised vendors',
      'No discharge of fuel or oil into drains or soil',
    ],
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
      </svg>
    ),
    title: 'Workplace Safety Compliance',
    items: [
      'Factories Act, 1948 — safe working conditions',
      'Construction Workers (Regulation of Employment) Act, 1996',
      'Mandatory PPE for all site personnel',
      'Daily toolbox talks and safety briefings',
      'Incident reporting and near-miss documentation',
      'First aid kits and trained first aiders on all sites',
    ],
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Electrical Safety Compliance',
    items: [
      'Indian Electricity Rules, 1956',
      'Electricity Act, 2003',
      'All work carried out by licensed electrical supervisors',
      'Mandatory electrical testing and certification before energisation',
      'Lockout/Tagout (LOTO) procedures on all live work',
      'Periodic inspection and testing of installations',
    ],
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
      </svg>
    ),
    title: 'Fire Safety Compliance',
    items: [
      'Fire NOC obtained for all fuel storage installations',
      'Fire extinguishers installed as per NBC 2016 norms',
      'Automatic fire suppression systems for critical installations',
      'Fire-rated construction for DG rooms',
      'Emergency evacuation plans for all project sites',
      'Regular fire drills and training for site personnel',
    ],
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
    title: 'Documentation & Record Keeping',
    items: [
      'As-built drawings provided for all installations',
      'Test certificates and commissioning reports',
      'Equipment warranties and OEM documentation',
      'Maintenance logs and service records',
      'Compliance certificates for regulatory submissions',
      'Digital records retained for minimum 7 years',
    ],
  },
];

const Compliance = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-charcoal">
      <Navbar />

      {/* Header */}
      <section className="bg-navy border-b border-white/10 py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <button onClick={() => navigate('/')}
            className="flex items-center gap-2 text-gray-400 hover:text-orange transition text-sm font-bold uppercase tracking-wider mb-8 group">
            <svg className="w-4 h-4 group-hover:-translate-x-1 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M11 17l-5-5m0 0l5-5m-5 5h12" />
            </svg>
            Back to Home
          </button>
          <div className="inline-flex items-center gap-2 bg-blue-900/40 border border-blue-400/30 px-4 py-2 mb-6">
            <span className="text-blue-300 font-bold text-xs tracking-wider uppercase">Legal & Regulatory</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
            Compliance
          </h1>
          <p className="text-gray-400 text-lg">Our commitment to regulatory, environmental, and safety compliance</p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-8 bg-charcoal border-b border-blue-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-600 text-lg leading-relaxed">
            Powertech Engineers maintains full compliance with all applicable Indian laws, regulations, and industry standards. Our compliance framework covers statutory licences, environmental obligations, workplace safety, electrical safety, fire safety, and documentation requirements. We believe that rigorous compliance is not just a legal obligation — it is the foundation of trust with our clients.
          </p>
        </div>
      </section>

      {/* Compliance Areas */}
      <section className="py-16 bg-charcoal">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {areas.map((area, i) => (
              <div key={i} className="bg-white border border-blue-100 p-8 hover:border-orange hover:shadow-md transition">
                <div className="text-orange mb-4">{area.icon}</div>
                <h2 className="text-lg font-black text-navy uppercase tracking-tight mb-4">{area.title}</h2>
                <ul className="space-y-2">
                  {area.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-gray-600">
                      <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 bg-orange rounded-full"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statement */}
      <section className="py-12 bg-white border-y border-blue-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-black text-navy uppercase tracking-tight mb-4">Our Compliance Commitment</h3>
          <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Powertech Engineers conducts regular internal audits, stays updated with regulatory changes, and trains all personnel on compliance requirements. We work transparently with clients, regulatory authorities, and third-party inspectors to ensure every project meets or exceeds applicable standards.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-navy border-t border-white/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-black text-white uppercase tracking-tight mb-1">Need compliance documentation?</h3>
            <p className="text-gray-400 text-sm">We provide full compliance certificates and documentation for all our projects.</p>
          </div>
          <button
            onClick={() => { navigate('/'); setTimeout(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }), 150); }}
            className="flex-shrink-0 bg-orange hover:bg-blue-700 text-white font-bold px-6 py-3 text-sm tracking-wider uppercase transition btn-3d">
            Contact Us
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Compliance;
