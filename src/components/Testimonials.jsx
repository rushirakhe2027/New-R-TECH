import React from 'react';
import { Quote, Star } from 'lucide-react';

const Testimonials = () => {
  const reviews = [
    {
      name: "Saurabh Deshmukh",
      role: "CEO, AgriTech Solutions",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop",
      comment: "R Tech Solutions delivered our supply chain management system ahead of schedule. Their expertise in AI integration is truly world-class.",
      rating: 5
    },
    {
      name: "Anjali Verma",
      role: "Product Head, FinVibe",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop",
      comment: "The UI/UX design they crafted for our mobile app tripled our user engagement within the first month of launch.",
      rating: 5
    },
    {
      name: "Pratik Kamble",
      role: "Founder, EduScale",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop",
      comment: "Highly professional team. They translated our vision into a scalable platform that now handles thousands of concurrent students.",
      rating: 5
    }
  ];

  return (
    <section className="section" style={{ background: 'rgba(0,102,255,0.01)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <span className="badge">Testimonials</span>
          <h2 className="section-title">Trusted by <span className="text-gradient-premium">Industry Leaders</span></h2>
          <p className="section-subtitle">See what our partners and clients have to say about our commitment to excellence.</p>
        </div>

        <div className="testimonials-grid" style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
          gap: '30px' 
        }}>
          {reviews.map((review, index) => (
            <div key={index} className="testimonial-card glass-premium" style={{ 
              padding: '40px', 
              borderRadius: '32px',
              position: 'relative',
              border: '1px solid rgba(0, 102, 255, 0.05)'
            }}>
              <Quote className="text-gradient-premium" style={{ 
                width: '40px', 
                height: '40px', 
                opacity: '0.2', 
                marginBottom: '20px' 
              }} />
              
              <div className="rating" style={{ display: 'flex', gap: '4px', marginBottom: '20px' }}>
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="var(--primary)" color="var(--primary)" />
                ))}
              </div>

              <p style={{ 
                fontStyle: 'italic', 
                color: 'var(--secondary)', 
                fontSize: '1.1rem', 
                lineHeight: '1.7',
                marginBottom: '30px',
                fontWeight: '500' 
              }}>"{review.comment}"</p>

              <div className="client-info" style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <img src={review.image} alt={review.name} style={{ width: '50px', height: '50px', borderRadius: '50%', objectFit: 'cover' }} />
                <div>
                  <h4 style={{ fontWeight: '800', fontSize: '1.1rem', color: 'var(--primary)' }}>{review.name}</h4>
                  <p style={{ color: 'var(--text-light)', fontSize: '0.85rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px' }}>{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
