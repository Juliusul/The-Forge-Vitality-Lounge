import PageHero from "@/components/PageHero";
import SectionLabel from "@/components/SectionLabel";
import Button from "@/components/Button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Training – The Forge by Vitality Lounge",
  description: "Hybrid Fitness, Functional Fitness und Smart Gym in Bad Lippspringe. Technikkurse, Strength & Conditioning und Personal Training.",
};

const technikkurse = [
  { name: "Kettlebell Technik", duration: "60 min", level: "Alle Level", description: "Grundlagen und Progressionen im Kettlebell-Training. Swing, Clean, Press, Snatch — saubere Technik als Fundament für Leistung." },
  { name: "Bodyweight Technik", duration: "60 min", level: "Alle Level", description: "Eigenkörpergewichtstraining mit System. Pull-Ups, Dips, Pistol Squats und Handstand-Progressionen — funktionelle Kraft ohne Geräte." },
  { name: "Barbell Beginner", duration: "60 min", level: "Einsteiger", description: "Langhanteltraining von Grund auf. Squat, Deadlift, Press und Bench — sichere Technik für nachhaltigen Kraftaufbau." },
];

const scSessions = [
  { name: "Strength & Conditioning", duration: "75 min", level: "Ab Mittelstufe", description: "Strukturiertes Kraft- und Konditionstraining. Langhantel, Kettlebell und Eigenkörpergewicht — kombiniert in leistungsorientierten Sessions." },
];

const ptServices = [
  { name: "Techniktraining", detail: "Individuelle Technikkorrektur und Bewegungsanalyse für Langhantel, Kettlebell oder Bodyweight." },
  { name: "Hybrid Fitness Coaching", detail: "Individuelle Trainingsplanung und Begleitung — abgestimmt auf deine Ziele und dein Level." },
  { name: "Smart Gym Training", detail: "Einweisung und Coaching im Smart Gym. Gerätetraining mit System und Progression." },
  { name: "Sportspezifisches Athletiktraining", detail: "Athletiktraining für Vereinsathleten und Einzelsportler. Kraft, Schnelligkeit, Kondition — sportartspezifisch." },
];

export default function TrainingPage() {
  return (
    <>
      <PageHero
        label="Training"
        title={<>Drei Modalitäten.<br /><span className="text-[#c19255]">Ein System.</span></>}
        subtitle="Technikkurse, Strength & Conditioning und ein Smart Gym — alles unter einem Dach. Functional Fitness mit Struktur."
      />

      {/* Technikkurse Section */}
      <section className="bg-[#0d0d0b] py-24 lg:py-36">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
          <SectionLabel>Hybrid Fitness Kurse</SectionLabel>
          <h2
            className="text-[#f8f7f2] uppercase leading-[0.9] tracking-[-0.01em] mb-6"
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(2.5rem, 5vw, 5rem)",
            }}
          >
            Technikkurse
          </h2>
          <p className="text-[#8a8a82] text-[13px] leading-[1.85] font-light mb-16 max-w-2xl" style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 300 }}>
            Saubere Technik ist die Grundlage für langfristigen Fortschritt. Unsere Technikkurse vermitteln
            fundamentale Bewegungsmuster — in kleinen Gruppen mit maximal 8 Teilnehmern.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#c19255]/10">
            {technikkurse.map((c) => (
              <div key={c.name} className="bg-[#181816] p-8 hover:bg-[#1e1e1c] transition-colors duration-300 group">
                <h3
                  className="text-[#f8f7f2] uppercase mb-3 group-hover:text-[#c19255] transition-colors"
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 700,
                    fontSize: "1.15rem",
                    letterSpacing: "0.04em",
                  }}
                >
                  {c.name}
                </h3>
                <div className="flex gap-3 mb-4">
                  <span className="text-[#c19255] text-[10px] tracking-[0.18em] uppercase font-semibold" style={{ fontFamily: "'Inter', sans-serif" }}>
                    {c.duration}
                  </span>
                  <span className="text-[#5a5a55] text-[10px] tracking-[0.14em] uppercase font-light" style={{ fontFamily: "'Inter', sans-serif" }}>
                    {c.level}
                  </span>
                </div>
                <div className="h-px w-6 bg-[#c19255]/40 mb-4 group-hover:w-10 group-hover:bg-[#c19255]/70 transition-all duration-300" />
                <p className="text-[#8a8a82] text-[12px] leading-relaxed font-light" style={{ fontFamily: "'Inter', sans-serif" }}>
                  {c.description}
                </p>
              </div>
            ))}
          </div>

          {/* Strength & Conditioning */}
          <div className="mt-16">
            <SectionLabel>Leistungsorientiertes Training</SectionLabel>
            <h2
              className="text-[#f8f7f2] uppercase leading-[0.9] tracking-[-0.01em] mb-6"
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 800,
                fontSize: "clamp(2.5rem, 5vw, 5rem)",
              }}
            >
              Strength &{" "}
              <span className="text-[#c19255]">Conditioning</span>
            </h2>
            <p className="text-[#8a8a82] text-[13px] leading-[1.85] font-light mb-12 max-w-2xl" style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 300 }}>
              75-Minuten-Sessions für Fortgeschrittene. Langhantel, Kettlebell und Eigenkörpergewicht —
              kombiniert in strukturierten Trainingsblöcken mit klarer Progression.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#c19255]/10">
              {scSessions.map((c) => (
                <div key={c.name} className="bg-[#181816] p-8 hover:bg-[#1e1e1c] transition-colors duration-300 group">
                  <h3
                    className="text-[#f8f7f2] uppercase mb-3 group-hover:text-[#c19255] transition-colors"
                    style={{
                      fontFamily: "'Barlow Condensed', sans-serif",
                      fontWeight: 700,
                      fontSize: "1.15rem",
                      letterSpacing: "0.04em",
                    }}
                  >
                    {c.name}
                  </h3>
                  <div className="flex gap-3 mb-4">
                    <span className="text-[#c19255] text-[10px] tracking-[0.18em] uppercase font-semibold" style={{ fontFamily: "'Inter', sans-serif" }}>
                      {c.duration}
                    </span>
                    <span className="text-[#5a5a55] text-[10px] tracking-[0.14em] uppercase font-light" style={{ fontFamily: "'Inter', sans-serif" }}>
                      {c.level}
                    </span>
                  </div>
                  <div className="h-px w-6 bg-[#c19255]/40 mb-4 group-hover:w-10 group-hover:bg-[#c19255]/70 transition-all duration-300" />
                  <p className="text-[#8a8a82] text-[12px] leading-relaxed font-light" style={{ fontFamily: "'Inter', sans-serif" }}>
                    {c.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12">
            <Button href="/timetable" variant="outline">
              Zum Kursplan
            </Button>
          </div>
        </div>
      </section>

      {/* Personal Training */}
      <section className="bg-[#111110] py-24 lg:py-36 relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-[#c19255] to-transparent opacity-30" />
        <div className="absolute bottom-0 right-0 w-[50%] h-[60%] bg-[#c19255]/4 blur-[120px]" />
        <div className="relative z-10 max-w-[1440px] mx-auto px-8 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            <div>
              <SectionLabel>Individuell buchbar</SectionLabel>
              <h2
                className="text-[#f8f7f2] uppercase leading-[0.9] tracking-[-0.01em] mb-8"
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 800,
                  fontSize: "clamp(3rem, 6vw, 5.5rem)",
                }}
              >
                Personal{" "}
                <span className="text-[#c19255]">Training</span>
              </h2>
              <p className="text-[#8a8a82] text-[13px] leading-[1.85] font-light mb-10" style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 300 }}>
                Individuelles Coaching mit Erik Brückner — abgestimmt auf deine Ziele, dein Level
                und deine Sportart. Von Techniktraining über Hybrid Fitness bis hin zu
                sportspezifischem Athletiktraining.
              </p>
              <Button href="/contact" variant="primary">
                Anfrage senden
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-[#c19255]/10">
              {ptServices.map((s) => (
                <div key={s.name} className="bg-[#181816] p-6 hover:bg-[#222220] transition-colors group">
                  <p
                    className="text-[#f8f7f2] uppercase mb-2 group-hover:text-[#c19255] transition-colors"
                    style={{
                      fontFamily: "'Barlow Condensed', sans-serif",
                      fontWeight: 700,
                      fontSize: "1rem",
                      letterSpacing: "0.05em",
                    }}
                  >
                    {s.name}
                  </p>
                  <p className="text-[#8a8a82] text-[10px] font-light leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                    {s.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Smart Gym */}
      <section id="smartgym" className="bg-[#0d0d0b] py-24 lg:py-36 relative overflow-hidden">
        <div className="relative z-10 max-w-[1440px] mx-auto px-8 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div>
              <SectionLabel>Eigenverantwortliches Gerätetraining</SectionLabel>
              <h2
                className="text-[#f8f7f2] uppercase leading-[0.9] tracking-[-0.01em] mb-8"
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 800,
                  fontSize: "clamp(3rem, 6vw, 5.5rem)",
                }}
              >
                Smart{" "}
                <span className="text-[#c19255]">Gym</span>
              </h2>
              <p className="text-[#8a8a82] text-[13px] leading-[1.85] font-light mb-10" style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 300 }}>
                Das Smart Gym ist eigenverantwortliches Gerätetraining in einem Premium-Gerätepark.
                PRECOR Geräte, Face-ID Zugang, 05:00 bis 23:00 Uhr — 365 Tage im Jahr.
                In jeder Mitgliedschaft enthalten.
              </p>
              <Button href="/membership" variant="primary">
                Mitgliedschaft anfragen
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-px bg-[#c19255]/10">
              {[
                { title: "PRECOR Geräte", detail: "Premium Kraft- & Kardiogeräte" },
                { title: "Face-ID Zugang", detail: "05:00 – 23:00 Uhr, 365 Tage" },
                { title: "Kardiozone", detail: "Concept2, Assault Bike" },
                { title: "Freie Gewichte", detail: "Kurz- & Langhanteln" },
              ].map((eq) => (
                <div key={eq.title} className="bg-[#181816] p-6 hover:bg-[#222220] transition-colors group">
                  <p
                    className="text-[#f8f7f2] uppercase mb-2 group-hover:text-[#c19255] transition-colors"
                    style={{
                      fontFamily: "'Barlow Condensed', sans-serif",
                      fontWeight: 700,
                      fontSize: "1rem",
                      letterSpacing: "0.05em",
                    }}
                  >
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
