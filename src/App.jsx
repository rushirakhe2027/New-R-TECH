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
import Projects from './pages/Projects';
import AboutPage from './pages/AboutPage';
import PortfolioPage from './pages/PortfolioPage';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import ContactForm from './components/ContactForm';
import Process from './components/Process';
import Portfolio from './components/Portfolio';
import Pricing from './components/Pricing';
import Team from './components/Team';
import Blog from './components/Blog';
import HomeFAQ from './components/HomeFAQ';
import ProjectEstimator from './components/ProjectEstimator';
import Testimonials from './components/Testimonials';
import TrustBar from './components/TrustBar';
import Preloader from './components/Preloader';
import CookieConsent from './components/CookieConsent';
import ContactWidget from './components/ContactWidget';
import ProjectsSection from './components/ProjectsSection';
import './App.css';

const MainLayout = () => (
  <div className="app">
    <Preloader />
    <Navbar />
    <Hero />
    <TrustBar />
    <Stats />
    <About />
    <Process />
    <WhyUs />
    <Services />
    <ProjectsSection />
    <Portfolio />
    <ProjectEstimator />
    <Pricing />
    <Team />
    <Testimonials />
    <Blog />
    <HomeFAQ />
    <ContactForm />
    <Footer />
    <ContactWidget />
    <CookieConsent />
  </div>
);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/hackathons" element={<HackathonLanding />} />
        <Route path="/hackathons/rules" element={<HackathonRules />} />
        <Route path="/hackathons/submit" element={<HackathonSubmission />} /> */}
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-conditions" element={<TermsConditions />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
