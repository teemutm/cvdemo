import React, { useState } from 'react';
import './Experience.css';

const Experience = ({ experiences }) => {
    const [expandedId, setExpandedId] = useState(null);

    if (!experiences || experiences.length === 0) return null;

    const toggleExpand = (id) => {
        setExpandedId(expandedId === id ? null : id);
    };

    return (
        <section id="experience" className="experience section">
            <div className="container">
                <h2 className="section-title">Work Experience</h2>
                <p className="section-subtitle">15+ years of cloud architecture and DevOps expertise</p>

                <div className="timeline">
                    {experiences.map((exp, index) => (
                        <div
                            key={exp.id}
                            className={`timeline-item ${expandedId === exp.id ? 'expanded' : ''}`}
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="timeline-marker">
                                {exp.current && <span className="current-badge">Current</span>}
                            </div>

                            <div className="timeline-content glass-card" onClick={() => toggleExpand(exp.id)}>
                                <div className="timeline-header">
                                    <div>
                                        <h3 className="job-title">{exp.title}</h3>
                                        <div className="company-info">
                                            <span className="company-name">{exp.company}</span>
                                            {exp.website && (
                                                <a
                                                    href={`https://${exp.website}`}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="company-link"
                                                    onClick={(e) => e.stopPropagation()}
                                                >
                                                    🔗
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                    <span className="period">{exp.period}</span>
                                </div>

                                <p className="job-description">{exp.description}</p>

                                {exp.highlights && exp.highlights.length > 0 && (
                                    <div className={`highlights ${expandedId === exp.id ? 'show' : ''}`}>
                                        <h4>Key Achievements:</h4>
                                        <ul>
                                            {exp.highlights.map((highlight, idx) => (
                                                <li key={idx}>{highlight}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {exp.keywords && exp.keywords.length > 0 && (
                                    <div className={`keywords ${expandedId === exp.id ? 'show' : ''}`}>
                                        {exp.keywords.map((keyword, idx) => (
                                            <span key={idx} className="badge">{keyword}</span>
                                        ))}
                                    </div>
                                )}

                                {(exp.highlights?.length > 0 || exp.keywords?.length > 0) && (
                                    <button className="expand-btn">
                                        {expandedId === exp.id ? '▲ Show Less' : '▼ Show More'}
                                    </button>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
