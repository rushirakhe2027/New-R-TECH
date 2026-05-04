import React, { useState, useEffect } from 'react';
import { ShieldCheck, X } from 'lucide-react';
import './CookieConsent.css';

const CookieConsent = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setTimeout(() => setShow(true), 3000);
    }
  }, []);

  const accept = () => {
    localStorage.setItem('cookie-consent', 'true');
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="cookie-consent-banner glass-premium morph-slide-up">
      <div className="cookie-icon">
        <ShieldCheck size={24} />
      </div>
      <div className="cookie-text">
        <p>We use cookies to enhance your experience and analyze our traffic. By clicking "Accept", you consent to our use of cookies.</p>
      </div>
      <div className="cookie-actions">
        <button className="btn btn-primary" onClick={accept}>Accept</button>
        <button className="btn-close" onClick={() => setShow(false)}><X size={20} /></button>
      </div>
    </div>
  );
};

export default CookieConsent;
