import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const sections = [
  {
    title: '1. Information We Collect',
    content: `When you use our website or contact us through the enquiry form, we may collect the following information:
    
• Full name and company name
• Email address and phone number
• Project details and service requirements
• Technical information such as IP address and browser type (collected automatically)

We do not collect sensitive personal data such as financial information or government identification numbers.`,
  },
  {
    title: '2. How We Use Your Information',
    content: `The information you provide is used solely for the following purposes:

• To respond to your enquiries and project requests
• To provide quotations, consultations, and technical support
• To send relevant updates about our services (only if you have opted in)
• To improve our website and service offerings

We do not use your data for automated decision-making or profiling.`,
  },
  {
    title: '3. How We Share Your Information',
    content: `Powertech Engineers does not sell, trade, or rent your personal information to third parties. We may share your information only in the following limited circumstances:

• With trusted service partners who assist in delivering our services (e.g., email providers), bound by confidentiality agreements
• When required by law, regulation, or legal process
• To protect the rights, property, or safety of Powertech Engineers, our clients, or others`,
  },
  {
    title: '4. Data Retention',
    content: `We retain your personal information only for as long as necessary to fulfil the purposes outlined in this policy, or as required by applicable law. Enquiry data is typically retained for up to 3 years for business correspondence purposes. You may request deletion of your data at any time by contacting us.`,
  },
  {
    title: '5. Cookies',
    content: `Our website may use basic cookies to improve your browsing experience. These are small text files stored on your device. We do not use tracking cookies or third-party advertising cookies. You can disable cookies through your browser settings without affecting your ability to use the site.`,
  },
  {
    title: '6. Data Security',
    content: `We take reasonable technical and organisational measures to protect your personal information against unauthorised access, loss, or misuse. However, no method of transmission over the internet is 100% secure. We encourage you to contact us through secure channels and avoid sharing sensitive information unnecessarily.`,
  },
  {
    title: '7. Your Rights',
    content: `You have the right to:

• Access the personal information we hold about you
• Request correction of inaccurate or incomplete data
• Request deletion of your personal data
• Withdraw consent for communications at any time

To exercise any of these rights, please contact us at powertechengineer82@gmail.com.`,
  },
  {
    title: '8. Third-Party Links',
    content: `Our website may contain links to third-party websites (such as WhatsApp). We are not responsible for the privacy practices of those sites and encourage you to review their privacy policies independently.`,
  },
  {
    title: '9. Changes to This Policy',
    content: `We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date. We encourage you to review this policy periodically.`,
  },
  {
    title: '10. Contact Us',
    content: `If you have any questions or concerns about this Privacy Policy or how we handle your data, please contact us:

Email: powertechengineer82@gmail.com
Phone: +91 99208 36944
WhatsApp: +91 99208 36944`,
  },
];

const PrivacyPolicy = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-charcoal">
      <Navbar />

      {/* Header */}
      <section className="bg-navy border-b border-white/10 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-gray-400 hover:text-orange transition text-sm font-bold uppercase tracking-wider mb-8 group"
          >
            <svg className="w-4 h-4 group-hover:-translate-x-1 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M11 17l-5-5m0 0l5-5m-5 5h12" />
            </svg>
            Back to Home
          </button>
          <div className="inline-flex items-center gap-2 bg-blue-900/40 border border-blue-400/30 px-4 py-2 mb-6">
            <span className="text-blue-300 font-bold text-xs tracking-wider uppercase">Legal</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
            Privacy Policy
          </h1>
          <p className="text-gray-400 text-lg">
            Effective Date: January 1, 2025 &nbsp;·&nbsp; Powertech Engineers
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-10 bg-charcoal border-b border-blue-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-600 text-lg leading-relaxed">
            Powertech Engineers ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal information when you visit our website or engage with our services. By using our website, you agree to the practices described in this policy.
          </p>
        </div>
      </section>

      {/* Sections */}
      <section className="py-16 bg-charcoal">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {sections.map((s, i) => (
            <div key={i} className="bg-white border border-blue-100 p-8">
              <h2 className="text-xl font-black text-navy uppercase tracking-tight mb-4">
                {s.title}
              </h2>
              <p className="text-gray-600 leading-relaxed whitespace-pre-line text-sm">
                {s.content}
              </p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
