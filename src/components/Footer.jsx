import React from 'react';
import { Globe, Share2, Github } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-left">
          <div className="logo-wrapper">
            <div className="footer-logo">
              <img src="/assets/r-tech-logo.png" alt="R Tech Solutions" />
              <span>R Tech Solutions</span>
            </div>
          </div>
          <div className="msme-wrapper">
            <img src="/assets/msme-logo.png" alt="MSME Registered" />
          </div>
        </div>
        
        <div className="footer-right">
          <div className="footer-socials">
            <a href="#" className="social-link"><Globe size={20} /></a>
            <a href="#" className="social-link"><Share2 size={20} /></a>
            <a href="#" className="social-link"><Github size={20} /></a>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="footer-bottom">
          <div className="footer-copyright">
            © {new Date().getFullYear()} R Tech Solutions. All rights reserved.
          </div>
          <div className="footer-location">
            Made with ❤️ in Maharashtra, India
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
