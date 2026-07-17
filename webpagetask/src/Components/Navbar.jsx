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
        { label: 'About Us', target: '#about-us' }
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
            {/* Brand Logo */}
            <div style={{ fontSize: '1.5rem', fontWeight: 'bold', letterSpacing: '3px', color: '#1a1a1a', cursor: 'pointer' }}>
                VIBE<span style={{ color: '#d4af37' }}>WEAR</span>
            </div>

            {/* Nav Links */}
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
                            color: hoveredIndex === idx ? '#d4af37' : '#1a1a1a', // Simple State-based Hover!
                            letterSpacing: '0.5px',
                            transition: 'color 0.3s ease',
                            cursor: 'pointer'
                        }}
                    >
                        {item.label}
                    </a>
                ))}

                {/* SVG Shopping Bag */}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ cursor: 'pointer', transition: 'color 0.3s' }}
                    className="hover:text-[#d4af37]"
                >
                    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <path d="M16 10a4 4 0 0 1-8 0"></path>
                </svg>
            </div>
        </nav>
    );
}