import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import './WhyUs.css';

const WhyUs = () => {
  const points = [
    {
      title: 'Practical Execution',
      desc: 'No fluff. We focus on building features that work for your users and your bottom line.'
    },
    {
      title: 'Budget-Friendly Solutions',
      desc: 'High-quality engineering doesn\'t have to break the bank. Optimized for startups.'
    },
    {
      title: 'Industry-Standard Tech',
      desc: 'We use the same tech stacks as modern tech giants to ensure your scalability.'
    },
    {
      title: 'End-to-End Ownership',
      desc: 'From initial wireframes to server deployment and maintenance, we own it all.'
    }
  ];

  return (
    <section className="section bg-light" id="why-us">
      <div className="container why-container">
        <div className="why-image">
          <img src="/assets/discussion_meeting.png" alt="Why Choose Us" />
        </div>
        <div className="why-content">
          <h2>Why R Tech Solutions?</h2>
          <p className="why-subtitle">
            We don’t just write code; we solve real-world problems with practical, affordable, and scalable execution.
          </p>
          
          <div className="why-points">
            {points.map((point, index) => (
              <div key={index} className="why-point">
                <CheckCircle2 className="check-icon" size={24} />
                <div>
                  <h4>{point.title}</h4>
                  <p>{point.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
