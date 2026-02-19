import PageHero from "@/components/PageHero";
import SectionLabel from "@/components/SectionLabel";
import Button from "@/components/Button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Über uns – The Forge by Vitality Lounge",
};

const values = [
  {
    label: "Substanz",
    body: "Wir bauen auf Qualität, nicht auf Volumen. Weniger Mitglieder, mehr Aufmerksamkeit.",
  },
  {
    label: "Präzision",
    body: "Jede Entscheidung im Club — vom Equipment bis zum Kursformat — ist durchdacht.",
  },
  {
    label: "Langfristigkeit",
    body: "Kurzfristige Motivation interessiert uns wenig. Wir bauen auf Gewohnheiten, die bleiben.",
  },
  {
    label: "Professionalität",
    body: "Qualifizierte Coaches, medizinische Nähe, transparente Kommunikation. Das ist unser Anspruch.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        label="Über The Forge"
        title={<>Eine Idee.<br /><em className="text-[#b8a882]">Ein Standard.</em></>}
        subtitle="The Forge entstand aus der Überzeugung, dass Fitness und Gesundheit kein Kompromiss sein müssen."
      />

      {/* Story section */}
      <section className="bg-[#fafaf8] py-24 lg:py-36">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            <div className="lg:col-span-5">
              <SectionLabel>Unsere Geschichte</SectionLabel>
              <h2
                className="text-[#0f0f0d] text-[clamp(2rem,4vw,3.5rem)] font-light leading-tight tracking-[-0.02em] mb-10"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                The Forge ist
                <br />
                das Ergebnis einer
                <br />
                <em className="text-[#b8a882]">klaren Haltung.</em>
              </h2>

              {/* Timeline */}
              <div className="flex flex-col gap-8">
                {[
                  { year: "2018", text: "Gründung der Vitality Lounge in Paderborn — Premium-Fitness für Menschen mit Anspruch." },
                  { year: "2022", text: "Erste Konzeptskizzen für The Forge: ein Training-Concept jenseits der Massenware." },
                  { year: "2024", text: "Eröffnung von The Forge in Bad Lippspringe — mit Gym, Kursen und Physiotherapie." },
                ].map((t) => (
                  <div key={t.year} className="flex gap-6">
                    <div className="flex flex-col items-center">
                      <p
                        className="text-[#b8a882] text-sm font-light"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                      >
                        {t.year}
                      </p>
                      <div className="w-px flex-1 bg-[#b8a882]/20 mt-2" />
                    </div>
                    <p
                      className="text-[#8a8a82] text-[13px] leading-relaxed font-light flex-1 pb-8"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {t.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="relative h-80 lg:h-full min-h-80 bg-gradient-to-br from-[#242420] via-[#1a1a17] to-[#0f0f0d] mb-8">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="absolute bottom-0 right-0 w-[60%] h-[60%] bg-[#b8a882]/8 blur-[80px]" />
                  <p
                    className="relative z-10 text-[#fafaf8]/20 text-[8rem] font-light tracking-tighter"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    TF
                  </p>
                </div>
              </div>

              <SectionLabel>Vitality Lounge</SectionLabel>
              <p
                className="text-[#8a8a82] text-[13px] leading-[1.9] font-light"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                The Forge ist Teil der Vitality Lounge Gruppe — dem führenden
                Premium-Fitness-Konzept in der Region Paderborn. Unsere Werte:
                Qualität, Kompetenz und ein langfristiger Blick auf Gesundheit.
                Was in Paderborn begann, hat in Bad Lippspringe ein zweites Zuhause gefunden.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-[#0f0f0d] py-24 lg:py-36">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
          <div className="mb-16">
            <SectionLabel>Was uns antreibt</SectionLabel>
            <h2
              className="text-[#fafaf8] text-[clamp(2rem,4vw,4rem)] font-light leading-tight tracking-[-0.02em]"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Unsere Werte.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-[#b8a882]/10">
            {values.map((v, i) => (
              <div key={v.label} className={`p-10 ${i % 2 === 0 ? "bg-[#1a1a17]" : "bg-[#0f0f0d]"} hover:bg-[#242420] transition-colors`}>
                <p
                  className="text-[#b8a882]/30 text-[5rem] font-light leading-none mb-4 tracking-tighter"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3
                  className="text-[#fafaf8] text-xl font-light mb-4"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {v.label}
                </h3>
                <p
                  className="text-[#8a8a82] text-[12px] leading-relaxed font-light"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {v.body}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 flex gap-4">
            <Button href="/contact" variant="primary">Uns besuchen</Button>
            <Button href="/membership" variant="ghost">Mitglied werden</Button>
          </div>
        </div>
      </section>
    </>
  );
}
