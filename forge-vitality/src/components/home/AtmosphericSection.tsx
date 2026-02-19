import Image from "next/image";

export default function AtmosphericSection() {
  return (
    <section className="relative bg-[#0f0f0d] py-0 overflow-hidden">
      {/* Full-bleed atmospheric image block */}
      <div className="relative h-[60vh] lg:h-[80vh] flex items-center justify-center">
        {/* Real image */}
        <Image
          src="/img-diagnostik-1.png"
          alt="The Forge Atmosphäre"
          fill
          className="object-cover object-center"
          quality={85}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#0f0f0d]/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0d]/60 via-transparent to-[#0f0f0d]/30" />
        {/* Gold accent */}
        <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-[#b8a882]/6 blur-[120px]" />

        {/* Centered quote */}
        <div className="relative z-10 text-center px-8 max-w-3xl">
          <div className="w-px h-16 bg-[#b8a882]/40 mx-auto mb-8" />
          <blockquote
            className="text-[#fafaf8] text-[clamp(1.8rem,4vw,3.5rem)] font-normal leading-[1.15] tracking-[-0.02em] mb-8"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            <em>
              „Der Körper folgt dem Geist —<br />
              wenn die Umgebung stimmt."
            </em>
          </blockquote>
          <div className="w-px h-16 bg-[#b8a882]/40 mx-auto" />
        </div>
      </div>

      {/* Feature row below */}
      <div className="border-t border-[#b8a882]/10">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-16 py-16 grid grid-cols-2 md:grid-cols-4 gap-px bg-[#b8a882]/10">
          {[
            { label: "Klima & Lüftung", detail: "Kontrolliertes Raumklima" },
            { label: "Akustik", detail: "Fokus-optimierte Dämpfung" },
            { label: "Equipment", detail: "Selektiert, nicht kompromittiert" },
            { label: "Hygiene", detail: "Professioneller Standard täglich" },
          ].map((f) => (
            <div key={f.label} className="bg-[#0f0f0d] px-6 py-8 text-center">
              <p
                className="text-[#fafaf8] text-[11px] tracking-[0.16em] uppercase font-light mb-2"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {f.label}
              </p>
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
