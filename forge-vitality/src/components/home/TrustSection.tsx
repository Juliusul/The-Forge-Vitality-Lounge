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
    <section className="bg-[#fafaf8] py-28 lg:py-40">
      <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          {/* Left text block */}
          <div className="lg:col-span-4 lg:sticky lg:top-32">
            <SectionLabel>Warum The Forge</SectionLabel>
            <h2
              className="text-[#0f0f0d] text-[clamp(2rem,4vw,3.8rem)] font-light leading-[1.0] tracking-[-0.02em] mb-8"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Vertrauen
              <br />
              entsteht durch
              <br />
              <em className="text-[#b8a882]">Substanz.</em>
            </h2>
            <p
              className="text-[#8a8a82] text-[13px] leading-[1.9] font-light"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              The Forge ist nicht für jeden. Es ist für Menschen, die in ihre
              Gesundheit investieren — mit demselben Anspruch, den sie an alles
              andere in ihrem Leben stellen.
            </p>

            {/* Physiotherapy badge */}
            <div className="mt-10 border border-[#b8a882]/30 p-6 inline-block">
              <p
                className="text-[#b8a882] text-[9px] tracking-[0.22em] uppercase mb-3"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Partner im Haus
              </p>
              <p
                className="text-[#0f0f0d] text-[15px] font-light"
                style={{ fontFamily: "'Playfair Display', serif" }}
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
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-px bg-[#e8e7e3]">
            {pillars.map((p) => (
              <div
                key={p.number}
                className="bg-[#fafaf8] p-8 hover:bg-[#f4f3ef] transition-colors duration-300 group"
              >
                <p
                  className="text-[#b8a882]/40 text-4xl font-light mb-6 group-hover:text-[#b8a882]/60 transition-colors"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {p.number}
                </p>
                <h3
                  className="text-[#0f0f0d] text-lg font-light mb-3 tracking-tight"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {p.title}
                </h3>
                <p
                  className="text-[#8a8a82] text-[12px] leading-[1.9] font-light"
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
