"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, SITE } from "@/lib/data";

/* On the home page, the left sticky column serves as navigation.
   The top navbar only renders on inner pages. */
export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const isHome = pathname === "/";

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);
  useEffect(() => { document.body.style.overflow = open ? "hidden" : ""; }, [open]);

  if (isHome) return null;

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between h-16 px-6 sm:px-10 transition-all duration-300 ${
          scrolled
            ? "bg-[#0a192f]/95 backdrop-blur-sm shadow-[0_10px_30px_-10px_rgba(2,12,27,0.7)]"
            : "bg-transparent"
        }`}
      >
        <Link
          href="/"
          className="font-mono text-[#64ffda] border border-[#64ffda]/40 text-sm px-3 py-1.5 rounded hover:bg-[#64ffda]/10 transition-colors duration-200"
        >
          RD
        </Link>

        {/* Desktop */}
        <div className="hidden sm:flex items-center gap-1">
          {NAV_LINKS.filter(l => l.href !== "/").map(({ href, label }, i) => (
            <Link
              key={href}
              href={href}
              className={`font-mono text-xs px-4 py-2 transition-colors duration-200 ${
                pathname === href ? "text-[#64ffda]" : "text-[#8892b0] hover:text-[#64ffda]"
              }`}
            >
              <span className="text-[#64ffda] mr-1">0{i + 1}.</span>
              {label}
            </Link>
          ))}
          <a
            href={`mailto:${SITE.email}`}
            className="ml-3 font-mono text-[#64ffda] text-xs border border-[#64ffda] px-4 py-2.5 rounded hover:bg-[#64ffda]/10 transition-colors duration-200"
          >
            Say Hello
          </a>
        </div>

        {/* Hamburger */}
        <button
          className="sm:hidden text-[#64ffda]"
          onClick={() => setOpen(o => !o)}
          aria-label="menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-40 sm:hidden flex items-center justify-center transition-opacity duration-200 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="absolute inset-0 bg-[#112240]/98 backdrop-blur-md" onClick={() => setOpen(false)} />
        <nav className="relative flex flex-col items-center gap-8">
          {NAV_LINKS.filter(l => l.href !== "/").map(({ href, label }, i) => (
            <Link
              key={href}
              href={href}
              className={`font-mono text-xl font-semibold ${
                pathname === href ? "text-[#64ffda]" : "text-[#ccd6f6] hover:text-[#64ffda]"
              } transition-colors`}
            >
              <span className="text-[#64ffda] text-sm mr-2">0{i + 1}.</span>
              {label}
            </Link>
          ))}
          <a href={`mailto:${SITE.email}`} className="font-mono text-[#64ffda] border border-[#64ffda] px-6 py-3 rounded text-sm hover:bg-[#64ffda]/10 transition-colors">
            Say Hello
          </a>
        </nav>
      </div>
    </>
  );
}
