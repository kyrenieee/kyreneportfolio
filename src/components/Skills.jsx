import React, { useState } from 'react';
import FadeInSection from './FadeInSection';

const SKILLS_DATA = [
  {
    category: "Frontend Development",
    id: "frontend",
    desc: "Structuring clean, highly interactive user interfaces and engineering responsive, high-performance client-side web applications.",
    skills: [
      { name: "HTML5 & CSS3", proficiency: "85%" },
      { name: "Tailwind CSS", proficiency: "75%" },
      { name: "JavaScript", proficiency: "75%" },
      { name: "React JS", proficiency: "70%" }
    ]
  },
  {
    category: "Backend & Databases",
    id: "backend",
    desc: "Building the core server logic and database schemas that power user accounts, data storage, and smooth API communication in web apps.",
    skills: [
      { name: "Laravel", proficiency: "70%" },
      { name: "PHP", proficiency: "80%" },
      { name: "SQL & Relational Databases", proficiency: "85%" }
    ]
  },
  {
    category: "Design Systems & Tooling",
    id: "design",
    desc: "Producing visual assets, maintaining brand identity layouts, rapid interface prototyping, and coordinating version control workflows.",
    skills: [
      { name: "Figma", proficiency: "85%" },
      { name: "Canva", proficiency: "95%" },
      { name: "Git & GitHub", proficiency: "80%" }
    ]
  },
  {
    category: "Machine Learning",
    id: "ml",
    desc: "Implementing computer vision logic, orchestrating automated image recognition models, and analyzing data performance metrics.",
    skills: [
      { name: "MobileNetV2 Architecture", proficiency: "80%" },
      { name: "Data Augmentation", proficiency: "90%" },
      { name: "Performance Metrics & Matrices", proficiency: "75%" }
    ]
  }
];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState(null);

  return (
    <section className="w-full max-w-[1200px] mx-auto py-24 px-5 border-b border-white/5" id="skills">
      {/* Editorial Style Section Tagging */}
      <FadeInSection>
        <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight mb-16">
          Skills & Proficiencies
        </h2>
      </FadeInSection>

      {/* Stable Typographic Menu Stack */}
      <div className="w-full flex flex-col border-t border-white/10">
        {SKILLS_DATA.map((cat) => {
          const isOpen = activeCategory === cat.id;

          return (
            /* 🎬 RESTORED: Entry animation wrapper for initial page load */
            <FadeInSection key={cat.id} className="w-full">
              
              {/* Outer Glow Wrapper for Minimalist Gradient Border Effect */}
              <div
                className={`w-full transition-all duration-500 ease-in-out rounded-2xl ${
                  isOpen
                    ? "p-[1px] bg-gradient-to-br from-white/10 to-[#3c0b7d]/50 my-4 shadow-2xl shadow-black/60 shadow-[0_10px_30px_rgba(60,11,125,0.15)]"
                    : "p-0 bg-transparent"
                }`}
              >
                {/* Interactive row container */}
                <div
                  className={`w-full transition-all duration-500 ease-in-out px-4 md:px-8 rounded-2xl ${
                    isOpen
                      ? "bg-[#0b0b0f]/95 backdrop-blur-md"
                      : "bg-transparent border-b border-white/10 hover:bg-white/[0.01]"
                  }`}
                  onMouseEnter={() => setActiveCategory(cat.id)}
                  onMouseLeave={() => setActiveCategory(null)}
                >
                  {/* Persistent Header Row */}
                  <div className="w-full flex justify-between items-center py-7 cursor-default select-none">
                    <h3 className={`text-xl md:text-2xl font-bold uppercase tracking-tight transition-colors duration-300 ${
                      isOpen ? "text-white" : "text-gray-400 hover:text-gray-200"
                    }`}>
                      {cat.category}
                    </h3>
                    
                    {/* Smooth Morphed Icon Indicator */}
                    <div className="text-gray-500 pr-2">
                      {isOpen ? (
                        <svg className="w-5 h-5 text-[#9d4edd] transition-transform duration-300 rotate-90" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      ) : (
                        <svg className="w-5 h-5 text-gray-500 transition-transform duration-300 hover:text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                        </svg>
                      )}
                    </div>
                  </div>

                  {/* Collapsible Content Wrapper */}
                  <div
                    className={`grid transition-all duration-500 ease-in-out ${
                      isOpen ? "grid-rows-[1fr] opacity-100 pb-8" : "grid-rows-[0fr] opacity-0 overflow-hidden pointer-events-none"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className={`w-full pt-6 border-t border-white/5 flex flex-col md:grid md:grid-cols-[1.2fr_2fr] gap-8 transition-all duration-700 ease-out ${
                        isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
                      }`}>
                        
                        {/* Left Column: Summary Description Text */}
                        <div className="flex flex-col justify-start max-w-sm">
                          <p className="text-sm text-gray-400 leading-relaxed font-normal">
                            {cat.desc}
                          </p>
                        </div>

                        {/* Right Column: Mini Skill Proficiency Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {cat.skills.map((skill, sIndex) => (
                            <div 
                              key={sIndex} 
                              className="bg-white/[0.01] border border-white/5 py-3 px-4 rounded-xl flex flex-col justify-between min-h-[70px] hover:border-white/10 hover:bg-white/[0.02] transition-all duration-300"
                            >
                              <span className="font-semibold text-xs text-gray-200 block mb-1.5">
                                {skill.name}
                              </span>
                              <div>
                                <div className="bg-white/10 h-1 rounded-full overflow-hidden mb-1">
                                  <div 
                                    className="bg-[#9d4edd] h-full rounded-full shadow-[0_0_8px_#9d4edd]" 
                                    style={{ width: skill.proficiency }}
                                  ></div>
                                </div>
                                <span className="text-[9px] font-mono text-gray-500 text-right block">
                                  {skill.proficiency}
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>

                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </FadeInSection>
          );
        })}
      </div>
    </section>
  );
}