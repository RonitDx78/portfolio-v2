import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SkillBar from "@/components/ui/SkillBar";
import { SKILLS } from "@/lib/data";

export const metadata: Metadata = { title: "Skills", description: "Ronit Dey's technical skills." };

const toolEmoji: Record<string, string> = {
  "Git & GitHub": "🌿", "VS Code": "💻", "MS Excel": "📊",
  "MS Word": "📝", "MS PowerPoint": "📽️", "Adobe Photoshop": "🎨",
  "Linux / macOS": "🐧", "Jupyter Notebook": "📓",
};

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-4 mb-6">
      <h2 className="font-mono text-sm uppercase tracking-widest text-[#ccd6f6] whitespace-nowrap">{children}</h2>
      <div className="h-px flex-1 bg-[#233554]" />
    </div>
  );
}

export default function SkillsPage() {
  return (
    <div className="mx-auto min-h-screen max-w-screen-lg px-6 sm:px-12 lg:px-24 pt-24 pb-24">
      <PageHero
        num="02."
        title="Skills"
        subtitle="Languages, tools, and competencies built through coursework, projects, and real-world roles."
      />

      <div className="space-y-16">
        {/* Programming Languages */}
        <AnimatedSection>
          <SectionLabel>Programming Languages</SectionLabel>
          <div className="grid sm:grid-cols-2 gap-6">
            {SKILLS.languages.map((lang, i) => (
              <AnimatedSection key={lang.name} delay={i * 0.06}>
                <SkillBar name={lang.name} level={lang.level} />
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>

        {/* Tools */}
        <AnimatedSection>
          <SectionLabel>Tools &amp; Software</SectionLabel>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {SKILLS.tools.map(tool => (
              <div
                key={tool.name}
                className="bg-[#112240] border border-[#233554] rounded p-4 text-center hover:border-[#64ffda]/30 transition-colors duration-300 cursor-default group"
              >
                <div className="text-2xl mb-2">{toolEmoji[tool.name] ?? "⚙️"}</div>
                <p className="font-mono text-[#8892b0] text-[11px] leading-snug group-hover:text-[#ccd6f6] transition-colors">
                  {tool.name}
                </p>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Soft Skills */}
        <AnimatedSection>
          <SectionLabel>Leadership &amp; Soft Skills</SectionLabel>
          <div className="flex flex-wrap gap-2">
            {SKILLS.soft.map(s => (
              <span
                key={s}
                className="font-mono text-[#64ffda] bg-[#64ffda]/10 border border-[#64ffda]/20 px-3 py-1.5 rounded text-[11px] hover:bg-[#64ffda]/20 transition-colors cursor-default"
              >
                {s}
              </span>
            ))}
          </div>
        </AnimatedSection>

        {/* Note */}
        <AnimatedSection>
          <div className="bg-[#112240] border border-[#233554] rounded p-6">
            <p className="font-mono text-[#64ffda] text-xs mb-2">Always Learning</p>
            <p className="text-[#8892b0] text-sm leading-relaxed">
              I&apos;m continuously expanding into machine learning, algorithm design, and software systems.
              If a new tool fits the problem, I pick it up fast and use it well.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
