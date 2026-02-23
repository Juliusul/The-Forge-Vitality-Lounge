import SectionLabel from "@/components/SectionLabel";
import Button from "@/components/Button";

const coaches = [
  {
    name: "Sarah Müller",
    role: "Head Coach · Functional Training",
    bg: "bg-[#181816]",
    initials: "SM",
    credentials: "B.Sc. Sportwissenschaft · Functional Range Conditioning",
  },
  {
    name: "Thomas Kraft",
    role: "Strength & Conditioning",
    bg: "bg-[#1a1a18]",
    initials: "TK",
    credentials: "M.Sc. Bewegungswissenschaft · NSCA CSCS",
  },
  {
    name: "Lena Berger",
    role: "Mobility & Recovery",
    bg: "bg-[#181816]",
    initials: "LB",
    credentials: "Physiotherapeutin · Yoga Alliance 500h",
  },
];

export default function CoachesPreview() {
  return (
    <section className="bg-[#0d0d0b] py-24 lg:py-36 relative overflow-hidden">
      {/* Subtle bg glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-[40%] bg-[#c19255]/3 blur-[150px]" />

      <div className="max-w-[1440px] mx-auto px-8 lg:px-16 relative z-10">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 lg:mb-20 gap-8">
          <div>
            <SectionLabel>Das Team</SectionLabel>
            <h2
              className="text-[#f8f7f2] uppercase leading-[0.9] tracking-[-0.01em]"
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 800,
                fontSize: "clamp(2.8rem, 6vw, 5.5rem)",
              }}
            >
              Menschen,{" "}
              <span className="text-[#c19255]">denen</span>
              <br />
              du vertrauen kannst.
            </h2>
          </div>
          <Button href="/coaches" variant="ghost" className="self-start sm:self-auto">
            Alle Coaches
          </Button>
        </div>

        {/* Coach cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#c19255]/10">
          {coaches.map((coach) => (
            <div
              key={coach.name}
              className={`${coach.bg} p-10 group hover:bg-[#222220] transition-colors duration-500 relative overflow-hidden`}
            >
              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-[#c19255]/50 via-[#c19255]/20 to-transparent" />

              {/* Avatar */}
              <div className="w-14 h-14 border border-[#c19255]/25 flex items-center justify-center mb-8 group-hover:border-[#c19255]/60 transition-colors duration-300">
                <span
                  className="text-[#c19255] font-semibold tracking-wider"
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 700,
                    fontSize: "1rem",
                    letterSpacing: "0.1em",
                  }}
                >
                  {coach.initials}
                </span>
              </div>

              <h3
                className="text-[#f8f7f2] uppercase mb-2 tracking-wide"
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 700,
                  fontSize: "1.25rem",
                  letterSpacing: "0.04em",
                }}
              >
                {coach.name}
              </h3>

              <p
                className="text-[#c19255] text-[10px] tracking-[0.18em] uppercase font-semibold mb-6"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {coach.role}
              </p>

              <div className="h-px w-8 bg-[#c19255]/30 mb-6 group-hover:w-14 group-hover:bg-[#c19255]/60 transition-all duration-300" />

              <p
                className="text-[#8a8a82] text-[11px] font-light leading-relaxed"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {coach.credentials}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
