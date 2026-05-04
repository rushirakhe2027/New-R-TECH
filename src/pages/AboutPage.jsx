import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import About from '../components/About';
import WhyUs from '../components/WhyUs';
import Team from '../components/Team';
import Stats from '../components/Stats';
import { Target, Eye, Heart } from 'lucide-react';
import './AboutPage.css';

const AboutPage = () => {
  return (
    <div className="page-wrapper">
      <Navbar />
      <section className="about-page-hero">
        <div className="container">
          <div className="section-header morph-slide-up">
            <span className="badge">Our Story</span>
            <h1 className="hero-title">Architecting the <span className="text-gradient-premium">Digital Future</span></h1>
            <p className="section-subtitle">
              From a small vision in Maharashtra to a leading nationwide tech partner, we’ve been committed to excellence since day one.
            </p>
          </div>
        </div>
      </section>

      <div className="about-stats-container">
        <Stats />
      </div>

      <About />

      <section className="mission-vision-section">
        <div className="container">
          <div className="mv-grid">
            <div className="mv-card glass-premium">
              <div className="mv-icon"><Target size={32} /></div>
              <h3>Our Mission</h3>
              <p>To empower businesses of all sizes with cutting-edge technology that simplifies complexity and drives sustainable growth.</p>
            </div>
            <div className="mv-card glass-premium">
              <div className="mv-icon"><Eye size={32} /></div>
              <h3>Our Vision</h3>
              <p>To be the world’s most trusted partner in digital transformation, known for precision engineering and human-centric design.</p>
            </div>
            <div className="mv-card glass-premium">
              <div className="mv-icon"><Heart size={32} /></div>
              <h3>Our Values</h3>
              <p>Integrity, innovation, and inclusivity are at the heart of everything we build and every partnership we nurture.</p>
            </div>
          </div>
        </div>
      </section>

      <WhyUs />
      <Team />

      <section className="about-cta">
        <div className="container">
          <div className="cta-box glass-premium">
            <h2>Ready to Join Our Journey?</h2>
            <p>Whether you're a client or a future teammate, we'd love to have you on board.</p>
            <div className="cta-btns">
              <a href="/#contact" className="btn btn-primary">Start a Project</a>
              <a href="/careers" className="btn btn-outline">Join the Team</a>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default AboutPage;
