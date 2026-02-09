import React, { useEffect } from 'react';
import { 
  Code2, 
  FileSearch, 
  Presentation, 
  Settings2, 
  UserCheck, 
  BookOpen, 
  CheckCircle2, 
  ArrowRight,
  MessageCircle,
  Sparkles
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './Projects.css';

const Projects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const projectServices = [
    {
      icon: <Code2 className="text-blue-600" size={32} />,
      title: "Custom Software Dev",
      description: "Expert development in Web, Mobile Apps, and AI/ML algorithms tailored to your project requirements.",
      features: ["React/Next.js & Node.js", "Python & Machine Learning"],
      color: "blue"
    },
    {
      icon: <FileSearch className="text-purple-600" size={32} />,
      title: "Research & Documentation",
      description: "Professional technical writing for research papers, journals, and comprehensive project reports.",
      features: ["IEEE/ACM Formatting", "Plagiarism-Free Content"],
      color: "purple"
    },
    {
      icon: <Presentation className="text-orange-500" size={32} />,
      title: "Presentation & PPT",
      description: "High-impact, professional slide decks designed to impress examiners and simplify complex concepts.",
      features: ["Dynamic Visualization", "Infographic Design"],
      color: "orange"
    },
    {
      icon: <Settings2 className="text-emerald-500" size={32} />,
      title: "Full Installation",
      description: "Remote or on-site environment setup. We ensure the project runs flawlessly on your system.",
      features: ["Server Deployment", "Dependency Management"],
      color: "emerald"
    },
    {
      icon: <UserCheck className="text-pink-500" size={32} />,
      title: "Viva & Interview Prep",
      description: "Dedicated mock sessions and detailed code explanations to build your confidence for the final viva.",
      features: ["Q&A Mock Sessions", "Concept Clarity"],
      color: "pink"
    },
    {
      icon: <BookOpen className="text-cyan-500" size={32} />,
      title: "Black Book & Reporting",
      description: "Final submission formatting following specific university guidelines and black-book standards.",
      features: ["Spiral/Hardbound Ready", "Standard Templates"],
      color: "cyan"
    }
  ];

  return (
    <div className="projects-page">
      <Navbar />
      
      {/* Hero Section */}
      <section className="projects-hero">
        <div className="container">
          <div className="hero-content">
            <div className="badge animate-fade-in-up">
              <Sparkles size={16} className="inline-block mr-2" />
              LEADING TECH EXCELLENCE
            </div>
            <h1 className="hero-title animate-fade-in-up delay-100">
              End-to-End College <br />
              <span className="text-primary-blue">Project Support</span>
            </h1>
            <p className="hero-subtitle animate-fade-in-up delay-200 text-gray-400">
              Master your academic journey with high-performance Software, AI research, and specialized documentation 
              engineered for excellence. We handle the tech, you lead the presentation.
            </p>
            <div className="hero-actions animate-fade-in-up delay-300">
              <a href="https://wa.me/918421812027" target="_blank" rel="noopener noreferrer" className="btn btn-primary-blue group">
                Start Your Project
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <button className="btn btn-outline-white">Explore Samples</button>
            </div>
            
            <div className="student-stats animate-fade-in-up delay-400">
              <div className="avatar-group">
                <img src="https://i.pravatar.cc/150?u=1" alt="Student" />
                <img src="https://i.pravatar.cc/150?u=2" alt="Student" />
                <img src="https://i.pravatar.cc/150?u=3" alt="Student" />
                <div className="avatar-more">+500</div>
              </div>
              <p className="text-sm text-gray-500 font-medium ml-4">Trusted by students from 50+ Top Universities</p>
            </div>
          </div>
          
          <div className="hero-visual animate-fade-in-up delay-200">
            <div className="visual-container">
              <div className="floating-card ai-models">
                <Sparkles className="text-pink-500" size={20} />
                <span>AI Models</span>
              </div>
              <div className="main-visual-box">
                 <div className="tech-pattern"></div>
                 <div className="box-inner">
                    <img src="/assets/r-tech-logo.png" alt="R Tech" className="visual-logo" />
                 </div>
              </div>
              <div className="floating-card full-code">
                 <Code2 className="text-blue-500" size={20} />
                 <span>Full Code</span>
              </div>
              <div className="floating-card paper-ready">
                 <span>Paper Ready</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Floating Help Widget */}
        <div className="help-widget">
           <div className="help-popup">
              <p className="text-xs font-bold whitespace-nowrap">Need Help? Talk to us!</p>
           </div>
           <a href="https://wa.me/918421812027" target="_blank" rel="noopener noreferrer" className="help-button">
              <MessageCircle size={24} />
           </a>
        </div>
      </section>

      {/* WhatsApp Highlight Section */}
      <section className="whatsapp-highlight">
        <div className="container">
          <div className="whatsapp-card glass-premium">
            <div className="whatsapp-icon-large">
              <MessageCircle size={48} />
            </div>
            <div className="whatsapp-info">
              <h3>Connect Directly on WhatsApp</h3>
              <p>Skip the email and get instant answers about your project. Our experts are ready to help you 24/7.</p>
            </div>
            <a 
              href="https://wa.me/918421812027?text=Hello%20R%20Tech%20Solutions%2C%20I'm%20on%20the%20Projects%20page%20and%20interested%20in%20starting%20a%20project." 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-whatsapp-large"
            >
              <MessageCircle size={20} className="mr-2" />
              Chat on WhatsApp Now
            </a>
          </div>
        </div>
      </section>

      {/* Lifecycle Section */}
      <section className="lifecycle-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Complete Project Lifecycle</h2>
            <p className="section-subtitle">
              We don't just build code; we provide a complete ecosystem of support to 
              ensure you graduate with flying colors.
            </p>
          </div>
          
          <div className="services-grid">
            {projectServices.map((service, index) => (
              <div key={index} className="service-card group">
                <div className="service-icon-box">
                  {service.icon}
                </div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-desc">{service.description}</p>
                <div className="service-features">
                  {service.features.map((feature, fIndex) => (
                    <div key={fIndex} className="feature-item">
                      <CheckCircle2 size={14} className={`text-${service.color}-500`} />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="projects-cta">
        <div className="container">
          <div className="cta-banner">
            <h2 className="cta-title">Ready to excel in your final <br /> year project?</h2>
            <p className="cta-desc">
              Join hundreds of successful students who transformed their ideas into 
              top-grade projects with our expert guidance.
            </p>
            <div className="cta-buttons">
              <a href="https://wa.me/918421812027" target="_blank" rel="noopener noreferrer" className="btn btn-white text-blue-700">Get Started Today</a>
              <a href="https://wa.me/918421812027" target="_blank" rel="noopener noreferrer" className="btn btn-outline-white">Talk to an Expert</a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Projects;
