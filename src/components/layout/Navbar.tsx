"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, SITE } from "@/lib/data";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 h-16 transition-all duration-300 ${
          scrolled
            ? "bg-[#080c14]/90 backdrop-blur-xl border-b border-white/[0.07] shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 h-full flex items-center gap-6">
          {/* Logo */}
          <Link href="/" className="font-mono text-lg font-bold shrink-0 gradient-text">
            &lt;RD /&gt;
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-1 ml-auto">
            {NAV_LINKS.map(({ href, label }) => {
              const active = pathname === href;
              return (
                <li key={href}>
                  <Link
                    href={href}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      active
                        ? "bg-white/[0.08] text-white"
                        : "text-[#8b9ab5] hover:text-white hover:bg-white/[0.05]"
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* CTA */}
          <Link
            href="/contact"
            className="hidden md:inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r from-[#60a5fa] to-[#a78bfa] text-white shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 hover:-translate-y-0.5 transition-all duration-200"
          >
            Hire Me
          </Link>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden ml-auto p-2 rounded-lg text-[#8b9ab5] hover:text-white hover:bg-white/[0.05] transition-all"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-[#080c14]/95 backdrop-blur-xl"
          onClick={() => setMenuOpen(false)}
        />
        <div className="relative z-10 flex flex-col items-center justify-center h-full gap-3 pt-16">
          {NAV_LINKS.map(({ href, label }, i) => (
            <Link
              key={href}
              href={href}
              style={{ animationDelay: `${i * 0.05}s` }}
              className={`text-2xl font-semibold px-10 py-4 rounded-xl transition-all duration-200 ${
                pathname === href
                  ? "gradient-text"
                  : "text-[#8b9ab5] hover:text-white"
              } ${menuOpen ? "animate-fade-up" : ""}`}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="mt-4 px-8 py-3 rounded-full font-semibold bg-gradient-to-r from-[#60a5fa] to-[#a78bfa] text-white"
          >
            Hire Me
          </Link>
        </div>
      </div>
    </>
  );
}
