import React, { useEffect, useState } from 'react';
import './Preloader.css';

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="preloader">
      <div className="preloader-content">
        <div className="preloader-logo">
          <img src="/assets/r-tech-logo.png" alt="R Tech" />
        </div>
        <div className="preloader-bar">
          <div className="preloader-progress"></div>
        </div>
        <p>Architecting Innovation...</p>
      </div>
    </div>
  );
};

export default Preloader;
