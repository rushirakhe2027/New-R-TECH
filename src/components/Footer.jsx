import React from 'react';
import { Globe, Share2, Github } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-left">
          <div className="footer-logo">
            <div className="logo-icon-small"></div>
            <span>R Tech Solutions</span>
          </div>
          <div className="msme-badge">
            <img src="/assets/msme-logo.png" alt="MSME Registered" />
          </div>
        </div>
        
        <div className="footer-copyright">
          © {new Date().getFullYear()} R Tech Solutions. All rights reserved. Made in Maharashtra, India.
        </div>
        
        <div className="footer-socials">
          <a href="#"><Globe size={20} /></a>
          <a href="#"><Share2 size={20} /></a>
          <a href="#"><Github size={20} /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
