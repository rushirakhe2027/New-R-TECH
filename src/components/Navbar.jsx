import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="container nav-container">
        <Link to="/" className="logo">
          <img src="/assets/r-tech-logo.png" alt="R Tech Solutions" className="h-8 w-auto" />
          <span>R Tech Solutions</span>
        </Link>

        <div className={`nav-links ${isOpen ? 'active' : ''}`}>
          <div className="nav-menu">
            <a href="/#about" onClick={() => setIsOpen(false)}>About</a>
            <Link to="/projects" onClick={() => setIsOpen(false)}>Projects</Link>
            <a href="/#services" onClick={() => setIsOpen(false)}>Services</a>
{/* <Link to="/hackathons" onClick={() => setIsOpen(false)}>Hackathons</Link> */}
            <Link to="/careers" onClick={() => setIsOpen(false)}>Careers</Link>
          </div>
          <div className="nav-right">
            <a 
              href="https://wa.me/918421812027?text=Hello%20R%20Tech%20Solutions%2C%20I'd%20like%20to%20talk%20about%20a%20project." 
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary nav-cta" 
              style={{ color: '#ffffff', fontWeight: '800' }}
            >
              Let's Talk
            </a>
          </div>
        </div>

        <div className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
