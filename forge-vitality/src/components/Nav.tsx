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
  { href: "/physiotherapy", label: "Physio" },
  { href: "/about", label: "Über uns" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0d0d0b]/98 backdrop-blur-md border-b border-[#c19255]/15"
          : "bg-gradient-to-b from-[#0d0d0b]/80 to-transparent"
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 flex items-center justify-between h-18 lg:h-20">

        {/* Official Logo SVG */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/logo-forge-official.svg"
            alt="The Forge by Vitality Lounge"
            width={160}
            height={108}
            className="h-12 w-auto"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-[#b8b8b0] hover:text-[#f8f7f2] text-[11px] tracking-[0.16em] uppercase font-medium px-4 py-2 transition-colors duration-200 hover:bg-white/5 rounded-sm"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <Link
            href="/contact"
            className="bg-[#c19255] text-[#0d0d0b] text-[11px] tracking-[0.18em] uppercase font-semibold px-6 py-3 hover:bg-[#d4ab74] transition-colors duration-200"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Probetraining
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-[#f8f7f2] p-2"
          aria-label="Toggle menu"
        >
          {open ? <X size={22} strokeWidth={1.5} /> : <Menu size={22} strokeWidth={1.5} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden bg-[#0d0d0b] border-t border-[#c19255]/15 transition-all duration-200 overflow-hidden ${
          open ? "max-h-screen" : "max-h-0"
        }`}
      >
        <div className="px-6 pt-6 pb-4">
          <Image
            src="/logo-forge-official.svg"
            alt="The Forge by Vitality Lounge"
            width={140}
            height={95}
            className="h-10 w-auto opacity-80 mb-6"
          />
          <nav className="flex flex-col gap-0 divide-y divide-white/5">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-[#b8b8b0] hover:text-[#f8f7f2] text-[13px] tracking-[0.14em] uppercase font-medium py-4 transition-colors"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-6 block bg-[#c19255] text-[#0d0d0b] text-[11px] tracking-[0.18em] uppercase font-semibold px-6 py-4 text-center"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Probetraining buchen
          </Link>
        </div>
      </div>
    </header>
  );
}
