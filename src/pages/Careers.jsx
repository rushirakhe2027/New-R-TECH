import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Careers = () => {
  return (
    <div className="page-wrapper">
      <Navbar />
      <section className="section" style={{ paddingTop: '140px', minHeight: '60vh' }}>
        <div className="container">
          <h1 className="hero-title">Join Our Team</h1>
          <p className="hero-subtext" style={{ marginTop: '20px' }}>
            We're always looking for talented individuals to join R Tech Solutions. 
            Help us build the next generation of intelligent software.
          </p>
          <div className="job-listings" style={{ marginTop: '50px' }}>
            <div className="job-card glass" style={{ padding: '30px', borderRadius: '20px' }}>
              <h3>Future Opportunities</h3>
              <p style={{ color: 'var(--text-light)', marginTop: '10px' }}>
                We don't have any open positions at the moment, but we'd love to hear from you. 
                Send your resume to support@rtechsolutions.online and we'll keep you in mind.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Careers;
