import React from 'react';
import FadeInSection from './FadeInSection';

const PROJECTS_DATA = [
  {
    title: "UniSuki",
    desc: "Full-stack marketplace using MobileNetV2 image recognition for automated item classification.",
    tags: ["Laravel", "React", "MobileNetV2"]
  },
  {
    title: "Dynamic Product Catalog",
    desc: "CRUD application with custom routing algorithms and a highly responsive, anime-themed interface.",
    tags: ["Laravel", "PHP", "MySQL"]
  },
  {
    title: "Cinema Booking & Management",
    desc: "Web platform handling movie scheduling, dynamic seat reservations, and optimized relational SQL schema.",
    tags: ["PHP", "HTML/CSS", "SQL Schema"]
  },
  {
    title: "API Integration Showcase",
    desc: "Frontend JavaScript application featuring high-performance asynchronous REST API fetching and JSON parsing.",
    tags: ["JavaScript", "REST API", "JSON"]
  }
];

export default function Projects() {
  return (
    <section className="max-w-[1200px] mx-auto py-24 px-5 border-b border-white/5" id="projects">
      <FadeInSection>
        <h2 className="text-3xl font-extrabold text-white tracking-tight mb-12">Featured Projects</h2>
      </FadeInSection>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {PROJECTS_DATA.map((project, index) => (
          <FadeInSection key={index} className="border border-white/10 p-8 rounded-2xl bg-white/[0.01] backdrop-blur-md transition-all duration-500 hover:border-[#0052FF]/60 hover:bg-white/[0.04] hover:-translate-y-1.5 shadow-2xl shadow-black/40 hover:shadow-[#0052FF]/5 group">
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#0052FF] transition-colors">{project.title}</h3>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">{project.desc}</p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, tIndex) => (
                <span key={tIndex} className="text-xs bg-white/[0.04] text-gray-400 px-3 py-1 rounded-full border border-white/5">
                  {tag}
                </span>
              ))}
            </div>
          </FadeInSection>
        ))}
      </div>
    </section>
  );
}