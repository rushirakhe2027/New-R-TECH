import React from 'react';
import { motion } from 'framer-motion';
import { MousePointer2, Briefcase, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-bg-elements">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="hero-grid-overlay"></div>
      </div>
      
      <div className="container hero-container">
        <div className="hero-content-overhaul morph-slide-up">
          <div className="hero-main-text">
            <motion.span 
              className="section-badge-premium"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Briefcase size={14} /> Leading Tech Excellence
            </motion.span>
            
            <h1 className="hero-title">
              Crafting <span className="text-gradient-premium">Intelligent</span> <br /> 
              Digital Frontiers
            </h1>
            
            <p className="hero-subtext-overhaul">
              R Tech Solutions delivers high-performance Software, AI, and Mobile ecosystems 
              engineered for the future of business.
            </p>

            <div className="hero-cta-group">
              <a href="#contact" className="btn btn-primary btn-large">
                Start Your Project
              </a>
              <Link to="/hackathons" className="btn btn-outline btn-large">
                Explore Buildathons
              </Link>
            </div>

            <div className="hero-trusted-by">
              <div className="avatar-stack">
                <img src="https://i.pravatar.cc/150?u=1" alt="User" />
                <img src="https://i.pravatar.cc/150?u=2" alt="User" />
                <img src="https://i.pravatar.cc/150?u=3" alt="User" />
                <div className="avatar-plus">+20</div>
              </div>
              <p>Trusted by 20+ Startups & Innovations</p>
            </div>
          </div>

          <div className="hero-visual-elements">
            <div className="floating-elements-container">
              <motion.div 
                className="floating-element fe-1 glass-premium"
                animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
              >
                <div className="fe-icon ai">AI</div>
                <span>Neural Networks</span>
              </motion.div>
              
              <motion.div 
                className="floating-element fe-2 glass-premium"
                animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
              >
                <div className="fe-icon web">WEB</div>
                <span>Scalable Apps</span>
              </motion.div>

              <div className="hero-main-visual">
                <div className="visual-circle"></div>
                <div className="visual-circle-outer"></div>
                <img src="/assets/r-tech-logo.png" alt="R Tech" className="visual-logo-center" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
