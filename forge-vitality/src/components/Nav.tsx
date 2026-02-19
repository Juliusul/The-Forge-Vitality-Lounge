"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/training", label: "Training" },
  { href: "/timetable", label: "Kursplan" },
  { href: "/membership", label: "Mitgliedschaft" },
  { href: "/coaches", label: "Coaches" },
  { href: "/physiotherapy", label: "Physiotherapie" },
  { href: "/about", label: "Über uns" },
  { href: "/contact", label: "Kontakt" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0f0f0d]/95 backdrop-blur-sm border-b border-[#b8a882]/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-8 lg:px-16 flex items-center justify-between h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <Image
            src="/logo-forge-light.svg"
            alt="The Forge by Vitality Lounge"
            width={200}
            height={52}
            className="h-11 w-auto"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-[#c8c8bf] hover:text-[#fafaf8] text-[11px] tracking-[0.14em] uppercase font-light transition-colors duration-300"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="ml-4 border border-[#b8a882] text-[#b8a882] hover:bg-[#b8a882] hover:text-[#0f0f0d] text-[11px] tracking-[0.14em] uppercase font-light px-6 py-2.5 transition-all duration-300"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Termin
          </Link>
        </nav>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-[#fafaf8] p-1"
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden bg-[#0f0f0d] border-t border-[#b8a882]/10 transition-all duration-300 overflow-hidden ${
          open ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-8 pt-8 pb-4">
          <Image
            src="/logo-forge-light.svg"
            alt="The Forge by Vitality Lounge"
            width={180}
            height={48}
            className="h-10 w-auto opacity-60"
          />
        </div>
        <nav className="flex flex-col px-8 py-4 pb-8 gap-6">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-[#c8c8bf] hover:text-[#fafaf8] text-[13px] tracking-[0.14em] uppercase font-light transition-colors"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
