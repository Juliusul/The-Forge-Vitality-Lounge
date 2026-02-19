import SectionLabel from "@/components/SectionLabel";
import Button from "@/components/Button";

export default function DualConceptSection() {
  return (
    <section className="bg-[#f4f3ef] py-28 lg:py-40">
      <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
        {/* Header */}
        <div className="mb-20 lg:mb-28">
          <SectionLabel>Die zwei Welten</SectionLabel>
          <h2
            className="text-[#0f0f0d] text-[clamp(2.5rem,5vw,5rem)] font-light leading-[0.95] tracking-[-0.02em] max-w-2xl"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Zwei Wege.
            <br />
            <em>Ein Ziel.</em>
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-[#c8c8bf]/30">
          {/* Card 1: Classes */}
          <div className="bg-[#f4f3ef] p-12 lg:p-16 group hover:bg-[#fafaf8] transition-colors duration-500">
            {/* Number */}
            <p
              className="text-[#b8a882]/30 text-[6rem] font-light leading-none mb-8 tracking-tighter"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              01
            </p>
            <SectionLabel>Geführtes Training</SectionLabel>
            <h3
              className="text-[#0f0f0d] text-[2.2rem] font-light leading-tight tracking-[-0.01em] mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Functional Classes
            </h3>
            <p
              className="text-[#8a8a82] text-[13px] leading-[1.9] font-light mb-10 max-w-md"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Strukturierte, geführte Kurse in kleinen Gruppen. Jede Session ist
              durchdacht — von der Mobilisation bis zur Konditionierung. Kein
              Wildwuchs. Kein Durcheinander. Nur zielgerichtetes Training unter
              qualifizierter Anleitung.
            </p>
            <div className="flex flex-col gap-3 mb-10">
              {[
                "Kleine Gruppen, maximale Aufmerksamkeit",
                "Strukturierte Progressionspläne",
                "Beweglichkeit, Kraft und Kondition",
                "Alle Level willkommen",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <div className="w-px h-4 bg-[#b8a882] mt-1 flex-shrink-0" />
                  <span
                    className="text-[12px] text-[#3a3a35] font-light tracking-wide"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>
            <Button href="/training" variant="outline">
              Kurse ansehen
            </Button>
          </div>

          {/* Card 2: Self Check Gym */}
          <div className="bg-[#0f0f0d] p-12 lg:p-16 group relative overflow-hidden">
            {/* Subtle bg accent */}
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#b8a882]/5 blur-[80px]" />
            {/* Number */}
            <p
              className="text-[#b8a882]/20 text-[6rem] font-light leading-none mb-8 tracking-tighter relative z-10"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              02
            </p>
            <SectionLabel>Freies Training</SectionLabel>
            <h3
              className="text-[#fafaf8] text-[2.2rem] font-light leading-tight tracking-[-0.01em] mb-6 relative z-10"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Self Check Gym
            </h3>
            <p
              className="text-[#8a8a82] text-[13px] leading-[1.9] font-light mb-10 max-w-md relative z-10"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Exklusive Geräte. Hochwertige Hanteln. Bewusstes Design. Das Self
              Check Gym ist kein normales Fitnessstudio — es ist eine durchdachte
              Umgebung für Menschen, die wissen, was sie tun. Ruhig, fokussiert,
              ungestört.
            </p>
            <div className="flex flex-col gap-3 mb-10 relative z-10">
              {[
                "Premium-Equipment, curated selection",
                "Ruhige, fokussierte Atmosphäre",
                "Zugang rund um die Uhr für Mitglieder",
                "Direkt neben der Physiotherapie",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <div className="w-px h-4 bg-[#b8a882] mt-1 flex-shrink-0" />
                  <span
                    className="text-[12px] text-[#c8c8bf] font-light tracking-wide"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>
            <Button href="/training#selfcheck" variant="ghost">
              Self Check Gym
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
