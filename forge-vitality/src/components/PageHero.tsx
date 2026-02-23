interface PageHeroProps {
  label: string;
  title: string | React.ReactNode;
  subtitle?: string;
  dark?: boolean;
}

export default function PageHero({ label, title, subtitle, dark = true }: PageHeroProps) {
  const bg = dark ? "bg-[#0d0d0b]" : "bg-[#f0efeb]";
  const textCol = dark ? "text-[#f8f7f2]" : "text-[#0d0d0b]";

  return (
    <section className={`${bg} pt-40 pb-20 lg:pt-52 lg:pb-28 relative overflow-hidden`}>
      {dark && (
        <>
          {/* Left gold bar */}
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-[#c19255] to-transparent opacity-40" />
          {/* Subtle gold glow */}
          <div className="absolute bottom-0 right-0 w-[40%] h-[60%] bg-[#c19255]/4 blur-[120px]" />
        </>
      )}
      <div className="relative z-10 max-w-[1400px] mx-auto px-8 lg:px-16">
        {/* Label */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-5 h-px bg-[#c19255] flex-shrink-0" />
          <p
            className="text-[#c19255] text-[10px] tracking-[0.22em] uppercase font-semibold"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            {label}
          </p>
        </div>

        {/* Title */}
        <h1
          className={`${textCol} leading-[0.9] tracking-[-0.01em] uppercase max-w-4xl`}
          style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: 800,
            fontSize: "clamp(3.5rem, 9vw, 8rem)",
          }}
        >
          {title}
        </h1>

        {subtitle && (
          <p
            className={`${dark ? "text-[#8a8a82]" : "text-[#6a6a62]"} text-[15px] font-light leading-relaxed max-w-lg mt-8`}
            style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 300 }}
          >
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
