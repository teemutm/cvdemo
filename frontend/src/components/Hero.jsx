import React from 'react';
import './Hero.css';

const Hero = ({ profile }) => {
    if (!profile) return null;

    return (
        <section id="hero" className="hero section">
            <div className="container">
                <div className="hero-content animate-fade-in-up">
                    <div className="hero-badge">Senior Cloud Architect</div>
                    <h1 className="hero-title">{profile.name}</h1>
                    <p className="hero-subtitle">{profile.title}</p>
                    <p className="hero-summary">{profile.summary}</p>

                    <div className="hero-contact">
                        <a href={`mailto:${profile.email}`} className="contact-item">
                            <span className="icon">✉️</span>
                            {profile.email}
                        </a>
                        <a href={`tel:${profile.phone}`} className="contact-item">
                            <span className="icon">📞</span>
                            {profile.phone}
                        </a>
                        <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="contact-item">
                            <span className="icon">💼</span>
                            LinkedIn
                        </a>
                    </div>

                    <div className="hero-actions">
                        <a href="#contact" className="btn btn-primary">Get in Touch</a>
                        <a href="#experience" className="btn btn-outline">View Experience</a>
                    </div>
                </div>

                <div className="hero-decoration">
                    <div className="floating-card card-1 animate-float"></div>
                    <div className="floating-card card-2 animate-float"></div>
                    <div className="floating-card card-3 animate-float"></div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
