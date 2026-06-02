import React, { useState } from 'react';
import FadeInSection from './FadeInSection';

const SKILLS_DATA = [
  {
    category: "Frontend Development",
    id: "frontend",
    skills: [
      { name: "React JS", proficiency: "85%" },
      { name: "HTML5 & CSS3", proficiency: "80%" },
      { name: "Tailwind CSS", proficiency: "90%" }
    ]
  },
  {
    category: "Backend & Relational Databases",
    id: "backend",
    skills: [
      { name: "Laravel", proficiency: "85%" },
      { name: "PHP", proficiency: "80%" },
      { name: "SQL & Relational Databases", proficiency: "85%" }
    ]
  },
  {
    category: "Design Systems & Tooling",
    id: "design",
    skills: [
      { name: "Figma", proficiency: "90%" },
      { name: "Canva", proficiency: "95%" },
      { name: "Git & GitHub", proficiency: "90%" }
    ]
  },
  {
    category: "Machine Learning Frameworks",
    id: "ml",
    skills: [
      { name: "MobileNetV2 (Image Recognition)", proficiency: "80%" },
      { name: "Data Augmentation", proficiency: "80%" },
      { name: "ML Performance Metrics", proficiency: "75%" }
    ]
  }
];

export default function Skills() {
  // Tracks which category dropdown is currently expanded (defaults to null or "frontend")
  const [activeCategory, setActiveCategory] = useState(null);

  return (
    <section className="justify-center items-center max-w-[1200px] mx-auto py-24 px-5 border-b border-white/5" id="skills">
      {/* Section Header */}
      <FadeInSection className="justify-center items-center">
        <h2 className="text-3xl font-extrabold text-white tracking-tight mb-4">Technical Skills</h2>
        <p className=" text-gray-400 text-sm mb-12">
          Hover over a core engineering category block to smoothly reveal my granular frameworks and proficiencies.
        </p>
      </FadeInSection>

      {/* Accordion Stack Wrapper */}
      <div className="flex flex-col gap-4 max-w-4xl mx-auto mt-4">
        {SKILLS_DATA.map((cat) => {
          const isOpen = activeCategory === cat.id;

          return (
            <div
              key={cat.id}
              className="w-full group/container"
              onMouseEnter={() => setActiveCategory(cat.id)}
              onMouseLeave={() => setActiveCategory(null)}
            >
              {/* Dropdown Header Panel */}
              <div
                className={`w-full border text-left px-6 py-5 rounded-2xl flex justify-between items-center backdrop-blur-md transition-all duration-300 shadow-lg cursor-default ${
                  isOpen
                    ? "bg-white/[0.04] border-[#0052FF]/40 text-white shadow-[#0052FF]/5"
                    : "bg-white/[0.02] border-white/10 text-gray-300"
                }`}
              >
                <span className="font-bold text-lg tracking-tight transition-colors duration-300 group-hover/container:text-white">
                  {cat.category}
                </span>
                
                {/* Smooth Rotating Chevron Indicator */}
                <svg
                  className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
                    isOpen ? "rotate-180 text-[#0052FF] drop-shadow-[0_0_5px_rgba(0,82,255,0.5)]" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                </svg>
              </div>

              {/* Collapsible Content Sub-Grid Layout */}
              <div
                className={`delay-400 grid transition-all duration-300 ease-in-out ${
                  isOpen ? "grid-rows-[1fr] opacity-100 mt-4" : "grid-rows-[0fr] opacity-0 overflow-hidden"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-2">
                    {cat.skills.map((skill, sIndex) => (
                      <div
                        key={sIndex}
                        className="border border-white/5 p-5 rounded-xl bg-white/[0.01] backdrop-blur-sm shadow-md flex flex-col justify-between min-h-[100px] hover:border-white/10 hover:bg-white/[0.02] transition-all duration-300"
                      >
                        <div className="font-semibold text-sm text-gray-200">
                          {skill.name}
                        </div>
                        <div className="mt-4">
                          {/* Inner Progress Line tracking */}
                          <div className="bg-white/10 h-1.5 rounded-full overflow-hidden mb-1">
                            <div
                              className="bg-[#0052FF] h-full rounded-full shadow-[0_0_8px_#0052FF]"
                              style={{ width: skill.proficiency }}
                            ></div>
                          </div>
                          <span className="text-[10px] font-mono font-medium text-gray-500 block text-right">
                            {skill.proficiency}
                          </span>
                        </div>
                      </div>
                    ))}
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