import React from 'react';
import './CTA.css';

const CTA = () => {
  return (
    <section className="section cta-section">
      <div className="container">
        <div className="cta-card">
          <div className="cta-grid-pattern"></div>
          <div className="cta-content">
            <h2>Have an idea? Let’s build it.</h2>
            <p>
              Whether you are a student looking for guidance or a business ready to scale, we are ready to build your next big thing.
            </p>
            <div className="cta-btns">
              <button className="btn btn-white">Start Your Project</button>
              <button className="btn btn-outline-white">Schedule a Call</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
