interface PageHeroProps {
  num: string;
  title: string;
  subtitle?: string;
}

export default function PageHero({ num, title, subtitle }: PageHeroProps) {
  return (
    <section className="pt-36 pb-16 max-w-5xl mx-auto px-6 sm:px-12">
      <p className="mono text-[#64ffda] mb-3 text-sm">{num}</p>
      <h1 className="text-4xl sm:text-5xl font-black text-[#ccd6f6] tracking-tight leading-tight">
        {title}
      </h1>
      {subtitle && (
        <p className="mt-4 text-[#8892b0] max-w-xl text-base leading-relaxed">
          {subtitle}
        </p>
      )}
      <div className="mt-6 h-px w-full max-w-xs bg-[#233554]" />
    </section>
  );
}
