import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

export default function Hero() {
    return (
        <section id="home" className="h-screen w-full relative flex items-center justify-center bg-cover bg-center" style={{
            backgroundImage: 'linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url("https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1600")'
        }}>
            <div className="text-center text-white px-4 max-w-4xl z-10">
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl md:text-6xl font-bold tracking-[4px] mb-4 leading-tight"
                >
                    ELEVATE YOUR EVERYDAY VIBE
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-lg md:text-xl font-light tracking-wide mb-8"
                >
                    Minimalist designs, premium comfort.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <Link to="products" smooth={true} duration={800}>
                        <button className="bg-white text-[#1a1a1a] px-8 py-3.5 rounded-full text-sm font-semibold tracking-wide hover:scale-105 transition-transform shadow-lg">
                            Shop New Arrivals
                        </button>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}