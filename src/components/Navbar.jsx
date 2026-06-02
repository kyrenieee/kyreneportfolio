import React from 'react';

export default function Navbar() {
  return (
    <div className="fixed top-4 left-0 w-full flex justify-center px-[5%] z-50">
      <nav className="w-full max-w-[1200px] h-16 bg-white/[0.02] backdrop-blur-xl border border-white/10 flex justify-between items-center px-8 rounded-full shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]">
        <a href="#" className="Montserrat font-bold text-xl tracking-tighter text-white hover:text-[#0052FF] transition-colors">
          Kyrene.
        </a>
        <div className="hidden md:flex gap-8 text-xs font-semibold uppercase tracking-wider text-gray-400">
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#skills" className="hover:text-white transition-colors">Skills</a>
          <a href="#credentials" className="hover:text-white transition-colors">Credentials</a>
          <a href="#projects" className="hover:text-white transition-colors">Projects</a>
        </div>
        <a
          href="#contact"
          className="bg-[#0052FF] hover:bg-[#0040cc] text-white px-5 py-2.5 rounded-full font-semibold text-xs uppercase tracking-wider transition-all duration-300 hover:scale-105 shadow-[0_0_20px_rgba(0,82,255,0.3)]"
        >
          Contact Me
        </a>
      </nav>
    </div>
  );
}