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
      </div>
      <div className="container hero-container">
        <motion.div 
          className="hero-content morph-slide-up"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="hero-text-wrapper">
            <span className="badge">Software Engineering Excellence</span>
            
            <h1>Transforming Ideas into <span className="text-gradient">Digital Reality</span></h1>
            <p className="hero-subtext">
              We provide end-to-end execution for Software, AI & Mobile solutions. 
              From innovative startups to enterprise-grade systems, R Tech Solutions is your partner in technical excellence.
            </p>
          </div>
          
          <div className="hero-btns-wrapper">
            <div className="hero-btns">
              <a href="#contact" className="btn btn-primary">
                Build Your Project
              </a>
              <Link to="/hackathons" className="btn btn-outline">
                Buildathon 2026
              </Link>
            </div>

            {/* Integrated Hackathon Teaser */}
            <motion.div 
              className="hackathon-teaser glass"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <Zap size={16} className="teaser-icon" />
              <span>Join our <strong>Buildathon 2026</strong> — Register by Feb 28th</span>
              <Link to="/hackathons" className="teaser-link">Learn More</Link>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
