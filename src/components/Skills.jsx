import React from 'react';
import FadeInSection from './FadeInSection';

const SKILLS_DATA = [
  { title: "Frontend", list: "React JS, React Native, Expo, HTML5/CSS3, Tailwind CSS", proficiency: "90%" },
  { title: "Backend", list: "Laravel, PHP, SQL / Relational Databases", proficiency: "85%" },
  { title: "Design & Tooling", list: "Figma, Canva, UI/UX Layouts, Git/GitHub", proficiency: "95%" },
  { title: "Machine Learning", list: "Image Recognition (MobileNetV2), Data Augmentation, Performance Metrics", proficiency: "80%" }
];

export default function Skills() {
  return (
    <section className="max-w-[1200px] mx-auto py-24 px-5 border-b border-white/5" id="skills">
      <FadeInSection>
        <h2 className="text-3xl font-extrabold text-white tracking-tight mb-12">Technical Skills</h2>
      </FadeInSection>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {SKILLS_DATA.map((skill, index) => (
          <FadeInSection key={index} className="border border-white/10 p-6 rounded-2xl bg-white/[0.02] backdrop-blur-md flex flex-col justify-between shadow-xl group hover:border-white/20 transition-all duration-300">
            <div>
              <div className="font-semibold text-lg text-white mb-3 group-hover:text-[#0052FF] transition-colors">{skill.title}</div>
              <div className="text-gray-400 text-sm mb-6 min-h-[65px] leading-relaxed">{skill.list}</div>
            </div>
            <div>
              <div className="bg-white/10 h-1.5 rounded-full overflow-hidden mb-2">
                <div className="bg-[#0052FF] h-full rounded-full shadow-[0_0_10px_#0052FF]" style={{ width: skill.proficiency }}></div>
              </div>
              <span className="text-xs font-semibold text-right block text-gray-400">{skill.proficiency}</span>
            </div>
          </FadeInSection>
        ))}
      </div>
    </section>
  );
}