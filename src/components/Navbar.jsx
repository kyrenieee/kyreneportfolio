import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  // 🕵️‍♂️ Detect which section is currently active in the viewport
  useEffect(() => {
    const sections = ['about', 'skills', 'credentials', 'projects'];
    
    const observerOptions = {
      root: null,
      // Adjust rootMargin to trigger when section passes the upper-middle section of the screen
      rootMargin: '-30% 0px -60% 0px',
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => {
      sections.forEach((id) => {
        const element = document.getElementById(id);
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  return (
    <div className="fixed top-4 left-0 right-0 z-50 px-4 max-w-[1200px] mx-auto">
      {/* Main Navbar Capsule Container */}
      <nav className="w-full bg-white/[0.02] border border-white/10 backdrop-blur-xl rounded-full px-6 py-3 flex justify-between items-center shadow-2xl relative">
        
        {/* Brand Logo */}
        <a href="#" className="font-black text-xl tracking-tight text-white font-serif">
          Kyrene.
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          <a 
            href="#about" 
            className={`text-sm font-medium transition-colors duration-300 ${
              activeSection === 'about' ? 'text-[#9d4edd] font-semibold' : 'text-gray-400 hover:text-white'
            }`}
          >
            About
          </a>
          <a 
            href="#skills" 
            className={`text-sm font-medium transition-colors duration-300 ${
              activeSection === 'skills' ? 'text-[#9d4edd] font-semibold' : 'text-gray-400 hover:text-white'
            }`}
          >
            Skills
          </a>
          <a 
            href="#credentials" 
            className={`text-sm font-medium transition-colors duration-300 ${
              activeSection === 'credentials' ? 'text-[#9d4edd] font-semibold' : 'text-gray-400 hover:text-white'
            }`}
          >
            Credentials
          </a>
          <a 
            href="#projects" 
            className={`text-sm font-medium transition-colors duration-300 ${
              activeSection === 'projects' ? 'text-[#9d4edd] font-semibold' : 'text-gray-400 hover:text-white'
            }`}
          >
            Projects
          </a>
        </div>

        {/* Action Button & Mobile Toggle Wrapper */}
        <div className="flex items-center gap-4">
          <a 
            href="#contact" 
            className="hidden sm:inline-block bg-[#3c0b7d] text-white text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-full hover:bg-[#500ac8] transition-all duration-300 shadow-lg shadow-[#3c0b7d]/20"
          >
            Contact Me
          </a>

          {/* Mobile Menu Toggle Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="block md:hidden text-gray-400 hover:text-white focus:outline-none p-1"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Collapsible Mobile Dropdown Panel */}
        <div 
          className={`absolute top-[120%] left-2 right-2 bg-[#08080A]/95 border border-white/10 backdrop-blur-2xl rounded-2xl p-6 flex flex-col gap-4 shadow-2xl transition-all duration-300 origin-top ${
            isMobileMenuOpen 
              ? "opacity-100 scale-100 pointer-events-auto" 
              : "opacity-0 scale-95 pointer-events-none"
          } md:hidden`}
        >
          <a 
            href="#about" 
            onClick={() => setIsMobileMenuOpen(false)}
            className={`text-base font-semibold transition-colors py-2 border-b border-white/5 ${
              activeSection === 'about' ? 'text-[#9d4edd]' : 'text-gray-300 hover:text-[#500ac8]'
            }`}
          >
            / About
          </a>
          <a 
            href="#skills" 
            onClick={() => setIsMobileMenuOpen(false)}
            className={`text-base font-semibold transition-colors py-2 border-b border-white/5 ${
              activeSection === 'skills' ? 'text-[#9d4edd]' : 'text-gray-300 hover:text-[#500ac8]'
            }`}
          >
            / Skills
          </a>
          <a 
            href="#credentials" 
            onClick={() => setIsMobileMenuOpen(false)}
            className={`text-base font-semibold transition-colors py-2 border-b border-white/5 ${
              activeSection === 'credentials' ? 'text-[#9d4edd]' : 'text-gray-300 hover:text-[#500ac8]'
            }`}
          >
            / Credentials
          </a>
          <a 
            href="#projects" 
            onClick={() => setIsMobileMenuOpen(false)}
            className={`text-base font-semibold transition-colors py-2 ${
              activeSection === 'projects' ? 'text-[#9d4edd]' : 'text-gray-300 hover:text-[#500ac8]'
            }`}
          >
            / Projects
          </a>
          <a 
            href="#contact" 
            onClick={() => setIsMobileMenuOpen(false)}
            className="sm:hidden block w-full text-center bg-[#500ac8] text-white text-sm font-bold uppercase py-3 rounded-xl mt-2"
          >
            Contact Me
          </a>
        </div>

      </nav>
    </div>
  );
}