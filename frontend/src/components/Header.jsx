import React from 'react';
import './Header.css';

const Header = () => {
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <header className="header">
            <div className="container">
                <nav className="nav">
                    <div className="logo">TM</div>
                    <ul className="nav-links">
                        <li><a onClick={() => scrollToSection('hero')}>Home</a></li>
                        <li><a onClick={() => scrollToSection('experience')}>Experience</a></li>
                        <li><a onClick={() => scrollToSection('skills')}>Skills</a></li>
                        <li><a onClick={() => scrollToSection('education')}>Education</a></li>
                        <li><a onClick={() => scrollToSection('contact')}>Contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
