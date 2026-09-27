"use client";

import type { Metadata } from "next";
import { useEffect, useRef } from "react";
import PageHero from "@/components/ui/PageHero";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { SKILLS } from "@/lib/data";

/* ── Animated Skill Bar ── */
function SkillBar({ name, level }: { name: string; level: number }) {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = barRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.width = `${level}%`;
          obs.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    obs.observe(el.parentElement!);
    return () => obs.disconnect();
  }, [level]);

  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="font-semibold text-sm text-white">{name}</span>
        <span className="font-mono text-xs text-[#60a5fa]">{level}%</span>
      </div>
      <div className="h-2 bg-white/[0.06] rounded-full overflow-hidden">
        <div
          ref={barRef}
          className="h-full w-0 rounded-full bg-gradient-to-r from-[#60a5fa] to-[#a78bfa] transition-all duration-1000 ease-out"
        />
      </div>
    </div>
  );
}

const categories = [
  {
    icon: "⌨️",
    title: "Programming Languages",
    desc: "Languages I use to turn ideas into working software.",
    content: "bars",
  },
  {
    icon: "🛠️",
    title: "Developer Tools",
    desc: "The tools that shape my daily workflow.",
    content: "tools",
  },
  {
    icon: "🤝",
    title: "Leadership & Soft Skills",
    desc: "People skills sharpened through real-world community leadership.",
    content: "soft",
  },
];

const proficiency = [
  { range: "90-100%", label: "Expert", color: "bg-blue-400" },
  { range: "75-89%",  label: "Advanced", color: "bg-violet-400" },
  { range: "60-74%",  label: "Intermediate", color: "bg-teal-400" },
  { range: "< 60%",   label: "Familiar", color: "bg-slate-400" },
];

export default function SkillsPage() {
  return (
    <>
      <PageHero
        label="02 / Skills"
        title="Technical Arsenal"
        subtitle="Eight-plus technologies, languages, and tools I use to bring ideas to life — from systems to data science."
        gradient="from-[#60a5fa] to-[#06b6d4]"
      />

      <div className="max-w-6xl mx-auto px-6 pb-24 space-y-20">

        {/* Legend */}
        <AnimatedSection>
          <div className="glass-card rounded-2xl p-6 flex flex-wrap gap-4">
            <span className="text-xs font-mono uppercase tracking-widest text-[#4a5568] self-center">
              Proficiency
            </span>
            {proficiency.map((p) => (
              <div key={p.label} className="flex items-center gap-2">
                <div className={`w-2.5 h-2.5 rounded-full ${p.color}`} />
                <span className="text-xs text-[#8b9ab5]">{p.label} ({p.range})</span>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Language Bars */}
        <div>
          <AnimatedSection>
            <div className="flex items-center gap-3 mb-8">
              <span className="text-2xl">⌨️</span>
              <div>
                <h2 className="text-2xl font-black">Programming Languages</h2>
                <p className="text-[#8b9ab5] text-sm">Languages I use to turn ideas into working software.</p>
              </div>
            </div>
          </AnimatedSection>
          <AnimatedSection>
            <div className="glass-card rounded-2xl p-8 grid sm:grid-cols-2 gap-8">
              {SKILLS.languages.map((lang) => (
                <SkillBar key={lang.name} name={lang.name} level={lang.level} />
              ))}
            </div>
          </AnimatedSection>
        </div>

        {/* Tools */}
        <div>
          <AnimatedSection>
            <div className="flex items-center gap-3 mb-8">
              <span className="text-2xl">🛠️</span>
              <div>
                <h2 className="text-2xl font-black">Developer Tools & Software</h2>
                <p className="text-[#8b9ab5] text-sm">The tools that shape my daily workflow.</p>
              </div>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {SKILLS.tools.map((tool, i) => (
              <AnimatedSection key={tool.name} delay={i * 0.05}>
                <div className="glass-card rounded-xl p-5 text-center hover:border-[#60a5fa]/20 hover:-translate-y-0.5 transition-all duration-300 group cursor-default">
                  <div className="text-2xl mb-2">{getToolEmoji(tool.name)}</div>
                  <div className="text-sm font-medium text-[#8b9ab5] group-hover:text-white transition-colors">
                    {tool.name}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>

        {/* Soft Skills */}
        <div>
          <AnimatedSection>
            <div className="flex items-center gap-3 mb-8">
              <span className="text-2xl">🤝</span>
              <div>
                <h2 className="text-2xl font-black">Leadership & Soft Skills</h2>
                <p className="text-[#8b9ab5] text-sm">People skills sharpened through real-world community leadership.</p>
              </div>
            </div>
          </AnimatedSection>
          <AnimatedSection>
            <div className="flex flex-wrap gap-3">
              {SKILLS.soft.map((skill) => (
                <span
                  key={skill}
                  className="px-5 py-2.5 rounded-full glass-card text-sm font-medium text-[#8b9ab5] hover:text-[#60a5fa] hover:border-[#60a5fa]/25 transition-all duration-200 cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </AnimatedSection>
        </div>

        {/* Learning Banner */}
        <AnimatedSection>
          <div className="glass-card rounded-2xl p-8 bg-gradient-to-br from-[#60a5fa]/[0.04] to-[#a78bfa]/[0.04]">
            <div className="text-3xl mb-3">📚</div>
            <h3 className="font-bold text-xl mb-2">Always Learning</h3>
            <p className="text-[#8b9ab5] text-sm leading-relaxed max-w-2xl">
              Technology evolves fast and I evolve with it. I&apos;m currently deepening my knowledge in
              machine learning, algorithm design, and software systems — and I&apos;m always open to picking
              up new tools when the problem calls for it.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </>
  );
}

function getToolEmoji(name: string): string {
  const map: Record<string, string> = {
    "Git & GitHub": "🌿",
    "VS Code": "💻",
    "MS Excel": "📊",
    "MS Word": "📝",
    "MS PowerPoint": "📽️",
    "Adobe Photoshop": "🎨",
    "Linux / macOS": "🐧",
    "Jupyter Notebook": "📓",
  };
  return map[name] ?? "⚙️";
}
