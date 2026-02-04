import React from 'react';
import { Search, PenTool, Code, Rocket } from 'lucide-react';
import './Process.css';

const Process = () => {
  const steps = [
    {
      icon: <Search className="w-8 h-8" />,
      title: "Discovery & Strategy",
      desc: "We analyze your business goals and user needs to create a comprehensive roadmap.",
      color: "#0066FF"
    },
    {
      icon: <PenTool className="w-8 h-8" />,
      title: "Design & UX",
      desc: "Our designers craft intuitive, high-fidelity interfaces that prioritize user engagement.",
      color: "#FF3366"
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Development",
      desc: "We build scalable solutions using cutting-edge stacks like MERN and AI frameworks.",
      color: "#00C2FF"
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Deployment & Support",
      desc: "Seamless launch followed by 24/7 monitoring and performance optimization.",
      color: "#00D1FF"
    }
  ];

  return (
    <section className="section process-section" id="process">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '80px' }} className="morph-slide-up">
          <span className="badge">Workflow</span>
          <h2 className="section-title">Our Development <span className="text-gradient-premium">Process</span></h2>
          <p className="section-subtitle">A systematic approach to transforming complex ideas into high-performance digital products.</p>
        </div>

        <div className="process-grid">
          {/* Connector Line Controlled by CSS */}
          <div className="process-line"></div>

          {steps.map((step, index) => (
            <div key={index} className="process-card glass-premium group">
              <div className="process-number">0{index + 1}</div>
              
              <div className="process-icon-wrapper">
                {step.icon}
              </div>
              
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Process;
