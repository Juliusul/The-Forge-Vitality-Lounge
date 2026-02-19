import SectionLabel from "@/components/SectionLabel";
import Button from "@/components/Button";

const coaches = [
  {
    name: "Sarah Müller",
    role: "Head Coach · Functional Training",
    bg: "bg-[#242420]",
    initials: "SM",
    credentials: "B.Sc. Sportwissenschaft · Functional Range Conditioning",
  },
  {
    name: "Thomas Kraft",
    role: "Strength & Conditioning",
    bg: "bg-[#1a1a17]",
    initials: "TK",
    credentials: "M.Sc. Bewegungswissenschaft · NSCA CSCS",
  },
  {
    name: "Lena Berger",
    role: "Mobility & Recovery",
    bg: "bg-[#2a2a26]",
    initials: "LB",
    credentials: "Physiotherapeutin · Yoga Alliance 500h",
  },
];

export default function CoachesPreview() {
  return (
    <section className="bg-[#0f0f0d] py-28 lg:py-40">
      <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 lg:mb-24 gap-8">
          <div>
            <SectionLabel>Das Team</SectionLabel>
            <h2
              className="text-[#fafaf8] text-[clamp(2rem,4vw,4rem)] font-light leading-[0.95] tracking-[-0.02em]"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Menschen,
              <br />
              denen du vertrauen
              <br />
              <em className="text-[#b8a882]">kannst.</em>
            </h2>
          </div>
          <Button href="/coaches" variant="ghost" className="self-start sm:self-auto">
            Alle Coaches
          </Button>
        </div>

        {/* Coach cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#b8a882]/10">
          {coaches.map((coach) => (
            <div
              key={coach.name}
              className={`${coach.bg} p-10 group hover:bg-[#2a2a26] transition-colors duration-500`}
            >
              {/* Avatar placeholder */}
              <div className="w-16 h-16 border border-[#b8a882]/30 flex items-center justify-center mb-8 group-hover:border-[#b8a882]/60 transition-colors">
                <span
                  className="text-[#b8a882] text-lg font-light tracking-wider"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {coach.initials}
                </span>
              </div>

              <h3
                className="text-[#fafaf8] text-xl font-light mb-2 tracking-tight"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {coach.name}
              </h3>
              <p
                className="text-[#b8a882] text-[10px] tracking-[0.16em] uppercase font-light mb-6"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {coach.role}
              </p>
              <div className="h-px w-8 bg-[#b8a882]/30 mb-6" />
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
