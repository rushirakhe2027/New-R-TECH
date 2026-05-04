import React from 'react';
import { Cpu, Globe, Smartphone, Cloud, PenTool, Database } from 'lucide-react';
import './Team.css';

const Team = () => {
  const domains = [
    {
      title: "Artificial Intelligence",
      desc: "Custom machine learning models, predictive analytics, and enterprise AI chatbots.",
      icon: <Cpu size={40} className="domain-icon" />
    },
    {
      title: "Enterprise Web Systems",
      desc: "High-performance, scalable web architectures built on the MERN stack and Next.js.",
      icon: <Globe size={40} className="domain-icon" />
    },
    {
      title: "Mobile Applications",
      desc: "Native and cross-platform mobile experiences for iOS and Android.",
      icon: <Smartphone size={40} className="domain-icon" />
    },
    {
      title: "Cloud Infrastructure",
      desc: "Secure, reliable, and scalable cloud deployments using AWS and Azure.",
      icon: <Cloud size={40} className="domain-icon" />
    },
    {
      title: "UI/UX Design",
      desc: "User-centric interface design focused on conversion and seamless experiences.",
      icon: <PenTool size={40} className="domain-icon" />
    },
    {
      title: "Data Analytics",
      desc: "Transforming raw data into actionable business intelligence and dashboards.",
      icon: <Database size={40} className="domain-icon" />
    }
  ];

  return (
    <section className="section team-section" id="team">
      <div className="container">
        <div className="section-header">
          <span className="badge">Our Domains</span>
          <h2 className="section-title">Core <span className="text-gradient-premium">Expertise</span></h2>
          <p className="section-subtitle">
            We deliver end-to-end technological solutions across these primary domains to accelerate your business growth.
          </p>
        </div>

        <div className="team-grid">
          {domains.map((domain, index) => (
            <div key={index} className="team-card glass-premium domain-card">
              <div className="domain-icon-wrapper">
                {domain.icon}
              </div>
              <div className="member-info">
                <h3>{domain.title}</h3>
                <p>{domain.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
