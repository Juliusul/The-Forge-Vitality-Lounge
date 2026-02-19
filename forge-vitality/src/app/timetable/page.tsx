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
    { time: "06:30", name: "Functional Flow", coach: "Sarah M.", level: "Alle" },
    { time: "09:00", name: "Mobility & Reset", coach: "Lena B.", level: "Alle" },
    { time: "12:00", name: "Open Floor", coach: "Thomas K.", level: "Ab Mittel" },
    { time: "18:00", name: "Strength Lab", coach: "Thomas K.", level: "Fortg." },
    { time: "19:30", name: "Cardio Conditioning", coach: "Sarah M.", level: "Alle" },
  ],
  Dienstag: [
    { time: "06:30", name: "Strength Lab", coach: "Thomas K.", level: "Fortg." },
    { time: "09:00", name: "Functional Flow", coach: "Lena B.", level: "Alle" },
    { time: "18:00", name: "Athletic Performance", coach: "Thomas K.", level: "Fortg." },
    { time: "19:30", name: "Mobility & Reset", coach: "Lena B.", level: "Alle" },
  ],
  Mittwoch: [
    { time: "06:30", name: "Functional Flow", coach: "Sarah M.", level: "Alle" },
    { time: "10:00", name: "Cardio Conditioning", coach: "Sarah M.", level: "Alle" },
    { time: "12:00", name: "Open Floor", coach: "Thomas K.", level: "Ab Mittel" },
    { time: "18:00", name: "Functional Flow", coach: "Lena B.", level: "Alle" },
    { time: "19:30", name: "Strength Lab", coach: "Thomas K.", level: "Fortg." },
  ],
  Donnerstag: [
    { time: "06:30", name: "Mobility & Reset", coach: "Lena B.", level: "Alle" },
    { time: "09:00", name: "Athletic Performance", coach: "Thomas K.", level: "Fortg." },
    { time: "18:00", name: "Cardio Conditioning", coach: "Sarah M.", level: "Alle" },
    { time: "19:30", name: "Functional Flow", coach: "Sarah M.", level: "Alle" },
  ],
  Freitag: [
    { time: "06:30", name: "Strength Lab", coach: "Thomas K.", level: "Fortg." },
    { time: "09:00", name: "Functional Flow", coach: "Lena B.", level: "Alle" },
    { time: "12:00", name: "Open Floor", coach: "Sarah M.", level: "Ab Mittel" },
    { time: "18:00", name: "Mobility & Reset", coach: "Lena B.", level: "Alle" },
  ],
  Samstag: [
    { time: "08:00", name: "Functional Flow", coach: "Sarah M.", level: "Alle" },
    { time: "09:30", name: "Strength Lab", coach: "Thomas K.", level: "Fortg." },
    { time: "11:00", name: "Mobility & Reset", coach: "Lena B.", level: "Alle" },
  ],
};

export default function TimetablePage() {
  return (
    <>
      <PageHero
        label="Kursplan"
        title={<>Deine Woche.<br /><em className="text-[#b8a882]">Strukturiert.</em></>}
        subtitle="Alle Kurse auf einen Blick. Buche deinen Platz rechtzeitig — Kursgrößen sind bewusst klein gehalten."
      />

      <section className="bg-[#f4f3ef] py-24 lg:py-36">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
          <SectionLabel>Wochenübersicht</SectionLabel>

          {/* Timetable grid */}
          <div className="overflow-x-auto">
            <div className="min-w-[800px]">
              {/* Day headers */}
              <div className="grid grid-cols-6 gap-px bg-[#c8c8bf]/40 mb-px">
                {days.map((day) => (
                  <div key={day} className="bg-[#0f0f0d] px-4 py-4">
                    <p
                      className="text-[#fafaf8] text-[10px] tracking-[0.18em] uppercase font-light"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {day}
                    </p>
                  </div>
                ))}
              </div>

              {/* Schedule columns */}
              <div className="grid grid-cols-6 gap-px bg-[#c8c8bf]/40">
                {days.map((day) => (
                  <div key={day} className="flex flex-col gap-px">
                    {(schedule[day] || []).map((slot, i) => (
                      <div
                        key={i}
                        className="bg-[#fafaf8] p-4 hover:bg-[#f4f3ef] transition-colors"
                      >
                        <p
                          className="text-[#b8a882] text-[10px] tracking-[0.14em] font-light mb-1"
                          style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                          {slot.time}
                        </p>
                        <p
                          className="text-[#0f0f0d] text-[12px] font-light leading-tight mb-1"
                          style={{ fontFamily: "'Playfair Display', serif", fontSize: "14px" }}
                        >
                          {slot.name}
                        </p>
                        <p
                          className="text-[#8a8a82] text-[10px] font-light"
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

          {/* Note */}
          <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <p className="text-[#8a8a82] text-[11px] font-light" style={{ fontFamily: "'Inter', sans-serif" }}>
              Kursänderungen werden 24h im Voraus via App kommuniziert. Max. 8–12 Personen pro Kurs.
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
