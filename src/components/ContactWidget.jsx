import React from 'react';
import { MessageCircle } from 'lucide-react';

const ContactWidget = () => {
  return (
    <div style={{
      position: 'fixed',
      bottom: '30px',
      right: '30px',
      zIndex: 1000,
      display: 'flex',
      flexDirection: 'column',
      gap: '15px',
      alignItems: 'center'
    }}>
      {/* Tooltip */}
      <div className="glass-premium" style={{
        padding: '10px 20px',
        borderRadius: '15px',
        fontSize: '0.8rem',
        fontWeight: 'bold',
        color: 'var(--primary)',
        boxShadow: '0 10px 25px rgba(0, 102, 255, 0.1)',
        border: '1px solid rgba(0, 102, 255, 0.1)',
        animation: 'float 3s ease-in-out infinite'
      }}>
        Need Help? Talk to us!
      </div>
      
      {/* WhatsApp Button */}
      <a 
        href="https://wa.me/918421812027" 
        target="_blank" 
        rel="noopener noreferrer"
        style={{
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          boxShadow: '0 15px 35px rgba(37, 211, 102, 0.3)',
          transition: 'all 0.3s ease',
          cursor: 'pointer'
        }}
        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1) rotate(10deg)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1) rotate(0deg)'}
      >
        <MessageCircle size={28} />
      </a>
    </div>
  );
};

export default ContactWidget;
