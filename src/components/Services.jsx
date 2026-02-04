import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Smartphone, Cpu, Megaphone, Laptop, PenTool } from 'lucide-react';
import './Services.css';

const services = [
  {
    icon: <Globe size={24} />,
    title: 'Web Development',
    desc: 'Custom responsive websites and high-performance web applications using modern stacks like React, Next.js, and Node.'
  },
  {
    icon: <Smartphone size={24} />,
    title: 'Mobile App Development',
    desc: 'Native and cross-platform mobile apps for iOS and Android, focusing on intuitive UX and high reliability.'
  },
  {
    icon: <Cpu size={24} />,
    title: 'AI/ML Solutions',
    desc: 'Intelligent automation, predictive analytics, and custom AI integrations to drive business efficiency.'
  },
  {
    icon: <Megaphone size={24} />,
    title: 'Digital Marketing',
    desc: 'Strategic growth plans, SEO, and social media management to put your brand in front of the right audience.'
  },
  {
    icon: <Laptop size={24} />,
    title: 'Student Projects',
    desc: 'Practical hands-on assistance for final year projects, internships, and technical mentorship.'
  },
  {
    icon: <PenTool size={24} />,
    title: 'UI/UX Design',
    desc: 'Creating user-centric design flows and beautiful interfaces that convert visitors into loyal customers.'
  }
];

const Services = () => {
  return (
    <section className="section" id="services">
      <div className="container morph-slide-up">
        <h2>Our Expert Services</h2>
        <p className="section-subtitle">
          Comprehensive technology solutions designed to help you scale, automate, and lead in the digital era.
        </p>

        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              className="service-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
