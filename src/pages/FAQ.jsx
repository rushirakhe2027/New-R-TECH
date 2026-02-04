import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const FAQ = () => {
  const faqs = [
    { q: "What services do you offer?", a: "We specialize in Web Development, Mobile Apps, and AI/ML solutions." },
    { q: "How long does a typical project take?", a: "Project timelines vary but most MVP versions are delivered within 4-8 weeks." },
    { q: "Do you offer technical support?", a: "Yes, we provide 24/7 technical support and maintenance for all our deployments." },
  ];

  return (
    <div className="page-wrapper">
      <Navbar />
      <section className="section" style={{ paddingTop: '140px' }}>
        <div className="container">
          <h1 className="hero-title">Frequently Asked Questions</h1>
          <div className="faq-list" style={{ marginTop: '40px' }}>
            {faqs.map((faq, i) => (
              <div key={i} className="faq-item glass" style={{ padding: '24px', borderRadius: '16px', marginBottom: '16px' }}>
                <h3 style={{ marginBottom: '10px' }}>{faq.q}</h3>
                <p style={{ color: 'var(--text-light)' }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default FAQ;
