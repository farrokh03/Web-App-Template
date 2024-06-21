import React, { useState, useEffect } from 'react';
import './NextviewportMenu.css';

const NextviewportMenu = () => {
    const [activeSection, setActiveSection] = useState('section1');

    const handleScrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setActiveSection(sectionId);
        }
    };

    const handleScroll = () => {
        const sections = document.querySelectorAll('section');
        sections.forEach(section => {
            const element = document.getElementById(section.id);
            if (element) {
                const rect = element.getBoundingClientRect();
                const offsetTop = element.offsetTop - window.innerHeight / 2;
                if (window.scrollY >= offsetTop && window.scrollY < offsetTop + rect.height) {
                    setActiveSection(section.id);
                }
            }
        });
    };

    useEffect(() => {
        const scrollListener = () => {
            handleScroll();
        };

        window.addEventListener('scroll', scrollListener);

        return () => {
            window.removeEventListener('scroll', scrollListener);
        };
    }, []);

    return (
        <ul className="next-viewport-menu">
            <li onClick={() => handleScrollToSection('section1')}
                className={activeSection === 'section1' ? 'active' : ''}></li>
            <li onClick={() => handleScrollToSection('section2')}
                className={activeSection === 'section2' ? 'active' : ''}></li>
            <li onClick={() => handleScrollToSection('section3')}
                className={activeSection === 'section3' ? 'active' : ''}></li>
            <li onClick={() => handleScrollToSection('section4')}
                className={activeSection === 'section4' ? 'active' : ''}></li>
        </ul>
    );
};

export default NextviewportMenu;
