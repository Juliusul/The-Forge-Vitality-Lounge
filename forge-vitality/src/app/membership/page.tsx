import PageHero from "@/components/PageHero";
import SectionLabel from "@/components/SectionLabel";
import PricingCards from "@/components/PricingCards";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mitgliedschaft – The Forge by Vitality Lounge",
  description: "Werde Mitglied bei The Forge. Smart Gym oder Hybrid Fitness – Functional Fitness und Krafttraining in Bad Lippspringe.",
};

const optionalModules = [
  { name: "Hybrid Fitness Kurse", price: "+ 10 €/Monat", detail: "Strength · Conditioning Sessions" },
  { name: "10er Karte Hybridkurse", price: "150,00 €", detail: "10 Einheiten · frei einlösbar" },
  { name: "Personal Training", price: "auf Anfrage", detail: "Individuell buchbar" },
  { name: "Athletiktraining", price: "auf Anfrage", detail: "Für Vereine & Einzelsportler" },
  { name: "Geräteeinweisung", price: "29,90 €", detail: "Pro Termin" },
];

const faqs = [
  { q: "Wie funktioniert der Smart Gym Zugang?", a: "Der Zugang erfolgt per Face-ID. Du kannst das Smart Gym täglich von 05:00 bis 23:00 Uhr eigenverantwortlich nutzen — 365 Tage im Jahr. Das Studio ist videoüberwacht." },
  { q: "Was ist der Unterschied zwischen Smart Gym und Hybrid Fitness?", a: "Das Smart Gym ist eigenverantwortliches Gerätetraining mit PRECOR Geräten. Hybrid Fitness erweitert deine Mitgliedschaft um Strength & Conditioning Sessions, Trainingsplanung und Zugang zur ELEIKO Functional Area." },
  { q: "Bekomme ich einen Trainingsplan?", a: "Im Hybrid Fitness Paket erhältst du alle 3 Monate einen individuellen Trainingsplan. Im Smart Gym trainierst du eigenverantwortlich." },
  { q: "Gibt es Personal Training?", a: "Ja. Personal Training mit Erik Brückner ist als Zusatzleistung auf Anfrage verfügbar — unabhängig von deiner Mitgliedschaft. Angebote: Techniktraining, Hybrid Fitness Coaching, Smart Gym Training, Sportspezifisches Athletiktraining." },
  { q: "Für welche Altersgruppe ist The Forge geeignet?", a: "The Forge ist für Menschen von 18 bis 80 Jahren konzipiert — Alltagsathleten, Vereinssportler und Freizeitsportler. Unter 18 benötigen wir eine Einverständniserklärung eines Erziehungsberechtigten." },
  { q: "Was ist das Vorverkaufsangebot?", a: "Sichere dir jetzt deine Mitgliedschaft zum Vorverkaufspreis. Limitierte Plätze, feste Konditionen — kontaktiere uns für Details." },
];

export default function MembershipPage() {
  return (
    <>
      <PageHero
        label="Mitgliedschaft"
        title={<>Smart Gym.<br /><span className="text-[#c19255]">Hybrid Fitness.</span></>}
        subtitle="Das Smart Gym ist in jeder Mitgliedschaft enthalten. Hybrid Fitness erweitert dein Training um Strength & Conditioning Kurse und Trainingsplanung."
      />

      {/* Plans */}
      <section className="bg-[#0d0d0b] py-24 lg:py-36">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
          <PricingCards />

          {/* Optionale Zusatzleistungen */}
          <div className="mt-16">
            <SectionLabel>Optionale Zusatzleistungen</SectionLabel>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#c19255]/10">
              {optionalModules.map((mod) => (
                <div key={mod.name} className="bg-[#181816] p-6 hover:bg-[#1e1e1c] transition-colors">
                  <p
                    className="text-[#f8f7f2] uppercase mb-2"
                    style={{
                      fontFamily: "'Barlow Condensed', sans-serif",
                      fontWeight: 700,
                      fontSize: "1rem",
                      letterSpacing: "0.04em",
                    }}
                  >
                    {mod.name}
                  </p>
                  <p
                    className="text-[#c19255] text-[13px] font-semibold"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {mod.price}
                  </p>
                  {mod.detail && (
                    <p
                      className="text-[#5a5a55] text-[11px] font-light mt-1"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {mod.detail}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          <p
            className="text-center text-[#5a5a55] text-[11px] font-light mt-8 tracking-wider"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Alle Preise inkl. MwSt. · Aktivierungsgebühr 14,90 €
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#111110] py-24 lg:py-36">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-4">
              <SectionLabel>FAQ</SectionLabel>
              <h2
                className="text-[#f8f7f2] uppercase leading-[0.9] tracking-[-0.01em]"
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 800,
                  fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
                }}
              >
                Fragen,{" "}
                <span className="text-[#c19255]">die zählen.</span>
              </h2>
            </div>
            <div className="lg:col-span-8">
              <div className="flex flex-col divide-y divide-[#c19255]/10">
                {faqs.map((faq) => (
                  <div key={faq.q} className="py-8">
                    <p
                      className="text-[#f8f7f2] uppercase mb-3"
                      style={{
                        fontFamily: "'Barlow Condensed', sans-serif",
                        fontWeight: 700,
                        fontSize: "1.05rem",
                        letterSpacing: "0.04em",
                      }}
                    >
                      {faq.q}
                    </p>
                    <p
                      className="text-[#8a8a82] text-[13px] font-light leading-relaxed"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {faq.a}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
