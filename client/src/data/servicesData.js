// ============================================================
// SERVICES DATA — single source of truth
// Each service has a slug that matches its image folder name:
//   client/public/images/services/<slug>/
// Drop images into the matching folder and they appear automatically.
// Supported formats: .jpg, .jpeg, .png, .webp
// ============================================================

const services = [
  {
    id: '1',
    slug: 'dg-set-installation',
    title: 'DG SET INSTALLATION',
    shortDescription: 'Turnkey diesel generator installations with precision engineering and commissioning.',
    fullDescription:
      'We deliver end-to-end diesel generator set installations for industrial, commercial, and infrastructure projects. Our process covers site assessment, foundation preparation, equipment positioning, fuel and exhaust piping, electrical integration, load testing, and final commissioning — all executed to the highest safety standards.',
    highlights: [
      'Site survey and load assessment',
      'Foundation and civil preparation',
      'DG set positioning and alignment',
      'Fuel, exhaust and cooling piping',
      'Electrical panel and synchronization',
      'Load bank testing and commissioning',
    ],
  },
  {
    id: '2',
    slug: 'dg-piping-systems',
    title: 'DG PIPING SYSTEMS',
    shortDescription: 'Fuel supply, exhaust, and cooling circuits engineered for maximum efficiency.',
    fullDescription:
      'Our piping division designs and installs complete fuel supply lines, exhaust systems, and cooling circuits for diesel generator sets. We use industrial-grade materials and follow strict engineering tolerances to ensure leak-free, long-life installations that meet all regulatory requirements.',
    highlights: [
      'HSD fuel supply and return lines',
      'Day tank and bulk tank connections',
      'Exhaust manifold and silencer installation',
      'Cooling water and radiator piping',
      'Pressure testing and leak certification',
      'Compliance with IS and OISD standards',
    ],
  },
  {
    id: '3',
    slug: 'electrical-integration',
    title: 'ELECTRICAL INTEGRATION',
    shortDescription: 'Control panels, synchronization, and power distribution systems.',
    fullDescription:
      'From AMF panels and synchronization panels to complete power distribution boards, our electrical team handles the full integration of DG sets into your existing power infrastructure. We ensure seamless automatic changeover, load sharing, and protection relay coordination.',
    highlights: [
      'AMF and manual changeover panels',
      'Synchronization and load sharing panels',
      'Main LT distribution boards',
      'Cable laying and termination',
      'Protection relay setting and testing',
      'Earthing and lightning protection',
    ],
  },
  {
    id: '4',
    slug: 'mechanical-services',
    title: 'MECHANICAL SERVICES',
    shortDescription: 'Engine maintenance, repairs, and performance optimization.',
    fullDescription:
      'Our mechanical team provides comprehensive maintenance, breakdown support, and performance optimization for diesel generator engines. We work across all major OEM brands and offer both scheduled AMC contracts and emergency call-out services.',
    highlights: [
      'Preventive maintenance contracts (AMC)',
      'Engine overhaul and reconditioning',
      'Turbocharger and injector servicing',
      'Cooling system maintenance',
      'Vibration analysis and alignment',
      '24/7 emergency breakdown support',
    ],
  },
  {
    id: '5',
    slug: 'hsd-fuel-systems',
    title: 'HSD FUEL SYSTEMS',
    shortDescription: 'High-speed diesel storage, handling, and distribution infrastructure.',
    fullDescription:
      'We design and install complete HSD fuel storage and distribution systems including underground and above-ground tanks, fuel transfer pumps, day tanks, and fuel management systems. All installations comply with PESO, OISD, and local fire NOC requirements.',
    highlights: [
      'Underground and above-ground storage tanks',
      'Fuel transfer pump sets',
      'Day tank installation and piping',
      'Fuel level monitoring systems',
      'PESO and OISD compliance',
      'Fire NOC documentation support',
    ],
  },
  {
    id: '6',
    slug: 'unloading-shifting',
    title: 'UNLOADING & SHIFTING',
    shortDescription: 'Professional DG set unloading, positioning, and shifting using heavy-duty equipment and skilled manpower.',
    fullDescription:
      'We provide specialized unloading, rigging, and shifting services for diesel generator sets of all sizes — from 15 kVA to 3000 kVA. Using hydraulic jacks, rollers, cranes, and skilled rigging teams, we safely move and position equipment in confined spaces, basements, rooftops, and industrial floors.',
    highlights: [
      'Crane and hydra unloading',
      'Hydraulic jack and roller shifting',
      'Basement and rooftop positioning',
      'Confined space rigging',
      'Equipment up to 3000 kVA handled',
      'Damage-free guaranteed handling',
    ],
  },
];

export default services;
