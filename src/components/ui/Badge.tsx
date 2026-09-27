interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "primary" | "success" | "mono";
  className?: string;
}

export default function Badge({ children, variant = "default", className = "" }: BadgeProps) {
  const styles = {
    default: "bg-white/[0.05] border border-white/[0.08] text-[#8b9ab5]",
    primary: "bg-[#60a5fa]/10 border border-[#60a5fa]/20 text-[#60a5fa]",
    success: "bg-emerald-400/10 border border-emerald-400/20 text-emerald-400",
    mono:    "bg-white/[0.04] border border-white/[0.06] text-[#8b9ab5] font-mono",
  }[variant];

  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${styles} ${className}`}>
      {children}
    </span>
  );
}
