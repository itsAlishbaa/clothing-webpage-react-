import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Products from './components/Products';
import About from './components/About';
import Footer from './components/Footer';
import AboutUsPage from './Components/AboutUsPage';
import Contact from './Components/Contact';
import Policy from './Components/Policy';

export default function App() {
  return (
    <div className="bg-[#faf9f6] min-h-screen text-[#1a1a1a] selection:bg-[#d4af37] selection:text-white">
      <Navbar />
      <Hero />
      <Products />
      <About />
      <Footer />
      <AboutUsPage />
      <Policy />    
      <Contact />
    </div>
  );
}