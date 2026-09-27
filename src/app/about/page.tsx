import type { Metadata } from "next";
import { Mail, Phone, MapPin } from "lucide-react";
import GitHubIcon from "@/components/ui/GitHubIcon";
import PageHero from "@/components/ui/PageHero";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { SITE } from "@/lib/data";

export const metadata: Metadata = {
  title: "About",
  description: "Learn more about Ronit Dey — CS&E student, NASA Space Apps finalist, and asteroid researcher.",
};

const values = [
  { icon: "🔬", title: "Curiosity-Driven", body: "The best software comes from asking why relentlessly. Whether debugging or analyzing asteroid data, curiosity is the engine." },
  { icon: "🤝", title: "Community First", body: "As an RA I learned that technology only matters if it serves people. I build with empathy and design for real human needs." },
  { icon: "🌍", title: "Global Perspective", body: "Studying in the US and Canada gave me a cross-cultural lens that shapes how I approach teams, problems, and solutions." },
  { icon: "🚀", title: "Aim High", body: "Literally. I've detected asteroids and competed in NASA hackathons. I bring that same ambition to every software challenge." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        num="01. About"
        title="About Me"
        subtitle="A software engineer, community builder, and space enthusiast."
      />

      <div className="max-w-5xl mx-auto px-6 sm:px-12 pb-28 space-y-20">

        {/* Bio + Card */}
        <div className="grid lg:grid-cols-[1fr_280px] gap-14 items-start">
          <AnimatedSection direction="left" className="space-y-5 text-[#8892b0] leading-relaxed">
            <p>
              Hi — I&apos;m <span className="text-[#ccd6f6] font-semibold">Ronit Dey</span>, a Computer
              Science &amp; Engineering student at the{" "}
              <span className="text-[#64ffda]">University of Toledo</span>, with prior studies at the{" "}
              <span className="text-[#64ffda]">University of New Brunswick</span> in Canada. My academic path
              spans two countries and has given me a broad foundation in both theory and applied computing.
            </p>
            <p>
              As a <span className="text-[#ccd6f6] font-semibold">Resident Assistant at Presidents Hall</span>,
              I manage the day-to-day wellbeing of an entire residential floor — handling everything from
              crisis response to community event programming. That role has sharpened my leadership,
              communication, and empathy in ways no classroom could.
            </p>
            <p>
              Beyond campus, I&apos;ve contributed to{" "}
              <span className="text-[#ccd6f6] font-semibold">real-world space science</span> — detecting
              near-Earth asteroids with the IASC and earning{" "}
              <span className="text-[#64ffda]">Divisional Runners Up</span> at the NASA International Space
              Apps Challenge across 150+ countries.
            </p>
            <p>
              I write code in{" "}
              <span className="text-[#64ffda] mono">Python</span>,{" "}
              <span className="text-[#64ffda] mono">Java</span>, and{" "}
              <span className="text-[#64ffda] mono">C/C++</span>, and I&apos;m always looking for the next
              intersection where software meets a meaningful real-world problem.
            </p>
          </AnimatedSection>

          {/* Card */}
          <AnimatedSection direction="right">
            <div className="bg-[#112240] border border-[#233554] rounded p-7">
              {/* Avatar */}
              <div className="relative w-20 h-20 mx-auto mb-5">
                <div className="w-20 h-20 rounded-full bg-[#64ffda]/10 border-2 border-[#64ffda]/40 flex items-center justify-center text-2xl font-black text-[#64ffda]">
                  RD
                </div>
                <div className="absolute inset-[-6px] rounded-full border border-dashed border-[#64ffda]/25 animate-spin-slow" />
              </div>
              <h3 className="text-center font-bold text-[#ccd6f6] mb-1">{SITE.name}</h3>
              <p className="mono text-center text-[#64ffda] text-xs mb-6">{SITE.role}</p>

              <div className="space-y-3 text-sm">
                <a href={`mailto:${SITE.email}`} className="flex items-center gap-3 text-[#8892b0] hover:text-[#64ffda] transition-colors group">
                  <Mail size={14} className="shrink-0 text-[#64ffda]" />
                  <span className="truncate text-xs">{SITE.email}</span>
                </a>
                <a href={`tel:${SITE.phone}`} className="flex items-center gap-3 text-[#8892b0] hover:text-[#64ffda] transition-colors">
                  <Phone size={14} className="shrink-0 text-[#64ffda]" />
                  <span className="text-xs">{SITE.phone}</span>
                </a>
                <div className="flex items-center gap-3 text-[#8892b0]">
                  <MapPin size={14} className="shrink-0 text-[#64ffda]" />
                  <span className="text-xs">{SITE.location}</span>
                </div>
                <a href={SITE.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-[#8892b0] hover:text-[#64ffda] transition-colors">
                  <GitHubIcon size={14} className="shrink-0 text-[#64ffda]" />
                  <span className="mono text-xs">github.com/{SITE.githubHandle}</span>
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Values */}
        <section>
          <AnimatedSection>
            <p className="mono text-[#64ffda] text-sm mb-2">What Drives Me</p>
            <h2 className="text-2xl font-black text-[#ccd6f6] mb-10">Core Values</h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 gap-4">
            {values.map((v, i) => (
              <AnimatedSection key={v.title} delay={i * 0.07}>
                <div className="bg-[#112240] border border-[#233554] rounded p-6 hover:border-[#64ffda]/30 transition-colors">
                  <div className="text-2xl mb-3">{v.icon}</div>
                  <h3 className="font-bold text-[#ccd6f6] mb-2">{v.title}</h3>
                  <p className="text-[#8892b0] text-sm leading-relaxed">{v.body}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </section>

        {/* Interests */}
        <AnimatedSection>
          <p className="mono text-[#64ffda] text-sm mb-2">Interests</p>
          <h2 className="text-2xl font-black text-[#ccd6f6] mb-6">Things I Love</h2>
          <div className="flex flex-wrap gap-3">
            {["Space & Astronomy", "Machine Learning", "Systems Programming", "Data Visualization",
              "Community Building", "Open Source", "Scientific Computing", "Photography"].map(t => (
              <span
                key={t}
                className="mono text-[#8892b0] bg-[#112240] border border-[#233554] px-4 py-2 rounded text-xs hover:text-[#64ffda] hover:border-[#64ffda]/30 transition-colors cursor-default"
              >
                {t}
              </span>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </>
  );
}
