import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import './WhyUs.css';

const WhyUs = () => {
  const points = [
    {
      title: 'Precision Engineering',
      desc: 'We focus on high-performance architectures that scale seamlessly with your business growth.',
      icon: <CheckCircle2 className="check-icon" size={24} />
    },
    {
      title: 'Cost-Effective Innovation',
      desc: 'Optimized development cycles designed to deliver enterprise-grade quality on a startup budget.',
      icon: <CheckCircle2 className="check-icon" size={24} />
    },
    {
      title: 'Industry Tech Standards',
      desc: 'Leveraging world-class tech stacks (MERN, AI/ML) to ensure your solution is future-proof.',
      icon: <CheckCircle2 className="check-icon" size={24} />
    },
    {
      title: 'End-to-End Ownership',
      desc: 'Full-cycle management from initial concept and UI/UX to cloud deployment and 24/7 support.',
      icon: <CheckCircle2 className="check-icon" size={24} />
    }
  ];

  return (
    <section className="section why-us-section" id="why-us">
      <div className="container">
        <div className="why-grid">
          <div className="why-content-box morph-slide-up">
            <span className="badge" style={{ margin: '0 0 24px 0' }}>Why Partner With Us</span>
            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '24px' }}>
              We Bridge the Gap Between <span className="text-gradient-premium">Vision & Reality</span>
            </h2>
            <p className="why-subtitle" style={{ textAlign: 'left', margin: '0 0 40px 0' }}>
              At R Tech Solutions, we don’t just write code; we architect solutions that drive revenue, 
              automate complexity, and establish digital authority.
            </p>
            
            <div className="why-points-grid">
              {points.map((point, index) => (
                <div key={index} className="why-point-item">
                  <div className="point-icon-box">{point.icon}</div>
                  <div className="point-text">
                    <h4>{point.title}</h4>
                    <p>{point.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="why-visual">
            <div className="experience-badge glass-premium">
              <span className="exp-num">5+</span>
              <span className="exp-text">Years of Tech Excellence</span>
            </div>
            <img 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop" 
              alt="Strategic Discussion" 
              className="why-img-main"
            />
            <div className="why-blob"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
