import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Credentials from './components/Cresdentials';
import Projects from './components/Projects';
import Footer from './components/Footer';
import './App.css';

export default function App() {
  return (
    <div className="bg-[#08080A] text-white font-sans antialiased pt-24 min-h-screen selection:bg-[#0052FF]/30 selection:text-white">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Credentials />
      <Projects />
      <Footer />
    </div>
  );
}