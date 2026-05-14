import React, { useState, useEffect, useRef } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', company: '',
    serviceCategory: 'General Inquiry', message: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`POWERTECH Inquiry: ${formData.serviceCategory}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nCompany: ${formData.company}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nService: ${formData.serviceCategory}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:powertechengineer82@gmail.com?subject=${subject}&body=${body}`;
    setStatus({ type: 'success', message: 'Opening your email client...' });
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', company: '', serviceCategory: 'General Inquiry', message: '' });
      setStatus({ type: '', message: '' });
    }, 3000);
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      `Hi Powertech,\n\nName: ${formData.name}\nCompany: ${formData.company}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nService: ${formData.serviceCategory}\n\nMessage: ${formData.message}`
    );
    window.open(`https://wa.me/919920836944?text=${message}`, '_blank');
  };

  const inputClass = "w-full px-4 py-3 bg-charcoal border border-blue-100 text-navy focus:outline-none focus:border-orange transition placeholder-gray-400";

  return (
    <section id="contact" className="py-20 md:py-28 bg-charcoal" ref={sectionRef}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <div className={`inline-flex items-center gap-2 bg-blue-50 border border-blue-200 px-4 py-2 mb-6 ${visible ? 'animate-flipInX' : 'opacity-0'}`}
            style={{ animationDelay: '0.1s' }}>
            <span className="text-orange font-bold text-xs tracking-wider uppercase">START A PROJECT</span>
          </div>
          <h2 className={`text-4xl md:text-5xl font-black text-navy mb-4 tracking-tight ${visible ? 'animate-3d-entrance' : 'opacity-0'}`}
            style={{ animationDelay: '0.2s' }}>
            LET'S BUILD SOMETHING <span className="text-orange">POWERFUL</span>
          </h2>
          <p className={`text-gray-500 text-lg ${visible ? 'animate-3d-entrance' : 'opacity-0'}`}
            style={{ animationDelay: '0.3s' }}>
            Share your project details and our engineering team will respond within 24 hours
          </p>
        </div>

        {/* Card */}
        <div className={`bg-white border border-blue-100 shadow-lg ${visible ? 'animate-3d-entrance' : 'opacity-0'}`}
          style={{ animationDelay: '0.4s' }}>
          <div className="grid grid-cols-1 lg:grid-cols-5">

            {/* Left — Contact Info (dark) */}
            <div className="lg:col-span-2 bg-navy p-8 lg:p-10 border-b lg:border-b-0 lg:border-r border-white/10">
              <h3 className="text-2xl font-black text-white mb-6 uppercase tracking-tight">CONTACT INFO</h3>
              <div className="space-y-6">
                {[
                  { icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z', label: 'Email', content: <a href="mailto:powertechengineer82@gmail.com" className="text-white hover:text-blue-300 transition break-all text-sm">powertechengineer82@gmail.com</a> },
                  { icon: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z', label: 'Phone', content: <a href="tel:+919920836944" className="text-white hover:text-blue-300 transition">+91 99208 36944</a> },
                  { icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z', label: 'Support Hours', content: <><div className="text-white">24/7 Emergency</div><div className="text-gray-400 text-sm">Mon-Sat: 9AM-6PM</div></> },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-900/40 border border-blue-400/30 flex items-center justify-center">
                      <svg className="w-6 h-6 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                      </svg>
                    </div>
                    <div>
                      <div className="text-xs text-gray-400 uppercase tracking-wider mb-1 font-bold">{item.label}</div>
                      {item.content}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-8 border-t border-white/10">
                <button onClick={handleWhatsApp} className="text-green-400 hover:text-green-300 font-bold text-sm uppercase tracking-wider transition flex items-center gap-2 group">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  Message us on WhatsApp
                </button>
              </div>
            </div>

            {/* Right — Form (light) */}
            <div className="lg:col-span-3 p-8 lg:p-10">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Full Name *</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required className={inputClass} placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Company</label>
                    <input type="text" name="company" value={formData.company} onChange={handleChange} className={inputClass} placeholder="Company Name" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Email Address *</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required className={inputClass} placeholder="john@company.com" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Phone Number *</label>
                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required className={inputClass} placeholder="+91 98765 43210" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Service Required</label>
                  <select name="serviceCategory" value={formData.serviceCategory} onChange={handleChange}
                    className="w-full px-4 py-3 h-[50px] bg-charcoal border border-blue-100 text-navy focus:outline-none focus:border-orange transition">
                    <option>General Inquiry</option>
                    <option>DG Set Installation</option>
                    <option>DG Piping Systems</option>
                    <option>Electrical Integration</option>
                    <option>Mechanical Services</option>
                    <option>HSD Fuel Systems</option>
                    <option>Unloading & Shifting</option>
                    <option>AMC Services</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Project Details *</label>
                  <textarea name="message" value={formData.message} onChange={handleChange} required rows="5"
                    className={`${inputClass} resize-none`} placeholder="Describe your project requirements..."></textarea>
                </div>
                {status.message && (
                  <div className="p-4 bg-blue-50 border border-blue-200 text-orange text-sm">{status.message}</div>
                )}
                <button type="submit"
                  className="w-full bg-orange hover:bg-blue-800 text-white font-bold py-4 px-6 text-sm uppercase tracking-wider transition flex items-center justify-center gap-2 group btn-3d">
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
