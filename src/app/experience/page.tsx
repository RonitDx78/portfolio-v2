import type { Metadata } from "next";
import { MapPin, Calendar } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Badge from "@/components/ui/Badge";
import { EXPERIENCE } from "@/lib/data";

export const metadata: Metadata = {
  title: "Experience",
  description: "Ronit Dey's professional work experience — Resident Assistant and more.",
};

export default function ExperiencePage() {
  return (
    <>
      <PageHero
        label="03 / Experience"
        title="Work Experience"
        subtitle="Real-world roles that have sharpened my leadership, communication, and technical chops."
        gradient="from-[#a78bfa] to-[#60a5fa]"
      />

      <div className="max-w-4xl mx-auto px-6 pb-24">

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-[#60a5fa]/40 via-[#a78bfa]/20 to-transparent hidden sm:block" />

          <div className="space-y-10">
            {EXPERIENCE.map((exp, i) => (
              <AnimatedSection key={exp.id} delay={i * 0.12}>
                <div className="sm:pl-16 relative">
                  {/* Dot */}
                  <div className="hidden sm:flex absolute left-0 top-8 w-12 h-12 rounded-full bg-gradient-to-br from-[#60a5fa] to-[#a78bfa] items-center justify-center text-xl shadow-lg shadow-blue-500/20 z-10">
                    {exp.icon}
                  </div>

                  <div className="glass-card rounded-3xl p-8 hover:border-[#60a5fa]/20 hover:shadow-lg hover:shadow-blue-500/[0.08] transition-all duration-300 relative overflow-hidden">
                    {/* Top accent */}
                    <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#60a5fa] to-[#a78bfa]" />

                    {/* Header */}
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                      <div>
                        <div className="flex items-center gap-3 mb-1">
                          <span className="sm:hidden text-2xl">{exp.icon}</span>
                          <h2 className="text-2xl font-black">{exp.role}</h2>
                        </div>
                        <p className="text-[#60a5fa] font-semibold">
                          {exp.company}
                          {exp.department && (
                            <span className="text-[#8b9ab5] font-normal"> — {exp.department}</span>
                          )}
                        </p>
                        <div className="flex flex-wrap items-center gap-4 mt-2">
                          <span className="flex items-center gap-1.5 text-xs text-[#4a5568]">
                            <Calendar size={12} /> {exp.period}
                          </span>
                          <span className="flex items-center gap-1.5 text-xs text-[#4a5568]">
                            <MapPin size={12} /> {exp.location}
                          </span>
                        </div>
                      </div>
                      {exp.current && <Badge variant="success">● Current</Badge>}
                    </div>

                    {/* Description */}
                    <p className="text-[#8b9ab5] text-sm leading-relaxed mb-6 border-l-2 border-[#60a5fa]/30 pl-4">
                      {exp.description}
                    </p>

                    {/* Bullets */}
                    <ul className="space-y-3 mb-8">
                      {exp.bullets.map((b, bi) => (
                        <li key={bi} className="flex gap-3 text-sm text-[#8b9ab5] leading-relaxed">
                          <span className="text-[#60a5fa] shrink-0 mt-0.5 font-mono text-xs">▸</span>
                          {b}
                        </li>
                      ))}
                    </ul>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map((tag) => (
                        <Badge key={tag} variant="mono">{tag}</Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>

        {/* More coming */}
        <AnimatedSection className="mt-12">
          <div className="glass-card rounded-2xl p-8 text-center">
            <div className="text-3xl mb-3">🌱</div>
            <h3 className="font-bold text-lg mb-2">More Experience Ahead</h3>
            <p className="text-[#8b9ab5] text-sm max-w-md mx-auto">
              I&apos;m actively seeking internship and co-op opportunities in software engineering,
              data science, and systems development. Open to both remote and on-site roles.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </>
  );
}
