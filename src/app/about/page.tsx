import type { Metadata } from "next";
import Link from "next/link";
import { Mail } from "lucide-react";
import GitHubIcon from "@/components/ui/GitHubIcon";
import PageHero from "@/components/ui/PageHero";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { SITE } from "@/lib/data";

export const metadata: Metadata = { title: "About", description: "About Ronit Dey." };

const facts = [
  { label: "Location", value: "Toledo, Ohio, USA" },
  { label: "Degree",   value: "B.S. Computer Science & Engineering" },
  { label: "School",   value: "University of Toledo" },
  { label: "Email",    value: SITE.email, href: `mailto:${SITE.email}` },
];

const values = [
  { icon: "🔬", title: "Curiosity-Driven",   body: "The best software comes from asking why relentlessly. Curiosity is the engine behind every project I take on." },
  { icon: "🤝", title: "Community First",    body: "As an RA, I learned that tech only matters if it serves people. I build with empathy for real human needs." },
  { icon: "🌍", title: "Global Perspective", body: "Studying in the US and Canada gave me a cross-cultural lens that shapes how I approach teams and problems." },
  { icon: "🚀", title: "Aim High",           body: "I've detected asteroids and competed in NASA hackathons. I bring that same ambition to every software challenge." },
];

export default function AboutPage() {
  return (
    <div className="mx-auto min-h-screen max-w-screen-lg px-6 sm:px-12 lg:px-24 pt-24 pb-24">
      <PageHero num="01." title="About Me" subtitle="A software engineer, community builder, and space enthusiast." />

      {/* Bio + card */}
      <AnimatedSection>
        <div className="grid lg:grid-cols-[1fr_240px] gap-12 items-start mb-20">
          <div className="space-y-4 text-[#8892b0] text-[15px] leading-relaxed">
            <p>
              Hi — I&apos;m <span className="text-[#ccd6f6] font-semibold">Ronit Dey</span>, a CS&amp;E student at the{" "}
              <span className="text-[#64ffda]">University of Toledo</span>, with prior studies at the{" "}
              <span className="text-[#64ffda]">University of New Brunswick</span> in Canada. My path spans two countries and has given me a broad foundation in both theory and applied computing.
            </p>
            <p>
              As a <span className="text-[#ccd6f6] font-semibold">Resident Assistant at Presidents Hall</span>, I manage
              crisis response, policy enforcement, and community events for an entire floor — skills no classroom could teach.
            </p>
            <p>
              Beyond campus, I&apos;ve earned{" "}
              <span className="text-[#64ffda]">Divisional Runners Up</span> at the NASA International Space Apps Challenge
              and detected real near-Earth asteroids with the IASC.
            </p>
            <p>
              I write code in <code className="font-mono text-[#64ffda]">Python</code>,{" "}
              <code className="font-mono text-[#64ffda]">Java</code>, and{" "}
              <code className="font-mono text-[#64ffda]">C/C++</code>, always looking for the next intersection of
              software and real-world impact.
            </p>
          </div>

          {/* Profile card */}
          <div className="bg-[#112240] rounded p-6 border border-[#233554]">
            <div className="w-20 h-20 mx-auto mb-4 relative">
              <div className="w-20 h-20 rounded-full bg-[#64ffda]/10 border-2 border-[#64ffda]/30 flex items-center justify-center font-bold text-[#64ffda] text-2xl">
                RD
              </div>
            </div>
            <h3 className="text-center text-[#ccd6f6] font-semibold mb-1">{SITE.name}</h3>
            <p className="font-mono text-center text-[#64ffda] text-[11px] mb-5">{SITE.role}</p>
            <div className="space-y-3">
              {facts.map(f => (
                <div key={f.label}>
                  <p className="font-mono text-[#495670] text-[10px] mb-0.5">{f.label}</p>
                  {f.href ? (
                    <a href={f.href} className="text-[#8892b0] text-xs hover:text-[#64ffda] transition-colors break-all">{f.value}</a>
                  ) : (
                    <p className="text-[#8892b0] text-xs">{f.value}</p>
                  )}
                </div>
              ))}
            </div>
            <div className="flex gap-4 mt-5 pt-4 border-t border-[#233554]">
              <a href={SITE.github} target="_blank" rel="noopener noreferrer"
                 className="text-[#8892b0] hover:text-[#64ffda] transition-colors">
                <GitHubIcon size={16} />
              </a>
              <a href={`mailto:${SITE.email}`} className="text-[#8892b0] hover:text-[#64ffda] transition-colors">
                <Mail size={16} />
              </a>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Values */}
      <AnimatedSection>
        <div className="mb-6 flex items-center gap-4">
          <h2 className="font-mono text-sm uppercase tracking-widest text-[#ccd6f6] whitespace-nowrap">Core Values</h2>
          <div className="h-px flex-1 bg-[#233554]" />
        </div>
        <div className="grid sm:grid-cols-2 gap-4 mb-20">
          {values.map(v => (
            <div key={v.title} className="bg-[#112240] border border-[#233554] rounded p-5 hover:border-[#64ffda]/30 transition-colors duration-300">
              <div className="text-xl mb-3">{v.icon}</div>
              <h3 className="text-[#ccd6f6] font-semibold text-sm mb-2">{v.title}</h3>
              <p className="text-[#8892b0] text-sm leading-relaxed">{v.body}</p>
            </div>
          ))}
        </div>
      </AnimatedSection>

      {/* Interests */}
      <AnimatedSection>
        <div className="mb-6 flex items-center gap-4">
          <h2 className="font-mono text-sm uppercase tracking-widest text-[#ccd6f6] whitespace-nowrap">Interests</h2>
          <div className="h-px flex-1 bg-[#233554]" />
        </div>
        <div className="flex flex-wrap gap-2">
          {["Space & Astronomy","Machine Learning","Systems Programming","Data Visualization",
            "Community Building","Open Source","Scientific Computing","Photography"].map(t => (
            <span key={t} className="font-mono text-[#64ffda] bg-[#64ffda]/10 border border-[#64ffda]/20 px-3 py-1.5 rounded text-[11px] hover:bg-[#64ffda]/20 transition-colors cursor-default">
              {t}
            </span>
          ))}
        </div>
      </AnimatedSection>
    </div>
  );
}
