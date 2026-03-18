import PageHero from "@/components/PageHero";
import SectionLabel from "@/components/SectionLabel";
import Button from "@/components/Button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kursplan – The Forge by Vitality Lounge",
};

const days = ["Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"];

const schedule: Record<string, { time: string; name: string; coach: string; level: string }[]> = {
  Montag: [
    { time: "18:00", name: "Strength", coach: "Erik B.", level: "Alle" },
    { time: "19:30", name: "Conditioning", coach: "Erik B.", level: "Alle" },
  ],
  Dienstag: [
    { time: "06:30", name: "Conditioning", coach: "Enrico B.", level: "Alle" },
  ],
  Mittwoch: [
    { time: "18:00", name: "Strength", coach: "Erik B.", level: "Alle" },
    { time: "19:30", name: "Conditioning", coach: "Erik B.", level: "Alle" },
  ],
  Donnerstag: [
    { time: "06:30", name: "Conditioning", coach: "Erik B.", level: "Alle" },
  ],
  Freitag: [
    { time: "18:00", name: "Conditioning", coach: "Enrico B.", level: "Alle" },
  ],
  Samstag: [
    { time: "09:00", name: "Strength", coach: "Erik B.", level: "Alle" },
  ],
};

export default function TimetablePage() {
  return (
    <>
      <PageHero
        label="Kursplan"
        title={<>Deine Woche.<br /><span className="text-[#c19255]">Strukturiert.</span></>}
        subtitle="Strength & Conditioning — alle Sessions auf einen Blick. Max. 8 Teilnehmer pro Kurs."
      />

      <section className="bg-[#0d0d0b] py-24 lg:py-36">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
          <SectionLabel>Wochenübersicht</SectionLabel>

          {/* Timetable grid */}
          <div className="overflow-x-auto">
            <div className="min-w-[800px]">
              {/* Day headers */}
              <div className="grid grid-cols-6 gap-px bg-[#c19255]/10 mb-px">
                {days.map((day) => (
                  <div key={day} className="bg-[#1a1a16] px-4 py-4 border-b border-[#c19255]/20">
                    <p
                      className="text-[#c19255] text-[10px] tracking-[0.2em] uppercase font-semibold"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {day}
                    </p>
                  </div>
                ))}
              </div>

              {/* Schedule columns */}
              <div className="grid grid-cols-6 gap-px bg-[#c19255]/8">
                {days.map((day) => (
                  <div key={day} className="flex flex-col gap-px">
                    {(schedule[day] || []).map((slot, i) => (
                      <div
                        key={i}
                        className="bg-[#181816] p-4 hover:bg-[#1e1e1c] transition-colors group"
                      >
                        <p
                          className="text-[#c19255] text-[10px] tracking-[0.14em] font-semibold mb-1"
                          style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                          {slot.time}
                        </p>
                        <p
                          className="text-[#f8f7f2] uppercase mb-1 leading-tight group-hover:text-[#c19255] transition-colors"
                          style={{
                            fontFamily: "'Barlow Condensed', sans-serif",
                            fontWeight: 700,
                            fontSize: "13px",
                            letterSpacing: "0.03em",
                          }}
                        >
                          {slot.name}
                        </p>
                        <p
                          className="text-[#5a5a55] text-[10px] font-light"
                          style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                          {slot.coach} · {slot.level}
                        </p>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Legend */}
          <div className="mt-8 flex gap-6">
            {[
              { label: "Strength", detail: "75 min · Barbell Lifts" },
              { label: "Conditioning", detail: "60 min · Circuit · AMRAP · EMOM" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-[#c19255] rounded-full flex-shrink-0" />
                <span className="text-[#f8f7f2] text-[10px] tracking-[0.12em] uppercase font-semibold" style={{ fontFamily: "'Inter', sans-serif" }}>
                  {item.label}
                </span>
                <span className="text-[#5a5a55] text-[10px] font-light" style={{ fontFamily: "'Inter', sans-serif" }}>
                  — {item.detail}
                </span>
              </div>
            ))}
          </div>

          {/* Note */}
          <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <p className="text-[#5a5a55] text-[11px] font-light" style={{ fontFamily: "'Inter', sans-serif" }}>
              Kursänderungen werden 24h im Voraus kommuniziert. Max. 8 Teilnehmer pro Kurs.
            </p>
            <Button href="/contact" variant="outline">
              Platz reservieren
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
