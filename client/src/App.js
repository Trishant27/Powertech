import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsStrip from './components/StatsStrip';
import Services from './components/Services';
import MiniAbout from './components/MiniAbout';
import About from './components/About';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import ServiceDetail from './pages/ServiceDetail';
import CustomCursor from './components/CustomCursor';

// Home page — all sections
const Home = () => (
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

function App() {
  return (
    <BrowserRouter>
      <CustomCursor />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services/:slug" element={<ServiceDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
