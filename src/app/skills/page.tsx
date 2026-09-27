import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SkillBar from "@/components/ui/SkillBar";
import { SKILLS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Skills",
  description: "Ronit Dey's technical skills — Python, Java, C/C++, MATLAB, and more.",
};

function getEmoji(name: string) {
  const m: Record<string, string> = {
    "Git & GitHub": "🌿", "VS Code": "💻", "MS Excel": "📊",
    "MS Word": "📝", "MS PowerPoint": "📽️", "Adobe Photoshop": "🎨",
    "Linux / macOS": "🐧", "Jupyter Notebook": "📓",
  };
  return m[name] ?? "⚙️";
}

export default function SkillsPage() {
  return (
    <>
      <PageHero
        num="02. Skills"
        title="Technical Arsenal"
        subtitle="Languages, tools, and competencies built through coursework, projects, and real-world roles."
      />

      <div className="max-w-5xl mx-auto px-6 sm:px-12 pb-28 space-y-20">

        {/* Languages */}
        <section>
          <AnimatedSection>
            <h2 className="text-xl font-bold text-[#ccd6f6] mb-1">Programming Languages</h2>
            <p className="text-[#8892b0] text-sm mb-8">Proficiency levels reflect both academic depth and practical application.</p>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 gap-4">
            {SKILLS.languages.map((lang, i) => (
              <AnimatedSection key={lang.name} delay={i * 0.07}>
                <SkillBar name={lang.name} level={lang.level} />
              </AnimatedSection>
            ))}
          </div>
        </section>

        {/* Tools */}
        <section>
          <AnimatedSection>
            <h2 className="text-xl font-bold text-[#ccd6f6] mb-1">Tools & Software</h2>
            <p className="text-[#8892b0] text-sm mb-8">Daily workflow essentials.</p>
          </AnimatedSection>
          <AnimatedSection>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {SKILLS.tools.map((tool) => (
                <div
                  key={tool.name}
                  className="bg-[#112240] border border-[#233554] rounded p-4 text-center hover:border-[#64ffda]/30 transition-colors cursor-default group"
                >
                  <div className="text-2xl mb-2">{getEmoji(tool.name)}</div>
                  <div className="mono text-[#8892b0] text-xs group-hover:text-[#64ffda] transition-colors leading-snug">
                    {tool.name}
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </section>

        {/* Soft Skills */}
        <section>
          <AnimatedSection>
            <h2 className="text-xl font-bold text-[#ccd6f6] mb-1">Leadership & Soft Skills</h2>
            <p className="text-[#8892b0] text-sm mb-8">Built through real community leadership as a Resident Assistant.</p>
          </AnimatedSection>
          <AnimatedSection>
            <div className="flex flex-wrap gap-3">
              {SKILLS.soft.map((s) => (
                <span
                  key={s}
                  className="mono text-[#64ffda] bg-[#64ffda]/10 border border-[#64ffda]/20 px-4 py-2 rounded text-xs hover:bg-[#64ffda]/20 transition-colors cursor-default"
                >
                  {s}
                </span>
              ))}
            </div>
          </AnimatedSection>
        </section>

        {/* Learning note */}
        <AnimatedSection>
          <div className="bg-[#112240] border border-[#233554] rounded p-8">
            <p className="mono text-[#64ffda] text-sm mb-3">Always Learning</p>
            <p className="text-[#8892b0] leading-relaxed text-sm">
              I&apos;m continuously expanding into machine learning, algorithm design, and software systems.
              If a new tool is the right fit for the problem, I pick it up quickly and use it well.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </>
  );
}
