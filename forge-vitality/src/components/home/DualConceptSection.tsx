import SectionLabel from "@/components/SectionLabel";
import Button from "@/components/Button";

export default function DualConceptSection() {
  return (
    <section className="bg-[#0d0d0b] py-24 lg:py-36">
      <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
        {/* Header */}
        <div className="mb-16 lg:mb-20">
          <SectionLabel>Dein Training</SectionLabel>
          <h2
            className="text-[#f8f7f2] leading-[0.9] tracking-[-0.01em] uppercase max-w-3xl"
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(3rem, 7vw, 6.5rem)",
            }}
          >
            Zwei Wege.{" "}
            <span className="text-[#c19255]">Ein Ziel.</span>
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-[#c19255]/10">
          {/* Card 1: Hybrid Fitness */}
          <div className="bg-[#181816] p-12 lg:p-16 group relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#c19255] to-transparent opacity-60" />

            {/* Number */}
            <p
              className="text-[#c19255]/15 leading-none mb-8"
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 800,
                fontSize: "8rem",
                lineHeight: 1,
              }}
            >
              01
            </p>

            <SectionLabel>Strukturiertes Training</SectionLabel>

            <h3
              className="text-[#f8f7f2] uppercase mb-6"
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 700,
                fontSize: "clamp(2rem, 4vw, 3rem)",
                lineHeight: 0.95,
                letterSpacing: "-0.01em",
              }}
            >
              Hybrid Fitness
            </h3>

            <p
              className="text-[#8a8a82] text-[13px] leading-[1.85] font-light mb-10 max-w-md"
              style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 300 }}
            >
              Strength-Kurse rund um die Langhantel und Conditioning Workouts
              mit gemischten Modalitäten — Circuit, AMRAP, EMOM.
              Kleine Gruppen, klare Struktur.
            </p>

            <div className="flex flex-col gap-3 mb-10">
              {[
                "Kleine Gruppen (max. 8 Teilnehmer)",
                "Strength & Conditioning Kurse",
                "Langhantel · Kettlebell · Bodyweight",
                "Hoher Übertrag auf Alltag & Sport",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-1 h-1 bg-[#c19255] flex-shrink-0 rounded-full" />
                  <span
                    className="text-[12px] text-[#b8b8b0] font-light tracking-wide"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <Button href="/training" variant="outline">
              Training ansehen
            </Button>
          </div>

          {/* Card 2: Smart Gym */}
          <div className="bg-[#222220] p-12 lg:p-16 group relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#c19255]/50 to-transparent opacity-40" />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#c19255]/4 blur-[80px]" />

            {/* Number */}
            <p
              className="text-[#c19255]/10 leading-none mb-8"
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 800,
                fontSize: "8rem",
                lineHeight: 1,
              }}
            >
              02
            </p>

            <SectionLabel>Freies Training</SectionLabel>

            <h3
              className="text-[#f8f7f2] uppercase mb-6 relative z-10"
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 700,
                fontSize: "clamp(2rem, 4vw, 3rem)",
                lineHeight: 0.95,
                letterSpacing: "-0.01em",
              }}
            >
              Smart Gym
            </h3>

            <p
              className="text-[#8a8a82] text-[13px] leading-[1.85] font-light mb-10 max-w-md relative z-10"
              style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 300 }}
            >
              Freies Gerätetraining im PRECOR Premium-Gerätepark. Face-ID
              Zugang, 05:00 bis 23:00 Uhr — 365 Tage im Jahr. Im Smart Gym
              trainierst du eigenverantwortlich. In jeder Mitgliedschaft inklusive.
            </p>

            <div className="flex flex-col gap-3 mb-10 relative z-10">
              {[
                "PRECOR Premium Gerätepark",
                "Face-ID Zugang · Videoüberwacht",
                "05:00 – 23:00 Uhr · 365 Tage",
                "In jeder Mitgliedschaft inklusive",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-1 h-1 bg-[#c19255] flex-shrink-0 rounded-full" />
                  <span
                    className="text-[12px] text-[#b8b8b0] font-light tracking-wide"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <Button href="/training#smartgym" variant="ghost">
              Smart Gym entdecken
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
