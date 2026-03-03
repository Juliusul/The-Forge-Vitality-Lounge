import PageHero from "@/components/PageHero";
import SectionLabel from "@/components/SectionLabel";
import Button from "@/components/Button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Coaches – The Forge by Vitality Lounge",
};

const coaches = [
  {
    initials: "EB",
    name: "Erik Brückner",
    role: "Head Coach · Hybrid Fitness",
    bio: "Erik leitet das gesamte Training-Konzept bei The Forge. Sein Hintergrund in Fitnessökonomie, Leistungssport und Kampfsport prägt die methodische Tiefe aller Kurse. Über 10 Jahre Erfahrung in der Trainingssteuerung — von Alltagsathleten bis zu Vereinssportlern.",
    credentials: [
      "Studium Fitnessökonomie (DHFPG)",
      "Leistungssport-Hintergrund",
      "Kampfsport-Erfahrung",
      "10+ Jahre Coaching-Erfahrung",
      "Spezialisierung: Hybrid Fitness, Athletiktraining, Kraft- & Konditionstraining",
    ],
    focus: "Hybrid Fitness · Athletiktraining · Kraft- & Konditionstraining · Personal Training",
  },
];

export default function CoachesPage() {
  return (
    <>
      <PageHero
        label="Das Team"
        title={<>Kompetenz,<br /><span className="text-[#c19255]">kein Marketingbegriff.</span></>}
        subtitle="Fitnessökonomie, Leistungssport, Kampfsport — über 10 Jahre Erfahrung in der Trainingssteuerung."
      />

      <section className="bg-[#0d0d0b] py-24 lg:py-36">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
          <div className="flex flex-col gap-px bg-[#c19255]/8">
            {coaches.map((coach, i) => (
              <div key={coach.name} className="grid grid-cols-1 lg:grid-cols-12 gap-px bg-[#c19255]/8">
                {/* Left */}
                <div className={`lg:col-span-4 p-10 lg:p-14 ${i % 2 === 0 ? "bg-[#181816]" : "bg-[#111110]"} relative overflow-hidden`}>
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-[#c19255]/40 to-transparent" />
                  <div className="w-16 h-16 flex items-center justify-center border border-[#c19255]/25 mb-8">
                    <span
                      className="text-[#c19255] font-semibold"
                      style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "1.1rem", letterSpacing: "0.1em" }}
                    >
                      {coach.initials}
                    </span>
                  </div>
                  <h2
                    className="text-[#f8f7f2] uppercase mb-2"
                    style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "1.5rem", letterSpacing: "0.04em" }}
                  >
                    {coach.name}
                  </h2>
                  <p className="text-[#c19255] text-[10px] tracking-[0.18em] uppercase font-semibold mb-6" style={{ fontFamily: "'Inter', sans-serif" }}>
                    {coach.role}
                  </p>
                  <div className="h-px w-8 bg-[#c19255]/30 mb-5" />
                  <p className="text-[#5a5a55] text-[11px] tracking-wide font-light" style={{ fontFamily: "'Inter', sans-serif" }}>
                    {coach.focus}
                  </p>
                </div>

                {/* Right */}
                <div className={`lg:col-span-8 p-10 lg:p-14 ${i % 2 === 0 ? "bg-[#111110]" : "bg-[#181816]"}`}>
                  <p className="text-[#8a8a82] text-[13px] leading-[1.85] font-light mb-10 max-w-xl" style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 300 }}>
                    {coach.bio}
                  </p>
                  <SectionLabel>Qualifikationen</SectionLabel>
                  <ul className="flex flex-col gap-3">
                    {coach.credentials.map((c) => (
                      <li key={c} className="flex items-center gap-3">
                        <div className="w-1 h-1 bg-[#c19255] flex-shrink-0 rounded-full" />
                        <span className="text-[12px] font-light text-[#8a8a82]" style={{ fontFamily: "'Inter', sans-serif" }}>
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
