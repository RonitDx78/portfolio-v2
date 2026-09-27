import type { Metadata } from "next";
import { Mail, Phone, MapPin, GraduationCap, Rocket, Users } from "lucide-react";
import GitHubIcon from "@/components/ui/GitHubIcon";
import PageHero from "@/components/ui/PageHero";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Badge from "@/components/ui/Badge";
import { SITE } from "@/lib/data";

export const metadata: Metadata = {
  title: "About",
  description: "Learn more about Ronit Dey — CS&E student, NASA Space Apps finalist, and asteroid researcher.",
};

const quickFacts = [
  { icon: <MapPin size={15} />, label: "Location", value: "Toledo, Ohio, USA" },
  { icon: <GraduationCap size={15} />, label: "Degree", value: "B.S. Computer Science & Engineering" },
  { icon: <Rocket size={15} />, label: "Achievement", value: "NASA Space Apps Finalist" },
  { icon: <Users size={15} />, label: "Role", value: "Resident Assistant – University of Toledo" },
  { icon: <Mail size={15} />, label: "Email", value: SITE.email, href: `mailto:${SITE.email}` },
  { icon: <Phone size={15} />, label: "Phone", value: SITE.phone, href: `tel:${SITE.phone}` },
];

const values = [
  {
    icon: "🔬",
    title: "Curiosity-Driven",
    desc: "I believe the best software comes from asking 'why' relentlessly. Whether it's a debugging session or an asteroid dataset, curiosity is the engine.",
  },
  {
    icon: "🤝",
    title: "Community First",
    desc: "As an RA, I've learned that technology only matters if it serves people. I build with empathy and design for real human needs.",
  },
  {
    icon: "🌍",
    title: "Global Perspective",
    desc: "Studying in both the US and Canada gave me a cross-cultural lens that shapes how I approach teams, problems, and solutions.",
  },
  {
    icon: "🚀",
    title: "Reach for the Stars",
    desc: "Literally. I've detected asteroids and competed in NASA hackathons. I bring that same ambition to every software challenge.",
  },
];

const interests = [
  "Space & Astronomy", "Machine Learning", "Systems Programming",
  "Data Visualization", "Community Building", "Open Source",
  "Scientific Computing", "Photography",
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        label="01 / About"
        title="Who I Am"
        subtitle="A computer scientist, community builder, and space enthusiast from Toledo, Ohio."
      />

      <div className="max-w-6xl mx-auto px-6 pb-24 space-y-24">

        {/* Bio + Card */}
        <div className="grid lg:grid-cols-[1fr_320px] gap-14 items-start">
          <AnimatedSection direction="left">
            <div className="space-y-5 text-[#8b9ab5] leading-relaxed text-[1.05rem]">
              <p>
                Hi — I&apos;m <span className="text-white font-semibold">Ronit Dey</span>, a Computer Science
                & Engineering student at the{" "}
                <span className="text-white font-semibold">University of Toledo</span>, with prior studies at
                the <span className="text-white font-semibold">University of New Brunswick</span> in Canada.
                My academic path spans two countries and has given me a uniquely broad foundation in
                both theory and applied computing.
              </p>
              <p>
                As a{" "}
                <span className="text-white font-semibold">Resident Assistant at Presidents Hall</span>, I
                manage the day-to-day wellbeing of an entire residential floor — handling everything from
                crisis response and policy enforcement to programming community events and mediating student
                conflicts. That role has sharpened my leadership, communication, and empathy in ways no
                classroom could.
              </p>
              <p>
                Beyond the dorm, I&apos;ve contributed to{" "}
                <span className="text-white font-semibold">real-world space science</span> — detecting
                near-Earth asteroids with the International Asteroid Search Collaboration and competing
                in the <span className="text-white font-semibold">NASA International Space Apps Challenge</span>,
                where my team earned Divisional Runners Up recognition across 150+ countries.
              </p>
              <p>
                I write code in <span className="text-white font-semibold">Python, Java, and C/C++</span>,
                and I&apos;m always looking for the next intersection where software meets a meaningful
                real-world problem.
              </p>
            </div>
          </AnimatedSection>

          {/* Profile Card */}
          <AnimatedSection direction="right">
            <div className="glass-card rounded-3xl p-8 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-[#60a5fa]/[0.04] to-transparent pointer-events-none" />
              <div className="relative">
                {/* Avatar */}
                <div className="relative w-24 h-24 mx-auto mb-5">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#60a5fa] to-[#a78bfa] flex items-center justify-center text-3xl font-black text-white relative z-10">
                    RD
                  </div>
                  <div className="absolute inset-[-6px] rounded-full border-2 border-dashed border-[#60a5fa]/30 animate-spin-slow" />
                </div>
                <h3 className="text-xl font-bold mb-1">{SITE.name}</h3>
                <p className="text-[#60a5fa] text-sm font-medium mb-5">{SITE.role}</p>

                <div className="space-y-3 text-left mb-6">
                  {quickFacts.map((f) => (
                    <div key={f.label} className="flex items-start gap-3">
                      <span className="text-[#60a5fa] mt-0.5 shrink-0">{f.icon}</span>
                      <div>
                        <span className="text-[#4a5568] text-xs block">{f.label}</span>
                        {f.href ? (
                          <a href={f.href} className="text-[#8b9ab5] text-xs hover:text-[#60a5fa] transition-colors break-all">
                            {f.value}
                          </a>
                        ) : (
                          <span className="text-[#8b9ab5] text-xs">{f.value}</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <a
                  href={SITE.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 w-full justify-center py-2.5 rounded-xl bg-white/[0.05] border border-white/[0.08] text-sm font-medium text-[#8b9ab5] hover:text-white hover:bg-white/[0.08] transition-all"
                >
                  <GitHubIcon size={15} /> github.com/{SITE.githubHandle}
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Values */}
        <div>
          <AnimatedSection>
            <p className="font-mono text-xs tracking-[0.2em] uppercase text-[#60a5fa] mb-2">Values</p>
            <h2 className="text-3xl font-black tracking-tight mb-10">What Drives Me</h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 gap-5">
            {values.map((v, i) => (
              <AnimatedSection key={v.title} delay={i * 0.08}>
                <div className="glass-card rounded-2xl p-7 hover:border-[#60a5fa]/20 hover:-translate-y-0.5 transition-all duration-300">
                  <div className="text-3xl mb-4">{v.icon}</div>
                  <h3 className="font-bold text-lg mb-2">{v.title}</h3>
                  <p className="text-[#8b9ab5] text-sm leading-relaxed">{v.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>

        {/* Interests */}
        <AnimatedSection>
          <p className="font-mono text-xs tracking-[0.2em] uppercase text-[#60a5fa] mb-2">Interests</p>
          <h2 className="text-3xl font-black tracking-tight mb-8">Things I Love</h2>
          <div className="flex flex-wrap gap-3">
            {interests.map((interest) => (
              <span
                key={interest}
                className="px-5 py-2.5 rounded-full glass-card text-sm font-medium text-[#8b9ab5] hover:text-[#60a5fa] hover:border-[#60a5fa]/30 transition-all duration-200 cursor-default"
              >
                {interest}
              </span>
            ))}
          </div>
        </AnimatedSection>

        {/* CTA strip */}
        <AnimatedSection>
          <div className="glass-card rounded-2xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-bold text-xl mb-1">Want to know more?</h3>
              <p className="text-[#8b9ab5] text-sm">Check out my experience, education, or reach out directly.</p>
            </div>
            <div className="flex gap-3 shrink-0">
              <a
                href={`mailto:${SITE.email}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold bg-gradient-to-r from-[#60a5fa] to-[#a78bfa] text-white text-sm hover:-translate-y-0.5 transition-all duration-200"
              >
                <Mail size={14} /> Email Me
              </a>
              <a
                href={SITE.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold border border-white/[0.12] text-[#8b9ab5] text-sm hover:text-white transition-all duration-200"
              >
                <GitHubIcon size={14} /> GitHub
              </a>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </>
  );
}
