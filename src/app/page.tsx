"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Mail } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";
import GitHubIcon from "@/components/ui/GitHubIcon";
import { SITE, STATS, SKILLS, EXPERIENCE, HONORS } from "@/lib/data";

/* ── Cursor glow (Brittany Chiang style) ── */
function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);
  const onMove = useCallback((e: MouseEvent) => {
    if (ref.current) {
      ref.current.style.transform = `translate(${e.clientX - 300}px, ${e.clientY - 300}px)`;
    }
  }, []);
  useEffect(() => {
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [onMove]);
  return (
    <div
      ref={ref}
      className="pointer-events-none fixed top-0 left-0 z-0 w-[600px] h-[600px] rounded-full transition-transform duration-200 ease-out"
      style={{ background: "radial-gradient(circle, rgba(100,255,218,0.04) 0%, transparent 70%)" }}
    />
  );
}

/* ── Typed Text ── */
function TypedText() {
  const [text, setText]       = useState("");
  const [phraseIdx, setIdx]   = useState(0);
  const [deleting, setDelete] = useState(false);

  useEffect(() => {
    const phrase = SITE.typedPhrases[phraseIdx];
    const delay  = deleting ? 35 : 80;
    const id = setTimeout(() => {
      if (deleting) {
        setText(t => t.slice(0, -1));
        if (text.length <= 1) { setDelete(false); setIdx(i => (i + 1) % SITE.typedPhrases.length); }
      } else {
        setText(phrase.slice(0, text.length + 1));
        if (text.length >= phrase.length - 1) setTimeout(() => setDelete(true), 2000);
      }
    }, delay);
    return () => clearTimeout(id);
  }, [text, deleting, phraseIdx]);

  return (
    <span>
      {text}
      <span className="animate-blink text-[#64ffda] ml-0.5">|</span>
    </span>
  );
}

/* ── Stagger parent ── */
const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export default function Home() {
  return (
    <>
      <CursorGlow />

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex flex-col justify-center max-w-5xl mx-auto px-6 sm:px-12 pt-24 pb-12">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="max-w-3xl"
        >
          <motion.p variants={fadeUp} className="mono text-[#64ffda] text-sm mb-5">
            Hi, my name is
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="text-6xl sm:text-7xl md:text-8xl font-black text-[#ccd6f6] leading-[1.05] tracking-tight mb-3"
          >
            {SITE.name}.
          </motion.h1>

          <motion.h2
            variants={fadeUp}
            className="text-4xl sm:text-5xl md:text-6xl font-black text-[#8892b0] leading-[1.1] tracking-tight mb-6"
          >
            I&apos;m a{" "}
            <span className="text-[#64ffda]">
              <TypedText />
            </span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-[#8892b0] text-lg max-w-xl leading-relaxed mb-10"
          >
            {SITE.bio}
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
            <Link
              href="/experience"
              className="mono inline-flex items-center gap-2 px-7 py-4 border border-[#64ffda] text-[#64ffda] rounded hover:bg-[#64ffda]/10 transition-colors duration-200 text-sm"
            >
              View My Work <ArrowRight size={15} />
            </Link>
            <a
              href={`mailto:${SITE.email}`}
              className="mono inline-flex items-center gap-2 px-7 py-4 text-[#8892b0] hover:text-[#64ffda] transition-colors duration-200 text-sm group"
            >
              <Mail size={15} /> Get in Touch
              <ArrowUpRight size={13} className="opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          </motion.div>
        </motion.div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-8"
        >
          {STATS.map((s) => (
            <div key={s.label}>
              <div className="text-3xl font-black text-[#64ffda]">{s.value}{s.suffix}</div>
              <div className="mono text-[#8892b0] text-xs mt-1">{s.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 right-6 sm:right-12 hidden md:flex flex-col items-center gap-2"
        >
          <div className="mono text-[#8892b0] text-xs tracking-widest" style={{ writingMode: "vertical-rl" }}>
            scroll down
          </div>
          <div className="w-px h-16 bg-gradient-to-b from-[#8892b0] to-transparent" />
        </motion.div>
      </section>

      {/* ── HONORS ── */}
      <section className="py-24 max-w-5xl mx-auto px-6 sm:px-12">
        <AnimatedSection>
          <p className="mono text-[#64ffda] text-sm mb-2">01. Featured</p>
          <h2 className="text-3xl font-black text-[#ccd6f6] mb-12">Things I&apos;m Proud Of</h2>
        </AnimatedSection>

        <div className="grid sm:grid-cols-3 gap-5">
          {HONORS.map((h, i) => (
            <AnimatedSection key={h.id} delay={i * 0.08}>
              <Link
                href="/honors"
                className="group flex flex-col h-full bg-[#112240] border border-[#233554] rounded p-7 hover:border-[#64ffda]/40 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="text-3xl mb-4">{h.icon}</div>
                <span className="mono text-[#64ffda] text-[11px] mb-2">{h.category}</span>
                <h3 className="font-bold text-[#ccd6f6] mb-2 group-hover:text-[#64ffda] transition-colors text-[15px] leading-snug">
                  {h.title}
                </h3>
                <p className="text-[#8892b0] text-sm leading-relaxed flex-1 line-clamp-3">
                  {h.description}
                </p>
                <div className="mt-4 flex items-center gap-1 mono text-[#64ffda] text-[11px] opacity-0 group-hover:opacity-100 transition-opacity">
                  Read more <ArrowRight size={11} />
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* ── TECH STACK ── */}
      <section className="py-24 border-t border-[#233554]">
        <div className="max-w-5xl mx-auto px-6 sm:px-12">
          <AnimatedSection>
            <p className="mono text-[#64ffda] text-sm mb-2">02. Skills</p>
            <h2 className="text-3xl font-black text-[#ccd6f6] mb-4">Technologies I Use</h2>
            <p className="text-[#8892b0] max-w-lg mb-12">
              From systems-level C to high-level Python — a snapshot of my technical toolkit.
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {SKILLS.languages.map((lang, i) => (
              <AnimatedSection key={lang.name} delay={i * 0.07}>
                <div className="bg-[#112240] border border-[#233554] rounded p-5 hover:border-[#64ffda]/30 transition-colors">
                  <div className="flex justify-between mb-3">
                    <span className="font-semibold text-[#ccd6f6] text-sm">{lang.name}</span>
                    <span className="mono text-[#64ffda] text-xs">{lang.level}%</span>
                  </div>
                  <div className="h-1.5 bg-[#233554] rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#64ffda] rounded-full"
                      style={{ width: `${lang.level}%` }}
                    />
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection>
            <Link href="/skills" className="mono text-[#64ffda] text-sm hover:underline inline-flex items-center gap-1">
              View all skills <ArrowRight size={13} />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ── EXPERIENCE ── */}
      <section className="py-24 border-t border-[#233554]">
        <div className="max-w-5xl mx-auto px-6 sm:px-12">
          <AnimatedSection>
            <p className="mono text-[#64ffda] text-sm mb-2">03. Experience</p>
            <h2 className="text-3xl font-black text-[#ccd6f6] mb-12">Where I&apos;ve Worked</h2>
          </AnimatedSection>

          <div className="space-y-4">
            {EXPERIENCE.map((exp, i) => (
              <AnimatedSection key={exp.id} delay={i * 0.1}>
                <div className="bg-[#112240] border border-[#233554] rounded p-7 hover:border-[#64ffda]/30 transition-colors group">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-3">
                    <div>
                      <h3 className="font-bold text-[#ccd6f6] text-lg group-hover:text-[#64ffda] transition-colors">
                        {exp.role}{" "}
                        <span className="text-[#64ffda] font-normal">@ {exp.company}</span>
                      </h3>
                      <p className="mono text-[#8892b0] text-xs mt-1">{exp.period}</p>
                    </div>
                    {exp.current && (
                      <span className="mono text-[11px] text-emerald-400 border border-emerald-700/40 bg-emerald-900/20 px-2 py-1 rounded self-start whitespace-nowrap">
                        ● Current
                      </span>
                    )}
                  </div>
                  <p className="text-[#8892b0] text-sm leading-relaxed mb-4">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map(tag => (
                      <span key={tag} className="mono text-[#64ffda] text-[11px] bg-[#64ffda]/10 px-2 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="mt-6">
            <Link href="/experience" className="mono text-[#64ffda] text-sm hover:underline inline-flex items-center gap-1">
              View full experience <ArrowRight size={13} />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-32 border-t border-[#233554] text-center">
        <div className="max-w-xl mx-auto px-6">
          <AnimatedSection>
            <p className="mono text-[#64ffda] text-sm mb-4">04. What&apos;s Next?</p>
            <h2 className="text-4xl sm:text-5xl font-black text-[#ccd6f6] mb-5">Get In Touch</h2>
            <p className="text-[#8892b0] leading-relaxed mb-10">
              I&apos;m currently open to new opportunities. Whether you have a question, an internship offer,
              or just want to say hi — my inbox is always open.
            </p>
            <a
              href={`mailto:${SITE.email}`}
              className="mono inline-flex items-center gap-2 px-9 py-4 border border-[#64ffda] text-[#64ffda] rounded hover:bg-[#64ffda]/10 transition-colors duration-200"
            >
              <Mail size={16} /> Say Hello
            </a>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
