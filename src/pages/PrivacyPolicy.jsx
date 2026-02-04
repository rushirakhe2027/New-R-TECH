import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const PrivacyPolicy = () => {
  return (
    <div className="page-wrapper">
      <Navbar />
      <section className="section" style={{ paddingTop: '160px', paddingBottom: '100px' }}>
        <div className="container">
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '60px' }} className="morph-slide-up">
              <span className="badge">Legal Compliance</span>
              <h1 className="hero-title" style={{ fontSize: '3.5rem' }}>Privacy & <span className="text-gradient-premium">Data Policy</span></h1>
              <p className="text-gray-500">Effective Date: February 2026 | Version 2.1</p>
            </div>

            <div className="legal-content space-y-8">
              <div className="glass-premium p-10 rounded-[32px]" style={{ border: '1px solid rgba(0, 102, 255, 0.05)', background: 'white' }}>
                <section style={{ marginBottom: '40px' }}>
                  <h2 style={{ fontSize: '1.6rem', fontWeight: '900', color: 'var(--secondary)', marginBottom: '15px' }}>1. Scope of Agreement</h2>
                  <p style={{ color: 'var(--text-light)', lineHeight: '1.8' }}>
                    This Privacy Policy governs the manner in which R Tech Solutions collects, uses, maintains and discloses information collected from users (each, a "User") of the website. This policy applies to the Site and all products and services offered by R Tech Solutions, including custom software development, SaaS products, and technical consultancy.
                  </p>
                </section>

                <section style={{ marginBottom: '40px' }}>
                  <h2 style={{ fontSize: '1.6rem', fontWeight: '900', color: 'var(--secondary)', marginBottom: '15px' }}>2. Information Collection & Purchase Protocols</h2>
                  <p style={{ color: 'var(--text-light)', lineHeight: '1.8' }}>
                    We collect personal identification information from Users in a variety of ways, including, but not limited to, when Users visit our site, register on the site, place an order, and in connection with other activities, services, features or resources we make available.
                  </p>
                  <ul style={{ color: 'var(--text-light)', lineHeight: '1.8', marginTop: '15px', paddingLeft: '20px', listStyleType: 'square' }}>
                    <li><strong>Transaction Data:</strong> For product purchases (SaaS, custom builds), we collect billing addresses and payment details processed through encrypted gateways.</li>
                    <li><strong>Service Engagement:</strong> Technical specifications, project briefs, and proprietary business logic provided during consultancy are treated as Confidential Information.</li>
                    <li><strong>Professional Data:</strong> Intern and job applicant data, including resumes and academic transcripts.</li>
                  </ul>
                </section>

                <section style={{ marginBottom: '40px' }}>
                  <h2 style={{ fontSize: '1.6rem', fontWeight: '900', color: 'var(--secondary)', marginBottom: '15px' }}>3. Data Protection & Cybersecurity</h2>
                  <p style={{ color: 'var(--text-light)', lineHeight: '1.8' }}>
                    We adopt appropriate data collection, storage and processing practices and security measures to protect against unauthorized access, alteration, disclosure or destruction of your personal information, username, password, transaction information and data stored on our Site.
                  </p>
                  <p style={{ color: 'var(--text-light)', lineHeight: '1.8', marginTop: '10px' }}>
                    Sensitive and private data exchange between the Site and its Users happens over a SSL secured communication channel and is encrypted and protected with digital signatures.
                  </p>
                </section>

                <section style={{ marginBottom: '40px' }}>
                  <h2 style={{ fontSize: '1.6rem', fontWeight: '900', color: 'var(--secondary)', marginBottom: '15px' }}>4. Non-Disclosure & Third-Party Services</h2>
                  <p style={{ color: 'var(--text-light)', lineHeight: '1.8' }}>
                    We do not sell, trade, or rent Users personal identification information to others. We may share generic aggregated demographic information not linked to any personal identification information regarding visitors and users with our business partners, trusted affiliates and advertisers for the purposes outlined above.
                  </p>
                </section>

                <section style={{ marginBottom: '40px' }}>
                  <h2 style={{ fontSize: '1.6rem', fontWeight: '900', color: 'var(--secondary)', marginBottom: '15px' }}>5. Legal Compliance & Rights</h2>
                  <p style={{ color: 'var(--text-light)', lineHeight: '1.8' }}>
                    Users have the right to request access to their stored data, request correction of inaccuracies, and in certain circumstances, request the deletion of their personal records. For official inquiries regarding compliance with Information Technology (IT) laws, contact our Legal Officer.
                  </p>
                </section>

                <div style={{ marginTop: '50px', paddingTop: '30px', borderTop: '1px solid #eee', textAlign: 'center' }}>
                  <p style={{ fontWeight: '800', color: 'var(--secondary)', fontSize: '1.1rem' }}>Legal Office Contact</p>
                  <p style={{ color: 'var(--primary)', marginTop: '8px', fontWeight: '600' }}>legal@rtechsolutions.online</p>
                  <p style={{ color: 'var(--text-light)', fontSize: '0.9rem', marginTop: '15px' }}>
                    R Tech Solutions India | MSME Registered <br />
                    Maharashtra, India
                  </p>
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

export default PrivacyPolicy;
