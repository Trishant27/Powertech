import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsStrip from './components/StatsStrip';
import Services from './components/Services';
import MiniAbout from './components/MiniAbout';
import About from './components/About';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-charcoal">
      <Navbar />
      <Hero />
      <StatsStrip />
      <Services />
      <MiniAbout />
      <About />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
