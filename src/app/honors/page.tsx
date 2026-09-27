import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Badge from "@/components/ui/Badge";
import { HONORS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Honors",
  description: "Ronit Dey's awards and achievements — NASA Space Apps finalist, asteroid researcher, and more.",
};

export default function HonorsPage() {
  return (
    <>
      <PageHero
        label="05 / Honors"
        title="Achievements"
        subtitle="Recognition earned through real-world science, global competition, and community service."
        gradient="from-[#fbbf24] to-[#f97316]"
      />

      <div className="max-w-5xl mx-auto px-6 pb-24 space-y-10">

        {HONORS.map((honor, i) => (
          <AnimatedSection key={honor.id} delay={i * 0.1}>
            <div className="glass-card rounded-3xl overflow-hidden hover:border-[#60a5fa]/20 hover:shadow-xl hover:shadow-blue-500/[0.07] transition-all duration-300">
              {/* Gradient top */}
              <div className={`h-1.5 bg-gradient-to-r ${honor.color}`} />

              <div className="p-8 md:p-10">
                <div className="flex flex-col md:flex-row gap-8">
                  {/* Icon block */}
                  <div className="shrink-0">
                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${honor.color} flex items-center justify-center text-4xl shadow-lg`}>
                      {honor.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                      <div>
                        <Badge variant="mono" className="mb-2">{honor.category}</Badge>
                        <h2 className="text-2xl font-black">{honor.title}</h2>
                      </div>
                      <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${honor.color} text-white text-sm font-bold shadow-lg`}>
                        🏆 {honor.award}
                      </div>
                    </div>

                    <p className="text-[#8b9ab5] leading-relaxed mb-7 text-sm">
                      {honor.description}
                    </p>

                    <h3 className="font-mono text-xs uppercase tracking-widest text-[#4a5568] mb-3">
                      Key Details
                    </h3>
                    <ul className="grid sm:grid-cols-2 gap-2">
                      {honor.details.map((detail, di) => (
                        <li key={di} className="flex items-start gap-2.5 text-sm text-[#8b9ab5]">
                          <span className="text-[#60a5fa] shrink-0 mt-0.5 font-mono text-xs">✓</span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        ))}

        {/* Philosophy */}
        <AnimatedSection>
          <div className="glass-card rounded-2xl p-10 text-center bg-gradient-to-br from-[#fbbf24]/[0.04] to-[#f97316]/[0.04]">
            <div className="text-5xl mb-5">🌌</div>
            <h3 className="text-2xl font-black mb-3">Striving Beyond Boundaries</h3>
            <p className="text-[#8b9ab5] max-w-2xl mx-auto text-sm leading-relaxed">
              From detecting asteroids to building solutions that earned global recognition, I believe
              the best work happens at the intersection of ambition, curiosity, and collaboration.
              Every achievement listed here started with a team willing to try something bold.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </>
  );
}
