import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    serviceCategory: 'General Inquiry',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const subject = encodeURIComponent(`POWERTECH Inquiry: ${formData.serviceCategory}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Company: ${formData.company}\n` +
      `Email: ${formData.email}\n` +
      `Phone: ${formData.phone}\n` +
      `Service: ${formData.serviceCategory}\n\n` +
      `Message:\n${formData.message}`
    );
    
    window.location.href = `mailto:powertechengineer82@gmail.com?subject=${subject}&body=${body}`;
    
    setStatus({
      type: 'success',
      message: 'Opening your email client...'
    });
    
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        serviceCategory: 'General Inquiry',
        message: ''
      });
      setStatus({ type: '', message: '' });
    }, 3000);
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      `Hi Powertech,\n\n` +
      `Name: ${formData.name}\n` +
      `Company: ${formData.company}\n` +
      `Email: ${formData.email}\n` +
      `Phone: ${formData.phone}\n` +
      `Service: ${formData.serviceCategory}\n\n` +
      `Message: ${formData.message}`
    );
    window.open(`https://wa.me/917083964914?text=${message}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-charcoal">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-orange/10 border border-orange/30 px-4 py-2 mb-6">
            <span className="text-orange font-bold text-xs tracking-wider uppercase">
              START A PROJECT
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
            LET'S BUILD SOMETHING <span className="text-orange">POWERFUL</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Share your project details and our engineering team will respond within 24 hours
          </p>
        </div>

        {/* Contact Card */}
        <div className="bg-darkGrey border border-white/10 shadow-industrial">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
            {/* Left Column - Contact Details */}
            <div className="lg:col-span-2 bg-navy p-8 lg:p-10 border-b lg:border-b-0 lg:border-r border-white/10">
              <h3 className="text-2xl font-black text-white mb-6 uppercase tracking-tight">
                CONTACT INFO
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-orange/10 border border-orange/30 flex items-center justify-center">
                    <svg className="w-6 h-6 text-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 uppercase tracking-wider mb-1 font-bold">Email</div>
                    <a href="mailto:powertechengineer82@gmail.com" className="text-white hover:text-orange transition break-all">
                      powertechengineer82@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-orange/10 border border-orange/30 flex items-center justify-center">
                    <svg className="w-6 h-6 text-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 uppercase tracking-wider mb-1 font-bold">Phone</div>
                    <a href="tel:+917083964914" className="text-white hover:text-orange transition">
                      +91 7083964914
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-orange/10 border border-orange/30 flex items-center justify-center">
                    <svg className="w-6 h-6 text-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 uppercase tracking-wider mb-1 font-bold">Support Hours</div>
                    <div className="text-white">24/7 Emergency</div>
                    <div className="text-gray-400 text-sm">Mon-Sat: 9AM-6PM</div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-white/10">
                <button
                  onClick={handleWhatsApp}
                  className="text-orange hover:text-orange/70 font-bold text-sm uppercase tracking-wider transition flex items-center gap-2 group"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  Or message us on WhatsApp
                  <svg className="w-3 h-3 group-hover:translate-x-1 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="lg:col-span-3 p-8 lg:p-10">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-charcoal border border-white/10 text-white focus:border-orange focus:outline-none transition"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-charcoal border border-white/10 text-white focus:border-orange focus:outline-none transition"
                      placeholder="Company Name"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-charcoal border border-white/10 text-white focus:border-orange focus:outline-none transition"
                      placeholder="john@company.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-charcoal border border-white/10 text-white focus:border-orange focus:outline-none transition"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="serviceCategory" className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
                    Service Required
                  </label>
                  <select
                    id="serviceCategory"
                    name="serviceCategory"
                    value={formData.serviceCategory}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-charcoal border border-white/10 text-white focus:border-orange focus:outline-none transition"
                  >
                    <option>General Inquiry</option>
                    <option>DG Set Installation</option>
                    <option>DG Piping Systems</option>
                    <option>Electrical Integration</option>
                    <option>Mechanical Services</option>
                    <option>HSD Fuel Systems</option>
                    <option>AMC Services</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 bg-charcoal border border-white/10 text-white focus:border-orange focus:outline-none transition resize-none"
                    placeholder="Describe your project requirements..."
                  ></textarea>
                </div>

                {status.message && (
                  <div className="p-4 bg-orange/10 border border-orange/30 text-orange">
                    {status.message}
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full bg-orange hover:bg-orange/90 text-white font-bold py-4 px-6 text-sm uppercase tracking-wider transition flex items-center justify-center gap-2 group"
                >
                  SUBMIT REQUEST
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
