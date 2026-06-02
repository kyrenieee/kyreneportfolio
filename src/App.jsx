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
    <div className="bg-[#08080A] text-white min-h-screen relative overflow-hidden selection:bg-[#0052FF]/30">
      
      {/* 🔮 ENHANCED KINETIC ANIMATIONS */}
      <style>{`
        @keyframes organic-drift-one {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(70px, -90px) scale(1.15); }
          66% { transform: translate(-40px, 60px) scale(0.85); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        @keyframes organic-drift-two {
          0% { transform: translate(0px, 0px) scale(1); }
          50% { transform: translate(-80px, 90px) scale(1.2); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-fluid-noticeable-1 {
          animation: organic-drift-one 22s infinite ease-in-out;
        }
        .animate-fluid-noticeable-2 {
          animation: organic-drift-two 26s infinite ease-in-out;
        }
      `}</style>

      {/* 🌌 AMPLIFIED MINIMALIST BACKGROUND LAYER */}
      <div className="absolute inset-0 pointer-events-none z-0">
        
        {/* 1. Bottom-Right Dispersal Glow (#1a0129) — Brought up to 50% opacity */}
        <div className="absolute bottom-0 right-0 w-[85vw] h-[85vw] max-w-[1100px] rounded-full bg-[#1a0129] opacity-50 blur-[120px] transform translate-x-1/4 translate-y-1/4 animate-fluid-noticeable-2" />
        
        {/* 2. Floating Accent A (Electric Blue Orb — Increased from 10% to 18% opacity, sharpened blur) */}
        <div className="absolute top-[15%] left-[5%] w-[450px] h-[450px] rounded-full bg-[#00]/18 blur-[90px] animate-fluid-noticeable-1" />
        
        {/* 3. Floating Accent B (Deep Purple Orb — Boosted to 35% opacity) */}
        <div className="absolute top-[55%] right-[8%] w-[500px] h-[500px] rounded-full bg-[#1a0129]/35 blur-[100px] animate-fluid-noticeable-2" />
        
        {/* 4. Crisp Engineering Mesh Grid Overlay (Increased to 1.5% opacity) */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      {/* 🚀 APPLICATION CONTENT LAYER */}
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Credentials />
          <Projects />
        </main>
        <Footer />
      </div>
    </div>
  );
}