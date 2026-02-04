import React from 'react';

const TrustBar = () => {
  const brands = ["AgriTech", "FinVibe", "EduScale", "HealthSync", "NeoMarket", "CyberCore"];

  return (
    <div className="trust-bar" style={{ 
      padding: '40px 0', 
      background: 'white', 
      borderY: '1px solid rgba(0,0,0,0.05)',
      overflow: 'hidden'
    }}>
      <div className="container">
        <p style={{ 
          textAlign: 'center', 
          fontSize: '0.8rem', 
          fontWeight: '800', 
          color: 'var(--text-light)', 
          textTransform: 'uppercase', 
          letterSpacing: '4px',
          marginBottom: '30px',
          opacity: '0.6'
        }}>Strategic Partners & Clients</p>
        
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-around', 
          alignItems: 'center', 
          flexWrap: 'wrap', 
          gap: '40px',
          filter: 'grayscale(100%) opacity(50%)'
        }}>
          {brands.map((brand, index) => (
            <span key={index} style={{ 
              fontSize: '1.8rem', 
              fontWeight: '900', 
              fontFamily: 'Inter, sans-serif',
              letterSpacing: '-1px'
            }}>{brand}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustBar;
