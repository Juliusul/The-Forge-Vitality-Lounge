import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Datenschutzerklärung – The Forge by Vitality Lounge",
  robots: { index: false },
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-10 pb-10 border-b border-[#c19255]/10 last:border-0">
      <h2
        className="text-[#f8f7f2] uppercase mb-4"
        style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "1.15rem", letterSpacing: "0.05em" }}
      >
        {title}
      </h2>
      <div
        className="text-[#b8b8b0] text-[13px] leading-[1.9] font-light flex flex-col gap-3"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        {children}
      </div>
    </div>
  );
}

export default function DatenschutzPage() {
  return (
    <>
      <PageHero
        label="Rechtliches"
        title={<>Datenschutz&shy;erklärung</>}
        subtitle="Informationen zur Verarbeitung personenbezogener Daten gemäß DSGVO"
      />

      <section className="bg-[#0d0d0b] py-24 lg:py-36">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
          <div className="max-w-2xl">

            <Section title="1. Verantwortlicher">
              <p>
                Vitality Lounge GmbH &amp; Co. KG<br />
                Zum Strothebach 22, 33175 Bad Lippspringe<br />
                Telefon: 05254 / 9362602<br />
                E-Mail:{" "}
                <a href="mailto:mitgliederservice@vitality-lounge.de" className="text-[#c19255] hover:underline">
                  mitgliederservice@vitality-lounge.de
                </a>
              </p>
            </Section>

            <Section title="2. Erhebung und Verarbeitung personenbezogener Daten">
              <p>
                Wir erheben personenbezogene Daten nur, wenn du uns diese freiwillig mitteilst —
                z. B. im Rahmen unseres Kontaktformulars (Name, E-Mail-Adresse, Nachricht).
              </p>
              <p>
                Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO
                (Vertragsanbahnung) sowie Art. 6 Abs. 1 lit. a DSGVO (Einwilligung).
              </p>
              <p>
                Wir speichern deine Anfrage-Daten so lange, wie es zur Bearbeitung notwendig
                ist, höchstens jedoch 3 Jahre.
              </p>
            </Section>

            <Section title="3. Cookies und lokale Speicherung">
              <p>
                Unsere Website verwendet <strong className="text-[#f8f7f2] font-medium">keine Tracking-Cookies</strong> ohne
                deine Einwilligung. Wir setzen ausschließlich folgende Technologien ein:
              </p>
              <ul className="list-none flex flex-col gap-2 pl-4">
                <li>
                  <span className="text-[#c19255]">Notwendig:</span>{" "}
                  Speicherung deiner Cookie-Einstellungen im <code className="text-[#c19255] text-[12px]">localStorage</code> deines
                  Browsers (kein Cookie, keine Übertragung an Server). Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO.
                </li>
                <li>
                  <span className="text-[#c19255]">Statistik (nur mit Einwilligung):</span>{" "}
                  Google Analytics — zur Analyse der Websitenutzung. Rechtsgrundlage: Art. 6 Abs. 1 lit. a DSGVO.
                </li>
                <li>
                  <span className="text-[#c19255]">Marketing (nur mit Einwilligung):</span>{" "}
                  Meta Pixel &amp; Google Tag Manager — für Conversion-Tracking und personalisierte Werbung.
                  Rechtsgrundlage: Art. 6 Abs. 1 lit. a DSGVO.
                </li>
              </ul>
              <p>
                Du kannst deine Einwilligung jederzeit widerrufen, indem du deinen
                Browser-Speicher löschst (<code className="text-[#c19255] text-[12px]">localStorage</code> → <code className="text-[#c19255] text-[12px]">cookie-consent</code>) oder die
                Seite im Inkognito-Modus aufrufst.
              </p>
            </Section>

            <Section title="4. Google Analytics">
              <p>
                Bei erteilter Einwilligung wird Google Analytics (Google Ireland Limited,
                Gordon House, Barrow Street, Dublin 4, Irland) eingesetzt. Google Analytics
                verarbeitet Nutzungsdaten (aufgerufene Seiten, Verweildauer, Herkunft) und
                setzt Cookies. Die IP-Adressen werden anonymisiert (<code className="text-[#c19255] text-[12px]">anonymize_ip: true</code>).
              </p>
              <p>
                Weitere Informationen:{" "}
                <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-[#c19255] hover:underline">
                  policies.google.com/privacy
                </a>
              </p>
            </Section>

            <Section title="5. Google Tag Manager">
              <p>
                Bei erteilter Einwilligung wird Google Tag Manager (Google Ireland Limited)
                eingesetzt. Der Tag Manager ermöglicht die Verwaltung von Website-Tags über
                eine Oberfläche. Google Tag Manager setzt selbst keine Cookies und erhebt
                keine personenbezogenen Daten.
              </p>
            </Section>

            <Section title="6. Meta Pixel (Facebook Pixel)">
              <p>
                Bei erteilter Einwilligung wird das Meta Pixel (Meta Platforms Ireland Limited,
                4 Grand Canal Square, Dublin 2, Irland) eingesetzt. Das Meta Pixel ermöglicht
                es, Besucher der Website als Zielgruppe für Werbung auf Facebook und Instagram
                anzusprechen sowie Conversions zu messen.
              </p>
              <p>
                Weitere Informationen:{" "}
                <a href="https://www.facebook.com/privacy/explanation" target="_blank" rel="noopener noreferrer" className="text-[#c19255] hover:underline">
                  facebook.com/privacy/explanation
                </a>
              </p>
            </Section>

            <Section title="7. Schriftarten (Self-hosted)">
              <p>
                Diese Website verwendet ausschließlich lokal eingebettete Schriftarten
                (Barlow, Barlow Condensed, Inter). Es werden keine Schriftarten von Google
                Fonts oder anderen externen CDNs geladen. Es erfolgt daher keine Datenübertragung
                an Drittanbieter beim Laden der Seite.
              </p>
            </Section>

            <Section title="8. Hosting">
              <p>
                Diese Website wird auf Servern eines Hosting-Anbieters betrieben. Beim Abruf
                der Website werden automatisch Server-Logfiles erfasst (IP-Adresse, Datum/Uhrzeit,
                aufgerufene Seite, Browser). Diese Daten dienen ausschließlich der technischen
                Bereitstellung und werden nicht mit anderen Daten verknüpft.
              </p>
            </Section>

            <Section title="9. Deine Rechte">
              <p>Du hast gemäß DSGVO folgende Rechte:</p>
              <ul className="list-none flex flex-col gap-1.5 pl-4">
                {[
                  "Auskunft (Art. 15 DSGVO)",
                  "Berichtigung (Art. 16 DSGVO)",
                  "Löschung (Art. 17 DSGVO)",
                  "Einschränkung der Verarbeitung (Art. 18 DSGVO)",
                  "Datenübertragbarkeit (Art. 20 DSGVO)",
                  "Widerspruch (Art. 21 DSGVO)",
                  "Widerruf einer Einwilligung (Art. 7 Abs. 3 DSGVO)",
                ].map((r) => (
                  <li key={r} className="flex gap-2">
                    <span className="text-[#c19255] mt-0.5">—</span>
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
              <p>
                Zur Ausübung deiner Rechte wende dich an:{" "}
                <a href="mailto:mitgliederservice@vitality-lounge.de" className="text-[#c19255] hover:underline">
                  mitgliederservice@vitality-lounge.de
                </a>
              </p>
              <p>
                Du hast zudem das Recht, dich bei der zuständigen Datenschutzaufsichtsbehörde
                zu beschweren (Landesbeauftragte für Datenschutz und Informationsfreiheit NRW).
              </p>
            </Section>

            <p className="text-[#5a5a55] text-[11px]" style={{ fontFamily: "'Inter', sans-serif" }}>
              Stand: März 2026
            </p>

          </div>
        </div>
      </section>
    </>
  );
}
