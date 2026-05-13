import React, { useEffect, useRef, useState } from 'react';
import TiltCard from './TiltCard';

const StatsStrip = () => {
  const stripRef = useRef(null);
  const [visible, setVisible] = useState(false);

  // Intersection observer to trigger animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (stripRef.current) observer.observe(stripRef.current);
    return () => observer.disconnect();
  }, []);

  const stats = [
    {
      value: '500+',
      label: 'DG INSTALLS',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      value: '100%',
      label: 'SAFETY RECORD',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      value: '24/7',
      label: 'SUPPORT',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];

  return (
    <section
      ref={stripRef}
      className="bg-white border-y border-blue-100 py-12"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 justify-items-center">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`flex flex-col items-center text-center group p-6 ${
                visible ? 'animate-flipInX' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="text-orange mb-3 group-hover:scale-110 transition">
                {stat.icon}
              </div>
              <div className="text-3xl md:text-4xl font-black text-navy mb-2">
                {stat.value}
              </div>
              <div className="text-xs md:text-sm text-gray-500 font-bold tracking-wider uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsStrip;
