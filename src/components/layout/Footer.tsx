import { Mail, Phone } from "lucide-react";
import GitHubIcon from "@/components/ui/GitHubIcon";
import { SITE } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="text-center py-10 px-6 border-t border-[#233554]">
      <a
        href={SITE.github}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 mono text-[#8892b0] hover:text-[#64ffda] transition-colors duration-200 text-sm mb-4"
      >
        <GitHubIcon size={14} /> Designed &amp; Built by {SITE.name}
      </a>
      <div className="flex items-center justify-center gap-6 mt-3">
        <a href={`mailto:${SITE.email}`} className="text-[#8892b0] hover:text-[#64ffda] transition-colors">
          <Mail size={15} />
        </a>
        <a href={`tel:${SITE.phone}`} className="text-[#8892b0] hover:text-[#64ffda] transition-colors">
          <Phone size={15} />
        </a>
        <a href={SITE.github} target="_blank" rel="noopener noreferrer" className="text-[#8892b0] hover:text-[#64ffda] transition-colors">
          <GitHubIcon size={15} />
        </a>
      </div>
    </footer>
  );
}
