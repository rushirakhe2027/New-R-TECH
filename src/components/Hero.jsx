import React from 'react';
import { motion } from 'framer-motion';
import { MousePointer2, Briefcase, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container hero-container">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="badge">Empowering Digital Innovation</span>
          
          {/* Hackathons Announcement */}
          <motion.div 
            className="hackathon-banner"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Zap size={18} className="banner-icon" />
            <span className="banner-text">
              <strong>Buildathon 2026</strong> is now live! ₹30,000 Prize Pool
            </span>
            <Link to="/hackathons" className="banner-link">
              Register Now →
            </Link>
          </motion.div>

          <h1>Building Real-World Software, AI & Digital Solutions</h1>
          <p className="hero-subtext">
            From concept to deployment, we provide end-to-end execution for startups and businesses. 
            Based in Maharashtra, India, we turn complex ideas into seamless digital experiences.
          </p>
          <div className="hero-btns">
            <button className="btn btn-primary">
              Get a Free Consultation
            </button>
            <a href="#services" className="btn btn-outline">
              Our Services
            </a>
          </div>
        </motion.div>

        <motion.div 
          className="hero-image-wrapper"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img src="/assets/hero_workspace.png" alt="Tech Solutions" className="hero-main-img" />
          
          <motion.div 
            className="floating-card"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="card-icon">
              <MousePointer2 size={20} color="white" />
            </div>
            <div>
              <div className="card-title">Active Projects</div>
              <div className="card-stats">20+ Projects in progress</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
