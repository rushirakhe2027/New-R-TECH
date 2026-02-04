import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="container morph-slide-up">
        <div className="about-grid">
          <div className="about-image">
            <div className="image-wrapper">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" 
                alt="R Tech Solutions Team" 
              />
              <div className="image-overlay"></div>
            </div>
          </div>
          
          <div className="about-content">
            <div className="section-badge">About Us</div>
            <h2 className="section-title">Who We Are</h2>
            <p className="about-description">
              R Tech Solutions is a Maharashtra-based software development company specializing in 
              web development, mobile applications, and AI/ML solutions. We empower startups, 
              businesses, and students to bring their digital ideas to life.
            </p>
            
            <div className="about-features">
              <div className="feature-item">
                <div className="feature-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                    <path d="M2 17l10 5 10-5"></path>
                    <path d="M2 12l10 5 10-5"></path>
                  </svg>
                </div>
                <div className="feature-content">
                  <h3>Our Mission</h3>
                  <p>To democratize technology by making professional software development accessible and affordable for everyone.</p>
                </div>
              </div>
              
              <div className="feature-item">
                <div className="feature-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                </div>
                <div className="feature-content">
                  <h3>Our Experience</h3>
                  <p>With 20+ active projects and a growing portfolio, we've helped startups and students turn concepts into reality.</p>
                </div>
              </div>
              
              <div className="feature-item">
                <div className="feature-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
                <div className="feature-content">
                  <h3>Our Team</h3>
                  <p>A passionate team of developers, designers, and innovators committed to delivering excellence in every project.</p>
                </div>
              </div>
              
              <div className="feature-item">
                <div className="feature-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                </div>
                <div className="feature-content">
                  <h3>Community Focus</h3>
                  <p>We organize hackathons and events to nurture the next generation of tech talent and foster innovation.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
