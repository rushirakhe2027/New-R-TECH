import React from 'react';
import { motion } from 'framer-motion';

const TrustBar = () => {
  const brands = [
    { name: "AgriTech", color: "#10B981" },
    { name: "FinVibe", color: "#3B82F6" },
    { name: "EduScale", color: "#F59E0B" },
    { name: "HealthSync", color: "#EF4444" },
    { name: "NeoMarket", color: "#8B5CF6" },
    { name: "CyberCore", color: "#0F172A" }
  ];

  return (
    <div className="trust-bar" style={{ 
      padding: '60px 0', 
      background: 'var(--bg)', 
      borderBottom: '1px solid rgba(0,0,0,0.03)',
      overflow: 'hidden'
    }}>
      <div className="container">
        <p style={{ 
          textAlign: 'center', 
          fontSize: '0.9rem', 
          fontWeight: '700', 
          color: 'var(--text-light)', 
          textTransform: 'uppercase', 
          letterSpacing: '2px',
          marginBottom: '40px',
          opacity: '0.8'
        }}>Empowering Innovation Across Industries</p>
        
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          flexWrap: 'wrap', 
          gap: '60px',
          opacity: '0.6'
        }}>
          {brands.map((brand, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              style={{ 
                fontSize: '1.6rem', 
                fontWeight: '900', 
                color: brand.color,
                fontFamily: 'Inter, sans-serif',
                letterSpacing: '-1px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: brand.color }}></div>
              {brand.name}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustBar;
