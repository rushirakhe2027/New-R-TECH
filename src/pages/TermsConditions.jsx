import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const TermsConditions = () => {
  return (
    <div className="page-wrapper">
      <Navbar />
      <section className="section" style={{ paddingTop: '160px', paddingBottom: '100px' }}>
        <div className="container">
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '60px' }} className="morph-slide-up">
              <span className="badge">Legal Terms</span>
              <h1 className="hero-title" style={{ fontSize: '3.5rem' }}>Terms of <span className="text-gradient-premium">Service</span></h1>
              <p className="text-gray-500">Last Revised: February 04, 2026</p>
            </div>

            <div className="legal-content space-y-8">
              <div className="glass-premium p-10 rounded-[32px]" style={{ border: '1px solid rgba(0, 102, 255, 0.05)', background: 'white' }}>
                <section style={{ marginBottom: '40px' }}>
                  <h2 style={{ fontSize: '1.6rem', fontWeight: '900', color: 'var(--secondary)', marginBottom: '15px' }}>1. Agreement to Terms</h2>
                  <p style={{ color: 'var(--text-light)', lineHeight: '1.8' }}>
                    These Terms of Service constitute a legally binding agreement made between you, whether personally or on behalf of an entity (“you”) and R Tech Solutions (“we”, “us”, or “our”), concerning your access to and use of our website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto (collectively, the “Site”).
                  </p>
                </section>

                <section style={{ marginBottom: '40px' }}>
                  <h2 style={{ fontSize: '1.6rem', fontWeight: '900', color: 'var(--secondary)', marginBottom: '15px' }}>2. Product Purchases & Licensing</h2>
                  <p style={{ color: 'var(--text-light)', lineHeight: '1.8' }}>
                    When purchasing software products, SaaS subscriptions, or digital assets from R Tech Solutions:
                  </p>
                  <ul style={{ color: 'var(--text-light)', lineHeight: '1.8', marginTop: '15px', paddingLeft: '20px', listStyleType: 'square' }}>
                    <li><strong>License:</strong> We grant you a non-exclusive, non-transferable, revocable license to use the software strictly in accordance with our terms.</li>
                    <li><strong>Usage:</strong> You agree not to reverse engineer, decompile, or disassemble any software provided as a finished product.</li>
                    <li><strong>Updates:</strong> SaaS products include automatic updates; custom software builds include maintenance as specified in individual Service Level Agreements (SLAs).</li>
                  </ul>
                </section>

                <section style={{ marginBottom: '40px' }}>
                  <h2 style={{ fontSize: '1.6rem', fontWeight: '900', color: 'var(--secondary)', marginBottom: '15px' }}>3. Service Provisioning</h2>
                  <p style={{ color: 'var(--text-light)', lineHeight: '1.8' }}>
                    For custom development, AI/ML implementation, or consultancy services:
                  </p>
                  <ul style={{ color: 'var(--text-light)', lineHeight: '1.8', marginTop: '15px', paddingLeft: '20px', listStyleType: 'square' }}>
                    <li><strong>Deliverables:</strong> R Tech Solutions will provide services as outlined in the signed Project Proposal or Statement of Work (SOW).</li>
                    <li><strong>Timeline:</strong> Estimated delivery dates are non-binding unless explicitly stated as "Fixed-Date Delivery" in the contract.</li>
                    <li><strong>Client Responsibilities:</strong> Delays caused by the client's failure to provide necessary access or data will result in project timeline extensions.</li>
                  </ul>
                </section>

                <section style={{ marginBottom: '40px' }}>
                  <h2 style={{ fontSize: '1.6rem', fontWeight: '900', color: 'var(--secondary)', marginBottom: '15px' }}>4. Payments & Refund Policy</h2>
                  <p style={{ color: 'var(--text-light)', lineHeight: '1.8' }}>
                    All payments are processed in INR/USD via secure gateways. 
                    <br /><br />
                    <strong>Refunds:</strong> Since our services involve non-tangible, irrevocable digital goods and custom labor hours, we do not issue refunds once the project has commenced or the digital product has been accessed. For SaaS subscriptions, users may cancel at any time, but no prorated refunds for the remaining term will be provided.
                  </p>
                </section>

                <section style={{ marginBottom: '40px' }}>
                  <h2 style={{ fontSize: '1.6rem', fontWeight: '900', color: 'var(--secondary)', marginBottom: '15px' }}>5. Intellectual Property Rights</h2>
                  <p style={{ color: 'var(--text-light)', lineHeight: '1.8' }}>
                    Unless otherwise indicated, the Site and its entire contents (code, database, functionality, software, website designs, audio, video, text, photographs, and graphics) are our proprietary property and are protected by copyright and trademark laws.
                  </p>
                </section>

                <div style={{ marginTop: '50px', paddingTop: '30px', borderTop: '1px solid #eee', textAlign: 'center' }}>
                  <p style={{ fontWeight: '800', color: 'var(--secondary)', fontSize: '1.1rem' }}>Governance</p>
                  <p style={{ color: 'var(--text-light)', fontSize: '0.9rem', marginTop: '10px' }}>
                    These terms are governed by the laws of India. Any legal action shall be brought in the courts of Maharashtra, India.
                  </p>
                  <p style={{ color: 'var(--primary)', marginTop: '20px', fontWeight: '600' }}>contact@rtechsolutions.online</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default TermsConditions;
