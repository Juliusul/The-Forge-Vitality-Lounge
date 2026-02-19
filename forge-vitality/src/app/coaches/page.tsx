import PageHero from "@/components/PageHero";
import SectionLabel from "@/components/SectionLabel";
import Button from "@/components/Button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Coaches – The Forge by Vitality Lounge",
};

const coaches = [
  {
    initials: "SM",
    name: "Sarah Müller",
    role: "Head Coach · Functional Training",
    bio: "Sarah leitet das Training-Konzept bei The Forge. Ihr Hintergrund in Sportwissenschaft und Functional Range Conditioning prägt unsere methodische Tiefe. Kein Kurs bei ihr ist zufällig — jede Session hat ein Ziel.",
    credentials: [
      "B.Sc. Sportwissenschaft, Universität Paderborn",
      "Functional Range Conditioning (FRC) Certified",
      "Präventionskurs-Lizenz §20 SGB V",
      "8 Jahre Coaching-Erfahrung",
    ],
    focus: "Bewegungsmuster · Mobilität · Gruppentraining",
  },
  {
    initials: "TK",
    name: "Thomas Kraft",
    role: "Strength & Conditioning Coach",
    bio: "Thomas kommt aus dem Leistungssport und arbeitet heute mit Professionals, Athleten und ambitionierten Hobbyläufern. Sein Ansatz: Kraft ist keine Frage der Gene — sie ist eine Frage des Systems.",
    credentials: [
      "M.Sc. Bewegungswissenschaft, DSHS Köln",
      "NSCA Certified Strength & Conditioning Specialist",
      "Ehemaliger Leistungssportler (Leichtathletik)",
      "Spezialisierung: Barbell Training, Athletic Development",
    ],
    focus: "Krafttraining · Athletik · Leistungsdiagnostik",
  },
  {
    initials: "LB",
    name: "Lena Berger",
    role: "Mobility & Recovery Specialist",
    bio: "Lena ist ausgebildete Physiotherapeutin und Bewegungscoach. Sie verbindet die medizinische Perspektive mit praktischer Trainingssteuerung — besonders wertvoll für Comeback-Athleten und chronisch Gestresste.",
    credentials: [
      "Staatlich anerkannte Physiotherapeutin",
      "Yoga Alliance RYT-500",
      "Breathing Coordination nach Middendorf",
      "Spezialisierung: Rehab-to-Performance",
    ],
    focus: "Rehabilitation · Mobilisierung · Atemarbeit",
  },
  {
    initials: "JP",
    name: "Jan Peters",
    role: "Cardio & Metabolic Conditioning",
    bio: "Jan ist Triathlet und Sporttherapeut. Er bringt eine nüchterne, datengetriebene Herangehensweise an aerobe Kapazität — ohne Buzzwords. Effektiv, messbar, nachvollziehbar.",
    credentials: [
      "B.Sc. Sporttherapie",
      "Triathlet (Ironman-Finisher)",
      "Herzfrequenz-Zonen-Training Spezialist",
      "ISAK Level 1 Anthropometrie",
    ],
    focus: "Ausdauer · Herzfrequenzsteuerung · Stoffwechsel",
  },
];

export default function CoachesPage() {
  return (
    <>
      <PageHero
        label="Das Team"
        title={<>Kompetenz,<br /><em className="text-[#b8a882]">kein Marketingbegriff.</em></>}
        subtitle="Unsere Coaches kommen aus Sportwissenschaft, Physiotherapie und Leistungssport — nicht aus dem Marketing."
      />

      <section className="bg-[#f4f3ef] py-24 lg:py-36">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
          <div className="flex flex-col gap-px bg-[#c8c8bf]/30">
            {coaches.map((coach, i) => (
              <div
                key={coach.name}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-px ${i % 2 === 0 ? "bg-[#c8c8bf]/30" : "bg-[#c8c8bf]/30"}`}
              >
                {/* Left: avatar + name */}
                <div className={`lg:col-span-4 p-10 lg:p-16 ${i % 2 === 1 ? "bg-[#0f0f0d]" : "bg-[#fafaf8]"}`}>
                  <div
                    className={`w-20 h-20 flex items-center justify-center border mb-8 ${
                      i % 2 === 1 ? "border-[#b8a882]/30" : "border-[#c8c8bf]"
                    }`}
                  >
                    <span
                      className={`text-2xl font-light ${i % 2 === 1 ? "text-[#b8a882]" : "text-[#b8a882]"}`}
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {coach.initials}
                    </span>
                  </div>
                  <h2
                    className={`text-2xl font-light mb-2 tracking-tight ${i % 2 === 1 ? "text-[#fafaf8]" : "text-[#0f0f0d]"}`}
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {coach.name}
                  </h2>
                  <p
                    className="text-[#b8a882] text-[10px] tracking-[0.16em] uppercase font-light mb-6"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {coach.role}
                  </p>
                  <div className="h-px w-8 bg-[#b8a882]/40 mb-6" />
                  <p
                    className={`text-[11px] tracking-wide font-light ${i % 2 === 1 ? "text-[#8a8a82]" : "text-[#8a8a82]"}`}
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {coach.focus}
                  </p>
                </div>

                {/* Right: bio + credentials */}
                <div className={`lg:col-span-8 p-10 lg:p-16 ${i % 2 === 1 ? "bg-[#1a1a17]" : "bg-[#f4f3ef]"}`}>
                  <p
                    className={`text-[13px] leading-[1.9] font-light mb-10 max-w-xl ${i % 2 === 1 ? "text-[#c8c8bf]" : "text-[#3a3a35]"}`}
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {coach.bio}
                  </p>
                  <SectionLabel>Qualifikationen</SectionLabel>
                  <ul className="flex flex-col gap-3">
                    {coach.credentials.map((c) => (
                      <li key={c} className="flex items-start gap-3">
                        <div className="w-px h-3.5 bg-[#b8a882] mt-1 flex-shrink-0" />
                        <span
                          className={`text-[12px] font-light ${i % 2 === 1 ? "text-[#8a8a82]" : "text-[#8a8a82]"}`}
                          style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                          {c}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Button href="/contact" variant="outline">
              Trainingsgespräch buchen
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
