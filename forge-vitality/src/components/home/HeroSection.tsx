import Image from "next/image";
import Button from "@/components/Button";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-[#0f0f0d] flex flex-col justify-end overflow-hidden">
      {/* Real background image with overlay */}
      <div className="absolute inset-0">
        <Image
          src="/img-training-hero.jpg"
          alt="The Forge Training"
          fill
          className="object-cover object-center"
          priority
          quality={90}
        />
        {/* Dark overlay — architectural gradient over image */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f0f0d]/95 via-[#0f0f0d]/75 to-[#0f0f0d]/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0d]/80 via-transparent to-[#0f0f0d]/40" />
        {/* Gold glow */}
        <div className="absolute bottom-0 right-0 w-[40%] h-[40%] bg-[#b8a882]/8 blur-[120px]" />
      </div>

      {/* Vertical side label */}
      <div className="absolute left-8 lg:left-16 top-1/2 -translate-y-1/2 hidden lg:flex items-center gap-4">
        <div className="h-px w-8 bg-[#b8a882]/40" />
        <span
          className="text-[#8a8a82] text-[9px] tracking-[0.3em] uppercase font-light"
          style={{ fontFamily: "'Inter', sans-serif", writingMode: "vertical-rl" }}
        >
          Bad Lippspringe · Paderborner Land
        </span>
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-8 lg:px-16 pb-24 lg:pb-32 pt-32">
        <div className="max-w-4xl">
          {/* Kicker */}
          <p
            className="text-[#b8a882] text-[10px] tracking-[0.25em] uppercase font-light mb-8"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Premium Performance Health Club
          </p>

          {/* Main headline — Playfair Display */}
          <h1
            className="text-[#fafaf8] text-[clamp(3.5rem,8vw,8rem)] font-normal leading-[0.92] tracking-[-0.025em] mb-10"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Trainiert.
            <br />
            <em className="text-[#b8a882]">Präzise.</em>
            <br />
            Beständig.
          </h1>

          {/* Subline */}
          <p
            className="text-[#c8c8bf] text-base font-light leading-relaxed max-w-lg mb-14"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            The Forge vereint funktionelles Training, ein exklusives Self Check Gym
            und Physiotherapie unter einem Dach — für Menschen, die Qualität über Lautstärke stellen.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button href="/membership" variant="primary">
              Mitglied werden
            </Button>
            <Button href="/training" variant="ghost">
              Training entdecken
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom status bar */}
      <div className="relative z-10 border-t border-[#b8a882]/10 bg-[#0f0f0d]/60 backdrop-blur-sm">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-16 py-6 flex flex-col sm:flex-row items-center gap-6 sm:gap-0 justify-between">
          {[
            { label: "Trainingswelten", value: "2" },
            { label: "Wöchentliche Kurse", value: "20+" },
            { label: "m² Premium Fläche", value: "800" },
            { label: "Erfahrung", value: "Seit 2024" },
          ].map((stat) => (
            <div key={stat.label} className="text-center sm:text-left">
              <p
                className="text-[#fafaf8] text-2xl font-normal tracking-tight mb-0.5"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {stat.value}
              </p>
              <p
                className="text-[#8a8a82] text-[10px] tracking-[0.14em] uppercase font-light"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
