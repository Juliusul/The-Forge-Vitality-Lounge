import PageHero from "@/components/PageHero";
import SectionLabel from "@/components/SectionLabel";
import Button from "@/components/Button";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Physiotherapie – The Forge by Vitality Lounge",
  description: "Physiotherapie direkt im Haus. Von der Behandlung zur Leistung — nahtlos.",
};

const services = [
  {
    title: "Manuelle Therapie",
    description: "Gezielte Behandlung von Gelenk- und Muskeldysfunktionen. Evidenzbasiert, präzise, nachhaltig.",
  },
  {
    title: "Bewegungsanalyse",
    description: "Funktionelle Bewertung deiner Haltung, Gangbild und Bewegungsmuster als Basis für gezieltes Training.",
  },
  {
    title: "Sportphysiotherapie",
    description: "Behandlung und Rehabilitation sportbedingter Verletzungen — von der Akutphase bis zur Rückkehr auf das Spielfeld.",
  },
  {
    title: "Präventive Diagnostik",
    description: "Schwachstellenanalyse bevor Probleme entstehen. Für Mitglieder mit Performance-Mitgliedschaft vergünstigt.",
  },
  {
    title: "Rehabilitation",
    description: "Post-OP Nachsorge und Wiederherstellung voller Funktion — in direktem Austausch mit unseren Coaches.",
  },
  {
    title: "Schmerztherapie",
    description: "Chronische Rückenschmerzen, Verspannungen, Überlastungsreaktionen — mit Ursachenfokus statt Symptombehandlung.",
  },
];

export default function PhysiotherapyPage() {
  return (
    <>
      <PageHero
        label="Physiotherapie"
        title={<>Von der Behandlung<br /><em className="text-[#b8a882]">zur Leistung.</em></>}
        subtitle="Physiotherapie und Training sind bei The Forge keine Gegensätze — sie ergänzen sich direkt, unter einem Dach."
      />

      {/* Intro section */}
      <section className="bg-[#fafaf8] py-24 lg:py-36">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start mb-20">
            <div className="lg:col-span-5">
              <SectionLabel>Das Konzept</SectionLabel>
              <h2
                className="text-[#0f0f0d] text-[clamp(2rem,4vw,3.5rem)] font-normal leading-tight tracking-[-0.02em] mb-8"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Medizinische
                <br />
                Nähe als
                <br />
                <em className="text-[#b8a882]">Vorteil.</em>
              </h2>
              <p
                className="text-[#8a8a82] text-[13px] leading-[1.9] font-light mb-6"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                In den meisten Gyms gibt es eine strikte Trennung: erst Arzt,
                dann Physio, dann irgendwann zurück ins Training — mit Informationsverlust
                an jeder Schnittstelle.
              </p>
              <p
                className="text-[#8a8a82] text-[13px] leading-[1.9] font-light mb-10"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Bei The Forge sind Physiotherapeuten und Coaches in direktem Austausch.
                Das Ergebnis: schnellere Genesung, sichereres Training, bessere
                Langzeitergebnisse.
              </p>

              <div className="border border-[#b8a882]/30 p-6 inline-block">
                <p className="text-[#b8a882] text-[9px] tracking-[0.22em] uppercase mb-3 font-light" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Für Mitglieder
                </p>
                <p className="text-[#0f0f0d] text-base font-light leading-snug" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Performance & Elite Mitglieder erhalten<br />10% Rabatt auf alle Physiotherapie-Leistungen.
                </p>
              </div>
            </div>

            {/* Real physio image */}
            <div className="lg:col-span-7 relative">
              <div className="relative h-[420px] lg:h-[520px] w-full overflow-hidden">
                <Image
                  src="/img-physio.jpg"
                  alt="Physiotherapie bei The Forge"
                  fill
                  className="object-cover object-top"
                  quality={85}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#fafaf8]/10 to-transparent" />
              </div>
              {/* Floating image badge */}
              <div className="absolute bottom-6 left-6 bg-[#0f0f0d]/90 backdrop-blur-sm border border-[#b8a882]/20 px-5 py-4">
                <p className="text-[#b8a882] text-[9px] tracking-[0.2em] uppercase font-light mb-1" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Partner im Haus
                </p>
                <p className="text-[#fafaf8] text-sm font-light" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Gleiche Adresse. Direkter Weg.
                </p>
              </div>
            </div>
          </div>

          {/* Services grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#e8e7e3]">
            {services.map((s) => (
              <div key={s.title} className="bg-[#fafaf8] p-8 hover:bg-[#f4f3ef] transition-colors">
                <h3
                  className="text-[#0f0f0d] text-lg font-normal mb-3"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {s.title}
                </h3>
                <p
                  className="text-[#8a8a82] text-[12px] leading-relaxed font-light"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {s.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Massage / Wellness image strip */}
      <section className="bg-[#f4f3ef] py-0 overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#c8c8bf]/30">
          {[
            { src: "/img-massage.jpg", label: "Massage & Therapie" },
            { src: "/img-hotstone.jpg", label: "Hot Stone Behandlung" },
            { src: "/img-lomilomi.jpg", label: "Lomi Lomi" },
          ].map((img) => (
            <div key={img.label} className="relative h-64 overflow-hidden group">
              <Image
                src={img.src}
                alt={img.label}
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                quality={80}
              />
              <div className="absolute inset-0 bg-[#0f0f0d]/40 group-hover:bg-[#0f0f0d]/20 transition-colors duration-500" />
              <div className="absolute bottom-4 left-4">
                <p className="text-[#fafaf8] text-[10px] tracking-[0.18em] uppercase font-light" style={{ fontFamily: "'Inter', sans-serif" }}>
                  {img.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0f0f0d] py-24 lg:py-36 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[500px] h-[300px] bg-[#b8a882]/6 blur-[100px] rounded-full" />
        </div>
        <div className="relative z-10 max-w-[1400px] mx-auto px-8 lg:px-16 text-center">
          <SectionLabel>Termin buchen</SectionLabel>
          <h2
            className="text-[#fafaf8] text-[clamp(2rem,4vw,4rem)] font-normal leading-tight tracking-[-0.02em] mb-8"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Bereit für den ersten Schritt?
          </h2>
          <p
            className="text-[#8a8a82] text-[13px] font-light leading-relaxed max-w-md mx-auto mb-12"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Ob Erstberatung, akutes Problem oder langfristige Prävention — wir finden
            gemeinsam den richtigen Einstieg.
          </p>
          <Button href="/contact" variant="primary">
            Physiotherapie-Termin anfragen
          </Button>
        </div>
      </section>
    </>
  );
}
