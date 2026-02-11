import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Careers = () => {
  const internships = [
    { title: "Web Development", type: "Internship", duration: "3-6 Months" },
    { title: "Android Development", type: "Internship", duration: "3-6 Months" },
    { title: "Full Stack Development", type: "Internship", duration: "6 Months" },
    { title: "MERN Stack Development", type: "Internship", duration: "4-6 Months" },
    { title: "Python for Data Science", type: "Internship", duration: "3-6 Months" },
    { title: "Data Analytics", type: "Internship", duration: "3-6 Months" },
    { title: "SaaS Development", type: "Internship", duration: "6 Months" },
  ];

  return (
    <div className="page-wrapper">
      <Navbar />
      <section className="section" style={{ paddingTop: '160px', paddingBottom: '100px' }}>
        <div className="container">
          <div className="careers-header morph-slide-up" style={{ textAlign: 'center', marginBottom: '60px' }}>
            <span className="badge">Careers</span>
            <h1 className="hero-title" style={{ fontSize: '3.5rem', textAlign: 'center', margin: '0 auto 24px auto' }}>Join the <span className="text-gradient-premium">Future</span> of Tech</h1>
            <p className="section-subtitle">
              Passionate about building scalable solutions? Explore our internship opportunities 
              and start your journey with R Tech Solutions.
            </p>
          </div>

          <div className="job-grid" style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', 
            gap: '24px' 
          }}>
            {internships.map((job, index) => (
              <div key={index} className="job-card glass-premium" style={{ 
                padding: '32px', 
                borderRadius: '24px',
                border: '1px solid rgba(0, 102, 255, 0.1)',
                transition: 'transform 0.3s ease'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
                  <span style={{ 
                    padding: '6px 12px', 
                    background: 'rgba(0,102,255,0.05)', 
                    color: 'var(--primary)', 
                    borderRadius: '50px', 
                    fontSize: '0.75rem', 
                    fontWeight: '800',
                    textTransform: 'uppercase'
                  }}>{job.type}</span>
                </div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '12px', color: 'var(--secondary)' }}>{job.title}</h3>
                <p style={{ color: 'var(--text-light)', fontSize: '0.9rem', marginBottom: '24px' }}>
                  Work on real-world projects and gain hands-on experience in {job.title}.
                </p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '0.85rem', color: 'var(--primary)', fontWeight: '600' }}>{job.duration}</span>
                  <a href="https://forms.gle/zrzteYt43NcZGFhz5" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ padding: '8px 16px', fontSize: '0.85rem' }}>Apply Now</a>
                </div>
              </div>
            ))}
          </div>

          <div className="careers-cta glass" style={{ 
            marginTop: '80px', 
            padding: '40px', 
            borderRadius: '32px', 
            textAlign: 'center',
            border: '1px dashed var(--primary)'
          }}>
            <h3>Don't see a perfect fit?</h3>
            <p style={{ color: 'var(--text-light)', margin: '15px 0 25px 0' }}>
              We are always looking for exceptional talent. Send your resume to our team.
            </p>
            <a href="mailto:support@rtechsolutions.online" className="btn btn-outline">Send Resume</a>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Careers;
