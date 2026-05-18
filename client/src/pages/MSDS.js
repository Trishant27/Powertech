import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const sections = [
  {
    title: '1. Product Identification',
    content: `Powertech Engineers handles and manages the following materials in the course of its operations:

• High-Speed Diesel (HSD) — used as fuel for diesel generator sets
• Lubricating Oils & Greases — used for engine maintenance and servicing
• Coolants & Antifreeze — used in DG set cooling systems
• Battery Electrolyte (Sulphuric Acid Solution) — used in UPS and starter batteries
• Exhaust Gases — by-product of DG set operation

All materials are handled strictly in accordance with manufacturer specifications and applicable Indian regulations.`,
  },
  {
    title: '2. Hazard Identification',
    content: `High-Speed Diesel (HSD):
• Flammable liquid — Flash point approximately 38°C
• Inhalation of vapours may cause dizziness or respiratory irritation
• Prolonged skin contact may cause dermatitis

Lubricating Oils:
• Low flammability under normal conditions
• Skin and eye irritant with prolonged exposure

Battery Electrolyte:
• Corrosive — causes severe burns to skin and eyes
• Releases hydrogen gas during charging — explosion risk in confined spaces

Exhaust Gases:
• Contains carbon monoxide (CO), nitrogen oxides (NOx), and particulate matter
• Toxic in enclosed or poorly ventilated spaces`,
  },
  {
    title: '3. Composition & Ingredients',
    content: `HSD Fuel: Hydrocarbon mixture (C9–C16), sulphur compounds (< 50 ppm as per BS VI norms), additives
Lubricating Oil: Base oil (mineral/synthetic), viscosity improvers, anti-wear additives
Coolant: Ethylene glycol (30–50%), corrosion inhibitors, deionised water
Battery Electrolyte: Sulphuric acid (H₂SO₄) 30–40% in water`,
  },
  {
    title: '4. First Aid Measures',
    content: `Skin Contact: Remove contaminated clothing. Wash affected area with soap and water for at least 15 minutes. Seek medical attention if irritation persists.

Eye Contact: Immediately flush eyes with clean water for at least 15 minutes, holding eyelids open. Seek immediate medical attention.

Inhalation: Move person to fresh air immediately. If breathing is difficult, administer oxygen. Seek medical attention.

Ingestion: Do NOT induce vomiting. Rinse mouth with water. Seek immediate medical attention. Do not give anything by mouth to an unconscious person.`,
  },
  {
    title: '5. Fire Fighting Measures',
    content: `Suitable Extinguishing Media: Dry chemical powder, CO₂, foam. Do NOT use water jet on fuel fires.

Unsuitable Media: Direct water stream on flammable liquid fires.

Special Hazards: HSD vapours are heavier than air and may travel to ignition sources. Burning produces toxic fumes including CO and SOx.

Protective Equipment for Firefighters: Self-contained breathing apparatus (SCBA) and full protective clothing must be worn.`,
  },
  {
    title: '6. Accidental Release Measures',
    content: `Personal Precautions: Eliminate ignition sources. Wear appropriate PPE (gloves, goggles, chemical-resistant clothing). Ensure adequate ventilation.

Environmental Precautions: Prevent material from entering drains, water courses, or soil. Notify local authorities if significant spillage occurs.

Containment & Cleanup: Absorb spill with sand, earth, or inert absorbent material. Collect in labelled, sealed containers for disposal. Clean area with detergent and water.`,
  },
  {
    title: '7. Handling & Storage',
    content: `Handling:
• Keep away from heat, sparks, and open flames
• Use only in well-ventilated areas
• Avoid breathing vapours or mists
• Use appropriate PPE at all times
• Bond and ground containers when transferring flammable liquids

Storage:
• Store in cool, dry, well-ventilated areas away from incompatible materials
• Keep containers tightly closed when not in use
• Store HSD in approved, labelled containers compliant with PESO regulations
• Maximum storage quantities as per local fire NOC and PESO guidelines`,
  },
  {
    title: '8. Exposure Controls & PPE',
    content: `Engineering Controls: Use local exhaust ventilation. Ensure adequate general ventilation. Install gas detectors in enclosed generator rooms.

Personal Protective Equipment:
• Hands: Chemical-resistant gloves (nitrile or neoprene)
• Eyes: Safety goggles or face shield
• Skin: Chemical-resistant coveralls
• Respiratory: Half-face respirator with organic vapour cartridge where ventilation is inadequate
• Feet: Safety boots with chemical-resistant soles`,
  },
  {
    title: '9. Physical & Chemical Properties',
    content: `High-Speed Diesel:
• Appearance: Clear to pale yellow liquid
• Odour: Characteristic petroleum odour
• Flash Point: ~38°C (minimum)
• Boiling Point: 180–360°C
• Density: 0.82–0.86 g/cm³ at 15°C
• Vapour Pressure: < 0.1 kPa at 20°C
• Solubility in Water: Negligible`,
  },
  {
    title: '10. Disposal Considerations',
    content: `Waste disposal must comply with the Environment Protection Act, 1986 and Hazardous Waste (Management, Handling and Transboundary Movement) Rules, 2016.

• Used lubricating oil must be collected and sent to authorised recyclers
• HSD spillage waste must be disposed of as hazardous waste through authorised contractors
• Empty containers must be decontaminated before disposal or recycling
• Do not pour waste materials into drains, sewers, or open ground

Contact your local Pollution Control Board for approved disposal facilities.`,
  },
  {
    title: '11. Regulatory Information',
    content: `Applicable Indian Regulations:
• Petroleum Act, 1934 and Petroleum Rules, 2002
• Environment Protection Act, 1986
• Hazardous Waste (Management) Rules, 2016
• Factories Act, 1948
• PESO (Petroleum and Explosives Safety Organisation) Guidelines
• Bureau of Indian Standards (BIS) specifications for HSD: IS 1460

This MSDS is prepared in accordance with the Globally Harmonized System (GHS) of Classification and Labelling of Chemicals.`,
  },
  {
    title: '12. Contact Information',
    content: `For MSDS queries, emergency response, or safety information:

Powertech Engineers
Email: powertechengineer82@gmail.com
Phone: +91 99208 36944
Emergency: Available 24/7

This document was last reviewed: January 2025`,
  },
];

const MSDS = () => {
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
            <span className="text-blue-300 font-bold text-xs tracking-wider uppercase">Safety Documentation</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
            Material Safety Data Sheet
          </h1>
          <p className="text-gray-400 text-lg">MSDS — Powertech Engineers &nbsp;·&nbsp; Effective: January 2025</p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-8 bg-charcoal border-b border-blue-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-600 text-lg leading-relaxed">
            This Material Safety Data Sheet (MSDS) provides essential health, safety, and environmental information for materials handled by Powertech Engineers during DG set installation, maintenance, and fuel system operations. All personnel must read and understand this document before handling any listed materials.
          </p>
        </div>
      </section>

      {/* Sections */}
      <section className="py-16 bg-charcoal">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          {sections.map((s, i) => (
            <div key={i} className="bg-white border border-blue-100 p-8">
              <h2 className="text-xl font-black text-navy uppercase tracking-tight mb-4">{s.title}</h2>
              <p className="text-gray-600 leading-relaxed whitespace-pre-line text-sm">{s.content}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MSDS;
