import React from 'react';
import { Globe, Share2, Github } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-simple-content">
        <div className="footer-nav">
          <Link to="/careers">Careers</Link>
          <Link to="/faq">FAQ</Link>
          <Link to="/terms-conditions">Terms</Link>
          <Link to="/privacy-policy">Privacy</Link>
          <a href="#contact">Contact</a>
        </div>
        
        <div className="footer-socials">
          <a href="#" className="social-icon-minimal"><Globe size={18} /></a>
          <a href="#" className="social-icon-minimal"><Share2 size={18} /></a>
          <a href="#" className="social-icon-minimal"><Github size={18} /></a>
        </div>

        <div className="footer-copyright-simple">
          © 2026 R Tech Solutions India • MSME Registered • All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
