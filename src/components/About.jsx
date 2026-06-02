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
        <div className=" justify-center max-h-[150px]  mt-4">
          <div className="grid grid-cols-3 divide-x divide-dashed divide-white/10  border border-white/10 bg-white/[0.01] backdrop-blur-md  rounded-2xl shadow-2xl shadow-black/40 overflow-hidden ">
            
            {/* LinkedIn Cell */}
            <a
              href="https://www.linkedin.com/in/kyrene-camilla-estocapio-743134292/"
              target="_blank"
              rel="noreferrer"
              className="flex flex-col sm:flex-row items-center justify-center gap-3 py-6 px-1 text-center text-gray-300 hover:text-white hover:bg-white/[0.04] transition-all duration-300 group relative"
            >
              <svg 
                className="w-5 h-5 text-gray-400 group-hover:text-[#0052FF] transition-colors duration-300" 
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
              className="flex flex-col sm:flex-row items-center justify-center gap-3 py-6 px-1 text-center text-gray-300 hover:text-white hover:bg-white/[0.04] transition-all duration-300 group relative"
            >
              <svg 
                className="w-5 h-5 text-gray-400 group-hover:text-[#0052FF] transition-colors duration-300" 
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
              <span className="font-semibold text-sm tracking-wide uppercase">Email</span>
            </a>


             {/*Facebook*/}
            <a
              href="https://www.facebook.com/Kyrenyiee"
              className="flex flex-col sm:flex-row items-center justify-center gap-3 py-6 px-1 text-center text-gray-300 hover:text-white hover:bg-white/[0.04] transition-all duration-300 group relative"
            >
              <svg 
                className="w-5 h-5 text-gray-400 group-hover:text-[#0052FF] transition-colors duration-300" 
                fill="currentColor" 
                viewBox="0 0 24 24"
                >
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
              <span className="font-semibold text-sm tracking-wide uppercase">Facebook</span>
            </a>

          </div>
        </div>
      </FadeInSection>
    </section>
  );
}