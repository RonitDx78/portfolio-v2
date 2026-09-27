import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { HONORS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Honors",
  description: "Ronit Dey's awards and achievements — NASA Space Apps finalist, asteroid researcher, and more.",
};

export default function HonorsPage() {
  return (
    <>
      <PageHero
        num="05. Honors"
        title="Achievements"
        subtitle="Recognition earned through real-world science, global competition, and community service."
      />

      <div className="max-w-4xl mx-auto px-6 sm:px-12 pb-28 space-y-8">

        {HONORS.map((h, i) => (
          <AnimatedSection key={h.id} delay={i * 0.1}>
            <div className="bg-[#112240] border border-[#233554] rounded p-8 md:p-10 hover:border-[#64ffda]/30 transition-colors">
              <div className="flex flex-col md:flex-row gap-8">
                {/* Icon */}
                <div className="shrink-0">
                  <div className="w-16 h-16 rounded bg-[#64ffda]/10 border border-[#64ffda]/20 flex items-center justify-center text-3xl">
                    {h.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                    <div>
                      <span className="mono text-[#64ffda] text-[11px]">{h.category}</span>
                      <h2 className="text-xl font-bold text-[#ccd6f6] mt-0.5">{h.title}</h2>
                    </div>
                    <span className="mono text-[#64ffda] text-xs border border-[#64ffda]/30 bg-[#64ffda]/5 px-3 py-1.5 rounded whitespace-nowrap self-start">
                      🏆 {h.award}
                    </span>
                  </div>

                  <p className="text-[#8892b0] text-sm leading-relaxed mb-6">
                    {h.description}
                  </p>

                  <p className="mono text-[#64ffda] text-[11px] mb-3">Key Details</p>
                  <ul className="grid sm:grid-cols-2 gap-2">
                    {h.details.map((d, di) => (
                      <li key={di} className="flex items-start gap-2.5 text-sm text-[#8892b0]">
                        <span className="mono text-[#64ffda] shrink-0 mt-0.5 text-xs">▹</span>
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </AnimatedSection>
        ))}

        <AnimatedSection>
          <div className="bg-[#112240] border border-[#233554] rounded p-10 text-center">
            <div className="text-4xl mb-4">🌌</div>
            <p className="mono text-[#64ffda] text-sm mb-3">Philosophy</p>
            <p className="text-[#8892b0] max-w-lg mx-auto text-sm leading-relaxed">
              Every achievement here started with a team willing to try something bold. I believe the best work
              happens at the intersection of ambition, curiosity, and collaboration.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </>
  );
}
