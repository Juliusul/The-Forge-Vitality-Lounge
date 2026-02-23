import SectionLabel from "@/components/SectionLabel";

const pillars = [
  {
    number: "I",
    title: "Medizinische Nähe",
    body: "Physiotherapie im selben Gebäude. Vom Befund zur Belastung — nahtlos. Das gibt es nicht in jedem Gym.",
  },
  {
    number: "II",
    title: "Qualifizierte Begleitung",
    body: "Unsere Coaches kommen aus Sport, Medizin und Gesundheitswissenschaften. Kompetenz ist kein Slogan.",
  },
  {
    number: "III",
    title: "Bewusste Umgebung",
    body: "Architektur, Licht und Akustik sind kein Zufall. Die Umgebung unterstützt Fokus — nicht Ablenkung.",
  },
  {
    number: "IV",
    title: "Keine Masse. Klasse.",
    body: "Limitierte Mitgliederzahl. Kleine Kursgruppen. Persönliche Aufmerksamkeit. Das ist unser Standard.",
  },
];

export default function TrustSection() {
  return (
    <section className="bg-[#111110] py-24 lg:py-36">
      <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          {/* Left text block */}
          <div className="lg:col-span-4 lg:sticky lg:top-32">
            <SectionLabel>Warum The Forge</SectionLabel>
            <h2
              className="text-[#f8f7f2] uppercase leading-[0.9] tracking-[-0.01em] mb-8"
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 800,
                fontSize: "clamp(2.8rem, 5vw, 5rem)",
              }}
            >
              Vertrauen durch{" "}
              <span className="text-[#c19255]">Substanz.</span>
            </h2>
            <p
              className="text-[#8a8a82] text-[13px] leading-[1.85] font-light"
              style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 300 }}
            >
              The Forge ist nicht für jeden. Es ist für Menschen, die in ihre
              Gesundheit investieren — mit demselben Anspruch, den sie an alles
              andere in ihrem Leben stellen.
            </p>

            {/* Physiotherapy badge */}
            <div className="mt-10 border border-[#c19255]/25 p-6 inline-block">
              <p
                className="text-[#c19255] text-[9px] tracking-[0.22em] uppercase mb-2 font-semibold"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Partner im Haus
              </p>
              <p
                className="text-[#f8f7f2] text-[15px] uppercase tracking-wider"
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                }}
              >
                Physiotherapie
              </p>
              <p
                className="text-[#8a8a82] text-[11px] mt-1 font-light"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Gleiche Adresse. Direkter Weg.
              </p>
            </div>
          </div>

          {/* Right pillars */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-px bg-[#c19255]/10">
            {pillars.map((p) => (
              <div
                key={p.number}
                className="bg-[#181816] p-8 hover:bg-[#1e1e1c] transition-colors duration-300 group"
              >
                {/* Number */}
                <p
                  className="text-[#c19255]/30 mb-5 group-hover:text-[#c19255]/50 transition-colors"
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 800,
                    fontSize: "2.5rem",
                    letterSpacing: "-0.02em",
                  }}
                >
                  {p.number}
                </p>

                {/* Gold line */}
                <div className="w-8 h-px bg-[#c19255]/40 mb-5 group-hover:w-12 group-hover:bg-[#c19255]/70 transition-all duration-300" />

                <h3
                  className="text-[#f8f7f2] uppercase mb-3 tracking-wide"
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 700,
                    fontSize: "1.1rem",
                    letterSpacing: "0.04em",
                  }}
                >
                  {p.title}
                </h3>
                <p
                  className="text-[#8a8a82] text-[12px] leading-[1.85] font-light"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
