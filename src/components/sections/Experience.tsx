import { Section } from "@/components/ui/Section";
import { Briefcase, GraduationCap } from "lucide-react";

const timeline = [
  {
    type: "work",
    title: "Lead Frontend Developer & Technical Lead",
    organization: "",
    date: "2025 - Present",
    description: "Directed technical team workflows, meeting coordination, and documentation for project stakeholders. Managed end-to-end development lifecycles for complex, role-based dashboard applications using Next.js and Tailwind CSS.",
  },
  {
    type: "work",
    title: "Visual Director & Media Producer",
    organization: "",
    date: "2024 - Present",
    description: "Executed professional cinematography and post-production workflows for community and commercial projects. Operated advanced production hardware, including Egripment cranes and Blackmagic URSA Mini cameras. Produced comprehensive media assets, including voiceover scripting and presentation design for large-scale events.",
  },
  {
    type: "academic",
    title: "B.Tech in Computer Science",
    organization: "Ladoke Akintola University of Technology",
    date: "2026",
    description: "Final Year Project: Developed a hybrid AI-Blockchain framework for secure medical symptom analysis and data integrity in healthcare research.",
  }
];

export function Experience() {
  return (
    <Section id="experience" title="Experience & Education">
      <div className="space-y-8 pl-4 border-l-2 border-neutral-800">
        {timeline.map((item, index) => (
          <div key={index} className="relative pl-6">
            <span className="absolute -left-[35px] top-1 flex h-8 w-8 items-center justify-center rounded-full bg-neutral-900 border border-neutral-700 text-neutral-400">
              {item.type === "work" ? <Briefcase size={16} /> : <GraduationCap size={16} />}
            </span>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-1">
              <h3 className="text-xl font-semibold text-neutral-100">{item.title}</h3>
              <span className="text-sm text-neutral-500 font-mono mt-1 sm:mt-0">{item.date}</span>
            </div>
            {item.organization && <p className="text-neutral-400 font-medium mb-3">{item.organization}</p>}
            <p className="text-neutral-400 leading-relaxed max-w-2xl">{item.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
