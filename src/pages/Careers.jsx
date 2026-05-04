import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Coffee, Rocket, Heart, Zap } from 'lucide-react';
import './Careers.css';

const Careers = () => {
  const jobs = [
    { title: "Senior AI Engineer", type: "Full-Time", duration: "Remote / Pune", desc: "Lead our AI vertical and architect complex machine learning ecosystems." },
    { title: "Full Stack Developer", type: "Full-Time", duration: "Hybrid", desc: "Scale our enterprise web platforms using MERN stack and Next.js." },
    { title: "UI/UX Specialist", type: "Full-Time", duration: "Pune", desc: "Craft stunning digital experiences for our nationwide client base." },
  ];

  const internships = [
    { title: "Web Development", type: "Internship", duration: "3-6 Months" },
    { title: "MERN Stack Development", type: "Internship", duration: "4-6 Months" },
    { title: "Python for AI/ML", type: "Internship", duration: "3-6 Months" },
    { title: "Data Analytics", type: "Internship", duration: "3-6 Months" },
  ];

  const perks = [
    { icon: <Coffee size={24} />, title: "Great Culture", desc: "Work in a vibrant, innovation-first environment." },
    { icon: <Rocket size={24} />, title: "Growth", desc: "Direct mentorship from industry veterans." },
    { icon: <Heart size={24} />, title: "Health", desc: "Comprehensive health and wellness benefits." },
    { icon: <Zap size={24} />, title: "Flexibility", desc: "Remote and hybrid work options available." }
  ];

  return (
    <div className="page-wrapper">
      <Navbar />
      <section className="careers-section">
        <div className="container">
          <div className="section-header morph-slide-up" style={{ textAlign: 'center', marginBottom: '80px' }}>
            <span className="badge">Careers</span>
            <h1 className="hero-title" style={{ fontSize: '3.5rem', textAlign: 'center', margin: '0 auto 24px auto' }}>Join the <span className="text-gradient-premium">Future</span> of Tech</h1>
            <p className="section-subtitle">
              We're looking for visionary engineers and designers to help us architect the next generation of digital solutions.
            </p>
          </div>

          <h2 className="section-title" style={{ fontSize: '2rem', textAlign: 'left', marginBottom: '40px' }}>Open Roles</h2>
          <div className="job-grid">
            {jobs.map((job, index) => (
              <div key={index} className="job-card glass-premium">
                <span className="job-type-badge">{job.type}</span>
                <h3>{job.title}</h3>
                <p>{job.desc}</p>
                <div className="job-footer">
                  <span className="job-duration">{job.duration}</span>
                  <a href="mailto:careers@rtechsolutions.online" className="btn btn-primary" style={{ padding: '8px 20px' }}>Apply</a>
                </div>
              </div>
            ))}
          </div>

          <h2 className="section-title" style={{ fontSize: '2rem', textAlign: 'left', margin: '80px 0 40px' }}>Internship Programs</h2>
          <div className="job-grid">
            {internships.map((job, index) => (
              <div key={index} className="job-card glass-premium">
                <span className="job-type-badge">{job.type}</span>
                <h3>{job.title}</h3>
                <p>Gain hands-on experience working on real-world client projects under expert guidance.</p>
                <div className="job-footer">
                  <span className="job-duration">{job.duration}</span>
                  <a href="https://forms.gle/zrzteYt43NcZGFhz5" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ padding: '8px 20px' }}>Register</a>
                </div>
              </div>
            ))}
          </div>

          <div className="perks-grid">
            {perks.map((perk, index) => (
              <div key={index} className="perk-item">
                <div className="perk-icon-box">{perk.icon}</div>
                <h4>{perk.title}</h4>
                <p>{perk.desc}</p>
              </div>
            ))}
          </div>

          <div className="careers-cta">
            <h3>Ready to Make an Impact?</h3>
            <p>If you don't see a role that fits but think you belong here, reach out!</p>
            <a href="mailto:support@rtechsolutions.online" className="btn btn-primary btn-large" style={{ marginTop: '30px' }}>Send Open Application</a>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Careers;
