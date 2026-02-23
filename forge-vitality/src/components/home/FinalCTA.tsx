import Button from "@/components/Button";

export default function FinalCTA() {
  return (
    <section className="bg-[#0d0d0b] py-28 lg:py-40 relative overflow-hidden">
      {/* Left gold bar */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-[#c19255] to-transparent opacity-50" />

      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[700px] h-[350px] bg-[#c19255]/5 blur-[150px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-8 lg:px-16 text-center">
        {/* Label */}
        <div className="flex items-center gap-3 justify-center mb-8">
          <div className="w-5 h-px bg-[#c19255] flex-shrink-0" />
          <p
            className="text-[#c19255] text-[10px] tracking-[0.25em] uppercase font-semibold"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Bereit?
          </p>
          <div className="w-5 h-px bg-[#c19255] flex-shrink-0" />
        </div>

        {/* Headline */}
        <h2
          className="text-[#f8f7f2] uppercase leading-[0.9] tracking-[-0.01em] mb-10"
          style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: 800,
            fontSize: "clamp(3.5rem, 9vw, 9rem)",
          }}
        >
          Dein erstes{" "}
          <span className="text-[#c19255]">Training</span>
          <br />
          wartet.
        </h2>

        <p
          className="text-[#8a8a82] text-[14px] font-light leading-relaxed max-w-md mx-auto mb-14"
          style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 300 }}
        >
          Komm vorbei für eine Führung. Kein Druck, keine Verträge beim ersten Besuch.
          Überzeug dich selbst von der Qualität.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="/contact" variant="primary">
            Kostenloses Probetraining
          </Button>
          <Button href="/membership" variant="ghost">
            Mitgliedschaft ansehen
          </Button>
        </div>

        {/* Contact strip */}
        <div className="mt-20 pt-10 border-t border-[#c19255]/10 flex flex-col sm:flex-row items-center justify-center gap-8">
          <a
            href="tel:+4952529999999"
            className="text-[#8a8a82] hover:text-[#c19255] text-[11px] tracking-[0.16em] font-light transition-colors"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            +49 5252 999 999
          </a>
          <div className="hidden sm:block w-px h-4 bg-[#c19255]/20" />
          <a
            href="mailto:info@theforge-vitality.de"
            className="text-[#8a8a82] hover:text-[#c19255] text-[11px] tracking-[0.16em] font-light transition-colors"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            info@theforge-vitality.de
          </a>
          <div className="hidden sm:block w-px h-4 bg-[#c19255]/20" />
          <span
            className="text-[#8a8a82] text-[11px] tracking-[0.16em] font-light"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Musterstraße 1, 33175 Bad Lippspringe
          </span>
        </div>
      </div>
    </section>
  );
}
