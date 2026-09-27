/* Section heading in the BC style: label · title · divider line */
interface Props { num: string; title: string; subtitle?: string; }

export default function PageHero({ num, title, subtitle }: Props) {
  return (
    <div className="mb-14">
      <div className="flex items-center gap-4 mb-5">
        <h1 className="font-mono text-2xl sm:text-3xl font-bold text-[#ccd6f6] whitespace-nowrap">
          <span className="text-[#64ffda] mr-2 text-xl">{num}</span>
          {title}
        </h1>
        <div className="h-px flex-1 bg-[#233554]" />
      </div>
      {subtitle && (
        <p className="text-[#8892b0] text-base leading-relaxed max-w-xl">{subtitle}</p>
      )}
    </div>
  );
}
