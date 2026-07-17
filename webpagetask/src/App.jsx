import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Products from './components/Products';
import About from './components/About';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="bg-[#faf9f6] min-h-screen text-[#1a1a1a] selection:bg-[#d4af37] selection:text-white">
      <Navbar />
      <Hero />
      <Products />
      <About />
      <Footer />
    </div>
  );
}