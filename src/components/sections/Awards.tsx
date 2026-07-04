import { Section } from "@/components/ui/Section";
import Image from "next/image";
import { Award, Trophy, Star } from "lucide-react";

const awardsData = [
  {
    id: 1,
    event: "BlockDAG Hackathon Nigeria",
    position: "2nd Place Winner",
    date: "2024",
    description: "Secured 2nd Place out of multiple teams and won a $300 prize as Team Kilo.",
    image: "/blockdag-hackathon.jpg"
  }
];

export function Awards() {
  return (
    <Section id="awards" title="Awards & Recognitions">
      <div className="max-w-4xl mx-auto">
        {awardsData.map((award) => (
          <div 
            key={award.id} 
            className="group flex flex-col md:flex-row bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden hover:border-neutral-600 transition-colors"
          >
            {/* Image Space */}
            <div className="relative w-full md:w-1/2 min-h-[400px] md:min-h-[500px] bg-[#0a0a0a] overflow-hidden flex-shrink-0 flex items-center justify-center">
              {award.image ? (
                <Image 
                  src={award.image} 
                  alt={award.event}
                  fill
                  className="object-contain p-2 opacity-90 group-hover:opacity-100 transition-all duration-500 scale-[0.98] group-hover:scale-100"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-neutral-800 to-neutral-900 group-hover:scale-105 transition-transform duration-500">
                  <Trophy size={48} className="text-neutral-700 opacity-50" />
                </div>
              )}
            </div>

            {/* Content Space */}
            <div className="p-8 md:p-12 flex flex-col flex-grow justify-center">
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center gap-2 text-blue-400">
                  <Award size={24} />
                  <span className="font-mono text-sm text-neutral-400 border border-neutral-800 bg-neutral-950 px-3 py-1 rounded-full">
                    {award.date}
                  </span>
                </div>
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold text-neutral-100 mb-3 group-hover:text-blue-400 transition-colors">
                {award.position}
              </h3>
              
              <h4 className="text-base font-semibold text-neutral-300 mb-6 uppercase tracking-wider">
                @ {award.event}
              </h4>
              
              <p className="text-neutral-400 text-base md:text-lg leading-relaxed mt-auto border-t border-neutral-800 pt-6">
                {award.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
