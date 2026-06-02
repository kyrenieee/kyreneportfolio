import React from 'react';
import FadeInSection from './FadeInSection';

const CREDENTIALS_DATA = [
  {
    title: "AI Essentials Certification",
    subtitle: "Issued by IBM. Focused on artificial intelligence foundations, core machine learning concepts, prompt engineering, and developer workflow automation.",
    icon: <path d="M12 2L1 21h22L12 2zm0 3.83l7.35 13.17H4.65L12 5.83z" />
  },
  {
    title: "Canva Essentials Certification",
    subtitle: "Validation in graphic design principles, brand asset management, layout design, and digital content creation for marketing and presentations.",
    icon: <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z" />
  }
];

export default function Credentials() {
  return (
    <section className="max-w-[1600px] mx-auto py-24 px-5 border-b border-white/5" id="credentials">
      <FadeInSection>
        <h2 className="text-3xl font-extrabold text-white tracking-tight mb-12">Credentials & Certifications</h2>
      </FadeInSection>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {CREDENTIALS_DATA.map((cred, index) => (
          <FadeInSection key={index} className="border border-white/10 p-8 rounded-2xl bg-white/[0.02] backdrop-blur-md flex flex-col justify-center shadow-xl">
            <div className="text-[#0052FF] mb-4 drop-shadow-[0_0_8px_rgba(0,82,255,0.4)]">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                {cred.icon}
              </svg>
            </div>
            <div className="text-xl font-bold text-white mb-3">{cred.title}</div>
            <div className="text-gray-400 text-sm leading-relaxed">{cred.subtitle}</div>
          </FadeInSection>
        ))}
      </div>
    </section>
  );
}