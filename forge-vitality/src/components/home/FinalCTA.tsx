import Button from "@/components/Button";

export default function FinalCTA() {
  return (
    <section className="bg-[#0f0f0d] py-28 lg:py-40 relative overflow-hidden">
      {/* Glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[600px] h-[300px] bg-[#b8a882]/6 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-8 lg:px-16 text-center">
        <p
          className="text-[#b8a882] text-[10px] tracking-[0.25em] uppercase font-light mb-8"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          Bereit?
        </p>
        <h2
          className="text-[#fafaf8] text-[clamp(2.5rem,6vw,6rem)] font-light leading-[0.92] tracking-[-0.02em] mb-10"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          Dein erstes
          <br />
          <em className="text-[#b8a882]">Training wartet.</em>
        </h2>
        <p
          className="text-[#8a8a82] text-[13px] font-light leading-relaxed max-w-md mx-auto mb-14"
          style={{ fontFamily: "'Inter', sans-serif" }}
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
        <div className="mt-20 pt-12 border-t border-[#b8a882]/10 flex flex-col sm:flex-row items-center justify-center gap-8">
          <a
            href="tel:+4952529999999"
            className="text-[#8a8a82] hover:text-[#c8c8bf] text-[11px] tracking-[0.16em] font-light transition-colors"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            +49 5252 999 999
          </a>
          <div className="hidden sm:block w-px h-4 bg-[#b8a882]/20" />
          <a
            href="mailto:info@theforge-vitality.de"
            className="text-[#8a8a82] hover:text-[#c8c8bf] text-[11px] tracking-[0.16em] font-light transition-colors"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            info@theforge-vitality.de
          </a>
          <div className="hidden sm:block w-px h-4 bg-[#b8a882]/20" />
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
