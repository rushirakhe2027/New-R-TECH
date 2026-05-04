import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="page-wrapper">
      <Navbar />
      <section className="contact-page-section">
        <div className="container">
          <div className="section-header morph-slide-up">
            <span className="badge">Contact Us</span>
            <h1 className="hero-title">Let's Build Something <span className="text-gradient-premium">Extraordinary</span></h1>
            <p className="section-subtitle">
              Ready to take your business to the next level? Our team of experts is here to help you navigate the digital landscape.
            </p>
          </div>

          <div className="contact-info-grid">
            <div className="contact-info-card glass-premium">
              <div className="info-icon-box"><MapPin size={24} /></div>
              <h4>Visit Us</h4>
              <p>Tech Park, Hinjewadi Phase 1,<br />Pune, Maharashtra 411057</p>
            </div>
            <div className="contact-info-card glass-premium">
              <div className="info-icon-box"><Phone size={24} /></div>
              <h4>Call Us</h4>
              <p>Main Office: +91 8421812027<br />Support: +91 8421812027</p>
            </div>
            <div className="contact-info-card glass-premium">
              <div className="info-icon-box"><Mail size={24} /></div>
              <h4>Email Us</h4>
              <p>support@rtechsolutions.online<br />careers@rtechsolutions.online</p>
            </div>
            <div className="contact-info-card glass-premium">
              <div className="info-icon-box"><Clock size={24} /></div>
              <h4>Working Hours</h4>
              <p>Mon - Fri: 9:00 AM - 7:00 PM<br />Sat: 10:00 AM - 4:00 PM</p>
            </div>
          </div>

          <div className="contact-form-container">
            <ContactForm />
          </div>

          <div className="map-container glass-premium">
             {/* Google Maps Embed Placeholder */}
             <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121059.03447396985!2d73.8629674!3d18.5248902!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d431055d4483!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1714545678901!5m2!1sen!2sin" 
                width="100%" 
                height="450" 
                style={{ border: 0, borderRadius: '24px' }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
             ></iframe>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;
