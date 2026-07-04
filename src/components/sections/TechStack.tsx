"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";

interface Skill {
  name: string;
  logo: React.ReactNode;
  colorClass: string;
}

const row1: Skill[] = [
  {
    name: "HTML5",
    colorClass: "hover:border-[#E34F26]/40 hover:shadow-[0_0_25px_rgba(227,79,38,0.15)]",
    logo: (
      <svg className="w-5 h-5 text-[#E34F26] transition-transform duration-500 group-hover:scale-110" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.5 0h21l-1.9 21.2L12 24l-8.6-2.8L1.5 0zm17.3 5.4H5.2l.5 5.4h11l-.4 4.6-4.3 1.2-4.3-1.2-.3-3H4.1l.6 6.8 7.3 2 7.3-2 1-11.8z" />
      </svg>
    ),
  },
  {
    name: "CSS3",
    colorClass: "hover:border-[#1572B6]/40 hover:shadow-[0_0_25px_rgba(21,114,182,0.15)]",
    logo: (
      <svg className="w-5 h-5 text-[#1572B6] transition-transform duration-500 group-hover:scale-110" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 2L3 22l9 2 9-2-2-20H5zm11 11H9.3l.3 3.1 5.4.1-.5 5-5.2-1.3-.2-2.1H6.5l.4 5.3 8.1 2 8-2 1.1-10H16z" />
      </svg>
    ),
  },
  {
    name: "JavaScript",
    colorClass: "hover:border-[#F7DF1E]/40 hover:shadow-[0_0_25px_rgba(247,223,30,0.15)]",
    logo: (
      <svg className="w-5 h-5 text-[#F7DF1E] rounded overflow-hidden transition-transform duration-500 group-hover:scale-110" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="100" height="100" fill="currentColor"/>
        <text x="86" y="82" fill="black" fontSize="38" fontWeight="700" fontFamily="Inter, sans-serif" textAnchor="end">JS</text>
      </svg>
    ),
  },
  {
    name: "TypeScript",
    colorClass: "hover:border-[#3178C6]/40 hover:shadow-[0_0_25px_rgba(49,120,198,0.15)]",
    logo: (
      <svg className="w-5 h-5 text-[#3178C6] rounded overflow-hidden transition-transform duration-500 group-hover:scale-110" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="100" height="100" fill="currentColor"/>
        <text x="86" y="82" fill="white" fontSize="38" fontWeight="700" fontFamily="Inter, sans-serif" textAnchor="end">TS</text>
      </svg>
    ),
  },
  {
    name: "React",
    colorClass: "hover:border-[#61DAFB]/40 hover:shadow-[0_0_25px_rgba(97,218,251,0.15)]",
    logo: (
      <svg className="w-5 h-5 text-[#61DAFB] transition-transform duration-700 group-hover:rotate-[360deg]" viewBox="-11.5 -10.23174 23 20.46348" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="0" cy="0" r="2.05" fill="currentColor" />
        <g stroke="currentColor" strokeWidth="1" fill="none">
          <ellipse rx="11" ry="4.2" />
          <ellipse rx="11" ry="4.2" transform="rotate(60)" />
          <ellipse rx="11" ry="4.2" transform="rotate(120)" />
        </g>
      </svg>
    ),
  },
  {
    name: "Next.js",
    colorClass: "hover:border-white/30 hover:shadow-[0_0_25px_rgba(255,255,255,0.1)]",
    logo: (
      <svg className="w-5 h-5 text-white bg-black rounded-full p-0.5 border border-neutral-800 transition-transform duration-500 group-hover:scale-110" viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg">
        <mask id="next-mask" maskUnits="userSpaceOnUse" x="0" y="0" width="180" height="180">
          <circle cx="90" cy="90" r="90" fill="white" />
        </mask>
        <g mask="url(#next-mask)">
          <circle cx="90" cy="90" r="90" fill="black" />
          <path d="M149.508 157.52L69.142 54H54V125.97H66.1136V75.216L135.225 163.585C140.407 161.85 145.19 160.038 149.508 157.52Z" fill="url(#next-grad)" />
          <rect x="115" y="54" width="12" height="72" fill="url(#next-grad)" />
        </g>
        <defs>
          <linearGradient id="next-grad" x1="109" y1="116.5" x2="144.5" y2="160.5" gradientUnits="userSpaceOnUse">
            <stop stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
];

const row2: Skill[] = [
  {
    name: "Tailwind CSS",
    colorClass: "hover:border-[#38BDF8]/40 hover:shadow-[0_0_25px_rgba(56,189,248,0.15)]",
    logo: (
      <svg className="w-5 h-5 text-[#38BDF8] transition-transform duration-500 group-hover:scale-110" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 6.018C13.8 3.618 16.5 3 20.1 4.218c3.6 1.218 4.5 3.618 2.7 7.218-1.8 3.6-4.5 4.218-8.1 3-3.6-1.218-4.5-3.618-2.7-7.218zM3.9 12.018c1.8-2.4 4.5-3 8.1-1.782 3.6 1.218 4.5 3.618 2.7 7.218-1.8 3.6-4.5 4.218-8.1 3-3.6-1.218-4.5-3.618-2.7-7.218z" fill="currentColor"/>
      </svg>
    ),
  },
  {
    name: "Framer Motion",
    colorClass: "hover:border-[#F08]/40 hover:shadow-[0_0_25px_rgba(240,0,128,0.15)]",
    logo: (
      <svg className="w-5 h-5 transition-transform duration-500 group-hover:-translate-y-0.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 0h16l-8 8H4V0zm0 8h8l8 8H4V8zm0 8h8l-8 8V16z" fill="url(#framer-grad)"/>
        <defs>
          <linearGradient id="framer-grad" x1="4" y1="0" x2="20" y2="24" gradientUnits="userSpaceOnUse">
            <stop stopColor="#F08" />
            <stop offset="0.5" stopColor="#D0E" />
            <stop offset="1" stopColor="#70F" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    name: "GraphQL",
    colorClass: "hover:border-[#E10098]/40 hover:shadow-[0_0_25px_rgba(225,0,152,0.15)]",
    logo: (
      <svg className="w-5 h-5 text-[#E10098] transition-transform duration-500 group-hover:scale-110" viewBox="0 0 400 400" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M356.5 107.5c-4.1-7.2-11.9-11.7-20.2-11.7H277l-41-71c-4.1-7.2-11.9-11.7-20.2-11.7s-16.1 4.5-20.2 11.7l-41 71H94.1c-8.3 0-16.1 4.5-20.2 11.7-4.1 7.2-4.1 16 0 23.2l41 71-41 71c-4.1 7.2-4.1 16 0 23.2 4.1 7.2 11.9 11.7 20.2 11.7H154l41 71c4.1 7.2 11.9 11.7 20.2 11.7s16.1-4.5 20.2-11.7l41-71h59.9c8.3 0 16.1-4.5 20.2-11.7 4.1-7.2 4.1-16 0-23.2l-41-71 41-71c4.2-7.1 4.2-15.9.1-23.1zM200 64.9l29 50.2H171l29-50.2zm-94.8 59.9h121.7l-60.8 105.4-60.9-105.4zm-29 75.2l29-50.2 29 50.2-29 50.2-29-50.2zm29 135.1l29-50.2H171l29 50.2zm94.8-59.9H138.3l60.8-105.4 60.9 105.4zm89.6-75.2l-29 50.2-29-50.2 29-50.2 29 50.2zm-28.8-75.2l29 50.2-29 50.2-29-50.2 29-50.2z" />
      </svg>
    ),
  },
  {
    name: "Web3 / Blockchain",
    colorClass: "hover:border-[#A78BFA]/40 hover:shadow-[0_0_25px_rgba(167,139,250,0.15)]",
    logo: (
      <svg className="w-5 h-5 text-[#A78BFA] transition-transform duration-500 group-hover:scale-110" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 17l10 5 10-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 12l10 5 10-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 22V12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    name: "Node.js",
    colorClass: "hover:border-[#339933]/40 hover:shadow-[0_0_25px_rgba(51,153,51,0.15)]",
    logo: (
      <svg className="w-5 h-5 text-[#339933] transition-transform duration-500 group-hover:scale-110" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 1L3 6.2v10.4L12 21.8l9-5.2V6.2L12 1zm-1.1 15.6V7.4l6.1 3.5-6.1 3.5l1.1.6z"/>
      </svg>
    ),
  },
  {
    name: "Git",
    colorClass: "hover:border-[#F05032]/40 hover:shadow-[0_0_25px_rgba(240,80,50,0.15)]",
    logo: (
      <svg className="w-5 h-5 text-[#F05032] transition-transform duration-500 group-hover:rotate-12" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M23.2 11.2L12.8 0.8C12.3 0.3 11.5 0.3 11 0.8L8.4 3.4L11 6C11.7 5.8 12.5 5.9 13.1 6.5C13.7 7.1 13.9 7.9 13.7 8.7L16.3 11.3C17.1 11.1 17.9 11.3 18.5 11.9C19.2 12.6 19.2 13.7 18.5 14.4C17.8 15.1 16.7 15.1 16 14.4C15.4 13.8 15.2 13 15.4 12.3L12.8 9.7V15.6C13.1 15.8 13.4 16.1 13.6 16.5C14.2 17.2 14.2 18.3 13.6 19C13 19.7 11.9 19.7 11.2 19C10.5 18.3 10.5 17.2 11.2 16.5C11.4 16.1 11.7 15.8 12 15.6V9.7C11.7 9.5 11.4 9.2 11.2 8.8C10.6 8.1 10.6 7 11.2 6.3C11.5 6 11.9 5.8 12.3 5.8L9.7 3.2L0.8 12.1C0.3 12.6 0.3 13.4 0.8 13.9L11.2 24.3C11.7 24.8 12.5 24.8 13 24.3L23.2 14C23.7 13.5 23.7 12.7 23.2 12.2V11.2z" />
      </svg>
    ),
  },
];

const row3: Skill[] = [
  {
    name: "Adobe Premiere Pro",
    colorClass: "hover:border-[#EA3FF7]/40 hover:shadow-[0_0_25px_rgba(234,63,247,0.15)]",
    logo: (
      <svg className="w-5 h-5 text-[#EA3FF7] rounded overflow-hidden transition-transform duration-500 group-hover:scale-110" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="100" height="100" fill="black" stroke="currentColor" strokeWidth="8"/>
        <text x="50" y="65" fill="currentColor" fontSize="40" fontWeight="700" fontFamily="Inter, sans-serif" textAnchor="middle">Pr</text>
      </svg>
    ),
  },
  {
    name: "Adobe Photoshop",
    colorClass: "hover:border-[#31A8FF]/40 hover:shadow-[0_0_25px_rgba(49,168,255,0.15)]",
    logo: (
      <svg className="w-5 h-5 text-[#31A8FF] rounded overflow-hidden transition-transform duration-500 group-hover:scale-110" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="100" height="100" fill="black" stroke="currentColor" strokeWidth="8"/>
        <text x="50" y="65" fill="currentColor" fontSize="40" fontWeight="700" fontFamily="Inter, sans-serif" textAnchor="middle">Ps</text>
      </svg>
    ),
  },
  {
    name: "Adobe Lightroom",
    colorClass: "hover:border-[#31A8FF]/40 hover:shadow-[0_0_25px_rgba(49,168,255,0.15)]",
    logo: (
      <svg className="w-5 h-5 text-[#31A8FF] rounded overflow-hidden transition-transform duration-500 group-hover:scale-110" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="100" height="100" fill="black" stroke="currentColor" strokeWidth="8"/>
        <text x="50" y="65" fill="currentColor" fontSize="40" fontWeight="700" fontFamily="Inter, sans-serif" textAnchor="middle">Lr</text>
      </svg>
    ),
  },
  {
    name: "Cinematography",
    colorClass: "hover:border-[#F59E0B]/40 hover:shadow-[0_0_25px_rgba(245,158,11,0.15)]",
    logo: (
      <svg className="w-5 h-5 text-[#F59E0B] transition-transform duration-500 group-hover:scale-110" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
        <path d="M23 7a2 2 0 0 0-2.45-1.45L16 7V5a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2l4.55 1.45A2 2 0 0 0 23 17V7z"/>
      </svg>
    ),
  },
  {
    name: "Blackmagic URSA",
    colorClass: "hover:border-neutral-400/40 hover:shadow-[0_0_25px_rgba(163,163,163,0.15)]",
    logo: (
      <svg className="w-5 h-5 text-neutral-300 transition-transform duration-500 group-hover:scale-110" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="2" width="20" height="20" rx="2" ry="2" />
        <line x1="7" y1="2" x2="7" y2="22" />
        <line x1="17" y1="2" x2="17" y2="22" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <line x1="2" y1="7" x2="7" y2="7" />
        <line x1="2" y1="17" x2="7" y2="17" />
        <line x1="17" y1="17" x2="22" y2="17" />
        <line x1="17" y1="7" x2="22" y2="7" />
      </svg>
    ),
  },
  {
    name: "Egripment Crane",
    colorClass: "hover:border-blue-500/40 hover:shadow-[0_0_25px_rgba(59,130,246,0.15)]",
    logo: (
      <svg className="w-5 h-5 text-blue-400 transition-transform duration-500 group-hover:scale-110" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    ),
  }
];

export function TechStack() {
  return (
    <Section id="skills" title="Technical Arsenal">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col gap-6 w-full py-2 overflow-hidden relative"
      >
        {/* Soft edge blur masks to make the scrolling blend into the page */}
        <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-black via-black/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-black via-black/80 to-transparent z-10 pointer-events-none" />

        {/* Row 1 (Core Stack) */}
        <div className="flex overflow-hidden w-full py-2 relative">
          <div className="flex gap-4 shrink-0 animate-marquee-right-fast hover:[animation-play-state:paused] pr-4">
            {/* Copy 1 */}
            <div className="flex gap-4 shrink-0">
              {row1.map((skill) => (
                <div 
                  key={skill.name} 
                  className={`flex items-center gap-3 px-5 py-3 rounded-xl bg-neutral-900/60 border border-neutral-800/80 hover:bg-neutral-900 hover:text-white transition-all duration-300 group cursor-default shrink-0 select-none ${skill.colorClass}`}
                >
                  {skill.logo}
                  <span className="text-neutral-200 font-medium tracking-wide text-sm sm:text-base group-hover:text-white transition-colors">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
            {/* Copy 2 */}
            <div className="flex gap-4 shrink-0">
              {row1.map((skill) => (
                <div 
                  key={`${skill.name}-copy`} 
                  className={`flex items-center gap-3 px-5 py-3 rounded-xl bg-neutral-900/60 border border-neutral-800/80 hover:bg-neutral-900 hover:text-white transition-all duration-300 group cursor-default shrink-0 select-none ${skill.colorClass}`}
                >
                  {skill.logo}
                  <span className="text-neutral-200 font-medium tracking-wide text-sm sm:text-base group-hover:text-white transition-colors">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Row 2 (Ecosystem & Tools) */}
        <div className="flex overflow-hidden w-full py-2 relative">
          <div className="flex gap-4 shrink-0 animate-marquee-right-slow hover:[animation-play-state:paused] pr-4">
            {/* Copy 1 */}
            <div className="flex gap-4 shrink-0">
              {row2.map((skill) => (
                <div 
                  key={skill.name} 
                  className={`flex items-center gap-3 px-5 py-3 rounded-xl bg-neutral-900/60 border border-neutral-800/80 hover:bg-neutral-900 hover:text-white transition-all duration-300 group cursor-default shrink-0 select-none ${skill.colorClass}`}
                >
                  {skill.logo}
                  <span className="text-neutral-200 font-medium tracking-wide text-sm sm:text-base group-hover:text-white transition-colors">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
            {/* Copy 2 */}
            <div className="flex gap-4 shrink-0">
              {row2.map((skill) => (
                <div 
                  key={`${skill.name}-copy`} 
                  className={`flex items-center gap-3 px-5 py-3 rounded-xl bg-neutral-900/60 border border-neutral-800/80 hover:bg-neutral-900 hover:text-white transition-all duration-300 group cursor-default shrink-0 select-none ${skill.colorClass}`}
                >
                  {skill.logo}
                  <span className="text-neutral-200 font-medium tracking-wide text-sm sm:text-base group-hover:text-white transition-colors">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Row 3 (Creative Suite & Hardware) */}
        <div className="flex overflow-hidden w-full py-2 relative">
          <div className="flex gap-4 shrink-0 animate-marquee-left-slow hover:[animation-play-state:paused] pr-4">
            {/* Copy 1 */}
            <div className="flex gap-4 shrink-0">
              {row3.map((skill) => (
                <div 
                  key={skill.name} 
                  className={`flex items-center gap-3 px-5 py-3 rounded-xl bg-neutral-900/60 border border-neutral-800/80 hover:bg-neutral-900 hover:text-white transition-all duration-300 group cursor-default shrink-0 select-none ${skill.colorClass}`}
                >
                  {skill.logo}
                  <span className="text-neutral-200 font-medium tracking-wide text-sm sm:text-base group-hover:text-white transition-colors">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
            {/* Copy 2 */}
            <div className="flex gap-4 shrink-0">
              {row3.map((skill) => (
                <div 
                  key={`${skill.name}-copy`} 
                  className={`flex items-center gap-3 px-5 py-3 rounded-xl bg-neutral-900/60 border border-neutral-800/80 hover:bg-neutral-900 hover:text-white transition-all duration-300 group cursor-default shrink-0 select-none ${skill.colorClass}`}
                >
                  {skill.logo}
                  <span className="text-neutral-200 font-medium tracking-wide text-sm sm:text-base group-hover:text-white transition-colors">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}
