import Image from "next/image";

export default function AtmosphericSection() {
  return (
    <section className="relative bg-[#0d0d0b] py-0 overflow-hidden">
      {/* Full-bleed image block */}
      <div className="relative h-[60vh] lg:h-[80vh] flex items-center justify-center">
        <Image
          src="/img-barbell.jpg"
          alt="The Forge Performance Training"
          fill
          className="object-cover object-center"
          quality={90}
        />
        {/* Dark overlay — barbell image is already dark, keep it subtle */}
        <div className="absolute inset-0 bg-[#0d0d0b]/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0b]/80 via-transparent to-[#0d0d0b]/30" />
        {/* Gold corner glow */}
        <div className="absolute top-0 right-0 w-[40%] h-[60%] bg-[#c19255]/5 blur-[120px]" />

        {/* Centered statement */}
        <div className="relative z-10 text-center px-8 max-w-4xl">
          <div className="w-px h-12 bg-[#c19255]/50 mx-auto mb-8" />
          <blockquote
            className="text-[#f8f7f2] uppercase leading-[0.9] tracking-[-0.01em] mb-8"
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(2.5rem, 6vw, 5.5rem)",
            }}
          >
            Kein Chaos.
            <br />
            <span className="text-[#c19255]">Kein Kompromiss.</span>
            <br />
            Nur Training.
          </blockquote>
          <div className="w-px h-12 bg-[#c19255]/50 mx-auto" />
        </div>
      </div>

      {/* Feature strip */}
      <div className="border-t border-[#c19255]/10">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16 py-12 grid grid-cols-2 md:grid-cols-4 gap-px bg-[#c19255]/8">
          {[
            { label: "Kleine Gruppen", detail: "Max. 8 Personen pro Kurs" },
            { label: "Head Coach", detail: "Erik Brückner — immer dabei" },
            { label: "Equipment", detail: "ELEIKO · PRECOR · Concept2" },
            { label: "Smart Gym", detail: "05:00 – 23:00 · 365 Tage" },
          ].map((f) => (
            <div key={f.label} className="bg-[#181816] px-6 py-8 text-center group hover:bg-[#1e1e1c] transition-colors duration-200">
              <p
                className="text-[#f8f7f2] text-[10px] tracking-[0.2em] uppercase font-semibold mb-2"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {f.label}
              </p>
              <div className="w-4 h-px bg-[#c19255]/40 mx-auto mb-2 group-hover:w-8 transition-all duration-300" />
              <p
                className="text-[#8a8a82] text-[11px] font-light"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {f.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
