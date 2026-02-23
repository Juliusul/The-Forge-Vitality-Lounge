import SectionLabel from "@/components/SectionLabel";
import Button from "@/components/Button";

const plans = [
  {
    name: "Self-Check Gym",
    price: "44,90",
    period: "/Monat",
    features: [
      "05:00 – 23:00 Uhr Zugang",
      "365 Tage im Jahr",
      "PRECOR Premium Geräte",
      "Face-ID Zugang",
    ],
    accent: false,
  },
  {
    name: "Hybrid Paket",
    price: "74,90",
    period: "/Monat",
    features: [
      "Alles aus Self-Check Gym",
      "ELEIKO Functional Area",
      "Kleine Gruppen (max. 8)",
      "Performance Training",
    ],
    accent: true,
  },
];

export default function MembershipCTA() {
  return (
    <section className="bg-[#111110] py-24 lg:py-36">
      <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <SectionLabel center>Mitgliedschaft</SectionLabel>
          <h2
            className="text-[#f8f7f2] uppercase leading-[0.9] tracking-[-0.01em]"
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(3rem, 7vw, 6.5rem)",
            }}
          >
            Dein Zugang zur{" "}
            <span className="text-[#c19255]">Forge.</span>
          </h2>
        </div>

        {/* Plans */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#c19255]/10 max-w-4xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`p-10 lg:p-12 relative overflow-hidden ${
                plan.accent
                  ? "bg-[#1a1a16]"
                  : "bg-[#181816] hover:bg-[#1e1e1c]"
              } transition-colors duration-300`}
            >
              {/* Gold top accent for featured plan */}
              {plan.accent && (
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#c19255] via-[#d4ab74] to-[#c19255]" />
              )}

              <p
                className="text-[#c19255] text-[10px] tracking-[0.25em] uppercase font-semibold mb-6"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {plan.name}
              </p>

              <p
                className="text-[#5a5a55] text-[11px] font-light mb-1"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                ab
              </p>
              <div className="flex items-baseline gap-1 mb-8">
                <span
                  className="text-[#f8f7f2] leading-none"
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 700,
                    fontSize: "3.5rem",
                    letterSpacing: "-0.02em",
                  }}
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

              <div className="h-px bg-[#c19255]/15 mb-8" />

              <ul className="flex flex-col gap-4 mb-10">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-3">
                    <div className="w-1 h-1 bg-[#c19255] flex-shrink-0 rounded-full" />
                    <span
                      className="text-[12px] font-light text-[#b8b8b0]"
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
          className="text-center text-[#5a5a55] text-[11px] font-light mt-8 tracking-wider"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          Alle Preise inkl. MwSt. · Aktivierungsgebühr 14,90 €
        </p>
      </div>
    </section>
  );
}
