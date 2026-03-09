import PageHero from "@/components/PageHero";
import SectionLabel from "@/components/SectionLabel";
import Button from "@/components/Button";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Physiotherapie Bad Lippspringe – Vitality Physiotherapie | The Forge",
  description:
    "Physiotherapie in Bad Lippspringe direkt bei The Forge. Krankengymnastik, Manuelle Therapie, Sportphysiotherapie, Kryosauna & Skillcourt. Jetzt Termin buchen: 052529776745.",
  keywords: [
    "Physiotherapie Bad Lippspringe",
    "Physiotherapeut Bad Lippspringe",
    "Krankengymnastik Bad Lippspringe",
    "Manuelle Therapie Bad Lippspringe",
    "Sportphysiotherapie Paderborn",
    "Kryosauna Bad Lippspringe",
    "Vitality Physiotherapie",
    "The Forge Vitality Lounge",
  ],
  openGraph: {
    title: "Physiotherapie Bad Lippspringe – Vitality Physiotherapie",
    description:
      "Evidenzbasierte Physiotherapie direkt bei The Forge. Krankengymnastik, Manuelle Therapie, Sportreha, Kryosauna und Skillcourt unter einem Dach.",
    type: "website",
    locale: "de_DE",
  },
};

const services = [
  {
    title: "Krankengymnastik",
    description:
      "Mobilisation, Dehnung, Entspannung und Steigerung von Muskelkraft und Ausdauer. Evidenzbasierte Behandlung bei Erkrankungen und Verletzungen des Bewegungsapparats.",
  },
  {
    title: "Krankengymnastik am Gerät",
    description:
      "Gerätegestützte aktive Therapie zur Verbesserung von Kraft, Ausdauer, Beweglichkeit und Koordination — mit medizinischen Trainingsgeräten.",
  },
  {
    title: "Manuelle Therapie",
    description:
      "Schonende Mobilisation der Gelenke mit den Händen. Gezieltes Auffinden und Behandeln von Dysfunktionen am Bewegungsapparat.",
  },
  {
    title: "Sportphysiotherapie & Reha",
    description:
      "Behandlung und Rehabilitation sportbedingter Verletzungen — von der Akutphase bis zur Rückkehr in den Sport. In direktem Austausch mit unseren Coaches.",
  },
  {
    title: "Kryosauna & Kältetherapie",
    description:
      "Schmerzreduktion und Regeneration durch Kältetherapie bis -180°C. Wirksam bei Gelenkentzündungen, Rheuma und zur Stoffwechselanregung.",
  },
  {
    title: "Skillcourt-Training",
    description:
      "Neurologisches und motorisches Training zur Remobilisation. Gezieltes Beweglichkeitstraining unter physiotherapeutischer Betreuung.",
  },
  {
    title: "Manuelle Lymphdrainage",
    description:
      "Förderung des Abtransports von Gewebsflüssigkeit durch schonende manuelle Techniken. Besonders wirksam nach Operationen und bei Lymphstauungen.",
  },
  {
    title: "PNF",
    description:
      "Propriozeptive Neuromuskuläre Fazilitation — Normalisierung des Muskeltonus, Verbesserung der Koordination und Steigerung des Bewegungsausmaßes.",
  },
  {
    title: "CMD",
    description:
      "Craniomandibuläre Dysfunktion — Kiefergelenksbehandlung bei Kieferschmerzen, Knackgeräuschen, Mundöffnungseinschränkung, Kopfschmerzen und Schwindel.",
  },
];

export default function PhysiotherapyPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "PhysicalTherapy",
    name: "Vitality Physiotherapie Bad Lippspringe",
    description:
      "Physiotherapiepraxis in Bad Lippspringe mit Krankengymnastik, Manueller Therapie, Sportphysiotherapie, Kryosauna und Skillcourt.",
    url: "https://forge-vitality.vercel.app/physiotherapy",
    telephone: "+4952529776745",
    email: "physiobali@vitality-lounge.de",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Auguste-Viktoria-Allee 19a",
      addressLocality: "Bad Lippspringe",
      postalCode: "33175",
      addressCountry: "DE",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "19:00",
      },
    ],
    medicalSpecialty: [
      "Krankengymnastik",
      "Manuelle Therapie",
      "Sportphysiotherapie",
      "Lymphdrainage",
    ],
    parentOrganization: {
      "@type": "LocalBusiness",
      name: "The Forge by Vitality Lounge",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Auguste-Viktoria-Allee 19a",
        addressLocality: "Bad Lippspringe",
        postalCode: "33175",
        addressCountry: "DE",
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageHero
        label="Physiotherapie Bad Lippspringe"
        title={
          <>
            Beweglich.
            <br />
            <span className="text-[#c19255]">Schmerzfrei.</span>
          </>
        }
        subtitle="Vitality Physiotherapie direkt im Haus. Evidenzbasierte Therapiemethoden und gezieltes Rehabilitationstraining — unter einem Dach mit The Forge in Bad Lippspringe."
      />

      {/* Intro section */}
      <section
        className="bg-[#0d0d0b] py-24 lg:py-36"
        aria-labelledby="physio-konzept-heading"
      >
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start mb-20">
            <div className="lg:col-span-5">
              <SectionLabel>Das Konzept</SectionLabel>
              <h2
                id="physio-konzept-heading"
                className="text-[#f8f7f2] uppercase leading-[0.9] tracking-[-0.01em] mb-8"
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 800,
                  fontSize: "clamp(2.5rem, 5vw, 5rem)",
                }}
              >
                Therapie &{" "}
                <span className="text-[#c19255]">Training</span>
                <br />
                unter einem Dach.
              </h2>
              <p
                className="text-[#8a8a82] text-[13px] leading-[1.85] font-light mb-6"
                style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 300 }}
              >
                Unsere erfahrenen Physiotherapeuten in Bad Lippspringe
                entwickeln individuelle Behandlungspläne, um körperliche
                Beschwerden und Bewegungseinschränkungen effektiv zu lindern.
                Dabei setzen wir auf eine Kombination aus bewährten und modernen
                Therapieansätzen — von Krankengymnastik bis Kryosauna.
              </p>
              <p
                className="text-[#8a8a82] text-[13px] leading-[1.85] font-light mb-10"
                style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 300 }}
              >
                Nach der klassischen Physiotherapie unterstützen wir dich
                gezielt an modernen Trainingsgeräten — Physiotherapeuten und
                Coaches sind in direktem Austausch. Das Ergebnis: schnellere
                Genesung, sichereres Training, bessere Langzeitergebnisse.
              </p>

              {/* USPs */}
              <div className="flex flex-col gap-3 mb-10">
                {[
                  "Direkt neben The Forge — kein Weg zwischen Therapie & Training",
                  "Krankenkassen-anerkannte Leistungen auf Rezept",
                  "Sportphysiotherapie & Reha in Kooperation mit den Coaches",
                  "Kryosauna & Skillcourt als moderne Ergänzungstherapien",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="w-1 h-1 bg-[#c19255] flex-shrink-0 rounded-full mt-[6px]" />
                    <span
                      className="text-[12px] text-[#b8b8b0] font-light leading-relaxed"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <div className="border border-[#c19255]/25 p-6 inline-block">
                <p
                  className="text-[#c19255] text-[9px] tracking-[0.22em] uppercase mb-2 font-semibold"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Termin · Bad Lippspringe
                </p>
                <p
                  className="text-[#f8f7f2] text-[13px] font-light leading-relaxed"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  <a
                    href="tel:+4952529776745"
                    className="hover:text-[#c19255] transition-colors"
                    aria-label="Vitality Physiotherapie Bad Lippspringe anrufen"
                  >
                    052529776745
                  </a>
                  <br />
                  <a
                    href="mailto:physiobali@vitality-lounge.de"
                    className="hover:text-[#c19255] transition-colors text-[11px]"
                    aria-label="E-Mail an Vitality Physiotherapie senden"
                  >
                    physiobali@vitality-lounge.de
                  </a>
                </p>
              </div>
            </div>

            {/* Physio image */}
            <div className="lg:col-span-7 relative">
              <div className="relative h-[420px] lg:h-[520px] w-full overflow-hidden">
                <Image
                  src="/img-physio.jpg"
                  alt="Physiotherapeut bei Vitality Physiotherapie Bad Lippspringe behandelt Patienten — Manuelle Therapie und Sportphysiotherapie direkt bei The Forge"
                  fill
                  className="object-cover object-center"
                  quality={85}
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0b]/30 to-transparent" />
              </div>
              <div className="absolute bottom-6 left-6 bg-[#0d0d0b]/90 backdrop-blur-sm border border-[#c19255]/20 px-5 py-4">
                <p
                  className="text-[#c19255] text-[9px] tracking-[0.2em] uppercase font-semibold mb-1"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Vitality Physiotherapie
                </p>
                <p
                  className="text-[#f8f7f2] text-[13px] font-light"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Gleiche Adresse. Direkter Weg.
                </p>
              </div>
            </div>
          </div>

          {/* Services grid */}
          <SectionLabel>Unsere Leistungen in Bad Lippspringe</SectionLabel>
          <h2
            className="sr-only"
          >
            Physiotherapeutische Leistungen bei Vitality Physiotherapie Bad Lippspringe
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#c19255]/10 mt-8">
            {services.map((s) => (
              <article
                key={s.title}
                className="bg-[#181816] p-8 hover:bg-[#1e1e1c] transition-colors group"
              >
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
                <p
                  className="text-[#8a8a82] text-[12px] leading-relaxed font-light"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {s.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Kryosauna highlight */}
      <section
        className="bg-[#111110] py-24 lg:py-36 relative overflow-hidden"
        aria-labelledby="kryo-heading"
      >
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-[#c19255] to-transparent opacity-30" />
        <div className="absolute bottom-0 right-0 w-[50%] h-[60%] bg-[#c19255]/4 blur-[120px]" />
        <div className="relative z-10 max-w-[1440px] mx-auto px-8 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            <div>
              <SectionLabel>Schmerzreduktion & Regeneration</SectionLabel>
              <h2
                id="kryo-heading"
                className="text-[#f8f7f2] uppercase leading-[0.9] tracking-[-0.01em] mb-8"
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 800,
                  fontSize: "clamp(3rem, 6vw, 5.5rem)",
                }}
              >
                Kryosauna &{" "}
                <span className="text-[#c19255]">Kältetherapie</span>
              </h2>
              <p
                className="text-[#8a8a82] text-[13px] leading-[1.85] font-light mb-10"
                style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 300 }}
              >
                Unsere hochmoderne Kryosauna in Bad Lippspringe bietet eine
                effektive Möglichkeit zur Schmerztherapie und Regeneration. Die
                Behandlung mit Temperaturen bis -180°C für maximal drei Minuten
                hat nachweisliche Wirkung bei akuten und chronischen Beschwerden.
              </p>

              <ul className="flex flex-col gap-4">
                {[
                  "Erkrankungen der Gelenke, des Nerven- und Immunsystems positiv beeinflussen",
                  "Stoffwechsel und Kreislauf anregen",
                  "Durchblutung verbessern und Entzündungen lindern",
                  "Unterstützend bei Rheuma, Arthritis und Fibromyalgie",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-1 h-1 bg-[#c19255] flex-shrink-0 rounded-full mt-[6px]" />
                    <span
                      className="text-[#8a8a82] text-[12px] font-light leading-relaxed"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <SectionLabel>Neurologisch & Motorisch</SectionLabel>
              <h2
                className="text-[#f8f7f2] uppercase leading-[0.9] tracking-[-0.01em] mb-8"
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 800,
                  fontSize: "clamp(3rem, 6vw, 5.5rem)",
                }}
              >
                Skillcourt{" "}
                <span className="text-[#c19255]">Training</span>
              </h2>
              <p
                className="text-[#8a8a82] text-[13px] leading-[1.85] font-light mb-10"
                style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 300 }}
              >
                Gezieltes Beweglichkeitstraining unter physiotherapeutischer
                Betreuung. Der Skillcourt ermöglicht neurologische und motorische
                Remobilisation sowie die Verbesserung von Reaktion, Koordination
                und Körperwahrnehmung — ideal als Ergänzung zur klassischen
                Physiotherapie in Bad Lippspringe.
              </p>

              <ul className="flex flex-col gap-4">
                {[
                  "Förderung der allgemeinen Leistungsfähigkeit",
                  "Verbesserung der Koordination und Reaktionsfähigkeit",
                  "Prävention und Rehabilitation neurologischer Einschränkungen",
                  "Direkter Übergang vom Skillcourt zum Kraft- und Konditionstraining",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-1 h-1 bg-[#c19255] flex-shrink-0 rounded-full mt-[6px]" />
                    <span
                      className="text-[#8a8a82] text-[12px] font-light leading-relaxed"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0d0d0b] py-24 lg:py-36 relative overflow-hidden">
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
            Physiotherapie in{" "}
            <span className="text-[#c19255]">Bad Lippspringe</span>
          </h2>
          <p
            className="text-[#8a8a82] text-[13px] font-light leading-relaxed max-w-md mx-auto mb-12"
            style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 300 }}
          >
            Ob Erstberatung, akutes Problem oder langfristige Prävention — ruf
            uns an oder schreib uns. Wir finden gemeinsam den richtigen
            Einstieg für deine Gesundheit.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="tel:+4952529776745" variant="primary">
              052529776745 anrufen
            </Button>
            <Button href="/contact" variant="ghost">
              Nachricht senden
            </Button>
          </div>
          <p
            className="text-[#5a5a55] text-[10px] font-light mt-6 tracking-wider"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            physiobali@vitality-lounge.de · Auguste-Viktoria-Allee 19a · 33175 Bad Lippspringe
          </p>
        </div>
      </section>
    </>
  );
}
