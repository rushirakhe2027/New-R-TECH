import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import './HomeFAQ.css';

const HomeFAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      q: "What is the typical project delivery timeline?",
      a: "Timelines vary by complexity. An MVP typically takes 4-6 weeks, while more complex AI-integrated systems can take 3-4 months. We follow an agile process with weekly updates."
    },
    {
      q: "Do you offer post-launch support and maintenance?",
      a: "Yes, every project includes a dedicated support period. We also offer long-term maintenance packages to ensure your systems remain secure and updated."
    },
    {
      q: "Can you help in scaling existing legacy systems?",
      a: "Absolutely. We specialize in modernization—refactoring legacy code, migrating to cloud architectures, and integrating modern AI capabilities into existing workflows."
    },
    {
      q: "What tech stacks do you specialize in?",
      a: "We are experts in the MERN stack (MongoDB, Express, React, Node.js), Python for AI/ML, and Flutter/React Native for cross-platform mobile development."
    }
  ];

  return (
    <section className="section faq-home-section" id="faq">
      <div className="container">
        <div className="faq-flex">
          <div className="faq-left">
            <span className="badge" style={{ margin: '0 0 24px 0' }}>Support Center</span>
            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '24px' }}>
              Common <span className="text-gradient-premium">Questions</span>
            </h2>
            <p className="section-subtitle" style={{ textAlign: 'left', margin: '0' }}>
              Find answers to the most common inquiries about our development process and partnerships.
            </p>
            <div className="faq-cta-box glass-premium">
              <p>Still have doubts?</p>
              <a href="#contact" className="btn btn-primary">Talk to an Expert</a>
            </div>
          </div>

          <div className="faq-right">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className={`faq-accordion-item ${activeIndex === index ? 'active' : ''} glass-premium`}
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
              >
                <div className="faq-question">
                  <h3>{faq.q}</h3>
                  {activeIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </div>
                <div className="faq-answer">
                  <p>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeFAQ;
