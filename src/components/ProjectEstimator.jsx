import React, { useState } from 'react';
import { Calculator, Zap } from 'lucide-react';
import './ProjectEstimator.css';

const ProjectEstimator = () => {
  const [service, setService] = useState('Web');
  const [complexity, setComplexity] = useState('Medium');

  const estimates = {
    'Web': { 'Low': '₹40k - ₹80k', 'Medium': '₹80k - ₹1.5L', 'High': '₹2L+' },
    'App': { 'Low': '₹50k - ₹1L', 'Medium': '₹1L - ₹2.5L', 'High': '₹3L+' },
    'AI': { 'Low': '₹75k - ₹1.5L', 'Medium': '₹1.5L - ₹4L', 'High': '₹5L+' },
    'IoT': { 'Low': '₹60k - ₹1L', 'Medium': '₹1L - ₹3L', 'High': '₹4L+' }
  };

  return (
    <section className="section estimator-section" id="estimator">
      <div className="container">
        <div className="estimator-card glass-premium">
          <div className="estimator-header">
            <Calculator size={32} className="text-gradient-premium" />
            <h3>Project <span className="text-gradient-premium">Estimator</span></h3>
            <p>Get a rough idea of your project investment in seconds.</p>
          </div>

          <div className="estimator-body">
            <div className="estimator-field">
              <label>Service Type</label>
              <div className="estimator-options">
                {['Web', 'App', 'AI', 'IoT'].map(s => (
                  <button 
                    key={s} 
                    className={service === s ? 'active' : ''} 
                    onClick={() => setService(s)}
                  >
                    {s === 'Web' ? 'Web Dev' : s === 'App' ? 'App Dev' : s === 'AI' ? 'AI Solutions' : 'IoT / Hardware'}
                  </button>
                ))}
              </div>
            </div>

            <div className="estimator-field">
              <label>Complexity</label>
              <div className="estimator-options">
                {['Low', 'Medium', 'High'].map(c => (
                  <button 
                    key={c} 
                    className={complexity === c ? 'active' : ''} 
                    onClick={() => setComplexity(c)}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>

            <div className="estimator-result">
              <span className="result-label">Estimated Investment</span>
              <span className="result-value text-gradient-premium">{estimates[service][complexity]}</span>
              <p className="result-note">*Subject to final scope discussion.</p>
            </div>
            
            <a href="#contact" className="btn btn-primary btn-full">
              Get Detailed Quote <Zap size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectEstimator;
