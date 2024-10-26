// src/components/fade.js
import React, { useState, useEffect, useRef } from 'react';
import './fade.scss'; // Import the CSS animation styles

const Fade = ({ children, delay = 0 }) => {
    const [isVisible, setIsVisible] = useState(false); // Tracks visibility state
    const domRef = useRef(); // Tracks the element being observed

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    // Use delay prop here to stagger animation
                    setTimeout(() => setIsVisible(true), delay);
                    observer.unobserve(entry.target); // stop observing after visible
                }
            });
        });

        if (domRef.current) observer.observe(domRef.current); // start observing
        return () => observer.disconnect(); // cleanup on unmount
    }, [delay]); // make sure useEffect listens to changes in 'delay'

    return (
        <div 
            ref={domRef} 
            className={`fade-in-up ${isVisible ? 'show' : ''}`} 
            style={{ transitionDelay: `${delay}s` }} // ensure CSS delay matches
        >
            {children}
        </div>
    );
};

export default Fade;
