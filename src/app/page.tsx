"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, Mail, ChevronDown } from "lucide-react";
import GitHubIcon from "@/components/ui/GitHubIcon";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Badge from "@/components/ui/Badge";
import { SITE, STATS, SKILLS, EXPERIENCE, HONORS } from "@/lib/data";

/* ── Typed Text ── */
function TypedText() {
  const [text, setText] = useState("");
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const phrase = SITE.typedPhrases[phraseIdx];
    const timeout = deleting
      ? setTimeout(() => {
          setText((t) => t.slice(0, -1));
          if (text.length === 1) {
            setDeleting(false);
            setPhraseIdx((i) => (i + 1) % SITE.typedPhrases.length);
          }
        }, 40)
      : setTimeout(() => {
          setText(phrase.slice(0, text.length + 1));
          if (text.length === phrase.length - 1) {
            setTimeout(() => setDeleting(true), 1800);
          }
        }, 85);
    return () => clearTimeout(timeout);
  }, [text, deleting, phraseIdx]);

  return (
    <span>
      <span className="gradient-text">{text}</span>
      <span className="animate-blink text-[#60a5fa]">|</span>
    </span>
  );
}

/* ── Particle Canvas ── */
function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const c = canvas;
    let animId: number;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    class P {
      x = 0; y = 0; vx = 0; vy = 0; r = 0; a = 0; life = 1;
      constructor() { this.reset(true); }
      reset(init = false) {
        this.x = Math.random() * c.width;
        this.y = init ? Math.random() * c.height : c.height + 10;
        this.vx = (Math.random() - 0.5) * 0.3;
        this.vy = -(Math.random() * 0.5 + 0.1);
        this.r = Math.random() * 1.5 + 0.4;
        this.a = Math.random() * 0.5 + 0.1;
        this.life = 1;
      }
      update() {
        this.x += this.vx; this.y += this.vy; this.life -= 0.003;
        if (this.y < -10 || this.life <= 0) this.reset();
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(96,165,250,${this.a * this.life})`;
        ctx.fill();
      }
    }

    resize();
    const particles = Array.from({ length: 70 }, () => new P());

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 100) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(96,165,250,${(1 - d / 100) * 0.06})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
        particles[i].update();
        particles[i].draw();
      }
      animId = requestAnimationFrame(animate);
    };
    animate();

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    return () => { cancelAnimationFrame(animId); ro.disconnect(); };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />;
}

/* ── Stat Counter ── */
function StatCounter({ value, suffix, label }: { value: string; suffix: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [displayed, setDisplayed] = useState("0");
  const inViewRef = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !inViewRef.current) {
        inViewRef.current = true;
        const target = parseInt(value);
        const dur = 1200;
        const start = performance.now();
        const tick = (now: number) => {
          const p = Math.min((now - start) / dur, 1);
          setDisplayed(String(Math.round(target * (1 - Math.pow(1 - p, 3)))));
          if (p < 1) requestAnimationFrame(tick);
          else setDisplayed(value);
        };
        requestAnimationFrame(tick);
      }
    }, { threshold: 0.5 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [value]);

  return (
    <div ref={ref} className="text-center px-6 py-5 flex-1 min-w-[80px]">
      <div className="text-3xl font-black gradient-text">{displayed}{suffix}</div>
      <div className="text-xs text-[#4a5568] uppercase tracking-widest mt-1">{label}</div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <ParticleCanvas />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#60a5fa]/[0.05] rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#a78bfa]/[0.05] rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 text-center max-w-4xl mx-auto px-6 pt-20">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="font-mono text-xs tracking-[0.25em] uppercase text-[#60a5fa] mb-5"
          >
            Hello, World! I&apos;m
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-6xl sm:text-7xl md:text-8xl font-black tracking-tight mb-6 gradient-text"
          >
            {SITE.name}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.6 }}
            className="text-2xl sm:text-3xl font-semibold text-[#8b9ab5] mb-6 min-h-[2.25rem]"
          >
            I am a <TypedText />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-[#8b9ab5] text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            {SITE.bio}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-4 mb-16"
          >
            <Link
              href="/experience"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold bg-gradient-to-r from-[#60a5fa] to-[#a78bfa] text-white shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-0.5 transition-all duration-200"
            >
              View My Work <ArrowRight size={16} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold border border-white/[0.12] text-[#60a5fa] hover:bg-white/[0.05] hover:border-[#60a5fa]/40 hover:-translate-y-0.5 transition-all duration-200"
            >
              <Mail size={16} /> Get in Touch
            </Link>
            <a
              href={SITE.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold border border-white/[0.12] text-[#8b9ab5] hover:text-white hover:bg-white/[0.05] hover:-translate-y-0.5 transition-all duration-200"
            >
              <GitHubIcon size={16} /> GitHub
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="flex flex-wrap justify-center glass-card rounded-2xl overflow-hidden divide-x divide-white/[0.07]"
          >
            {STATS.map((s) => (
              <StatCounter key={s.label} value={s.value} suffix={s.suffix} label={s.label} />
            ))}
          </motion.div>
        </div>

        <a
          href="#featured"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#4a5568] text-xs tracking-widest uppercase hover:text-[#60a5fa] transition-colors"
        >
          <ChevronDown size={18} className="animate-bounce" />
          Scroll
        </a>
      </section>

      {/* ── FEATURED HONORS ── */}
      <section id="featured" className="py-24 bg-[#0d1220]">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection>
            <p className="font-mono text-xs tracking-[0.2em] uppercase text-[#60a5fa] mb-2">Featured</p>
            <h2 className="text-4xl font-black tracking-tight mb-14">Highlights at a Glance</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {HONORS.map((h, i) => (
              <AnimatedSection key={h.id} delay={i * 0.1}>
                <Link
                  href="/honors"
                  className="block glass-card rounded-2xl p-7 h-full hover:border-[#60a5fa]/20 hover:shadow-lg hover:shadow-blue-500/10 hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div className="text-4xl mb-4">{h.icon}</div>
                  <Badge variant="mono" className="mb-3">{h.category}</Badge>
                  <h3 className="font-bold text-lg mb-2 group-hover:text-[#60a5fa] transition-colors">{h.title}</h3>
                  <p className="text-sm text-[#8b9ab5] leading-relaxed line-clamp-3">{h.description}</p>
                  <div className="mt-4 flex items-center gap-1 text-xs font-semibold text-[#60a5fa] opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn more <ArrowRight size={12} />
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── TECH STACK ── */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection>
            <p className="font-mono text-xs tracking-[0.2em] uppercase text-[#60a5fa] mb-2">Stack</p>
            <h2 className="text-4xl font-black tracking-tight mb-4">Technologies I Use</h2>
            <p className="text-[#8b9ab5] mb-14 max-w-xl">
              From systems programming to data science — here&apos;s what I build with.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {SKILLS.languages.map((lang, i) => (
              <AnimatedSection key={lang.name} delay={i * 0.08}>
                <div className="glass-card rounded-2xl p-6 text-center hover:border-[#60a5fa]/20 hover:-translate-y-1 transition-all duration-300 group">
                  <div className="text-5xl font-black mb-3 gradient-text opacity-90 group-hover:opacity-100 transition-opacity">
                    {lang.level}<span className="text-2xl">%</span>
                  </div>
                  <div className="font-semibold text-sm text-white mb-3">{lang.name}</div>
                  <div className="h-1 bg-white/[0.08] rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-[#60a5fa] to-[#a78bfa]"
                      style={{ width: `${lang.level}%` }}
                    />
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="mt-8 text-center">
            <Link
              href="/skills"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#60a5fa] hover:text-[#a78bfa] transition-colors"
            >
              View all skills <ArrowRight size={14} />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ── LATEST EXPERIENCE ── */}
      <section className="py-24 bg-[#0d1220]">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection>
            <p className="font-mono text-xs tracking-[0.2em] uppercase text-[#60a5fa] mb-2">Experience</p>
            <h2 className="text-4xl font-black tracking-tight mb-14">Where I&apos;ve Worked</h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-6">
            {EXPERIENCE.map((exp, i) => (
              <AnimatedSection key={exp.id} delay={i * 0.1}>
                <div className="glass-card rounded-2xl p-8 h-full hover:border-[#60a5fa]/20 hover:-translate-y-1 transition-all duration-300">
                  <div className="flex items-start justify-between gap-4 mb-6">
                    <div>
                      <div className="text-3xl mb-2">{exp.icon}</div>
                      <h3 className="font-bold text-xl">{exp.role}</h3>
                      <p className="text-[#60a5fa] font-medium text-sm">{exp.company}</p>
                    </div>
                    <div className="text-right shrink-0">
                      {exp.current && <Badge variant="success" className="mb-2">Current</Badge>}
                      <p className="font-mono text-xs text-[#4a5568]">{exp.period}</p>
                    </div>
                  </div>
                  <p className="text-[#8b9ab5] text-sm leading-relaxed mb-5">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="mono">{tag}</Badge>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="mt-8 text-center">
            <Link
              href="/experience"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#60a5fa] hover:text-[#a78bfa] transition-colors"
            >
              View full experience <ArrowRight size={14} />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <AnimatedSection>
            <div className="relative glass-card rounded-3xl p-14 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#60a5fa]/[0.04] to-[#a78bfa]/[0.04] pointer-events-none" />
              <div className="relative">
                <div className="text-5xl mb-6">🚀</div>
                <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-4">
                  Let&apos;s Build Something{" "}
                  <span className="gradient-text">Amazing</span> Together
                </h2>
                <p className="text-[#8b9ab5] mb-10 max-w-xl mx-auto text-lg leading-relaxed">
                  I&apos;m always open to new opportunities, collaborations, and interesting conversations.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold bg-gradient-to-r from-[#60a5fa] to-[#a78bfa] text-white shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-0.5 transition-all duration-200 text-lg"
                  >
                    Get in Touch <ArrowRight size={18} />
                  </Link>
                  <a
                    href={SITE.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold border border-white/[0.12] text-[#8b9ab5] hover:text-white hover:bg-white/[0.05] transition-all duration-200 text-lg"
                  >
                    <GitHubIcon size={18} /> GitHub
                  </a>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
