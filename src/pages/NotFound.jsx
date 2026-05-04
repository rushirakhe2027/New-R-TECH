import React from 'react';
import { Link } from 'react-router-dom';
import { Home, AlertCircle } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const NotFound = () => {
  return (
    <div className="page-wrapper">
      <Navbar />
      <section className="section" style={{ 
        minHeight: '80vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        paddingTop: '160px' 
      }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div className="error-visual" style={{ marginBottom: '40px' }}>
            <AlertCircle size={100} className="text-gradient-premium" style={{ margin: '0 auto', opacity: 0.5 }} />
            <h1 style={{ fontSize: '10rem', fontWeight: '900', margin: '20px 0', opacity: 0.1, position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: -1 }}>404</h1>
          </div>
          <h2 className="section-title">Lost in <span className="text-gradient-premium">Cyberspace?</span></h2>
          <p className="section-subtitle">
            The page you're looking for has been moved, deleted, or never existed in this dimension.
          </p>
          <Link to="/" className="btn btn-primary btn-large">
            <Home size={18} /> Return to Mission Control
          </Link>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default NotFound;
