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
import Careers from './pages/Careers';
import FAQ from './pages/FAQ';
import ContactForm from './components/ContactForm';
import Process from './components/Process';
// import Testimonials from './components/Testimonials';
import TrustBar from './components/TrustBar';
import ContactWidget from './components/ContactWidget';
import './App.css';

const MainLayout = () => (
  <div className="app">
    <Navbar />
    <Hero />
    <TrustBar />
    <Stats />
    <About />
    <Process />
    <Services />
    {/* <Testimonials /> */}
    <ContactForm />
    <Footer />
    <ContactWidget />
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
        <Route path="/careers" element={<Careers />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>
    </Router>
  );
}

export default App;
