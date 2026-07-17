import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { ShoppingBag } from 'lucide-react';

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
        { label: 'Home', target: 'home' },
        { label: 'Collection', target: 'products' },
        { label: 'Our Story', target: 'about' }
    ];

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 px-[5%] py-4 flex justify-between items-center ${isScrolled ? 'bg-[#faf9f6]/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
            }`}>
            <div className="text-xl font-bold tracking-[3px] cursor-pointer text-[#1a1a1a]">
                VIBE<span className="text-[#d4af37]">WEAR</span>
            </div>

            <div className="flex items-center gap-8">
                {navItems.map((item) => (
                    <Link
                        key={item.target}
                        to={item.target}
                        smooth={true}
                        duration={800}
                        spy={true}
                        activeClass="text-[#d4af37] font-semibold"
                        className="cursor-pointer text-sm font-medium text-[#1a1a1a] hover:text-[#d4af37] transition-colors"
                    >
                        {item.label}
                    </Link>
                ))}
                <ShoppingBag className="cursor-pointer text-[#1a1a1a] hover:text-[#d4af37] transition-colors" size={20} />
            </div>
        </nav>
    );
}