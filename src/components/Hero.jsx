import React from 'react';
import FadeInSection from './FadeInSection';

export default function Hero() {
  return (
    <section className="max-w-[1200px] mx-auto py-24 px-5 border-b border-white/5 relative" id="home">
      {/* Decorative background glow ambient effect */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-[#0052FF]/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="relative z-10 max-w-[1200px]mx-auto flex flex-col gap-6 items-center">
        <FadeInSection>
          <h1 className="montserrat-bold justify-center font-extrabold tracking-tight text-white leading-[1.1] mb-6">
            Kyrene Camilla S. Estocapio.<br />
          </h1>
          <p className="montserrat-standard text-lg text-gray-400 mb-8 max-w-[800px] leading-relaxed">
            Aspiring Web Developer & Student at the University of the Cordilleras. Focused on crafting robust, data-driven backends and intuitive front-end interfaces.
          </p>
          <a
            href="#projects"
            className="inline-block bg-[#0052FF] hover:bg-[#0040cc] montserrat-standard text-white px-4 py-2.5 rounded-full font-semibold m-4 text-sm transition-all duration-300 hover:-translate-y-0.5 shadow-[0_4px_20px_rgba(0,82,255,0.4)]"
          >
            View My Work
          </a>
        </FadeInSection>
      </div>
    </section>
  );
}