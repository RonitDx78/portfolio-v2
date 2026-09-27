import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import GitHubIcon from "@/components/ui/GitHubIcon";
import { NAV_LINKS, SITE } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.07] bg-[#0d1220]">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="font-mono text-xl font-bold gradient-text mb-3">&lt;RD /&gt;</div>
            <p className="text-[#8b9ab5] text-sm leading-relaxed max-w-xs">
              {SITE.bio}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm tracking-wider uppercase">Navigation</h3>
            <ul className="flex flex-col gap-2">
              {NAV_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-[#8b9ab5] text-sm hover:text-[#60a5fa] transition-colors duration-200"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm tracking-wider uppercase">Contact</h3>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="flex items-center gap-2 text-[#8b9ab5] text-sm hover:text-[#60a5fa] transition-colors group"
                >
                  <Mail size={14} className="shrink-0 group-hover:text-[#60a5fa]" />
                  {SITE.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${SITE.phone}`}
                  className="flex items-center gap-2 text-[#8b9ab5] text-sm hover:text-[#60a5fa] transition-colors group"
                >
                  <Phone size={14} className="shrink-0" />
                  {SITE.phone}
                </a>
              </li>
              <li className="flex items-center gap-2 text-[#8b9ab5] text-sm">
                <MapPin size={14} className="shrink-0" />
                {SITE.location}
              </li>
              <li>
                <a
                  href={SITE.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[#8b9ab5] text-sm hover:text-[#60a5fa] transition-colors group"
                >
                  <GitHubIcon size={14} className="shrink-0" />
                  github.com/{SITE.githubHandle}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#4a5568] text-sm">
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
          <p className="text-[#4a5568] text-xs font-mono">
            Built with Next.js · Tailwind · Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
