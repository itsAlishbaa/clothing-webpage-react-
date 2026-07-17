import React, { useState, useEffect } from 'react';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [hoveredIndex, setHoveredIndex] = useState(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { label: 'Home', target: '#home' },
        { label: 'Collection', target: '#products' },
        { label: 'Our Story', target: '#about' },
        { label: 'About Us', target: '#about-us' },
        { label: 'Policies', target: '#policy' },  // <-- Policy Link
        { label: 'Contact', target: '#contact' }   // <-- Contact Link
    ];

    return (
        <nav style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            zIndex: 1000,
            transition: 'all 0.3s ease',
            backgroundColor: isScrolled ? 'rgba(250, 249, 246, 0.95)' : 'transparent',
            boxShadow: isScrolled ? '0 4px 20px rgba(0,0,0,0.05)' : 'none',
            padding: isScrolled ? '15px 5%' : '25px 5%',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            backdropFilter: isScrolled ? 'blur(10px)' : 'none'
        }}>
            <div style={{ fontSize: '1.5rem', fontWeight: 'bold', letterSpacing: '3px', color: '#1a1a1a', cursor: 'pointer' }}>
                VIBE<span style={{ color: '#d4af37' }}>WEAR</span>
            </div>

            <div style={{ display: 'flex', gap: '30px', alignItems: 'center' }}>
                {navItems.map((item, idx) => (
                    <a
                        key={item.target}
                        href={item.target}
                        onMouseEnter={() => setHoveredIndex(idx)}
                        onMouseLeave={() => setHoveredIndex(null)}
                        style={{
                            textDecoration: 'none',
                            fontSize: '0.875rem',
                            fontWeight: '500',
                            color: hoveredIndex === idx ? '#d4af37' : '#1a1a1a',
                            letterSpacing: '0.5px',
                            transition: 'color 0.3s ease',
                            cursor: 'pointer'
                        }}
                    >
                        {item.label}
                    </a>
                ))}
            </div>
        </nav>
    );
}