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
              Hybrid Fitness Studio · Bad Lippspringe
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
            TRAIN.<br />
            <span className="text-[#c19255]">PERFORM.</span><br />
            REPEAT.
          </h1>

          {/* Subtext */}
          <p
            className="text-[#8a8a82] text-[15px] font-light leading-relaxed max-w-xl mb-12"
            style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 300 }}
          >
            Functional Fitness, Kraft- &amp; Konditionstraining und ein Smart Gym —
            alles an einem Ort. Langhantel, Kettlebell, Eigenkörpergewicht.
            Strukturiert. Effizient. Leistungsorientiert.
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

          {/* Vorverkauf Banner */}
          <div className="mt-8 border border-[#c19255]/25 bg-[#181816]/60 backdrop-blur-sm px-6 py-4 inline-flex items-center gap-4">
            <span
              className="text-[#c19255] text-[9px] tracking-[0.22em] uppercase font-semibold flex-shrink-0"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Coming Soon
            </span>
            <div className="w-px h-4 bg-[#c19255]/30 flex-shrink-0" />
            <span
              className="text-[#f8f7f2] text-[12px] font-light"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Vorverkaufsangebot sichern — limitierte Plätze zum Eröffnungspreis
            </span>
          </div>
        </div>
      </div>

      {/* Bottom stats bar */}
      <div className="relative z-10 bg-[#181816]/90 backdrop-blur-sm border-t border-[#c19255]/15">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16 grid grid-cols-2 md:grid-cols-4">
          {[
            { id: "a", value: "Max. 8", label: <>Teilnehmer<br />pro Kurs</> },
            { id: "b", value: "3", label: <>Trainings-<br />modalitäten</> },
            { id: "c", value: "Smart Gym", label: <>05–23 Uhr<br />inklusive</> },
            { id: "d", value: "Physio", label: <>Im selben<br />Haus</> },
          ].map((s, i) => (
            <div
              key={s.id}
              className={[
                "py-5 px-5 md:px-6 text-center md:text-left border-[#c19255]/15",
                i % 2 === 0 ? "border-r md:border-r-0" : "",
                i < 2 ? "border-b md:border-b-0" : "",
                i > 0 ? "md:border-l" : "",
                i === 0 ? "md:pl-0" : "",
                i === 3 ? "md:pr-0" : "",
              ].join(" ")}
            >
              <p
                className="text-[#f8f7f2] leading-none mb-1 uppercase"
                style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "clamp(1.2rem, 4vw, 1.6rem)" }}
              >
                {s.value}
              </p>
              <p
                className="text-[#5a5a55] text-[10px] tracking-[0.16em] uppercase font-medium leading-relaxed"
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
