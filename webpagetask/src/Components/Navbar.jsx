import React, { useState, useEffect } from 'react';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

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
        { label: 'Our Story', target: '#about' }
    ];

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 px-[5%] py-4 flex justify-between items-center ${isScrolled ? 'bg-[#faf9f6]/95 backdrop-blur-md shadow-xs' : 'bg-transparent'
            }`}>
            <div className="text-xl font-bold tracking-[3px] cursor-pointer text-[#1a1a1a]">
                VIBE<span className="text-[#d4af37]">WEAR</span>
            </div>

            <div className="flex items-center gap-8">
                {navItems.map((item) => (
                    <a
                        key={item.target}
                        href={item.target}
                        className="cursor-pointer text-sm font-medium text-[#1a1a1a] hover:text-[#d4af37] transition-colors"
                    >
                        {item.label}
                    </a>
                ))}

                {/* Simple SVG icon inside standard Tailwind classes */}
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
                    className="cursor-pointer text-[#1a1a1a] hover:text-[#d4af37] transition-colors"
                >
                    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <path d="M16 10a4 4 0 0 1-8 0"></path>
                </svg>
            </div>
        </nav>
    );
}