import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { EXPERIENCE } from "@/lib/data";

export const metadata: Metadata = { title: "Experience", description: "Ronit Dey's work experience." };

export default function ExperiencePage() {
  return (
    <div className="mx-auto min-h-screen max-w-screen-lg px-6 sm:px-12 lg:px-24 pt-24 pb-24">
      <PageHero
        num="03."
        title="Experience"
        subtitle="Roles that have shaped my leadership, communication, and technical depth."
      />

      {/* Flex-based timeline — no absolute lines, no overlap */}
      <div className="space-y-0">
        {EXPERIENCE.map((exp, i) => (
          <AnimatedSection key={exp.id} delay={i * 0.1}>
            {/* Each timeline row = dot column + content column */}
            <div className="flex gap-6">

              {/* Dot + connecting line */}
              <div className="flex flex-col items-center shrink-0">
                <div className="w-3 h-3 rounded-full bg-[#64ffda] border-2 border-[#0a192f] mt-7 shrink-0" />
                {i < EXPERIENCE.length - 1 && (
                  <div className="w-px flex-1 bg-[#233554] mt-2" />
                )}
              </div>

              {/* Card */}
              <div className="flex-1 min-w-0 pb-12">
                <div className="group bg-[#112240] border border-[#233554] rounded p-6 sm:p-8 hover:border-[#64ffda]/30 hover:shadow-[inset_0_1px_0_0_rgba(100,255,218,0.1)] transition-all duration-300">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                    <div>
                      <h2 className="text-[#ccd6f6] font-semibold text-lg leading-tight group-hover:text-[#64ffda] transition-colors">
                        {exp.role}
                      </h2>
                      <p className="text-[#64ffda] text-sm mt-0.5">
                        {exp.company}{exp.department ? ` — ${exp.department}` : ""}
                      </p>
                      <p className="font-mono text-[#495670] text-[11px] mt-1">{exp.location}</p>
                    </div>
                    <div className="flex items-center gap-3 shrink-0">
                      {exp.current && (
                        <span className="font-mono text-emerald-400 text-[10px] border border-emerald-700/40 bg-emerald-900/20 px-2 py-1 rounded">
                          ● Current
                        </span>
                      )}
                      <span className="font-mono text-[#495670] text-[11px] whitespace-nowrap">{exp.period}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-[#8892b0] text-sm leading-relaxed mb-4 pl-3 border-l-2 border-[#64ffda]/30">
                    {exp.description}
                  </p>

                  {/* Bullets */}
                  <ul className="space-y-2 mb-5">
                    {exp.bullets.map((b, bi) => (
                      <li key={bi} className="flex gap-3 text-sm text-[#8892b0] leading-relaxed">
                        <span className="font-mono text-[#64ffda] shrink-0 mt-0.5 text-xs">▹</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map(tag => (
                      <span key={tag} className="font-mono text-[#64ffda] text-[10px] bg-[#64ffda]/10 px-2.5 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>

      {/* More coming */}
      <AnimatedSection>
        <div className="bg-[#112240] border border-[#233554] rounded p-8 text-center">
          <p className="font-mono text-[#64ffda] text-xs mb-3">What&apos;s Next</p>
          <p className="text-[#8892b0] text-sm leading-relaxed max-w-md mx-auto">
            Actively seeking internships, co-ops, and part-time software engineering roles.
            Open to remote and on-site positions.
          </p>
        </div>
      </AnimatedSection>
    </div>
  );
}
