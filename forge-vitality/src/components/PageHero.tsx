interface PageHeroProps {
  label: string;
  title: string | React.ReactNode;
  subtitle?: string;
  dark?: boolean;
}

export default function PageHero({ label, title, subtitle, dark = true }: PageHeroProps) {
  const bg = dark ? "bg-[#0f0f0d]" : "bg-[#f4f3ef]";
  const textCol = dark ? "text-[#fafaf8]" : "text-[#0f0f0d]";

  return (
    <section className={`${bg} pt-40 pb-20 lg:pt-52 lg:pb-28 relative overflow-hidden`}>
      {dark && (
        <>
          <div className="absolute inset-0 bg-gradient-to-br from-[#0f0f0d] via-[#1a1a17] to-[#0f0f0d]" />
          <div className="absolute bottom-0 right-0 w-[50%] h-[50%] bg-[#b8a882]/5 blur-[100px]" />
        </>
      )}
      <div className="relative z-10 max-w-[1400px] mx-auto px-8 lg:px-16">
        <p
          className="text-[#b8a882] text-[10px] tracking-[0.25em] uppercase font-light mb-8"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          {label}
        </p>
        <h1
          className={`${textCol} text-[clamp(3rem,7vw,7rem)] font-light leading-[0.92] tracking-[-0.02em] max-w-4xl`}
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          {title}
        </h1>
        {subtitle && (
          <p
            className="text-[#8a8a82] text-base font-light leading-relaxed max-w-lg mt-8"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
