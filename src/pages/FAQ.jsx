import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const FAQ = () => {
  const faqs = [
    { q: "What services do you offer?", a: "We specialize in tailored Web Development, Mobile Apps, and AI/ML ecosystems designed for scalability and performance." },
    { q: "How long does a typical project take?", a: "Project timelines depend on complexity, but most MVP versions are delivered within 4-8 weeks with continuous agile updates." },
    { q: "Do you offer technical support?", a: "Yes, we provide 24/7 technical support and long-term maintenance to ensure your digital solutions remain optimized." },
    { q: "Do you work with startups?", a: "Absolutely. We specialize in helping startups build their initial products (MVPs) and scaling them as they grow." },
    { q: "Can you help with student academic projects?", a: "Yes, we have a dedicated vertical for technical mentorship and guidance on complex academic research projects." },
  ];

  return (
    <div className="page-wrapper">
      <Navbar />
      <section className="section" style={{ paddingTop: '160px', paddingBottom: '100px' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '60px' }} className="morph-slide-up">
            <span className="badge">Support</span>
            <h1 className="hero-title" style={{ fontSize: '3.5rem' }}>Help Center & <span className="text-gradient-premium">FAQ</span></h1>
            <p className="section-subtitle">
              Everything you need to know about our process, services, and commitment to excellence.
            </p>
          </div>

          <div className="faq-grid" style={{ maxWidth: '800px', margin: '0 auto' }}>
            {faqs.map((faq, i) => (
              <div key={i} className="faq-item glass-premium" style={{ 
                padding: '32px', 
                borderRadius: '24px', 
                marginBottom: '20px',
                border: '1px solid rgba(0, 102, 255, 0.05)'
              }}>
                <h3 style={{ marginBottom: '16px', color: 'var(--secondary)', fontSize: '1.25rem' }}>{faq.q}</h3>
                <p style={{ color: 'var(--text-light)', lineHeight: '1.7' }}>{faq.a}</p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '60px' }}>
            <p style={{ color: 'var(--text-light)' }}>Still have questions?</p>
            <a href="#contact" className="btn btn-primary" style={{ marginTop: '20px' }}>Contact Our Team</a>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default FAQ;
