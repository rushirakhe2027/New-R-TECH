import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight, Code2, FileText, CheckCircle } from 'lucide-react';
import './ProjectsSection.css';

const ProjectsSection = () => {
  return (
    <section className="projects-section section">
      <div className="container">
        <div className="projects-flex">
          <div className="projects-content">
            <span className="badge">College Project Support</span>
            <h2 className="section-title text-left">
              Get End-to-End <br />
              <span className="text-primary">Academic Support</span>
            </h2>
            <p className="section-subtitle text-left ml-0">
              Transform your final year ideas into award-winning projects. From custom software 
              development to IEEE research documentation and viva preparation.
            </p>
            
            <div className="mini-features">
              <div className="m-feature">
                <CheckCircle size={18} className="text-primary" />
                <span>Full Source Code & Database</span>
              </div>
              <div className="m-feature">
                <CheckCircle size={18} className="text-primary" />
                <span>Research Paper & Black Book</span>
              </div>
              <div className="m-feature">
                <CheckCircle size={18} className="text-primary" />
                <span>Installation & Viva Guidance</span>
              </div>
            </div>
            
            <div className="action-btns">
              <Link to="/projects" className="btn btn-outline-primary">
                Explore Services
              </Link>
              <a 
                href="https://wa.me/918421812027?text=Hello%20R%20Tech%20Solutions%2C%20I'm%20interested%20in%20project%20services." 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-whatsapp"
              >
                <MessageCircle size={20} />
                WhatsApp Now
              </a>
            </div>
          </div>
          
          <div className="projects-grid-preview">
            <div className="p-preview-card top-left">
               <Code2 size={24} className="text-blue-500 mb-4" />
               <h4 className="font-bold">Software Dev</h4>
               <p className="text-xs text-slate-500">MERN, AI/ML, Apps</p>
            </div>
            <div className="p-preview-card bottom-right">
               <FileText size={24} className="text-purple-500 mb-4" />
               <h4 className="font-bold">Research</h4>
               <p className="text-xs text-slate-500">IEEE Formatting</p>
            </div>
            <div className="center-orb">
               <img src="/assets/r-tech-logo.png" alt="R" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
