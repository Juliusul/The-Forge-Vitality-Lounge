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
    body: "Qualifizierte Coaches, transparente Kommunikation und ein leistungsorientierter Ansatz. Das ist unser Anspruch.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        label="Über The Forge"
        title={<>Eine Idee.<br /><span className="text-[#c19255]">Ein Standard.</span></>}
        subtitle="The Forge entstand aus der Überzeugung, dass Hybrid Fitness, Krafttraining und leistungsorientiertes Training kein Kompromiss sein müssen."
      />

      {/* Story section */}
      <section className="bg-[#0d0d0b] py-24 lg:py-36">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            <div className="lg:col-span-5">
              <SectionLabel>Unsere Geschichte</SectionLabel>
              <h2
                className="text-[#f8f7f2] uppercase leading-[0.9] tracking-[-0.01em] mb-10"
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 800,
                  fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
                }}
              >
                The Forge ist das Ergebnis einer{" "}
                <span className="text-[#c19255]">klaren Haltung.</span>
              </h2>

              {/* Timeline */}
              <div className="flex flex-col gap-8">
                {[
                  { year: "2021", text: "Gründung der Vitality Lounge in Paderborn — Premium-Fitness für Menschen mit Anspruch." },
                  { year: "2025", text: "Erste Konzeptskizzen für The Forge: ein Training-Concept jenseits der Massenware." },
                  { year: "2026", text: "Eröffnung von The Forge in Bad Lippspringe — Hybrid Fitness, Smart Gym und Physiotherapie unter einem Dach." },
                ].map((t) => (
                  <div key={t.year} className="flex gap-6">
                    <div className="flex flex-col items-center">
                      <p
                        className="text-[#c19255] font-semibold"
                        style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "1rem", letterSpacing: "0.08em" }}
                      >
                        {t.year}
                      </p>
                      <div className="w-px flex-1 bg-[#c19255]/20 mt-2" />
                    </div>
                    <p className="text-[#8a8a82] text-[13px] leading-relaxed font-light flex-1 pb-8" style={{ fontFamily: "'Inter', sans-serif" }}>
                      {t.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="relative h-80 lg:h-[440px] min-h-80 bg-[#181816] mb-8 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="absolute bottom-0 right-0 w-[60%] h-[60%] bg-[#c19255]/6 blur-[80px]" />
                  <p
                    className="relative z-10 text-[#c19255]/10 tracking-tighter"
                    style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "10rem" }}
                  >
                    TF
                  </p>
                </div>
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#c19255] to-transparent opacity-50" />
              </div>

              <SectionLabel>Vitality Lounge</SectionLabel>
              <p className="text-[#8a8a82] text-[13px] leading-[1.85] font-light" style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 300 }}>
                The Forge ist Teil der Vitality Lounge Gruppe — dem führenden
                Premium-Fitness-Konzept in der Region Paderborn. Unsere Werte:
                Qualität, Kompetenz und ein langfristiger Blick auf Leistung und Training.
                Was in Paderborn begann, hat in Bad Lippspringe ein zweites Zuhause gefunden.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-[#111110] py-24 lg:py-36">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
          <div className="mb-16">
            <SectionLabel>Was uns antreibt</SectionLabel>
            <h2
              className="text-[#f8f7f2] uppercase leading-[0.9] tracking-[-0.01em]"
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 800,
                fontSize: "clamp(3rem, 7vw, 6.5rem)",
              }}
            >
              Unsere{" "}
              <span className="text-[#c19255]">Werte.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-[#c19255]/10">
            {values.map((v, i) => (
              <div key={v.label} className={`p-10 ${i % 2 === 0 ? "bg-[#181816]" : "bg-[#1a1a18]"} hover:bg-[#222220] transition-colors group`}>
                <p
                  className="text-[#c19255]/20 leading-none mb-4 group-hover:text-[#c19255]/35 transition-colors"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "5rem" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3
                  className="text-[#f8f7f2] uppercase mb-4"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "1.4rem", letterSpacing: "0.05em" }}
                >
                  {v.label}
                </h3>
                <p className="text-[#8a8a82] text-[12px] leading-relaxed font-light" style={{ fontFamily: "'Inter', sans-serif" }}>
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
