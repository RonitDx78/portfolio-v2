import type { Metadata } from "next";
import { MapPin, BookOpen } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { EDUCATION } from "@/lib/data";

export const metadata: Metadata = { title: "Education", description: "Ronit Dey's academic background." };

const coursework = [
  "Data Structures & Algorithms","Operating Systems","Computer Architecture",
  "Software Engineering","Discrete Mathematics","Linear Algebra",
  "Object-Oriented Programming","Database Systems","Computer Networks","Numerical Methods",
];

export default function EducationPage() {
  return (
    <div className="mx-auto min-h-screen max-w-screen-lg px-6 sm:px-12 lg:px-24 pt-24 pb-24">
      <PageHero num="04." title="Education" subtitle="Two universities, two countries, one direction." />

      <div className="space-y-6 mb-16">
        {EDUCATION.map((edu, i) => (
          <AnimatedSection key={edu.id} delay={i * 0.1}>
            <div className="bg-[#112240] border border-[#233554] rounded p-7 sm:p-9 hover:border-[#64ffda]/30 transition-colors duration-300">
              <div className="flex flex-col sm:flex-row gap-6">
                {/* Icon + status */}
                <div className="flex sm:flex-col items-center sm:items-start gap-4 sm:gap-3 shrink-0">
                  <div className="w-14 h-14 rounded bg-[#0a192f] border border-[#233554] flex items-center justify-center text-3xl">
                    {edu.icon}
                  </div>
                  <span className={`font-mono text-[10px] px-2.5 py-1 rounded border ${
                    edu.status === "Current"
                      ? "text-emerald-400 border-emerald-700/40 bg-emerald-900/20"
                      : "text-[#8892b0] border-[#233554]"
                  }`}>
                    {edu.status}
                  </span>
                </div>

                {/* Details */}
                <div className="flex-1 min-w-0">
                  <h2 className="text-[#ccd6f6] font-bold text-lg leading-tight mb-1">
                    {edu.flag} {edu.institution}
                  </h2>
                  <p className="flex items-center gap-1.5 text-[#495670] text-xs font-mono mb-3">
                    <MapPin size={11} /> {edu.location}
                  </p>
                  <p className="flex items-center gap-2 text-[#64ffda] text-sm font-medium mb-4">
                    <BookOpen size={13} className="shrink-0" />
                    {edu.degree} in {edu.field}
                  </p>
                  <p className="text-[#8892b0] text-sm leading-relaxed mb-5">{edu.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {edu.highlights.map(h => (
                      <span key={h} className="font-mono text-[#8892b0] bg-[#0a192f] border border-[#233554] px-2.5 py-1 rounded text-[10px]">
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
        <div className="mb-6 flex items-center gap-4">
          <h2 className="font-mono text-sm uppercase tracking-widest text-[#ccd6f6] whitespace-nowrap">Coursework</h2>
          <div className="h-px flex-1 bg-[#233554]" />
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 mb-14">
          {coursework.map(c => (
            <div key={c} className="font-mono text-[#8892b0] bg-[#112240] border border-[#233554] px-3 py-2.5 rounded text-[10px] text-center hover:text-[#64ffda] hover:border-[#64ffda]/25 transition-colors duration-200 cursor-default leading-snug">
              {c}
            </div>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection>
        <div className="bg-[#112240] border border-[#233554] rounded p-7 flex gap-5 items-start">
          <span className="text-3xl shrink-0">🌍</span>
          <div>
            <p className="font-mono text-[#64ffda] text-xs mb-2">International Experience</p>
            <p className="text-[#8892b0] text-sm leading-relaxed">
              Studying at both a US and a Canadian university gave me exposure to different academic cultures, teaching
              styles, and communities — directly shaping how I approach teamwork and diverse problem spaces.
            </p>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
