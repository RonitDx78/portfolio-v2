interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "mint" | "success";
  className?: string;
}

export default function Badge({ children, variant = "default", className = "" }: BadgeProps) {
  const styles = {
    default: "bg-[#112240] text-[#8892b0] border border-[#233554]",
    mint:    "bg-[#64ffda]/10 text-[#64ffda] border border-[#64ffda]/20",
    success: "bg-emerald-900/30 text-emerald-400 border border-emerald-700/40",
  }[variant];

  return (
    <span className={`mono inline-flex items-center px-3 py-1 rounded text-[11px] ${styles} ${className}`}>
      {children}
    </span>
  );
}
