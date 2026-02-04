import React from 'react';
import { motion } from 'framer-motion';
import { MousePointer2, Briefcase, Zap, Globe, Smartphone, Cpu, Megaphone, PenTool, Laptop } from 'lucide-react';
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
              {/* Service 1: AI (Top Right) */}
              <motion.div 
                className="floating-element fe-1 glass-premium"
                animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
              >
                <div className="fe-icon icon-ai"><Cpu size={18} /></div>
                <span>AI Solutions</span>
              </motion.div>
              
              {/* Service 2: Web (Bottom Left) */}
              <motion.div 
                className="floating-element fe-2 glass-premium"
                animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
              >
                <div className="fe-icon icon-web"><Globe size={18} /></div>
                <span>Web Dev</span>
              </motion.div>

              {/* Service 3: App (Top Left) */}
              <motion.div 
                className="floating-element fe-3 glass-premium"
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, delay: 1, ease: "easeInOut" }}
              >
                <div className="fe-icon icon-app"><Smartphone size={18} /></div>
                <span>App Dev</span>
              </motion.div>

              {/* Service 4: Marketing (Bottom Right) */}
              <motion.div 
                className="floating-element fe-4 glass-premium"
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 5.5, repeat: Infinity, delay: 1.5, ease: "easeInOut" }}
              >
                <div className="fe-icon icon-mkt"><Megaphone size={18} /></div>
                <span>Marketing</span>
              </motion.div>

              {/* Service 5: Projects (Left Center) */}
              <motion.div 
                className="floating-element fe-5 glass-premium"
                animate={{ x: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, delay: 2, ease: "easeInOut" }}
              >
                <div className="fe-icon icon-proj"><Laptop size={18} /></div>
                <span>Projects</span>
              </motion.div>

              {/* Service 6: UI/UX (Right Center) */}
              <motion.div 
                className="floating-element fe-6 glass-premium"
                animate={{ x: [0, 10, 0] }}
                transition={{ duration: 6.5, repeat: Infinity, delay: 2.5, ease: "easeInOut" }}
              >
                <div className="fe-icon icon-ui"><PenTool size={18} /></div>
                <span>UI/UX</span>
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
