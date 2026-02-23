import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-[#0d0d0b] flex flex-col overflow-hidden">

      {/* Background Image — kettlebell group training */}
      <div className="absolute inset-0">
        <Image
          src="/img-hero-kettlebell.jpg"
          alt="The Forge Training"
          fill
          className="object-cover object-center"
          priority
          quality={90}
        />
        {/* B&W treatment + strong left overlay for text legibility */}
        <div className="absolute inset-0 bg-[#0d0d0b]/30 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d0d0b] via-[#0d0d0b]/90 to-[#0d0d0b]/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0b]/95 via-transparent to-[#0d0d0b]/30" />
      </div>

      {/* Gold accent — left edge bar */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-[#c19255] to-transparent opacity-60" />

      {/* Main content */}
      <div className="relative z-10 flex flex-col justify-center flex-1 max-w-[1440px] mx-auto w-full px-8 lg:px-16 pt-32 pb-16">
        <div className="max-w-3xl">

          {/* Label */}
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-px bg-[#c19255]" />
            <span
              className="text-[#c19255] text-[11px] tracking-[0.22em] uppercase font-medium"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Hybrid Fitness · Krafttraining · Bad Lippspringe
            </span>
          </div>

          {/* Hero Headline */}
          <h1
            className="text-[#f8f7f2] leading-[0.88] tracking-[-0.01em] mb-8 uppercase"
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(4.5rem, 12vw, 11rem)",
            }}
          >
            STÄRKE.<br />
            <span className="text-[#c19255]">PRÄZISION.</span><br />
            LEISTUNG.
          </h1>

          {/* Subtext */}
          <p
            className="text-[#8a8a82] text-[15px] font-light leading-relaxed max-w-xl mb-12"
            style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 300 }}
          >
            Alles an einem Ort — Hybrid Fitness, Krafttraining und ein Self-Check
            Gym mit maximaler Flexibilität. Dein Training, dein Tempo.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/contact"
              className="inline-block bg-[#c19255] text-[#0d0d0b] text-[11px] tracking-[0.2em] uppercase font-semibold px-8 py-4 hover:bg-[#d4ab74] transition-colors duration-200"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Kostenlos Probetraining
            </Link>
            <Link
              href="/training"
              className="inline-block border border-[#f8f7f2]/30 text-[#f8f7f2] text-[11px] tracking-[0.2em] uppercase font-medium px-8 py-4 hover:border-[#c19255] hover:text-[#c19255] transition-colors duration-200"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Training ansehen
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom stats bar */}
      <div className="relative z-10 bg-[#181816]/90 backdrop-blur-sm border-t border-[#c19255]/15">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16 py-5 grid grid-cols-2 md:grid-cols-4 divide-x divide-[#c19255]/15">
          {[
            { value: "2", label: "Trainingswelten" },
            { value: "20+", label: "Kurse / Woche" },
            { value: "800 m²", label: "Performance Fläche" },
            { value: "Physio", label: "Im selben Haus" },
          ].map((s) => (
            <div key={s.label} className="px-6 first:pl-0 last:pr-0 py-1 text-center md:text-left">
              <p
                className="text-[#f8f7f2] leading-none mb-1 uppercase"
                style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "1.6rem" }}
              >
                {s.value}
              </p>
              <p
                className="text-[#5a5a55] text-[10px] tracking-[0.16em] uppercase font-medium"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
