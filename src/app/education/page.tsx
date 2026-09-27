import type { Metadata } from "next";
import { MapPin, BookOpen, Award } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Badge from "@/components/ui/Badge";
import { EDUCATION } from "@/lib/data";

export const metadata: Metadata = {
  title: "Education",
  description: "Ronit Dey's academic background — University of Toledo and University of New Brunswick.",
};

const coursework = [
  "Data Structures & Algorithms",
  "Operating Systems",
  "Computer Architecture",
  "Software Engineering",
  "Discrete Mathematics",
  "Linear Algebra",
  "Object-Oriented Programming",
  "Database Systems",
  "Computer Networks",
  "Numerical Methods",
];

export default function EducationPage() {
  return (
    <>
      <PageHero
        label="04 / Education"
        title="Academic Journey"
        subtitle="Two universities, two countries, one passion — building software that matters."
        gradient="from-[#34d399] to-[#60a5fa]"
      />

      <div className="max-w-5xl mx-auto px-6 pb-24 space-y-16">

        {/* University Cards */}
        <div className="space-y-8">
          {EDUCATION.map((edu, i) => (
            <AnimatedSection key={edu.id} delay={i * 0.1}>
              <div className="glass-card rounded-3xl overflow-hidden hover:border-[#60a5fa]/20 hover:shadow-lg hover:shadow-blue-500/[0.07] transition-all duration-300">
                {/* Top gradient stripe */}
                <div className={`h-1.5 bg-gradient-to-r ${i === 0 ? "from-[#60a5fa] to-[#a78bfa]" : "from-[#34d399] to-[#60a5fa]"}`} />

                <div className="p-8 md:p-10">
                  <div className="flex flex-col md:flex-row gap-8">
                    {/* Icon & Status */}
                    <div className="shrink-0 flex flex-col items-center gap-3">
                      <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-white/[0.06] to-white/[0.02] border border-white/[0.08] flex items-center justify-center text-4xl">
                        {edu.icon}
                      </div>
                      <Badge variant={edu.status === "Current" ? "success" : "primary"}>
                        {edu.status}
                      </Badge>
                    </div>

                    {/* Details */}
                    <div className="flex-1">
                      <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                        <div>
                          <h2 className="text-2xl font-black mb-1">
                            {edu.flag} {edu.institution}
                          </h2>
                          <div className="flex items-center gap-1.5 text-[#4a5568] text-sm">
                            <MapPin size={13} />
                            {edu.location}
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 mb-5">
                        <BookOpen size={15} className="text-[#60a5fa] shrink-0" />
                        <span className="text-[#60a5fa] font-semibold">
                          {edu.degree} in {edu.field}
                        </span>
                      </div>

                      <p className="text-[#8b9ab5] text-sm leading-relaxed mb-6">
                        {edu.description}
                      </p>

                      <div>
                        <h3 className="text-xs font-mono uppercase tracking-widest text-[#4a5568] mb-3 flex items-center gap-2">
                          <Award size={12} /> Highlights
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {edu.highlights.map((h) => (
                            <Badge key={h} variant="mono">{h}</Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Relevant Coursework */}
        <AnimatedSection>
          <div className="glass-card rounded-2xl p-8">
            <h2 className="text-xl font-black mb-2">Relevant Coursework</h2>
            <p className="text-[#8b9ab5] text-sm mb-7">Key courses from my CS&E curriculum at the University of Toledo.</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
              {coursework.map((course, i) => (
                <div
                  key={course}
                  className="px-3 py-3 rounded-xl bg-white/[0.03] border border-white/[0.06] text-xs text-center text-[#8b9ab5] hover:text-[#60a5fa] hover:border-[#60a5fa]/20 transition-all duration-200 cursor-default"
                >
                  {course}
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* International Experience Callout */}
        <AnimatedSection>
          <div className="glass-card rounded-2xl p-8 bg-gradient-to-br from-[#34d399]/[0.04] to-[#60a5fa]/[0.04]">
            <div className="flex gap-5 items-start">
              <div className="text-4xl shrink-0">🌍</div>
              <div>
                <h3 className="font-bold text-xl mb-2">International Academic Experience</h3>
                <p className="text-[#8b9ab5] text-sm leading-relaxed">
                  Studying at both a US and a Canadian university gave me more than course credits —
                  it gave me exposure to different academic cultures, teaching styles, and student communities.
                  This international perspective shapes how I approach teamwork, diverse problem spaces,
                  and collaborative software development.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </>
  );
}
