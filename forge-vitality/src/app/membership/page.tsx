import PageHero from "@/components/PageHero";
import SectionLabel from "@/components/SectionLabel";
import Button from "@/components/Button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mitgliedschaft – The Forge by Vitality Lounge",
  description: "Werde Mitglied bei The Forge. Drei Mitgliedschaftsstufen für jeden Anspruch.",
};

const plans = [
  {
    name: "Classes",
    tagline: "Geführtes Training",
    price: "89",
    features: [
      "Unbegrenzte Kursbesuche",
      "Kursplan-App Zugang",
      "Einführungsgespräch 60 min",
      "Community Events",
      "Pausierungsoption (1×/Jahr, 30 Tage)",
    ],
    excluded: ["Self Check Gym", "Personal Training", "Physiotherapie-Rabatt"],
    accent: false,
  },
  {
    name: "Performance",
    tagline: "Das Komplettpaket",
    price: "129",
    features: [
      "Unbegrenzte Kursbesuche",
      "Self Check Gym · 24/7",
      "Monatliches Coaching Check-in",
      "Physiotherapie-Rabatt 10%",
      "Priority Kursbuchung",
      "Gäste-Tageskarte (2×/Jahr)",
      "Pausierungsoption (2×/Jahr, 30 Tage)",
    ],
    excluded: ["1:1 Personal Training inbegriffen"],
    accent: true,
  },
  {
    name: "Elite",
    tagline: "Maximum Performance",
    price: "189",
    features: [
      "Alles aus Performance",
      "1× Personal Training/Monat",
      "Bewegungsanalyse jährlich",
      "Ernährungsberatung-Zugang",
      "Priority Support",
      "Gäste-Tageskarte (4×/Jahr)",
      "Unbegrenzte Pausierungen",
    ],
    excluded: [],
    accent: false,
  },
];

const faqs = [
  { q: "Gibt es eine Aufnahmegebühr?", a: "Nein. Bei The Forge zahlt man, was man bekommt — ohne versteckte Kosten." },
  { q: "Wie lange ist die Kündigungsfrist?", a: "Alle Mitgliedschaften sind monatlich kündbar mit 30 Tagen Frist." },
  { q: "Kann ich vor der Mitgliedschaft probetrainieren?", a: "Ja. Wir bieten ein kostenloses Probetraining an. Einfach Termin vereinbaren." },
  { q: "Kann ich zwischen den Stufen wechseln?", a: "Jederzeit. Der Wechsel gilt ab dem nächsten Monatsbeginn." },
  { q: "Gibt es Firmenkonditionen?", a: "Ja. Für Teams ab 5 Personen bieten wir individuelle Konditionen. Kontaktiere uns." },
];

export default function MembershipPage() {
  return (
    <>
      <PageHero
        label="Mitgliedschaft"
        title={<>Investiere in<br /><em className="text-[#b8a882]">dein Fundament.</em></>}
        subtitle="Keine versteckten Kosten. Keine Mindestlaufzeiten. Nur ehrliche Qualität."
      />

      {/* Plans */}
      <section className="bg-[#f4f3ef] py-24 lg:py-36">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-[#c8c8bf]/40">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`p-10 lg:p-12 ${plan.accent ? "bg-[#0f0f0d]" : "bg-[#f4f3ef]"}`}
              >
                <SectionLabel>{plan.tagline}</SectionLabel>
                <h2
                  className={`text-[2rem] font-light tracking-tight mb-2 ${plan.accent ? "text-[#fafaf8]" : "text-[#0f0f0d]"}`}
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {plan.name}
                </h2>
                <div className="flex items-baseline gap-1 my-8">
                  <span
                    className={`text-[4rem] font-light leading-none ${plan.accent ? "text-[#fafaf8]" : "text-[#0f0f0d]"}`}
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {plan.price}€
                  </span>
                  <span className="text-[#8a8a82] text-sm font-light" style={{ fontFamily: "'Inter', sans-serif" }}>
                    /Monat
                  </span>
                </div>

                <div className="h-px bg-[#b8a882]/20 mb-8" />

                <div className="mb-6">
                  <p className="text-[#b8a882] text-[10px] tracking-[0.18em] uppercase font-light mb-4" style={{ fontFamily: "'Inter', sans-serif" }}>
                    Inklusive
                  </p>
                  <ul className="flex flex-col gap-3">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-3">
                        <div className="w-px h-3.5 bg-[#b8a882] mt-1 flex-shrink-0" />
                        <span className={`text-[12px] font-light ${plan.accent ? "text-[#c8c8bf]" : "text-[#3a3a35]"}`} style={{ fontFamily: "'Inter', sans-serif" }}>
                          {f}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {plan.excluded.length > 0 && (
                  <div className="mb-8">
                    <p className="text-[#8a8a82] text-[10px] tracking-[0.18em] uppercase font-light mb-4" style={{ fontFamily: "'Inter', sans-serif" }}>
                      Nicht inklusive
                    </p>
                    <ul className="flex flex-col gap-3">
                      {plan.excluded.map((f) => (
                        <li key={f} className="flex items-start gap-3">
                          <div className="w-px h-3.5 bg-[#8a8a82]/30 mt-1 flex-shrink-0" />
                          <span className="text-[12px] font-light text-[#8a8a82]" style={{ fontFamily: "'Inter', sans-serif" }}>
                            {f}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <Button
                  href="/contact"
                  variant={plan.accent ? "primary" : "outline"}
                  className="w-full text-center"
                >
                  Jetzt anfragen
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#fafaf8] py-24 lg:py-36">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-4">
              <SectionLabel>FAQ</SectionLabel>
              <h2
                className="text-[#0f0f0d] text-[clamp(2rem,4vw,3.5rem)] font-light leading-tight tracking-[-0.02em]"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Fragen,
                <br />
                <em>die zählen.</em>
              </h2>
            </div>
            <div className="lg:col-span-8">
              <div className="flex flex-col divide-y divide-[#c8c8bf]/40">
                {faqs.map((faq) => (
                  <div key={faq.q} className="py-8">
                    <p
                      className="text-[#0f0f0d] text-base font-light mb-3"
                      style={{ fontFamily: "'Playfair Display', serif", fontSize: "18px" }}
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
