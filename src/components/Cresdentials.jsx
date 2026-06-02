import React from 'react';
import FadeInSection from './FadeInSection';

const CREDENTIALS_DATA = [
  {
    title: "Introduction to Artificial Intelligence (AI)",
    // Replace these placeholder strings with your actual image file names/URLs
    imageUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop", 
    altText: "IBM Introduction to Artificial Intelligence Completion Certificate"
  },
  {
    title: "The Intelligence Behind AI",
    imageUrl: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=800&auto=format&fit=crop", 
    altText: "IBM SkillsBuild The Intelligence Behind AI Completion Certificate"
  },
  {
    title: "AI Essentials Certification",
    imageUrl: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=800&auto=format&fit=crop", 
    altText: "IBM AI Essentials Certification Certificate"
  },
  {
    title: "Canva Essentials Certification",
    imageUrl: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=800&auto=format&fit=crop", 
    altText: "Canva Essentials Certification Certificate"
  }
];

export default function Credentials() {
  return (
    <section className="max-w-[1200px] mx-auto py-24 px-5 border-b border-white/5" id="credentials">
      {/* Section Header */}
      <FadeInSection>
        <h2 className="text-3xl font-extrabold text-white tracking-tight mb-4">Credentials & Certifications</h2>
        <p className="text-gray-400 text-sm mb-12 max-w-xl">
          Verified academic credentials, digital badging, and professional specializations achieved in software engineering and cloud systems.
        </p>
      </FadeInSection>

      {/* Grid Layout for Certificate Showcase */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {CREDENTIALS_DATA.map((cred, index) => (
          <FadeInSection key={index} className="w-full">
            <div className="border border-white/10 rounded-2xl bg-white/[0.01] backdrop-blur-md overflow-hidden shadow-2xl shadow-black/80 group transition-all duration-500 hover:border-[#0052FF]/40 hover:shadow-[#0052FF]/5 relative">
              
              {/* Aspect ratio box modeled after a standard certificate layout (similar to image_b97501.jpg) */}
              <div className="aspect-[16/10] w-full overflow-hidden border-b border-white/5 bg-black/40">
                <img 
                  src={cred.imageUrl} 
                  alt={cred.altText}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  loading="lazy"
                />
              </div>

              {/* Minimal Text Label Strip below the Image */}
              <div className="p-5 flex justify-between items-center bg-black/20">
                <span className="font-bold text-sm text-gray-200 tracking-tight group-hover:text-[#0052FF] transition-colors duration-300">
                  {cred.title}
                </span>
                
                {/* External indicator icon arrow */}
                <svg className="w-4 h-4 text-gray-500 group-hover:text-white transition-colors duration-300 transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </div>

            </div>
          </FadeInSection>
        ))}
      </div>
    </section>
  );
}