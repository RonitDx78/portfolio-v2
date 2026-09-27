"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Mail } from "lucide-react";
import { motion } from "framer-motion";
import GitHubIcon from "@/components/ui/GitHubIcon";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { SITE, EXPERIENCE, HONORS, SKILLS } from "@/lib/data";

/* ── Cursor radial glow (BC signature) ── */
function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);
  const onMove = useCallback((e: MouseEvent) => {
    if (ref.current) {
      ref.current.style.background = `radial-gradient(600px at ${e.clientX}px ${e.clientY}px, rgba(29,78,216,0.12), transparent 80%)`;
    }
  }, []);
  useEffect(() => {
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [onMove]);
  return <div ref={ref} className="pointer-events-none fixed inset-0 z-30 transition-all duration-300" />;
}

/* ── Typed text ── */
function TypedText() {
  const [text, setText] = useState("");
  const [idx, setIdx]   = useState(0);
  const [del, setDel]   = useState(false);
  useEffect(() => {
    const phrase = SITE.typedPhrases[idx];
    const id = setTimeout(() => {
      if (del) {
        setText(t => t.slice(0, -1));
        if (text.length <= 1) { setDel(false); setIdx(i => (i + 1) % SITE.typedPhrases.length); }
      } else {
        setText(phrase.slice(0, text.length + 1));
        if (text.length >= phrase.length - 1) setTimeout(() => setDel(true), 2000);
      }
    }, del ? 35 : 80);
    return () => clearTimeout(id);
  }, [text, del, idx]);
  return (
    <span className="text-[#64ffda]">
      {text}<span className="text-[#64ffda]" style={{ animation: "blink 1s step-end infinite" }}>|</span>
    </span>
  );
}

/* ── Left-panel nav item (BC expanding line on hover) ── */
function NavItem({ href, label, num }: { href: string; label: string; num: string }) {
  const pathname = usePathname();
  const active   = pathname === href;
  return (
    <li>
      <Link href={href} className="group flex items-center gap-4 py-1">
        <span
          className={`block h-px transition-all duration-300 ${
            active
              ? "w-16 bg-[#ccd6f6]"
              : "w-8 bg-[#495670] group-hover:w-16 group-hover:bg-[#ccd6f6]"
          }`}
        />
        <span
          className={`font-mono text-xs tracking-widest uppercase transition-colors duration-300 ${
            active ? "text-[#ccd6f6]" : "text-[#495670] group-hover:text-[#ccd6f6]"
          }`}
        >
          <span className="text-[#64ffda] mr-1">{num}.</span>
          {label}
        </span>
      </Link>
    </li>
  );
}

/* ── Section heading in BC style ── */
function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-4 mb-8">
      <h2 className="font-mono text-sm uppercase tracking-widest text-[#ccd6f6] whitespace-nowrap">
        {children}
      </h2>
      <div className="h-px flex-1 bg-[#233554]" />
    </div>
  );
}

const navPages = [
  { href: "/about",      label: "About",      num: "01" },
  { href: "/skills",     label: "Skills",     num: "02" },
  { href: "/experience", label: "Experience", num: "03" },
  { href: "/education",  label: "Education",  num: "04" },
  { href: "/honors",     label: "Honors",     num: "05" },
  { href: "/contact",    label: "Contact",    num: "06" },
];

export default function Home() {
  return (
    <>
      <CursorGlow />

      <div className="mx-auto min-h-screen max-w-screen-xl px-6 md:px-12 lg:px-24">
        <div className="lg:flex lg:justify-between lg:gap-4">

          {/* ══════════════════════════════════════════
              LEFT — sticky header / navigation panel
              ══════════════════════════════════════════ */}
          <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-5/12 lg:flex-col lg:justify-between lg:py-24 pt-24 pb-8">

            {/* Top: identity */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <p className="font-mono text-[#64ffda] text-sm mb-4">Hi, my name is</p>
                <h1 className="text-5xl sm:text-[3.5rem] font-extrabold text-[#ccd6f6] tracking-tight leading-none mb-3">
                  Ronit Dey.
                </h1>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#8892b0] leading-tight mb-6">
                  <TypedText />
                </h2>
                <p className="text-[#8892b0] text-[15px] leading-relaxed max-w-[300px]">
                  I build impactful software, explore the cosmos, and create community — one line of code and one conversation at a time.
                </p>
              </motion.div>

              {/* Mobile CTA buttons */}
              <motion.div
                className="flex flex-wrap gap-3 mt-8 lg:hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.4 }}
              >
                <Link
                  href="/experience"
                  className="font-mono text-[#64ffda] border border-[#64ffda] text-xs px-5 py-3 rounded hover:bg-[#64ffda]/10 transition-colors duration-200 inline-flex items-center gap-2"
                >
                  View Work
                </Link>
                <a
                  href={`mailto:${SITE.email}`}
                  className="font-mono text-[#8892b0] text-xs px-5 py-3 border border-[#495670] rounded hover:text-[#64ffda] hover:border-[#64ffda] transition-colors duration-200 inline-flex items-center gap-2"
                >
                  <Mail size={13} /> Contact
                </a>
              </motion.div>
            </div>

            {/* Middle: nav — desktop only */}
            <motion.nav
              className="hidden lg:block"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.4 }}
            >
              <ul className="flex flex-col gap-3 mt-16">
                {navPages.map(n => <NavItem key={n.href} {...n} />)}
              </ul>
            </motion.nav>

            {/* Bottom: social icons */}
            <motion.ul
              className="flex items-center gap-5 mt-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.4 }}
            >
              <li>
                <a href={SITE.github} target="_blank" rel="noopener noreferrer"
                   className="text-[#8892b0] hover:text-[#64ffda] transition-colors duration-200 block hover:-translate-y-0.5 transform">
                  <GitHubIcon size={20} />
                </a>
              </li>
              <li>
                <a href={`mailto:${SITE.email}`}
                   className="text-[#8892b0] hover:text-[#64ffda] transition-colors duration-200 block hover:-translate-y-0.5 transform">
                  <Mail size={20} />
                </a>
              </li>
              {/* Vertical line after socials */}
              <li className="hidden lg:block w-px h-24 bg-[#495670] ml-2" />
            </motion.ul>

          </header>

          {/* ══════════════════════════════════════════
              RIGHT — scrollable content sections
              ══════════════════════════════════════════ */}
          <main className="pt-12 lg:w-7/12 lg:py-24 space-y-28 pb-24">

            {/* ── ABOUT PREVIEW ── */}
            <AnimatedSection>
              <section>
                <SectionHeading>About Me</SectionHeading>
                <div className="space-y-4 text-[#8892b0] text-[15px] leading-relaxed">
                  <p>
                    I&apos;m a Computer Science &amp; Engineering student at the{" "}
                    <span className="text-[#ccd6f6] font-medium">University of Toledo</span>, with prior studies at the{" "}
                    <span className="text-[#ccd6f6] font-medium">University of New Brunswick</span> in Canada.
                  </p>
                  <p>
                    As a <span className="text-[#ccd6f6] font-medium">Resident Assistant</span> at Presidents Hall,
                    I manage crisis response, policy enforcement, and community events — sharpening leadership
                    skills no classroom could teach.
                  </p>
                  <p>
                    I&apos;ve earned{" "}
                    <span className="text-[#64ffda]">Divisional Runners Up</span> at the NASA International Space Apps
                    Challenge and detected real near-Earth asteroids with the IASC.
                  </p>
                </div>
                <div className="mt-6">
                  <Link
                    href="/about"
                    className="inline-flex items-center gap-2 font-mono text-[#64ffda] text-xs hover:gap-3 transition-all duration-200 group"
                  >
                    Learn more about me
                    <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </Link>
                </div>
              </section>
            </AnimatedSection>

            {/* ── EXPERIENCE PREVIEW ── */}
            <AnimatedSection>
              <section>
                <SectionHeading>Experience</SectionHeading>
                <div className="space-y-4">
                  {EXPERIENCE.map(exp => (
                    <div
                      key={exp.id}
                      className="group p-5 rounded-lg hover:bg-[#112240] hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] transition-all duration-300 -mx-5"
                    >
                      <div className="flex flex-col sm:flex-row sm:justify-between gap-1 mb-2">
                        <h3 className="text-[#ccd6f6] font-medium text-sm group-hover:text-[#64ffda] transition-colors">
                          {exp.role}
                          <span className="text-[#64ffda] font-normal"> · {exp.company}</span>
                        </h3>
                        <span className="font-mono text-[11px] text-[#495670] whitespace-nowrap shrink-0">{exp.period}</span>
                      </div>
                      <p className="text-[#8892b0] text-sm leading-relaxed">{exp.description}</p>
                      <div className="flex flex-wrap gap-2 mt-3">
                        {exp.tags.slice(0, 3).map(t => (
                          <span key={t} className="font-mono text-[#64ffda] text-[10px] bg-[#64ffda]/10 px-2 py-1 rounded">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6">
                  <Link
                    href="/experience"
                    className="inline-flex items-center gap-2 font-mono text-[#64ffda] text-xs hover:gap-3 transition-all duration-200 group"
                  >
                    View full experience
                    <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </Link>
                </div>
              </section>
            </AnimatedSection>

            {/* ── SKILLS PREVIEW ── */}
            <AnimatedSection>
              <section>
                <SectionHeading>Skills</SectionHeading>
                <div className="space-y-3">
                  {SKILLS.languages.map(lang => (
                    <div key={lang.name} className="flex items-center gap-4">
                      <span className="text-[#8892b0] text-sm w-16 shrink-0">{lang.name}</span>
                      <div className="flex-1 h-1 bg-[#233554] rounded-full overflow-hidden">
                        <div
                          className="h-full bg-[#64ffda] rounded-full"
                          style={{ width: `${lang.level}%` }}
                        />
                      </div>
                      <span className="font-mono text-[#64ffda] text-[11px] w-9 text-right shrink-0">{lang.level}%</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6">
                  <Link
                    href="/skills"
                    className="inline-flex items-center gap-2 font-mono text-[#64ffda] text-xs hover:gap-3 transition-all duration-200 group"
                  >
                    View all skills
                    <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </Link>
                </div>
              </section>
            </AnimatedSection>

            {/* ── HONORS PREVIEW ── */}
            <AnimatedSection>
              <section>
                <SectionHeading>Honors</SectionHeading>
                <div className="space-y-4">
                  {HONORS.map(h => (
                    <div
                      key={h.id}
                      className="group p-5 rounded-lg hover:bg-[#112240] hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] transition-all duration-300 -mx-5"
                    >
                      <div className="flex items-start gap-4">
                        <span className="text-2xl shrink-0 mt-0.5">{h.icon}</span>
                        <div className="min-w-0">
                          <h3 className="text-[#ccd6f6] font-medium text-sm group-hover:text-[#64ffda] transition-colors leading-snug">
                            {h.title}
                          </h3>
                          <p className="font-mono text-[#64ffda] text-[10px] mt-0.5 mb-2">{h.award}</p>
                          <p className="text-[#8892b0] text-sm leading-relaxed line-clamp-2">{h.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6">
                  <Link
                    href="/honors"
                    className="inline-flex items-center gap-2 font-mono text-[#64ffda] text-xs hover:gap-3 transition-all duration-200 group"
                  >
                    View all honors
                    <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </Link>
                </div>
              </section>
            </AnimatedSection>

            {/* ── CTA ── */}
            <AnimatedSection>
              <section className="text-center py-4">
                <p className="font-mono text-[#64ffda] text-xs mb-4">What&apos;s Next?</p>
                <h2 className="text-3xl font-bold text-[#ccd6f6] mb-4">Get In Touch</h2>
                <p className="text-[#8892b0] text-[15px] leading-relaxed max-w-md mx-auto mb-8">
                  I&apos;m currently open to new opportunities. Whether you have a question or an internship offer,
                  my inbox is always open.
                </p>
                <a
                  href={`mailto:${SITE.email}`}
                  className="inline-flex items-center gap-2 font-mono text-[#64ffda] border border-[#64ffda] px-8 py-4 rounded hover:bg-[#64ffda]/10 transition-colors duration-200"
                >
                  <Mail size={16} /> Say Hello
                </a>
              </section>
            </AnimatedSection>

          </main>
        </div>
      </div>
    </>
  );
}
