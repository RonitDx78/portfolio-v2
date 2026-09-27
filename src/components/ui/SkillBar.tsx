"use client";

import { useEffect, useRef } from "react";

export default function SkillBar({ name, level }: { name: string; level: number }) {
  const barRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = barRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { el.style.width = `${level}%`; obs.disconnect(); }
    }, { threshold: 0.3 });
    obs.observe(el.parentElement!);
    return () => obs.disconnect();
  }, [level]);

  return (
    <div>
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium text-[#ccd6f6]">{name}</span>
        <span className="font-mono text-xs text-[#64ffda]">{level}%</span>
      </div>
      <div className="h-1 bg-[#233554] rounded-full overflow-hidden">
        <div
          ref={barRef}
          className="h-full w-0 bg-[#64ffda] rounded-full transition-all duration-1000 ease-out"
        />
      </div>
    </div>
  );
}
