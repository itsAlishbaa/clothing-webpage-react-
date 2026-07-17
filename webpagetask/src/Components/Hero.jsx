import React from 'react';

export default function Hero() {
    return (
        <section id="home" className="h-screen w-full relative flex items-center justify-center bg-cover bg-center" style={{
            backgroundImage: 'linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url("https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1600")'
        }}>
            <div className="text-center text-white px-4 max-w-4xl z-10">
                <h1 className="text-4xl md:text-6xl font-bold tracking-[4px] mb-4 leading-tight">
                    ELEVATE YOUR EVERYDAY VIBE
                </h1>

                <p className="text-lg md:text-xl font-light tracking-wide mb-8">
                    Minimalist designs, premium comfort.
                </p>

                <div>
                    <a href="#products">
                        <button className="bg-white text-[#1a1a1a] px-8 py-3.5 rounded-full text-sm font-semibold tracking-wide hover:scale-105 transition-all duration-300 shadow-lg cursor-pointer">
                            Shop New Arrivals
                        </button>
                    </a>
                </div>
            </div>
        </section>
    );
}