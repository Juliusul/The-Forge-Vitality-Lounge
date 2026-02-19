import PageHero from "@/components/PageHero";
import SectionLabel from "@/components/SectionLabel";
import Button from "@/components/Button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Training – The Forge by Vitality Lounge",
  description: "Functional Classes und Self Check Gym in Bad Lippspringe. Zwei Trainingswelten, ein Standard.",
};

const classes = [
  { name: "Functional Flow", duration: "60 min", level: "Alle Level", description: "Ganzheitliches Training mit Fokus auf Bewegungsmuster, Koordination und funktionelle Kraft." },
  { name: "Strength Lab", duration: "60 min", level: "Fortgeschritten", description: "Kraftbasiertes Training mit Langhantel, Kettlebell und strukturiertem Progressionsplan." },
  { name: "Cardio Conditioning", duration: "45 min", level: "Alle Level", description: "Aerobe Kapazität und Metabolismus — effizient, messbar, angenehm intensiv." },
  { name: "Mobility & Reset", duration: "45 min", level: "Alle Level", description: "Gelenkmobilisation, Faszienarbeit und Atemregulation. Aktive Regeneration, kein Yoga-Kurs." },
  { name: "Athletic Performance", duration: "60 min", level: "Fortgeschritten", description: "Athletik für Sportler — Schnelligkeit, Reaktionsvermögen, explosiver Kraft." },
  { name: "Open Floor", duration: "60 min", level: "Ab Mittelstufe", description: "Freie Trainingszeit mit Coaching-Support. Für wer seinen eigenen Plan mitbringt." },
];

export default function TrainingPage() {
  return (
    <>
      <PageHero
        label="Trainingswelten"
        title={<>Zwei Wege.<br /><em className="text-[#b8a882]">Ein Standard.</em></>}
        subtitle="Classes, die fordern. Ein Gym, das inspiriert. Physiotherapie, wenn du es brauchst."
      />

      {/* Classes Section */}
      <section className="bg-[#f4f3ef] py-24 lg:py-36">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
          <SectionLabel>Geführte Kurse</SectionLabel>
          <h2
            className="text-[#0f0f0d] text-[clamp(2rem,4vw,3.5rem)] font-light leading-tight tracking-[-0.02em] mb-16"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Functional Classes
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#c8c8bf]/40">
            {classes.map((c) => (
              <div key={c.name} className="bg-[#f4f3ef] p-8 hover:bg-[#fafaf8] transition-colors duration-300">
                <div className="flex items-start justify-between mb-4">
                  <h3
                    className="text-[#0f0f0d] text-lg font-light"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {c.name}
                  </h3>
                </div>
                <div className="flex gap-4 mb-4">
                  <span className="text-[#b8a882] text-[10px] tracking-[0.16em] uppercase font-light" style={{ fontFamily: "'Inter', sans-serif" }}>
                    {c.duration}
                  </span>
                  <span className="text-[#8a8a82] text-[10px] tracking-[0.16em] uppercase font-light" style={{ fontFamily: "'Inter', sans-serif" }}>
                    {c.level}
                  </span>
                </div>
                <div className="h-px w-8 bg-[#b8a882]/40 mb-4" />
                <p className="text-[#8a8a82] text-[12px] leading-relaxed font-light" style={{ fontFamily: "'Inter', sans-serif" }}>
                  {c.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <Button href="/timetable" variant="outline">
              Zum Kursplan
            </Button>
          </div>
        </div>
      </section>

      {/* Self Check Gym */}
      <section id="selfcheck" className="bg-[#0f0f0d] py-24 lg:py-36 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f0f0d] via-[#1a1a17] to-[#0f0f0d]" />
        <div className="absolute bottom-0 right-0 w-[50%] h-[60%] bg-[#b8a882]/5 blur-[120px]" />
        <div className="relative z-10 max-w-[1400px] mx-auto px-8 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div>
              <SectionLabel>Freies Training</SectionLabel>
              <h2
                className="text-[#fafaf8] text-[clamp(2.5rem,5vw,5rem)] font-light leading-[0.95] tracking-[-0.02em] mb-8"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Self Check
                <br />
                <em className="text-[#b8a882]">Gym</em>
              </h2>
              <p className="text-[#8a8a82] text-[13px] leading-[1.9] font-light mb-10" style={{ fontFamily: "'Inter', sans-serif" }}>
                Das Self Check Gym ist kein normales Fitnessstudio. Es ist ein fokussierter,
                ruhiger Raum mit selektiertem Equipment — für Mitglieder, die selbst wissen,
                was sie tun. Keine Ablenkung. Kein Lärm. Nur Training.
              </p>
              <Button href="/membership" variant="primary">
                Mitgliedschaft anfragen
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-px bg-[#b8a882]/10">
              {[
                { title: "Freie Hanteln", detail: "2–50 kg · Premium-Qualität" },
                { title: "Cables & Rig", detail: "Multi-funktional, stabil" },
                { title: "Kardiozone", detail: "Concept2, Assault Bike" },
                { title: "Stretching Area", detail: "Separater Bereich, ruhig" },
              ].map((eq) => (
                <div key={eq.title} className="bg-[#1a1a17] p-6 hover:bg-[#242420] transition-colors">
                  <p className="text-[#fafaf8] text-[13px] font-light mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>
                    {eq.title}
                  </p>
                  <p className="text-[#8a8a82] text-[10px] font-light" style={{ fontFamily: "'Inter', sans-serif" }}>
                    {eq.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
