"use client";

import { useEffect, useRef } from "react";

export default function SkillBar({ name, level }: { name: string; level: number }) {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const bar = barRef.current;
    if (!bar) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          bar.style.width = `${level}%`;
          obs.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    obs.observe(bar.parentElement!);
    return () => obs.disconnect();
  }, [level]);

  return (
    <div className="bg-[#112240] border border-[#233554] rounded p-5 hover:border-[#64ffda]/30 transition-colors">
      <div className="flex justify-between mb-3">
        <span className="font-semibold text-[#ccd6f6] text-sm">{name}</span>
        <span className="mono text-[#64ffda] text-xs">{level}%</span>
      </div>
      <div className="h-1.5 bg-[#233554] rounded-full overflow-hidden">
        <div
          ref={barRef}
          className="h-full w-0 bg-[#64ffda] rounded-full transition-all duration-1000 ease-out"
        />
      </div>
    </div>
  );
}
