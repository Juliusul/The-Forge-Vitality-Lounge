export default function VideoSection() {
  return (
    <section className="relative bg-[#0d0d0b] overflow-hidden">
      {/* Label */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-8 lg:px-16 pt-16 pb-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-px bg-[#c19255]" />
          <span
            className="text-[#c19255] text-[11px] tracking-[0.22em] uppercase font-medium"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Der Bereich
          </span>
        </div>
      </div>

      {/* Video */}
      <div className="relative w-full aspect-video max-h-[85vh] overflow-hidden">
        <video
          src="/video-hybrid-fitness.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          aria-label="The Forge Hybrid Fitness Bereich Bad Lippspringe"
        />
        {/* Subtle dark vignette edges */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0b]/60 via-transparent to-[#0d0d0b]/20 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d0d0b]/20 via-transparent to-[#0d0d0b]/20 pointer-events-none" />
      </div>
    </section>
  );
}
