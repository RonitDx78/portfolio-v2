import type { Metadata } from "next";
import { MapPin, Calendar } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { EXPERIENCE } from "@/lib/data";

export const metadata: Metadata = {
  title: "Experience",
  description: "Ronit Dey's professional work experience.",
};

export default function ExperiencePage() {
  return (
    <>
      <PageHero
        num="03. Experience"
        title="Work Experience"
        subtitle="Roles that have shaped my leadership, communication, and technical depth."
      />

      <div className="max-w-4xl mx-auto px-6 sm:px-12 pb-28">

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-3.5 top-0 bottom-0 w-px bg-[#233554] hidden sm:block" />

          <div className="space-y-8">
            {EXPERIENCE.map((exp, i) => (
              <AnimatedSection key={exp.id} delay={i * 0.1}>
                <div className="sm:pl-14 relative">
                  {/* Dot */}
                  <div className="hidden sm:flex absolute left-0 top-7 w-7 h-7 rounded-full bg-[#0a0a0a] border-2 border-[#64ffda] items-center justify-center text-sm z-10">
                    {exp.icon}
                  </div>

                  <div className="bg-[#112240] border border-[#233554] rounded p-8 hover:border-[#64ffda]/30 transition-colors">
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                      <div>
                        <div className="flex items-center gap-2 mb-0.5 flex-wrap">
                          <span className="sm:hidden text-xl">{exp.icon}</span>
                          <h2 className="text-xl font-bold text-[#ccd6f6]">
                            {exp.role}
                          </h2>
                          <span className="text-[#64ffda]">@ {exp.company}</span>
                        </div>
                        {exp.department && (
                          <p className="text-[#8892b0] text-sm">{exp.department}</p>
                        )}
                        <div className="flex flex-wrap gap-4 mt-2">
                          <span className="mono flex items-center gap-1.5 text-[#8892b0] text-xs">
                            <Calendar size={11} /> {exp.period}
                          </span>
                          <span className="mono flex items-center gap-1.5 text-[#8892b0] text-xs">
                            <MapPin size={11} /> {exp.location}
                          </span>
                        </div>
                      </div>
                      {exp.current && (
                        <span className="mono text-[11px] text-emerald-400 border border-emerald-700/40 bg-emerald-900/20 px-2 py-1 rounded self-start whitespace-nowrap">
                          ● Current
                        </span>
                      )}
                    </div>

                    {/* Description */}
                    <p className="text-[#8892b0] text-sm leading-relaxed mb-5 border-l-2 border-[#64ffda]/30 pl-4">
                      {exp.description}
                    </p>

                    {/* Bullets */}
                    <ul className="space-y-2.5 mb-6">
                      {exp.bullets.map((b, bi) => (
                        <li key={bi} className="flex gap-3 text-sm text-[#8892b0] leading-relaxed">
                          <span className="mono text-[#64ffda] shrink-0 mt-0.5 text-xs">▹</span>
                          {b}
                        </li>
                      ))}
                    </ul>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map(tag => (
                        <span key={tag} className="mono text-[#64ffda] text-[11px] bg-[#64ffda]/10 px-2 py-1 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>

        <AnimatedSection className="mt-10">
          <div className="bg-[#112240] border border-[#233554] rounded p-7 text-center">
            <p className="mono text-[#64ffda] text-sm mb-2">What&apos;s Next</p>
            <p className="text-[#8892b0] text-sm max-w-md mx-auto">
              Actively seeking internship and co-op roles in software engineering, data science, and systems
              development. Open to remote and on-site positions.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </>
  );
}
