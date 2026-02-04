import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, Mail, Phone, MapPin } from 'lucide-react';
import './ContactForm.css';

const ContactForm = () => {
    const [status, setStatus] = useState('idle'); // idle, sending, success
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        service: 'Web Development',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('sending');
        // Simulate API call
        setTimeout(() => {
            setStatus('success');
            setFormData({ name: '', email: '', service: 'Web Development', message: '' });
        }, 1500);
    };

    if (status === 'success') {
        return (
            <section className="section contact-section" id="contact">
                <div className="container contact-success">
                    <motion.div 
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="success-card"
                    >
                        <CheckCircle size={64} className="success-icon" />
                        <h2>Message Received!</h2>
                        <p>Thank you for reaching out. Our team will get back to you within 24 hours.</p>
                        <button className="btn btn-primary" onClick={() => setStatus('idle')}>Send Another Message</button>
                    </motion.div>
                </div>
            </section>
        );
    }

    return (
        <section className="section contact-section" id="contact">
            <div className="container">
                <div className="contact-grid">
                    <div className="contact-info">
                        <span className="badge">Get in Touch</span>
                        <h2>Let's Start Your Next Big Project</h2>
                        <p className="contact-subtext">
                            Whether you're a startup or an established business, we have the technical expertise to turn your vision into reality.
                        </p>

                        <div className="info-items">
                            <div className="info-item">
                                <div className="info-icon"><Mail size={20} /></div>
                                <div>
                                    <h4>Email Us</h4>
                                    <p>support@rtechsolutions.online</p>
                                </div>
                            </div>
                            <div className="info-item">
                                <div className="info-icon"><Phone size={20} /></div>
                                <div>
                                    <h4>Call Us</h4>
                                    <p>+91 8421812027</p>
                                </div>
                            </div>
                            <div className="info-item">
                                <div className="info-icon"><MapPin size={20} /></div>
                                <div>
                                    <h4>Location</h4>
                                    <p>Maharashtra, India</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="contact-form-wrapper">
                        <form className="contact-form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label>Your Name</label>
                                <input 
                                    type="text" 
                                    placeholder="John Doe" 
                                    required 
                                    value={formData.name}
                                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                                />
                            </div>
                            <div className="form-group">
                                <label>Email Address</label>
                                <input 
                                    type="email" 
                                    placeholder="john@example.com" 
                                    required 
                                    value={formData.email}
                                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                                />
                            </div>
                            <div className="form-group">
                                <label>Interested In</label>
                                <select 
                                    value={formData.service}
                                    onChange={(e) => setFormData({...formData, service: e.target.value})}
                                >
                                    <option>Web Development</option>
                                    <option>Mobile App Development</option>
                                    <option>AI/ML Solutions</option>
                                    <option>UI/UX Design</option>
                                    <option>Student Project</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label>Project Brief</label>
                                <textarea 
                                    rows="4" 
                                    placeholder="Tell us about your project..." 
                                    required
                                    value={formData.message}
                                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                                ></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary submit-btn" disabled={status === 'sending'}>
                                {status === 'sending' ? 'Sending...' : (
                                    <>Send Message <Send size={18} /></>
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
