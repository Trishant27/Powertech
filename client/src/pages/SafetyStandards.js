import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const standards = [
  {
    title: 'IS 10000 — DG Set Installation Standards',
    body: 'All diesel generator set installations by Powertech Engineers comply with IS 10000 (Methods of Tests for Internal Combustion Engines) and IS 4722 (Rotating Electrical Machines). Installations include proper foundation design, vibration isolation, and alignment verification.',
  },
  {
    title: 'IS 1554 — PVC Insulated Cables',
    body: 'All electrical cabling used in our installations conforms to IS 1554 for PVC insulated cables and IS 694 for flexible cables, ensuring safe and durable electrical connections.',
  },
  {
    title: 'IS 3043 — Earthing',
    body: 'Earthing systems are designed and installed in accordance with IS 3043 (Code of Practice for Earthing), ensuring personnel safety and equipment protection against fault currents.',
  },
  {
    title: 'IS 1460 — High Speed Diesel',
    body: 'All HSD fuel used and stored in our systems meets IS 1460 specifications. Fuel storage and handling systems comply with PESO (Petroleum and Explosives Safety Organisation) regulations and the Petroleum Act, 1934.',
  },
  {
    title: 'NBC 2016 — National Building Code',
    body: 'DG room construction, ventilation, fire suppression, and access comply with the National Building Code of India 2016, Part 4 (Fire and Life Safety) and Part 8 (Building Services).',
  },
  {
    title: 'CPWD Guidelines — Government Projects',
    body: 'For government and public sector projects, all installations follow Central Public Works Department (CPWD) specifications for electrical and mechanical works.',
  },
  {
    title: 'CPCB Emission Norms',
    body: 'All DG sets installed by Powertech Engineers comply with Central Pollution Control Board (CPCB) emission norms for diesel generator sets. We ensure proper exhaust routing, acoustic enclosures where required, and stack height compliance.',
  },
  {
    title: 'IE Rules 1956 — Indian Electricity Rules',
    body: 'All electrical installations comply with the Indian Electricity Rules, 1956 and the Electricity Act, 2003. Installations are carried out by licensed electrical contractors and inspected by competent authorities.',
  },
  {
    title: 'OISD Standards — Oil Industry Safety',
    body: 'HSD fuel systems, storage tanks, and piping installations comply with Oil Industry Safety Directorate (OISD) standards, particularly OISD-117 (Fire Protection Facilities for Petroleum Depots) and OISD-118 (Layouts for Oil and Gas Installations).',
  },
  {
    title: 'ISO 9001 — Quality Management',
    body: 'Powertech Engineers follows ISO 9001 quality management principles across all project phases — from site survey and design through installation, testing, commissioning, and AMC services.',
  },
  {
    title: 'ISO 14001 — Environmental Management',
    body: 'We are committed to minimising environmental impact through responsible fuel handling, waste management, and emission control practices aligned with ISO 14001 environmental management standards.',
  },
  {
    title: 'OHSAS 18001 / ISO 45001 — Occupational Health & Safety',
    body: 'Site safety practices, PPE requirements, toolbox talks, and incident reporting follow OHSAS 18001 / ISO 45001 occupational health and safety management standards. Zero workplace incidents is our target on every project.',
  },
];

const SafetyStandards = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-charcoal">
      <Navbar />

      {/* Header */}
      <section className="bg-navy border-b border-white/10 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <button onClick={() => navigate('/')}
            className="flex items-center gap-2 text-gray-400 hover:text-orange transition text-sm font-bold uppercase tracking-wider mb-8 group">
            <svg className="w-4 h-4 group-hover:-translate-x-1 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M11 17l-5-5m0 0l5-5m-5 5h12" />
            </svg>
            Back to Home
          </button>
          <div className="inline-flex items-center gap-2 bg-blue-900/40 border border-blue-400/30 px-4 py-2 mb-6">
            <span className="text-blue-300 font-bold text-xs tracking-wider uppercase">Compliance</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
            Safety Standards
          </h1>
          <p className="text-gray-400 text-lg">Standards & codes followed by Powertech Engineers across all projects</p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-8 bg-charcoal border-b border-blue-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-600 text-lg leading-relaxed">
            Powertech Engineers is committed to the highest standards of safety, quality, and regulatory compliance. Every installation is executed in accordance with applicable Indian Standards (IS), national codes, and international best practices. Below is a summary of the key standards and regulations we adhere to.
          </p>
        </div>
      </section>

      {/* Standards Grid */}
      <section className="py-16 bg-charcoal">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          {standards.map((s, i) => (
            <div key={i} className="bg-white border border-blue-100 p-8 flex gap-6">
              <div className="flex-shrink-0 w-10 h-10 bg-orange rounded-full flex items-center justify-center text-white font-black text-sm">
                {i + 1}
              </div>
              <div>
                <h2 className="text-lg font-black text-navy uppercase tracking-tight mb-2">{s.title}</h2>
                <p className="text-gray-600 text-sm leading-relaxed">{s.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-navy border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-black text-white uppercase tracking-tight mb-1">Questions about our safety practices?</h3>
            <p className="text-gray-400 text-sm">Our team is happy to provide documentation for any specific project requirement.</p>
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

export default SafetyStandards;
