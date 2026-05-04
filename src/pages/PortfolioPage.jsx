import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Portfolio from '../components/Portfolio';
import CTA from '../components/CTA';
import './PortfolioPage.css';

const PortfolioPage = () => {
  return (
    <div className="page-wrapper">
      <Navbar />
      <section className="portfolio-page-hero">
        <div className="container">
          <div className="section-header morph-slide-up">
            <span className="badge">Our Work</span>
            <h1 className="hero-title">Delivering <span className="text-gradient-premium">Impactful</span> Results</h1>
            <p className="section-subtitle">
              Explore our diverse collection of successful projects across AI, Web, and Mobile domains.
            </p>
          </div>
        </div>
      </section>

      <div className="portfolio-container-full">
        <Portfolio hideHeader={true} />
      </div>

      <section className="client-success-section">
        <div className="container">
          <div className="success-banner glass-premium">
            <div className="success-text">
              <h3>250+ Projects Successfully Delivered</h3>
              <p>We pride ourselves on technical excellence and on-time delivery for every client.</p>
            </div>
            <a href="/#contact" className="btn btn-primary">Start Your Success Story</a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PortfolioPage;
