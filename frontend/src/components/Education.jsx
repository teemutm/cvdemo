import React from 'react';
import './Education.css';

const Education = ({ education, certificates }) => {
    if (!education && !certificates) return null;

    const activeCerts = certificates?.filter(cert => cert.active) || [];
    const inactiveCerts = certificates?.filter(cert => !cert.active) || [];

    return (
        <section id="education" className="education section">
            <div className="container">
                <h2 className="section-title">Education & Certifications</h2>
                <p className="section-subtitle">Professional qualifications and continuous learning</p>

                <div className="education-grid">
                    {/* Education */}
                    {education && education.length > 0 && (
                        <div className="education-section">
                            <h3 className="subsection-title">Education</h3>
                            {education.map((edu) => (
                                <div key={edu.id} className="education-card glass-card">
                                    <div className="edu-icon">🎓</div>
                                    <div className="edu-content">
                                        <h4>{edu.degree}</h4>
                                        <p className="institution">{edu.institution}</p>
                                        <p className="period">{edu.period}</p>
                                        {edu.description && <p className="description">{edu.description}</p>}
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Active Certifications */}
                    {activeCerts.length > 0 && (
                        <div className="certificates-section">
                            <h3 className="subsection-title">Active Certifications</h3>
                            <div className="certs-grid">
                                {activeCerts.map((cert) => (
                                    <div key={cert.id} className="cert-card glass-card active">
                                        <div className="cert-badge">✓</div>
                                        <h4>{cert.name}</h4>
                                        <p className="issuer">{cert.issuer}</p>
                                        <p className="year">{cert.year}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Previous Certifications */}
                    {inactiveCerts.length > 0 && (
                        <div className="certificates-section">
                            <h3 className="subsection-title">Previous Certifications</h3>
                            <div className="certs-grid">
                                {inactiveCerts.map((cert) => (
                                    <div key={cert.id} className="cert-card glass-card">
                                        <h4>{cert.name}</h4>
                                        <p className="issuer">{cert.issuer}</p>
                                        <p className="year">{cert.year}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Education;
