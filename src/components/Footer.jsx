import React from 'react';
import { Globe, Share2, Github } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-layout">
        <div className="footer-section footer-left">
          <div className="logo-wrapper-small">
            <img src="/assets/r-tech-logo.png" alt="R Tech Solutions" />
            <span>R Tech</span>
          </div>
        </div>
        
        <div className="footer-section footer-center">
            <div className="footer-nav">
                <a href="#about">About</a>
                <a href="#services">Services</a>
                <a href="#portfolio">Portfolio</a>
                <a href="#contact">Contact</a>
            </div>
            <div className="footer-socials-row">
                <a href="#" className="social-icon-minimal"><Globe size={18} /></a>
                <a href="#" className="social-icon-minimal"><Share2 size={18} /></a>
                <a href="#" className="social-icon-minimal"><Github size={18} /></a>
            </div>
        </div>

        <div className="footer-section footer-right">
          <div className="msme-wrapper-small">
            <img src="/assets/msme-logo.png" alt="MSME Registered" />
          </div>
        </div>
      </div>

      <div className="footer-sub-bottom">
        <div className="container">
          <p>© {new Date().getFullYear()} R Tech Solutions • Made with ❤️ in Maharashtra, India</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
