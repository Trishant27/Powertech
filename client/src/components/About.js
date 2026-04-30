import React from 'react';

const About = () => {
  return (
    <section className="py-20 md:py-28 bg-navy relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Image with Badge */}
          <div className="relative">
            <div className="relative bg-darkGrey border border-white/10 p-8 aspect-square flex items-center justify-center">
              {/* Placeholder for Engineer Image */}
              <div className="text-center">
                <svg className="w-32 h-32 mx-auto text-orange mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
                <div className="text-gray-400 text-sm uppercase tracking-wider">Field Engineer</div>
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-6 bg-orange p-6 shadow-industrial">
                <div className="text-center">
                  <div className="text-4xl font-black text-white mb-1">0.0%</div>
                  <div className="text-xs text-white uppercase tracking-wider font-bold">Downtime</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-orange/10 border border-orange/30 px-4 py-2 mb-6">
              <span className="text-orange font-bold text-xs tracking-wider uppercase">
                WHY POWERTECH
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">
              MACHINED EXCELLENCE<br />
              <span className="text-orange">IN EVERY DETAIL</span>
            </h2>

            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              Powertech delivers mission-critical power infrastructure with military-grade precision. 
              Our certified engineering team ensures every installation meets the highest standards of 
              reliability and safety.
            </p>

            {/* Bulleted List with Icons */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-orange/10 border border-orange/30 flex items-center justify-center">
                  <svg className="w-6 h-6 text-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-1 uppercase tracking-wide">ISO Certified Operations</h4>
                  <p className="text-gray-400">Compliance with international safety and quality standards</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-orange/10 border border-orange/30 flex items-center justify-center">
                  <svg className="w-6 h-6 text-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-1 uppercase tracking-wide">24/7 Emergency Response</h4>
                  <p className="text-gray-400">Round-the-clock technical support and rapid deployment</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-orange/10 border border-orange/30 flex items-center justify-center">
                  <svg className="w-6 h-6 text-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-1 uppercase tracking-wide">Turnkey Solutions</h4>
                  <p className="text-gray-400">End-to-end project management from design to commissioning</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-orange/10 border border-orange/30 flex items-center justify-center">
                  <svg className="w-6 h-6 text-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-1 uppercase tracking-wide">100% Safety Record</h4>
                  <p className="text-gray-400">Zero workplace incidents across 500+ installations</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
