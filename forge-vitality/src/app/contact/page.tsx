import PageHero from "@/components/PageHero";
import SectionLabel from "@/components/SectionLabel";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakt – The Forge by Vitality Lounge",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        label="Kontakt"
        title={<>Komm vorbei.<br /><em className="text-[#b8a882]">Wir freuen uns.</em></>}
        subtitle="Kein Druck, keine Verpflichtung beim ersten Besuch. Überzeug dich selbst."
      />

      <section className="bg-[#f4f3ef] py-24 lg:py-36">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

            {/* Contact info */}
            <div className="lg:col-span-4">
              <SectionLabel>Direkt erreichen</SectionLabel>

              <div className="flex flex-col gap-8">
                <div>
                  <p className="text-[#b8a882] text-[10px] tracking-[0.2em] uppercase font-light mb-2" style={{ fontFamily: "'Inter', sans-serif" }}>
                    Adresse
                  </p>
                  <address className="not-italic text-[#0f0f0d] text-sm font-light leading-relaxed" style={{ fontFamily: "'Playfair Display', serif", fontSize: "18px" }}>
                    Musterstraße 1<br />
                    33175 Bad Lippspringe<br />
                    Deutschland
                  </address>
                </div>

                <div>
                  <p className="text-[#b8a882] text-[10px] tracking-[0.2em] uppercase font-light mb-2" style={{ fontFamily: "'Inter', sans-serif" }}>
                    Telefon
                  </p>
                  <a href="tel:+4952529999999" className="text-[#0f0f0d] hover:text-[#b8a882] transition-colors font-light" style={{ fontFamily: "'Playfair Display', serif", fontSize: "20px" }}>
                    +49 5252 999 999
                  </a>
                </div>

                <div>
                  <p className="text-[#b8a882] text-[10px] tracking-[0.2em] uppercase font-light mb-2" style={{ fontFamily: "'Inter', sans-serif" }}>
                    E-Mail
                  </p>
                  <a href="mailto:info@theforge-vitality.de" className="text-[#0f0f0d] hover:text-[#b8a882] transition-colors font-light" style={{ fontFamily: "'Playfair Display', serif", fontSize: "18px" }}>
                    info@theforge-vitality.de
                  </a>
                </div>

                <div>
                  <p className="text-[#b8a882] text-[10px] tracking-[0.2em] uppercase font-light mb-3" style={{ fontFamily: "'Inter', sans-serif" }}>
                    Öffnungszeiten
                  </p>
                  <div className="flex flex-col gap-2">
                    {[
                      { day: "Mo – Fr", hours: "06:00 – 22:00" },
                      { day: "Sa", hours: "07:00 – 20:00" },
                      { day: "So", hours: "08:00 – 18:00" },
                    ].map((h) => (
                      <div key={h.day} className="flex justify-between">
                        <span className="text-[#8a8a82] text-[12px] font-light" style={{ fontFamily: "'Inter', sans-serif" }}>
                          {h.day}
                        </span>
                        <span className="text-[#0f0f0d] text-[12px] font-light" style={{ fontFamily: "'Inter', sans-serif" }}>
                          {h.hours}
                        </span>
                      </div>
                    ))}
                    <p className="text-[#8a8a82] text-[10px] font-light mt-1" style={{ fontFamily: "'Inter', sans-serif" }}>
                      Self Check Gym: 24/7 für Mitglieder
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact form */}
            <div className="lg:col-span-8 bg-[#fafaf8] p-10 lg:p-16">
              <SectionLabel>Nachricht senden</SectionLabel>
              <h2
                className="text-[#0f0f0d] text-[2rem] font-light leading-tight tracking-[-0.01em] mb-10"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Was können wir für dich tun?
              </h2>

              <form className="flex flex-col gap-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      className="block text-[#8a8a82] text-[10px] tracking-[0.18em] uppercase font-light mb-2"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      Vorname
                    </label>
                    <input
                      type="text"
                      className="w-full bg-transparent border-b border-[#c8c8bf] py-3 text-[#0f0f0d] text-[14px] font-light outline-none focus:border-[#b8a882] transition-colors"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                      placeholder="Max"
                    />
                  </div>
                  <div>
                    <label
                      className="block text-[#8a8a82] text-[10px] tracking-[0.18em] uppercase font-light mb-2"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      Nachname
                    </label>
                    <input
                      type="text"
                      className="w-full bg-transparent border-b border-[#c8c8bf] py-3 text-[#0f0f0d] text-[14px] font-light outline-none focus:border-[#b8a882] transition-colors"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                      placeholder="Mustermann"
                    />
                  </div>
                </div>

                <div>
                  <label
                    className="block text-[#8a8a82] text-[10px] tracking-[0.18em] uppercase font-light mb-2"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    E-Mail
                  </label>
                  <input
                    type="email"
                    className="w-full bg-transparent border-b border-[#c8c8bf] py-3 text-[#0f0f0d] text-[14px] font-light outline-none focus:border-[#b8a882] transition-colors"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                    placeholder="max@example.de"
                  />
                </div>

                <div>
                  <label
                    className="block text-[#8a8a82] text-[10px] tracking-[0.18em] uppercase font-light mb-2"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    Interesse
                  </label>
                  <select
                    className="w-full bg-transparent border-b border-[#c8c8bf] py-3 text-[#0f0f0d] text-[14px] font-light outline-none focus:border-[#b8a882] transition-colors appearance-none cursor-pointer"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    <option value="">Bitte wählen</option>
                    <option>Probetraining</option>
                    <option>Mitgliedschaft anfragen</option>
                    <option>Physiotherapie-Termin</option>
                    <option>Allgemeine Frage</option>
                    <option>Firmenkonditionen</option>
                  </select>
                </div>

                <div>
                  <label
                    className="block text-[#8a8a82] text-[10px] tracking-[0.18em] uppercase font-light mb-2"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    Nachricht
                  </label>
                  <textarea
                    rows={5}
                    className="w-full bg-transparent border-b border-[#c8c8bf] py-3 text-[#0f0f0d] text-[14px] font-light outline-none focus:border-[#b8a882] transition-colors resize-none"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                    placeholder="Wie können wir helfen?"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="bg-[#b8a882] text-[#0f0f0d] text-[11px] tracking-[0.18em] uppercase font-light px-10 py-4 hover:bg-[#d4c9a8] transition-colors"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    Nachricht senden
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
