"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, SITE } from "@/lib/data";

export default function Navbar() {
  const pathname  = usePathname();
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 h-[70px] transition-all duration-300 ${
          scrolled
            ? "bg-[#0a0a0a]/95 backdrop-blur-md shadow-[0_10px_30px_-10px_rgba(2,12,27,0.7)] border-b border-[#233554]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 sm:px-12 h-full flex items-center justify-between">

          {/* Logo */}
          <Link
            href="/"
            className="mono text-[#64ffda] border border-[#64ffda]/50 rounded px-3 py-1 hover:bg-[#64ffda]/10 transition-colors duration-200 text-sm font-semibold"
          >
            RD
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.filter(l => l.href !== "/").map(({ href, label }, i) => {
              const active = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  style={{ transitionDelay: `${i * 30}ms` }}
                  className={`mono px-4 py-2 rounded transition-colors duration-150 ${
                    active
                      ? "text-[#64ffda]"
                      : "text-[#8892b0] hover:text-[#64ffda]"
                  }`}
                >
                  <span className="text-[#64ffda] mr-1 text-[11px]">0{i + 1}.</span>
                  {label}
                </Link>
              );
            })}
            <a
              href={`mailto:${SITE.email}`}
              className="ml-4 mono text-[#64ffda] border border-[#64ffda] rounded px-5 py-2 text-sm hover:bg-[#64ffda]/10 transition-colors duration-200"
            >
              Say Hello
            </a>
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-[#64ffda] p-2"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="absolute inset-0 bg-[#112240]/98 backdrop-blur-lg" onClick={() => setMenuOpen(false)} />
        <nav className="relative z-10 flex flex-col items-center justify-center h-full gap-6">
          {NAV_LINKS.filter(l => l.href !== "/").map(({ href, label }, i) => (
            <Link
              key={href}
              href={href}
              className={`text-2xl font-semibold transition-colors ${
                pathname === href ? "text-[#64ffda]" : "text-[#ccd6f6] hover:text-[#64ffda]"
              }`}
            >
              <span className="mono text-[#64ffda] text-sm mr-2">0{i + 1}.</span>
              {label}
            </Link>
          ))}
          <a
            href={`mailto:${SITE.email}`}
            className="mt-4 mono text-[#64ffda] border border-[#64ffda] rounded px-8 py-3 hover:bg-[#64ffda]/10 transition-colors"
          >
            Say Hello
          </a>
        </nav>
      </div>
    </>
  );
}
