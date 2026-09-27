import type { Metadata } from "next";
import { MapPin, BookOpen } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { EDUCATION } from "@/lib/data";

export const metadata: Metadata = {
  title: "Education",
  description: "Ronit Dey's academic background — University of Toledo and University of New Brunswick.",
};

const coursework = [
  "Data Structures & Algorithms", "Operating Systems", "Computer Architecture",
  "Software Engineering", "Discrete Mathematics", "Linear Algebra",
  "Object-Oriented Programming", "Database Systems", "Computer Networks", "Numerical Methods",
];

export default function EducationPage() {
  return (
    <>
      <PageHero
        num="04. Education"
        title="Academic Journey"
        subtitle="Two universities, two countries, one direction — building software that matters."
      />

      <div className="max-w-5xl mx-auto px-6 sm:px-12 pb-28 space-y-16">

        {/* University Cards */}
        <div className="space-y-6">
          {EDUCATION.map((edu, i) => (
            <AnimatedSection key={edu.id} delay={i * 0.1}>
              <div className="bg-[#112240] border border-[#233554] rounded p-8 md:p-10 hover:border-[#64ffda]/30 transition-colors">
                <div className="flex flex-col md:flex-row gap-8">
                  {/* Icon */}
                  <div className="shrink-0 flex flex-col items-center gap-3">
                    <div className="w-16 h-16 rounded bg-[#0a192f] border border-[#233554] flex items-center justify-center text-3xl">
                      {edu.icon}
                    </div>
                    <span className={`mono text-[11px] px-2 py-1 rounded ${
                      edu.status === "Current"
                        ? "text-emerald-400 border border-emerald-700/40 bg-emerald-900/20"
                        : "text-[#8892b0] border border-[#233554]"
                    }`}>
                      {edu.status}
                    </span>
                  </div>

                  {/* Details */}
                  <div className="flex-1 min-w-0">
                    <h2 className="text-xl font-bold text-[#ccd6f6] mb-1">
                      {edu.flag} {edu.institution}
                    </h2>
                    <div className="flex items-center gap-1.5 text-[#8892b0] text-sm mb-3">
                      <MapPin size={12} /> {edu.location}
                    </div>
                    <div className="flex items-center gap-2 mb-4">
                      <BookOpen size={14} className="text-[#64ffda] shrink-0" />
                      <span className="text-[#64ffda] font-semibold text-sm">{edu.degree} in {edu.field}</span>
                    </div>
                    <p className="text-[#8892b0] text-sm leading-relaxed mb-5">
                      {edu.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {edu.highlights.map(h => (
                        <span key={h} className="mono text-[#8892b0] bg-[#0a192f] border border-[#233554] px-3 py-1 rounded text-[11px]">
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Coursework */}
        <AnimatedSection>
          <div className="bg-[#112240] border border-[#233554] rounded p-8">
            <p className="mono text-[#64ffda] text-sm mb-1">Curriculum</p>
            <h2 className="text-xl font-bold text-[#ccd6f6] mb-6">Relevant Coursework</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2">
              {coursework.map(c => (
                <div
                  key={c}
                  className="mono text-[#8892b0] bg-[#0a192f] border border-[#233554] px-3 py-2 rounded text-[11px] text-center hover:text-[#64ffda] hover:border-[#64ffda]/20 transition-colors cursor-default leading-snug"
                >
                  {c}
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* International note */}
        <AnimatedSection>
          <div className="bg-[#112240] border border-[#233554] rounded p-8 flex gap-5">
            <div className="text-3xl shrink-0">🌍</div>
            <div>
              <p className="mono text-[#64ffda] text-sm mb-2">International Experience</p>
              <p className="text-[#8892b0] text-sm leading-relaxed">
                Studying at both a US and a Canadian university gave me more than course credits — it gave me
                exposure to different academic cultures, teaching styles, and student communities that directly
                shapes how I approach teamwork and cross-cultural collaboration.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </>
  );
}
