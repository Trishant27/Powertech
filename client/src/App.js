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
import PrivacyPolicy from './pages/PrivacyPolicy';
import Clients from './pages/Clients';
import MSDS from './pages/MSDS';
import SafetyStandards from './pages/SafetyStandards';
import Compliance from './pages/Compliance';
import ClientsStrip from './components/ClientsStrip';

// Home page — all sections wrapped in 3D perspective context
const Home = () => (
  <div className="min-h-screen bg-charcoal perspective-page">
    <Navbar />
    <Hero />
    <StatsStrip />
    <Services />
    <ClientsStrip />
    <MiniAbout />
    <About />
    <ContactForm />
    <Footer />
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services/:slug" element={<ServiceDetail />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/msds" element={<MSDS />} />
        <Route path="/safety-standards" element={<SafetyStandards />} />
        <Route path="/compliance" element={<Compliance />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
