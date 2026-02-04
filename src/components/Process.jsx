import React from 'react';
import { Search, PenTool, Code, Rocket } from 'lucide-react';

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
    <section className="section overflow-hidden" id="process">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '80px' }} className="morph-slide-up">
          <span className="badge">Workflow</span>
          <h2 className="section-title">Our Development <span className="text-gradient-premium">Process</span></h2>
          <p className="section-subtitle">A systematic approach to transforming complex ideas into high-performance digital products.</p>
        </div>

        <div className="process-grid" style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', 
          gap: '30px',
          position: 'relative'
        }}>
          {/* Connector Line for Desktop */}
          <div className="process-line" style={{
            position: 'absolute',
            top: '40px',
            left: '10%',
            right: '10%',
            height: '2px',
            background: 'linear-gradient(90deg, transparent, rgba(0, 102, 255, 0.2), transparent)',
            zIndex: 0,
            display: 'none' // Hidden by default, show in Media Query if needed
          }}></div>

          {steps.map((step, index) => (
            <div key={index} className="process-card glass-premium group" style={{ 
              padding: '40px', 
              borderRadius: '32px', 
              textAlign: 'center',
              position: 'relative',
              zIndex: 1,
              transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
              background: 'white', // Ensure solid background for separate box look
              border: '1px solid rgba(0, 102, 255, 0.1)', // Distinct border
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)' // Subtle shadow for depth
            }}>
              <div className="process-number" style={{
                position: 'absolute',
                top: '20px',
                right: '25px',
                fontSize: '3.5rem',
                fontWeight: '900',
                opacity: '0.15', // Increased opacity for better visibility
                color: 'var(--primary)',
                fontFamily: 'var(--font-display)', // Use theme font
                lineHeight: 1
              }}>0{index + 1}</div>
              
              <div className="process-icon-wrapper" style={{
                width: '80px',
                height: '80px',
                margin: '0 auto 25px',
                background: 'rgba(0,102,255,0.05)',
                borderRadius: '24px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--primary)',
                transition: 'all 0.3s ease',
                border: '1px solid rgba(0,102,255,0.1)',
                position: 'relative', 
                zIndex: 2 // Ensure icon is above number if they overlap
              }}>
                {step.icon}
              </div>
              
              <h3 style={{ fontSize: '1.4rem', marginBottom: '15px', color: 'var(--secondary)', position: 'relative', zIndex: 2 }}>{step.title}</h3>
              <p style={{ color: 'var(--text-light)', fontSize: '0.95rem', lineHeight: '1.6', position: 'relative', zIndex: 2 }}>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
