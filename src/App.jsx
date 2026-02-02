import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Services from './components/Services';
import About from './components/About';
import WhyUs from './components/WhyUs';
import CTA from './components/CTA';
import Footer from './components/Footer';
import HackathonLanding from './pages/HackathonLanding';
import HackathonRules from './pages/HackathonRules';
import HackathonSubmission from './pages/HackathonSubmission';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';
import './App.css';

const MainLayout = () => (
  <div className="app">
    <Navbar />
    <Hero />
    <Stats />
    <Services />
    <About />
    <WhyUs />
    <CTA />
    <Footer />
  </div>
);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route path="/hackathons" element={<HackathonLanding />} />
        <Route path="/hackathons/rules" element={<HackathonRules />} />
        <Route path="/hackathons/submit" element={<HackathonSubmission />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-conditions" element={<TermsConditions />} />
      </Routes>
    </Router>
  );
}

export default App;
