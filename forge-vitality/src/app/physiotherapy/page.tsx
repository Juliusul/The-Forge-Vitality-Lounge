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
    description: "Schwachstellenanalyse bevor Probleme entstehen. Direkt im Haus verfügbar für alle Mitglieder.",
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
        title={<>Von der Behandlung<br /><span className="text-[#c19255]">zur Leistung.</span></>}
        subtitle="Physiotherapie und Training sind bei The Forge keine Gegensätze — sie ergänzen sich direkt, unter einem Dach."
      />

      {/* Intro section */}
      <section className="bg-[#0d0d0b] py-24 lg:py-36">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start mb-20">
            <div className="lg:col-span-5">
              <SectionLabel>Das Konzept</SectionLabel>
              <h2
                className="text-[#f8f7f2] uppercase leading-[0.9] tracking-[-0.01em] mb-8"
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 800,
                  fontSize: "clamp(2.5rem, 5vw, 5rem)",
                }}
              >
                Medizinische{" "}
                <span className="text-[#c19255]">Nähe</span>
                <br />
                als Vorteil.
              </h2>
              <p className="text-[#8a8a82] text-[13px] leading-[1.85] font-light mb-6" style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 300 }}>
                In den meisten Gyms gibt es eine strikte Trennung: erst Arzt,
                dann Physio, dann irgendwann zurück ins Training — mit Informationsverlust
                an jeder Schnittstelle.
              </p>
              <p className="text-[#8a8a82] text-[13px] leading-[1.85] font-light mb-10" style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 300 }}>
                Bei The Forge sind Physiotherapeuten und Coaches in direktem Austausch.
                Das Ergebnis: schnellere Genesung, sichereres Training, bessere
                Langzeitergebnisse.
              </p>

              <div className="border border-[#c19255]/25 p-6 inline-block">
                <p className="text-[#c19255] text-[9px] tracking-[0.22em] uppercase mb-2 font-semibold" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Für Mitglieder
                </p>
                <p className="text-[#f8f7f2] text-[13px] font-light leading-snug" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Hybrid Paket Mitglieder profitieren von<br />direkter Anbindung an unsere Physiotherapie.
                </p>
              </div>
            </div>

            {/* Physio image */}
            <div className="lg:col-span-7 relative">
              <div className="relative h-[420px] lg:h-[520px] w-full overflow-hidden">
                <Image
                  src="/img-physio.jpg"
                  alt="Physiotherapie bei The Forge"
                  fill
                  className="object-cover object-top"
                  quality={85}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0b]/30 to-transparent" />
              </div>
              <div className="absolute bottom-6 left-6 bg-[#0d0d0b]/90 backdrop-blur-sm border border-[#c19255]/20 px-5 py-4">
                <p className="text-[#c19255] text-[9px] tracking-[0.2em] uppercase font-semibold mb-1" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Partner im Haus
                </p>
                <p className="text-[#f8f7f2] text-[13px] font-light" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Gleiche Adresse. Direkter Weg.
                </p>
              </div>
            </div>
          </div>

          {/* Services grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#c19255]/10">
            {services.map((s) => (
              <div key={s.title} className="bg-[#181816] p-8 hover:bg-[#1e1e1c] transition-colors group">
                <h3
                  className="text-[#f8f7f2] uppercase mb-3 group-hover:text-[#c19255] transition-colors"
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 700,
                    fontSize: "1.1rem",
                    letterSpacing: "0.04em",
                  }}
                >
                  {s.title}
                </h3>
                <div className="h-px w-6 bg-[#c19255]/30 mb-4 group-hover:w-10 group-hover:bg-[#c19255]/60 transition-all duration-300" />
                <p className="text-[#8a8a82] text-[12px] leading-relaxed font-light" style={{ fontFamily: "'Inter', sans-serif" }}>
                  {s.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image strip */}
      <section className="bg-[#0d0d0b] py-0 overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#c19255]/8">
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
              <div className="absolute inset-0 bg-[#0d0d0b]/50 group-hover:bg-[#0d0d0b]/30 transition-colors duration-500" />
              <div className="absolute bottom-4 left-4">
                <p className="text-[#f8f7f2] text-[10px] tracking-[0.18em] uppercase font-semibold" style={{ fontFamily: "'Inter', sans-serif" }}>
                  {img.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#111110] py-24 lg:py-36 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[500px] h-[300px] bg-[#c19255]/5 blur-[100px] rounded-full" />
        </div>
        <div className="relative z-10 max-w-[1440px] mx-auto px-8 lg:px-16 text-center">
          <SectionLabel center>Termin buchen</SectionLabel>
          <h2
            className="text-[#f8f7f2] uppercase leading-[0.9] tracking-[-0.01em] mb-8"
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(2.5rem, 6vw, 5.5rem)",
            }}
          >
            Bereit für den{" "}
            <span className="text-[#c19255]">ersten Schritt?</span>
          </h2>
          <p className="text-[#8a8a82] text-[13px] font-light leading-relaxed max-w-md mx-auto mb-12" style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 300 }}>
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
