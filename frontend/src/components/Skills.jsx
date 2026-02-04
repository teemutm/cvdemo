import React from 'react';
import './Skills.css';

const Skills = ({ skills, specialties }) => {
    if (!skills && !specialties) return null;

    const displaySkills = specialties || skills;

    // Categorize skills
    const cloudSkills = ['AWS', 'GCP', 'Azure'];
    const devopsSkills = ['Kubernetes', 'Docker', 'Terraform', 'CI/CD', 'Jenkins', 'Github Actions'];
    const systemSkills = ['Linux', 'Ansible', 'Chef', 'Puppet'];

    const categorizeSkill = (skill) => {
        if (cloudSkills.some(s => skill.includes(s))) return 'cloud';
        if (devopsSkills.some(s => skill.includes(s))) return 'devops';
        if (systemSkills.some(s => skill.includes(s))) return 'system';
        return 'other';
    };

    return (
        <section id="skills" className="skills section">
            <div className="container">
                <h2 className="section-title">Skills & Specialties</h2>
                <p className="section-subtitle">Core technologies and expertise areas</p>

                <div className="skills-grid">
                    {displaySkills.map((skill, index) => {
                        const category = categorizeSkill(skill);
                        return (
                            <div
                                key={index}
                                className={`skill-badge ${category}`}
                                style={{ animationDelay: `${index * 0.05}s` }}
                            >
                                <span className="skill-icon">
                                    {category === 'cloud' && '☁️'}
                                    {category === 'devops' && '⚙️'}
                                    {category === 'system' && '🖥️'}
                                    {category === 'other' && '🔧'}
                                </span>
                                <span className="skill-name">{skill}</span>
                            </div>
                        );
                    })}
                </div>

                <div className="skills-highlight glass-card">
                    <h3>Areas of Expertise</h3>
                    <div className="expertise-grid">
                        <div className="expertise-item">
                            <div className="expertise-icon">☁️</div>
                            <h4>Cloud Architecture</h4>
                            <p>AWS & GCP landing zones, multi-cloud strategies, infrastructure design</p>
                        </div>
                        <div className="expertise-item">
                            <div className="expertise-icon">🚀</div>
                            <h4>DevOps & Automation</h4>
                            <p>CI/CD pipelines, Infrastructure as Code, automated deployments</p>
                        </div>
                        <div className="expertise-item">
                            <div className="expertise-icon">📦</div>
                            <h4>Container Orchestration</h4>
                            <p>Kubernetes, EKS, ECS, Cloud Run, Docker containerization</p>
                        </div>
                        <div className="expertise-item">
                            <div className="expertise-icon">🔒</div>
                            <h4>High Availability</h4>
                            <p>Load balancing, autoscaling, disaster recovery, monitoring</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
