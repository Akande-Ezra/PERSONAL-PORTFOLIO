import { Section } from "@/components/ui/Section";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "AI-Blockchain Healthcare Framework",
    description: "Architected a hybrid system for secure medical symptom analysis using AI-driven diagnostics integrated with Blockchain for data integrity. Designed the end-to-end data acquisition flow and cryptographic verification processes.",
    tech: ["Next.js", "React", "Tailwind CSS", "Web3", "AI Diagnostics"],
    live: "https://research-lab-pi.vercel.app"
  },
  {
    title: "CampusStay Hostel Hub",
    description: "Engineered a multi-role web platform supporting unique dashboards for students, agents, and administrators, focusing on scalable state management and role-based access control.",
    tech: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
    live: ""
  },
  {
    title: "NASA Mission Telemetry Dashboard",
    description: "Engineered a real-time telemetry application utilizing NASA API integration and JPL Horizons ephemeris data. Designed interactive 3D mission stages and data visualization modules for live space mission tracking.",
    tech: ["Next.js", "React", "Tailwind CSS", "Three.js", "NASA API"],
    live: ""
  },
  {
    title: "ON Collective",
    description: "High-end UI/UX implementation emphasizing responsive design and Next.js image optimization. Built for fluid interactions and visual excellence.",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
    live: "https://on-collective-furniture.vercel.app"
  },
  {
    title: "Botanical Garden",
    description: "A premium, modern web application serving as both a digital storefront and an educational showcase for a high-end floral studio.",
    tech: ["React", "Vite", "Tailwind CSS", "CSS"],
    live: "https://flowers-coral-tau.vercel.app"
  },
  {
    title: "Creative Hub",
    description: "A multifaceted creator portfolio blending words, voice, and presence into compelling narratives that inspire and engage.",
    tech: ["TypeScript", "CSS", "JavaScript"],
    live: "https://creative-porfolio.vercel.app"
  }
];

export function Projects() {
  return (
    <Section id="projects" title="Project Registry">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div key={project.title} className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 hover:border-neutral-600 transition-colors flex flex-col h-full group">
            <h3 className="text-xl font-bold mb-3 text-neutral-100 group-hover:text-blue-400 transition-colors">{project.title}</h3>
            <p className="text-neutral-400 mb-6 flex-grow leading-relaxed">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map(tech => (
                <span key={tech} className="text-xs font-mono text-neutral-300 bg-neutral-800 px-2 py-1 rounded">
                  {tech}
                </span>
              ))}
            </div>
            {project.live && (
              <div className="flex gap-4 mt-auto pt-4 border-t border-neutral-800">
                <a 
                  href={project.live} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-neutral-400 hover:text-neutral-100 flex items-center gap-1 transition-colors"
                >
                  <ExternalLink size={18} /> <span className="text-sm font-medium">Live</span>
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
}
