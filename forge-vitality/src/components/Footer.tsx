import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#0d0d0b] text-[#8a8a82] border-t border-[#c19255]/10">
      <div className="max-w-[1440px] mx-auto px-8 lg:px-16 py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-16 mb-16">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="mb-6">
              <Image
                src="/logo-forge-official.svg"
                alt="The Forge by Vitality Lounge"
                width={120}
                height={81}
                className="h-10 w-auto opacity-70"
              />
            </div>
            <p className="text-[11px] leading-loose text-[#5a5a55] font-light" style={{ fontFamily: "'Inter', sans-serif" }}>
              Hybrid Fitness Studio<br />
              Bad Lippspringe, Deutschland
            </p>
          </div>

          {/* Training */}
          <div>
            <p className="text-[#f8f7f2] tracking-[0.18em] text-[10px] uppercase font-semibold mb-6" style={{ fontFamily: "'Inter', sans-serif" }}>
              Training
            </p>
            <nav className="flex flex-col gap-3">
              {[
                { href: "/training", label: "Hybrid Fitness Kurse" },
                { href: "/training#smartgym", label: "Smart Gym" },
                { href: "/timetable", label: "Kursplan" },
                { href: "/coaches", label: "Coaches" },
              ].map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="text-[11px] text-[#5a5a55] hover:text-[#c19255] tracking-wider font-light transition-colors duration-200"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Club */}
          <div>
            <p className="text-[#f8f7f2] tracking-[0.18em] text-[10px] uppercase font-semibold mb-6" style={{ fontFamily: "'Inter', sans-serif" }}>
              Club
            </p>
            <nav className="flex flex-col gap-3">
              {[
                { href: "/membership", label: "Mitgliedschaft" },
                { href: "/physiotherapy", label: "Physiotherapie" },
                { href: "/about", label: "Über uns" },
                { href: "/contact", label: "Kontakt" },
              ].map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="text-[11px] text-[#5a5a55] hover:text-[#c19255] tracking-wider font-light transition-colors duration-200"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[#f8f7f2] tracking-[0.18em] text-[10px] uppercase font-semibold mb-6" style={{ fontFamily: "'Inter', sans-serif" }}>
              Adresse
            </p>
            <address className="not-italic flex flex-col gap-2 text-[11px] text-[#5a5a55] font-light leading-loose" style={{ fontFamily: "'Inter', sans-serif" }}>
              <span>Musterstraße 1</span>
              <span>33175 Bad Lippspringe</span>
              <a href="tel:+4952529999999" className="hover:text-[#c19255] transition-colors mt-2">+49 5252 999 999</a>
              <a href="mailto:info@theforge-vitality.de" className="hover:text-[#c19255] transition-colors">info@theforge-vitality.de</a>
            </address>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#c19255]/8 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[10px] tracking-wider text-[#3e3e3a] font-light" style={{ fontFamily: "'Inter', sans-serif" }}>
            © {new Date().getFullYear()} The Forge by Vitality Lounge. Alle Rechte vorbehalten.
          </p>
          <div className="flex gap-6">
            {["Impressum", "Datenschutz", "AGB"].map((t) => (
              <Link
                key={t}
                href={`/${t.toLowerCase()}`}
                className="text-[10px] tracking-wider text-[#3e3e3a] hover:text-[#c19255] transition-colors font-light"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {t}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
