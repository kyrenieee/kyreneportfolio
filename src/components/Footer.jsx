import React from 'react';
import FadeInSection from './FadeInSection';

export default function Footer() {
  return (
    <footer className="py-28 px-5 text-center border-t border-white/5 relative" id="contact">
      {/* Subtle bottom accent backdrop glow ring */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-[#500ac8]/5 rounded-full blur-[100px] pointer-events-none"></div>

      <FadeInSection>
        <h2 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-white mb-12">Let's work together.</h2>
      </FadeInSection>
      <FadeInSection className="flex justify-center gap-8 mb-20 relative z-10">
        <a href="mailto:kyrene@example.com" className="text-xl font-semibold text-gray-400 hover:text-white transition-colors">
          Email Me
        </a>
        <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="text-xl font-semibold text-gray-400 hover:text-white transition-colors">
          LinkedIn
        </a>
      </FadeInSection>
      <FadeInSection className="text-sm text-gray-600">
        &copy; {new Date().getFullYear()} Kyrene Camilla Estocapio. All rights reserved.
      </FadeInSection>

    </footer>
  );
}