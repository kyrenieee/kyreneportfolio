import React, { useState } from 'react';
import FadeInSection from './FadeInSection';

const SKILLS_DATA = [
  {
    category: "Frontend Development",
    id: "frontend",
    desc: "Structuring clean, highly interactive user interfaces and engineering responsive, high-performance client-side web applications.",
    skills: [
      { name: "React JS", proficiency: "85%" },
      { name: "HTML5 & CSS3", proficiency: "80%" },
      { name: "Tailwind CSS", proficiency: "90%" }
    ]
  },
  {
    category: "Backend & Databases",
    id: "backend",
    desc: "Designing secure relational database architectures, robust server-side routing systems, and clean structural API integrations.",
    skills: [
      { name: "Laravel", proficiency: "85%" },
      { name: "PHP", proficiency: "80%" },
      { name: "SQL & Relational Databases", proficiency: "85%" }
    ]
  },
  {
    category: "Design Systems & Tooling",
    id: "design",
    desc: "Producing visual assets, maintaining brand identity layouts, rapid interface prototyping, and coordinating version control workflows.",
    skills: [
      { name: "Figma", proficiency: "90%" },
      { name: "Canva", proficiency: "95%" },
      { name: "Git & GitHub", proficiency: "90%" }
    ]
  },
  {
    category: "Machine Learning Frameworks",
    id: "ml",
    desc: "Implementing computer vision logic, orchestrating automated image recognition models, and analyzing data performance metrics.",
    skills: [
      { name: "MobileNetV2 Architecture", proficiency: "80%" },
      { name: "Data Augmentation", proficiency: "80%" },
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
        <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight mb-16 ">
          Skills & Proficiencies
        </h2>
      </FadeInSection>

      {/* Stable Typographic Menu Stack */}
      <div className="w-full flex flex-col border-t border-white/10">
        {SKILLS_DATA.map((cat) => {
          const isOpen = activeCategory === cat.id;

          return (
            <div
              key={cat.id}
              className={`w-full border-b border-white/10 transition-all duration-500 ease-in-out px-4 md:px-8 rounded-2xl ${
                isOpen 
                  ? "bg-white/[0.02] border-white/10 my-4 shadow-2xl shadow-black/60 backdrop-blur-md" 
                  : "bg-transparent border-transparent"
              }`}
              onMouseEnter={() => setActiveCategory(cat.id)}
              onMouseLeave={() => setActiveCategory(null)}
            >
              {/* Persistent Header Row — Keeps your mouse position perfectly anchored */}
              <div className="w-full flex justify-between items-center py-8 cursor-default select-none">
                <h3 className={`text-xl md:text-3xl font-bold uppercase tracking-tight transition-colors duration-300 ${
                  isOpen ? "text-white" : "text-gray-400"
                }`}>
                  {cat.category}
                </h3>
                
                {/* Smooth Morphed Icon Indicator (Arrow rotates/swaps to Close) */}
                <div className="text-gray-500 pr-2">
                  {isOpen ? (
                    <svg className="w-6 h-6 text-[#500ac8] transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  ) : (
                    <svg className="w-6 h-6 text-gray-500 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>
                  )}
                </div>
              </div>

              {/* Collapsible Content Wrapper (Guaranteed Zero-Jitter Height Adjust) */}
              <div
                className={`grid transition-all duration-500 ease-in-out ${
                  isOpen ? "grid-rows-[1fr] opacity-100 pb-8" : "grid-rows-[0fr] opacity-0 overflow-hidden pointer-events-none"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="w-full pt-6 border-t border-white/5 flex flex-col md:grid md:grid-cols-[1.2fr_2fr] gap-8">
                    
                    {/* Left Column: Summary Description Text */}
                    <div className="flex flex-col justify-start max-w-sm">
                      <p className="text-sm text-gray-400 leading-relaxed font-normal">
                        {cat.desc}
                      </p>
                    </div>

                    {/* Right Column: Mini Skill Proficiency Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {cat.skills.map((skill, sIndex) => (
                        <div 
                          key={sIndex} 
                          className="bg-white/[0.01] border border-white/5 p-4 rounded-xl flex flex-col justify-between min-h-[85px] hover:border-white/10 hover:bg-white/[0.02] transition-all duration-300"
                        >
                          <span className="font-semibold text-sm text-gray-200 block mb-3">
                            {skill.name}
                          </span>
                          <div>
                            <div className="bg-white/10 h-1 rounded-full overflow-hidden mb-1">
                              <div 
                                className="bg-[#500ac8] h-full rounded-full shadow-[0_0_8px_#500ac8]" 
                                style={{ width: skill.proficiency }}
                              ></div>
                            </div>
                            <span className="text-[10px] font-mono text-gray-500 text-right block">
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
          );
        })}
      </div>
    </section>
  );
}