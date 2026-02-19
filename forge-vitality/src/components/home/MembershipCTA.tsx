import SectionLabel from "@/components/SectionLabel";
import Button from "@/components/Button";

const plans = [
  {
    name: "Classes",
    price: "89",
    period: "/Monat",
    features: [
      "Unbegrenzte Kursbesuche",
      "Kursplan-App",
      "Einführungsgespräch",
      "Community Zugang",
    ],
    accent: false,
  },
  {
    name: "Performance",
    price: "129",
    period: "/Monat",
    features: [
      "Kurse + Self Check Gym",
      "Zugang 7 Tage / 24h",
      "Monatliches Check-in",
      "Physiotherapie-Rabatt 10%",
    ],
    accent: true,
  },
  {
    name: "Elite",
    price: "189",
    period: "/Monat",
    features: [
      "Alles aus Performance",
      "1× PT-Session/Monat",
      "Bewegungsanalyse",
      "Priority Buchung",
    ],
    accent: false,
  },
];

export default function MembershipCTA() {
  return (
    <section className="bg-[#f4f3ef] py-28 lg:py-40">
      <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-24">
          <SectionLabel>Mitgliedschaft</SectionLabel>
          <h2
            className="text-[#0f0f0d] text-[clamp(2.5rem,5vw,4.5rem)] font-light leading-[0.95] tracking-[-0.02em]"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Dein Zugang
            <br />
            <em>zur Forge.</em>
          </h2>
        </div>

        {/* Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#c8c8bf]/40">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`p-10 lg:p-12 ${
                plan.accent ? "bg-[#0f0f0d]" : "bg-[#f4f3ef] hover:bg-[#fafaf8]"
              } transition-colors duration-300`}
            >
              <p
                className={`text-[10px] tracking-[0.22em] uppercase font-light mb-8 ${
                  plan.accent ? "text-[#b8a882]" : "text-[#b8a882]"
                }`}
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {plan.name}
              </p>

              <div className="flex items-baseline gap-1 mb-10">
                <span
                  className={`text-[3.5rem] font-light leading-none tracking-tight ${
                    plan.accent ? "text-[#fafaf8]" : "text-[#0f0f0d]"
                  }`}
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {plan.price}€
                </span>
                <span
                  className="text-[#8a8a82] text-sm font-light"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {plan.period}
                </span>
              </div>

              <div className="h-px bg-[#b8a882]/20 mb-8" />

              <ul className="flex flex-col gap-4 mb-10">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <div className="w-px h-3.5 bg-[#b8a882] mt-1 flex-shrink-0" />
                    <span
                      className={`text-[12px] font-light ${
                        plan.accent ? "text-[#c8c8bf]" : "text-[#3a3a35]"
                      }`}
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                href="/membership"
                variant={plan.accent ? "primary" : "outline"}
                className="w-full text-center justify-center"
              >
                {plan.accent ? "Jetzt starten" : "Mehr erfahren"}
              </Button>
            </div>
          ))}
        </div>

        <p
          className="text-center text-[#8a8a82] text-[11px] font-light mt-8 tracking-wider"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          Alle Preise inkl. MwSt. · Keine Aufnahmegebühr · Monatlich kündbar
        </p>
      </div>
    </section>
  );
}
