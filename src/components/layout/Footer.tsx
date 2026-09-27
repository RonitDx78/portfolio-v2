import GitHubIcon from "@/components/ui/GitHubIcon";
import { SITE } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center gap-3 py-8 px-6">
      <a
        href={SITE.github}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 font-mono text-xs text-[#8892b0] hover:text-[#64ffda] transition-colors duration-200"
      >
        <GitHubIcon size={14} />
        Designed &amp; Built by Ronit Dey
      </a>
      <span className="font-mono text-[10px] text-[#495670]">
        Inspired by Brittany Chiang
      </span>
    </footer>
  );
}
