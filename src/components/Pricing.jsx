import React from 'react';
import { Check, Shield, Zap, Award } from 'lucide-react';
import './Pricing.css';

const Pricing = () => {
  const plans = [
    {
      name: "Startup",
      price: "₹24,999",
      period: "per project",
      desc: "Perfect for early-stage startups needing a solid foundation.",
      features: [
        "Custom UI/UX Design",
        "Responsive Web Development",
        "Basic SEO Optimization",
        "1 Month Support",
        "Source Code Access"
      ],
      icon: <Zap size={24} />,
      popular: false
    },
    {
      name: "Business",
      price: "₹74,999",
      period: "per project",
      desc: "Advanced solutions for growing businesses and enterprises.",
      features: [
        "Everything in Startup",
        "E-commerce Integration",
        "Advanced AI Chatbot",
        "Performance Optimization",
        "3 Months Support",
        "Cloud Deployment"
      ],
      icon: <Award size={24} />,
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "quote based",
      desc: "Complex systems built with precision for large organizations.",
      features: [
        "Everything in Business",
        "Custom AI/ML Models",
        "Mobile App Development",
        "Dedicated Team",
        "24/7 Priority Support",
        "Security Audit"
      ],
      icon: <Shield size={24} />,
      popular: false
    }
  ];

  return (
    <section className="section pricing-section" id="pricing">
      <div className="container">
        <div className="section-header">
          <span className="badge">Pricing Plans</span>
          <h2 className="section-title">Investment in <span className="text-gradient-premium">Growth</span></h2>
          <p className="section-subtitle">
            Transparent pricing tailored to your project scope. No hidden fees, just pure innovation.
          </p>
        </div>

        <div className="pricing-grid">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`pricing-card ${plan.popular ? 'popular' : ''} glass-premium`}
            >
              {plan.popular && <div className="popular-tag">Most Popular</div>}
              <div className="plan-icon">{plan.icon}</div>
              <h3 className="plan-name">{plan.name}</h3>
              <div className="plan-price-box">
                <span className="price">{plan.price}</span>
                <span className="period">/{plan.period}</span>
              </div>
              <p className="plan-desc">{plan.desc}</p>
              
              <ul className="plan-features">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex}>
                    <Check size={16} className="check-icon" />
                    {feature}
                  </li>
                ))}
              </ul>

              <button className={`btn ${plan.popular ? 'btn-primary' : 'btn-outline'} btn-full`}>
                Choose {plan.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
