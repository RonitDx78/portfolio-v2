interface PageHeroProps {
  label: string;
  title: string;
  subtitle?: string;
  gradient?: string;
}

export default function PageHero({
  label,
  title,
  subtitle,
  gradient = "from-[#60a5fa] to-[#a78bfa]",
}: PageHeroProps) {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#60a5fa]/[0.06] rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        <p className="font-mono text-xs tracking-[0.2em] uppercase text-[#60a5fa] mb-4">
          {label}
        </p>
        <h1
          className={`text-4xl sm:text-5xl md:text-6xl font-black tracking-tight bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}
        >
          {title}
        </h1>
        {subtitle && (
          <p className="mt-5 text-lg text-[#8b9ab5] max-w-2xl leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
