import React from 'react';
import { motion } from 'framer-motion';
import { MousePointer2, Briefcase, Zap, Globe, Smartphone, Cpu, Megaphone, PenTool } from 'lucide-react';
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
                {/* Floating Service Icons */}
                {[
                  { icon: <Globe size={20} />, label: "Web Dev" },
                  { icon: <Smartphone size={20} />, label: "App Dev" },
                  { icon: <Cpu size={20} />, label: "AI & ML" },
                  { icon: <Megaphone size={20} />, label: "Marketing" },
                  { icon: <PenTool size={20} />, label: "UI/UX" }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="floating-element glass-premium"
                    initial={{ 
                      x: Math.random() * 200 - 100, 
                      y: Math.random() * 200 - 100 
                    }}
                    animate={{ 
                      x: [Math.random() * 200 - 100, Math.random() * 200 - 100, Math.random() * 200 - 100],
                      y: [Math.random() * 200 - 100, Math.random() * 200 - 100, Math.random() * 200 - 100],
                      rotate: [0, 10, -10, 0]
                    }}
                    transition={{ 
                      duration: 10 + Math.random() * 10, 
                      repeat: Infinity, 
                      repeatType: "reverse",
                      ease: "easeInOut"
                    }}
                    style={{
                      position: 'absolute',
                      zIndex: 2,
                      padding: '10px 16px',
                      borderRadius: '50px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      fontSize: '0.8rem',
                      fontWeight: '700',
                      background: 'rgba(255, 255, 255, 0.8)',
                      boxShadow: '0 8px 32px rgba(0, 102, 255, 0.15)',
                      whiteSpace: 'nowrap'
                    }}
                  >
                    <div style={{ color: 'var(--primary)' }}>{item.icon}</div>
                    <span>{item.label}</span>
                  </motion.div>
                ))}

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
