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
        title={<>Komm vorbei.<br /><span className="text-[#c19255]">Wir freuen uns.</span></>}
        subtitle="Kein Druck, keine Verpflichtung beim ersten Besuch. Überzeug dich selbst."
      />

      <section className="bg-[#0d0d0b] py-24 lg:py-36">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

            {/* Contact info */}
            <div className="lg:col-span-4">
              <SectionLabel>Direkt erreichen</SectionLabel>

              <div className="flex flex-col gap-8">
                <div>
                  <p className="text-[#c19255] text-[10px] tracking-[0.2em] uppercase font-semibold mb-3" style={{ fontFamily: "'Inter', sans-serif" }}>
                    Adresse
                  </p>
                  <address className="not-italic text-[#f8f7f2] font-light leading-relaxed" style={{ fontFamily: "'Inter', sans-serif", fontSize: "15px" }}>
                    Auguste-Viktoria-Allee 19a<br />
                    33175 Bad Lippspringe<br />
                    Deutschland
                  </address>
                </div>

                <div>
                  <p className="text-[#c19255] text-[10px] tracking-[0.2em] uppercase font-semibold mb-3" style={{ fontFamily: "'Inter', sans-serif" }}>
                    Telefon
                  </p>
                  <a href="tel:+4952549362602" className="text-[#f8f7f2] hover:text-[#c19255] transition-colors font-light" style={{ fontFamily: "'Inter', sans-serif", fontSize: "18px" }}>
                    05254 / 9362602
                  </a>
                </div>

                <div>
                  <p className="text-[#c19255] text-[10px] tracking-[0.2em] uppercase font-semibold mb-3" style={{ fontFamily: "'Inter', sans-serif" }}>
                    E-Mail
                  </p>
                  <a href="mailto:mitgliederservice@vitality-lounge.de" className="text-[#f8f7f2] hover:text-[#c19255] transition-colors font-light" style={{ fontFamily: "'Inter', sans-serif", fontSize: "15px" }}>
                    mitgliederservice@vitality-lounge.de
                  </a>
                </div>

                <div>
                  <p className="text-[#c19255] text-[10px] tracking-[0.2em] uppercase font-semibold mb-3" style={{ fontFamily: "'Inter', sans-serif" }}>
                    Öffnungszeiten
                  </p>
                  <div className="flex flex-col gap-2">
                    {[
                      { day: "Mo – Fr", hours: "06:00 – 22:00" },
                      { day: "Sa", hours: "07:00 – 20:00" },
                      { day: "So", hours: "08:00 – 18:00" },
                    ].map((h) => (
                      <div key={h.day} className="flex justify-between border-b border-[#c19255]/8 pb-2">
                        <span className="text-[#8a8a82] text-[12px] font-light" style={{ fontFamily: "'Inter', sans-serif" }}>
                          {h.day}
                        </span>
                        <span className="text-[#f8f7f2] text-[12px] font-light" style={{ fontFamily: "'Inter', sans-serif" }}>
                          {h.hours}
                        </span>
                      </div>
                    ))}
                    <p className="text-[#5a5a55] text-[10px] font-light mt-1" style={{ fontFamily: "'Inter', sans-serif" }}>
                      Smart Gym: 05:00 – 23:00 Uhr · 365 Tage
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact form */}
            <div className="lg:col-span-8 bg-[#181816] p-10 lg:p-16 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#c19255] to-transparent opacity-60" />

              <SectionLabel>Nachricht senden</SectionLabel>
              <h2
                className="text-[#f8f7f2] uppercase leading-[0.9] tracking-[-0.01em] mb-10"
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 700,
                  fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
                }}
              >
                Was können wir für dich tun?
              </h2>

              <form className="flex flex-col gap-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[#c19255] text-[10px] tracking-[0.18em] uppercase font-semibold mb-2" style={{ fontFamily: "'Inter', sans-serif" }}>
                      Vorname
                    </label>
                    <input
                      type="text"
                      className="w-full bg-transparent border-b border-[#3e3e3a] py-3 text-[#f8f7f2] text-[14px] font-light outline-none focus:border-[#c19255] transition-colors"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                      placeholder="Max"
                    />
                  </div>
                  <div>
                    <label className="block text-[#c19255] text-[10px] tracking-[0.18em] uppercase font-semibold mb-2" style={{ fontFamily: "'Inter', sans-serif" }}>
                      Nachname
                    </label>
                    <input
                      type="text"
                      className="w-full bg-transparent border-b border-[#3e3e3a] py-3 text-[#f8f7f2] text-[14px] font-light outline-none focus:border-[#c19255] transition-colors"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                      placeholder="Mustermann"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[#c19255] text-[10px] tracking-[0.18em] uppercase font-semibold mb-2" style={{ fontFamily: "'Inter', sans-serif" }}>
                    E-Mail
                  </label>
                  <input
                    type="email"
                    className="w-full bg-transparent border-b border-[#3e3e3a] py-3 text-[#f8f7f2] text-[14px] font-light outline-none focus:border-[#c19255] transition-colors"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                    placeholder="max@example.de"
                  />
                </div>

                <div>
                  <label className="block text-[#c19255] text-[10px] tracking-[0.18em] uppercase font-semibold mb-2" style={{ fontFamily: "'Inter', sans-serif" }}>
                    Interesse
                  </label>
                  <select
                    className="w-full bg-[#181816] border-b border-[#3e3e3a] py-3 text-[#f8f7f2] text-[14px] font-light outline-none focus:border-[#c19255] transition-colors appearance-none cursor-pointer"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    <option value="">Bitte wählen</option>
                    <option>Probetraining</option>
                    <option>Vorverkaufsangebot</option>
                    <option>Mitgliedschaft anfragen</option>
                    <option>Personal Training</option>
                    <option>Physiotherapie-Termin</option>
                    <option>Allgemeine Frage</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[#c19255] text-[10px] tracking-[0.18em] uppercase font-semibold mb-2" style={{ fontFamily: "'Inter', sans-serif" }}>
                    Nachricht
                  </label>
                  <textarea
                    rows={5}
                    className="w-full bg-transparent border-b border-[#3e3e3a] py-3 text-[#f8f7f2] text-[14px] font-light outline-none focus:border-[#c19255] transition-colors resize-none"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                    placeholder="Wie können wir helfen?"
                  />
                </div>

                <div className="pt-2">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      required
                      className="mt-1 accent-[#c19255] cursor-pointer"
                    />
                    <span
                      className="text-[#8a8a82] text-[11px] leading-relaxed font-light"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      Ich habe die{" "}
                      <a href="/datenschutz" className="text-[#c19255] hover:underline">
                        Datenschutzerklärung
                      </a>{" "}
                      gelesen und stimme der Verarbeitung meiner Daten zur Bearbeitung meiner Anfrage zu. *
                    </span>
                  </label>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="bg-[#c19255] text-[#0d0d0b] text-[11px] tracking-[0.18em] uppercase font-semibold px-10 py-4 hover:bg-[#d4ab74] transition-colors"
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
