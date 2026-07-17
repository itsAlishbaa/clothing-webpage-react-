import React from 'react';

export default function Footer() {
    return (
        <footer className="bg-[#1a1a1a] text-white py-16 px-[8%] text-center">
            <div className="flex flex-col items-center gap-6 mb-12">
                <h3 className="text-2xl font-bold tracking-[3px]">VIBEWEAR</h3>
                <p className="text-gray-400 max-w-md text-sm">
                    Stay updated with our new drops and editorial campaigns.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md mt-2">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="flex-1 px-5 py-3 rounded-full border border-gray-700 bg-transparent text-white focus:outline-none focus:border-[#d4af37] transition-colors text-sm"
                    />
                    <button className="px-8 py-3 rounded-full bg-[#d4af37] text-[#1a1a1a] font-semibold hover:bg-white hover:text-[#1a1a1a] transition-colors text-sm">
                        Join
                    </button>
                </div>
            </div>
            <hr className="border-gray-800 mb-8" />
            <p className="text-xs text-gray-500">© 2026 VibeWear Co. All rights reserved.</p>
        </footer>
    );
}