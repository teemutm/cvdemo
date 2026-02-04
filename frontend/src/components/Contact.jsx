import React from 'react';
import './Contact.css';

const Contact = ({ profile }) => {
    if (!profile) return null;

    return (
        <section id="contact" className="contact section">
            <div className="container">
                <div className="contact-content glass-card">
                    <h2 className="section-title">Let's Connect</h2>
                    <p className="contact-intro">
                        Interested in cloud architecture, DevOps consulting, or collaboration opportunities?
                        Feel free to reach out!
                    </p>

                    <div className="contact-methods">
                        <a href={`mailto:${profile.email}`} className="contact-method">
                            <div className="method-icon">✉️</div>
                            <div className="method-content">
                                <h3>Email</h3>
                                <p>{profile.email}</p>
                            </div>
                        </a>

                        <a href={`tel:${profile.phone}`} className="contact-method">
                            <div className="method-icon">📞</div>
                            <div className="method-content">
                                <h3>Phone</h3>
                                <p>{profile.phone}</p>
                            </div>
                        </a>

                        <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="contact-method">
                            <div className="method-icon">💼</div>
                            <div className="method-content">
                                <h3>LinkedIn</h3>
                                <p>Connect on LinkedIn</p>
                            </div>
                        </a>
                    </div>

                    <div className="contact-footer">
                        <p>Based in {profile.location || 'Finland'}</p>
                        <p className="availability">Available for consulting and full-time opportunities</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
