import React from 'react';
import { Globe, Share2, Github } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="container footer-content-grid">
        <div className="footer-brand-section">
          <Link to="/" className="footer-logo">
            <img src="/assets/r-tech-logo.png" alt="R Tech" className="footer-logo-img" />
            <span>R Tech Solutions</span>
          </Link>
          <p className="footer-tagline">
            Architecting the future with precision software, intelligent AI, and scalable digital solutions.
          </p>
          <div className="footer-socials-v2">
            <a href="#" className="social-link"><Globe size={20} /></a>
            <a href="#" className="social-link"><Share2 size={20} /></a>
            <a href="#" className="social-link"><Github size={20} /></a>
          </div>
        </div>

        <div className="footer-links-column">
          <h4>Company</h4>
          <Link to="/#about">About Us</Link>
          <Link to="/careers">Careers</Link>
          {/* <Link to="/hackathons">Hackathons</Link> */}
          <a href="#contact">Contact Us</a>
        </div>

        <div className="footer-links-column">
          <h4>Services</h4>
          <a href="/#services">AI Development</a>
          <a href="/#services">Web Systems</a>
          <a href="/#services">Mobile Apps</a>
          <a href="/#portfolio">Our Work</a>
        </div>

        <div className="footer-newsletter">
          <h4>Stay Updated</h4>
          <p>Get the latest tech insights and project updates.</p>
          <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Your work email" required />
            <button type="submit" className="btn btn-primary">Join</button>
          </form>
        </div>
      </div>
      
      <div className="container">
        <div className="footer-bottom-v2">
          <div className="footer-legal">
            <Link to="/terms-conditions">Terms of Service</Link>
            <Link to="/privacy-policy">Privacy Policy</Link>
          </div>
          <div className="footer-copyright-v2">
            © 2026 R Tech Solutions India • MSME Registered • Headquarters: Pune, India
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
