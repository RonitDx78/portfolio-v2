import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { HONORS } from "@/lib/data";

export const metadata: Metadata = { title: "Honors", description: "Ronit Dey's awards and achievements." };

export default function HonorsPage() {
  return (
    <div className="mx-auto min-h-screen max-w-screen-lg px-6 sm:px-12 lg:px-24 pt-24 pb-24">
      <PageHero num="05." title="Honors" subtitle="Recognition earned through science, global competition, and community service." />

      <div className="space-y-6 mb-16">
        {HONORS.map((h, i) => (
          <AnimatedSection key={h.id} delay={i * 0.1}>
            <div className="bg-[#112240] border border-[#233554] rounded p-7 sm:p-9 hover:border-[#64ffda]/30 transition-colors duration-300">
              <div className="flex flex-col sm:flex-row gap-6">
                {/* Icon */}
                <div className="shrink-0">
                  <div className="w-14 h-14 rounded bg-[#64ffda]/10 border border-[#64ffda]/20 flex items-center justify-center text-3xl">
                    {h.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                    <div>
                      <p className="font-mono text-[#64ffda] text-[10px] mb-1">{h.category}</p>
                      <h2 className="text-[#ccd6f6] font-bold text-lg leading-tight">{h.title}</h2>
                    </div>
                    <span className="font-mono text-[#64ffda] text-[10px] border border-[#64ffda]/30 bg-[#64ffda]/5 px-3 py-1.5 rounded whitespace-nowrap self-start">
                      🏆 {h.award}
                    </span>
                  </div>

                  <p className="text-[#8892b0] text-sm leading-relaxed mb-5">{h.description}</p>

                  <p className="font-mono text-[#ccd6f6] text-[10px] uppercase tracking-widest mb-3">Key Details</p>
                  <ul className="grid sm:grid-cols-2 gap-2">
                    {h.details.map((d, di) => (
                      <li key={di} className="flex gap-2.5 text-sm text-[#8892b0]">
                        <span className="font-mono text-[#64ffda] shrink-0 mt-0.5 text-xs">▹</span>
                        <span className="leading-relaxed">{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>

      <AnimatedSection>
        <div className="bg-[#112240] border border-[#233554] rounded p-10 text-center">
          <div className="text-4xl mb-4">🌌</div>
          <p className="font-mono text-[#64ffda] text-xs mb-3">Philosophy</p>
          <p className="text-[#8892b0] text-sm leading-relaxed max-w-lg mx-auto">
            Every achievement here started with a team willing to try something bold. The best work lives
            at the intersection of ambition, curiosity, and collaboration.
          </p>
        </div>
      </AnimatedSection>
    </div>
  );
}
