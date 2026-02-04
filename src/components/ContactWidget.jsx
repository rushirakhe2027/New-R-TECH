import React, { useState, useRef } from 'react';
import { MessageCircle, X, ChevronLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ContactWidget = () => {
  const [isMinimized, setIsMinimized] = useState(false);
  const constraintsRef = useRef(null);

  return (
    <>
      <div 
        ref={constraintsRef} 
        style={{ 
          position: 'fixed', 
          top: 0, 
          left: 0, 
          width: '100vw', 
          height: '100vh', 
          pointerEvents: 'none', 
          zIndex: 1000 
        }} 
      />

      <AnimatePresence mode="wait">
        {!isMinimized ? (
          <motion.div
            key="open-widget"
            drag
            dragConstraints={constraintsRef}
            dragElastic={0.1}
            dragMomentum={false}
            initial={{ scale: 0, opacity: 0, x: 0, y: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            style={{
              position: 'fixed',
              bottom: '30px',
              right: '30px',
              zIndex: 1001,
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
              alignItems: 'center',
              cursor: 'grab',
              pointerEvents: 'auto'
            }}
            whileDrag={{ cursor: 'grabbing', scale: 1.05 }}
          >
            {/* Close Button */}
            <button 
              onClick={() => setIsMinimized(true)}
              style={{
                position: 'absolute',
                top: '-12px',
                right: '-8px',
                background: 'rgba(15, 23, 42, 0.8)',
                color: 'white',
                border: 'none',
                borderRadius: '50%',
                width: '24px',
                height: '24px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
                zIndex: 10
              }}
            >
              <X size={14} />
            </button>

            {/* Tooltip */}
            <div className="glass-premium" style={{
              padding: '10px 20px',
              borderRadius: '16px',
              fontSize: '0.85rem',
              fontWeight: 'bold',
              color: 'var(--primary)',
              background: 'rgba(255, 255, 255, 0.9)',
              boxShadow: '0 10px 25px rgba(0, 102, 255, 0.15)',
              border: '1px solid rgba(0, 102, 255, 0.1)',
              whiteSpace: 'nowrap',
              pointerEvents: 'none' // Prevent text selection while dragging
            }}>
              Need Help? Talk to us!
            </div>
            
            {/* WhatsApp Button */}
            <a 
              href="https://wa.me/918421812027" 
              target="_blank" 
              rel="noopener noreferrer"
              onPointerDownCapture={(e) => e.stopPropagation()} // Prevent drag when clicking link
              style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                boxShadow: '0 15px 35px rgba(37, 211, 102, 0.4)',
                position: 'relative',
                zIndex: 5
              }}
            >
              <MessageCircle size={32} />
            </a>
          </motion.div>
        ) : (
          <motion.div
            key="minimized-widget"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 100, opacity: 0 }}
            onClick={() => setIsMinimized(false)}
            style={{
              position: 'fixed',
              bottom: '100px',
              right: '0',
              zIndex: 1001,
              background: 'rgba(15, 23, 42, 0.8)',
              backdropFilter: 'blur(10px)',
              padding: '12px 16px 12px 12px',
              borderTopLeftRadius: '50px',
              borderBottomLeftRadius: '50px',
              cursor: 'pointer',
              boxShadow: '-5px 5px 20px rgba(0,0,0,0.2)',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRight: 'none'
            }}
            whileHover={{ x: -5 }}
          >
            <ChevronLeft size={24} color="white" />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ContactWidget;
