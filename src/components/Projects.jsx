import React from 'react';
import FadeInSection from './FadeInSection';

const PROJECTS_DATA = [
  {
    title: "UniSuki",
    desc: "Full-stack marketplace using MobileNetV2 image recognition for automated item classification.",
    tags: ["Laravel", "React", "MobileNetV2"],
    imageSrc: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop", // Replace with your local path e.g., "/assets/unisuki.png"
    githubUrl: "https://github.com/kyrenieee/UniSuki"
  },
  {
    title: "Dynamic Product Catalog",
    desc: "CRUD application with custom routing algorithms and a highly responsive, anime-themed interface.",
    tags: ["Laravel", "PHP", "MySQL"],
    imageSrc: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?q=80&w=800&auto=format&fit=crop", 
    githubUrl: "https://github.com/kyrenieee"
  },
  {
    title: "Cinema Booking & Management",
    desc: "Web platform handling movie scheduling, dynamic seat reservations, and optimized relational SQL schema.",
    tags: ["PHP", "HTML/CSS", "SQL Schema"],
    imageSrc: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?q=80&w=800&auto=format&fit=crop", 
    githubUrl: "https://github.com/kyrenieee"
  },
  {
    title: "Piggy Lock UI/UX Prototype",
    desc: "A high-fidelity minimalist mobile application designed to streamline personal finance tracking. Features comprehensive user onboarding, interactive savings goal configurations, and real-time ledger journaling dashboards.",
    tags: ["Figma", "UI/UX Design", "Mobile Prototype"],
    imageSrc: "/Piggy Lock.png", // Crop or save image_b62862.jpg into your public folder as Piggy Lock.png
    projectUrl: "https://www.figma.com/design/EmmN7QxG1P6tL1yV5vODid/PIGGY-LOCK", // Your exact URL from the browser bar
    linkLabel: "Figma"
  },
  {
    title: "API Integration Showcase",
    desc: "Frontend JavaScript application featuring high-performance asynchronous REST API fetching and JSON parsing.",
    tags: ["JavaScript", "REST API", "JSON"],
    imageSrc: "https://images.unsplash.com/photo-1627398242454-45a1465c2079?q=80&w=800&auto=format&fit=crop", 
    githubUrl: "https://github.com/kyrenieee"
  }
];

export default function Projects() {
  return (
    <section className="max-w-[1200px] mx-auto py-24 px-5 border-b mt-6 border-white/5" id="projects">
      <FadeInSection>
        <h2 className="text-3xl font-extrabold text-white tracking-tight mb-16">Featured Projects</h2>
      </FadeInSection>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
        {PROJECTS_DATA.map((project, index) => (
          <FadeInSection
            key={index}
            className="p-[1px] rounded-2xl bg-gradient-to-br from-white/10 to-[#3c0b7d]/40 transition-all duration-500 hover:to-[#3c0b7d] hover:-translate-y-1.5 shadow-2xl shadow-black/40 hover:shadow-[10px_10px_30px_rgba(60,11,125,0.2)] group"
          >
            {/* Internal card container */}
            <div className="h-full w-full p-6 rounded-2xl bg-[#0b0b0f]/90 backdrop-blur-md transition-colors duration-500 group-hover:bg-[#0b0b0f]/80 flex flex-col justify-between">
              
              <div>
                {/* 🧱 PROJECT IMAGE CONTAINER */}
                <div className="aspect-[16/9] w-full overflow-hidden rounded-xl mb-6 bg-black/40 border border-white/5 relative">
                  <img 
                    src={project.imageSrc} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    loading="lazy"
                  />
                  {/* Subtle dark overlay that lightens up slightly on card hover */}
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                </div>

                <h3 className="text-xl font-bold text-white mb-3 transition-colors duration-300 group-hover:text-white">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 text-sm mb-8 leading-relaxed mt-4">
                  {project.desc}
                </p>
              </div>
              
              {/* Card Footer: Metadata Tags & Interactive Repo Link */}
              <div className="flex items-center justify-between gap-4 mt-auto pt-4 border-t border-white/5">
                {/* Technical Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag, tIndex) => (
                    <span
                      key={tIndex}
                      className="text-[10px] font-medium bg-white/[0.03] text-gray-400 px-2.5 py-0.5 rounded-full border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* 🔗 INTERACTIVE GITHUB HYPERLINK */}
                <a 
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold tracking-tight text-gray-400 hover:text-[#3c0b7d] dark:hover:text-[#9d4edd] transition-colors duration-300 group/link shrink-0"
                >
                  <span>Code</span>
                  <svg 
                    className="w-3.5 h-3.5 transform transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2.5" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>
                </a>
              </div>

            </div>
          </FadeInSection>
        ))}
      </div>
    </section>
  );
}