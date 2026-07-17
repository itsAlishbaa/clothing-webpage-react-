import React from 'react';

export default function About() {
    return (
        <section id="about" className="py-24 px-[8%] bg-[#faf9f6] grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
                <img
                    src="https://images.unsplash.com/photo-1534126511673-b6899657816a?q=80&w=800"
                    alt="Our Story"
                    className="w-full h-auto rounded-xl shadow-lg"
                />
            </div>

            <div>
                <span className="text-[#d4af37] font-bold tracking-[2px] text-sm">OUR PHILOSOPHY</span>
                <h2 className="text-4xl font-bold text-[#1a1a1a] mt-3 mb-6 leading-tight">Crafted for Comfort, Styled for Presence.</h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                    At VibeWear, we believe that clothing is more than just fabric — it’s your unspoken introduction. That’s why we focus on sustainable sourcing, timeless silhouettes, and neutral colorways.
                </p>
                <p className="text-gray-600 leading-relaxed">
                    Designed in-house, made for those who value quiet luxury and effortless modern fits.
                </p>
            </div>
        </section>
    );
}