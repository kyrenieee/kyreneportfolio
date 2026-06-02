import React from 'react';
import FadeInSection from './FadeInSection';

const CREDENTIALS_DATA = [
  {
    title: "Introduction to Artificial Intelligence (AI)",
    imageSrc: "/IBM Intro to AI.png",
    imageUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop", 
    altText: "IBM Introduction to Artificial Intelligence Completion Certificate"
  },
  {
    title: "The Intelligence Behind AI",
    imageSrc: "/IBM Behind AI.png",
    imageUrl: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=800&auto=format&fit=crop", 
    altText: "IBM SkillsBuild The Intelligence Behind AI Completion Certificate"
  },
  {
    title: "CCNA: Switching, Routing, and Wireless Essentials",
    imageSrc: "/CISCO.png",
    imageUrl: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=800&auto=format&fit=crop", 
    altText: "CCNA: Switching, Routing, and Wireless Essentials Certificate"
  },
  {
    title: "Canva Essentials Certification",
    imageSrc: "/Canva Essentials.png", // Fixed path pointing to the root of public
    imageUrl: "https://www.canva.com/design-school/certification-award/8775b1da-82f7-48e5-a5b3-00a1ffc38533", 
    altText: "Canva Essentials Certification Certificate"
  }
];

export default function Credentials() {
  return (
    <section className="max-w-[1200px] mx-auto py-24 px-5 border-b border-white/5" id="credentials">
      {/* Section Header */}
      <FadeInSection className="my-4">
        <h2 className="text-3xl font-extrabold text-white tracking-tight mb-4">Credentials & Certifications</h2>
        <p className="text-gray-400 text-sm mb-12 ">
          Verified academic credentials, digital badging, and professional specializations achieved in software engineering and cloud systems.
        </p>
      </FadeInSection>

      {/* Grid Layout for Certificate Showcase */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {CREDENTIALS_DATA.map((cred, index) => (
          <FadeInSection key={index} className="w-full">
            
            {/* SWAPPED TO ANCHOR TAG LINK WRAPPER */}
            <a 
              href={cred.imageUrl}
              target="_blank"
              rel="noreferrer"
              className="block border border-white/10 rounded-2xl bg-white/[0.01] backdrop-blur-md overflow-hidden shadow-2xl shadow-black/80 group transition-all duration-500 hover:border-[#500ac8]/40 hover:shadow-[#500ac8]/5 relative cursor-pointer"
            >
              
              {/* Aspect ratio box modeled after a standard certificate layout */}
              <div className="aspect-[16/10] w-full overflow-hidden border-b border-white/5 bg-black/40">
                <img 
                  src={cred.imageSrc} 
                  alt={cred.altText}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  loading="lazy"
                />
              </div>

              {/* Minimal Text Label Strip below the Image */}
              <div className="p-5 flex justify-between items-center bg-black/20">
                <span className="font-bold text-sm text-gray-200 tracking-tight group-hover:text-[#500ac8] transition-colors duration-300">
                  {cred.title}
                </span>
                
                {/* External indicator icon arrow */}
                <svg className="w-4 h-4 text-gray-500 group-hover:text-white transition-colors duration-300 transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </div>

            </a>
          </FadeInSection>
        ))}
      </div>
    </section>
  );
}