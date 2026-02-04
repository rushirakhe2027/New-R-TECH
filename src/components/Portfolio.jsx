import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Layers } from 'lucide-react';
import './Portfolio.css';

const projects = [
  {
    id: 1,
    title: "E-Shark Investment Platform",
    category: "Web App",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    desc: "A comprehensive platform connecting innovators with investors, featuring secure pitching and real-time chat.",
    tech: ["React", "Node.js", "Firebase"]
  },
  {
    id: 2,
    title: "MediBuddy Health Assistant",
    category: "AI/ML",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop",
    desc: "AI-driven symptom triage and medical alert system with real-time biometric tracking.",
    tech: ["Python", "TensorFlow", "React Native"]
  },
  {
    id: 3,
    title: "Finvera Banking Portal",
    category: "FinTech",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070&auto=format&fit=crop",
    desc: "A secure, enterprise-grade banking dashboard with automated tax generation and reporting.",
    tech: ["Next.js", "PostgreSQL", "Tailwind"]
  },
  {
    id: 4,
    title: "TrustCart E-commerce",
    category: "E-commerce",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
    desc: "Feature-rich online shopping portal with advanced filtering and seamless checkout flow.",
    tech: ["Vite", "Commerce.js", "Stripe"]
  },
  {
    id: 5,
    title: "AI Trade Bot",
    category: "AI/ML",
    image: "https://images.unsplash.com/photo-1611974714851-eb6053e623e0?q=80&w=2070&auto=format&fit=crop",
    desc: "High-precision trading bot with sentiment analysis and automated execution strategies.",
    tech: ["Python", "Pandas", "MT5 Wrapper"]
  },
  {
    id: 6,
    title: "ForgeSpace Dev Hub",
    category: "Web App",
    image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2070&auto=format&fit=crop",
    desc: "Full-stack developer community platform with interactive code-sharing features.",
    tech: ["MERN Stack", "Socket.io", "AWS"]
  }
];

const categories = ["All", "Web App", "AI/ML", "FinTech", "E-commerce"];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section className="section portfolio-section" id="portfolio">
      <div className="container">
        <span className="badge">Our Portfolio</span>
        <h2>Showcasing Excellence</h2>
        <p className="section-subtitle">
          Over 20+ successful projects delivered, ranging from innovative startups to complex enterprise solutions.
        </p>

        <div className="filter-tabs">
          {categories.map(cat => (
            <button 
              key={cat}
              className={`filter-tab ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div layout className="portfolio-grid">
          <AnimatePresence mode='popLayout'>
            {filteredProjects.map((project) => (
              <motion.div 
                layout
                key={project.id}
                className="portfolio-card"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
              >
                <div className="card-img-wrapper">
                  <img src={project.image} alt={project.title} />
                  <div className="card-overlay">
                    <div className="overlay-actions">
                      <button className="action-btn"><ExternalLink size={20} /></button>
                      <button className="action-btn"><Github size={20} /></button>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <span className="project-category">{project.category}</span>
                  <h3>{project.title}</h3>
                  <p>{project.desc}</p>
                  <div className="tech-stack">
                    {project.tech.map(t => <span key={t} className="tech-tag">{t}</span>)}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="portfolio-footer">
          <p>Want to see more? <strong><a href="#contact">Let's discuss your project</a></strong></p>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
