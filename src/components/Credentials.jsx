import React from 'react';
import FadeInSection from './FadeInSection';

const CREDENTIALS_DATA = [
  {
    title: "Introduction to Artificial Intelligence (AI)",
    imageSrc: "/IBM Intro to AI.png",
    imageUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop", 
    altText: "IBM Introduction to Artificial Intelligence Completion Certificate",
    issuer: "IBM SkillsBuild"
  },
  {
    title: "The Intelligence Behind AI",
    imageSrc: "/IBM Behind AI.png",
    imageUrl: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=800&auto=format&fit=crop", 
    altText: "IBM SkillsBuild The Intelligence Behind AI Completion Certificate",
    issuer: "IBM SkillsBuild"
  },
  {
    title: "CCNA: Switching, Routing, and Wireless Essentials",
    imageSrc: "/CISCO.png",
    imageUrl: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=800&auto=format&fit=crop", 
    altText: "CCNA: Switching, Routing, and Wireless Essentials Certificate",
    issuer: "Cisco NetAcad"
  },
  {
    title: "Canva Essentials Certification",
    imageSrc: "/Canva Essentials.png",
    imageUrl: "https://www.canva.com/design-school/certification-award/8775b1da-82f7-48e5-a5b3-00a1ffc38533", 
    altText: "Canva Essentials Certification Certificate",
    issuer: "Canva"
  }
];

export default function Credentials() {
  return (
    <section className="max-w-[1200px] mx-auto py-24 px-5 border-b border-white/5" id="credentials">
      {/* Section Header */}
      <FadeInSection className="my-4">
        <h2 className="text-3xl font-extrabold text-white tracking-tight mb-4">Credentials & Certifications</h2>
        <p className="text-gray-400 text-sm mb-16 max-w-xl">
          Verified academic credentials, digital badging, and professional specializations achieved in software engineering and cloud systems.
        </p>
      </FadeInSection>

      {/* Grid Layout Matching Featured Projects Aesthetic */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
        {CREDENTIALS_DATA.map((cred, index) => (
          <FadeInSection key={index} className="w-full">
            
            {/* Outer Anchor Tag Link Wrapper */}
            <a 
              href={cred.imageUrl}
              target="_blank"
              rel="noreferrer"
              className="block p-[1px] rounded-2xl bg-gradient-to-br from-white/10 to-[#500ac8]/40 transition-all duration-500 hover:to-[#500ac8] hover:-translate-y-1.5 shadow-2xl shadow-black/40 hover:shadow-[10px_10px_30px_rgba(80,10,200,0.15)] group h-full"
            >
              {/* Internal glassmorphic card container */}
              <div className="h-full w-full p-6 rounded-2xl bg-[#0b0b0f]/90 backdrop-blur-md transition-colors duration-500 group-hover:bg-[#0b0b0f]/80 flex flex-col justify-between">
                
                <div>
                  {/* 🧱 Certificate Image Thumbnail Frame */}
                  <div className="aspect-[16/10] w-full overflow-hidden rounded-xl mb-6 bg-black/40 border border-white/5 relative">
                    <img 
                      src={cred.imageSrc} 
                      alt={cred.altText}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/15 group-hover:bg-transparent transition-colors duration-500" />
                  </div>

                  {/* Document Title Block */}
                  <h3 className="text-lg font-bold text-white mb-2 transition-colors duration-300">
                    {cred.title}
                  </h3>
                </div>

                {/* Card Footer Base Strip Layout */}
                <div className="flex items-center justify-between gap-4 mt-auto pt-4 border-t border-white/5">
                  {/* Issuer Metadata Badge Tag */}
                  <span className="text-[10px] font-medium bg-white/[0.03] text-gray-400 px-2.5 py-0.5 rounded-full border border-white/5">
                    {cred.issuer}
                  </span>
                  
                  {/* "Verify" action link section has been completely removed from here */}
                </div>

              </div>
            </a>

          </FadeInSection>
        ))}
      </div>
    </section>
  );
}