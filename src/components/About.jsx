import React from 'react';
import FadeInSection from './FadeInSection';

export default function About() {
  return (
    <section className="max-w-[1200px] mx-auto py-24 px-5 border-b border-white/5" id="about">
      <FadeInSection className="justify-center gap-12 items-start">
        {/* Left Side Bio Text */}
        <div>
          <h2 className="text-6xl font-extrabold text-white tracking-tight">About Me</h2>
          <p className=" text-gray-400 text-lg leading-relaxed justify-center mt-2">
            I specialize in building clean, modular code bases, designing secure relational databases, and delivering responsive UIs. My approach bridges the gap between complex technical infrastructure and seamless user experiences, ensuring that every deployment is scalable, efficient, and visually refined.
          </p>
        </div>
				
        {/* Right Side - Grid-Mesh Socials Card */}
          <div className="justify-center max-h-[150px] mt-4">
          <div className="p-[1px] rounded-2xl bg-gradient-to-br from-white/10 to-[#3c0b7d]/40 hover:to-[#3c0b7d] transition-all duration-500 hover:-translate-y-1 shadow-2xl shadow-black/40 hover:shadow-[10px_10px_30px_rgba(60,11,125,0.25)] group">

            {/* Internal Grid Container */}
            <div className="grid grid-cols-3 divide-x divide-dashed divide-white/10 rounded-2xl bg-[#0b0b0f]/90 backdrop-blur-md transition-colors duration-500 group-hover:bg-[#0b0b0f]/80 overflow-hidden">

              {/* LinkedIn Cell */}
              <a
                href="https://www.linkedin.com/in/kyrene-camilla-estocapio-743134292/"
                target="_blank"
                rel="noreferrer"
                className="flex flex-col sm:flex-row items-center justify-center gap-3 py-6 px-1 text-center text-gray-300 hover:text-white hover:bg-white/[0.04] transition-all duration-300 relative group/cell"
              >
                <svg 
                  className="w-5 h-5 text-gray-400 group-hover/cell:text-[#9d4edd] transition-colors duration-300" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"/>
                </svg>
                <span className="font-semibold text-sm tracking-wide uppercase">LinkedIn</span>
              </a>

              {/* Email Cell */}
              <a
                href="mailto:kcestocapio05@gmail.com"
                className="flex flex-col sm:flex-row items-center justify-center gap-3 py-6 px-1 text-center text-gray-300 hover:text-white hover:bg-white/[0.04] transition-all duration-300 relative group/cell"
              >
                <svg 
                  className="w-5 h-5 text-gray-400 group-hover/cell:text-[#9d4edd] transition-colors duration-300" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                <span className="font-semibold text-sm tracking-wide uppercase">Email</span>
              </a>

              {/* GitHub Cell */}
                <a
                  href="https://github.com/kyrenieee"
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-col sm:flex-row items-center justify-center gap-3 py-6 px-1 text-center text-gray-300 hover:text-white hover:bg-white/[0.04] transition-all duration-300 relative group/cell"
                >
                  <svg 
                    className="w-5 h-5 text-gray-400 group-hover/cell:text-[#9d4edd] transition-colors duration-300" 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.008.069-.008 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                <span className="font-semibold text-sm tracking-wide uppercase">GitHub</span>
              </a>
            </div>
          </div>
          </div>

      </FadeInSection>
    </section>
  );
}